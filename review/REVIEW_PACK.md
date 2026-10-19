# Vital Clues — Science Review Pack

48 fictional cases built on 47 simplified body models, for students aged 12–16. Levels: 12 Easy, 12 Moderate, 12 Difficult, 12 Complex.

## How to review (about 60–90 minutes)

This is a **model-level** review. All the science sits in the body models below; each case is a short story that applies one model. You are not asked to read every case.

1. For each model, check the formulas give the right *direction and shape* for middle/high-school biology (the numbers are labelled illustrative in the app).
2. Check each model's "does / doesn't" limits and wellbeing line are honest and age-appropriate.
3. Under each model, read the one-line claims of the cases that use it: the best answer, the takeaway and the transfer answer. Flag any sentence that is wrong or misleading.
4. Read the four spot-check cases end to end in the app (one per level): **A Case of the Tired Athlete** (Easy), **The Sleepy Gamer** (Moderate), **The Stage-Fright Singer** (Difficult), **The All-Nighter** (Complex).
5. Sign off below, or list corrections. Corrections to a model fix every case that uses it.

Nothing in the app diagnoses or advises on any real person; every case carries a fictional-character notice and a "tell an adult" line.

## Models

### Adrenaline & fuel  ·  `adrenaline-fuel`
**Sliders:** How big the moment feels (0–10); Hours since eating (0–14 h)

**Formulas**

- Adrenaline (% above calm): `A = 10 * X`
- Heart rate (beats/min): `H = 68 + 5 * X`
- Fuel in the blood (% of comfortable): `G = clamp(105 - 4 * h, 50, 105)`
- Shaky hands (0–10): `T = clamp(0.35 * X + 0.09 * (105 - clamp(105 - 4 * h, 50, 105)), 0, 10)`

**The model shows:** Shows adrenaline and heart rate rising with how big the moment feels; Shows fuel in the blood falling with hours since eating; Shows shaky hands adding up from both causes.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Say anything about anxiety or any condition; this is everyday test nerves; Say what anyone should eat.

**Wellbeing line:** Nerves before tests are normal. If worry or feeling unwell gets in the way often, talk to an adult you trust.

**Sources:** CK-12 Life Science: endocrine system; CK-12 Life Science: digestive system and energy

**Cases using this model**

- **The Breakfastless Test** — Complex · Adrenaline & the alarm system + Digestion & fuel
  - Best answer: Both: the test switched on his alarm system (adrenaline — racing heart, sweaty palms, some shaking), and fourteen hours without food left his blood low on fuel, which adds its own shakiness. Together, his hands shook far more than either would cause alone.
  - Takeaway: Shaky hands can have more than one cause, and causes can add up. Adrenaline from a big moment is one; running low on fuel is another. You can't always switch off nerves, but you can remove the second cause by eating.
  - Transfer: Before her piano recital, Yuki skipped lunch because she felt too nervous to eat. On stage her fingers tremble more than at any recital before, even though she's played the piece perfectly at home. → *Stage nerves released adrenaline, and skipping lunch left her low on fuel — two causes of trembling added together.*

### Adrenaline & the alarm system  ·  `stress-response`
**Sliders:** How big the moment feels (0–10); Minutes after it's over (0–20 min)

**Formulas**

- Adrenaline (% above calm): `A = 10 * X * pow(0.5, R / 5)`
- Heart rate (beats/min): `H = 68 + 5.5 * X * pow(0.5, R / 5)`
- Sweaty palms: `W = 10 * X * pow(0.5, R / 5)` → shown as dry / a little / yes
- Mouth: `Y = 10 * X * pow(0.5, R / 5)` → shown as normal / dry

**The model shows:** Shows one signal (adrenaline) changing several body systems at the same time; Shows the response scaling with how big the moment feels, not with any real danger; Shows everything settling back within minutes once the moment passes (halving every 5 minutes).

**It does not:** Measure any real person — the numbers are illustrative teaching values; Say anything about anxiety, panic or any condition; this is the everyday pre-performance response; Model what happens with long-lasting stress.

**Wellbeing line:** Nerves before a big moment are normal and pass. If worry gets in the way of everyday life, talk with an adult you trust.

**Sources:** CK-12 Life Science: endocrine system, adrenal glands; NIH News in Health: the stress response (student overview)

**Cases using this model**

- **The Stage-Fright Singer** — Difficult
  - Best answer: Her brain judged the solo as a big moment and released adrenaline, which gets the whole body ready to act at once — heart, sweat, mouth — and fades within minutes when the moment passes.
  - Twist: Usually 'she's nervous' is the lazy wrong answer in these cases. Here the nerves really are the cause — the job is to explain how a thought becomes a racing heart, sweaty palms and a dry mouth all at once.
  - Takeaway: Your brain has an alarm system. When it judges a moment as big, one chemical — adrenaline — changes heart, sweat and mouth all at once to get you ready, and it fades within minutes when the moment passes.
  - Transfer: Eli is waiting to take a driving test. Sitting in the parked car he notices his heart thumping, his hands clammy on the wheel and a dry mouth. → *His brain has judged the test as a big moment and released adrenaline, so his heart, sweat glands and mouth all respond at once.*

### Altitude + water  ·  `altitude-water`
**Sliders:** Altitude (0–12 × 1,000 ft); Water drunk (0–3 cups/hour)

**Formulas**

- Oxygen in each breath (% of sea level): `O = 100 - 3.3 * K`
- Breathing at rest (breaths/min): `B = 12 + 1.0 * K`
- Water lost (sweat + breath) (cups/hour): `S = 0.6 + 0.08 * K`
- Body water after 4 h (% of normal): `L = clamp(100 - 7 * (0.6 + 0.08 * K - W) * t, 70, 100)`
- Pee: `P = clamp(100 - 7 * (0.6 + 0.08 * K - W) * t, 70, 100)` → shown as very little, dark / less / normal
- Thirst signal: `T = clamp(100 - 7 * (0.6 + 0.08 * K - W) * t, 70, 100)` → shown as ON / off
- Constants: `t = 4`

**The model shows:** Shows less oxygen in each breath higher up, and faster breathing to make up for it; Shows more water lost at altitude, from sweating and from breathing hard in dry air; Shows that drinking more fixes the water problem but not the oxygen problem.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include the days-long adjustment to altitude, food, or temperature; Model altitude sickness or anything dangerous.

**Wellbeing line:** A headache, feeling sick or being very short of breath on a mountain is a reason to rest, drink water and tell an adult.

**Sources:** CK-12 Life Science: respiratory system and homeostasis; NOAA / NASA: how air pressure changes with altitude (student pages)

**Cases using this model**

- **The Mountain Hike** — Complex · Oxygen & altitude + Kidneys & water
  - Best answer: Both: the thin air means less oxygen per breath, so she breathes and pumps harder — and breathing hard in dry mountain air plus sweating made her lose more water than she drank.
  - Takeaway: Two problems can stack. At altitude each breath carries less oxygen, so you breathe and pump harder — and breathing hard in dry mountain air also drains water. A drink fixes one; only time or lower ground fixes the other.
  - Transfer: On a ski trip at 9,000 feet, Jamal forgets his water bottle all day. That evening he's out of breath climbing the lodge stairs, has a pounding headache and very dark pee. → *Both: thin air gives less oxygen per breath, and a day in dry mountain air without water left him low on water.*

### Balance & motion  ·  `motion-conflict`
**Sliders:** Minutes reading on a winding road (0–40 min); How much she looks out the window (0–10)

**Formulas**

- Eyes vs inner ear mismatch (0–10): `M = 10 - L`
- Queasiness (0–10): `Q = clamp((10 - L) * R / 40 * 0.9, 0, 10)`
- She feels: `F = clamp((10 - L) * R / 40 * 0.9, 0, 10)` → shown as fine / uneasy / car-sick

**The model shows:** Shows queasiness building when the eyes and the inner ear report different things; Shows the mismatch shrinking when the eyes can see the motion too (looking out the window); Shows time adding up: a short read is fine, a long one is not.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Explain why some people are more sensitive than others; Include smells, heat or a full stomach, which can make it worse.

**Wellbeing line:** If you feel car-sick, tell the driver — stopping for fresh air and looking at the horizon helps.

**Sources:** NIH NIDCD: Balance and the inner ear (student overview); CK-12 Life Science: senses — balance

**Cases using this model**

- **The Car-Sick Reader** — Moderate
  - Best answer: Her eyes report 'still' while her inner ear reports 'swaying', so her brain gets mixed signals and responds with queasiness; looking out the window makes them agree.
  - Takeaway: Your brain checks your eyes against your inner ear. When one says 'moving' and the other says 'still', the mismatch can make you feel sick — letting your eyes see the motion brings them back into agreement.
  - Transfer: Kofi, 14, sits on the sofa playing a virtual-reality flying game. After ten minutes of swooping through the sky he feels queasy, even though he hasn't moved. → *His eyes say he's moving but his inner ear says he's still — the same mismatch as reading in a car, the other way round.*

### Blood & healing  ·  `clotting`
**Sliders:** Minutes since the scrape (0–10 min); Size of the scrape (1–3)

**Formulas**

- Bleeding (% of the first minute): `B = 100 * pow(0.5, M / (1 + 0.5 * A))`
- Clot strength (%): `C = 100 * (1 - pow(0.5, M / (1 + 0.5 * A)))`
- The scrape is: `S = 100 * pow(0.5, M / (1 + 0.5 * A))` → shown as stopped / slowing / bleeding

**The model shows:** Shows bleeding slowing and stopping as a clot builds over minutes; Shows a bigger scrape taking longer to plug; Shows clot strength rising as bleeding falls.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Show the days-long regrowth of skin under the scab; Cover deep cuts or anything that needs an adult's help.

**Wellbeing line:** A cut that keeps bleeding after you press on it for a few minutes is a reason to get an adult.

**Sources:** NIH NHLBI: blood and platelets (student overview); CK-12 Life Science: circulatory system and blood

**Cases using this model**

- **The Scraped Knee** — Easy
  - Best answer: Tiny cell pieces in his blood called platelets rushed to the scrape and stuck together, building a mesh that plugged the leak; the plug dried into a scab that protects the knee while new skin grows underneath.
  - Takeaway: Your blood carries its own repair kit. Platelets stick together at a cut and build a mesh plug in minutes; the plug becomes a scab that guards the spot while new skin grows underneath.
  - Transfer: Ana cuts her finger on the edge of a sheet of paper. It bleeds a little, then stops after a couple of minutes, and a thin dark line forms along the cut. → *Platelets stuck together at the cut and built a plug, which dried into a thin scab.*

### Body clock & water on a long flight  ·  `jetlag-water`
**Sliders:** Time zones crossed (0–10); Water drunk on the flight (0–8 cups)

**Formulas**

- Awake in the middle of the night (min): `M = clamp(12 * Z, 0, 120)`
- Nights to adjust (nights): `D = round(0.7 * Z)`
- Body water on landing (% of normal): `L = clamp(100 + 1.5 * (W - 0.5 * h), 85, 100)`
- Headache: `Q = clamp(100 + 1.5 * (W - 0.5 * h), 85, 100)` → shown as likely / unlikely
- Constants: `h = 11`

