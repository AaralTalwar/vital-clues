// model.js — reads a model file and answers questions about its parameters.
// Pure functions (no DOM) so the tests can use them.
//
// Model format v2 (one model per case):
//   parameters: [{ key, label, role: "primary" | "bubble" | "factor",
//                  min, max, step, default, unit?, ticks?, options?: [{value, label}],
//                  valueFormula?, explain, basis: "source" | "choice" | "illustrative", cite? }]
//   constants:  { name: number }
//   outputs:    [{ key, label, unit?, colour, decimals?, bands?, text?, hidden? }]
//   rules:      { outputKey: "formula" }
//   chart:      { x, y, xLabel, yLabel, yMin, yMax, xMin?, xMax?, xTicks?, xNow? }
//   explain:    { summary, rules: [plain-language lines] }
//   provenance: { source: [{ fact, cite }], choice: [{ what, why }], illustrative: [text] }
//   citations:  [{ id, title, publisher, year, url, verified, supports }]
// Older files with inputs.primary / inputs.secondary are converted on the fly.

import { evaluate } from "./rules.js";

export function normalize(model) {
  if (model._normalized) return model;
  const m = { ...model };
  if (!Array.isArray(m.parameters)) {
    const params = [];
    const p = m.inputs && m.inputs.primary;
    if (p) params.push({ ...p, role: "primary", default: p.default ?? p.min });
    const s = m.inputs && m.inputs.secondary;
    if (s) params.push({ ...s, role: "bubble", default: s.default ?? s.min });
    m.parameters = params;
  }
  m.parameters = m.parameters.map((q) => ({ ...q, default: q.default ?? q.min }));
  Object.defineProperty(m, "_normalized", { value: true });
  return m;
}

export const primaryOf = (m) => normalize(m).parameters.find((q) => q.role === "primary");
export const bubblesOf = (m) => normalize(m).parameters.filter((q) => q.role === "bubble");
export const factorsOf = (m) => normalize(m).parameters.filter((q) => q.role === "factor");
export const paramOf = (m, key) => normalize(m).parameters.find((q) => q.key === key);

// Every parameter at its default (the case's own values), plus the chart's resting x.
export function defaults(m) {
  const d = {};
  for (const q of normalize(m).parameters) d[q.key] = q.default;
  if (m.chart && m.chart.xNow !== undefined && !(m.chart.x in d)) d[m.chart.x] = m.chart.xNow;
  return d;
}

// All outputs for a set of values (missing values fall back to defaults).
export function evaluateModel(m, values = {}) {
  const vars = { ...(m.constants || {}), ...defaults(m), ...values };
  const out = {};
  for (const o of m.outputs) {
    if (o.text !== undefined) { out[o.key] = o.text; continue; }
    out[o.key] = evaluate(m.rules[o.key], vars);
  }
  return out;
}

export function chartRange(m) {
  const c = m.chart;
  const q = paramOf(m, c.x);
  if (q) return { min: q.min, max: q.max, ticks: c.xTicks || q.ticks || [] };
  return { min: c.xMin ?? 0, max: c.xMax ?? 1, ticks: c.xTicks || [] };
}

// Five points of chart.y as chart.x sweeps its range, everything else held at `values`.
export function curve(m, values = {}, n = 5) {
  const r = chartRange(m);
  const pts = [];
  for (let i = 0; i < n; i++) {
    const x = r.min + ((r.max - r.min) * i) / (n - 1);
    pts.push({ x, y: evaluateModel(m, { ...values, [m.chart.x]: x })[m.chart.y] });
  }
  return pts;
}

// The word shown for an output: a band label if the model defines bands, else the number.
export function display(output, value) {
  if (typeof value === "string") return value;
  if (output.bands) {
    for (const b of output.bands) if (b.upTo === undefined || value <= b.upTo) return b.text;
    return output.bands[output.bands.length - 1].text;
  }
  const d = output.decimals ?? 0;
  return d === 0 ? Math.round(value).toLocaleString("en-US") : Number(value).toFixed(d);
}

// The text next to a dial: the value (or its option label / display formula) and unit.
export function shownValue(m, q, value, values = {}) {
  if (q.options) {
    const opt = q.options.find((o) => o.value === value) || q.options.reduce((a, b) => (Math.abs(b.value - value) < Math.abs(a.value - value) ? b : a));
    return opt.label;
  }
  const v = q.valueFormula ? evaluate(q.valueFormula, { ...(m.constants || {}), ...defaults(m), ...values }) : value;
  const num = Number.isInteger(v) ? String(v) : String(Math.round(v * 10) / 10);
  // "1 cups" → "1 cup", "1 days" → "1 day"; leaves units like "°F" or "beats/min" alone
  const unit = q.unit && v === 1 ? q.unit.replace(/^([a-z]+)s(\b|$)/, "$1$2") : q.unit;
  return `${num}${unit ? " " + unit : ""}`;
}

// Which parameter keys does a formula actually use? (for the validator and tests)
export function keysUsed(m) {
  const used = new Set();
  const names = new Set(normalize(m).parameters.map((q) => q.key));
  for (const expr of Object.values(m.rules || {})) {
    for (const tok of String(expr).match(/[A-Za-z_][A-Za-z0-9_]*/g) || []) if (names.has(tok)) used.add(tok);
  }
  return used;
}
