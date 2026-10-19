# Changelog

One line per day. The "hardest bug" short answer and the video segment come from here, so write down what actually broke.

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