**The model shows:** Shows the body clock out of step by about an hour for each time zone crossed; Shows water lost to dry cabin air over an 11-hour flight, and drinking putting it back; Shows the two fixing at different speeds: water in hours, the clock over several nights.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include direction of travel, naps or caffeine; Show the clock shifting day by day; it shows the first nights after landing.

**Wellbeing line:** On long trips, sip water, get morning daylight, and tell an adult if you feel unwell.

**Sources:** CK-12 Life Science: circadian rhythms; CK-12 Life Science: excretory system and water balance

**Cases using this model**

- **The Long-Haul Flight** — Complex · Brain & sleep clock + Kidneys & water
  - Best answer: Two problems: dry cabin air and too little drinking left him low on water (fixed in hours by drinking), and crossing eight time zones left his body clock out of step (fixed slowly, by daylight, over days).
  - Takeaway: Two causes can heal at different speeds. Water lost to dry air comes back as fast as you drink it; a body clock shifted by several time zones moves only about an hour a day, nudged by daylight.
  - Transfer: Nia's family drives from Arizona to Florida. When they arrive she's thirsty with a headache that a big bottle of water fixes by evening — but she's still yawning through breakfast for the next two mornings. → *Not enough water on the drive (fixed fast by drinking) plus a body clock that has to catch up with a two-hour time change (fixed slowly).*

### Bones & teeth  ·  `bone-remodel`
**Sliders:** Weeks wearing braces (0–24 weeks); Hours a day the force acts (0–22 h a day)

**Formulas**

- Tooth movement (mm): `M = 0.1 * W * H / 22`
- Bone-rebuilding cells at work (% of full speed): `R = 100 * H / 22 * (1 - pow(0.5, W + 0.5))`
- Tooth feels: `L = 100 * H / 22 * (1 - pow(0.5, W + 0.5))` → shown as firm / slightly loose

**The model shows:** Shows a tooth moving steadily through the jaw while a gentle force is applied; Shows bone around the tooth being taken down on one side and built up on the other; Shows movement slowing when the force acts for fewer hours a day.

**It does not:** Measure any real person's teeth — the numbers are illustrative teaching values; Include how braces are planned or adjusted; Describe anything beyond mild, normal tenderness.

**Wellbeing line:** Sharp pain, a broken wire or a sore in your mouth that won't heal is a reason to tell an adult.

**Sources:** CK-12 Life Science: skeletal system — bone is living tissue; NIH News in Health: bones are alive and always rebuilding (student overview)

**Cases using this model**

- **The Braces Wearer** — Moderate
  - Best answer: A steady, gentle force from the braces makes bone cells remove bone on one side of each tooth and build new bone on the other, so the tooth slowly moves through the jaw.
  - Takeaway: Bone isn't dead stone — it is constantly taken down and rebuilt. A steady force tells bone cells where to remove and where to add, which is how braces move teeth and how training makes bones stronger.
  - Transfer: Mateo, 15, has done gymnastics for three years. A scan for a sports program shows the bones in his wrists are a little thicker than most kids' his age. → *Years of repeated force made his bone cells add bone where the load is — the same rebuilding that moves teeth.*

### Brain & memory  ·  `memory-spacing`
**Sliders:** Days the study is spread over (1–7 days); Total study time (0.5–4 h)

**Formulas**

- Words remembered a week later (%): `R = 100 - (80 - 10 * H) * pow(0.6, D - 1)`
- Next-morning quiz score (%): `N = clamp(40 + 20 * H, 0, 95)`
- Nights of sleep between sessions (nights): `S = D - 1`

**The model shows:** Shows that spreading the same practice over more days leaves more remembered a week later; Shows cramming working about as well for a quiz the very next morning; Shows the benefit levelling off after several days.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include what kind of studying you do (quizzing yourself beats re-reading); Say anything about anyone's ability; it's about method, not talent.

**Wellbeing line:** If studying ever feels overwhelming or stressful, talk to a teacher or an adult you trust.

**Sources:** NIH News in Health: sleep and memory (student overview); Any educational psychology text: the spacing effect

**Cases using this model**

- **The Cramming Student** — Moderate
  - Best answer: Spreading practice over several days, with sleep in between, makes the brain pull each word back up again and again; each recall after a gap makes the memory stronger and longer-lasting. Cramming fills a short-term memory that fades fast.
  - Takeaway: How you split your practice matters as much as how long you practise. Short sessions spread over days, with sleep in between, make your brain pull memories back again and again — and each time they get stronger. Cramming fades fast.
  - Transfer: Ollie learns a piano piece by practising 15 minutes a day for two weeks. His friend practises the same piece for 3½ hours the day before the recital. Both play well at the recital; a month later Ollie can still play it and his friend can't. → *Spaced practice with sleep in between made Ollie's memory of the piece stronger and longer-lasting.*

### Brain & morning light  ·  `morning-light`
**Sliders:** Bright morning light each day (0–60 min); Days of the routine (1–14 days)

**Formulas**

- Body clock shifted earlier (min): `C = clamp(L * 1.5 * (1 - pow(0.5, d / 4)), 0, 90)`
- Feels sleepy at: `T = clamp(L * 1.5 * (1 - pow(0.5, d / 4)), 0, 90)` → shown as about 1:00 a.m. / about 12:15 a.m. / about 11:30 p.m. / about 10:30 p.m.
- Lying awake after 10:30 p.m. (min): `F = clamp(150 - 1.5 * clamp(L * 1.5 * (1 - pow(0.5, d / 4)), 0, 90), 10, 150)`
- Morning light reaching the eyes (min): `B = L`

**The model shows:** Shows bright morning light moving the body clock earlier; Shows the shift building over days of the routine; Shows an earlier clock meaning less time lying awake at night.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include evening screens, caffeine, stress or weekends; Diagnose anything; everyone's clock drifts sometimes.

**Wellbeing line:** If you're exhausted every day no matter what you try, talk with an adult you trust.

**Sources:** NIH News in Health: 'Tired? Blame your body clock'; NIH NIGMS: circadian rhythms fact sheet (student overview)

**Cases using this model**

- **The Morning-Light Fix** — Difficult
  - Best answer: Bright light in the morning resets her brain's body clock earlier each day, so her sleep signal arrives earlier at night; dark mornings had let the clock drift late.
  - Twist: Most people try to fix a late bedtime at night. Sofia's fix came from the other end of the day: bright light in the morning pulled her body clock earlier.
  - Takeaway: Your body clock is set by light. Bright light in the morning pulls it earlier, so sleepiness arrives earlier at night — the best fix for a late bedtime starts at sunrise.
  - Transfer: After a summer of sleeping until noon, Ben dreads the first week of school. His sister suggests he eats breakfast on the sunny porch every morning for the week before school starts. → *Bright morning light will pull his body clock earlier, so he gets sleepy at a normal bedtime.*

### Brain & nerves  ·  `nerves-reflex`
**Sliders:** How close the shot is (0–27 m away); Hours of practice (0–20 h)

**Formulas**

- Time before the ball arrives (s): `t = (far - k) / speed`
- Reflex pathway (s): `r = 0.10`
- Decision pathway (s): `c = max(0.19, 0.25 - 0.003 * P)`
- What makes it in time: `which = (far - k) / speed - max(0.19, 0.25 - 0.003 * P)` → shown as only the reflex / reflex + decision
- Constants: `speed = 20`, `far = 30`

**The model shows:** Shows how little time a fast ball gives you and how that time shrinks with distance; Shows that a reflex pathway is fixed and fast, while a decision takes longer; Shows that practice speeds decisions a little but never the reflex.

**It does not:** Measure any real person — times are rounded teaching values; Include the goalkeeper's movement time or the ball slowing down; Tell anyone how good a goalkeeper they are.

**Wellbeing line:** Protect your eyes and head in sport — a reflex is fast, but a helmet or goggles is faster.

**Sources:** CK-12 Life Science: nervous system, reflex arcs; Any middle-school text: reaction time versus reflex

**Cases using this model**

- **The Jumpy Goalkeeper** — Easy
  - Best answer: Signals travel along nerves from her eyes to her brain and spinal cord and out to her muscles; some pathways are short and automatic (reflexes), others go through decision-making and are slower but can be trained.
  - Takeaway: Your nervous system has a fast lane and a thinking lane. Reflexes protect you before you can decide; decisions are slower but get faster with practice.
  - Transfer: Dev touches a hot pan and his hand jerks away before he feels any pain. → *A reflex pathway through his spinal cord moved his hand before the pain signal reached the part of his brain that notices it.*

### Brain & sleep clock  ·  `sleep-clock`
**Sliders:** Bright screen time before bed (0–4 h); Nights in a row (1–7 nights)

**Formulas**

- Sleep signal (melatonin) (% of normal): `M = clamp(100 - 15 * S, 30, 100)`
- Time to fall asleep (min): `F = 15 + 12 * S`
- Morning alertness (0–10): `A = clamp(9 - 0.9 * S - 0.3 * (N - 1) * S, 1, 10)`

**The model shows:** Shows the brain's night-time sleep signal dropping when bright light reaches the eyes late; Shows falling asleep taking longer as a result; Shows the effect piling up over several nights.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include caffeine, noise, stress, naps or what time school starts; Diagnose anything; everyone has nights like this.

**Wellbeing line:** If you often can't sleep or feel exhausted every day, that's worth talking about with an adult you trust.

**Sources:** NIH News in Health: 'Tired? Blame your body clock'; CK-12 Life Science: nervous system and endocrine system

**Cases using this model**

- **The Sleepy Gamer** — Moderate
  - Best answer: Bright light late at night tells his brain's clock it is still daytime, so the sleep signal is held back; without screens the clock runs on its own and sleep comes easily.
  - Takeaway: Your brain has a clock, and light is how it tells the time. Bright light late holds back the sleep signal; dim evenings and morning daylight keep the clock on time.
  - Transfer: Nadia flies from California to Spain. For the first three nights she is wide awake at 2 a.m. and exhausted by lunchtime, then it fades. → *Her body clock is still set to California time; daylight in Spain slowly re-sets it over a few days.*

### Cold & sunlight on snow  ·  `cold-uv`
**Sliders:** Hours outside (0–6 h); How cold (0–10)

**Formulas**

- UV energy reaching the face (units): `E = uv * snow * O`
- Face redness that night (0–10): `B = clamp((uv * snow * O - 12) / 2, 0, 10)`
- Shivering now (0–10): `V = round(clamp(0.9 * C - 1, 0, 10))`
- Blood flow to skin: `F = 100 - 6 * C` → shown as low / reduced / normal
- Constants: `uv = 4`, `snow = 1.8`

**The model shows:** Shows UV energy adding up with hours outside, boosted by light bouncing off snow; Shows redness appearing only after a threshold dose, hours later; Shows shivering depending on the cold, not on the sunlight.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Account for skin tone, altitude, clouds or time of day; Show any dangerous cold.

**Wellbeing line:** Snow reflects sunlight: on bright days a hat and sunscreen help. Tell an adult about blistering or feeling sick.

