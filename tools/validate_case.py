#!/usr/bin/env python3
"""validate_case.py — checks a Vital Clues case file and prints a reviewer script.

Usage:
    python3 tools/validate_case.py cases/tired-athlete.json [--models models/] [--script]

Checks (FR-24):
  - the file has every required field with the right type
  - exactly 4 clues with ids 1–4, each with title, text, icon, colour, pointsTo
  - exactly 4 hypotheses A–D, exactly one marked "best"
  - every clue appears somewhere in the evidence map, and every id there is a real clue
  - mismatchHints refer to real clues and hypotheses
  - prediction.expectedShape is one of the allowed shapes; second.answer is one of its options
  - exactly 5 concepts, each with >= 3 synonyms and a hint
  - transfer has 4 options and the answer index points at one of them
  - the model file exists and pointsTo / chart keys line up with it (when --models is given)

Prints "OK" or a numbered list of problems and exits non-zero if any were found.
With --script, prints a plain-text handout for the science reviewer.
Standard library only.
"""

import json
import sys
from pathlib import Path

LEVELS = ["easy", "moderate", "difficult", "complex"]
ALLOWED_SHAPES = {"rises", "falls", "flat", "rises-then-levels", "straight-rise", "flat-then-rises", "falls-then-levels", "straight-fall"}
REQUIRED = {
    "id": str, "version": int, "title": str, "system": str, "model": str, "colour": str, "minutes": int,
    "character": dict, "briefing": str, "question": str, "illustration": str,
    "clues": list, "hypotheses": list, "evidence": dict, "mismatchHints": list,
    "prediction": dict, "labDefaults": dict, "concepts": list, "transfer": dict, "takeaway": str,
}


