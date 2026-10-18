// rules.js — a tiny calculator for the model formulas.
//
// Model files hold formulas as plain text, like "12 + 3.8 * I".
// We never use eval() on text (it would run ANY code, which is unsafe).
// Instead we read the text ourselves in two steps:
//   1. tokenize: split "12 + 3.8 * I" into pieces: 12, +, 3.8, *, I
//   2. parse:    walk the pieces and work out the answer, obeying
//                the usual order of operations (* and / before + and -).

const OPERATORS = "+-*/(),";

export function tokenize(expr) {
  const tokens = [];
  let i = 0;
  while (i < expr.length) {
    const ch = expr[i];
    if (ch === " ") { i++; continue; }
    if (OPERATORS.includes(ch)) { tokens.push({ type: "op", value: ch }); i++; continue; }
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      let num = "";
      while (i < expr.length && ((expr[i] >= "0" && expr[i] <= "9") || expr[i] === ".")) num += expr[i++];
      tokens.push({ type: "num", value: Number(num) });
      continue;
    }
    if (/[A-Za-z_]/.test(ch)) {
      let name = "";
      while (i < expr.length && /[A-Za-z0-9_]/.test(expr[i])) name += expr[i++];
      tokens.push({ type: "name", value: name });
      continue;
    }
    throw new Error(`Unexpected character "${ch}" in "${expr}"`);
  }
  return tokens;
}

// evaluate("12 + 3.8 * I", { I: 7 }) → 38.6
export function evaluate(expr, vars = {}) {
  const tokens = tokenize(expr);
  let pos = 0;
  const peek = () => tokens[pos];
  const next = () => tokens[pos++];
  const isOp = (v) => peek() && peek().type === "op" && peek().value === v;

  // sum → product (+ or − product)*
  function sum() {
    let value = product();
    while (isOp("+") || isOp("-")) {
      const op = next().value;
      const right = product();
      value = op === "+" ? value + right : value - right;
    }
    return value;
  }
  // product → unit (* or / unit)*
  function product() {
    let value = unit();
    while (isOp("*") || isOp("/")) {
      const op = next().value;
      const right = unit();
      value = op === "*" ? value * right : value / right;
    }
    return value;
  }
  // unit → number | variable | max(...) | min(...) | (sum) | -unit
  function unit() {
    const t = next();
    if (!t) throw new Error(`Formula ended early: "${expr}"`);
    if (t.type === "num") return t.value;
    if (t.type === "op" && t.value === "-") return -unit();
    if (t.type === "op" && t.value === "(") {
      const value = sum();
      expect(")");
      return value;
    }
    if (t.type === "name") {
      if (t.value === "max" || t.value === "min") {
        expect("(");
        const args = [sum()];
        while (isOp(",")) { next(); args.push(sum()); }
        expect(")");
        return t.value === "max" ? Math.max(...args) : Math.min(...args);
      }
      if (!(t.value in vars)) throw new Error(`Unknown name "${t.value}" in "${expr}"`);
      return vars[t.value];
    }
    throw new Error(`Unexpected "${t.value}" in "${expr}"`);
  }
  function expect(ch) {
    const t = next();
    if (!t || t.type !== "op" || t.value !== ch) throw new Error(`Expected "${ch}" in "${expr}"`);
  }

  const result = sum();
  if (pos < tokens.length) throw new Error(`Leftover text in "${expr}"`);
  return result;
}
