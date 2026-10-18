import { test } from "node:test";
import assert from "node:assert/strict";
import { classify, PRESETS, directionOf } from "../js/sketch.js";

test("the four presets classify as themselves", () => {
  assert.deepEqual(classify(PRESETS["rises-then-levels"]), { direction: "rises", shape: "rises-then-levels" });
  assert.deepEqual(classify(PRESETS["straight-rise"]), { direction: "rises", shape: "straight-rise" });
  assert.deepEqual(classify(PRESETS["flat"]), { direction: "flat", shape: "flat" });
  assert.deepEqual(classify(PRESETS["falls"]), { direction: "falls", shape: "straight-fall" });
});

test("a noisy hand-drawn rise (the §10.5 worked example)", () => {
  const r = classify([0.22, 0.38, 0.52, 0.62, 0.66]);
  assert.equal(r.direction, "rises");
  assert.equal(r.shape, "rises-then-levels");
});

test("a wobbly straight rise", () => {
  assert.equal(classify([0.15, 0.37, 0.48, 0.71, 0.85]).shape, "straight-rise");
});

test("a fall", () => {
  const r = classify([0.8, 0.75, 0.5, 0.3, 0.2]);
  assert.equal(r.direction, "falls");
});

test("Case 3 flat-then-rises", () => {
  assert.deepEqual(classify([0.1, 0.1, 0.15, 0.5, 0.9]), { direction: "rises", shape: "flat-then-rises" });
});

test("small wobbles count as flat", () => {
  assert.equal(classify([0.5, 0.55, 0.5, 0.45, 0.58]).direction, "flat");
});

test("directionOf reads the expectedShape", () => {
  assert.equal(directionOf("rises"), "rises");
  assert.equal(directionOf("rises-then-levels"), "rises");
  assert.equal(directionOf("flat-then-rises"), "rises");
  assert.equal(directionOf("falls"), "falls");
  assert.equal(directionOf("flat"), "flat");
});
