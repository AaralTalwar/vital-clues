// explain.js — the concept checker.
//
// The student writes a short explanation. Each case lists 5 concepts, and each
// concept has a list of synonyms (words a 13-year-old might actually use).
// A concept counts as "found" if ANY of its synonyms appears in the text as a
// whole word or whole phrase. "heart" must match "heart" but NOT "hearty".
// Everything happens on the device: no network, no AI.

// Turn "Her LUNGS breathe faster, so..." into " her lungs breathe faster so "
export function normalise(text) {
  return " " + text
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")   // punctuation → space
    .replace(/\s+/g, " ")           // collapse runs of spaces
    .trim() + " ";                  // pad so " word " matching works at the edges
}

// check(text, concepts) → { found: ["muscles", ...], marks: [{start, end, id}] }
// `marks` are character ranges in the ORIGINAL text, used to draw <mark> highlights.
export function check(text, concepts) {
  const found = [];
  const marks = [];
  const lower = text.toLowerCase();

  for (const concept of concepts) {
    let hit = false;
    for (const syn of concept.synonyms) {
      const range = findWholeWord(lower, syn.toLowerCase());
      if (range) {
        hit = true;
        marks.push({ start: range.start, end: range.end, id: concept.id });
        break; // one highlight per concept is enough
      }
    }
    if (hit) found.push(concept.id);
  }

  marks.sort((a, b) => a.start - b.start);
  return { found, marks: dropOverlaps(marks) };
}

// Find `phrase` in `text` where the characters just before and after are not letters/digits.
function findWholeWord(text, phrase) {
  let from = 0;
  while (true) {
    const start = text.indexOf(phrase, from);
    if (start === -1) return null;
    const end = start + phrase.length;
    const before = start === 0 ? " " : text[start - 1];
    const after = end >= text.length ? " " : text[end];
    if (!isWordChar(before) && !isWordChar(after)) return { start, end };
    from = start + 1;
  }
}

function isWordChar(ch) {
  return /[a-z0-9]/.test(ch);
}

// If two highlights overlap (rare), keep the first.
function dropOverlaps(marks) {
  const kept = [];
  let lastEnd = -1;
  for (const m of marks) {
    if (m.start >= lastEnd) { kept.push(m); lastEnd = m.end; }
  }
  return kept;
}

// The hint for the first concept (in case-file order) that was not found.
export function firstMissing(concepts, found) {
  return concepts.find((c) => !found.includes(c.id)) || null;
}