**Sources:** CK-12 Life Science: integumentary system; US EPA SunWise: UV Index for students

**Cases using this model**

- **The Snow-Day Sledder** — Complex · Skin & temperature + Skin & sunlight
  - Best answer: Two things: the cold made her shiver and pulled blood away from her skin (gone once she warmed up), and UV light — boosted by snow reflecting it — damaged her skin cells, showing up as redness hours later.
  - Takeaway: Cold and sunlight can hit the same skin on the same day but work differently. Cold triggers a fast response that switches off when you warm up; UV damage is silent at first and shows up hours later — and snow or water can boost the dose.
  - Transfer: Tomás spends a sunny afternoon fishing from a boat on a cold lake in early spring. He comes home shivering and warms up in a hot shower, but by bedtime the backs of his hands and his nose are bright red. → *Cold made him shiver (fixed by the shower), while sunlight — plus light bouncing off the water — damaged his skin cells, showing up hours later.*

### Cold water & working muscles  ·  `cold-exercise`
**Sliders:** How cold the water is (0–10); Swimming effort (0–10)

**Formulas**

- Heat lost to the water (units/min): `L = 2 + 1.0 * C`
- Heat made by muscles (units/min): `M = 1 + 0.9 * E`
- Shivering (0–10): `V = round(clamp((2 + C) - (1 + 0.9 * E) - 1, 0, 10))`
- Breathing rate (breaths/min): `B = 12 + 3.5 * E`
- Heat balance: `K = (1 + 0.9 * E) - (2 + C)` → shown as losing heat / about even / making extra heat

**The model shows:** Shows heat lost to cold water and heat made by working muscles as two separate flows; Shows shivering switching on when heat lost is bigger than heat made; Shows hard swimming making enough heat to switch shivering off.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include body size, body fat, wetsuits or wind; Model dangerous cold; it stays inside a normal practice.

**Wellbeing line:** If someone can't stop shivering or seems confused after a cold swim, get them warm and tell an adult right away.

**Sources:** CK-12 Life Science: homeostasis and temperature regulation; Any middle-school life-science text: heat from muscle activity

**Cases using this model**

- **The Winter Swim Team** — Complex · Skin & temperature + Muscles & energy
  - Best answer: The cold water takes heat away the whole time, while working muscles make heat. Swimming slowly, heat loss wins and they shiver; sprinting, the muscles' heat wins.
  - Takeaway: Your temperature is a balance between heat lost to the surroundings and heat made by working muscles. Cold water or air pulls heat out all the time — move hard and you make enough to win; stop moving and shivering has to take over.
  - Transfer: Priya goes cross-country skiing on a freezing morning. Skiing uphill she unzips her jacket because she's too warm; when she stops at the top to wait for her friends, she's soon shivering. → *The cold air takes heat the whole time; skiing uphill her muscles make more heat than she loses, but standing still they make almost none, so she shivers.*

### Digestion & fuel  ·  `fuel-sugar`
**Sliders:** Hours since the last meal (0–6 h); Breakfast eaten (0–2)

**Formulas**

- Fuel in the blood (% of comfortable): `G = clamp(70 + 20 * B - 6 * h + 10 * B * max(0, 3 - h) / 3, 50, 110)`
- Energy for the brain: `E = clamp(70 + 20 * B - 6 * h + 10 * B * max(0, 3 - h) / 3, 50, 110)` → shown as running low / dipping / steady
- Stomach rumbles (per hour): `R = round(clamp(2 * h - 2 * B, 0, 12))`

**The model shows:** Shows the fuel the brain and muscles use drifting down the longer it has been since a meal; Shows a meal in the morning holding it up through the school morning; Shows the stomach's hunger signals growing as fuel drops.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Model any medical condition or say what anyone should eat; Include what kind of food, exercise, or sleep.

**Wellbeing line:** Feeling shaky, dizzy or unwell at school is a reason to tell a teacher or the school nurse.

**Sources:** CK-12 Life Science: digestive system; NIH News in Health: how the body uses food for energy (student overview)

**Cases using this model**

- **The Skipped Breakfast** — Easy
  - Best answer: After fifteen hours without food, the fuel her brain and muscles run on is running low; eating refills it.
  - Takeaway: Food is fuel. Your brain and muscles burn it all the time, so a long gap without eating shows up as fuzzy thinking and shakiness before anything else — and a meal fixes it fast.
  - Transfer: Omar runs a cross-country race in the afternoon without eating since early morning. In the last mile his legs feel like jelly and he can't think straight. → *His muscles and brain are running out of fuel after hours without food and a long effort.*

### Ears & air pressure  ·  `ear-pressure`
**Sliders:** Minutes into the descent (0–20 min); Swallows or yawns per minute (0–6 per min)

**Formulas**

- Pressure difference across the eardrum (units): `P = D * pow(0.5, S)`
- Eardrum: `E = D * pow(0.5, S)` → shown as barely pushed / pushed in / pushed in hard
- Ear feels: `K = D * pow(0.5, S)` → shown as normal / blocked / painful

**The model shows:** Shows the pressure difference building as the cabin pressure rises during the descent; Shows each swallow or yawn letting air through a small tube to even it out (halving it); Shows why the descent, not the climb, is usually the uncomfortable part.

**It does not:** Measure any real person or plane — the numbers are illustrative teaching values; Include a blocked nose, which makes the tube harder to open; Model diving, where the pressure changes much faster.

**Wellbeing line:** Ear pain that doesn't go away after landing is a reason to tell an adult.

**Sources:** NIH NIDCD: How do we hear? — the middle ear (student overview); CK-12 Physical Science: air pressure

**Cases using this model**

- **The Popping Ears** — Difficult
  - Best answer: As the plane descends, the air pressure in the cabin rises but the air behind her eardrum stays at the lower pressure, so the eardrum is pushed in — until swallowing or yawning opens a small tube that lets air in to even it out.
  - Twist: Most people expect the climb to hurt because the plane is going up. It's actually the descent, when the cabin air pushes harder on the eardrum than the air trapped behind it — and a swallow fixes it.
  - Takeaway: Your eardrum has air on both sides. When the outside pressure rises — a plane coming down, or diving deeper — the eardrum gets pushed in until a swallow or yawn opens a small tube and evens the pressure out.
  - Transfer: Yusuf, 14, swims down to the bottom of the deep end and his ears start to hurt. When he gently swallows, they pop and feel better. → *Deeper water pushes harder on his eardrums than the air trapped behind them; swallowing opens the tube and lets air in to even the pressure.*

### Ears & balance  ·  `balance-spin`
**Sliders:** Spins on the spinner (0–20); Seconds after stopping (0–40 s)

**Formulas**

- Inner-ear fluid still swirling (%): `F = clamp(6 * N, 0, 100) * pow(0.5, S / 8)`
- Dizziness (0–10): `D = clamp(0.6 * N, 0, 10) * pow(0.5, S / 8)`
- Eyes: `E = clamp(0.6 * N, 0, 10) * pow(0.5, S / 8)` → shown as steady / flicking a little / flicking side to side

**The model shows:** Shows dizziness growing with the number of spins; Shows it fading by itself in the seconds after stopping; Shows the eyes flicking while the inner-ear fluid is still moving.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include motion sickness, which is a related but different effect; Say anything about dizziness that comes without spinning.

**Wellbeing line:** Dizziness that comes without spinning, or doesn't go away, is a reason to tell an adult.

**Sources:** NIH NIDCD: Balance and the inner ear (student pages); CK-12 Life Science: the ear and balance

**Cases using this model**

- **The Dizzy Spinner** — Moderate
  - Best answer: Fluid in the balance loops of her inner ear started swirling while she spun; when she stopped, it kept swirling for a while, so her brain was told she was still turning.
  - Takeaway: Your balance sense lives in fluid-filled loops in your inner ear. Spinning sets the fluid swirling, and because it keeps going after you stop, your brain thinks you are still turning until it settles.
  - Transfer: After a long ride on the spinning teacups at a fair, Ravi steps off and the ground seems to tilt and turn. He has to sit down for a minute until it passes. → *The fluid in his inner ear kept swirling after the ride stopped, telling his brain he was still turning.*

### Ears & hearing  ·  `hearing`
**Sliders:** Loudness (60–110 dB); Time listening (0–180 min)

**Formulas**

- Sound energy reaching the ear (× talking level): `L = round(pow(10, (V - 60) / 10))`
- Hair-cell fatigue (0–10): `F = clamp(pow(10, (V - 95) / 10) * T / 60 * 3, 0, 10)`
- Ringing afterwards: `R = clamp(pow(10, (V - 95) / 10) * T / 60 * 3, 0, 10)` → shown as none / a little, fades / yes, hours

**The model shows:** Shows that every 10 dB is ten times the sound energy, not a little more; Shows the tiny hair cells in the inner ear tiring with loudness and time — barely at all below about 85 dB, then steeply; Shows ringing as the sign that they were pushed too far.

**It does not:** Measure any real person or any real headphones; Model permanent hearing damage; it stops at temporary ringing; Replace a hearing test.

**Wellbeing line:** Ringing that lasts more than a day, or hearing that seems muffled, is a reason to tell an adult.

**Sources:** NIH NIDCD: Noise-Induced Hearing Loss (student pages); CK-12 Physical Science: sound and the decibel scale

**Cases using this model**

- **The Ringing Ears** — Easy
  - Best answer: Loud sound bent the tiny hair cells in her inner ear too hard for too long; they tired and sent a false 'ringing' signal while hearing less of the real one, then recovered overnight.
  - Takeaway: Hearing runs on tiny hair cells that bend with sound. Loud sound bends them too hard; ringing afterwards is their complaint. Give them a break and they recover — this time. Volume, time and rest all matter.
  - Transfer: Tariq uses earbuds at full volume for his whole two-hour commute every day. Lately he turns the TV up louder than anyone else in the house. → *Hours of loud sound every day are tiring his inner-ear hair cells faster than they can recover, so quieter sounds are getting harder to hear.*

### Ears & your own voice  ·  `bone-conduction`
**Sliders:** Pitch of the sound (100–1000 Hz); Ears (0–1)

**Formulas**

- Extra loudness through bone (0–16): `B = clamp((10 - 0.009 * f) * (1 + 0.6 * o), 0, 16)`
- Your voice sounds to you: `S = clamp((10 - 0.009 * f) * (1 + 0.6 * o), 0, 16)` → shown as about the same / a bit deeper / much deeper
- What a recording captures: always shown as "air route only"

**The model shows:** Shows your own voice reaching your ears through bone as well as through the air; Shows the bone route adding mostly low, deep sound; Shows plugging your ears making the bone route louder.

**It does not:** Measure any real person or any real microphone; Include hearing loss or how the brain processes voices; Say how anyone's voice should sound.

**Wellbeing line:** If your own voice suddenly sounds very loud or echoey to you and it doesn't go away, tell an adult.

**Sources:** NIH NIDCD: how do we hear? (student pages); CK-12 Physical Science: sound travelling through solids

**Cases using this model**

