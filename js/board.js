// board.js — evidence board (S3), clue modal (S3a), pin chooser (S3b), board check + lead (S4).

import { engine, el, clear, icon, openDialog } from "./engine.js";
import { pinIsCorrect } from "./score.js";

let armedClue = null;   // a read clue the student tapped, waiting for a hypothesis tap

export function install() {
  engine.on("S3", { enter: renderBoard });
  engine.on("S4", { enter: renderCheck });
  engine.hooks.openClue = openClue;
}

// ---------- S3 evidence board ----------

function renderBoard() {
  const c = engine.caseFile, st = engine.state;
  armedClue = null;
  const row = document.getElementById("clue-row");
  clear(row);
  for (const clue of c.clues) {
    const read = st.read.includes(clue.id);
    const card = el("button", { class: "clue-card", type: "button", id: `clue-${clue.id}`, "data-colour": clue.colour, "data-read": String(read),
      "aria-label": read ? `Clue ${clue.id}: ${clue.title}${st.links[clue.id] ? ", pinned to " + st.links[clue.id].hyp : ", not pinned"}` : `Clue ${clue.id}, face down. Tap to read.` });
    card.appendChild(icon(clue.icon));
    card.appendChild(el("span", {}, read ? clue.title : `Clue ${clue.id}`));
    const link = st.links[clue.id];
    if (link) card.appendChild(el("span", { class: "pin" }, `→ ${link.hyp} ${link.label === "supports" ? "✓" : "✗"}`));
    card.addEventListener("click", () => {
      if (!read) { openClue(clue.id); return; }
      if (engine.locked()) { openClue(clue.id, { readOnly: true }); return; }
      // read clue: arm it, then wait for a hypothesis tap
      armedClue = armedClue === clue.id ? null : clue.id;
      row.querySelectorAll(".clue-card").forEach((b) => b.dataset.selected = String(b === card && armedClue !== null));
      document.querySelectorAll(".hyp-card").forEach((h) => h.dataset.armed = String(armedClue !== null));
      engine.setStatus(armedClue ? `Clue ${clue.id} selected — now tap a hypothesis to pin it` : "");
    });
    row.appendChild(card);
  }

  const grid = document.getElementById("hyp-grid");
  clear(grid);
  for (const hyp of c.hypotheses) {
    const card = el("button", { class: "hyp-card", type: "button", "data-armed": "false", "aria-label": `Hypothesis ${hyp.id}: ${hyp.text}` });
    card.appendChild(el("span", { class: "letter" }, `Hypothesis ${hyp.id}`));
    card.appendChild(el("span", {}, hyp.text));
    const pins = el("div", { class: "pins" });
    for (const [clueId, link] of Object.entries(st.links)) {
      if (link.hyp !== hyp.id) continue;
      const clue = c.clues.find((x) => x.id === Number(clueId));
      pins.appendChild(el("span", { class: "pin-tag", "data-colour": clue.colour, "data-label": link.label }, `Clue ${clueId} ${link.label === "supports" ? "✓ supports" : "✗ doesn't fit"}`));
    }
    card.appendChild(pins);
    card.addEventListener("click", () => {
      if (armedClue === null) { engine.toast("Tap a clue first, then a hypothesis."); return; }
      openPinChooser(armedClue, hyp.id);
    });
    grid.appendChild(card);
  }

  const pinned = Object.keys(st.links).length;
  document.getElementById("counts").textContent = `${st.read.length} of 4 read · ${pinned} of 4 pinned`;
  engine.updateDrawerCount();
  engine.footer({
    back: "Case file",
    onBack: () => engine.go("S2"),
    status: pinned === 4 ? "All four clues pinned." : "Open each clue, then pin it to a hypothesis.",
    primary: "Choose lead hypothesis",
    primaryEnabled: pinned === 4,
    onPrimary: () => {
      const missing = c.clues.find((cl) => !st.links[cl.id]);
      if (!engine.gate(!missing, `Pin all four clues first — clue ${missing ? missing.id : ""} is not pinned yet`, missing && document.getElementById(`clue-${missing.id}`))) return;
      engine.go("S4");
    }
  });
}

// ---------- S3a clue modal ----------

