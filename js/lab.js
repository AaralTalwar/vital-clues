// lab.js — body lab (S6) and model limits (S6a), plus the shared chart drawer.
// Every dial change recomputes ALL outputs from the model's rules (FR-13), deterministically.
//
// The lab shows, top to bottom:
//   1. "How this model works"  — plain-language rules + "Where this comes from" (sources / our choices / illustrative)
//   2. the main slider
//   3. bubbles                — the extra dials for this case; more of them at harder levels
//   4. case factors           — who the character is and where they are; adjustable, with a reset
//   5. body picture, live numbers, chart with the student's sketch

import { engine, el, clear, openDialog } from "./engine.js";
import { compute } from "./score.js";
import * as overlay from "./overlay.js";
import { normalize, primaryOf, bubblesOf, factorsOf, defaults, evaluateModel as evalModel, curve as curveOf, chartRange, display as displayOf, shownValue } from "./model.js";

export const evaluateModel = (m, values) => evalModel(normalize(m), values);
export const curve = (m, values) => curveOf(normalize(m), values);
export const display = (m, o, v) => displayOf(o, v);

const COLOURS = { teal: "#1B998B", coral: "#E4572E", amber: "#F4A300", purple: "#6C4AB6", blue: "#2E86DE", navy: "#16213E" };
const BASIS = {
  source: { label: "From sources", cls: "basis-source" },
  choice: { label: "Our choice", cls: "basis-choice" },
  illustrative: { label: "Illustrative", cls: "basis-illus" }
};

// Draw the model curve (solid, system colour), the sketch (dashed amber) and a "now" marker.
export function drawChart(canvas, model, { sketch = null, inputs = {}, now = null, colour = "teal" } = {}) {
  const m = normalize(model);
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const PAD = { l: 40, r: 16, t: 14, b: 30 };
  const plotW = w - PAD.l - PAD.r, plotH = h - PAD.t - PAD.b;
  const pts = curveOf(m, inputs);
  const r = chartRange(m);
  const yMin = m.chart.yMin ?? 0;
  const yMax = m.chart.yMax ?? Math.max(...pts.map((p) => p.y)) * 1.1;
  const px = (i) => PAD.l + (plotW * i) / 4;
  const py = (v) => PAD.t + plotH * (1 - (Math.max(yMin, Math.min(yMax, v)) - yMin) / (yMax - yMin));

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = "#D5DEEC"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD.l, PAD.t); ctx.lineTo(PAD.l, h - PAD.b); ctx.lineTo(w - PAD.r, h - PAD.b); ctx.stroke();
  ctx.fillStyle = "#4A5876"; ctx.font = "600 12px Nunito, system-ui, sans-serif";
  ctx.textAlign = "right";
  ctx.fillText(String(Math.round(yMax)), PAD.l - 6, PAD.t + 10);
  ctx.fillText(String(Math.round(yMin)), PAD.l - 6, h - PAD.b);
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

function tickFor(q, value) {
  const t = q.ticks; if (!t || !t.length) return "";
  const idx = Math.round(((value - q.min) / (q.max - q.min)) * (t.length - 1));
  return t[idx];
}

function basisTag(q) {
  const b = BASIS[q.basis] || BASIS.choice;
  return el("span", { class: `basis ${b.cls}` }, b.label);
}

// A dial = a slider or a row of option pills. Calls onInput(value) on change.
function dialControl(m, q, value, onInput, idPrefix) {
  const wrap = el("div", { class: "dial" });
  if (q.options) {
    const pills = el("div", { class: "pills", role: "radiogroup", "aria-label": q.label });
    q.options.forEach((o) => {
      const b = el("button", { class: "pill", type: "button", role: "radio", "aria-checked": String(o.value === value), "aria-pressed": String(o.value === value) }, o.label);
      b.addEventListener("click", () => {
        pills.querySelectorAll(".pill").forEach((p) => { p.setAttribute("aria-pressed", "false"); p.setAttribute("aria-checked", "false"); });
        b.setAttribute("aria-pressed", "true"); b.setAttribute("aria-checked", "true");
        onInput(o.value);
      });
      pills.appendChild(b);
    });
    wrap.appendChild(pills);
  } else {
    const input = el("input", { type: "range", id: `${idPrefix}-${q.key}`, min: q.min, max: q.max, step: q.step ?? 1, "aria-label": q.label });
    input.value = value;
    input.addEventListener("input", () => onInput(Number(input.value)));
    wrap.appendChild(input);
    if (q.ticks) {
      const t = el("div", { class: "ticks" });
      q.ticks.forEach((x) => t.appendChild(el("span", {}, x)));
      wrap.appendChild(t);
    }
  }
  const why = el("p", { class: "dial-why small" });
  why.appendChild(basisTag(q));
  why.appendChild(document.createTextNode(" " + (q.explain || "")));
  wrap.appendChild(why);
  return wrap;
}

