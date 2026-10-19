// app.js — boots the app and wires the screens that are mostly text:
// S0 splash, S0a how it works, S1 library, S2 case file, S7/S7a explain, S8/S8a transfer, S9/S9a case closed.

import { engine, el, clear, icon, openDialog } from "./engine.js";
import * as board from "./board.js";
import * as predict from "./predict.js";
import * as lab from "./lab.js";
import { check, firstMissing } from "./explain.js";
import { compute } from "./score.js";
import * as progress from "./progress.js";

// ---------- boot ----------

async function boot() {
  board.install(); predict.install(); lab.install();
  engine.on("S1", { enter: renderLibrary });
  engine.on("S2", { enter: renderCaseFile });
  engine.on("S7", { enter: renderExplain });
  engine.on("S7a", { enter: renderFeedback });
  engine.on("S8", { enter: renderTransfer });
  engine.on("S8a", { enter: renderSecondTry });
  engine.on("S9", { enter: renderClosed });

  document.getElementById("drawer-btn").addEventListener("click", () => engine.openDrawer());
  document.getElementById("splash-start").addEventListener("click", () => { localStorage.setItem("vc.seenSplash", "1"); engine.go("S1"); });
  document.getElementById("splash-how").addEventListener("click", () => engine.go("S0a"));
  document.getElementById("how-go").addEventListener("click", () => { localStorage.setItem("vc.seenSplash", "1"); engine.go("S1"); });
  document.getElementById("lib-how").addEventListener("click", () => engine.go("S0a"));

  const res = await fetch("cases/index.json");
  engine.library = (await res.json()).cases;

  let seen = false;
  try { seen = localStorage.getItem("vc.seenSplash") === "1"; } catch { /* storage may be unavailable */ }
  engine.go(seen ? "S1" : "S0", { push: false });
  history.replaceState({ screen: engine.current }, "", "#" + engine.current);

  registerServiceWorker();
  wireStrips();
}

// ---------- S1 library ----------

function renderLibrary() {
  const grid = document.getElementById("case-grid");
  clear(grid);
  const done = progress.completed();
  const count = engine.library.filter((x) => x.available).length;
  document.getElementById("lib-count").textContent = `${Object.keys(done).length} of ${count} cases closed`;
  for (const item of engine.library) {
    const card = el("button", { class: "case-card", type: "button", "data-colour": item.colour });
    card.disabled = !item.available;
    const swatch = el("div", { class: "swatch" }); swatch.appendChild(icon(item.illustration));
    const body = el("div");
    body.appendChild(el("h3", {}, item.title));
    body.appendChild(el("div", { class: "muted small" }, `${item.system} · about ${item.minutes} min`));
    const badges = el("div", { class: "badges" });
    badges.appendChild(el("span", { class: item.reviewed ? "badge badge-reviewed" : "badge badge-pending" }, item.reviewed ? "Teacher reviewed" : "Review pending"));
    if (done[item.id]) badges.appendChild(el("span", { class: "badge badge-done" }, `✓ Closed · best ${done[item.id].best}`));
    body.appendChild(badges);
    card.append(swatch, body);
    card.addEventListener("click", () => startCase(item.id));
    grid.appendChild(card);
  }
  document.getElementById("surprise").onclick = () => {
    const playable = engine.library.filter((x) => x.available);
    const unplayed = playable.filter((x) => !done[x.id]);
    const pool = unplayed.length ? unplayed : playable;
    startCase(pool[Math.floor(Math.random() * pool.length)].id);
  };
  document.getElementById("lib-clear").onclick = () => { progress.clearAll(); renderLibrary(); engine.toast("Progress on this device cleared."); };
}

async function startCase(caseId) {
  const c = await fetch(`cases/${caseId}.json`).then((r) => r.json());
  const m = await fetch(`models/${c.model}.json`).then((r) => r.json());
  engine.caseFile = c; engine.model = m;
  engine.newSession(caseId);
  predict.resetPad();
  engine.go("S2");
}

// ---------- S2 case file ----------

