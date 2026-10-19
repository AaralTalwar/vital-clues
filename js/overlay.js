// overlay.js — the animated body picture in the lab, driven by the model file.
//
// A model declares:  "overlay": { "base": "torso" | "head" | "arm" | "leg" | "ear",
//                                 "caption": "lungs → heart → legs",
//                                 "parts": [ { "shape": "lungs", "colour": "#1B998B",
//                                              "anim": { "type": "breathe", "output": "B" } }, ... ] }
// Shapes are drawn here once; animation types read a model output each frame:
//   breathe  — scale 1.0→1.08 at `output` per minute
//   beat     — scale 1.0→1.12 at `output` per minute
//   glow     — opacity 0.3→1 as output goes min→max
//   shiver   — small side-to-side shake, amplitude by output (0–10)
//   count    — show round(output) copies of a small shape (sweat drops, pollen grains…)
//   fade     — fill lightens as output falls min→max (skin blood flow)
//   light    — part "lights up" (full opacity) when output >= threshold, else dim
//   none     — static

const NS = "http://www.w3.org/2000/svg";
const COL = { line: "#8FA3C7", fill: "#F7F9FD", text: "#4A5876" };

function node(tag, attrs = {}) {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
}

// Base figures, all in a 120 × 220 box.
const BASES = {
  torso(g) {
    g.appendChild(node("circle", { cx: 60, cy: 18, r: 14, fill: COL.fill, stroke: COL.line, "stroke-width": 2 }));
    g.appendChild(node("path", { d: "M34 36 L86 36 L96 110 L80 110 L84 210 L36 210 L40 110 L24 110 Z", fill: COL.fill, stroke: COL.line, "stroke-width": 2, "stroke-linejoin": "round" }));
  },
  head(g) {
    g.appendChild(node("ellipse", { cx: 60, cy: 90, rx: 44, ry: 52, fill: COL.fill, stroke: COL.line, "stroke-width": 2 }));
    g.appendChild(node("path", { d: "M44 140 L76 140 L80 200 L40 200 Z", fill: COL.fill, stroke: COL.line, "stroke-width": 2 }));
  },
  arm(g) {
    g.appendChild(node("path", { d: "M30 20 L90 20 L84 120 L92 200 L28 200 L36 120 Z", fill: COL.fill, stroke: COL.line, "stroke-width": 2, "stroke-linejoin": "round" }));
  }
};