- **The Recorded Voice** — Difficult
  - Best answer: Malik hears his own voice two ways — through the air and through the bones of his skull, which carry the deep sounds best. The recording only catches the air route, which is what everyone else hears.
  - Twist: The voice you hear in your head isn't the one other people hear. The 'weird' recording is the accurate one — the voice in your head has extra deep sound carried through bone.
  - Takeaway: You hear your own voice through the air and through the bones of your head, which add deep tones. A recording catches only the air — so the strange-sounding playback is how everyone else hears you.
  - Transfer: When Inés eats crunchy chips, the crunching sounds really loud to her — but her friend across the table can barely hear it. → *The crunch travels through the bones of Inés's jaw and skull straight to her ears, a route her friend's ears don't get.*

### Eyes & colour  ·  `afterimage`
**Sliders:** Seconds staring at red (0–60 s); How vivid the red is (1–3)

**Formulas**

- Red-sensing cells tired (%): `F = clamp(100 * (1 - pow(0.5, s / 15)) * b / 3, 0, 100)`
- Green afterimage strength (0–10): `G = clamp(10 * (1 - pow(0.5, s / 15)) * b / 3, 0, 10)`
- How long it lasts (s): `D = 0.25 * clamp(100 * (1 - pow(0.5, s / 15)) * b / 3, 0, 100)`

**The model shows:** Shows colour-sensing cells tiring the longer they stare at one colour; Shows the afterimage being the opposite colour and growing stronger with longer staring; Shows the effect fading as the cells recover.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Cover colour blindness or how colour is processed in the brain in detail; Suggest staring at bright lights or the sun — never do that.

**Wellbeing line:** Afterimages from paint or paper fade in seconds. If spots in your vision don't fade, tell an adult.

**Sources:** NIH National Eye Institute: how the eyes work (student pages); CK-12 Life Science: senses, the eye and colour vision

**Cases using this model**

- **The Afterimage Artist** — Difficult
  - Best answer: The red-sensing cells in her eyes got tired from staring, so when she looks at white the other colour cells 'win' and her brain sees the opposite colour — green — until the tired cells recover.
  - Twist: Hana sees a colour that isn't there at all. The green isn't on the wall or in her eye — it's made by tired red-sensing cells, and it shows up as the opposite colour.
  - Takeaway: Your eyes have cells for different colours. Stare too long at one colour and those cells tire; then white looks like the opposite colour until they recover. That colour is made inside your eyes and brain.
  - Transfer: Tomás stares at a bright yellow sticky note on his desk for a minute. When he looks at a blank white page, he sees a bluish square. → *The cells that sense yellow light tired from staring, so the white page looks like the opposite colour, blue, until they recover.*

### Eyes & light  ·  `pupil-light`
**Sliders:** Light around her (0–10); Seconds after stepping out of the sun (0–10 s)

**Formulas**

- Pupil width (mm): `P = 8 / (1 + 0.3 * L) + (2 - 8 / (1 + 0.3 * L)) * pow(0.5, S)`
- Light reaching the back of the eye (units): `E = (L + 1) * pow(8 / (1 + 0.3 * L) + (2 - 8 / (1 + 0.3 * L)) * pow(0.5, S), 2) / 4`
- Reading the page: `R = (L + 1) * pow(8 / (1 + 0.3 * L) + (2 - 8 / (1 + 0.3 * L)) * pow(0.5, S), 2) / 4` → shown as too dark — squinting / comfortable
- Outside light: `K = L`

**The model shows:** Shows pupils shrinking as the light gets brighter and widening as it dims; Shows the light reaching the back of the eye staying much steadier than the light outside; Shows pupils finishing their change within a few seconds.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include the slower adjustment of the light-sensing cells themselves (see The Dark Cinema); Say anything about eye health.

**Wellbeing line:** Never look straight at the sun, even with small pupils — and tell an adult if bright light ever hurts your eyes.

**Sources:** NIH National Eye Institute: How the eyes work (student pages); CK-12 Life Science: the eye and vision

**Cases using this model**

- **The Squinting Reader** — Easy
  - Best answer: Her irises — the coloured rings around the pupils — are muscles that squeeze the pupils small in bright light and open them wide in dim light, controlling how much light gets into her eyes.
  - Takeaway: Your pupils are adjustable windows. The iris squeezes them small in bright light and opens them wide in dim light — in seconds and without you deciding — so the light reaching the back of your eye stays in a comfortable range.
  - Transfer: Jamal walks out of a dark movie theatre into a sunny parking lot. For a few seconds everything looks blindingly bright and he squints, then it feels normal. → *His pupils were wide open from the dark theatre; in the sun his irises squeeze them small so less light gets in.*

### Eyes & tears  ·  `blink-rate`
**Sliders:** Minutes of focused screen time (0–60 min); Look-away breaks per hour (0–3)

**Formulas**

- Blinks per minute (per min): `K = 15 - 9 * (1 - pow(0.5, F / 4))`
- Eye dryness (0–10): `D = clamp(9 * (1 - pow(0.5, F / 4)) * F / 54 * (1 - 0.25 * B), 0, 10)`
- Eyes feel: `E = clamp(9 * (1 - pow(0.5, F / 4)) * F / 54 * (1 - 0.25 * B), 0, 10)` → shown as comfortable / a bit dry / stinging

**The model shows:** Shows blinking dropping sharply in the first minutes of concentrating; Shows the thin film of tears on the eye drying out the longer blinks stay rare; Shows short look-away breaks letting the tear film recover.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include screen brightness, room air or how close the screen is; Say anything about eyesight or glasses.

**Wellbeing line:** Eyes that stay red, sore or blurry after resting are a reason to tell an adult.

**Sources:** NIH National Eye Institute: tips for eye health and screen use (student overview); CK-12 Life Science: the eye

**Cases using this model**

- **The Blinkless Gamer** — Moderate
  - Best answer: When he concentrates on the screen he blinks far less, so the thin film of tears on his eyes dries out and they sting; the watering afterwards is the eye catching up.
  - Takeaway: Every blink spreads a fresh layer of tears over your eyes. Concentrating hard makes you blink far less, so the eyes dry and sting — short breaks to look away let blinking and tears catch up.
  - Transfer: Sofia, 15, spends an hour peering into a microscope in biology lab. Afterwards her eyes sting and feel dry. → *She blinked much less while concentrating, so the tear film on her eyes dried out.*

### Eyes & the dark  ·  `dark-adapt`
**Sliders:** Minutes in the dark (0–20 min); How bright it was before (0–10)

**Formulas**

- Eye sensitivity in dim light (% of fully adjusted): `S = 100 - (5 + 9 * B) * pow(0.5, M / 4)`
- Pupil width (mm): `P = 8 - 6 * pow(0.5, M * 30)`
- What she can see: `V = 100 - (5 + 9 * B) * pow(0.5, M / 4)` → shown as almost nothing / shapes and steps / seats and faces / fine details

**The model shows:** Shows pupils opening fully within seconds; Shows the eye's sensitivity to dim light climbing for many minutes — fastest at first; Shows that coming in from brighter light means starting further behind.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Separate the cone cells (colour, bright light) from the rod cells (dim light); Say anything about problems seeing at night.

**Wellbeing line:** If you find it unusually hard to see in dim light, tell an adult.

**Sources:** NIH National Eye Institute: How the eyes work (student pages); CK-12 Life Science: vision

**Cases using this model**

- **The Dark Cinema** — Moderate
  - Best answer: Two things happened: her pupils opened wide in seconds, and over many minutes the light-sensing cells at the back of her eyes rebuilt the pigment that bright light had used up, making them far more sensitive.
  - Takeaway: Your eyes adjust to the dark in two steps: pupils open wide in seconds, then the light-sensing cells slowly rebuild their pigment over many minutes, making you far more sensitive to dim light.
  - Transfer: Wei goes outside at night to look at the stars. At first he sees only a few; after twenty minutes away from his phone screen he sees hundreds. → *His eyes rebuilt their light-sensing pigment in the dark, becoming far more sensitive over many minutes.*

### Fuel & effort  ·  `fuel-exercise`
**Sliders:** Running intensity (0–10); Hours since eating (0–10 h)

**Formulas**

- Breathing rate (breaths/min): `B = 12 + 3.8 * I`
- Heart rate (beats/min): `H = 65 + 12.5 * I`
- Fuel available to muscles (% of full): `G = clamp(105 - 4 * h - 0.5 * I * h, 20, 110)`
- Legs: `K = clamp(105 - 4 * h - 0.5 * I * h, 20, 110)` → shown as jelly / heavy / strong

**The model shows:** Shows breathing and heart rate rising with running intensity, the same for everyone; Shows fuel in the blood falling with hours since eating, and faster at high effort; Shows legs running short only when low fuel and high effort combine.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Say what anyone should eat; Include training, sleep or heat.

**Wellbeing line:** Feeling shaky or dizzy during sport is a reason to stop, have a snack and water, and tell a coach.

**Sources:** CK-12 Life Science: digestive and respiratory systems; CK-12 Life Science: cellular respiration (food + oxygen → energy)

**Cases using this model**

