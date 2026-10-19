// lab.js — body lab (S6) and model limits (S6a), plus the shared chart drawer.
// Every slider change recomputes ALL outputs from the model's rules (FR-13), deterministically.
//
// Model file contract used here:
//   inputs.primary / inputs.secondary  { key, label, min, max, step, ticks?, unit? }
//   constants                           { name: number }  — fixed values a formula may use
//   outputs[]                           { key, label, unit, colour, decimals?, bands?: [{upTo, text}], text? }
//   rules                               { outputKey: "expression" }
//   chart                               { x, y, xLabel, yLabel, yMin, yMax, xMin?, xMax?, xTicks? }
//     chart.x may be an input key (sweeps that slider's range) or any variable with xMin/xMax (e.g. hours)
//   overlay                             see overlay.js

import { engine, el, clear, openDialog } from "./engine.js";
import { evaluate } from "./rules.js";
import { compute } from "./score.js";
import * as overlay from "./overlay.js";

// lab.evaluate(model, {I: 7, R: 0}) → {B: 38.6, H: 152.5, D: 7.3}
export function evaluateModel(model, inputs) {
  const vars = { ...(model.constants || {}), ...inputs };
  const out = {};
  for (const o of model.outputs) {
    if (o.text !== undefined) { out[o.key] = o.text; continue; }   // a constant word, e.g. core "steady"
    out[o.key] = evaluate(model.rules[o.key], vars);
  }
  return out;
}

// The word shown for an output: a band label if the model defines bands, else the number.
export function display(model, output, value) {
  if (typeof value === "string") return value;
  if (output.bands) {
    for (const b of output.bands) if (b.upTo === undefined || value <= b.upTo) return b.text;
    return output.bands[output.bands.length - 1].text;
  }
  const d = output.decimals ?? 0;
  return d === 0 ? Math.round(value).toLocaleString("en-US") : Number(value).toFixed(d);
}

function chartRange(model) {
  const c = model.chart;
  const p = model.inputs.primary, s = model.inputs.secondary;
  if (c.x === p.key) return { min: p.min, max: p.max, ticks: c.xTicks || p.ticks || [] };
  if (s && c.x === s.key) return { min: s.min, max: s.max, ticks: c.xTicks || s.ticks || [] };
  return { min: c.xMin ?? 0, max: c.xMax ?? 1, ticks: c.xTicks || [] };
}

// Five points of the model curve: output chart.y as chart.x sweeps its range, other inputs held.
export function curve(model, inputs = {}, n = 5) {
  const r = chartRange(model);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = r.min + ((r.max - r.min) * i) / (n - 1);
    pts.push({ x, y: evaluateModel(model, { ...defaultInputs(model), ...inputs, [model.chart.x]: x })[model.chart.y] });
  }
  return pts;
}

function defaultInputs(model) {
  const d = {};
  const p = model.inputs.primary; d[p.key] = p.min;
  const s = model.inputs.secondary; if (s) d[s.key] = s.default ?? s.min;
  if (model.chart && model.chart.xNow !== undefined) d[model.chart.x] = model.chart.xNow;
  return d;
}

const COLOURS = { teal: "#1B998B", coral: "#E4572E", amber: "#F4A300", purple: "#6C4AB6", blue: "#2E86DE", navy: "#16213E" };

