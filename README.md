# Vital Clues — The Body Detective

**Most science apps check whether you picked the right answer. Vital Clues checks whether you reasoned like a scientist — it scores the prediction you drew, the evidence you linked, and the explanation you wrote.**

A 2026 Congressional App Challenge entry (CA-27). Built as a responsive web app that runs on iPhone, Android and Chromebook from one link, installs to the home screen, and works offline.

- **Live app:** _(GitHub Pages link goes here once enabled)_
- **Age:** 12–16 · **Time:** about 8 minutes per case · **48 cases at four levels**
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

48 fictional cases, 12 per level. **Every case has its own body model**, built from published relationships and typical values, with 199 citations each checked against the source page. Levels describe how hard the *reasoning* is, and `tools/validate_case.py` enforces each level's evidence pattern.

**Easy — every clue points one way:** The Jumpy Goalkeeper (Brain & nerves); The Ringing Ears (Ears & hearing); The Scraped Knee (Blood & healing); The Shivering Swimmer (Skin & temperature); The Skipped Breakfast (Digestion & fuel); The Sneezing Gardener (Immune system & pollen); The Sore Weightlifter (Muscles & repair); The Squinting Reader (Eyes & light); The Stuffy-Nose Taster (Nose & taste); The Sunburned Lifeguard (Skin & sunlight); The Thirsty Hiker (Kidneys & water); A Case of the Tired Athlete (Lungs & heart).

**Moderate — one clue also fits a wrong idea:** The Blinkless Gamer (Eyes & tears); The Braces Wearer (Bones & teeth); The Brain-Freeze Smoothie (Nerves & cold); The Car-Sick Reader (Balance & motion); The Cavity Detective (Teeth & bacteria); The Cramming Student (Brain & memory); The Dark Cinema (Eyes & the dark); The Dizzy Spinner (Ears & balance); The Indoor Winter (Skin, sunlight & bones); The Locker-Room Smell (Nose & smell); The Sleeping Foot (Nerves & pressure); The Sleepy Gamer (Brain & sleep clock).

**Difficult — a twist: the obvious answer is wrong:** The Afterimage Artist (Eyes & colour); The Altitude Skier (Oxygen & altitude); The Bitter Broccoli (Tongue & taste); The Feverish Friend (Immune system & fever); The Flagpole Faint (Legs, veins & blood flow); The Morning-Light Fix (Brain & body clock); The Popping Ears (Ears & air pressure); The Recorded Voice (Ears & your own voice); The Snowball Hands (Skin, blood flow & cold); The Stage-Fright Singer (Adrenaline & the alarm system); The Thirsty Swimmer (Kidneys & water); The Upside-Down Drinker (Throat & swallowing).

**Complex — two body systems at once:** The All-Nighter (Sleep & memory); The Breakfastless Test (Adrenaline & fuel); The Concert Night (Loud sound & short sleep); The Exam-Week Cold (Sleep + stress + immune defence); The Heatwave Final (Heat + muscle fuel); The July Marching Band (Heat, water & blood flow); The Long-Haul Flight (Body clock & water); The Mountain Hike (Altitude + water); The Pollen-Season Runner (Pollen & breathing); The Skipped-Lunch Sprint (Fuel & effort); The Snow-Day Sledder (Cold & sunlight on snow); The Winter Swim Team (Cold water & working muscles).

Every character is fictional and every number is an illustrative teaching value, labelled so in the app. Model formulas are visible to students in the **Model limits** panel.

### How the models work

Each Body lab shows **How this model works** in plain words, and **The rules, and where they come from**, split three ways: **From sources** (facts with links), **Our choices** (simplifications and why), and **Illustrative** (made-up numbers for the fictional character). Dials grow with the level: a main slider plus 1 bubble (Easy), 2 (Moderate), 3 (Difficult) or 4–5 (Complex), and a row of adjustable **case factors** about the character and setting, with a reset. A *What is a model?* page explains models for 13-year-olds. The model format is documented at the top of `js/model.js`; `tools/validate_case.py` enforces the dial counts and that every sourced fact has a citation; `tests/models.test.js` checks every dial changes something.

## Adding a case

A fifth case is a data file, not code.

1. Copy `cases/tired-athlete.json`, change the content, keep the structure: 4 clues, 4 hypotheses with exactly one `best`, an evidence map, mismatch hints, 5 concepts with synonyms, 1 transfer question.
2. Add a model in `models/` if the body system is new. Formulas are plain text like `"12 + 3.8 * I * pow(0.5, R / 30)"`; the app reads them with its own small evaluator (`js/rules.js`, functions: max min pow round clamp abs), never `eval()`. The animated body picture is data too: `overlay.parts` lists shapes from `js/overlay.js` with an animation bound to an output.
3. Run the validator: `python3 tools/validate_case.py cases/your-case.json --models models/ --script`
4. Run `python3 tools/build_index.py`. It rebuilds `cases/index.json` and the offline file list in `sw.js`, and sets the cache name from a hash of the files.
5. Run `python3 tools/review_pack.py` and give the science reviewer `review/REVIEW_PACK.html`.

## Running locally

```
python3 -m http.server 8000      # then open http://localhost:8000
npm test                         # node --test, 172 tests: scoring, parsing, every model's curve and dials
python3 tools/build_index.py     # after any case/model change
python3 tools/review_pack.py     # regenerate the science review pack
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
js/lab.js            model evaluation, chart, second slider, limits panel
js/overlay.js        data-driven animated body picture (shapes + animation types)
js/progress.js       device-local completion record (localStorage)
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

Review is **model-level**, not case by case. All the science sits in the body models; each case applies one model to a story. `tools/review_pack.py` writes `review/REVIEW_PACK.md` and `.html`, which list every model's formulas, limits and wellbeing line, plus the one-line claims of every case that uses it (best answer, twist, takeaway, transfer answer), and name one full case per level to read end to end. The reviewer's sign-off goes in `review.json`. Until it is filled in, the app shows "Review pending"; after that it shows "Science reviewed" and states the review's scope in the Model limits panel.

_Reviewer, role and date go here once signed off._

## Authorship

Built by _[student name]_ for the 2026 Congressional App Challenge, with a parent advising on architecture. AI tools assisted with the engine scaffolding, drafted most of the 48 case stories, and researched the models' sources (every citation was opened and checked against its page before use); the student edited the cases used in the demo and wrote or rewrote the three core algorithms below. The case content is checked by an automated validator and a model-level science review, not by hand line by line. The three pieces she can walk through unaided: the formula evaluator (`js/rules.js`), the sketch classifier (`js/sketch.js` → `classify`), and the concept matcher (`js/explain.js`).

## Licence

MIT.
