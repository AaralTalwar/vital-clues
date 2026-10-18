// score.js — the four scoring rules. Identical for every case. Never speed.
//
//   Evidence use     0–30   4 per correct pin (max 16) + lead hypothesis (14 / 7 / 0)
//   Prediction       0–25   direction 10 + shape 10 (or 5) + second output 5
//   Interpretation   0–25   5 per concept found, best of two attempts
//   Transfer         0–20   20 first try, 10 second try, 0 otherwise

import { classify, directionOf } from "./sketch.js";

export function compute(caseFile, state) {
  const evidence = scoreEvidence(caseFile, state);
  const prediction = scorePrediction(caseFile, state);
  const interpretation = scoreInterpretation(caseFile, state);
  const transfer = scoreTransfer(caseFile, state);
  return {
    evidence: evidence.points,
    prediction: prediction.points,
    interpretation: interpretation.points,
    transfer: transfer.points,
    total: evidence.points + prediction.points + interpretation.points + transfer.points,
    rules: { evidence: evidence.rule, prediction: prediction.rule, interpretation: interpretation.rule, transfer: transfer.rule }
  };
}

// Is this pin (clue → hypothesis, label) what the evidence map says?
export function pinIsCorrect(caseFile, clueId, link) {
  if (!link) return false;
  const row = caseFile.evidence[link.hyp];
  if (!row) return false;
  const list = link.label === "supports" ? row.supports : row.doesntFit;
  return list.includes(Number(clueId));
}

function scoreEvidence(caseFile, state) {
  let correct = 0;
  for (const clue of caseFile.clues) {
    if (pinIsCorrect(caseFile, clue.id, state.links[clue.id])) correct++;
  }
  const pinPoints = correct * 4;
  const best = caseFile.hypotheses.find((h) => h.best).id;
  let leadPoints = 0, leadText;
  if (state.lead === best && state.leadFirstPick === best) { leadPoints = 14; leadText = `lead ${best} chosen first (14)`; }
  else if (state.lead === best) { leadPoints = 7; leadText = `lead ${best} chosen after revising (7)`; }
  else { leadText = `lead ${state.lead || "—"} was not the best-supported hypothesis (0)`; }
  return { points: pinPoints + leadPoints, rule: `${correct} of 4 clue pins matched the evidence (${pinPoints}) · ${leadText}` };
}

function scorePrediction(caseFile, state) {
  const expected = caseFile.prediction.expectedShape;      // e.g. "rises" or "rises-then-levels"
  const got = classify(state.sketch);
  const expectedDir = directionOf(expected);
  const dirPoints = got.direction === expectedDir ? 10 : 0;

  let shapePoints = 0;
  const bareDirection = ["rises", "falls", "flat"].includes(expected);
  if (dirPoints === 10) {
    if (bareDirection) shapePoints = 10;                    // any sub-shape in the right direction
    else if (got.shape === expected) shapePoints = 10;      // exact sub-shape
    else shapePoints = 5;                                   // right direction, different sub-shape
  }
  const second = caseFile.prediction.second;
  const secondPoints = state.secondDir === second.answer ? 5 : 0;

  const parts = [
    `curve ${dirPoints ? "goes the right way" : "goes the wrong way"} — ${expectedDir} (${dirPoints})`,
    `shape ${shapePoints === 10 ? "matches" : shapePoints === 5 ? "is close" : "differs"} (${shapePoints})`,
    `${second.question.replace(/\?$/, "")}: ${state.secondDir || "—"} (${secondPoints})`
  ];
  return { points: dirPoints + shapePoints + secondPoints, rule: parts.join(" · ") };
}

function scoreInterpretation(caseFile, state) {
  const attempts = state.explain.found || [];
  const best = attempts.reduce((m, arr) => Math.max(m, arr.length), 0);
  const which = attempts.length > 1 && attempts[1].length >= attempts[0].length ? "your revision" : "your first explanation";
  return { points: best * 5, rule: `${best} of 5 ideas found in ${attempts.length ? which : "your explanation"} (${best * 5})` };
}

function scoreTransfer(caseFile, state) {
  const answer = caseFile.transfer.answer;
  const tries = state.transfer.tries || [];
  if (tries[0] === answer) return { points: 20, rule: "correct on the first try (20)" };
  if (tries[1] === answer) return { points: 10, rule: "correct on the second try (10)" };
  return { points: 0, rule: "not quite — the answer is explained below (0)" };
}