def validate(case, model=None):
    problems = []

    def need(cond, msg):
        if not cond:
            problems.append(msg)

    for key, kind in REQUIRED.items():
        if key not in case:
            problems.append(f"missing field '{key}'")
        elif not isinstance(case[key], kind):
            problems.append(f"field '{key}' should be {kind.__name__}")
    if problems:
        return problems  # structure is too broken to go further

    # clues
    clues = case["clues"]
    need(len(clues) == 4, f"expected 4 clues, found {len(clues)}")
    need([c.get("id") for c in clues] == [1, 2, 3, 4], "clue ids must be 1, 2, 3, 4 in order")
    for c in clues:
        for f in ("title", "text", "icon", "colour", "pointsTo"):
            need(isinstance(c.get(f), str) and c[f].strip(), f"clue {c.get('id')} is missing '{f}'")
        if c.get("visual") is not None:
            v = c["visual"]
            need(v.get("type") == "bars" and all(k in v for k in ("from", "to", "unit")), f"clue {c.get('id')} visual must be bars with from/to/unit")

    # hypotheses
    hyps = case["hypotheses"]
    need(len(hyps) == 4, f"expected 4 hypotheses, found {len(hyps)}")
    ids = [h.get("id") for h in hyps]
    need(ids == ["A", "B", "C", "D"], "hypothesis ids must be A, B, C, D in order")
    best = [h["id"] for h in hyps if h.get("best")]
    need(len(best) == 1, f"exactly one hypothesis must be marked best (found {len(best)})")
    for h in hyps:
        need(isinstance(h.get("text"), str) and h["text"].strip(), f"hypothesis {h.get('id')} has no text")

    # evidence map
    ev = case["evidence"]
    seen = set()
    for hid in ids:
        row = ev.get(hid)
        need(isinstance(row, dict) and "supports" in row and "doesntFit" in row, f"evidence for {hid} needs 'supports' and 'doesntFit' lists")
        if isinstance(row, dict):
            for label in ("supports", "doesntFit"):
                for cid in row.get(label, []):
                    need(cid in (1, 2, 3, 4), f"evidence {hid}.{label} refers to unknown clue {cid}")
                    seen.add(cid)
    for cid in (1, 2, 3, 4):
        need(cid in seen, f"clue {cid} appears nowhere in the evidence map")
    if len(best) == 1:
        need(set(ev.get(best[0], {}).get("supports", [])) == {1, 2, 3, 4}, f"the best hypothesis {best[0]} should be supported by all four clues")

    # mismatch hints
    for mh in case["mismatchHints"]:
        need(mh.get("clue") in (1, 2, 3, 4), f"mismatchHint refers to unknown clue {mh.get('clue')}")
        need(mh.get("hyp") in ids, f"mismatchHint refers to unknown hypothesis {mh.get('hyp')}")
        need(mh.get("label") in ("supports", "doesntFit"), "mismatchHint label must be supports or doesntFit")
        need(isinstance(mh.get("hint"), str) and mh["hint"].strip(), "mismatchHint has empty hint")

    # prediction
    p = case["prediction"]
    need(p.get("expectedShape") in ALLOWED_SHAPES, f"prediction.expectedShape '{p.get('expectedShape')}' is not one of {sorted(ALLOWED_SHAPES)}")
    need(isinstance(p.get("prompt"), str) and p["prompt"].strip(), "prediction.prompt is missing")
    sec = p.get("second", {})
    need(isinstance(sec.get("options"), list) and sec.get("answer") in sec.get("options", []), "prediction.second.answer must be one of its options")

    # concepts
    cons = case["concepts"]
    need(len(cons) == 5, f"expected 5 concepts, found {len(cons)}")
    for k in cons:
        need(isinstance(k.get("synonyms"), list) and len(k["synonyms"]) >= 3, f"concept '{k.get('id')}' needs at least 3 synonyms")
        need(isinstance(k.get("hint"), str) and k["hint"].strip(), f"concept '{k.get('id')}' needs a hint")
        need(isinstance(k.get("label"), str) and k.get("colour"), f"concept '{k.get('id')}' needs label and colour")

    # transfer
    t = case["transfer"]
    need(len(t.get("options", [])) == 4, "transfer needs exactly 4 options")
    need(isinstance(t.get("answer"), int) and 0 <= t.get("answer", -1) < len(t.get("options", [])), "transfer.answer must index one of the options")
    for f in ("context", "retryHint", "explanation", "illustration"):
        need(isinstance(t.get(f), str) and t[f].strip(), f"transfer is missing '{f}'")
    need(t.get("retryClue") in (1, 2, 3, 4), "transfer.retryClue must name a clue 1–4")

    # level rules: difficulty comes from the shape of the evidence, not just the topic
    level = case.get("level")
    need(level in LEVELS, f"level must be one of {LEVELS} (found {level!r})")
    best_id = best[0] if len(best) == 1 else None
    others = [h for h in ids if h != best_id]
    shared = sorted({cid for h in others for cid in ev.get(h, {}).get("supports", [])})
    supported_others = [h for h in others if ev.get(h, {}).get("supports")]
    for h in others:
        need(ev.get(h, {}).get("doesntFit"), f"hypothesis {h} needs at least one clue that doesn't fit it")
    if level == "easy":
        need(not shared, f"easy: no clue may also support a wrong hypothesis (clues {shared} do)")
    elif level == "moderate":
        need(len(shared) >= 1, "moderate: at least one clue must also support a wrong hypothesis")
    elif level == "difficult":
        need(isinstance(case.get("twist"), str) and len(case["twist"]) >= 40, "difficult: needs a 'twist' sentence (40+ chars) saying what is counter-intuitive")
        need(len(shared) >= 1, "difficult: at least one clue must also support a wrong hypothesis")
    elif level == "complex":
        need(isinstance(case.get("systems"), list) and len(case["systems"]) == 2, "complex: needs 'systems' naming exactly two body systems")
        need(len(supported_others) >= 2, "complex: at least two wrong hypotheses must each be partly supported (one per single-system answer)")
        if model is not None and "parameters" not in model:
            need(bool(model.get("inputs", {}).get("secondary")), "complex: the model must have a second slider to separate the two systems")
        # v2 models: the 4–5 bubble rule in validate_model_v2 covers this

    # composed hints need their ingredients when no hand-written hints exist
    if not case["mismatchHints"]:
        for c in clues:
            need(isinstance(c.get("shows"), str) and c["shows"].strip(), f"clue {c.get('id')} needs a 'shows' phrase (used to build hints)")
        for h in hyps:
            if not h.get("best"):
                need(isinstance(h.get("flaw"), str) and h["flaw"].strip(), f"hypothesis {h.get('id')} needs a 'flaw' sentence (used to build hints)")

    # safety posture: no diagnosis / treatment language anywhere in the text
    banned = ["diagnos", "treatment", "prescri", "medication", "you should see a doctor", "emergency"]
    blob = json.dumps(case).lower()
    for word in banned:
        need(word not in blob, f"safety: the word '{word}' appears in the case text")

    # model v2: one rich model per case, dials by level, every claim labelled and sourced
    if model is not None and "parameters" in model:
        problems.extend(validate_model_v2(case, model))

    # model cross-check
    if model is not None:
        need(case["model"] == model.get("id"), f"case.model '{case['model']}' does not match model id '{model.get('id')}'")
        outputs = {o["key"] for o in model.get("outputs", [])}
        need(p.get("output") in outputs, f"prediction.output '{p.get('output')}' is not a model output ({sorted(outputs)})")
        need(model.get("chart", {}).get("y") == p.get("output"), "model.chart.y should equal prediction.output")
        for o in model.get("outputs", []):
            if "text" in o:
                continue  # a constant word, e.g. core temperature "steady"
            need(o["key"] in model.get("rules", {}), f"model has no rule for output '{o['key']}'")
        need(model.get("chart", {}).get("x"), "model.chart.x is missing")
        need(isinstance(model.get("overlay", {}).get("parts"), list), "model.overlay.parts must be a list")

    return problems