// Draw the model curve (solid, system colour), the sketch (dashed amber) and a "now" marker.
export function drawChart(canvas, model, { sketch = null, inputs = {}, now = null, colour = "teal" } = {}) {
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const PAD = { l: 40, r: 16, t: 14, b: 30 };
  const plotW = w - PAD.l - PAD.r, plotH = h - PAD.t - PAD.b;
  const pts = curve(model, inputs);
  const r = chartRange(model);
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
  const ticks = r.ticks;
  ticks.forEach((t, k) => { ctx.textAlign = k === 0 ? "left" : k === ticks.length - 1 ? "right" : "center"; ctx.fillText(t, px(k * (4 / Math.max(1, ticks.length - 1))), h - 8); });

  if (sketch) {
    ctx.strokeStyle = COLOURS.amber; ctx.lineWidth = 3; ctx.setLineDash([8, 6]);
    ctx.beginPath();
    sketch.forEach((v, i) => { const yy = PAD.t + plotH * (1 - v); i === 0 ? ctx.moveTo(px(i), yy) : ctx.lineTo(px(i), yy); });
    ctx.stroke(); ctx.setLineDash([]);
  }
  ctx.strokeStyle = COLOURS[colour] || COLOURS.teal; ctx.lineWidth = 4;
  ctx.beginPath();
  pts.forEach((p, i) => (i === 0 ? ctx.moveTo(px(i), py(p.y)) : ctx.lineTo(px(i), py(p.y))));
  ctx.stroke();
  if (now !== null) {
    const frac = (now.x - r.min) / (r.max - r.min);
    const xx = PAD.l + plotW * Math.max(0, Math.min(1, frac));
    ctx.strokeStyle = "#16213E"; ctx.setLineDash([3, 4]); ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(xx, PAD.t); ctx.lineTo(xx, h - PAD.b); ctx.stroke(); ctx.setLineDash([]);
    ctx.beginPath(); ctx.arc(xx, py(now.y), 7, 0, Math.PI * 2); ctx.fillStyle = "#16213E"; ctx.fill();
  }
}

// ---------- S6 body lab ----------

let ov = null;

export function install() {
  engine.on("S6", { enter: renderLab, leave: () => { if (ov) ov.stop(); } });
  document.getElementById("limits-link").addEventListener("click", openLimits);
  document.getElementById("limits-link-2").addEventListener("click", openLimits);
}

function setupSlider(id, spec, value) {
  const slider = document.getElementById(id);
  slider.min = spec.min; slider.max = spec.max; slider.step = spec.step; slider.value = value;
  document.getElementById(id + "-label").textContent = spec.label;
  const ticks = document.getElementById(id + "-ticks"); clear(ticks);
  (spec.ticks || []).forEach((t) => ticks.appendChild(el("span", {}, t)));
  return slider;
}

// The number shown next to a slider: the raw value, or an optional display formula (e.g. distance = far - k).
function shownValue(spec, value, vars) {
  const v = spec.valueFormula ? evaluate(spec.valueFormula, vars) : value;
  const num = Number.isInteger(v) ? String(v) : String(Math.round(v * 10) / 10);
  const tick = spec.ticks && !spec.unit ? tickFor(spec, value) : "";
  // Show the tick word only when it is a word ("bright beach"), never a number that could disagree with the value.
  return `${num}${spec.unit ? " " + spec.unit : ""}${tick && !/\d/.test(tick) ? " · " + tick : ""}`;
}

function tickFor(spec, value) {
  const t = spec.ticks; if (!t || !t.length) return "";
  const idx = Math.round(((value - spec.min) / (spec.max - spec.min)) * (t.length - 1));
  return t[idx];
}

