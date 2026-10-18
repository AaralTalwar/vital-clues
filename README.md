# Vital Clues — The Body Detective

**Most science apps check whether you picked the right answer. Vital Clues checks whether you reasoned like a scientist — it scores the prediction you drew, the evidence you linked, and the explanation you wrote.**

A 2026 Congressional App Challenge entry (CA-27). Built as a responsive web app that runs on iPhone, Android and Chromebook from one link, installs to the home screen, and works offline.

- **Live app:** _(GitHub Pages link goes here once enabled)_
- **Age:** 11–15 · **Time:** about 8 minutes per case
- **Privacy:** no account, no name, no age, no health information, no analytics. Explanations are checked on the device and forgotten when you finish.

## How to play

1. **Open the clues** one at a time and **pin each one** to a hypothesis on the evidence board — does it *support* it, or *not fit*?
2. **Choose a lead hypothesis** after a board check that points at one mismatched pin (never a score).
3. **Draw your prediction** before the model runs: five dots you drag, or a preset shape.
4. **Run the body lab**: slide the effort, watch the organs respond, and see your sketch over the model curve.
5. **Explain it back** in your own words. A concept checker highlights the ideas you covered and gives one hint. You may revise once.
6. **Transfer** the idea to a new situation. Two tries.
7. **Case closed**: a 0–100 score in four parts, each with the rule that earned it.

## How the score works

| Component | Points | Rule |
|---|---|---|
| Evidence use | 0–30 | 4 per clue pinned the way the evidence map says (max 16); 14 if your first lead pick is the best-supported hypothesis, 7 if you chose it after revising |
| Prediction | 0–25 | 10 if the curve goes the right way, 10 if the shape matches (5 if close), 5 for the second-output question |
| Interpretation | 0–25 | 5 per concept found, best of your two attempts |
| Transfer | 0–20 | 20 first try, 10 second try |

Never speed. Never grades, stars or comparisons. The rules live in `js/score.js` and the worked example from the spec is a unit test.

## The cases

| Case | Body system | Model | Status |
|---|---|---|---|
| A Case of the Tired Athlete | Lungs & heart | `lungs-heart` | built · science review pending |
| The Thirsty Hiker | Kidneys & water | `water-balance` | planned |
| The Shivering Swimmer | Skin & temperature | `temperature` | planned |
| The Jumpy Goalkeeper | Brain & nerves | `nerves-reflex` | planned |

Every character is fictional. Every number is an illustrative teaching value and is labelled so in the app. Model formulas are visible to students in the **Model limits** panel.

## Adding a case

A fifth case is a data file, not code.

1. Copy `cases/tired-athlete.json`, change the content, keep the structure: 4 clues, 4 hypotheses with exactly one `best`, an evidence map, mismatch hints, 5 concepts with synonyms, 1 transfer question.
2. Add a model in `models/` if the body system is new. Formulas are plain text like `"12 + 3.8 * I"`; the app reads them with its own small evaluator (`js/rules.js`), never `eval()`.
3. Run the validator: `python3 tools/validate_case.py cases/your-case.json --models models/ --script`
4. Add the case to `cases/index.json` and the precache list in `sw.js`.
5. Get a science teacher to read the printed handout and fill in `reviewed`.

## Running locally

```
python3 -m http.server 8000      # then open http://localhost:8000
npm test                         # node --test, 28 tests
python3 tools/validate_case.py cases/tired-athlete.json --models models/
```

Any static server works; the service worker needs `http://localhost` or HTTPS.

## Stack

HTML, CSS, JavaScript (ES modules, no framework, no build step), Canvas 2D for the sketch and chart, inline SVG for the overlays and line art, a service worker for offline, Python 3 for the case validator. Hosted on GitHub Pages. Zero paid services.

```
index.html           one page, all screens as <section>s, inline SVG sprite
css/app.css          design tokens, layout, components, print styles
js/engine.js         screen router, session state, gates, toast, clue drawer
js/board.js          clue cards, clue modal, pin chooser, board check, lead
js/predict.js        prediction sketch screen and presets
js/sketch.js         canvas handles + the shape classifier
js/lab.js            model evaluation, chart, overlay animation, limits panel
js/rules.js          the formula evaluator (tokenizer + parser)
js/explain.js        normaliser + concept matcher + highlight ranges
js/score.js          the four scoring rules
js/app.js            boot, library, case file, explain/transfer/results screens
models/*.json        one body model per system
cases/*.json         one case per file + index.json
tools/validate_case.py
tests/*.test.js
```

## Science review

_Reviewer name, role and date go here when signed off._ Sources: NHLBI "How the Lungs Work"; CK-12 Life Science.

## Authorship

Built by _[student name]_ for the 2026 Congressional App Challenge, with a parent advising on architecture. AI tools assisted with scaffolding and first drafts; every line was read, edited and tested by the student. The three pieces she can walk through unaided: the formula evaluator (`js/rules.js`), the sketch classifier (`js/sketch.js` → `classify`), and the concept matcher (`js/explain.js`).

## Licence

MIT.
