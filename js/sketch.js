// sketch.js — the prediction sketch (5 draggable dots) and the shape classifier.
//
// The student drags 5 dots up or down to draw what she thinks the curve will
// look like BEFORE the model runs. We store 5 numbers between 0 (bottom) and
// 1 (top). classify() then names the shape: rises / falls / flat, and whether a
// rise is straight or "rises-then-levels". The presets map to fixed arrays so a
// student who can't drag gets exactly the same scoring.

export const PRESETS = {
  "rises-then-levels": [0.1, 0.45, 0.7, 0.82, 0.88],
  "straight-rise":     [0.1, 0.3, 0.5, 0.7, 0.9],
  "flat":              [0.5, 0.5, 0.5, 0.5, 0.5],
  "falls":             [0.9, 0.7, 0.5, 0.3, 0.1]
};

export const DEFAULT_SKETCH = [0.5, 0.5, 0.5, 0.5, 0.5];

// classify([0.22, 0.38, 0.52, 0.62, 0.66]) → { direction: "rises", shape: "rises-then-levels" }
export function classify(y) {
  const delta = y[4] - y[0];
  let direction = "flat";
  if (delta > 0.12) direction = "rises";
  else if (delta < -0.12) direction = "falls";

  let shape = "flat";
  if (direction === "rises") {
    const early = y[2] - y[0];   // how much it climbed in the first half
    const late = y[4] - y[2];    // how much in the second half
    if (early < 0.4 * late) shape = "flat-then-rises";
    else if (late < 0.6 * early) shape = "rises-then-levels";
    else shape = "straight-rise";
  } else if (direction === "falls") {
    const early = y[0] - y[2];
    const late = y[2] - y[4];
    if (early < 0.4 * late) shape = "flat-then-falls";
    else if (late < 0.6 * early) shape = "falls-then-levels";
    else shape = "straight-fall";
  }
  return { direction, shape };
}

// The direction an expectedShape implies: "rises-then-levels" → "rises", etc.
export function directionOf(expectedShape) {
  if (expectedShape.includes("rise")) return "rises";
  if (expectedShape.includes("fall")) return "falls";
  return "flat";
}

// ---------- the interactive canvas ----------

// mount(canvas, { onChange, labels }) wires up pointer + keyboard dragging.
// Returns { get(), set(array), reset() }.
export function mount(canvas, { onChange, xLabels = [], colour = "#F4A300" } = {}) {
  const ctx = canvas.getContext("2d");
  let y = [...DEFAULT_SKETCH];
  let active = -1;        // which dot is being dragged
  let focused = 0;        // which dot has keyboard focus
  const PAD = { l: 36, r: 16, t: 16, b: 32 };

  function geometry() {
    const w = canvas.width, h = canvas.height;
    const plotW = w - PAD.l - PAD.r, plotH = h - PAD.t - PAD.b;
    return { w, h, plotW, plotH,
      px: (i) => PAD.l + (plotW * i) / 4,
      py: (v) => PAD.t + plotH * (1 - v) };
  }

  function draw() {
    const g = geometry();
    ctx.clearRect(0, 0, g.w, g.h);
    // axes
    ctx.strokeStyle = "#D5DEEC"; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(PAD.l, PAD.t); ctx.lineTo(PAD.l, g.h - PAD.b); ctx.lineTo(g.w - PAD.r, g.h - PAD.b);
    ctx.stroke();
    // faint guide lines
    ctx.strokeStyle = "#EEF4FB";
    for (let i = 1; i < 4; i++) { ctx.beginPath(); ctx.moveTo(PAD.l, g.py(i / 4)); ctx.lineTo(g.w - PAD.r, g.py(i / 4)); ctx.stroke(); }
    // x labels
    ctx.fillStyle = "#4A5876"; ctx.font = "600 12px Nunito, system-ui, sans-serif"; ctx.textAlign = "center";
    xLabels.forEach((label, k) => { const i = k * 2; ctx.fillText(label, g.px(i), g.h - 10); });
    ctx.textAlign = "right"; ctx.fillText("high", PAD.l - 6, PAD.t + 10); ctx.fillText("low", PAD.l - 6, g.h - PAD.b);
    // curve
    ctx.strokeStyle = colour; ctx.lineWidth = 3; ctx.setLineDash([8, 6]);
    ctx.beginPath();
    y.forEach((v, i) => (i === 0 ? ctx.moveTo(g.px(i), g.py(v)) : ctx.lineTo(g.px(i), g.py(v))));
    ctx.stroke(); ctx.setLineDash([]);
    // dots
    y.forEach((v, i) => {
      ctx.beginPath(); ctx.arc(g.px(i), g.py(v), i === active ? 13 : 10, 0, Math.PI * 2);
      ctx.fillStyle = "#FFFFFF"; ctx.fill();
      ctx.lineWidth = i === focused && document.activeElement === canvas ? 4 : 3;
      ctx.strokeStyle = i === focused && document.activeElement === canvas ? "#16213E" : colour; ctx.stroke();
    });
  }

  function nearestDot(clientX) {
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * canvas.width;
    const g = geometry();
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < 5; i++) { const d = Math.abs(g.px(i) - x); if (d < bestDist) { best = i; bestDist = d; } }
    return bestDist < 40 ? best : -1;
  }
  function valueFromY(clientY) {
    const rect = canvas.getBoundingClientRect();
    const yy = ((clientY - rect.top) / rect.height) * canvas.height;
    const g = geometry();
    return clamp(1 - (yy - PAD.t) / g.plotH);
  }

  // Pointer events cover mouse, touch and pen with one code path.
  canvas.addEventListener("pointerdown", (e) => {
    active = nearestDot(e.clientX);
    if (active === -1) return;
    focused = active;
    canvas.setPointerCapture(e.pointerId);
    y[active] = valueFromY(e.clientY);
    e.preventDefault(); draw(); onChange && onChange([...y]);
  });
  canvas.addEventListener("pointermove", (e) => {
    if (active === -1) return;
    y[active] = valueFromY(e.clientY);
    e.preventDefault(); draw(); onChange && onChange([...y]);
  });
  const release = () => { if (active !== -1) { active = -1; draw(); } };
  canvas.addEventListener("pointerup", release);
  canvas.addEventListener("pointercancel", release);

  // Keyboard: Tab to focus the canvas, ← → pick a dot, ↑ ↓ move it by 5 %.
  canvas.addEventListener("keydown", (e) => {
    const step = 0.05;
    if (e.key === "ArrowLeft") { focused = Math.max(0, focused - 1); }
    else if (e.key === "ArrowRight") { focused = Math.min(4, focused + 1); }
    else if (e.key === "ArrowUp") { y[focused] = clamp(y[focused] + step); onChange && onChange([...y]); }
    else if (e.key === "ArrowDown") { y[focused] = clamp(y[focused] - step); onChange && onChange([...y]); }
    else return;
    e.preventDefault(); draw();
  });
  canvas.addEventListener("focus", draw);
  canvas.addEventListener("blur", draw);

  draw();
  return {
    get: () => [...y],
    set: (arr) => { y = [...arr]; draw(); },
    reset: () => { y = [...DEFAULT_SKETCH]; draw(); }
  };
}

function clamp(v) { return Math.max(0, Math.min(1, v)); }
