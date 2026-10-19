import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { normalize, curve, evaluateModel, defaults, primaryOf } from "../js/model.js";
import { classify, directionOf } from "../js/sketch.js";

// For every case: its model's curve has the shape the case expects, every output is a real
// number across the dial ranges, and every dial the student can turn actually changes something.
const dir = new URL("../cases/", import.meta.url);
for (const f of readdirSync(dir)) {
  if (f === "index.json") continue;
  const c = JSON.parse(readFileSync(new URL(f, dir)));
  const m = normalize(JSON.parse(readFileSync(new URL(`../models/${c.model}.json`, import.meta.url))));
  const p = primaryOf(m);
  const caseValues = { ...defaults(m), ...(c.labDefaults && c.labDefaults.primary !== undefined ? { [p.key]: c.labDefaults.primary } : {}) };
  if (c.labDefaults && c.labDefaults.secondary !== undefined && m.parameters[1] && !m.parameters.some((q) => q.role === "factor")) caseValues[m.parameters[1].key] = c.labDefaults.secondary;

  test(`${c.id}: model curve has the shape the case expects (${c.prediction.expectedShape})`, () => {
    const ys = curve(m, caseValues).map((pt) => pt.y);
    const lo = Math.min(...ys), hi = Math.max(...ys);
    const norm = ys.map((y) => (hi === lo ? 0.5 : (y - lo) / (hi - lo)));
    const got = classify(norm);
    const exp = c.prediction.expectedShape;
    assert.equal(got.direction, directionOf(exp), `direction: curve ${JSON.stringify(ys.map((y) => +y.toFixed(2)))} classified ${got.shape}`);
    if (!["rises", "falls", "flat"].includes(exp)) assert.equal(got.shape, exp, `shape: curve ${JSON.stringify(ys.map((y) => +y.toFixed(2)))} classified ${got.shape}`);
    assert.ok(lo >= (m.chart.yMin ?? -Infinity) - 1e-9 && hi <= (m.chart.yMax ?? Infinity) + 1e-9, `curve ${lo}–${hi} outside chart ${m.chart.yMin}–${m.chart.yMax}`);
  });

  test(`${c.id}: every output is finite across the dial ranges`, () => {
    for (const q of m.parameters) {
      for (const v of [q.min, q.max, (q.min + q.max) / 2]) {
        const out = evaluateModel(m, { ...caseValues, [q.key]: v });
        for (const o of m.outputs) if (o.text === undefined) assert.ok(Number.isFinite(out[o.key]), `${o.key} not finite when ${q.key}=${v}`);
      }
    }
  });

  if (m.parameters.some((q) => q.role === "bubble" || q.role === "factor")) {
    test(`${c.id}: every bubble and case factor changes at least one output`, () => {
      const base = evaluateModel(m, caseValues);
      for (const q of m.parameters.filter((x) => x.role !== "primary")) {
        const moved = [q.min, q.max].some((v) => {
          const out = evaluateModel(m, { ...caseValues, [q.key]: v });
          return m.outputs.some((o) => o.text === undefined && Math.abs(out[o.key] - base[o.key]) > 1e-6);
        });
        assert.ok(moved, `dial "${q.label}" (${q.key}) changes nothing`);
      }
    });
  }
}
