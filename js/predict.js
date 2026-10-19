// predict.js — prediction sketch (S5) and preset shapes (S5a).
// Shows NO model output (FR-11). Stores sketch[5] in 0–1 and secondDir.

import { engine, el, clear } from "./engine.js";
import { mount, PRESETS, DEFAULT_SKETCH } from "./sketch.js";
import { chartRange } from "./model.js";

let pad = null;
let moved = false;

export function install() {
  engine.on("S5", { enter: renderSketch });
  engine.on("S5a", { enter: renderPresets });
}

function renderSketch() {
  const c = engine.caseFile, m = engine.model, st = engine.state;
  document.getElementById("sketch-prompt").textContent = c.prediction.prompt;
  document.getElementById("sketch-ylabel").textContent = m.chart.yLabel;
  document.getElementById("sketch-xlabel").textContent = m.chart.xLabel;

  const canvas = document.getElementById("sketch-canvas");
  if (!pad) {
    const xLabels = chartRange(m).ticks || [];
    pad = mount(canvas, { xLabels, onChange: (y) => { moved = true; st.sketch = y; st.sketchMode = "drawn"; } });
  }
  if (st.sketch && st.sketchMode === "drawn") pad.set(st.sketch); else if (!st.sketch) pad.reset();
  moved = !!(st.sketch && st.sketchMode);

  renderSecond("second-q", "second-opts", "second");
  document.getElementById("sketch-reset").onclick = () => { pad.reset(); moved = false; st.sketch = null; st.sketchMode = null; };
  document.getElementById("sketch-presets").onclick = () => engine.go("S5a");

  engine.footer({
    back: null,                          // board is locked; no going back from here
    status: "Drag the dots up or down. Nothing is revealed until you lock it.",
    primary: "Lock my prediction and run the lab",
    onPrimary: () => {
      // Gate 2: no handle moved and no preset chosen → toast (FR-12)
      if (!engine.gate(moved && st.sketchMode, "Draw or pick your prediction first", canvas)) return;
      if (!engine.gate(!!st.secondDir, `Answer the second question: ${c.prediction.second.question}`, document.getElementById("second-opts"))) return;
      engine.go("S6");
    }
  });
}

function renderPresets() {
  const c = engine.caseFile, st = engine.state;
  const grid = document.getElementById("preset-grid");
  clear(grid);
  const shapes = [
    { id: "rises-then-levels", label: "Rises, then levels off", d: "M4,50 C30,45 50,15 96,8" },
    { id: "straight-rise", label: "Straight rise", d: "M4,52 L96,6" },
    { id: "flat", label: "Stays flat", d: "M4,30 L96,30" },
    { id: "falls", label: "Falls", d: "M4,6 L96,52" }
  ];
  for (const s of shapes) {
    const label = el("label", { class: "preset-card" });
    const input = el("input", { type: "radio", name: "preset", value: s.id });
    if (st.sketchMode === "preset" && st.presetId === s.id) input.checked = true;
    input.addEventListener("change", () => { st.sketch = [...PRESETS[s.id]]; st.sketchMode = "preset"; st.presetId = s.id; moved = true; });
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 58"); svg.setAttribute("aria-hidden", "true");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", s.d); svg.appendChild(path);
    label.append(input, svg, el("span", {}, s.label));
    grid.appendChild(label);
  }
  renderSecond("second-q-2", "second-opts-2", "second2");
  document.getElementById("preset-draw").onclick = () => { if (st.sketchMode === "preset") { st.sketch = null; st.sketchMode = null; moved = false; } engine.go("S5"); };

  engine.footer({
    back: "Draw instead",
    onBack: () => engine.go("S5"),
    status: "Pick the shape you expect.",
    primary: "Lock my prediction and run the lab",
    onPrimary: () => {
      if (!engine.gate(st.sketchMode === "preset", "Pick a shape first", grid)) return;
      if (!engine.gate(!!st.secondDir, `Answer the second question: ${c.prediction.second.question}`, document.getElementById("second-opts-2"))) return;
      engine.go("S6");
    }
  });
}

// The one second-output direction question (radio), rendered on both S5 and S5a.
function renderSecond(qId, optsId, name) {
  const c = engine.caseFile, st = engine.state;
  document.getElementById(qId).textContent = c.prediction.second.question;
  const wrap = document.getElementById(optsId);
  clear(wrap);
  for (const opt of c.prediction.second.options) {
    const label = el("label", { class: "pill", style: "display:inline-flex;align-items:center;gap:.4rem" });
    const input = el("input", { type: "radio", name, value: opt });
    if (st.secondDir === opt) input.checked = true;
    input.addEventListener("change", () => { st.secondDir = opt; });
    label.append(input, el("span", {}, opt));
    wrap.appendChild(label);
  }
}

export function resetPad() { pad = null; moved = false; }
export { DEFAULT_SKETCH };