BUBBLES_BY_LEVEL = {"easy": (1, 1), "moderate": (2, 2), "difficult": (3, 3), "complex": (4, 5)}
BASES = {"source", "choice", "illustrative"}
FUNCS = {"max", "min", "pow", "round", "clamp", "abs"}


def validate_model_v2(case, model):
    import re
    problems = []

    def need(cond, msg):
        if not cond:
            problems.append("model: " + msg)

    params = model.get("parameters", [])
    keys = [p.get("key") for p in params]
    need(len(keys) == len(set(keys)), "parameter keys must be unique")
    roles = [p.get("role") for p in params]
    need(roles.count("primary") == 1, f"exactly one primary dial (found {roles.count('primary')})")
    lo, hi = BUBBLES_BY_LEVEL.get(case.get("level"), (0, 99))
    nb = roles.count("bubble")
    need(lo <= nb <= hi, f"level {case.get('level')} needs {lo}{'–' + str(hi) if hi != lo else ''} bubbles (found {nb})")
    need(roles.count("factor") >= 2, f"needs at least 2 case factors about the character or setting (found {roles.count('factor')})")
    cite_ids = {c.get("id") for c in model.get("citations", [])}
    for p in params:
        k = p.get("key")
        need(p.get("role") in ("primary", "bubble", "factor"), f"dial {k}: role must be primary, bubble or factor")
        need(isinstance(p.get("label"), str) and p["label"].strip(), f"dial {k}: needs a label")
        try:
            ok = p["min"] < p["max"] and p["min"] <= p.get("default", p["min"]) <= p["max"]
        except (KeyError, TypeError):
            ok = False
        need(ok, f"dial {k}: needs min < max and a default inside the range")
        need(isinstance(p.get("explain"), str) and len(p["explain"]) >= 20, f"dial {k}: needs an 'explain' line (why this dial matters)")
        need(p.get("basis") in BASES, f"dial {k}: basis must be one of {sorted(BASES)}")
        if p.get("basis") == "source":
            need(p.get("cite") in cite_ids, f"dial {k}: basis 'source' needs a 'cite' that matches a citation id")
        if p.get("options"):
            need(all(p["min"] <= o.get("value", -1e9) <= p["max"] and o.get("label") for o in p["options"]), f"dial {k}: every option needs a value in range and a label")

    used = set()
    for expr in model.get("rules", {}).values():
        for tok in re.findall(r"[A-Za-z_][A-Za-z0-9_]*", str(expr)):
            used.add(tok)
            need(tok in keys or tok in (model.get("constants") or {}) or tok in FUNCS, f"formula uses unknown name '{tok}'")
    for k in keys:
        need(k in used or k == model.get("chart", {}).get("x"), f"dial {k} is not used by any formula, so turning it would do nothing")

    ex = model.get("explain") or {}
    need(isinstance(ex.get("summary"), str) and len(ex["summary"]) >= 60, "explain.summary must be a plain-language paragraph (60+ chars)")
    need(isinstance(ex.get("rules"), list) and 2 <= len(ex["rules"]) <= 6, "explain.rules must list 2–6 plain-language rules")

    pv = model.get("provenance") or {}
    src = pv.get("source") or []
    need(len(src) >= 2, "provenance.source needs at least 2 sourced facts")
    for s in src:
        need(s.get("fact") and s.get("cite") in cite_ids, f"sourced fact needs text and a matching cite: {str(s.get('fact'))[:50]}")
    need(len(pv.get("choice") or []) >= 1, "provenance.choice needs at least 1 modelling choice with its reason")
    for ch in pv.get("choice") or []:
        need(ch.get("what") and ch.get("why"), "each modelling choice needs 'what' and 'why'")
    need(len(pv.get("illustrative") or []) >= 1, "provenance.illustrative needs at least 1 line naming the illustrative numbers")

    cited = {s.get("cite") for s in src} | {p.get("cite") for p in params if p.get("cite")}
    for c in model.get("citations", []):
        cid = c.get("id")
        need(all(c.get(f) for f in ("id", "title", "publisher", "url", "verified", "supports")), f"citation {cid}: needs id, title, publisher, url, verified, supports")
        need(str(c.get("url", "")).startswith("https://"), f"citation {cid}: url must start with https://")
        need(len(str(c.get("supports", ""))) >= 20, f"citation {cid}: 'supports' must say what on the page backs the fact")
        need(cid in cited, f"citation {cid} is listed but never used")

    blob = json.dumps({k: v for k, v in model.items() if k != "citations"}).lower()  # journal titles are quoted as published
    for word in ["diagnos", "prescri", "medication", "you should see a doctor"]:
        need(word not in blob, f"safety: the word '{word}' appears in the model text")
    return problems


