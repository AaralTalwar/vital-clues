import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { compute } from "../js/score.js";

const caseFile = JSON.parse(readFileSync(new URL("../cases/tired-athlete.json", import.meta.url)));

function baseState() {
  return {
    links: { 1: { hyp: "B", label: "supports" }, 2: { hyp: "B", label: "supports" }, 3: { hyp: "B", label: "supports" }, 4: { hyp: "B", label: "supports" } },
    leadFirstPick: "B", lead: "B",
    sketch: [0.1, 0.3, 0.5, 0.7, 0.9], secondDir: "up",
    explain: { attempts: ["x", "y"], found: [["muscles", "oxygen", "lungs", "stops"], ["muscles", "oxygen", "lungs", "heart", "stops"]] },
    transfer: { tries: [1] }
  };
}

test("§10.5 worked example totals 86", () => {
  const s = baseState();
  s.links[2] = { hyp: "A", label: "supports" };          // 3 of 4 pins correct → 12
  s.sketch = [0.22, 0.38, 0.52, 0.62, 0.66];             // rises-then-levels vs expected "rises" → 10 + 10
  s.transfer.tries = [2, 1];                              // second try → 10
  const r = compute(caseFile, s);
  assert.equal(r.evidence, 26);
  assert.equal(r.prediction, 25);
  assert.equal(r.interpretation, 25);
  assert.equal(r.transfer, 10);
  assert.equal(r.total, 86);
});

test("a perfect run totals 100", () => {
  assert.equal(compute(caseFile, baseState()).total, 100);
});

test("an all-wrong run totals 0", () => {
  const s = {
    links: { 1: { hyp: "A", label: "supports" }, 2: { hyp: "A", label: "supports" }, 3: { hyp: "C", label: "supports" }, 4: { hyp: "D", label: "supports" } },
    leadFirstPick: "A", lead: "A",
    sketch: [0.9, 0.7, 0.5, 0.3, 0.1], secondDir: "down",
    explain: { attempts: ["nothing"], found: [[]] },
    transfer: { tries: [0, 2] }
  };
  assert.equal(compute(caseFile, s).total, 0);
});

test("lead picked after revising earns 7, not 14", () => {
  const s = baseState();
  s.leadFirstPick = "A";
  assert.equal(compute(caseFile, s).evidence, 16 + 7);
});

test("a clue pinned 'doesn't fit' on a hypothesis it supports scores 0 for that pin", () => {
  const s = baseState();
  s.links[1] = { hyp: "B", label: "doesntFit" };
  assert.equal(compute(caseFile, s).evidence, 12 + 14);
});

test("a doesn't-fit pin on A for clue 4 is correct", () => {
  const s = baseState();
  s.links[4] = { hyp: "A", label: "doesntFit" };
  assert.equal(compute(caseFile, s).evidence, 16 + 14);
});

test("the revision never lowers the interpretation score", () => {
  const s = baseState();
  s.explain.found = [["muscles", "oxygen", "lungs", "heart", "stops"], ["muscles"]];
  assert.equal(compute(caseFile, s).interpretation, 25);
});

test("wrong direction scores 0 for shape too; second output independent", () => {
  const s = baseState();
  s.sketch = [0.9, 0.7, 0.5, 0.3, 0.1];
  assert.equal(compute(caseFile, s).prediction, 5);
});

test("sub-class mismatch earns 5 when the case specifies a sub-class", () => {
  const specific = structuredClone(caseFile);
  specific.prediction.expectedShape = "rises-then-levels";
  const s = baseState();           // straight rise
  assert.equal(compute(specific, s).prediction, 10 + 5 + 5);
});
