// progress.js — device-local record of which cases are done and the best score (P1).
// localStorage only. Never affects scoring. Clearable. Stores no text, no sketches, nothing identifying.

const KEY = "vc.progress";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || { completed: {} }; } catch { return { completed: {} }; }
}
function save(p) {
  try { localStorage.setItem(KEY, JSON.stringify(p)); } catch { /* storage unavailable: progress is a convenience */ }
}

export function record(caseId, total) {
  const p = load();
  const prev = p.completed[caseId] || { best: 0, plays: 0 };
  p.completed[caseId] = { best: Math.max(prev.best, total), plays: prev.plays + 1 };
  save(p);
}
export function completed() { return load().completed; }
export function isDone(caseId) { return !!load().completed[caseId]; }
export function clearAll() { try { localStorage.removeItem(KEY); } catch { /* ignore */ } }