def reviewer_script(case, model=None):
    lines = []
    out = lines.append
    out("VITAL CLUES — SCIENCE REVIEW HANDOUT")
    out("=" * 60)
    out(f"Case: {case['title']}   (id: {case['id']}, v{case['version']})")
    out(f"Level: {case.get('level', '?')}" + (f"   Systems: {' + '.join(case['systems'])}" if case.get("systems") else ""))
    if case.get("twist"):
        out(f"Twist: {case['twist']}")
    out(f"Body system: {case['system']}   Model: {case['model']}   Length: about {case['minutes']} min")
    rev = case.get("reviewed")
    out(f"Reviewed: {rev['by']} on {rev['on']}" if rev else "Reviewed: NOT YET — please read every line below")
    out("")
    out("Please check: (1) the science is right for grades 6–9, (2) nothing reads as diagnosis or treatment,")
    out("(3) the numbers are plausible as illustrative teaching values, (4) each clue really points where it says.")
    out("")
    out("BRIEFING")
    out(f"  {case['briefing']}")
    out(f"  Question: {case['question']}")
    out("")
    out("CLUES (and the model idea each one points to)")
    for c in case["clues"]:
        vis = f"   [visual: {c['visual']['from']} → {c['visual']['to']} {c['visual']['unit']}]" if c.get("visual") else ""
        out(f"  {c['id']}. {c['title']} — {c['text']}{vis}")
        out(f"     points to: {c['pointsTo']}")
    out("")
    out("HYPOTHESES (★ = the best-supported one)")
    for h in case["hypotheses"]:
        out(f"  {'★' if h.get('best') else ' '} {h['id']}. {h['text']}")
    out("")
    out("EVIDENCE MAP")
    for hid, row in case["evidence"].items():
        out(f"  {hid}: supports {row['supports'] or '—'} · doesn't fit {row['doesntFit'] or '—'}")
    out("")
    out("PREDICTION")
    out(f"  {case['prediction']['prompt']}  (expected: {case['prediction']['expectedShape']})")
    out(f"  Second: {case['prediction']['second']['question']} → {case['prediction']['second']['answer']}")
    out("")
    out("THE FIVE IDEAS A GOOD EXPLANATION SHOULD CONTAIN")
    for k in case["concepts"]:
        out(f"  • {k['label']}  (words we accept: {', '.join(k['synonyms'])})")
    out("")
    out("TRANSFER QUESTION")
    out(f"  {case['transfer']['context']}")
    for i, o in enumerate(case["transfer"]["options"]):
        out(f"    {'→' if i == case['transfer']['answer'] else ' '} {chr(97 + i)}) {o}")
    out(f"  Explanation shown: {case['transfer']['explanation']}")
    out("")
    out("TAKEAWAY")
    out(f"  {case['takeaway']}")
    if model:
        out("")
        out("MODEL FORMULAS (visible to students in the Model limits panel)")
        for o in model["outputs"]:
            out(f"  {o['label']}: {o['key']} = {model['rules'][o['key']]}   [{o['unit']}]")
        out(f"  Limits text: {model['limits']['text']}")
        out(f"  Wellbeing line: {model['limits']['wellbeing']}")
        out(f"  Sources: {'; '.join(model['sources'])}")
    out("")
    out("Reviewer sign-off: name ____________________  role ____________________  date __________")
    return "\n".join(lines)


def main(argv):
    if len(argv) < 2 or argv[1] in ("-h", "--help"):
        print(__doc__)
        return 2
    path = Path(argv[1])
    models_dir = None
    want_script = "--script" in argv
    if "--models" in argv:
        models_dir = Path(argv[argv.index("--models") + 1])
    try:
        case = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as e:
        print(f"Cannot read {path}: {e}")
        return 1
    model = None
    if models_dir is not None:
        mpath = models_dir / f"{case.get('model', '')}.json"
        if not mpath.exists():
            print(f"1. model file not found: {mpath}")
            return 1
        model = json.loads(mpath.read_text(encoding="utf-8"))

    problems = validate(case, model)
    if problems:
        print(f"{path}: {len(problems)} problem(s)")
        for i, p in enumerate(problems, 1):
            print(f"{i}. {p}")
        return 1
    print(f"{path}: OK")
    if want_script:
        print()
        print(reviewer_script(case, model))
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))
