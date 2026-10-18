import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { check, normalise, firstMissing } from "../js/explain.js";

const caseFile = JSON.parse(readFileSync(new URL("../cases/tired-athlete.json", import.meta.url)));
const concepts = caseFile.concepts;

test("normalise lower-cases, strips punctuation and pads", () => {
  assert.equal(normalise("Her LUNGS breathe faster, so..."), " her lungs breathe faster so ");
});

test("whole-word matching: 'hearty' must not match 'heart'", () => {
  assert.deepEqual(check("a hearty meal", concepts).found, []);
  assert.deepEqual(check("her heart pounds", concepts).found, ["heart"]);
});

test("phrase synonyms match as whole phrases", () => {
  assert.ok(check("then things slow down again", concepts).found.includes("stops"));
});

test("punctuation and case do not matter", () => {
  const r = check("Her MUSCLES need OXYGEN! So her lungs, and heart, speed up; then she rests.", concepts);
  assert.deepEqual(r.found, ["muscles", "oxygen", "lungs", "heart", "stops"]);
});

test("highlight ranges point at the right characters", () => {
  const text = "Her legs need more air.";
  const r = check(text, concepts);
  const words = r.marks.map((m) => text.slice(m.start, m.end));
  assert.deepEqual(words, ["legs", "air"]);
});

test("firstMissing follows case-file order", () => {
  assert.equal(firstMissing(concepts, ["oxygen", "lungs"]).id, "muscles");
  assert.equal(firstMissing(concepts, ["muscles", "oxygen", "lungs", "heart", "stops"]), null);
});
