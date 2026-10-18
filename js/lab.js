// lab.js — body lab (S6) and model limits (S6a), plus the shared chart drawer.
// Every slider change recomputes ALL outputs from the model's rules (FR-13), deterministically.

import { engine, el, clear, openDialog } from "./engine.js";
import { evaluate } from "./rules.js";
import { compute } from "./score.js";

// lab.evaluate(model, {I: 7, R: 0}) → {B: 38.6, H: 152.5, D: 7.3}
export function evaluateModel(model, inputs) {
  const out = {};
  for (const o of model.outputs) out[o.key] = evaluate(model.rules[o.key], inputs);
  // Optional recovery: the output decays halfway back toward rest every halfLife seconds.
  const rec = model.rules.recovery;
  if (rec && inputs[rec.input] > 0) {
    for (const key of rec.applyTo) {
      const rest = rec.restValues[key];
      out[key] = rest + (out[key] - rest) * Math.pow(0.5, inputs[rec.input] / rec.halfLifeSeconds);
    }
  }
  return out;
}

// Five points of the model curve for the chart: output y across the primary input's range.
export function curve(model, n = 5) {
  const p = model.inputs.primary;
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = p.min + ((p.max - p.min) * i) / (n - 1);
    const inputs = { [p.key]: x };
    if (model.inputs.secondary) inputs[model.inputs.secondary.key] = 0;
    pts.push({ x, y: evaluateModel(model, inputs)[model.chart.y] });
  }
  return pts;
}

const COLOURS = { teal: "#1B998B", coral: "#E4572E", amber: "#F4A300", purple: "#6C4AB6", blue: "#2E86DE", navy: "#16213E" };

// Draw the model curve (solid, system colour), the sketch (dashed amber) and a "now" marker.
export function drawChart(canvas, model, { sketch = null, now = null, colour = "teal" } = {}) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const PAD = { l: 40, r: 16, t: 14, b: 30 };
  const plotW = w - PAD.l - PAD.r, plotH = h - PAD.t - PAD.b;
  const pts = curve(model);
  const yMin = model.chart.yMin ?? 0;
  const yMax = model.chart.yMax ?? Math.max(...pts.map((p) => p.y)) * 1.1;
  const px = (i) => PAD.l + (plotW * i) / 4;
  const py = (v) => PAD.t + plotH * (1 - (v - yMin) / (yMax - yMin));

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "#D5DEEC"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD.l, PAD.t); ctx.lineTo(PAD.l, h - PAD.b); ctx.lineTo(w - PAD.r, h - PAD.b); ctx.stroke();
  ctx.fillStyle = "#4A5876"; ctx.font = "600 12px Nunito, system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(String(Math.round(yMax)), PAD.l - 6, PAD.t + 10);
  ctx.fillText(String(Math.round(yMin)), PAD.l - 6, h - PAD.b);
  ctx.textAlign = "center";
  const ticks = model.inputs.primary.ticks || [];
  ticks.forEach((t, k) => ctx.fillText(t, px(k * (4 / Math.max(1, ticks.length - 1))), h - 8));

  // sketch (dashed amber), mapped from 0–1 onto the plot height
  if (sketch) {
    ctx.strokeStyle = COLOURS.amber; ctx.lineWidth = 3; ctx.setLineDash([8, 6]);
    ctx.beginPath();
    sketch.forEach((v, i) => { const yy = PAD.t + plotH * (1 - v); i === 0 ? ctx.moveTo(px(i), yy) : ctx.lineTo(px(i), yy); });
    ctx.stroke(); ctx.setLineDash([]);
  }
  // model curve (solid)
  ctx.strokeStyle = COLOURS[colour] || COLOURS.teal; ctx.lineWidth = 4;
  ctx.beginPath();
  pts.forEach((p, i) => (i === 0 ? ctx.moveTo(px(i), py(p.y)) : ctx.lineTo(px(i), py(p.y))));
  ctx.stroke();
  // "now" marker at the slider's current input
  if (now !== null) {
    const p = model.inputs.primary;
    const frac = (now.x - p.min) / (p.max - p.min);
    const xx = PAD.l + plotW * frac;
    ctx.strokeStyle = "#16213E"; ctx.setLineDash([3, 4]); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(xx, PAD.t); ctx.lineTo(xx, h - PAD.b); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(xx, py(now.y), 7, 0, Math.PI * 2); ctx.fillStyle = "#16213E"; ctx.fill();
  }
}

// ---------- S6 body lab ----------

let animFrame = null;

export function install() {
  engine.on("S6", { enter: renderLab });
  document.getElementById("limits-link").addEventListener("click", openLimits);
  document.getElementById("limits-link-2").addEventListener("click", openLimits);
}

