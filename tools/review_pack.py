#!/usr/bin/env python3
"""review_pack.py — build the science teacher's model-level review pack.

    python3 tools/review_pack.py            # writes review/REVIEW_PACK.md and review/REVIEW_PACK.html

The review is at the level of the science, not case by case. All the science lives in the
body models (formulas, limits, wellbeing line); the cases are stories built on top of them.
So the pack lists every model once, with the one-line science claim of every case that uses it
(its best answer, takeaway, twist and transfer answer), and names one full case per level for
the reviewer to read end to end. Sign-off is recorded in review.json at the repo root.
Standard library only.
"""

import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEVELS = ["easy", "moderate", "difficult", "complex"]
LEVEL_LABEL = {"easy": "Easy", "moderate": "Moderate", "difficult": "Difficult", "complex": "Complex"}
SPOT = {"easy": "tired-athlete", "moderate": "sleepy-gamer", "difficult": "stage-fright-singer", "complex": None}


def load():
    cases = [json.loads(p.read_text(encoding="utf-8")) for p in sorted((ROOT / "cases").glob("*.json")) if p.name != "index.json"]
    models = {p.stem: json.loads(p.read_text(encoding="utf-8")) for p in sorted((ROOT / "models").glob("*.json"))}
    return cases, models


def build_md(cases, models):
    by_model = {}
    for c in cases:
        by_model.setdefault(c["model"], []).append(c)
    spot = dict(SPOT)
    if not spot["complex"]:
        cx = [c for c in cases if c.get("level") == "complex"]
        spot["complex"] = sorted(cx, key=lambda c: c["title"])[0]["id"] if cx else None
    title = {c["id"]: c["title"] for c in cases}
    counts = {lv: sum(1 for c in cases if c.get("level") == lv) for lv in LEVELS}

    L = []
    L.append("# Vital Clues — Science Review Pack")
    L.append("")
    L.append(f"{len(cases)} fictional cases built on {len(by_model)} simplified body models, for students aged 12–16. "
             f"Levels: {', '.join(f'{counts[lv]} {LEVEL_LABEL[lv]}' for lv in LEVELS)}.")
    L.append("")
    L.append("## How to review (about 90–120 minutes)")
    L.append("")
    L.append("This is a **model-level** review. Each case has its own model; all its science sits in the model section below, split into sourced facts, modelling choices and illustrative numbers. You are not asked to play every case.")
    L.append("")
    L.append("1. For each model, check the **From sources** facts match their linked pages, the **Our choices** simplifications are fair for grades 7–10, and the formulas give the right direction and shape.")
    L.append("2. Check each model's \"does / doesn't\" limits and wellbeing line are honest and age-appropriate.")
    L.append("3. Under each model, read the one-line claims of the cases that use it: the best answer, the takeaway and the transfer answer. Flag any sentence that is wrong or misleading.")
    L.append("4. Read the four spot-check cases end to end in the app (one per level): " +
             ", ".join(f"**{title.get(spot[lv], '—')}** ({LEVEL_LABEL[lv]})" for lv in LEVELS) + ".")
    L.append("5. Sign off below, or list corrections. Corrections to a model fix every case that uses it.")
    L.append("")
    L.append("Nothing in the app diagnoses or advises on any real person; every case carries a fictional-character notice and a \"tell an adult\" line.")
    L.append("")
    L.append("## Models")
    for mid in sorted(by_model, key=lambda m: (LEVELS.index(by_model[m][0].get("level", "easy")), by_model[m][0]["title"])):
        m = models[mid]
        c0 = by_model[mid][0]
        L.append("")
        L.append(f"### {c0['title']} — {m['name']}  ·  `{mid}`")
        L.append("")
        L.append(f"*Level: {LEVEL_LABEL.get(c0.get('level'), '?')}*" + (f" · *systems: {' + '.join(c0['systems'])}*" if c0.get("systems") else ""))
        L.append("")
        if m.get("explain"):
            L.append(m["explain"]["summary"])
            L.append("")
            for r in m["explain"].get("rules", []):
                L.append(f"- {r}")
            L.append("")
        params = m.get("parameters")
        if params:
            L.append("**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)")
            L.append("")
            for q in params:
                unit = f" {q['unit']}" if q.get("unit") else ""
                L.append(f"- *{q['role']}* · **{q['label']}** `{q['key']}` · {q['min']}–{q['max']}{unit}, case value {q.get('default', q['min'])} · {q.get('basis', '?')}: {q.get('explain', '')}")
        else:
            p0, s0 = m["inputs"]["primary"], m["inputs"].get("secondary")
            L.append(f"**Sliders:** {p0['label']} ({p0['min']}–{p0['max']}){'; ' + s0['label'] if s0 else ''}")
        L.append("")
        L.append("**Formulas**")
        L.append("")
        for o in m["outputs"]:
            if "text" in o:
                L.append(f"- {o['label']}: always shown as \"{o['text']}\"")
                continue
            band = (" → shown as " + " / ".join(b["text"] for b in o["bands"])) if o.get("bands") else ""
            L.append(f"- {o['label']}{' (' + o['unit'] + ')' if o.get('unit') else ''}: `{o['key']} = {m['rules'][o['key']]}`{band}")
        if m.get("constants"):
            L.append(f"- Constants: {', '.join(f'`{k} = {v}`' for k, v in m['constants'].items())}")
        L.append("")
        pv = m.get("provenance")
        cites = {c["id"]: c for c in m.get("citations", [])}
        if pv:
            L.append("**From sources** (each checked against the linked page)")
            L.append("")
            for f in pv.get("source", []):
                c = cites.get(f.get("cite"), {})
                L.append(f"- {f['fact']} — {c.get('publisher', '?')}: {c.get('title', '')} <{c.get('url', '')}>")
            L.append("")
            L.append("**Our choices** (simplifications — please check these are fair)")
            L.append("")
            for ch in pv.get("choice", []):
                L.append(f"- **{ch['what']}.** {ch['why']}")
            L.append("")
            L.append("**Illustrative** (made-up numbers): " + " ".join(pv.get("illustrative", [])))
            if pv.get("studying"):
                L.append("")
                L.append(f"**Still being studied:** {pv['studying']}")
        else:
            L.append(f"**Sources:** {'; '.join(m.get('sources', []))}")
        L.append("")
        L.append("**Limits:** shows — " + "; ".join(m["limits"]["does"]) + ". Does not — " + "; ".join(m["limits"]["doesnt"]) + ".")
        L.append("")
        L.append(f"**Wellbeing line:** {m['limits']['wellbeing']}")
        L.append("")
        for c in by_model[mid]:
            best = next(h for h in c["hypotheses"] if h.get("best"))
            ans = c["transfer"]["options"][c["transfer"]["answer"]]
            L.append("**Case claims to check**")
            L.append("")
            L.append(f"- Best answer: {best['text']}")
            if c.get("twist"):
                L.append(f"- Twist: {c['twist']}")
            L.append(f"- Takeaway: {c['takeaway']}")
            L.append(f"- Transfer: {c['transfer']['context']} → *{ans}*")
    L.append("")
    L.append("## Sign-off")
    L.append("")
    L.append("I have reviewed the body models and the case claims listed above at the level of the science, and read the four spot-check cases in full.")
    L.append("")
    L.append("Name: ______________________   Role: ______________________   Date: __________")
    L.append("")
    L.append("Corrections (model or case, and what to change):")
    L.append("")
    L.append("________________________________________________________________________")
    L.append("")
    L.append("________________________________________________________________________")
    L.append("")
    L.append("*Generated by `tools/review_pack.py` from the case and model files. Re-run after any change.*")
    return "\n".join(L) + "\n"