- **The Skipped-Lunch Sprint** — Complex · Digestion & fuel + Lungs & heart
  - Best answer: Both: sprinting makes muscles burn fuel and oxygen very fast (that's the hard breathing everyone has), and after nine hours without food Ravi had less fuel to burn — so his muscles ran short at sprint pace even though jogging was fine.
  - Takeaway: Effort and fuel are a pair. Sprinting makes everyone breathe hard because muscles burn fuel and oxygen fast; whether you can keep going depends on how much fuel is left. Lungs deliver the oxygen; food supplies the fuel.
  - Transfer: Maya plays three soccer games in a tournament. Game one at 9 a.m. goes great, but in the third game at 3 p.m. — with only a granola bar since breakfast — her legs feel heavy and she can't keep up in the sprints, though she can still jog fine. → *Hard sprints burn muscle fuel fast, and with little food since breakfast her muscles ran short at high effort.*

### Heat + muscle fuel  ·  `heat-fuel`
**Sliders:** Heat (0–10); Hours since the last meal (0–8 h)

**Formulas**

- Sprint power (% of fresh): `P = clamp(clamp(100 - 4 * e - (0.25 + 0.03 * I) * p, 20, 100) - 2 * (100 - clamp(100 - (0.04 + 0.012 * I) * p, 80, 100)), 0, 100)`
- Fuel in her muscles (%): `F = clamp(100 - 4 * e - (0.25 + 0.03 * I) * p, 20, 100)`
- Body water (% of normal): `W = clamp(100 - (0.04 + 0.012 * I) * p, 80, 100)`
- Water lost so far (%): `S = 100 - clamp(100 - (0.04 + 0.012 * I) * p, 80, 100)`
- Thirst signal: `T = clamp(100 - (0.04 + 0.012 * I) * p, 80, 100)` → shown as ON / off

**The model shows:** Shows body water falling faster in hotter weather as the match goes on; Shows muscle fuel starting lower after a long gap since eating, and running down during play; Shows sprint power depending on both, so either problem alone hurts and both together hurt most.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include salt, fitness, what kind of food, or how quickly food is digested; Say what or when anyone should eat.

**Wellbeing line:** Feeling dizzy, sick or confused in the heat is a reason to stop, get into the shade, drink and tell a coach or adult.

**Sources:** CK-12 Life Science: homeostasis, digestion and the muscular system; NIH News in Health: staying safe in the heat (student overview)

**Cases using this model**

- **The Heatwave Final** — Complex · Kidneys & water + Digestion & fuel
  - Best answer: Both: in the heat she sweated out far more water than she drank, AND seven hours without food left her muscles short of fuel — together they drained her in the second half.
  - Takeaway: Heat drains water; time without food drains fuel. In a long hot game both run down at once, and each needs its own fix — a drink for water, food for fuel.
  - Transfer: Leo hikes all day in desert heat. He keeps refilling his water bottle at every spring but brought no snacks. By evening he isn't thirsty at all, yet his legs are shaky and weak. → *He's low on fuel — he drank enough but ate nothing, so only the fuel problem is left.*

### Heat, water & blood flow  ·  `heat-standing`
**Sliders:** Minutes standing still (0–20 min); Heat (0–10)

**Formulas**

- Blood pooled in the legs (% extra): `P = clamp(m * (1.2 + 0.15 * H), 0, 60)`
- Blood getting back to the heart (% of normal): `R = 100 - clamp(m * (1.2 + 0.15 * H), 0, 60)`
- Heart rate (beats/min): `Q = 75 + 1.2 * clamp(m * (1.2 + 0.15 * H), 0, 60) + 2 * H`
- Sweat lost (cups/hour): `W = 0.2 + 0.3 * H`
- How the head feels: `F = 100 - clamp(m * (1.2 + 0.15 * H), 0, 60)` → shown as light-headed — sit down / a bit woozy / fine

**The model shows:** Shows blood pooling in the legs the longer someone stands completely still; Shows heat and sweating making it worse; Shows the heart speeding up to make up for it.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include body size, uniform weight or exactly how much someone drank; Model fainting itself; it stops at feeling light-headed.

**Wellbeing line:** Feeling light-headed is a signal to sit down, drink water and tell an adult.

**Sources:** CK-12 Life Science: circulatory system; Any middle-school life-science text: how leg muscles help return blood to the heart

**Cases using this model**

- **The July Marching Band** — Complex · Kidneys & water + Heart & blood flow
  - Best answer: Heavy sweating has left less water in their blood, and standing still lets blood pool in their legs because the leg muscles aren't squeezing it back up. Together, too little blood reaches the head.
  - Takeaway: Blood needs a push to get from your legs back to your head. Walking muscles provide it; standing still doesn't. Add heavy sweating on a hot day and there's less blood to go around — that's when the head runs short.
  - Transfer: At a long school assembly on a warm afternoon, Omar stands perfectly still in the back row. After twenty minutes he feels light-headed; when he shifts from foot to foot and rises onto his toes, it passes. → *Warmth and standing still both mean less blood gets back up to his head; moving his legs squeezes it back.*

### Immune system & fever  ·  `fever-setpoint`
**Sliders:** How hard the immune system is fighting (0–10); Hours since the fight started (0–12 h)

**Formulas**

- Brain's thermostat set to (°F): `S = 98.6 + 0.3 * G`
- Body temperature (°F): `T = 98.6 + 0.3 * G - 0.3 * G * pow(0.5, H / 1.5)`
- Shivering (0–10): `V = round(clamp(0.3 * G * pow(0.5, H / 1.5) * 6, 0, 10))`
- He feels: `F = 0.3 * G * pow(0.5, H / 1.5)` → shown as warm / chilly / cold and shivery

**The model shows:** Shows the immune system raising the brain's temperature set point while it fights germs; Shows the body shivering to heat up until it reaches the new, higher set point; Shows the gap (and the shivering) shrinking over the first hours.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Model high or dangerous fevers; it stops at about 101.6 °F; Say anything about what to do for a fever.

**Wellbeing line:** A fever that is very high or lasts more than a couple of days is a reason to tell an adult.

**Sources:** CK-12 Life Science: immune system and homeostasis; NIH MedlinePlus: Fever (overview for students and families)

**Cases using this model**

- **The Feverish Friend** — Difficult
  - Best answer: His immune system is fighting germs and has turned up the brain's thermostat, so at his normal temperature he feels too cold and shivers to heat up; when the fight eases, the thermostat drops and he sweats to cool off.
  - Twist: A hot person shivering seems backwards. His body isn't too cold at all — his brain's thermostat has been turned up, so a normal temperature suddenly feels cold.
  - Takeaway: A fever isn't the body losing control — it's the immune system turning the brain's thermostat up while it fights germs. Shivering heats you to the new target; sweating cools you down when the target drops again.
  - Transfer: Nia, 14, has a cold. On a warm afternoon she suddenly gets goosebumps, wants a sweater, and her temperature reads 100.5 °F. → *Her immune system turned up her brain's thermostat, so her normal temperature now feels too cold and she tries to warm up.*

### Immune system & pollen  ·  `immune-pollen`
**Sliders:** Pollen in the air (0–10); Minutes after going indoors (0–60 min)

**Formulas**

- Alarm chemical (histamine) (% above calm): `A = 10 * G * pow(0.5, M / 20)`
- Sneezes (per hour): `S = round(1.2 * G * pow(0.5, M / 20))`
- Eyes: `E = 10 * G * pow(0.5, M / 20)` → shown as fine / itchy / itchy & watery

**The model shows:** Shows the immune system treating harmless pollen as an intruder and releasing an alarm chemical; Shows sneezing and itchy eyes scaling with how much pollen is around; Shows the reaction fading once away from the pollen (halving every 20 minutes).

**It does not:** Measure any real person — the numbers are illustrative teaching values; Say whether anyone has an allergy or what to do about one; Cover food, pets, dust or serious reactions.

**Wellbeing line:** Sneezing is harmless. Trouble breathing or swelling of the face is serious — get an adult right away.

**Sources:** CK-12 Life Science: immune system; NIH News in Health: seasonal allergies explained (student overview)

**Cases using this model**

- **The Sneezing Gardener** — Easy
  - Best answer: Diego's immune system has learned to treat pollen as an intruder. When pollen lands in his nose and eyes, immune cells release an alarm chemical that causes sneezing, itching and watering to flush it out; his friend's immune system has not learned this, so it stays quiet.
  - Takeaway: Your immune system is a guard that sometimes raises the alarm about something harmless. Sneezing, itching and watering are its way of flushing an intruder out — and because each immune system learns differently, the same pollen can bother one person and not the next.
  - Transfer: Mei pets a neighbour's cat for ten minutes. Soon her eyes itch and she sneezes several times. Her brother, petting the same cat, is fine. → *Mei's immune system treats something from the cat as an intruder and releases an alarm chemical; her brother's immune system does not react to it.*

### Kidneys & water  ·  `water-balance`
**Sliders:** Heat & effort (0–10); Water drunk (0–4 cups/hour)

**Formulas**

- Sweat lost (cups/hour): `S = 0.2 + 0.3 * I`
- Body water after 3 h (% of normal): `L = clamp(100 - 8 * (0.2 + 0.3 * I - W) * t, 70, 100)`
- Pee output: `P = clamp(100 - 8 * (0.2 + 0.3 * I - W) * t, 70, 100)` → shown as very little / less / normal
- Thirst signal: `T = clamp(100 - 8 * (0.2 + 0.3 * I - W) * t, 70, 100)` → shown as ON / off
- Constants: `t = 3`

**The model shows:** Shows a water budget: sweat out versus water drunk, over three hours; Shows the kidneys holding water back (less pee) when the body is low; Shows the thirst signal switching on when body water falls.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include salt, food, breathing losses or body size; Model dangerous dehydration; the water level never falls below 70 %.

**Wellbeing line:** If someone feels dizzy or sick outdoors, get them into the shade and tell an adult.

**Sources:** CK-12 Life Science: excretory system; NIH MedlinePlus: Water in diet (overview for students)

**Cases using this model**

- **The Thirsty Hiker** — Easy
  - Best answer: She has lost more water (sweat) than she drank, so her body is low on water and is trying to save it.
  - Takeaway: Your body keeps a water budget. When more goes out as sweat than comes in, the kidneys hold water back and the brain turns on thirst — two different signals, one cause.
  - Transfer: Marco plays a 90-minute soccer match on a hot day. Afterwards he has a headache and his pee is dark yellow. → *He sweated out more water than he drank, so his body is low on water.*
- **The Thirsty Swimmer** — Difficult
  - Best answer: Hard swimming made him sweat, the pool hid it, and he drank almost nothing, so more water left his body than came in.
  - Twist: He was surrounded by water the whole time, so 'dehydrated' sounds impossible — but skin doesn't drink pool water, and sweat hidden in the pool still leaves the body.
  - Takeaway: Your water budget doesn't care what's around you. Hard work makes you sweat even in a pool or an ice rink, and only what you drink puts water back.
  - Transfer: Ingrid, 16, plays a hard hockey game in an icy rink, sweating under heavy pads. Afterwards she's very thirsty and confused — “It was freezing in there, how could I lose water?” → *She sweated under her pads during hard play and drank little — cold or wet surroundings don't stop water leaving the body.*

### Legs, veins & the muscle pump  ·  `muscle-pump`
**Sliders:** Minutes standing still (0–40 min); Leg movement (0–2)

**Formulas**

- Extra blood pooled in legs (%): `P = clamp(25 * (1 - pow(0.5, m / 8)) * (1 - 0.45 * w), 0, 30)`
- Blood flow to the brain (% of normal): `B = 100 - 0.8 * clamp(25 * (1 - pow(0.5, m / 8)) * (1 - 0.45 * w), 0, 30)`
- Heart rate (beats/min): `H = 70 + 0.8 * clamp(25 * (1 - pow(0.5, m / 8)) * (1 - 0.45 * w), 0, 30)`
- How he feels: `F = clamp(25 * (1 - pow(0.5, m / 8)) * (1 - 0.45 * w), 0, 30)` → shown as fine / a bit woozy / light-headed — sit down

**The model shows:** Shows blood pooling in the legs the longer someone stands perfectly still; Shows leg-muscle movement squeezing veins and pushing blood back to the heart; Shows less blood reaching the brain when more of it sits in the legs.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include heat, hunger, water or anyone's health; Model fainting itself; it stops at feeling light-headed.

**Wellbeing line:** If you feel light-headed while standing, sit or crouch down straight away and tell an adult.

**Sources:** CK-12 Life Science: circulatory system, veins and valves; NIH NHLBI: how the heart and blood vessels work (student overview)

**Cases using this model**

- **The Flagpole Faint** — Difficult
  - Best answer: Standing still lets gravity pool blood in his legs; without leg muscles squeezing the veins, less blood gets back to his heart and up to his brain. Marching works those muscles, so it's easier.
  - Twist: Everyone assumes the hour of marching wore him out. The opposite is true: marching kept his leg muscles pumping blood back up, and standing perfectly still was the hard part.
  - Takeaway: Your leg muscles help your veins. Moving squeezes blood back up to the heart; standing perfectly still lets it pool — so marching is easier on your brain than standing at attention.
  - Transfer: Ana, 16, volunteers at a museum ticket desk, standing still for hours. By evening her ankles are puffy and she feels woozy — but on days she walks the galleries as a guide, she feels fine. → *Standing still lets blood pool in her legs; walking makes her leg muscles pump it back up.*

### Loud sound & short sleep  ·  `noise-sleep`
**Sliders:** Loudness (70–110 dB); Hours of sleep (3–9 h)

**Formulas**

- Sound energy (× talking level): `L = round(pow(10, (V - 60) / 10))`
- Hair-cell fatigue (0–10): `F = clamp(pow(10, (V - 95) / 10) * T / 60, 0, 10)`
- Ringing next morning: `R = clamp(pow(10, (V - 95) / 10) * T / 60, 0, 10)` → shown as none / a little / yes
- Morning focus (0–10): `A = clamp(10 - 1.4 * (8 - S), 1, 10)`
- Constants: `T = 180`

**The model shows:** Shows hair-cell fatigue rising steeply with loudness over a three-hour concert; Shows morning focus falling with each hour of sleep lost; Shows the two as separate effects: earplugs don't fix sleep, and sleep doesn't fix ringing.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Model permanent hearing damage; it stops at temporary ringing; Include caffeine, naps or how interesting the class is.

**Wellbeing line:** Ringing that lasts more than a day, or feeling exhausted every day, is worth telling an adult about.

**Sources:** NIH NIDCD: Noise-Induced Hearing Loss (student pages); CK-12 Life Science: nervous system and sleep

**Cases using this model**

- **The Concert Night** — Complex · Ears & hearing + Brain & sleep
  - Best answer: Two separate things: the loud music tired the hair cells in her inner ear (ringing, muffled hearing), and the short night left her brain under-slept (zoning out, forgetting).
  - Takeaway: Two symptoms can have two causes. Loud sound tires the hair cells that turn sound into signals; short sleep leaves the brain without the night it needs to reset and store the day. Fix one and the other is still there.
  - Transfer: After a full day at a loud amusement park and a 2 a.m. drive home, Diego wakes up with his ears buzzing and can't remember the directions his mom gave him five minutes ago. → *Two things: loud noise tired his inner-ear hair cells, and short sleep left his brain foggy.*

### Lungs & heart  ·  `lungs-heart`
**Sliders:** Exercise intensity (0–10); Seconds after stopping (0–120 s)

**Formulas**

- Breathing rate (breaths/min): `B = 12 + 3.8 * I * pow(0.5, R / 30)`
- Heart rate (beats/min): `H = 65 + 12.5 * I * pow(0.5, R / 30)`
- Oxygen demand (× rest): `D = 1 + 0.9 * I * pow(0.5, R / 30)`

**The model shows:** Shows that breathing and heart rate rise together as effort rises; Shows that oxygen demand from the muscles drives both; Shows both settling back toward rest after the work stops (halving every 30 seconds).

**It does not:** Measure any real person — the numbers are illustrative teaching values; Account for age, fitness, illness, altitude or temperature; Model anything dangerous; it stays inside a healthy teenager's everyday range.

**Wellbeing line:** If you ever feel faint or can't catch your breath after exercise, tell an adult.

**Sources:** NHLBI, How the Lungs Work (nhlbi.nih.gov/health/lungs); CK-12 Life Science: respiratory and circulatory systems

**Cases using this model**

- **A Case of the Tired Athlete** — Easy
  - Best answer: Her working muscles need more oxygen and energy, so her lungs and heart speed up to deliver it.
  - Takeaway: Breathing and circulation are a delivery team. When muscles work harder they need more oxygen, so the lungs and heart speed up together — and slow down together when the work stops.
  - Transfer: Leo carries heavy boxes up three flights of stairs and notices he is breathing harder with each floor. → *His arm and leg muscles need more oxygen, so his breathing and heart rate rise.*

### Muscles & repair  ·  `muscle-repair`
**Sliders:** Days since the hard workout (0–7 days); How hard the workout was (1–10)

**Formulas**

- Soreness (0–10): `S = clamp(L * 0.9 * (D * pow(0.5, D / 1.4)) * 1.6, 0, 10)`
- Repair under way (% done): `R = clamp(100 * (1 - pow(0.5, D / 1.5)), 0, 100)`
- Strength vs before (%): `P = clamp(100 - 0.6 * L * pow(0.5, D / 1.2) + 0.4 * L * (1 - pow(0.5, D / 1.5)), 85, 110)`

**The model shows:** Shows soreness peaking a day or two after a hard effort, then fading; Shows repair work running in the background for about a week; Shows strength dipping first and then ending slightly higher than before.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Tell the difference between normal soreness and an injury; Say how anyone should train or what to eat.

**Wellbeing line:** Normal soreness is dull and fades in a few days. Sharp pain, swelling or pain that gets worse is a reason to stop and tell a coach or adult.

**Sources:** CK-12 Life Science: muscular system; NIH News in Health: exercise and muscle (student overview)

**Cases using this model**

- **The Sore Weightlifter** — Easy
  - Best answer: Hard work made tiny tears in his muscle fibres; the repair process over several days causes the delayed soreness and rebuilds the fibres slightly stronger.
  - Takeaway: Muscles get stronger by being repaired. Hard work causes tiny tears; the repair takes days, hurts a little in the middle, and finishes slightly stronger than before — which is why rest days are part of training.
  - Transfer: Jade starts a new dance class on Tuesday. On Thursday her calves are too sore to go up on her toes; by the next week's class she manages the whole routine. → *New movements made tiny tears in her calf muscles; repairing them caused the delayed soreness and left them a little stronger for next week.*

### Nerves & cold  ·  `brain-freeze`
**Sliders:** How fast he gulps (0–10); Seconds after the gulp (0–60 s)

**Formulas**

- Roof of the mouth cooled by (°F): `T = 2 * G * pow(0.5, S / 10)`
- Forehead ache (0–10): `P = clamp(1.2 * (G - 2), 0, 10) * pow(0.5, S / 10)`
- Blood vessels in the roof of the mouth: `V = clamp(1.2 * (G - 2), 0, 10) * pow(0.5, S / 10)` → shown as normal / squeezing / squeezed, then rushing open

**The model shows:** Shows the ache growing with how much cold hits the roof of the mouth, and how fast; Shows the ache fading within half a minute; Shows slow sips causing little or no ache.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Show the exact timing of the blood vessels; scientists are still studying how it works; Say anything about other kinds of headaches.

**Wellbeing line:** Headaches that come without anything cold, or don't go away, are a reason to tell an adult.

**Sources:** NIH News in Health: how the body senses cold and pain (student overview); CK-12 Life Science: nervous system

**Cases using this model**

- **The Brain-Freeze Smoothie** — Moderate
  - Best answer: The cold on the roof of his mouth made blood vessels there squeeze and then rush open; nerves near those vessels send pain signals that his brain feels as coming from his forehead.
  - Takeaway: A brain freeze isn't your brain freezing. Cold on the roof of your mouth makes blood vessels squeeze and then rush open, and the nerves there send a signal your brain feels as a forehead ache — short, harmless and gone in seconds.
  - Transfer: Chloe bites straight into an ice-pop on a hot day and feels a stab of pain between her eyes for a few seconds. → *Cold on the roof of her mouth made nearby blood vessels squeeze and then rush open, and nerves there send pain that her brain feels in her forehead.*

### Nerves & pressure  ·  `nerve-pressure`
**Sliders:** Minutes sitting on his foot (0–60 min); Seconds since standing up (0–120 s)

**Formulas**

- Nerve signals getting through (%): `G = 100 - clamp(1.5 * M, 0, 90) * pow(0.5, S / 30)`
- Numbness (0–10): `N = clamp(M / 6, 0, 10) * pow(0.5, S / 30)`
- Pins and needles (0–10): `T = clamp(M / 6, 0, 10) * (1 - pow(0.5, S / 10)) * pow(0.5, S / 40)`

**The model shows:** Shows numbness growing the longer a nerve is pressed; Shows pins and needles starting after the pressure is off and fading within a couple of minutes; Shows signals returning to normal on their own.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Separate the nerve itself from its blood supply — both get squeezed; Cover numbness that happens without anything pressing.

**Wellbeing line:** Numbness or tingling that comes without sitting on something, or doesn't go away, is a reason to tell an adult.

**Sources:** NIH NINDS: Brain basics — nerves and signals (student overview); CK-12 Life Science: nervous system

**Cases using this model**

- **The Sleeping Foot** — Moderate
  - Best answer: Sitting on his foot pressed on a nerve and its blood supply, so its signals slowed and the foot went numb; once the pressure was off, the nerve started up again with jumbled signals — pins and needles — until it was back to normal.
  - Takeaway: Nerves carry messages from your body to your brain. Squash one for a while and the messages slow down — numb. Take the pressure off and it restarts with jumbled signals — pins and needles — before getting back to normal.
  - Transfer: Isabel falls asleep with her arm folded under her head. She wakes up and her hand is numb and floppy, then it tingles for a minute before it's normal. → *Her head pressed on a nerve in her arm so its signals slowed; when she moved, the nerve started up again with tingling.*

### Nose & smell  ·  `smell-adapt`
**Sliders:** Minutes in the room (0–20 min); How strong the smell is (1–10)

**Formulas**

- Smell actually in the air (% of max): `A = S * 10`
- How strongly it's noticed (% of max): `N = S * 10 * (0.15 + 0.85 * pow(0.5, m / 3))`
- Smell receptors are: `R = 0.15 + 0.85 * pow(0.5, m / 3)` → shown as quiet (adapted) / settling down / firing hard

**The model shows:** Shows the smell staying in the air while the sense of it fades; Shows smell receptors quieting down when a smell doesn't change (halving every 3 minutes); Shows that a stronger smell takes longer to fade from notice.

**It does not:** Measure any real person or any real smell — the numbers are illustrative teaching values; Include the brain's own habit of ignoring familiar things, which adds to the effect; Say anything about whether a smell is harmful.

**Wellbeing line:** If you smell gas or smoke, don't wait to get used to it — leave and tell an adult right away.

**Sources:** CK-12 Life Science: the senses — smell; NIH NIDCD: Smell disorders and how smell works (student overview)

**Cases using this model**

- **The Locker-Room Smell** — Moderate
  - Best answer: Smell receptors in his nose fire hard at a new smell but quiet down when it doesn't change, so his brain stops getting the alarm — even though the smell is still in the air.
  - Takeaway: Your senses report change, not sameness. Smell receptors quiet down when a smell stays the same, so you stop noticing it — even though it never left. A short break resets them.
  - Transfer: Hana, 14, puts on perfume before school. By lunch she can't smell it at all and thinks it has worn off — but her friend sitting next to her says she can still smell it clearly. → *Hana's smell receptors adapted to the steady smell, so her brain stopped reporting it — her friend's nose hasn't adapted.*

### Nose & taste  ·  `smell-taste`
**Sliders:** How blocked her nose is (0–100 %)

**Formulas**

- Flavour she notices (% of normal): `F = 25 + 0.75 * (100 - B)`
- Smell reaching her nose (% of normal): `S = 100 - B`
- Tongue's basic tastes (% of normal): `T = 100`
- Apple or potato?: `N = 100 - B` → shown as can't tell / barely / easy

**The model shows:** Shows the flavour you notice falling as the nose gets more blocked; Shows the tongue's basic tastes — sweet, salty, sour, bitter, savory — staying the same; Shows that most of what we call flavour depends on smell.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include texture, temperature or spiciness, which also shape flavour; Say anything about colds or how to clear a stuffy nose.

**Wellbeing line:** If you lose your sense of smell or taste for a long time without a stuffy nose, tell an adult.

**Sources:** NIH NIDCD: Smell and taste (student pages); CK-12 Life Science: the senses

**Cases using this model**

- **The Stuffy-Nose Taster** — Easy
  - Best answer: Most of what we call flavour is actually smell: smells from food drift up the back of the throat to the nose. With her nose blocked, only the tongue's basic tastes — like sweet, salty and sour — get through.
  - Takeaway: Flavour is a team effort. Your tongue senses only a few basic tastes; the rest comes from smells that drift up the back of your throat to your nose. Block the nose and food tastes flat.
  - Transfer: Leo holds his nose and eats a jellybean. It just tastes sweet. When he lets go of his nose, it suddenly tastes of cherry. → *Letting go let cherry smells from his mouth reach his nose, adding flavour to the sweet taste his tongue already had.*

### Oxygen & altitude  ·  `altitude`
**Sliders:** Altitude (0–12 × 1,000 ft); Days at altitude (0–7 days)

**Formulas**

- Oxygen in each breath (% of sea level): `O = 100 - 3.3 * K`
- Breathing rate at rest (breaths/min): `B = 12 + 1.0 * K * pow(0.5, D / 4)`
- Heart rate at rest (beats/min): `H = 65 + 2.5 * K * pow(0.5, D / 4)`
- Red blood cells: `C = 100 + 1.2 * K * (1 - pow(0.5, D / 3))` → shown as normal / rising / raised

**The model shows:** Shows there is less oxygen in each breath higher up; Shows breathing and heart rate rising at first to make up for it; Shows the slower fix: more red blood cells over several days, which lets breathing settle.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Model altitude sickness or anything dangerous; it stays at ski-resort heights; Account for fitness, age or exercise.

**Wellbeing line:** A headache or feeling sick on a mountain trip is a reason to rest, drink water and tell an adult.

**Sources:** CK-12 Life Science: respiratory and circulatory systems; NASA / NOAA: how air pressure changes with altitude (student pages)

**Cases using this model**

- **The Altitude Skier** — Difficult
  - Best answer: The air at 9,000 ft holds less oxygen per breath, so her lungs and heart work harder at first; over a few days her body makes more red blood cells to carry oxygen, and the effort fades.
  - Twist: In the Thirsty Hiker case 'the air is thin' was wrong. Here it is the right answer — and the body's fix takes days, not minutes, without any extra fitness.
  - Takeaway: Higher up, each breath holds less oxygen. The body has a quick fix (breathe and pump harder) and a slow fix (make more red blood cells over days). When the slow fix is in place, the quick fix can relax.
  - Transfer: A soccer team from a sea-level city plays a match in a city at 7,000 ft the day they arrive. The players tire much faster than usual, even though the home team runs just as far. → *Each breath at 7,000 ft holds less oxygen; the visitors' bodies have not yet adjusted, while the home team's have.*

### Pollen & breathing  ·  `pollen-breathing`
**Sliders:** Pollen in the air (0–10); Pace (0–10)

**Formulas**

- Breathing rate (breaths/min): `B = 12 + 3.6 * P`
- Pollen breathed in (units/min): `N = G * (8 + 6 * P) / 10`
- Alarm chemical (% above calm): `A = clamp(1.8 * G * (8 + 6 * P) / 10, 0, 100)`
- Sneezes (per hour): `S = round(clamp(G * (8 + 6 * P) / 40, 0, 16))`
- Eyes: `E = clamp(1.8 * G * (8 + 6 * P) / 10, 0, 100)` → shown as fine / itchy / itchy & watery

**The model shows:** Shows pollen breathed in = pollen in the air × air breathed per minute; Shows the immune alarm and sneezing scaling with that dose; Shows hard breathing doing nothing when there's no pollen.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Say whether anyone has an allergy or what to do about it; Include asthma or serious reactions.

**Wellbeing line:** Wheezing, chest tightness or trouble breathing during exercise is a reason to stop and tell an adult right away.

**Sources:** CK-12 Life Science: immune and respiratory systems; NIH News in Health: seasonal allergies (student overview)

**Cases using this model**

- **The Pollen-Season Runner** — Complex · Immune system + Lungs & breathing
  - Best answer: Both: her immune system treats pollen as an intruder, and running hard makes her breathe in far more air — so far more pollen — each minute, which sets off a bigger alarm.
  - Takeaway: The size of an allergy alarm depends on the dose. The immune system reacts to pollen; how much reaches it depends on how much is in the air and how much air you breathe. Run harder in pollen and you inhale a bigger dose.
  - Transfer: Leo mows the lawn on a warm May afternoon and starts sneezing. Pushing the mower up the steep part of the yard, breathing hard, his sneezing gets much worse. Mowing the same lawn after a rainstorm, he barely sneezes. → *Grass pollen sets off his immune system, and breathing harder pulls in more of it; rain washes pollen out of the air.*

### Skin & sunlight  ·  `skin-uv`
**Sliders:** Hours in strong sun (0–6 h); Protection (0–2)

**Formulas**

- UV energy reaching skin (units): `E = uv * H * (1 - 0.45 * P)`
- Skin redness (0–10): `B = clamp((uv * H * (1 - 0.45 * P) - 18) / 2.4, 0, 10)`
- Melanin response: `M = uv * H * (1 - 0.45 * P)` → shown as starting / building / strong
- Constants: `uv = 8`

**The model shows:** Shows UV energy adding up with time in the sun; Shows redness appearing only once a threshold dose is passed, then growing quickly; Shows the skin's slower melanin response starting to build.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Account for skin tone, time of day, altitude, water or clouds; Give medical advice about sunburn.

**Wellbeing line:** Blistering, fever or feeling sick after sun is a reason to tell an adult.

**Sources:** CK-12 Life Science: integumentary system; US EPA SunWise: UV Index for students

**Cases using this model**

- **The Sunburned Lifeguard** — Easy
  - Best answer: UV light damaged his skin cells; the redness is the repair response hours later, peeling clears the worst-hit cells, and extra melanin is the skin preparing for next time.
  - Takeaway: Sunlight carries UV energy that damages skin cells. Redness hours later is the repair crew arriving, peeling is the clear-out, and the darker skin afterwards is the body building its own shade for next time.
  - Transfer: Rosa skis all day on a bright, snowy mountain. That night her cheeks and nose are red and sore even though it was freezing cold. → *UV light — made stronger by altitude and reflected by snow — damaged her skin cells, and the redness is the delayed repair response.*

### Skin & temperature  ·  `temperature`
**Sliders:** How cold the water is (0–10); Minutes wrapped in a towel (0–10 min)

**Formulas**

- Water temperature (°F): `T = 85 - 3.5 * C`
- Shivering (0–10): `V = round(clamp(10 * (70 - (85 - 3.5 * C)) / 20, 0, 10) * pow(0.5, M / 2))`
- Blood flow to skin: `F = 100 - 60 * max(0, (75 - (85 - 3.5 * C)) / 25)` → shown as low / reduced / normal
- Core temperature: always shown as "steady"

**The model shows:** Shows shivering starting once the water is cold enough and growing as it gets colder; Shows blood flow to the skin dropping so warm blood stays near the organs; Shows shivering fading once wrapped up (halving every 2 minutes).

**It does not:** Measure any real person — the numbers are illustrative teaching values; Show core temperature changing: it is displayed as steady because the body guards it; Model dangerous cold; the model stops well short of it.

**Wellbeing line:** If someone can't stop shivering or seems confused in the cold, get an adult right away.

**Sources:** CK-12 Life Science: integumentary system and homeostasis; Any middle-school life-science text: thermoregulation

**Cases using this model**

- **The Shivering Swimmer** — Easy
  - Best answer: His body is losing heat to the cold water, so it makes heat (shivering) and keeps warm blood near his organs (pale skin).
  - Takeaway: Your body guards its inside temperature. In the cold it makes heat with shivering and keeps warm blood away from the skin — looking pale is the body being smart, not sick.
  - Transfer: Aiko waits at a windy winter bus stop without a coat. She notices she is shivering and her hands have gone white. → *Her body is losing heat to the cold air, so her muscles shiver to make heat and blood stays near her organs.*

### Skin, blood flow & cold  ·  `cold-hands`
**Sliders:** Minutes making snowballs bare-handed (5–20 min); How cold the snow is (0–10)

**Formulas**

- Blood flow to fingers (% of normal): `F = clamp(100 - 70 * min(1, M / 4) * C / 10 + 60 * C / 10 * clamp((M - 5) / 5, 0, 1), 20, 110)`
- Finger skin temperature (°F): `T = 45 + 0.35 * clamp(100 - 70 * min(1, M / 4) * C / 10 + 60 * C / 10 * clamp((M - 5) / 5, 0, 1), 20, 110)`
- Fingers look: `R = clamp(100 - 70 * min(1, M / 4) * C / 10 + 60 * C / 10 * clamp((M - 5) / 5, 0, 1), 20, 110)` → shown as pale and aching / pink / red, feel hot

**The model shows:** Shows cold first closing down blood flow to bare fingers (they go pale); Shows the body reopening finger blood vessels after several minutes to send warm blood; Shows that the colder it is, the stronger both effects are.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Show the on-and-off waves of reopening; it shows the average; Model dangerous cold — the reopening only protects for a while.

**Wellbeing line:** Fingers that stay white, numb or hard in the cold are a reason to go inside and tell an adult right away.

**Sources:** CK-12 Life Science: integumentary system and thermoregulation; Any high-school physiology text: cold-induced vasodilation ('hunting reaction')

**Cases using this model**

- **The Snowball Hands** — Difficult
  - Best answer: Cold first shuts down blood flow to her bare fingers, but after a while her body opens the finger blood vessels in bursts to send warm blood and protect them — so they turn red and feel hot.
  - Twist: Her hands feel hot while they're buried in snow — the opposite of what cold should do. The body briefly reopens finger blood vessels on purpose to stop them getting too cold.
  - Takeaway: In the cold, your body first saves heat by shutting off blood to your fingers — then, to protect them, it opens the vessels in bursts and sends warm blood back. That's why cold hands can suddenly feel hot.
  - Transfer: Lars, 15, goes ice fishing and handles wet lines with bare hands. After a while his fingers turn red and tingle with warmth, even though the water is freezing. → *His body opened the blood vessels in his cold fingers in bursts to send warm blood and protect them.*

### Skin, sunlight & bones  ·  `vitamin-d`
**Sliders:** Hours outdoors in daylight each week (0–10 h/week); Season (0–2)

**Formulas**

- Vitamin D made (% of what the body needs): `V = clamp(15 + O * (4 + 8 * S), 0, 150)`
- Calcium taken in from food (% of what's eaten): `C = clamp(10 + 0.25 * clamp(15 + O * (4 + 8 * S), 0, 150), 10, 40)`
- Bones are: `B = clamp(15 + O * (4 + 8 * S), 0, 150)` → shown as short of building material / getting some / well supplied

**The model shows:** Shows skin making vitamin D when daylight reaches it, much less in winter; Shows vitamin D helping the gut take calcium in from food; Shows that milk's calcium is only useful once it is absorbed.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Account for skin tone, sunscreen, clothing, latitude or vitamin D in food; Say how much sun anyone should get — too much sun burns skin (see The Sunburned Lifeguard).

**Wellbeing line:** Questions about what your own body needs are worth asking a parent or school nurse.

**Sources:** NIH Office of Dietary Supplements: Vitamin D fact sheet for consumers; CK-12 Life Science: skeletal system and nutrition

**Cases using this model**

- **The Indoor Winter** — Moderate
  - Best answer: Her skin makes vitamin D only in sunlight, and vitamin D lets her gut absorb calcium — so with almost no sun, much of the milk's calcium isn't taken in.
  - Takeaway: Bones are built from calcium, but the gut needs vitamin D to take calcium in — and skin makes vitamin D in daylight. Food and sunlight work as a team.
  - Transfer: Two classes drink the same amount of milk at lunch. One class has PE outdoors all year; the other has PE in a basement gym with no windows. → *The outdoor class takes in more calcium, because sunlight on their skin makes vitamin D, which helps the gut absorb it.*

### Sleep & memory  ·  `sleep-memory`
**Sliders:** Hours of sleep after studying (2–10 h); Hours studied (0–6 h)

**Formulas**

- Studying stored (% kept): `M = clamp(15 + 9 * S, 20, 95)`
- Facts recalled (facts): `R = round(10 * T * clamp(15 + 9 * S, 20, 95) / 100)`
- Alertness in the test (0–10): `A = clamp(1.1 * S - 0.5, 1, 10)`

**The model shows:** Shows how much of what was studied gets stored, rising with the hours of sleep afterwards; Shows alertness the next day rising with sleep; Shows extra study hours adding little when sleep is short.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include how well someone studied, interest in the subject, or naps; Say how much sleep any particular person needs.

**Wellbeing line:** If stress about schoolwork keeps you from sleeping, talk to an adult you trust.

**Sources:** CK-12 Life Science: nervous system and memory; NIH NIGMS: circadian rhythms fact sheet

**Cases using this model**

- **The All-Nighter** — Complex · Brain & sleep + Brain & memory
  - Best answer: Both: sleep is when the brain stores what you studied, so Thursday night's cramming was never properly saved — and the short night also left her too tired to focus during the test.
  - Takeaway: Sleep does two jobs for learning: it stores what you studied during the day, and it leaves you alert enough to use it. An all-nighter loses both — the extra hours of study never get saved, and the tired brain struggles to find what was.
  - Transfer: Ana and her friend practise a new dance routine for two hours on Monday evening. Ana sleeps well and dances it better on Tuesday than at the end of practice. Her friend stays up until 3 a.m. gaming, forgets half the steps on Tuesday and keeps yawning. → *Sleep stored Ana's practice and left her alert; her friend's short night meant the steps weren't stored and she was too tired to focus.*

### Sleep + stress + immune defence  ·  `sleep-immune`
**Sliders:** Hours of sleep each night (4–9 h); Stress level (0–10)

**Formulas**

- Immune defence (% of full): `D = clamp(100 - 9 * max(0, 8 - s) - 2.5 * x, 20, 100)`
- Stress hormones (% above calm): `C = 10 * x`
- Chance the going-around cold gets through (%): `R = clamp(15 + 0.7 * (100 - clamp(100 - 9 * max(0, 8 - s) - 2.5 * x, 20, 100)), 5, 80)`

**The model shows:** Shows immune defence dropping with less sleep than about 8 hours; Shows long-lasting stress lowering immune defence too; Shows the two together lowering it most, so a cold that's going around is more likely to get through.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include handwashing, how many germs are around, or anyone's health; Say that sleep or stress cause colds; colds come from viruses passed between people.

**Wellbeing line:** If you feel run down for weeks, or stress feels like too much, talk with an adult you trust.

**Sources:** NIH News in Health: sleep and your health; stress and your health (student overviews); CK-12 Life Science: immune system

**Cases using this model**

- **The Exam-Week Cold** — Complex · Brain & sleep + Adrenaline & the alarm system
  - Best answer: Both: night after night of short sleep and a week of stress hormones each weakened his immune defences, so together they let the cold going around get through.
  - Takeaway: Your immune system needs sleep, and long-lasting stress pushes it down. Each alone weakens your defences a little; together they open the door for whatever cold is going around.
  - Transfer: During tech week for the school play, the cast rehearses until 11 p.m. every night and everyone is nervous about opening night. By Friday half the cast has the cold going around backstage. → *Short sleep and stress together weakened their immune defences, so the cold going around got past them.*

### Teeth & bacteria  ·  `tooth-acid`
**Sliders:** Separate sugary sips per day (0–20); Times brushed per day (0–3)

**Formulas**

- Minutes of acid attack per day (min): `A = 20 * N * (1 - 0.15 * B)`
- Acid-free time for repair (of 8 waking hours) (min): `F = clamp(480 - 20 * N * (1 - 0.15 * B), 0, 480)`
- Enamel: `R = 20 * N * (1 - 0.15 * B)` → shown as repairs fully between sips / struggling to keep up / losing ground
- Sugar arrivals: `G = N`

**The model shows:** Shows each sugary sip starting about 20 minutes of acid; Shows that splitting the same sugar into more sips means far more acid time; Shows brushing lowering the bacteria that make the acid.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include fluoride, the type of food, or how saliva differs between people; Tell anyone how to look after their teeth — that's a dentist's job.

**Wellbeing line:** Tooth pain or sensitivity is a reason to tell an adult so a dentist can take a look.

**Sources:** NIH National Institute of Dental and Craniofacial Research: tooth decay (student pages); CK-12 Life Science: digestive system — the mouth and teeth

**Cases using this model**

- **The Cavity Detective** — Moderate
  - Best answer: Bacteria in his mouth turn sugar into acid, and every sip starts about twenty minutes of acid softening his enamel. Sipping every few minutes means the acid never stops, so his saliva never gets the chance to repair the enamel.
  - Takeaway: Teeth care about how often, not just how much. Every sugary sip feeds mouth bacteria that make acid for about twenty minutes; spread the sips all day and the acid never stops, so saliva never gets its turn to repair the enamel.
  - Transfer: Nia chews sugary gum, one piece after another, from the start of school until lunch. Her brother eats the same amount of sugar as one dessert after dinner. Who is more likely to get soft spots on their teeth? → *Nia, because each piece keeps acid attacking her teeth all morning, with no break for saliva to repair them.*

### Throat & swallowing  ·  `swallow-wave`
**Sliders:** Body angle (0–180 °); Size of each sip (1–3)

**Formulas**

- Each sip reaching the stomach (%): `S = clamp(100 - 4 * (v - 1) * a / 180, 80, 100)`
- Time to reach the stomach (s): `T = 2 + 5 * a / 180`
- Muscle squeeze waves (per minute): `Q = 12`
- Gravity: `G = 100 - a * 200 / 180` → shown as pulling the wrong way / no help / helping a little

**The model shows:** Shows swallowing working at any body angle because muscles do the pushing; Shows gravity helping a little when upright, so liquid arrives a bit sooner; Shows bigger gulps being slightly harder to manage upside down.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include choking, breathing, or how the airway is protected; Suggest anyone should practise drinking upside down.

**Wellbeing line:** Eat and drink sitting up in everyday life; if swallowing ever hurts or feels stuck, tell an adult.

**Sources:** CK-12 Life Science: digestive system, the esophagus; NASA: how astronauts eat and drink in space (student page)

**Cases using this model**

- **The Upside-Down Drinker** — Difficult
  - Best answer: Swallowing is done by muscles: rings of muscle in the food tube squeeze in a wave that pushes food and water to the stomach, so it works whichever way up you are — gravity only helps a little.
  - Twist: Most people think food and drink fall down into the stomach. They don't: muscles squeeze them along, which is why Leila — and astronauts in space — can swallow upside down.
  - Takeaway: Swallowing is a muscle job, not a gravity job. Rings of muscle squeeze food and drink along in a wave — which is why astronauts can eat in space and you can swallow upside down.
  - Transfer: At the zoo, Orla watches a giraffe drink from a pond. Its head is far below its stomach, yet the water travels all the way up its long neck. → *Muscle waves in the giraffe's long food tube squeeze the water upward to its stomach.*

### Tongue & bitter taste  ·  `taste-genes`
**Sliders:** How bitter the food is (0–10); Inherited bitter sensitivity (0–2)

**Formulas**

- Bitterness she tastes (0–10): `B = clamp(c * (0.3 + 0.45 * g), 0, 10)`
- Bitter receptors firing (%): `T = clamp(10 * c * (0.3 + 0.45 * g), 0, 100)`
- Wants another bite: `W = clamp(c * (0.3 + 0.45 * g), 0, 10)` → shown as yes / maybe / no thanks

**The model shows:** Shows the same bitter chemical tasting stronger to someone with more sensitive bitter receptors; Shows bitterness tasted rising with how bitter the food is; Shows sensitivity as something inherited, set by genes.

**It does not:** Measure any real person — the numbers are illustrative teaching values; Include smell, cooking, habits or how taste changes with age; Say anything about what anyone should eat.

**Wellbeing line:** If a food suddenly tastes very strange or you lose your sense of taste, tell an adult.

**Sources:** NIH News in Health: how taste works (student overview); CK-12 Life Science: senses, taste and inherited traits

**Cases using this model**

- **The Bitter Broccoli** — Difficult
  - Best answer: Imani inherited extra-sensitive bitter-taste receptors on her tongue, so the same chemical in broccoli tastes much more bitter to her than to her brother.
  - Twist: The obvious answer — 'she's just a picky eater' — is wrong. Her tongue really is detecting a bitter chemical more strongly than her brother's, and she inherited that.
  - Takeaway: Taste isn't the same for everyone. Genes help decide how sensitive your bitter-taste receptors are, so the same broccoli can be mild to one person and harsh to another — that's biology, not pickiness.
  - Transfer: Raj and his best friend share the same cup of black hot chocolate made with dark cocoa. Raj says it's harshly bitter; his friend says it just tastes rich. → *Raj probably inherited more sensitive bitter-taste receptors, so the same chemicals taste stronger to him.*

## Sign-off

I have reviewed the body models and the case claims listed above at the level of the science, and read the four spot-check cases in full.

Name: ______________________   Role: ______________________   Date: __________

Corrections (model or case, and what to change):

________________________________________________________________________

________________________________________________________________________

*Generated by `tools/review_pack.py` from the case and model files. Re-run after any change.*
