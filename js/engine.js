// engine.js — screen router, session state, gates, toast, progress strip, clue drawer.
// Every other module imports from here. This file knows nothing about any case's content.

export const STEPS = [
  { id: "S3", label: "Evidence" },
  { id: "S4", label: "Lead" },
  { id: "S5", label: "Predict" },
  { id: "S6", label: "Lab" },
  { id: "S7", label: "Explain" },
  { id: "S8", label: "Transfer" }
];
const STEP_OF = { S3: 0, S3a: 0, S3b: 0, S4: 1, S5: 2, S5a: 2, S6: 3, S6a: 3, S7: 4, S7a: 4, S8: 5, S8a: 5 };
const CASE_SCREENS = new Set(["S2", "S3", "S4", "S5", "S5a", "S6", "S7", "S7a", "S8", "S8a", "S9"]);
// Browser Back is allowed from these screens to the named one. Missing = no back.
const BACK_TO = { S3: "S2", S4: "S3", S5: "S4", S5a: "S5", S7: "S6", S7a: "S7" };

export const engine = {
  state: null,           // §9.3 session object, in memory only
  caseFile: null,
  model: null,
  library: [],
  current: "S0",
  handlers: {},          // screenId → { enter(engine) }
  hooks: { openClue: null },
  sessionAcknowledged: false,

  // Start a fresh §9.3 session object for a case.
  newSession(caseId) {
    this.state = {
      caseId, screen: "S2",
      read: [], links: {},
      leadFirstPick: null, lead: null, bestClue: null, boardRevised: false,
      sketch: null, sketchMode: null, secondDir: null,
      lab: { primary: null, secondary: null, intensitiesTried: [] },
      explain: { attempts: [], found: [] },
      transfer: { tries: [] },
      score: null
    };
    return this.state;
  },

  on(screenId, handler) { this.handlers[screenId] = handler; },

  // Show one <section>, update chrome, run the screen's enter() hook, manage focus.
  go(screenId, { push = true } = {}) {
    const next = document.getElementById(screenId);
    if (!next) { console.error("No screen", screenId); return; }
    const prev = this.handlers[this.current];
    if (prev && prev.leave && this.current !== screenId) prev.leave(this);
    document.querySelectorAll("main > section").forEach((s) => { s.hidden = s.id !== screenId; });
    this.current = screenId;
    if (this.state) this.state.screen = screenId;

    const inCase = CASE_SCREENS.has(screenId);
    document.getElementById("progress").hidden = !(screenId in STEP_OF);
    document.getElementById("drawer-btn").hidden = !(inCase && screenId !== "S2");
    document.getElementById("footer").hidden = !inCase;
    this.renderProgress();

    const h = this.handlers[screenId];
    if (h && h.enter) h.enter(this);

    if (push) history.pushState({ screen: screenId }, "", "#" + screenId);
    window.scrollTo({ top: 0 });
    const heading = next.querySelector("h1, h2");
    if (heading) { heading.setAttribute("tabindex", "-1"); heading.focus({ preventScroll: true }); }
  },

  // Footer: Back button, status text, primary button.
  footer({ back = null, status = "", primary = null, primaryEnabled = true, onPrimary = null, onBack = null } = {}) {
    const b = document.getElementById("footer-back");
    const s = document.getElementById("footer-status");
    const p = document.getElementById("footer-primary");
    b.hidden = !back; b.textContent = back || "Back";
    b.onclick = onBack;
    s.textContent = status;
    p.hidden = !primary; p.textContent = primary || "";
    p.setAttribute("aria-disabled", primaryEnabled ? "false" : "true");
    p.onclick = onPrimary;
  },
  setStatus(text) { document.getElementById("footer-status").textContent = text; },
  setPrimaryEnabled(ok) { document.getElementById("footer-primary").setAttribute("aria-disabled", ok ? "false" : "true"); },

  // A gate never blocks with a modal: it shows a status toast and, optionally, rings an element.
  gate(ok, message, focusEl) {
    if (ok) return true;
    this.toast(message);
    this.setStatus(message);
    if (focusEl) {
      focusEl.classList.remove("ring"); void focusEl.offsetWidth; focusEl.classList.add("ring");
      focusEl.focus({ preventScroll: false });
    }
    return false;
  },

  toast(message, ms = 3200) {
    const t = document.getElementById("toast");
    t.textContent = message;
    t.classList.add("show");
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => t.classList.remove("show"), ms);
  },

  renderProgress() {
    const wrap = document.getElementById("progress");
    const idx = STEP_OF[this.current];
    wrap.querySelectorAll("span").forEach((el, i) => {
      el.dataset.state = idx === undefined ? "todo" : i < idx ? "done" : i === idx ? "current" : "todo";
    });
    const label = idx === undefined ? "" : `Step ${idx + 1} of 6: ${STEPS[idx].label}`;
    wrap.setAttribute("aria-label", label || "Progress");
  },

  updateDrawerCount() {
    const n = this.state ? this.state.read.length : 0;
    document.getElementById("drawer-count").textContent = `${n}/4`;
  },

  // After lock-in (S4) the board and drawer are read-only.
  locked() { return !!(this.state && this.state.lockedIn); },

  // The clue drawer: a bottom sheet listing all four clues with their pins.
  openDrawer() {
    const dlg = document.getElementById("drawer");
    const list = document.getElementById("drawer-list");
    const lead = document.getElementById("drawer-lead");
    clear(list);
    const c = this.caseFile, st = this.state;
    if (!c || !st) return;
    const leadHyp = st.lead ? c.hypotheses.find((h) => h.id === st.lead) : null;
    lead.textContent = leadHyp
      ? `Lead: ${leadHyp.id} — ${leadHyp.text}${st.bestClue ? ` · best clue: ${st.bestClue}` : ""}`
      : "No lead hypothesis chosen yet.";
    for (const clue of c.clues) {
      const read = st.read.includes(clue.id);
      const btn = el("button", { class: "drawer-clue", type: "button", "data-colour": clue.colour, "data-read": String(read) });
      btn.disabled = !read;
      const ic = el("div", { class: "ic" }); ic.appendChild(icon(clue.icon));
      const body = el("div");
      body.appendChild(el("b", {}, read ? `Clue ${clue.id}: ${clue.title}` : `Clue ${clue.id} — not read yet`));
      const link = st.links[clue.id];
      body.appendChild(el("div", { class: "small muted" },
        link ? `Pinned to ${link.hyp} · ${link.label === "supports" ? "supports" : "doesn't fit"}` : read ? "Not pinned yet" : "Open it on the evidence board"));
      btn.append(ic, body);
      btn.addEventListener("click", () => { dlg.close(); this.hooks.openClue && this.hooks.openClue(clue.id, { readOnly: true }); });
      list.appendChild(btn);
    }
    document.getElementById("drawer-hyps").textContent = c.hypotheses.map((h) => `${h.id}: ${h.text}`).join("  ·  ");
    openDialog(dlg);
  }
};

// ---------- small DOM helpers shared by all modules ----------

export function el(tag, attrs = {}, text) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  if (text !== undefined) node.textContent = text;   // textContent, never innerHTML, for any text
  return node;
}
export function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }

// Clone an icon from the inline SVG sprite in index.html.
export function icon(name) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", "#icon-" + name);
  svg.appendChild(use);
  return svg;
}

// Dialogs: <dialog> gives focus trapping and Escape for free; we return focus to the opener.
export function openDialog(dlg) {
  dlg._opener = document.activeElement;
  if (!dlg.open) dlg.showModal();
  const first = dlg.querySelector("button, [href], input, textarea, [tabindex]:not([tabindex='-1'])");
  if (first) first.focus();
  dlg.addEventListener("close", () => { if (dlg._opener && dlg._opener.focus) dlg._opener.focus(); }, { once: true });
}

// Browser Back: step back where allowed, otherwise stay put.
if (typeof window !== "undefined") window.addEventListener("popstate", () => {
  const target = BACK_TO[engine.current];
  if (target && engine.state) engine.go(target, { push: false });
  else history.pushState({ screen: engine.current }, "", "#" + engine.current);
});