def md_to_html(md):
    """Tiny converter for the subset this script writes (headings, lists, bold, italics, code)."""
    import re

    def inline(t):
        t = html.escape(t)
        t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
        t = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", t)
        t = re.sub(r"\*([^*]+)\*", r"<em>\1</em>", t)
        return t

    out, stack = [], []
    def close_to(depth):
        while len(stack) > depth:
            out.append(f"</{stack.pop()}>")
    for line in md.splitlines():
        if not line.strip():
            close_to(0); continue
        if line.startswith("#"):
            close_to(0)
            n = len(line) - len(line.lstrip("#"))
            out.append(f"<h{n}>{inline(line[n:].strip())}</h{n}>"); continue
        m = re.match(r"^(\s*)(-|\d+\.) (.*)$", line)
        if m:
            depth = len(m.group(1)) // 2 + 1
            tag = "ol" if m.group(2)[0].isdigit() else "ul"
            while len(stack) < depth:
                stack.append(tag); out.append(f"<{tag}>")
            close_to(depth)
            out.append(f"<li>{inline(m.group(3))}</li>"); continue
        close_to(0)
        out.append(f"<p>{inline(line)}</p>")
    close_to(0)
    body = "\n".join(out)
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Vital Clues — Science Review Pack</title>
<style>
body{{font:16px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif;color:#16213E;background:#fff;max-width:760px;margin:0 auto;padding:24px 16px 64px}}
h1{{font-size:1.7rem}} h2{{margin-top:2rem;border-bottom:2px solid #D5DEEC;padding-bottom:.3rem}} h3{{margin-top:1.8rem;color:#4E3390}}
code{{background:#EEF4FB;border-radius:4px;padding:0 .3em;font-size:.88em}} li{{margin:.2rem 0}}
@media print{{h3{{break-after:avoid}} body{{padding:0}}}}
</style></head><body>
{body}
</body></html>
"""


def main():
    cases, models = load()
    md = build_md(cases, models)
    out = ROOT / "review"
    out.mkdir(exist_ok=True)
    (out / "REVIEW_PACK.md").write_text(md, encoding="utf-8")
    (out / "REVIEW_PACK.html").write_text(md_to_html(md), encoding="utf-8")
    print(f"review/REVIEW_PACK.md and .html written: {len(cases)} cases, {len({c['model'] for c in cases})} models")


if __name__ == "__main__":
    main()