export function openClue(clueId, { readOnly = false } = {}) {
  const c = engine.caseFile, st = engine.state;
  const clue = c.clues.find((x) => x.id === clueId);
  const dlg = document.getElementById("clue-modal");
  dlg.querySelector(".modal-head").dataset.colour = clue.colour;
  const ic = document.getElementById("clue-modal-icon"); clear(ic); ic.appendChild(icon(clue.icon));
  document.getElementById("clue-modal-title").textContent = `Clue ${clue.id}: ${clue.title}`;
  document.getElementById("clue-modal-text").textContent = clue.text;

  const vis = document.getElementById("clue-modal-visual");
  clear(vis);
  if (clue.visual && clue.visual.type === "bars") {
    const wrap = el("div", { class: "mini-bars", "data-colour": clue.colour, role: "img", "aria-label": `${clue.visual.from} to ${clue.visual.to} ${clue.visual.unit}` });
    const max = Math.max(clue.visual.from, clue.visual.to);
    const a = el("div", {}, String(clue.visual.from)); a.style.height = `${Math.max(25, (clue.visual.from / max) * 100)}%`;
    const b = el("div", {}, String(clue.visual.to)); b.style.height = `${Math.max(25, (clue.visual.to / max) * 100)}%`;
    wrap.append(a, b);
    vis.appendChild(wrap);
    vis.appendChild(el("p", { class: "muted small" }, `before → after · ${clue.visual.unit}`));
  }

  if (!st.read.includes(clue.id)) st.read.push(clue.id);
  engine.updateDrawerCount();

  const nextBtn = document.getElementById("clue-modal-next");
  const pinBtn = document.getElementById("clue-modal-pin");
  const unread = c.clues.find((x) => !st.read.includes(x.id));
  nextBtn.hidden = readOnly || !unread;
  nextBtn.onclick = () => { dlg.close(); openClue(unread.id); };
  pinBtn.hidden = readOnly || engine.locked();
  pinBtn.textContent = st.links[clue.id] ? "Move this pin" : "Pin this clue";
  pinBtn.onclick = () => {
    dlg.close();
    armedClue = clue.id;
    if (engine.current !== "S3") engine.go("S3");
    document.querySelectorAll(".clue-card").forEach((b) => b.dataset.selected = String(b.id === `clue-${clue.id}`));
    document.querySelectorAll(".hyp-card").forEach((h) => h.dataset.armed = "true");
    engine.setStatus(`Clue ${clue.id} selected — now tap a hypothesis to pin it`);
  };
  dlg.addEventListener("close", () => { if (engine.current === "S3" && !armedClue) renderBoard(); }, { once: true });
  openDialog(dlg);
}

// ---------- S3b pin chooser ----------

function openPinChooser(clueId, hypId) {
  const c = engine.caseFile, st = engine.state;
  const hyp = c.hypotheses.find((h) => h.id === hypId);
  const dlg = document.getElementById("pin-modal");
  document.getElementById("pin-modal-title").textContent = `Clue ${clueId} → Hypothesis ${hypId}`;
  document.getElementById("pin-modal-q").textContent = `Does clue ${clueId} support "${hyp.text}" — or does it not fit?`;
  const choose = (label) => {
    st.links[clueId] = { hyp: hypId, label };        // no correctness feedback here (FR-07)
    if (st.boardCheckedOnce) st.boardRevised = true;
    armedClue = null;
    dlg.close();
    renderBoard();
  };
  document.getElementById("pin-supports").onclick = () => choose("supports");
  document.getElementById("pin-doesnt").onclick = () => choose("doesntFit");
  document.getElementById("pin-cancel").onclick = () => { dlg.close(); };
  openDialog(dlg);
}

// The hint for a wrong pin. An explicit mismatchHint wins; otherwise compose one from
// the clue's "shows" sentence and the hypothesis's "flaw" sentence (both authored in the case file).
export function hintFor(c, clue, link) {
  const explicit = (c.mismatchHints || []).find((h) => h.clue === clue.id && h.hyp === link.hyp && h.label === link.label);
  if (explicit) return explicit.hint;
  const hyp = c.hypotheses.find((h) => h.id === link.hyp);
  const shows = clue.shows ? `Clue ${clue.id} shows ${clue.shows}` : `Look at clue ${clue.id} again`;
  if (hyp.best && link.label === "doesntFit") return `${shows} — that is exactly what hypothesis ${hyp.id} predicts, so this clue supports it.`;
  if (!hyp.best && link.label === "supports") return `${shows}. ${hyp.flaw || `That does not actually point to hypothesis ${hyp.id}.`}`;
  if (!hyp.best && link.label === "doesntFit") return `${shows}. Hypothesis ${hyp.id} is not the best idea here, but this clue is not the evidence against it — check the clue that is.`;
  return `${shows}. Does it really point where you pinned it?`;
}