function renderLab() {
  const c = engine.caseFile, m = engine.model, st = engine.state;
  const p = m.inputs.primary;
  const slider = document.getElementById("lab-primary");
  slider.min = p.min; slider.max = p.max; slider.step = p.step;
  if (st.lab.primary === null) st.lab.primary = c.labDefaults.primary;
  slider.value = st.lab.primary;
  document.getElementById("lab-primary-label").textContent = p.label;
  const ticks = document.getElementById("lab-ticks"); clear(ticks);
  (p.ticks || []).forEach((t) => ticks.appendChild(el("span", {}, t)));

  // Prediction score is computed once, on entry (S6 never changes it).
  const score = compute(c, st);
  document.getElementById("lab-pred-score").textContent = `${score.prediction} of 25`;
  document.getElementById("lab-pred-rule").textContent = score.rules.prediction;
  document.getElementById("lab-sketch-note").textContent = st.sketchMode === "preset"
    ? "Your preset shape is the dashed amber line." : "Your drawing is the dashed amber line.";

  const canvas = document.getElementById("lab-chart");
  const numbers = document.getElementById("lab-numbers");
  const outputs = m.outputs;

  function update() {
    const value = Number(slider.value);
    st.lab.primary = value;
    if (!st.lab.intensitiesTried.includes(value)) st.lab.intensitiesTried.push(value);
    const inputs = { [p.key]: value };
    if (m.inputs.secondary) inputs[m.inputs.secondary.key] = st.lab.secondary || 0;
    const out = evaluateModel(m, inputs);
    document.getElementById("lab-primary-value").textContent = `${value}${p.ticks ? " · " + tickFor(p, value) : ""}`;
    clear(numbers);
    for (const o of outputs) {
      const box = el("div", { class: "num", "data-colour": o.colour });
      box.appendChild(el("b", {}, out[o.key].toFixed(o.decimals ?? 0)));
      box.appendChild(el("span", {}, `${o.label} (${o.unit})`));
      numbers.appendChild(box);
    }
    drawChart(canvas, m, { sketch: st.sketch, now: { x: value, y: out[m.chart.y] }, colour: m.colour });
    animate(out);
    canvas.setAttribute("aria-label", `Chart: ${m.chart.yLabel} against ${m.chart.xLabel}. At ${p.label.toLowerCase()} ${value}, the model gives ${out[m.chart.y].toFixed(0)}.`);
  }
  slider.oninput = update;
  update();

  engine.footer({
    back: null,                        // never back to the sketch (§6)
    status: "Slide to change the effort and watch the body respond.",
    primary: "I see it — explain it",
    onPrimary: () => { stopAnimation(); engine.go("S7"); }
  });
}

function tickFor(p, value) {
  const t = p.ticks; if (!t || !t.length) return "";
  const idx = Math.round(((value - p.min) / (p.max - p.min)) * (t.length - 1));
  return t[idx];
}

// Lungs scale 1.0→1.08 at B per minute, heart 1.0→1.12 at H per minute; muscles brighten with D.
function animate(out) {
  stopAnimation();
  const lungs = document.getElementById("ov-lungs");
  const heart = document.getElementById("ov-heart");
  const legs = document.getElementById("ov-legs");
  if (legs) legs.style.opacity = String(0.35 + 0.65 * Math.min(1, (out.D - 1) / 9));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { lungs.style.transform = ""; heart.style.transform = ""; return; }
  const bPeriod = 60 / Math.max(1, out.B);   // seconds per breath
  const hPeriod = 60 / Math.max(1, out.H);   // seconds per beat
  const t0 = performance.now();
  function frame(now) {
    const t = (now - t0) / 1000;
    const bs = 1 + 0.08 * (0.5 + 0.5 * Math.sin((2 * Math.PI * t) / bPeriod));
    const hs = 1 + 0.12 * Math.max(0, Math.sin((2 * Math.PI * t) / hPeriod)) ** 3;
    lungs.style.transform = `scale(${bs.toFixed(3)})`;
    heart.style.transform = `scale(${hs.toFixed(3)})`;
    animFrame = requestAnimationFrame(frame);
  }
  animFrame = requestAnimationFrame(frame);
}
function stopAnimation() { if (animFrame) cancelAnimationFrame(animFrame); animFrame = null; }

// ---------- S6a model limits ----------

function openLimits() {
  const m = engine.model, c = engine.caseFile;
  const dlg = document.getElementById("limits-sheet");
  document.getElementById("limits-title").textContent = `Model limits: ${m.name}`;
  const does = document.getElementById("limits-does"); clear(does);
  m.limits.does.forEach((t) => does.appendChild(el("li", {}, t)));
  const doesnt = document.getElementById("limits-doesnt"); clear(doesnt);
  m.limits.doesnt.forEach((t) => doesnt.appendChild(el("li", {}, t)));
  const f = document.getElementById("limits-formulas"); clear(f);
  for (const o of m.outputs) {
    const li = el("li");
    li.appendChild(el("b", {}, `${o.label}: `));
    li.appendChild(el("code", {}, `${o.key} = ${m.rules[o.key]}`));
    f.appendChild(li);
  }
  document.getElementById("limits-text").textContent = m.limits.text;
  document.getElementById("limits-wellbeing").textContent = m.limits.wellbeing;
  document.getElementById("limits-reviewer").textContent = c.reviewed
    ? `Science review: ${c.reviewed.by}, ${c.reviewed.on}.`
    : "Science review: pending — this case has not yet been signed off by a teacher.";
  const s = document.getElementById("limits-sources"); clear(s);
  m.sources.forEach((t) => s.appendChild(el("li", {}, t)));
  openDialog(dlg);
}