function renderLab() {
  const c = engine.caseFile, m = normalize(engine.model), st = engine.state;
  const p = primaryOf(m);
  const caseDefaults = { ...defaults(m), ...(c.labDefaults && c.labDefaults.primary !== undefined ? { [p.key]: c.labDefaults.primary } : {}) };
  if (!st.lab.values) st.lab.values = { ...caseDefaults };
  const values = st.lab.values;

  // 1. model card
  document.getElementById("model-summary").textContent = (m.explain && m.explain.summary) || "";
  const rulesList = document.getElementById("model-rules"); clear(rulesList);
  ((m.explain && m.explain.rules) || []).forEach((r) => rulesList.appendChild(el("li", {}, r)));
  renderProvenance(m, document.getElementById("model-provenance"));

  // 2. main slider
  const primary = document.getElementById("lab-primary");
  primary.min = p.min; primary.max = p.max; primary.step = p.step ?? 1; primary.value = values[p.key];
  document.getElementById("lab-primary-label").textContent = p.label;
  const ticks = document.getElementById("lab-primary-ticks"); clear(ticks);
  (p.ticks || []).forEach((t) => ticks.appendChild(el("span", {}, t)));
  const pWhy = document.getElementById("lab-primary-why"); clear(pWhy);
  if (p.explain) { pWhy.appendChild(basisTag(p)); pWhy.appendChild(document.createTextNode(" " + p.explain)); }

  // 3 + 4. bubbles and case factors
  const bubbles = bubblesOf(m), factors = factorsOf(m);
  const bubbleRow = document.getElementById("lab-bubbles");
  const bubblePanel = document.getElementById("lab-bubble-panel");
  const factorRow = document.getElementById("lab-factors");
  const factorPanel = document.getElementById("lab-factor-panel");
  document.getElementById("lab-bubbles-block").hidden = !bubbles.length;
  document.getElementById("lab-factors-block").hidden = !factors.length;
  const who = c.character && c.character.name ? c.character.name : "the case";
  document.getElementById("lab-factors-title").textContent = `About ${who}`;
  const resetBtn = document.getElementById("lab-factors-reset");
  resetBtn.textContent = `Reset to ${who}'s values`;

  let openKey = null;
  function chipRow(row, panel, list, kind) {
    clear(row);
    list.forEach((q) => {
      const changed = values[q.key] !== caseDefaults[q.key];
      const chip = el("button", { class: `bubble${kind === "factor" ? " bubble-factor" : ""}`, type: "button", "aria-expanded": String(openKey === q.key), "data-changed": String(changed) });
      chip.appendChild(el("span", { class: "bubble-label" }, q.label));
      chip.appendChild(el("b", {}, shownValue(m, q, values[q.key], values)));
      chip.addEventListener("click", () => { openKey = openKey === q.key ? null : q.key; drawChips(); });
      row.appendChild(chip);
    });
    clear(panel);
    const q = list.find((x) => x.key === openKey);
    panel.hidden = !q;
    if (q) {
      panel.appendChild(dialControl(m, q, values[q.key], (v) => { values[q.key] = v; update(); refreshChipValues(); }, "dial"));
    }
  }
  function drawChips() { chipRow(bubbleRow, bubblePanel, bubbles, "bubble"); chipRow(factorRow, factorPanel, factors, "factor"); }
  function refreshChipValues() {
    for (const [row, list] of [[bubbleRow, bubbles], [factorRow, factors]]) {
      [...row.children].forEach((chip, i) => {
        const q = list[i];
        chip.querySelector("b").textContent = shownValue(m, q, values[q.key], values);
        chip.dataset.changed = String(values[q.key] !== caseDefaults[q.key]);
      });
    }
    resetBtn.hidden = !factors.some((q) => values[q.key] !== caseDefaults[q.key]);
  }
  resetBtn.onclick = () => { factors.forEach((q) => { values[q.key] = caseDefaults[q.key]; }); drawChips(); update(); refreshChipValues(); };
  drawChips();

  // 5. overlay, numbers, chart
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
    values[p.key] = Number(primary.value);
    if (!st.lab.intensitiesTried.includes(values[p.key])) st.lab.intensitiesTried.push(values[p.key]);
    st.lab.primary = values[p.key];
    const out = evalModel(m, values);
    const tick = p.ticks && !p.unit ? tickFor(p, values[p.key]) : "";
    document.getElementById("lab-primary-value").textContent = shownValue(m, p, values[p.key], values) + (tick && !/\d/.test(tick) ? " · " + tick : "");

    clear(numbers);
    for (const o of m.outputs) {
      if (o.hidden) continue;
      const box = el("div", { class: "num", "data-colour": o.colour });
      box.appendChild(el("b", {}, displayOf(o, out[o.key])));
      box.appendChild(el("span", {}, o.unit ? `${o.label} (${o.unit})` : o.label));
      numbers.appendChild(box);
    }
    const nowX = values[m.chart.x] ?? m.chart.xNow ?? values[p.key];
    drawChart(canvas, m, { sketch: st.sketch, inputs: values, now: { x: nowX, y: out[m.chart.y] }, colour: m.colour });
    ov.update(out);
    const yOut = m.outputs.find((o) => o.key === m.chart.y);
    canvas.setAttribute("aria-label", `Chart: ${m.chart.yLabel} against ${m.chart.xLabel}. The model gives ${displayOf(yOut, out[m.chart.y])} at the current settings.`);
  }
  primary.oninput = update;
  update();
  refreshChipValues();

  const n = bubbles.length;
  engine.footer({
    back: null,
    status: n ? `Move the main slider, then try the ${n === 1 ? "bubble" : `${n} bubbles`}.` : "Slide to change the input and watch the body respond.",
    primary: "I see it — explain it",
    onPrimary: () => { ov.stop(); engine.go("S7"); }
  });
}