// ---------- S4 board check + lead ----------

function renderCheck() {
  const c = engine.caseFile, st = engine.state;
  st.boardCheckedOnce = true;

  // Find at most one mismatched pin and its authored hint (FR-09). No score shown.
  const box = document.getElementById("board-check");
  clear(box);
  let mismatch = null;
  for (const clue of c.clues) {
    const link = st.links[clue.id];
    if (!pinIsCorrect(c, clue.id, link)) {
      mismatch = { clue, link, hint: hintFor(c, clue, link) };
      break;
    }
  }
  if (mismatch) {
    box.className = "card card-tip";
    box.appendChild(el("h3", {}, `Board check: one pin to look at again`));
    box.appendChild(el("p", {}, `You pinned clue ${mismatch.clue.id} (${mismatch.clue.title}) to hypothesis ${mismatch.link.hyp} as "${mismatch.link.label === "supports" ? "supports" : "doesn't fit"}".`));
    box.appendChild(el("p", {}, mismatch.hint));
    box.appendChild(el("button", { class: "btn btn-ghost", type: "button", onclick: () => engine.go("S3") }, "Move a clue"));
  } else {
    box.className = "card";
    box.appendChild(el("h3", {}, "Board check: every pin matches the evidence"));
    box.appendChild(el("p", { class: "muted" }, "Nice work. Now choose the hypothesis the evidence supports best."));
  }

  // Lead hypothesis radios
  const rows = document.getElementById("lead-rows");
  clear(rows);
  for (const hyp of c.hypotheses) {
    const label = el("label", { class: "radio-row" });
    const input = el("input", { type: "radio", name: "lead", value: hyp.id });
    if (st.lead === hyp.id) input.checked = true;
    input.addEventListener("change", () => {
      if (!st.leadFirstPick) st.leadFirstPick = hyp.id;   // the first-pick bonus (§10.1)
      st.lead = hyp.id;
      renderBestClue();
      updatePrimary();
    });
    const body = el("div");
    body.appendChild(el("b", {}, `${hyp.id}. `));
    body.appendChild(el("span", {}, hyp.text));
    const pins = el("div", { class: "pins" });
    for (const [clueId, link] of Object.entries(st.links)) {
      if (link.hyp !== hyp.id) continue;
      const clue = c.clues.find((x) => x.id === Number(clueId));
      pins.appendChild(el("span", { class: "pin-tag", "data-colour": clue.colour, "data-label": link.label }, `Clue ${clueId} ${link.label === "supports" ? "✓" : "✗"}`));
    }
    body.appendChild(pins);
    label.append(input, body);
    rows.appendChild(label);
  }

  function renderBestClue() {
    const pills = document.getElementById("best-pills");
    clear(pills);
    if (!st.lead) { pills.appendChild(el("p", { class: "muted small" }, "Choose a lead hypothesis first.")); return; }
    for (const clue of c.clues) {
      const b = el("button", { class: "pill", type: "button", "aria-pressed": String(st.bestClue === clue.id) }, `Clue ${clue.id}: ${clue.title}`);
      b.addEventListener("click", () => {
        st.bestClue = clue.id;
        pills.querySelectorAll(".pill").forEach((p) => p.setAttribute("aria-pressed", String(p === b)));
        updatePrimary();
      });
      pills.appendChild(b);
    }
  }
  renderBestClue();

  function updatePrimary() {
    const ok = !!(st.lead && st.bestClue);
    engine.setPrimaryEnabled(ok);
    engine.setStatus(ok ? "Locking in freezes your board." : "Pick a lead and the clue that best supports it.");
  }

  engine.footer({
    back: "Board",
    onBack: () => engine.go("S3"),
    status: "",
    primary: "Lock it in and predict",
    primaryEnabled: !!(st.lead && st.bestClue),
    onPrimary: () => {
      if (!engine.gate(!!st.lead, "Choose a lead hypothesis first", rows)) return;
      if (!engine.gate(!!st.bestClue, "Which clue best supports your lead?", document.getElementById("best-pills"))) return;
      st.lockedIn = true;   // board and drawer are read-only from here (FR-10)
      engine.go("S5");
    }
  });
  updatePrimary();
}
