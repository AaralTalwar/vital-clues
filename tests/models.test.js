import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { curve, evaluateModel } from "../js/lab.js";
import { classify, directionOf } from "../js/sketch.js";

// Every case's expected sketch shape must match what its own model actually draws.
const dir = new URL("../cases/", import.meta.url);
for (const f of readdirSync(dir)) {
  if (f === "index.json") continue;
  const c = JSON.parse(readFileSync(new URL(f, dir)));
  const m = JSON.parse(readFileSync(new URL(`../models/${c.model}.json`, import.meta.url)));
  test(`${c.id}: model curve has the shape the case expects (${c.prediction.expectedShape})`, () => {
    const inputs = { [m.inputs.primary.key]: c.labDefaults.primary };
    if (m.inputs.secondary) inputs[m.inputs.secondary.key] = c.labDefaults.secondary ?? m.inputs.secondary.default ?? m.inputs.secondary.min;
    const pts = curve(m, inputs);
    const ys = pts.map((p) => p.y);
    const lo = Math.min(...ys), hi = Math.max(...ys);
    const norm = ys.map((y) => (hi === lo ? 0.5 : (y - lo) / (hi - lo)));
    const got = classify(norm);
    const exp = c.prediction.expectedShape;
    assert.equal(got.direction, directionOf(exp), `direction: curve ${JSON.stringify(ys.map((y) => +y.toFixed(2)))} classified ${got.shape}`);
    if (!["rises", "falls", "flat"].includes(exp)) assert.equal(got.shape, exp, `shape: curve ${JSON.stringify(ys.map((y) => +y.toFixed(2)))} classified ${got.shape}`);
    // chart bounds contain the curve
    assert.ok(lo >= (m.chart.yMin ?? -Infinity) - 1e-9 && hi <= (m.chart.yMax ?? Infinity) + 1e-9, `curve ${lo}–${hi} outside chart ${m.chart.yMin}–${m.chart.yMax}`);
  });
  test(`${c.id}: every output is finite across the input ranges`, () => {
    const p = m.inputs.primary, s = m.inputs.secondary;
    for (let a = p.min; a <= p.max; a += p.step) {
      const svals = s ? [s.min, s.max] : [0];
      for (const b of svals) {
        const inputs = { [p.key]: a }; if (s) inputs[s.key] = b;
        if (m.chart.xNow !== undefined) inputs[m.chart.x] = m.chart.xNow;
        const out = evaluateModel(m, inputs);
        for (const o of m.outputs) if (o.text === undefined) assert.ok(Number.isFinite(out[o.key]), `${o.key} not finite at ${JSON.stringify(inputs)}`);
      }
    }
  });
}
