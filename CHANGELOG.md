# Changelog

One line per day. The "hardest bug" short answer and the video segment come from here, so write down what actually broke.

## 2026-10-17
- Project renamed from MedMystery Lab to **Vital Clues** (Rice University already publishes a middle-school "MedMyst" series).
- Scaffold built: all screens, engine, board, sketch, lab, explain, score, Case 1 data, validator, tests, service worker.
- Bug: the concept checker missed "rests" and "breathes" — the synonym lists only had rest/rested/resting and breathe/breathing. Found by the smoke test. Fixed in the case file, not the code — the matcher is deliberately exact (whole words only, so "hearty" never matches "heart").