function renderCaseFile() {
  const c = engine.caseFile;
  const sec = document.getElementById("S2");
  sec.querySelector(".hero").dataset.colour = c.colour;
  const art = document.getElementById("case-art"); clear(art); art.appendChild(icon(c.illustration));
  document.getElementById("case-title").textContent = c.title;
  document.getElementById("case-briefing").textContent = c.briefing;
  document.getElementById("case-question").textContent = c.question;
  const chips = document.getElementById("case-chips"); clear(chips);
  [`${c.clues.length} clues`, "1 body lab", `about ${c.minutes} min`, c.system].forEach((t) => chips.appendChild(el("span", { class: "chip" }, t)));
  const reviewed = document.getElementById("case-reviewed");
  reviewed.textContent = c.reviewed ? `Teacher reviewed by ${c.reviewed.by} on ${c.reviewed.on}` : "Science review pending";
  reviewed.className = c.reviewed ? "badge badge-reviewed" : "badge badge-pending";

  const box = document.getElementById("ack");
  const row = document.getElementById("ack-row");
  // First case per session needs the checkbox (FR-02); later cases show the notice only.
  row.hidden = engine.sessionAcknowledged;
  box.checked = engine.sessionAcknowledged;
  const update = () => engine.setPrimaryEnabled(box.checked);
  box.onchange = update;

  engine.footer({
    back: "Library",
    onBack: () => engine.go("S1"),
    status: engine.sessionAcknowledged ? "" : "Tick the box to open the case.",
    primary: "Open the case",
    primaryEnabled: box.checked,
    onPrimary: () => {
      if (!engine.gate(box.checked, "Please tick the box first: this is a fictional case, not medical advice.", box)) return;
      engine.sessionAcknowledged = true;
      engine.go("S3");
    }
  });
}

// ---------- S7 explain it back ----------

function renderExplain() {
  const c = engine.caseFile, st = engine.state;
  document.getElementById("explain-prompt").textContent = c.question;
  const ta = document.getElementById("explain-text");
  ta.value = st.explain.attempts[0] || "";
  const counter = document.getElementById("explain-counter");
  const chips = document.getElementById("explain-chips"); clear(chips);
  c.concepts.forEach((k) => chips.appendChild(el("span", { class: "concept", "data-colour": k.colour, "data-found": "false" }, k.label)));
  const lead = c.hypotheses.find((h) => h.id === st.lead);
  document.getElementById("explain-reminder").textContent = `Your lead: ${lead.id} — ${lead.text} · Best clue: ${st.bestClue}`;

  const update = () => {
    counter.textContent = `${ta.value.length}/400`;
    engine.setPrimaryEnabled(ta.value.trim().length >= 20);
  };
  ta.oninput = update; update();

  engine.footer({
    back: "Lab",
    onBack: () => engine.go("S6"),
    status: "Write 1–3 sentences in your own words. Stays on this device.",
    primary: "Check my explanation",
    primaryEnabled: ta.value.trim().length >= 20,
    onPrimary: () => {
      if (!engine.gate(ta.value.trim().length >= 20, "Write at least 20 characters first", ta)) return;
      const text = ta.value.trim().slice(0, 400);
      const result = check(text, c.concepts);
      st.explain.attempts = [text]; st.explain.found = [result.found]; st.explain.marks = [result.marks];
      engine.go("S7a");
    }
  });
}

// ---------- S7a concept feedback ----------

