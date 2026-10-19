#!/usr/bin/env python3
"""build_index.py — regenerate cases/index.json and the service-worker precache list.

Run after adding, removing or editing any case or model:
    python3 tools/build_index.py

It reads every cases/*.json (except index.json), sorts them by level then title,
writes cases/index.json, rewrites the PRECACHE list in sw.js, and sets the cache
name to a hash of every precached file — so returning players always get the new
version without anyone remembering to bump a number. Standard library only.
"""

import hashlib
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
LEVEL_ORDER = ["easy", "moderate", "difficult", "complex"]


def main():
    cases = []
    for path in sorted((ROOT / "cases").glob("*.json")):
        if path.name == "index.json":
            continue
        c = json.loads(path.read_text(encoding="utf-8"))
        cases.append({
            "id": c["id"], "title": c["title"], "system": c["system"], "level": c.get("level", "easy"),
            "colour": c["colour"], "minutes": c["minutes"], "illustration": c["illustration"], "available": True,
        })
    cases.sort(key=lambda x: (LEVEL_ORDER.index(x["level"]), x["title"].removeprefix("The ").removeprefix("A Case of the ")))
    (ROOT / "cases" / "index.json").write_text(json.dumps({"cases": cases}, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    files = ["./", "index.html", "manifest.json", "review.json", "css/app.css"]
    files += sorted(f"js/{p.name}" for p in (ROOT / "js").glob("*.js"))
    files += sorted(f"models/{p.name}" for p in (ROOT / "models").glob("*.json"))
    files += sorted(f"cases/{p.name}" for p in (ROOT / "cases").glob("*.json"))
    files += ["art/icon.svg", "art/icon-180.png", "art/icon-192.png", "art/icon-512.png"]

    digest = hashlib.sha256()
    for f in files[1:]:
        digest.update((ROOT / f).read_bytes())
    version = digest.hexdigest()[:10]

    sw_path = ROOT / "sw.js"
    sw = sw_path.read_text(encoding="utf-8")
    listing = "const PRECACHE = [\n" + ",\n".join(f'  "{f}"' for f in files) + "\n];"
    sw = re.sub(r"const PRECACHE = \[.*?\];", listing, sw, flags=re.S)
    sw = re.sub(r'const CACHE = "[^"]*";', f'const CACHE = "vital-clues-{version}";', sw)
    sw_path.write_text(sw, encoding="utf-8")

    by_level = {lv: sum(1 for c in cases if c["level"] == lv) for lv in LEVEL_ORDER}
    print(f"{len(cases)} cases {by_level} · {len(files)} files precached · cache vital-clues-{version}")


if __name__ == "__main__":
    main()