// Each shape returns the <g> it drew so the animator can transform it.
const SHAPES = {
  lungs(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M57 46 C48 44 36 52 36 70 C36 82 44 88 50 86 C56 84 58 76 58 68 Z", fill: colour }));
    g.appendChild(node("path", { d: "M63 46 C72 44 84 52 84 70 C84 82 76 88 70 86 C64 84 62 76 62 68 Z", fill: colour }));
    g.appendChild(node("path", { d: "M60 36 L60 50", stroke: colour, "stroke-width": 4, "stroke-linecap": "round" }));
    return g;
  },
  heart(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M66 92 C56 84 52 80 52 74 C52 70 55 68 58 68 C61 68 63 70 64 72 C65 70 67 68 70 68 C73 68 76 70 76 74 C76 80 72 84 66 92 Z", fill: colour }));
    return g;
  },
  legs(colour) {
    const g = node("g");
    g.appendChild(node("rect", { x: 40, y: 116, width: 16, height: 88, rx: 8, fill: colour }));
    g.appendChild(node("rect", { x: 64, y: 116, width: 16, height: 88, rx: 8, fill: colour }));
    return g;
  },
  kidneys(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M50 100 C42 100 40 110 42 120 C44 126 48 130 52 127 C55 124 54 120 51 117 C48 114 50 108 53 107 C56 106 55 100 50 100 Z", fill: colour }));
    g.appendChild(node("path", { d: "M70 100 C78 100 80 110 78 120 C76 126 72 130 68 127 C65 124 66 120 69 117 C72 114 70 108 67 107 C64 106 65 100 70 100 Z", fill: colour }));
    return g;
  },
  stomach(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M52 90 C70 86 84 96 82 112 C80 128 64 132 54 126 C44 120 42 104 52 90 Z", fill: colour }));
    return g;
  },
  bloodstream(colour) {   // a channel down the torso, used for sugar / adrenaline / oxygen
    const g = node("g");
    g.appendChild(node("path", { d: "M60 40 L60 200", stroke: colour, "stroke-width": 8, "stroke-linecap": "round", opacity: .9 }));
    return g;
  },
  skin(colour) {          // outline that fades as blood leaves the skin
    const g = node("g");
    g.appendChild(node("path", { d: "M34 36 L86 36 L96 110 L80 110 L84 210 L36 210 L40 110 L24 110 Z", fill: colour, opacity: .35 }));
    return g;
  },
  core(colour) {
    const g = node("g");
    g.appendChild(node("ellipse", { cx: 60, cy: 92, rx: 20, ry: 34, fill: colour, opacity: .85 }));
    return g;
  },
  brain(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M30 80 C28 56 50 44 64 50 C80 44 98 60 92 84 C96 100 80 112 64 108 C48 114 30 104 30 80 Z", fill: colour }));
    g.appendChild(node("path", d2("M60 52 L60 108 M40 70 C50 76 50 92 42 98 M86 70 C76 76 76 92 84 98")));
    return g;
  },
  eye(colour) {
    const g = node("g");
    g.appendChild(node("ellipse", { cx: 40, cy: 92, rx: 12, ry: 8, fill: "#fff", stroke: COL.line, "stroke-width": 2 }));
    g.appendChild(node("circle", { cx: 40, cy: 92, r: 5, fill: colour }));
    return g;
  },
  pathShort(colour) {     // reflex: eye → brainstem → hand
    const g = node("g");
    g.appendChild(node("path", { d: "M52 92 L60 120 L60 150 L30 190", stroke: colour, "stroke-width": 5, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round" }));
    return g;
  },
  pathLong(colour) {      // decision: eye → cortex → down → hand
    const g = node("g");
    g.appendChild(node("path", { d: "M52 92 L64 70 L88 64 L92 100 L68 150 L90 190", stroke: colour, "stroke-width": 5, fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-dasharray": "6 5" }));
    return g;
  },
  hand(colour) {
    const g = node("g");
    g.appendChild(node("circle", { cx: 30, cy: 192, r: 9, fill: colour }));
    g.appendChild(node("circle", { cx: 90, cy: 192, r: 9, fill: colour, opacity: .5 }));
    return g;
  },
  drops(colour) {         // sweat / tears — `count` animation shows n of them
    const g = node("g");
    const spots = [[30, 60], [92, 62], [26, 96], [96, 98], [30, 130], [92, 132], [44, 160], [78, 162], [40, 190], [82, 192], [60, 56], [60, 150]];
    spots.forEach(([x, y], i) => g.appendChild(node("path", { d: `M${x} ${y - 6} C${x + 5} ${y} ${x + 5} ${y + 5} ${x} ${y + 5} C${x - 5} ${y + 5} ${x - 5} ${y} ${x} ${y - 6} Z`, fill: colour, "data-i": i })));
    return g;
  },
  thirst(colour) {        // a small mouth that lights up
    const g = node("g");
    g.appendChild(node("path", { d: "M54 24 Q60 30 66 24", stroke: colour, "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  shiverMarks(colour) {   // zigzags on arms and jaw
    const g = node("g");
    g.appendChild(node("path", { d: "M26 120 l4 -6 4 6 4 -6 4 6 M82 120 l4 -6 4 6 4 -6 4 6 M50 30 l4 -4 4 4 4 -4 4 4", stroke: colour, "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  sun(colour) {
    const g = node("g");
    g.appendChild(node("circle", { cx: 100, cy: 18, r: 10, fill: colour }));
    for (let a = 0; a < 8; a++) { const r = (a * Math.PI) / 4; g.appendChild(node("path", { d: `M${100 + Math.cos(r) * 13} ${18 + Math.sin(r) * 13} L${100 + Math.cos(r) * 18} ${18 + Math.sin(r) * 18}`, stroke: colour, "stroke-width": 2.5, "stroke-linecap": "round" })); }
    return g;
  },
  melanin(colour) {       // freckle dots on the shoulders that darken
    const g = node("g");
    [[42, 48], [50, 44], [70, 44], [78, 48], [46, 56], [74, 56], [60, 42]].forEach(([x, y]) => g.appendChild(node("circle", { cx: x, cy: y, r: 2.5, fill: colour })));
    return g;
  },
  musclesArm(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M40 40 C30 70 30 100 44 120 L76 120 C90 100 90 70 80 40 Z", fill: colour }));
    g.appendChild(node("path", { d: "M44 124 L76 124 L80 196 L40 196 Z", fill: colour, opacity: .6 }));
    return g;
  },
  fibres(colour) {        // tiny tears / repair marks on the muscle
    const g = node("g");
    [[50, 60], [66, 70], [56, 86], [70, 96], [50, 106]].forEach(([x, y], i) => g.appendChild(node("path", { d: `M${x - 5} ${y} L${x + 5} ${y}`, stroke: colour, "stroke-width": 3, "stroke-linecap": "round", "data-i": i })));
    return g;
  },
  nose(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M60 96 L54 118 Q60 124 66 118 Z", fill: colour }));
    return g;
  },
  pollen(colour) {
    const g = node("g");
    const spots = [[14, 60], [24, 40], [100, 50], [108, 74], [18, 120], [104, 130], [12, 90], [110, 100], [30, 160], [96, 160], [60, 30], [60, 140]];
    spots.forEach(([x, y], i) => g.appendChild(node("circle", { cx: x, cy: y, r: 3.5, fill: colour, "data-i": i })));
    return g;
  },
  ear(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M40 60 C30 80 32 120 50 140 C66 156 84 140 80 120 C90 100 92 70 72 56 C60 48 46 50 40 60 Z", fill: colour }));
    g.appendChild(node("path", { d: "M52 78 C46 92 50 110 62 118", stroke: "#fff", "stroke-width": 4, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  hairCells(colour) {     // tiny hairs inside the ear that bend with loudness
    const g = node("g");
    [56, 62, 68, 74, 80].forEach((x, i) => g.appendChild(node("path", { d: `M${x} 172 L${x} 156`, stroke: colour, "stroke-width": 3, "stroke-linecap": "round", "data-i": i })));
    g.appendChild(node("path", { d: "M50 172 L86 172", stroke: COL.line, "stroke-width": 2 }));
    return g;
  },
  soundWaves(colour) {
    const g = node("g");
    [14, 22, 30].forEach((r, i) => g.appendChild(node("path", { d: `M${20 - i * 4} ${100 - r} A${r} ${r} 0 0 0 ${20 - i * 4} ${100 + r}`, stroke: colour, "stroke-width": 3, fill: "none", "data-i": i })));
    return g;
  },
  moon(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M100 10 A12 12 0 1 0 108 30 A9 9 0 1 1 100 10 Z", fill: colour }));
    return g;
  },
  screen(colour) {
    const g = node("g");
    g.appendChild(node("rect", { x: 6, y: 120, width: 34, height: 24, rx: 3, fill: colour }));
    g.appendChild(node("path", { d: "M16 150 L30 150 M23 144 L23 150", stroke: colour, "stroke-width": 3 }));
    return g;
  },
  mountain(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M0 60 L30 10 L50 40 L70 0 L120 60 Z", fill: colour, opacity: .35 }));
    return g;
  },
  bruise(colour) {        // a patch on the leg that changes colour over days
    const g = node("g");
    g.appendChild(node("ellipse", { cx: 48, cy: 150, rx: 11, ry: 14, fill: colour }));
    return g;
  },
  pupil(colour) {         // eye with a pupil that scales (use anim "scale")
    const g = node("g");
    g.appendChild(node("circle", { cx: 60, cy: 92, r: 13, fill: colour }));
    return g;
  },
  iris(colour) {
    const g = node("g");
    g.appendChild(node("ellipse", { cx: 60, cy: 92, rx: 34, ry: 22, fill: "#fff", stroke: COL.line, "stroke-width": 2 }));
    g.appendChild(node("circle", { cx: 60, cy: 92, r: 19, fill: colour }));
    return g;
  },
  bone(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M52 40 C44 32 36 40 44 48 L48 52 L48 168 L44 172 C36 180 44 188 52 180 L60 176 L68 180 C76 188 84 180 76 172 L72 168 L72 52 L76 48 C84 40 76 32 68 40 L60 44 Z", fill: colour }));
    return g;
  },
  tooth(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M36 60 C36 44 50 44 60 50 C70 44 84 44 84 60 C84 80 78 96 74 120 C72 132 66 132 64 120 L60 100 L56 120 C54 132 48 132 46 120 C42 96 36 80 36 60 Z", fill: colour, stroke: COL.line, "stroke-width": 2 }));
    return g;
  },
  enamelSpots(colour) {
    const g = node("g");
    [[48, 62], [70, 60], [58, 74], [44, 80], [74, 78], [60, 58]].forEach(([x, y], i) => g.appendChild(node("circle", { cx: x, cy: y, r: 4, fill: colour, "data-i": i })));
    return g;
  },
  tongue(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M36 130 C36 112 84 112 84 130 C84 160 72 176 60 176 C48 176 36 160 36 130 Z", fill: colour }));
    g.appendChild(node("path", { d: "M60 122 L60 160", stroke: "#fff", "stroke-width": 2, opacity: .6 }));
    return g;
  },
  tasteBuds(colour) {
    const g = node("g");
    [[48, 132], [60, 128], [72, 132], [52, 144], [68, 144], [56, 156], [64, 156], [60, 140], [46, 120], [74, 120]].forEach(([x, y], i) => g.appendChild(node("circle", { cx: x, cy: y, r: 2.6, fill: colour, "data-i": i })));
    return g;
  },
  innerEar(colour) {      // three loops of the balance canals
    const g = node("g");
    g.appendChild(node("path", { d: "M60 120 C40 120 40 90 60 90 C80 90 80 120 60 120 M60 120 C60 140 90 140 90 120 M60 120 C60 140 30 140 30 120", stroke: colour, "stroke-width": 5, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  swirl(colour) {         // dizziness swirl, pair with "spin"
    const g = node("g");
    g.appendChild(node("path", { d: "M60 30 C76 30 76 50 60 50 C48 50 48 36 58 36", stroke: colour, "stroke-width": 3, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  clot(colour) {          // a cut with a plug forming
    const g = node("g");
    g.appendChild(node("path", { d: "M34 150 L86 150", stroke: "#E4572E", "stroke-width": 6, "stroke-linecap": "round", opacity: .5 }));
    g.appendChild(node("ellipse", { cx: 60, cy: 150, rx: 22, ry: 7, fill: colour }));
    return g;
  },
  germs(colour) {
    const g = node("g");
    [[30, 70], [92, 76], [26, 120], [94, 126], [40, 170], [80, 172], [60, 60], [60, 196], [20, 96], [100, 100]].forEach(([x, y], i) => {
      const c = node("g", { "data-i": i });
      c.appendChild(node("circle", { cx: x, cy: y, r: 5, fill: colour }));
      c.appendChild(node("path", { d: `M${x - 8} ${y} L${x + 8} ${y} M${x} ${y - 8} L${x} ${y + 8}`, stroke: colour, "stroke-width": 1.6 }));
      g.appendChild(c);
    });
    return g;
  },
  thermostat(colour) {    // a dial in the head, for fever set-point
    const g = node("g");
    g.appendChild(node("circle", { cx: 60, cy: 22, r: 10, fill: "#fff", stroke: colour, "stroke-width": 3 }));
    g.appendChild(node("path", { d: "M60 22 L66 15", stroke: colour, "stroke-width": 3, "stroke-linecap": "round" }));
    return g;
  },
  legVeins(colour) {      // blood pooling in the legs
    const g = node("g");
    g.appendChild(node("rect", { x: 42, y: 140, width: 12, height: 64, rx: 6, fill: colour }));
    g.appendChild(node("rect", { x: 66, y: 140, width: 12, height: 64, rx: 6, fill: colour }));
    return g;
  },
  diaphragm(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M30 104 Q60 84 90 104", stroke: colour, "stroke-width": 5, fill: "none", "stroke-linecap": "round" }));
    return g;
  },
  throat(colour) {        // food tube with a squeeze wave
    const g = node("g");
    g.appendChild(node("path", { d: "M56 36 L56 92 M64 36 L64 92", stroke: colour, "stroke-width": 4, "stroke-linecap": "round" }));
    g.appendChild(node("ellipse", { cx: 60, cy: 64, rx: 8, ry: 5, fill: colour }));
    return g;
  },
  brainGlow(colour) {     // the brain as a soft glow, for memory / sleep / alertness
    const g = node("g");
    g.appendChild(node("ellipse", { cx: 60, cy: 18, rx: 13, ry: 11, fill: colour }));
    return g;
  },
  plane(colour) {
    const g = node("g");
    g.appendChild(node("path", { d: "M70 14 L84 12 L100 4 L104 4 L96 14 L110 15 L110 17 L96 18 L104 28 L100 28 L84 20 L70 18 Z", fill: colour }));
    return g;
  },
  snow(colour) {
    const g = node("g");
    [[14, 30], [104, 40], [20, 140], [100, 150], [12, 90], [108, 96]].forEach(([x, y], i) => g.appendChild(node("path", { d: `M${x - 5} ${y} L${x + 5} ${y} M${x} ${y - 5} L${x} ${y + 5} M${x - 4} ${y - 4} L${x + 4} ${y + 4} M${x + 4} ${y - 4} L${x - 4} ${y + 4}`, stroke: colour, "stroke-width": 1.8, "data-i": i })));
    return g;
  },
  sound(colour) {         // sound coming out of the mouth
    const g = node("g");
    [6, 11, 16].forEach((r) => g.appendChild(node("path", { d: `M${72} ${28 - r} A${r} ${r} 0 0 1 ${72} ${28 + r}`, stroke: colour, "stroke-width": 2.5, fill: "none" })));
    return g;
  }
};

function d2(d) { return { d, stroke: "#fff", "stroke-width": 2, fill: "none", opacity: .7 }; }

// Colour helpers for `fade` and `shift` animations
function hexToRgb(h) { const n = parseInt(h.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; }
function mix(a, b, t) { const A = hexToRgb(a), B = hexToRgb(b); return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`; }

// mount(svgEl, overlayConfig) → { update(outputs), stop() }
export function mount(svg, cfg) {
  while (svg.firstChild) svg.removeChild(svg.firstChild);
  svg.setAttribute("viewBox", "0 0 120 220");
  const base = node("g");
  (BASES[cfg.base] || BASES.torso)(base);
  svg.appendChild(base);

  const parts = [];
  for (const p of cfg.parts || []) {
    const draw = SHAPES[p.shape];
    if (!draw) continue;
    const g = draw(p.colour || "#1B998B");
    g.style.transformBox = "fill-box";
    g.style.transformOrigin = "center";
    if (p.opacity !== undefined) g.style.opacity = String(p.opacity);
    svg.appendChild(g);
    parts.push({ g, cfg: p });
  }

  let frame = null, out = {};
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function applyStatic() {
    for (const { g, cfg: p } of parts) {
      const a = p.anim; if (!a) continue;
      const v = out[a.output];
      if (v === undefined) continue;
      const frac = a.max !== undefined ? Math.max(0, Math.min(1, (v - (a.min ?? 0)) / (a.max - (a.min ?? 0)))) : 0;
      if (a.type === "glow") g.style.opacity = String(0.3 + 0.7 * frac);
      else if (a.type === "fade") g.querySelectorAll("*").forEach((el) => el.setAttribute("fill", mix(a.from || "#E4572E", a.to || "#EEF4FB", frac)));
      else if (a.type === "shift") g.querySelectorAll("*").forEach((el) => el.setAttribute("fill", mix(a.from, a.to, frac)));
      else if (a.type === "count") { const n = Math.round(frac * g.children.length); [...g.children].forEach((el, i) => el.style.opacity = i < n ? "1" : "0.08"); }
      else if (a.type === "scale") { const lo = a.from ?? 0.5, hi = a.to ?? 1.5; g.style.transform = `scale(${(lo + (hi - lo) * frac).toFixed(3)})`; }
      else if (a.type === "light") g.style.opacity = (a.below !== undefined ? v <= a.below : v >= a.threshold) ? "1" : "0.18";
      else if (a.type === "bend") { const deg = frac * 50; [...g.children].forEach((el) => { if (el.dataset.i !== undefined) el.style.transform = `rotate(${deg}deg)`; el.style.transformOrigin = "bottom"; el.style.transformBox = "fill-box"; }); }
    }
  }

  function tick(now) {
    const t = now / 1000;
    for (const { g, cfg: p } of parts) {
      const a = p.anim; if (!a) continue;
      const v = out[a.output]; if (v === undefined) continue;
      if (a.type === "breathe") { const period = 60 / Math.max(1, v); g.style.transform = `scale(${(1 + 0.08 * (0.5 + 0.5 * Math.sin(2 * Math.PI * t / period))).toFixed(3)})`; }
      else if (a.type === "beat") { const period = 60 / Math.max(1, v); g.style.transform = `scale(${(1 + 0.12 * Math.max(0, Math.sin(2 * Math.PI * t / period)) ** 3).toFixed(3)})`; }
      else if (a.type === "shiver") { const amp = Math.max(0, Math.min(10, v)) * 0.3; g.style.transform = `translate(${(Math.sin(t * 40) * amp).toFixed(2)}px, 0)`; }
      else if (a.type === "spin") { const sp = Math.max(0, Math.min(10, v)); g.style.transform = `rotate(${((t * sp * 60) % 360).toFixed(1)}deg)`; }
      else if (a.type === "pulseGlow") { const period = 60 / Math.max(1, v); g.style.opacity = String(0.45 + 0.55 * Math.max(0, Math.sin(2 * Math.PI * t / period))); }
    }
    frame = requestAnimationFrame(tick);
  }

  return {
    update(outputs) {
      out = outputs;
      applyStatic();
      if (!reduced && frame === null) frame = requestAnimationFrame(tick);
    },
    stop() { if (frame !== null) cancelAnimationFrame(frame); frame = null; }
  };
}