function renderFeedback() {
  const c = engine.caseFile, st = engine.state;
  const attemptIndex = st.explain.attempts.length - 1;
  const text = st.explain.attempts[attemptIndex];
  const found = st.explain.found[attemptIndex];
  const marks = st.explain.marks[attemptIndex];
  const n = found.length;

  document.getElementById("fb-heading").textContent =
    n === 5 ? "You explained the whole mechanism" :
    n === 4 ? "Nice reasoning — one idea to add" :
    n >= 1 ? `Nice reasoning — ${5 - n} ideas to add` : "Let's build this up";

  // Highlighted student text, built from <mark> nodes (never innerHTML).
  const box = document.getElementById("fb-text"); clear(box);
  let pos = 0;
  for (const mk of marks) {
    if (mk.start > pos) box.appendChild(document.createTextNode(text.slice(pos, mk.start)));
    const concept = c.concepts.find((k) => k.id === mk.id);
    box.appendChild(el("mark", { "data-colour": concept.colour }, text.slice(mk.start, mk.end)));
    pos = mk.end;
  }
  if (pos < text.length) box.appendChild(document.createTextNode(text.slice(pos)));

  const chips = document.getElementById("fb-chips"); clear(chips);
  c.concepts.forEach((k) => chips.appendChild(el("span", { class: "concept", "data-colour": k.colour, "data-found": String(found.includes(k.id)) }, `${found.includes(k.id) ? "✓ " : ""}${k.label}`)));

  const missing = firstMissing(c.concepts, found);
  const hint = document.getElementById("fb-hint");
  const revise = document.getElementById("fb-revise");
  const canRevise = attemptIndex === 0 && n < 5;    // exactly one re-check (FR-18)
  hint.hidden = !missing;
  if (missing) hint.textContent = `Hint: ${missing.hint}`;
  revise.hidden = !canRevise;
  const ta = document.getElementById("fb-revision");
  ta.value = text;

  engine.footer({
    back: null,
    status: canRevise ? "You can revise once. The better attempt counts." : "",
    primary: canRevise ? "Re-check my revision" : "Continue",
    onPrimary: () => {
      if (!canRevise) { engine.go("S8"); return; }
      const t = ta.value.trim().slice(0, 400);
      if (!engine.gate(t.length >= 20, "Write at least 20 characters", ta)) return;
      const r = check(t, c.concepts);
      st.explain.attempts.push(t); st.explain.found.push(r.found); st.explain.marks.push(r.marks);
      renderFeedback();
      document.getElementById("S7a").querySelector("h2").focus();
    }
  });
  document.getElementById("fb-keep").hidden = !canRevise;
  document.getElementById("fb-keep").onclick = () => engine.go("S8");
}

// ---------- S8 transfer ----------

function renderTransfer() {
  const c = engine.caseFile, st = engine.state;
  const t = c.transfer;
  const art = document.getElementById("transfer-art"); clear(art); art.appendChild(icon(t.illustration));
  document.getElementById("transfer-context").textContent = t.context;
  renderOptions("transfer-options", "transfer", []);
  engine.footer({
    back: null,
    status: "20 points first try · 10 points second try",
    primary: "Submit answer",
    onPrimary: () => {
      const picked = document.querySelector("input[name='transfer']:checked");
      if (!engine.gate(!!picked, "Choose an answer first", document.getElementById("transfer-options"))) return;
      st.transfer.tries = [Number(picked.value)];
      engine.go(Number(picked.value) === t.answer ? "S9" : "S8a");
    }
  });
}

function renderSecondTry() {
  const c = engine.caseFile, st = engine.state;
  const t = c.transfer;
  const wrong = st.transfer.tries[0];
  document.getElementById("retry-heading").textContent = "Not that one — have another look at the evidence";
  document.getElementById("retry-hint").textContent = t.retryHint;
  const art = document.getElementById("retry-art"); clear(art); art.appendChild(icon(t.illustration));
  document.getElementById("retry-context").textContent = t.context;
  const openBtn = document.getElementById("retry-open-clue");
  openBtn.textContent = `Open clue ${t.retryClue} in the drawer`;
  openBtn.onclick = () => engine.hooks.openClue(t.retryClue, { readOnly: true });
  renderOptions("retry-options", "retry", [wrong]);
  engine.footer({
    back: null,                                           // no back from S8a (§6)
    status: "Second try: 10 points if correct.",
    primary: "Submit final answer",
    onPrimary: () => {
      const picked = document.querySelector("input[name='retry']:checked");
      if (!engine.gate(!!picked, "Choose an answer first", document.getElementById("retry-options"))) return;
      st.transfer.tries = [wrong, Number(picked.value)];
      engine.go("S9");
    }
  });
}

function renderOptions(wrapId, name, disabled) {
  const c = engine.caseFile;
  const wrap = document.getElementById(wrapId); clear(wrap);
  c.transfer.options.forEach((text, i) => {
    const label = el("label", { class: "option-row" });
    const input = el("input", { type: "radio", name, value: String(i) });
    if (disabled.includes(i)) input.disabled = true;
    label.append(input, el("span", {}, text));
    wrap.appendChild(label);
  });
}

// ---------- S9 case closed ----------

