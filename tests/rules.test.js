import { test } from "node:test";
import assert from "node:assert/strict";
import { evaluate, tokenize } from "../js/rules.js";

test("tokenizer splits numbers, names and operators", () => {
  const t = tokenize("12 + 3.8 * I");
  assert.deepEqual(t.map((x) => x.value), [12, "+", 3.8, "*", "I"]);
});

test("lungs-heart formulas", () => {
  assert.equal(evaluate("12 + 3.8 * I", { I: 0 }), 12);
  assert.equal(evaluate("12 + 3.8 * I", { I: 10 }), 50);
  assert.equal(evaluate("65 + 12.5 * I", { I: 7 }), 152.5);
  assert.equal(evaluate("1 + 0.9 * I", { I: 10 }), 10);
});

test("precedence: * before +, parentheses override", () => {
  assert.equal(evaluate("2 + 3 * 4", {}), 14);
  assert.equal(evaluate("(2 + 3) * 4", {}), 20);
  assert.equal(evaluate("10 - 4 - 3", {}), 3);
  assert.equal(evaluate("100 / 4 / 5", {}), 5);
});

test("water-balance, temperature and nerves formulas (future models)", () => {
  assert.equal(evaluate("0.2 + 0.3 * I", { I: 8 }), 2.6);
  assert.equal(evaluate("max(0, (75 - T) / 25)", { T: 80 }), 0);
  assert.equal(evaluate("max(0, (75 - T) / 25)", { T: 50 }), 1);
  assert.equal(evaluate("100 - 60 * max(0, (75 - T) / 25)", { T: 50 }), 40);
  assert.equal(evaluate("min(10, max(0, 10 * (70 - T) / 20))", { T: 40 }), 10);
  assert.equal(evaluate("d / 20", { d: 30 }), 1.5);
  assert.equal(evaluate("max(0.19, 0.25 - 0.003 * P)", { P: 20 }), 0.19);
});

test("unary minus", () => {
  assert.equal(evaluate("-3 + 5", {}), 2);
  assert.equal(evaluate("2 * -I", { I: 4 }), -8);
});

test("rejects unknown identifiers and bad syntax", () => {
  assert.throws(() => evaluate("12 + Q", { I: 1 }), /Unknown name "Q"/);
  assert.throws(() => evaluate("12 +", {}), /ended early/);
  assert.throws(() => evaluate("(1 + 2", {}), /Expected/);
  assert.throws(() => evaluate("1 2", {}), /Leftover/);
  assert.throws(() => evaluate("alert(1)", {}), /Unknown name/);
});