function renderLab() {
  const c = engine.caseFile, m = engine.model, st = engine.state;
  const p = m.inputs.primary, s = m.inputs.secondary;

  if (st.lab.primary === null) st.lab.primary = c.labDefaults.primary;
  if (st.lab.secondary === null || st.lab.secondary === undefined) st.lab.secondary = c.labDefaults.secondary ?? (s ? (s.default ?? s.min) : 0);
  const primary = setupSlider("lab-primary", p, st.lab.primary);
  const secondBlock = document.getElementById("lab-secondary-block");
  secondBlock.hidden = !s;
  const secondary = s ? setupSlider("lab-secondary", s, st.lab.secondary) : null;

  // overlay from the model file
  ov = overlay.mount(document.getElementById("lab-overlay"), m.overlay || { base: "torso", parts: [] });
  document.getElementById("lab-overlay-wrap").dataset.colour = m.colour;
  document.getElementById("lab-caption").textContent = (m.overlay && m.overlay.caption) || "";

  // Prediction score is computed once, on entry (S6 never changes it).
  const score = compute(c, st);
  document.getElementById("lab-pred-score").textContent = `${score.prediction} of 25`;
  document.getElementById("lab-pred-rule").textContent = score.rules.prediction;
  document.getElementById("lab-sketch-note").textContent = st.sketchMode === "preset"
    ? "Your preset shape is the dashed amber line." : "Your drawing is the dashed amber line.";

  const canvas = document.getElementById("lab-chart");
  const numbers = document.getElementById("lab-numbers");

  function update() {
    const pv = Number(primary.value);
    st.lab.primary = pv;
    if (!st.lab.intensitiesTried.includes(pv)) st.lab.intensitiesTried.push(pv);
    const inputs = { [p.key]: pv };
    if (s) { st.lab.secondary = Number(secondary.value); inputs[s.key] = st.lab.secondary; }
    if (m.chart.xNow !== undefined && !(m.chart.x in inputs)) inputs[m.chart.x] = m.chart.xNow;
    const out = evaluateModel(m, inputs);

    document.getElementById("lab-primary-value").textContent = shownValue(p, pv, { ...(m.constants || {}), ...inputs });
    if (s) document.getElementById("lab-secondary-value").textContent = shownValue(s, st.lab.secondary, { ...(m.constants || {}), ...inputs });

    clear(numbers);
    for (const o of m.outputs) {
      if (o.hidden) continue;
      const box = el("div", { class: "num", "data-colour": o.colour });
      box.appendChild(el("b", {}, display(m, o, out[o.key])));
      box.appendChild(el("span", {}, o.unit ? `${o.label} (${o.unit})` : o.label));
      numbers.appendChild(box);
    }
    const nowX = m.chart.x in inputs ? inputs[m.chart.x] : (m.chart.xNow ?? pv);
    drawChart(canvas, m, { sketch: st.sketch, inputs, now: { x: nowX, y: out[m.chart.y] }, colour: m.colour });
    ov.update(out);
    canvas.setAttribute("aria-label", `Chart: ${m.chart.yLabel} against ${m.chart.xLabel}. The model gives ${display(m, m.outputs.find((o) => o.key === m.chart.y), out[m.chart.y])} at the current setting.`);
  }
  primary.oninput = update;
  if (secondary) secondary.oninput = update;
  update();

  engine.footer({
    back: null,
    status: s ? "Try both sliders and watch what changes." : "Slide to change the input and watch the body respond.",
    primary: "I see it — explain it",
    onPrimary: () => { ov.stop(); engine.go("S7"); }
  });
}

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
    if (o.text !== undefined) continue;
    const li = el("li");
    li.appendChild(el("b", {}, `${o.label}: `));
    li.appendChild(el("code", {}, `${o.key} = ${m.rules[o.key]}`));
    f.appendChild(li);
  }
  if (m.constants) {
    const li = el("li");
    li.appendChild(el("b", {}, "Constants: "));
    li.appendChild(el("code", {}, Object.entries(m.constants).map(([k, v]) => `${k} = ${v}`).join(", ")));
    f.appendChild(li);
  }
  document.getElementById("limits-text").textContent = m.limits.text;
  document.getElementById("limits-wellbeing").textContent = m.limits.wellbeing;
  const r = engine.review;
  document.getElementById("limits-reviewer").textContent = r
    ? `Science review: ${r.reviewer} (${r.role}), ${r.date}. ${r.scope}`
    : "Science review: pending. The models behind these cases have not yet been signed off by a science teacher.";
  const src = document.getElementById("limits-sources"); clear(src);
  m.sources.forEach((t) => src.appendChild(el("li", {}, t)));
  openDialog(dlg);
}