function renderClosed() {
  const c = engine.caseFile, st = engine.state, m = engine.model;
  const score = compute(c, st);
  st.score = score;
  progress.record(c.id, score.total);
  const ring = document.getElementById("score-ring");
  ring.style.setProperty("--pct", score.total);
  ring.querySelector("div").textContent = String(score.total);
  ring.setAttribute("aria-label", `Score ${score.total} out of 100`);

  const bars = document.getElementById("score-bars"); clear(bars);
  const spec = [
    ["evidence", "Evidence use", 30, "purple"], ["prediction", "Prediction", 25, "amber"],
    ["interpretation", "Interpretation", 25, "teal"], ["transfer", "Transfer", 20, "coral"]
  ];
  for (const [key, label, max, colour] of spec) {
    const bar = el("div", { class: "bar", "data-colour": colour });
    bar.appendChild(el("span", { class: "label" }, label));
    bar.appendChild(el("span", { class: "pts" }, `${score[key]} / ${max}`));
    const track = el("div", { class: "track", role: "img", "aria-label": `${label}: ${score[key]} of ${max}` });
    const fill = el("div", { class: "fill" }); track.appendChild(fill); bar.appendChild(track);
    bar.appendChild(el("span", { class: "rule" }, score.rules[key]));
    bars.appendChild(bar);
    requestAnimationFrame(() => { fill.style.width = `${(score[key] / max) * 100}%`; });
  }
  document.getElementById("takeaway").textContent = c.takeaway;

  const thumb = document.getElementById("closed-chart");
  lab.drawChart(thumb, m, { sketch: st.sketch, colour: m.colour });

  const tr = document.getElementById("closed-transfer"); clear(tr);
  const correct = c.transfer.options[c.transfer.answer];
  const got = st.transfer.tries[st.transfer.tries.length - 1] === c.transfer.answer;
  tr.appendChild(el("p", {}, `${got ? "You chose the right answer: " : "The right answer was: "}"${correct}"`));
  tr.appendChild(el("p", { class: "muted" }, c.transfer.explanation));

  document.getElementById("closed-replay").onclick = () => openReplay("replay");
  document.getElementById("closed-next").onclick = () => openReplay("finish");
  engine.footer({ back: null, status: "", primary: null });
}

function openReplay(mode) {
  const dlg = document.getElementById("replay-dialog");
  document.getElementById("replay-title").textContent = mode === "replay" ? "Start the case again?" : "Finish and go back to the library?";
  document.getElementById("replay-go").textContent = mode === "replay" ? "Replay from the start" : "Finish";
  document.getElementById("replay-go").onclick = () => {
    dlg.close();
    const id = engine.state.caseId;
    engine.state = null; engine.caseFile = null; engine.model = null;   // nothing survives replay (FR-21)
    predict.resetPad();
    if (mode === "replay") startCase(id); else engine.go("S1");
  };
  document.getElementById("replay-cancel").onclick = () => dlg.close();
  openDialog(dlg);
}

// ---------- offline + install strips (S14) ----------

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  try { navigator.serviceWorker.register("sw.js").catch(() => {}); } catch { /* not on this origin */ }
}

function wireStrips() {
  const offline = document.getElementById("strip-offline");
  const update = () => { offline.hidden = navigator.onLine; };
  window.addEventListener("online", update); window.addEventListener("offline", update); update();

  const install = document.getElementById("strip-install");
  const text = document.getElementById("strip-install-text");
  const btn = document.getElementById("strip-install-btn");
  let shown = false;
  try { shown = localStorage.getItem("vc.installShown") === "1"; } catch { /* ignore */ }
  const dismiss = () => { install.hidden = true; try { localStorage.setItem("vc.installShown", "1"); } catch { /* ignore */ } };
  document.getElementById("strip-install-x").onclick = dismiss;
  if (shown) return;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const standalone = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
  if (standalone) return;
  if (isIOS) {
    // iOS has no install prompt: show the Share → Add to Home Screen hint once.
    text.textContent = "Add Vital Clues to your home screen: tap Share, then “Add to Home Screen”.";
    btn.hidden = true; install.hidden = false;
  } else {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      text.textContent = "Install Vital Clues on this device to play offline.";
      btn.hidden = false; install.hidden = false;
      btn.onclick = async () => { e.prompt(); await e.userChoice; dismiss(); };
    });
  }
}

boot();