// "Where this comes from": three labelled kinds of claim, with links for sourced facts.
export function renderProvenance(model, box) {
  const m = normalize(model);
  clear(box);
  const pv = m.provenance;
  if (!pv) {
    box.appendChild(el("p", { class: "small muted" }, "This model has not yet been annotated with its sources."));
    return;
  }
  const cites = Object.fromEntries((m.citations || []).map((x) => [x.id, x]));
  const section = (cls, title, items, render) => {
    if (!items || !items.length) return;
    const s = el("div", { class: `prov ${cls}` });
    s.appendChild(el("h4", {}, title));
    const ul = el("ul");
    items.forEach((it) => ul.appendChild(render(it)));
    s.appendChild(ul);
    box.appendChild(s);
  };
  section("basis-source", "From sources", pv.source, (it) => {
    const li = el("li", {}, it.fact + " ");
    const c = cites[it.cite];
    if (c) {
      const a = el("a", { href: c.url, target: "_blank", rel: "noopener" }, `${c.publisher}${c.year ? ", " + c.year : ""}`);
      li.appendChild(el("span", { class: "cite" }, "— "));
      li.appendChild(a);
    }
    return li;
  });
  section("basis-choice", "Our choices", pv.choice, (it) => {
    const li = el("li");
    li.appendChild(el("b", {}, it.what + ". "));
    li.appendChild(document.createTextNode(it.why));
    return li;
  });
  section("basis-illus", "Illustrative", pv.illustrative, (it) => el("li", {}, it));
  if (pv.studying) box.appendChild(el("p", { class: "small" }, `Still being studied: ${pv.studying}`));
}

// ---------- S6a model limits ----------

function openLimits() {
  const m = normalize(engine.model), c = engine.caseFile;
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
  const keys = el("li");
  keys.appendChild(el("b", {}, "Letters: "));
  keys.appendChild(document.createTextNode(m.parameters.map((q) => `${q.key} = ${q.label.toLowerCase()}`).join(" · ")));
  f.appendChild(keys);
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
  if (m.citations && m.citations.length) {
    m.citations.forEach((x) => {
      const li = el("li");
      li.appendChild(el("a", { href: x.url, target: "_blank", rel: "noopener" }, x.title));
      li.appendChild(document.createTextNode(` — ${x.publisher}${x.year ? ", " + x.year : ""}`));
      src.appendChild(li);
    });
  } else (m.sources || []).forEach((t) => src.appendChild(el("li", {}, t)));
  openDialog(dlg);
}
