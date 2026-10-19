# Changelog

One line per day. The "hardest bug" short answer and the video segment come from here, so write down what actually broke.

## 2026-10-19 (afternoon)
- **One richer model per case (48 models), true to the real world.** Formulas now come from published relationships and typical values — e.g. maximum heart rate ≈ 208 − 0.7 × age, resting breathing 12–16, sweat-rate and dehydration thresholds, UV dose, the 26× heat loss of water — with 199 citations, each opened and checked against its page.
- **Body lab redesigned:** "How this model works" in plain words; "The rules, and where they come from" split into From sources / Our choices / Illustrative; bubbles that grow with level (1 / 2 / 3 / 4–5); adjustable case factors with "Reset to <name>'s values". New "What is a model?" page.
- **The research corrected the science in many cases:** Maya's pulse doesn't return to normal in two minutes; fasting doesn't crash a healthy teen's blood sugar; soreness rises then fades (the old prediction shape was wrong); a sip takes ~6 s, not 2; jet lag fades ~1 time zone per day; sunburn starts in ~21 minutes at UV 8; early altitude adjustment is not red-cell growth. Clues, predictions and a few best answers were reworded to match.
- Validator: dial counts per level, every dial used by a formula, every sourced fact cited, citations complete. Test: every bubble and factor changes at least one output.
- Bug: the Complex-level validator rule still looked for the old second slider. Bug: "1 cups".

## 2026-10-19
- **48 cases across four levels** (Easy, Moderate, Difficult, Complex; 12 each), on 47 body models. New areas: eyes, clotting, smell and taste, balance, dark vision, brain freeze, nerves, memory, teeth, bone remodelling, vitamin D, motion sickness, blinking, fever, ear pressure, taste genes, swallowing, blood pooling, afterimages, bone conduction, morning light, plus twelve two-system cases.
- Levels are defined by evidence structure and enforced by the validator (a clue that also fits a wrong idea; a written twist; two systems with a combined answer and two sliders).
- Library groups and filters by level; Surprise Me respects the filter.
- Science review changed to model-level: `tools/review_pack.py` builds the reviewer's pack, `review.json` holds the sign-off, and the badge reads "Science reviewed" only after it.
- `tools/build_index.py` now generates the case index and the offline file list, and names the cache after a hash of the files, so phones always pick up a new version.
- Offline: added a "Ready to play offline" badge. Finding: the link must end in `/vital-clues/` — without the slash the address is outside the offline cache's scope.
- Bug: slider readouts showed the nearest tick label even when it was a different number ("12 · 10 sips"). Now only word labels are shown.

## 2026-10-18
- Eleven more cases: the three from the spec (Thirsty Hiker, Shivering Swimmer, Jumpy Goalkeeper) and eight new ones for grades 7–10 (Sleepy Gamer, Skipped Breakfast, Sore Weightlifter, Sunburned Lifeguard, Stage-Fright Singer, Altitude Skier, Sneezing Gardener, Ringing Ears). Twelve total.
- Engine made fully data-driven: formulas gained `pow / round / clamp / abs`, a second slider, text-band outputs ("normal / less / very little"), a chart that can sweep a variable other than the slider (hours on the trail), and an animated overlay built from JSON parts.
- Mismatch hints now compose from each clue's "shows" line and each wrong hypothesis's "flaw" line, instead of 16 hand-written sentences per case.
- Library shows ✓ and best score per case (device-local only); Surprise Me picks an unplayed case.
- Bug: two "flat-then-rises" models (sunburn, hearing) clipped at the top, so the model's own curve classified as a plain rise — a student drawing the truth would have lost 5 points. Caught by a new test that classifies every model's curve against its case's expected shape. Fixed by re-tuning the threshold constants.
- Bug: `[hidden]` was overridden by `display:inline-flex` on buttons, so the Back button appeared on the lab screen where it is forbidden. One CSS line.
- Bug: the second slider started at 0 instead of the case default because `0` failed a null check.

## 2026-10-17
- Project renamed from MedMystery Lab to **Vital Clues** (Rice University already publishes a middle-school "MedMyst" series).
- Scaffold built: all screens, engine, board, sketch, lab, explain, score, Case 1 data, validator, tests, service worker.
- Bug: the concept checker missed "rests" and "breathes" — the synonym lists only had rest/rested/resting and breathe/breathing. Found by the smoke test. Fixed in the case file, not the code — the matcher is deliberately exact (whole words only, so "hearty" never matches "heart").
