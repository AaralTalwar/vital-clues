# Vital Clues — Science Review Pack

48 fictional cases built on 48 simplified body models, for students aged 12–16. Levels: 12 Easy, 12 Moderate, 12 Difficult, 12 Complex.

## How to review (about 90–120 minutes)

This is a **model-level** review. Each case has its own model; all its science sits in the model section below, split into sourced facts, modelling choices and illustrative numbers. You are not asked to play every case.

1. For each model, check the **From sources** facts match their linked pages, the **Our choices** simplifications are fair for grades 7–10, and the formulas give the right direction and shape.
2. Check each model's "does / doesn't" limits and wellbeing line are honest and age-appropriate.
3. Under each model, read the one-line claims of the cases that use it: the best answer, the takeaway and the transfer answer. Flag any sentence that is wrong or misleading.
4. Read the four spot-check cases end to end in the app (one per level): **A Case of the Tired Athlete** (Easy), **The Sleepy Gamer** (Moderate), **The Stage-Fright Singer** (Difficult), **The All-Nighter** (Complex).
5. Sign off below, or list corrections. Corrections to a model fix every case that uses it.

Nothing in the app diagnoses or advises on any real person; every case carries a fictional-character notice and a "tell an adult" line.

## Models

### A Case of the Tired Athlete — Maya's heart & lungs during a sprint  ·  `lungs-heart`

*Level: Easy*

Working muscles burn energy and need oxygen. Your lungs bring oxygen in and your heart pumps it to the muscles in your blood, so both speed up together as effort rises. This model starts from Maya's resting heart rate and breathing and climbs toward her maximums as she works harder, then lets everything settle once she stops.

- Heart rate climbs in a straight line from Maya's resting rate toward her maximum as effort goes from 0 to 10.
- Her maximum heart rate depends on age: about 208 − 0.7 × age.
- Breathing rises slowly at easy effort and faster near the top — from about 14 a minute toward about 55.
- Energy use is counted in METs: 1 means sitting still; 6 or more is vigorous.
- After she stops, the extra beats and breaths above resting halve about every 75 seconds.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Effort** `I` · 0–10, case value 8 · source: Effort on the 0–10 scale health scientists use: 5–6 is moderate, 7–8 is vigorous, 10 is all-out.
- *bubble* · **Seconds after stopping** `R` · 0–180 s, case value 0 · source: Heart rate recovery: how fast the extra beats and breaths fade once the work stops. Fitter hearts usually recover faster.
- *factor* · **Age** `age` · 11–18 years, case value 13 · source: Maximum heart rate drops slowly with age, so the same effort uses a different share of the heart's top speed.
- *factor* · **Resting heart rate** `Hrest` · 45–95 beats/min, case value 70 · source: Most people rest at 60–100 beats a minute. Very active people can be much lower — as low as 40.
- *factor* · **Resting breathing** `Brest` · 10–20 breaths/min, case value 14 · source: At rest most people take about 12–16 breaths a minute.

**Formulas**

- Heart rate (beats/min): `H = Hrest + (208 - 0.7 * age - Hrest) * (I / 10) * pow(0.5, R / half)`
- Breathing rate (breaths/min): `B = Brest + (Bmax - Brest) * pow(I / 10, 1.3) * pow(0.5, R / half)`
- Energy use (× sitting still): `D = 1 + (METmax - 1) * (I / 10) * pow(0.5, R / half)`
- Talk test: `T = I * pow(0.5, R / half)` → shown as can sing / can talk, not sing / only a few words
- Her maximum heart rate (beats/min): `Hmax = 208 - 0.7 * age`
- Constants: `Bmax = 55`, `METmax = 14`, `half = 75`

**From sources** (each checked against the linked page)

- Health scientists rate effort on a 0–10 scale: 5–6 is moderate and 7–8 starts vigorous. At vigorous effort you can't say more than a few words without pausing for breath. — CDC: Measuring Physical Activity Intensity <https://www.cdc.gov/physical-activity-basics/measuring/index.html>
- One MET is the energy (oxygen) used sitting quietly; activity of 6 METs or more counts as vigorous. — CDC: Measuring Physical Activity Intensity <https://www.cdc.gov/physical-activity-basics/measuring/index.html>
- A regression equation predicts maximum heart rate as 208 − 0.7 × age in healthy adults. — PubMed: Age-predicted maximal heart rate revisited (J Am Coll Cardiol) <https://pubmed.ncbi.nlm.nih.gov/11153730/>
- For most people a resting heart rate of 60–100 beats a minute is normal; very active people can be as low as 40. Vigorous activity is about 70–85% of maximum heart rate. — American Heart Association: Target Heart Rates Chart <https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates>
- Normal breathing for a person at rest is 12–16 breaths a minute. — Johns Hopkins Medicine: Vital Signs (Body Temperature, Pulse Rate, Respiration Rate, Blood Pressure) <https://www.hopkinsmedicine.org/health/conditions-and-diseases/vital-signs-body-temperature-pulse-rate-respiration-rate-blood-pressure>
- We breathe about 15 times a minute at rest and up to about 40–60 times a minute during exercise. — European Lung Foundation: Your lungs and exercise <https://europeanlung.org/en/information-hub/keeping-lungs-healthy/your-lungs-and-exercise>
- Heart rate recovery is how much your heart rate drops in the first minute after you stop; a drop of 18 beats or more is a good result. — Cleveland Clinic: Heart Rate Recovery <https://my.clevelandclinic.org/health/articles/23490-heart-rate-recovery>

**Our choices** (simplifications — please check these are fair)

- **Heart rate rises in a straight line with effort.** Exercise heart-rate zones are given as percentages of maximum, which is the same as a straight line from resting to maximum. Real hearts are close to this in the middle of the range.
- **Breathing curves upward (effort to the power 1.3).** In real exercise breathing speeds up more sharply at hard effort than at easy effort. The exact curve differs from person to person, so we picked a gentle one.
- **Recovery halves every 75 seconds.** This gives a first-minute heart-rate drop of about 40 beats after a hard sprint — well above the 18-beat 'good' mark. Real recovery has a fast phase then a slow one; we merged them into one.
- **An adult maximum-heart-rate formula is used for a 13-year-old.** There is no single agreed formula for teenagers. Treat Maya's maximum as an estimate.

**Illustrative** (made-up numbers): Maya's resting heart rate (70) and breathing (14) are made up for a fictional character, chosen inside the normal ranges above. Her top breathing rate (55 a minute) and top energy use (14 METs) are picked inside real ranges, not measured.

**Still being studied:** Exactly how the brain matches breathing to effort so closely is still an active research question.

**Limits:** shows — Shows heart rate and breathing rising together as effort rises, toward limits set by age and fitness; Shows energy use in METs, the unit health scientists use; Shows the extra beats and breaths fading after the work stops. Does not — Measure any real person — Maya is fictional and her numbers are estimates; Include heat, altitude, illness, or the slow second phase of recovery; Work out anyone's own heart-rate zones.

**Wellbeing line:** If you ever feel faint, have chest pain or can't catch your breath after exercise, stop and tell an adult.

**Case claims to check**

- Best answer: Her working muscles need more oxygen and energy, so her lungs and heart speed up to deliver it.
- Takeaway: Breathing and circulation are a delivery team. When muscles work harder they need more oxygen, so the lungs and heart speed up together — and slow down together when the work stops.
- Transfer: Leo carries heavy boxes up three flights of stairs and notices he is breathing harder with each floor. → *His arm and leg muscles need more oxygen, so his breathing and heart rate rise.*

### The Jumpy Goalkeeper — Sam's fast lane and thinking lane  ·  `nerves-reflex`

*Level: Easy*

Sam's body has two routes from eye to hands. A protective reflex is a short route that doesn't wait for the thinking part of the brain, so it is very fast. Deciding where to dive goes through the brain, so it takes longer — but practice speeds it up, and tiredness or short sleep slow it down. Whether a save is possible depends on how much time the ball gives her.

- Time to react = distance ÷ shot speed.
- The reflex route takes about 0.10 seconds and doesn't change with practice.
- Deciding takes about 0.25 seconds at first and gets about 0.003 s faster for each hour of practice, but never faster than 0.19 s.
- Tiredness adds about 0.06 s and each step of short sleep adds about 0.03 s to deciding.
- If the ball arrives before the deciding route finishes, only the reflex makes it in time.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How close the shot is** `k` · 0–27 m away, case value 20 · choice: Closer shots arrive sooner, leaving less time for any pathway to finish.
- *bubble* · **Hours of practice** `P` · 0–20 h, case value 0 · source: Practice speeds up the deciding pathway — but not the reflex, which is already as short as it can be.
- *factor* · **Shot speed** `v` · 10–30 m/s, case value 20 · illustrative: A harder shot covers the same distance in less time.
- *factor* · **Tiredness** `tired` · 0–1, case value 0 · source: Being tired slows deciding; the reflex is hardly affected.
- *factor* · **Sleep last night** `sleep` · 0–2, case value 0 · source: Short sleep slows reaction time and leads to more mistakes.

**Formulas**

- Time before the ball arrives (s): `t = (far - k) / v`
- Reflex pathway (s): `r = reflex`
- Decision pathway (s): `c = max(0.19, decide - 0.003 * P) + 0.06 * tired + 0.03 * sleep`
- What makes it in time: `which = (far - k) / v - (max(0.19, decide - 0.003 * P) + 0.06 * tired + 0.03 * sleep)` → shown as only the reflex / reflex + decision
- Constants: `far = 30`, `reflex = 0.1`, `decide = 0.25`

**From sources** (each checked against the linked page)

- In a reflex, the signal goes along a nerve to the spinal cord and straight back out to a muscle, without involving the brain. — MSD Manual (Consumer Version): Reflex Arc: A No-Brainer <https://msdmanuals.com/home/multimedia/image/reflex-arc-a-no-brainer>
- Simple reaction time to something you see averages about 190 milliseconds or more for college students. — Dove Medical Press: Evaluation of Simple Visual Reaction Time of Different Colored Light Stimuli in Visually Normal Students (Clinical Optometry) <https://www.dovepress.com/evaluation-of-simple-visual-reaction-time-of-different-colored-light-s-peer-reviewed-fulltext-article-OPTO>
- Reaction time depends on things like practice and fatigue. — Dove Medical Press: Evaluation of Simple Visual Reaction Time of Different Colored Light Stimuli in Visually Normal Students (Clinical Optometry) <https://www.dovepress.com/evaluation-of-simple-visual-reaction-time-of-different-colored-light-s-peer-reviewed-fulltext-article-OPTO>
- Not getting enough sleep can slow reaction time and cause more mistakes. — NIH National Heart, Lung, and Blood Institute: Sleep Deprivation and Deficiency: How Sleep Affects Your Health <https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects>

**Our choices** (simplifications — please check these are fair)

- **A dive decision takes about 0.25 s, slower than a simple 0.19 s reaction.** Choosing which way to dive is harder than pressing one button when a light comes on, and harder choices take longer.
- **The reflex route takes about 0.10 s.** A protective blink-and-flinch is quicker than any decision. The exact time differs between reflexes, so we used one round number.
- **Practice, tiredness and sleep change the decision time by fixed amounts.** Real effects vary a lot between people; fixed steps show the direction clearly.
- **Hands reach the ball as soon as a route finishes.** We left out the time it takes to actually move the arms, to keep the focus on the nerve pathways.

**Illustrative** (made-up numbers): Sam's shot speed (20 m/s) is a made-up value for a hard shot by a teen player. The sizes of the practice, tiredness and sleep effects are illustrative.

**Limits:** shows — Shows how little time a fast shot leaves and how it shrinks as the shot gets closer; Shows a fixed fast reflex route and a slower deciding route; Shows practice, tiredness and sleep changing only the deciding route. Does not — Measure any real person — times are rounded teaching values; Include the time to move the arms or the ball slowing down; Say how good a goalkeeper anyone is.

**Wellbeing line:** Protect your eyes and head in sport — a reflex is fast, but goggles or a helmet is faster.

**Case claims to check**

- Best answer: Signals travel along nerves from her eyes to her brain and spinal cord and out to her muscles; some pathways are short and automatic (reflexes), others go through decision-making and are slower but can be trained.
- Takeaway: Your nervous system has a fast lane and a thinking lane. Reflexes protect you before you can decide; decisions are slower but get faster with practice.
- Transfer: Dev touches a hot pan and his hand jerks away before he feels any pain. → *A reflex pathway through his spinal cord moved his hand before the pain signal reached the part of his brain that notices it.*

### The Ringing Ears — Zoe's ears at a concert  ·  `hearing`

*Level: Easy*

Tiny hair cells inside Zoe's inner ear bend when sound reaches them. Very loud sound, for a long time, wears them out: they send a false ringing signal and hear real sounds less well. This model counts Zoe's 'noise dose' using the rule health scientists use for safe noise — every 3 dB louder halves the safe time — then turns the dose into hair-cell fatigue.

- Sound at her ears = loudness at the speakers − what earplugs and distance take away.
- The safe time at 85 dB is 8 hours; every 3 dB louder cuts the safe time in half.
- Noise dose = time listening ÷ safe time, as a percentage.
- Hair-cell fatigue climbs as the dose climbs: a 100% dose gives about 5 out of 10.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Loudness at the speakers** `V` · 60–110 dB, case value 105 · source: Concerts are about 94–110 dBA. Every 10 dB is ten times more sound energy.
- *bubble* · **Time listening** `T` · 0–180 min, case value 180 · source: The safe time halves for every 3 dB louder — so time and loudness both count.
- *factor* · **Earplugs** `plugs` · 0–20, case value 0 · choice: Earplugs block part of the sound before it reaches the ear.
- *factor* · **Where she stands** `dist` · 0–12, case value 0 · choice: Sound spreads out as it travels, so it is quieter further from the speakers.

**Formulas**

- Sound at her ears (dB): `Ve = V - plugs - dist`
- Sound energy (× talking): `L = round(pow(10, (V - plugs - dist - 60) / 10))`
- Noise dose (% of daily safe amount): `D = 100 * T / (480 * pow(2, (85 - (V - plugs - dist)) / 3))`
- Hair-cell fatigue (0–10): `F = 10 * (1 - pow(0.5, 100 * T / (480 * pow(2, (85 - (V - plugs - dist)) / 3)) / 100))`
- Ringing afterwards: `R = 10 * (1 - pow(0.5, 100 * T / (480 * pow(2, (85 - (V - plugs - dist)) / 3)) / 100))` → shown as none / a little, fades / yes, up to 1–2 days

**From sources** (each checked against the linked page)

- The recommended limit is 85 dBA averaged over 8 hours, and for every 3 dBA louder the safe time should be halved. — CDC / NIOSH: Noise-Induced Hearing Loss <https://www.cdc.gov/niosh/noise/about/noise.html>
- Long or repeated sounds at or above 85 dBA can cause hearing loss, and concerts are about 94–110 dBA. — NIH National Institute on Deafness and Other Communication Disorders: Noise-Induced Hearing Loss <https://www.nidcd.nih.gov/health/noise-induced-hearing-loss>
- Most noise-induced hearing loss comes from damage to the hair cells in the inner ear. — NIH National Institute on Deafness and Other Communication Disorders: Noise-Induced Hearing Loss <https://www.nidcd.nih.gov/health/noise-induced-hearing-loss>
- Loud noise can cause a temporary hearing loss that disappears 16 to 48 hours later; earplugs help at loud events. — NIH National Institute on Deafness and Other Communication Disorders: Noise-Induced Hearing Loss <https://www.nidcd.nih.gov/health/noise-induced-hearing-loss>

**Our choices** (simplifications — please check these are fair)

- **A workplace noise rule is used for a concert.** It is the clearest published rule for how loudness and time add up. It was written for adults at work, so treat it as a guide.
- **Fatigue = 10 × (1 − 0.5^(dose ÷ 100)).** We needed a 0–10 scale that rises with the dose and levels off. The 0–10 'fatigue' is our teaching scale, not a medical measurement.
- **Foam earplugs take off 20 dB.** Earplugs vary with the type and how well they are put in; 20 dB is a middle value.
- **Each step further back takes off 6 dB.** Sound gets quieter as it spreads out from a speaker; we used one step size for 'middle' and 'back'.

**Illustrative** (made-up numbers): Zoe's three hours, her front-row spot and the 105 dB reading are made up for a fictional concert. The fatigue numbers and ringing bands are a teaching scale.

**Limits:** shows — Shows that every 10 dB is ten times the sound energy, not a little more; Shows loudness and time adding up to a noise dose; Shows earplugs and distance lowering the dose. Does not — Measure any real person or any real headphones; Model permanent hearing damage; it stops at temporary ringing; Replace a hearing test.

**Wellbeing line:** Ringing that lasts more than a day, or hearing that seems muffled, is a reason to tell an adult.

**Case claims to check**

- Best answer: Loud sound bent the tiny hair cells in her inner ear too hard for too long; they tired and sent a false 'ringing' signal while hearing less of the real one, then recovered overnight.
- Takeaway: Hearing runs on tiny hair cells that bend with sound. Loud sound bends them too hard; ringing afterwards is their complaint. Give them a break and they recover — this time. Volume, time and rest all matter.
- Transfer: Tariq uses earbuds at full volume for his whole two-hour commute every day. Lately he turns the TV up louder than anyone else in the house. → *Hours of loud sound every day are tiring his inner-ear hair cells faster than they can recover, so quieter sounds are getting harder to hear.*

### The Scraped Knee — Mateo's scrape plugging itself  ·  `clotting`

*Level: Easy*

When Mateo scrapes his knee, tiny pieces in his blood called platelets rush to the broken vessels and stick together like glue. Thread-like fibrin holds them in a plug, so the bleeding slows minute by minute and stops on its own — even under a bandage. The plug dries into a scab while new skin grows underneath.

- Bleeding halves every so many minutes as the plug builds.
- A bigger scrape takes longer to halve; fewer platelets take longer too.
- Pressing on it makes the bleeding stop sooner.
- Plug strength rises as the bleeding falls.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes since the scrape** `M` · 0–10 min, case value 3 · source: Platelets start sticking at once, so bleeding falls minute by minute.
- *bubble* · **Size of the scrape** `A` · 1–3, case value 2 · choice: A bigger scrape has more broken vessels to plug, so it takes longer to stop.
- *factor* · **Platelets in his blood** `plt` · 150–400 thousand/µL, case value 250 · source: Normal is 150,000–400,000 per microliter. Fewer platelets make bleeding take longer to stop.
- *factor* · **Pressing on it** `press` · 0–1, case value 0 · choice: Pressing squeezes the broken vessels while the plug forms.

**Formulas**

- Bleeding (% of the first minute): `B = 100 * pow(0.5, M / (0.58 * A * (250 / plt) * (1 - 0.4 * press)))`
- Plug strength (%): `C = 100 - 100 * pow(0.5, M / (0.58 * A * (250 / plt) * (1 - 0.4 * press)))`
- The scrape is: `S = 100 * pow(0.5, M / (0.58 * A * (250 / plt) * (1 - 0.4 * press)))` → shown as stopped / slowing / bleeding
- Half the bleeding gone every (min): `H = 0.58 * A * (250 / plt) * (1 - 0.4 * press)`

**From sources** (each checked against the linked page)

- Bleeding from small skin vessels normally stops within 1 to 9 minutes; low platelet counts make it take longer. — MedlinePlus (U.S. National Library of Medicine): Bleeding time <https://medlineplus.gov/ency/article/003656.htm>
- Platelets help blood clot; a normal count is 150,000 to 400,000 per microliter. — MedlinePlus (U.S. National Library of Medicine): Platelet count <https://medlineplus.gov/ency/article/003647.htm>
- Platelets stick together to make a clot held by thread-like fibrin; it dries into a scab, new skin grows underneath, and the scab falls off after a week or two. — Nemours KidsHealth: What's a Scab? <https://kidshealth.org/en/kids/scab.html>

**Our choices** (simplifications — please check these are fair)

- **Bleeding halves at a steady rate.** A halving curve fits 'fast at first, then slower' and stops within the 1–9 minute range for the default scrape.
- **Platelet count scales the time directly.** Fewer platelets means a slower plug; the real relationship is more complicated.
- **Pressing cuts the time by 40%.** Pressing helps; the exact amount varies, so we picked a clear but modest effect.

**Illustrative** (made-up numbers): Mateo's scrape size, his platelet count (250,000) and the 5-minute stop are made up for a fictional story. Bleeding is shown as a percentage of the first minute, not in millilitres.

**Limits:** shows — Shows bleeding slowing and stopping on its own as a plug forms; Shows bigger scrapes taking longer and pressing helping; Shows that the plug needs platelets, not air. Does not — Measure any real cut or anyone's real platelet count; Include germs, cleaning a wound or how deep a cut is; Show the week of healing under the scab.

**Wellbeing line:** A cut that won't stop bleeding after you press on it for 10 minutes, or one that is deep, is a reason to tell an adult right away.

**Case claims to check**

- Best answer: Tiny cell pieces in his blood called platelets rushed to the scrape and stuck together, building a mesh that plugged the leak; the plug dried into a scab that protects the knee while new skin grows underneath.
- Takeaway: Your blood carries its own repair kit. Platelets stick together at a cut and build a mesh plug in minutes; the plug becomes a scab that guards the spot while new skin grows underneath.
- Transfer: Ana cuts her finger on the edge of a sheet of paper. It bleeds a little, then stops after a couple of minutes, and a thin dark line forms along the cut. → *Platelets stuck together at the cut and built a plug, which dried into a thin scab.*

### The Shivering Swimmer — Jonah's body guarding its heat  ·  `temperature`

*Level: Easy*

Water pulls heat out of Jonah's body many times faster than air at the same temperature, so a sunny day doesn't help him while he's in the lake. His body guards its core temperature two ways: muscles shiver to make heat, and blood is kept away from the skin so warm blood stays near his organs — that's why his lips and fingers look pale.

- Shivering starts once the water is colder than about 70°F, and grows as it gets colder.
- The longer he stays in, the more he cools; leaner bodies cool faster.
- Blood flow to the skin drops as he cools, keeping his core steady.
- Wrapped in a towel, shivering halves every couple of minutes — faster in warmer air.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How cold the water is** `k` · 0–35 °F, case value 27 · source: Colder water pulls heat out of the body faster.
- *bubble* · **Minutes wrapped in a towel** `M` · 0–10 min, case value 0 · choice: Out of the water and wrapped up, he stops losing heat so fast and the shivering fades.
- *factor* · **Minutes in the water** `mins` · 1–30 min, case value 10 · choice: The longer he stays in, the more heat the water takes.
- *factor* · **Air temperature** `air` · 55–90 °F, case value 75 · source: Warm air helps him warm up afterwards — but water takes heat far faster than air.
- *factor* · **Body build** `build` · 0.8–1.2, case value 1 · choice: Thinner people usually get cold faster than people with more insulation.

**Formulas**

- Water temperature (°F): `T = 85 - k`
- Shivering (0–10): `V = round(clamp(10 * max(0, 70 - (85 - k)) / 20 * (1 - pow(0.5, mins / 4)) * build, 0, 10) * pow(0.5, M / (1.5 + (85 - air) / 10)))`
- Blood flow to skin: `F = 100 - 60 * min(1, max(0, 70 - (85 - k)) / 20 * (1 - pow(0.5, mins / 4)) * build) * pow(0.5, M / (1.5 + (85 - air) / 10))` → shown as low / reduced / normal
- Heat loss in water vs. this air (× faster): `X = 26 * max(1, 98.6 - (85 - k)) / max(1, 98.6 - air)`
- Core temperature: always shown as "about 98.6°F — steady"

**From sources** (each checked against the linked page)

- Water conducts body heat away up to 26 times faster than air of the same temperature. — National Weather Service (NOAA): The Hazards of Cold Water Boating <https://www.weather.gov/car/TheHazardsofcoldwaterboating>
- Shivering is muscles contracting and relaxing; this movement warms the body. — Cleveland Clinic: Chills <https://my.clevelandclinic.org/health/symptoms/21476-chills>
- Normal body temperature is about 98.6°F, within a normal range of about 97–99°F. — MedlinePlus (U.S. National Library of Medicine): Body temperature norms <https://medlineplus.gov/ency/article/001982.htm>

**Our choices** (simplifications — please check these are fair)

- **Shivering starts below about 70°F water.** The real starting point differs with body size, how long you're in and how active you are; 70°F is a teaching value.
- **Cooling builds up over minutes, halving the gap every 4 minutes.** Bodies cool gradually, not instantly; this shows 'the longer you stay, the colder you get'.
- **Less blood to the skin is shown as a percentage.** Narrowing skin blood vessels in the cold is the body's heat-saving move; the exact amount isn't measured here.
- **Core temperature is shown as steady.** In a short swim the body protects its core; dangerous cooling is outside this model.
- **'Heat loss in water vs. this air' scales the 26× figure by the temperature gaps.** The 26× comparison is for water and air at the same temperature; we stretch it in proportion to how much colder than the body each one is.

**Illustrative** (made-up numbers): Jonah's ten minutes, the 58°F lake, the 75°F air and his build are made up for a fictional story. The 0–10 shivering scale is a teaching scale.

**Limits:** shows — Shows shivering starting once the water is cold enough and growing as it gets colder; Shows blood flow to the skin dropping so warm blood stays near the organs; Shows why warm air doesn't help much while you're in cold water. Does not — Measure any real person — the numbers are illustrative teaching values; Show core temperature dropping; dangerous cold is outside the model; Include wind, swimming effort or wet clothes.

**Wellbeing line:** If someone can't stop shivering or seems confused in the cold, get an adult right away.

**Case claims to check**

- Best answer: His body is losing heat to the cold water, so it makes heat (shivering) and keeps warm blood near his organs (pale skin).
- Takeaway: Your body guards its inside temperature. In the cold it makes heat with shivering and keeps warm blood away from the skin — looking pale is the body being smart, not sick.
- Transfer: Aiko waits at a windy winter bus stop without a coat. She notices she is shivering and her hands have gone white. → *Her body is losing heat to the cold air, so her muscles shiver to make heat and blood stays near her organs.*

### The Skipped Breakfast — Lena's fuel between meals  ·  `fuel-sugar`

*Level: Easy*

After dinner, Lena's liver stored spare fuel as glycogen. Overnight and through the morning it slowly turns that store back into sugar to keep her blood sugar in the normal range. Fifteen hours later the store is running low, her blood sugar has drifted toward the bottom of normal, and her stomach's hunger hormone is high. Breakfast or lunch refills the store.

- The liver's fuel store halves about every 7 hours without food (faster if she's active).
- Blood sugar stays in the normal range but drifts down as the store empties.
- The hunger hormone ghrelin rises the longer her stomach is empty.
- Eating resets the clock and refills the store.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours since her last meal** `h` · 3–16 h, case value 15.5 · source: Between meals the body lives on fuel it stored after the last one.
- *bubble* · **Breakfast** `ate` · 0–1, case value 0 · choice: Eating refills the store and resets the clock.
- *factor* · **Morning activity** `act` · 1–1.6, case value 1.3 · choice: Moving around uses fuel faster.
- *factor* · **Dinner last night** `dinner` · 0.8–1.2, case value 1 · choice: A bigger dinner fills the store more.

**Formulas**

- Fuel stored in her liver (% full): `L = min(100, 100 * dinner * pow(0.5, max(0, (h - (h - 3.5) * ate) - 3) * act / 7))`
- Blood sugar (mg/dL): `G = 70 + 25 * pow(min(100, 100 * dinner * pow(0.5, max(0, (h - (h - 3.5) * ate) - 3) * act / 7)) / 100, 0.5)`
- Hunger signal (ghrelin) (0–10): `Gh = 10 * (1 - pow(0.5, (h - (h - 3.5) * ate) / 4))`
- Fuel for focus: `E = 70 + 25 * pow(min(100, 100 * dinner * pow(0.5, max(0, (h - (h - 3.5) * ate) - 3) * act / 7)) / 100, 0.5)` → shown as running low / dipping / steady

**From sources** (each checked against the linked page)

- Glycogen is stored mainly in the liver and muscles; when blood sugar drops, the liver turns glycogen back into glucose. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>
- After 12 to 24 hours without food, liver glycogen is almost used up. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>
- A fasting blood sugar of 70 to 99 mg/dL is normal. — MedlinePlus (U.S. National Library of Medicine): Blood sugar test - blood <https://medlineplus.gov/ency/article/003482.htm>
- Ghrelin, the hunger hormone, rises when the stomach is empty, peaks before meals and falls after eating. — Cleveland Clinic: Ghrelin <https://my.clevelandclinic.org/health/body/22804-ghrelin>

**Our choices** (simplifications — please check these are fair)

- **The liver store halves every 7 hours.** This empties most of the store within about a day, matching 'almost used up after 12–24 hours'.
- **Blood sugar drifts from about 95 to 70 as the store empties.** In healthy people blood sugar stays in the normal range while fasting; we show a gentle drift, not a crash.
- **Activity and dinner size scale the store.** More activity uses fuel faster and a bigger dinner stores more; the exact amounts vary between people.
- **A full breakfast counts as eating 3.5 hours ago.** Breakfast at 7 a.m. is 3.5 hours before third period.

**Illustrative** (made-up numbers): Lena's 15.5-hour gap, her walk to school and her normal dinner are made up for a fictional story. The 0–10 hunger signal scale is a teaching scale.

**Still being studied:** How much a long gap without food affects concentration differs between people and is still being studied.

**Limits:** shows — Shows the liver's fuel store emptying between meals; Shows blood sugar held in the normal range, drifting lower as the store runs down; Shows the hunger signal rising and a meal resetting everything. Does not — Measure any real person or model any medical condition; Say what anyone should eat; Include exercise during the morning beyond the activity setting.

**Wellbeing line:** Feeling shaky, dizzy or unwell at school is a reason to tell a teacher or the school nurse.

**Case claims to check**

- Best answer: After fifteen hours without food, the fuel her body stored after dinner is running low and her blood sugar has drifted down; eating refills it.
- Takeaway: Food is fuel. Your brain and muscles burn it all the time, so a long gap without eating shows up as fuzzy thinking and shakiness before anything else — and a meal fixes it fast.
- Transfer: Omar runs a cross-country race in the afternoon without eating since early morning. In the last mile his legs feel like jelly and he can't think straight. → *His muscles and brain are running out of fuel after hours without food and a long effort.*

### The Sneezing Gardener — Diego's immune system and pollen  ·  `immune-pollen`

*Level: Easy*

Diego's immune system treats harmless tree pollen as an intruder. When pollen lands in his nose and eyes, immune cells release an alarm chemical, histamine, which makes him sneeze, itch and water — the body trying to flush the pollen out. His friend's immune system doesn't react to pollen, so the same air does nothing to him.

- The more pollen in the air, the bigger the reaction — but it levels off at very high counts.
- Someone who isn't allergic doesn't react at all; a strongly allergic person reacts most.
- Windy, dry days put more pollen in the air; rain washes it down.
- Indoors, the reaction halves about every 20 minutes.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Tree pollen in the air** `G` · 0–3000 grains/m³, case value 2000 · source: Pollen is counted in grains per cubic metre of air; 1,500 or more is 'very high' for trees.
- *bubble* · **Minutes after going indoors** `M` · 0–60 min, case value 0 · choice: Away from the pollen, the alarm chemical stops being topped up and the symptoms fade.
- *factor* · **How allergic he is** `sens` · 0–2, case value 2 · source: Allergies are the immune system overreacting to something harmless. Someone who isn't allergic doesn't react at all.
- *factor* · **Minutes outdoors so far** `out` · 0–120 min, case value 30 · source: Symptoms start shortly after contact and build while pollen keeps landing.
- *factor* · **Weather** `wx` · 0.3–1.5, case value 1 · source: Dry, windy days put more pollen in the air; rain washes it down.

**Formulas**

- Alarm chemical (histamine) (% above calm): `A = 100 * sens * (G * wx) / ((G * wx) + 300) * (1 - pow(0.5, out / 10)) * pow(0.5, M / 20)`
- Sneezes (per hour): `S = round((100 * sens * (G * wx) / ((G * wx) + 300) * (1 - pow(0.5, out / 10)) * pow(0.5, M / 20)) / 12)`
- Eyes: `E = 100 * sens * (G * wx) / ((G * wx) + 300) * (1 - pow(0.5, out / 10)) * pow(0.5, M / 20)` → shown as fine / itchy / itchy & watery
- Pollen level: `Lv = G` → shown as low / moderate / high / very high

**From sources** (each checked against the linked page)

- Allergies are the immune system overreacting to usually harmless proteins; this releases histamine, which causes sneezing and a runny nose. — Cleveland Clinic: Histamine <https://my.clevelandclinic.org/health/articles/24854-histamine>
- Tree, grass and ragweed pollen cause hay fever; itching, sneezing, a runny nose and watery eyes start shortly after contact. — MedlinePlus (U.S. National Library of Medicine): Allergic rhinitis <https://medlineplus.gov/ency/article/000813.htm>
- Dry, windy days have more pollen in the air; rain washes most of it to the ground. — MedlinePlus (U.S. National Library of Medicine): Allergic rhinitis <https://medlineplus.gov/ency/article/000813.htm>
- For tree pollen, 1,500 grains per cubic metre or more counts as 'very high'. — St. Louis County Pollen and Mold Center: Pollen Levels <https://pollenandmold.stlouisco.com/html/PollenLevels.html>

**Our choices** (simplifications — please check these are fair)

- **The reaction levels off above a few hundred grains.** Once the nose is full of pollen, more pollen adds less; the exact curve varies from person to person.
- **The reaction builds over the first 10–20 minutes outdoors.** Symptoms start shortly after contact, not instantly.
- **Indoors, symptoms halve every 20 minutes.** This fits the clue that it all stops within about an hour; real timing varies.
- **Allergy strength is shown in three steps.** Real sensitivity is a range; three steps make the 'friend isn't allergic' comparison clear.

**Illustrative** (made-up numbers): Diego's 2,000 grains/m³ day, his 30 minutes outside and his allergy strength are made up for a fictional story. Sneezes per hour and the eye bands are a teaching scale.

**Limits:** shows — Shows the immune system reacting to harmless pollen with an alarm chemical; Shows the reaction growing with pollen and depending on how allergic someone is; Shows the reaction fading once away from the pollen. Does not — Measure any real person — the numbers are illustrative teaching values; Say whether anyone has an allergy or what to do about one; Cover food, pets, dust or serious reactions.

**Wellbeing line:** Sneezing is harmless. Trouble breathing or swelling of the face is serious — get an adult right away.

**Case claims to check**

- Best answer: Diego's immune system has learned to treat pollen as an intruder. When pollen lands in his nose and eyes, immune cells release an alarm chemical that causes sneezing, itching and watering to flush it out; his friend's immune system has not learned this, so it stays quiet.
- Takeaway: Your immune system is a guard that sometimes raises the alarm about something harmless. Sneezing, itching and watering are its way of flushing an intruder out — and because each immune system learns differently, the same pollen can bother one person and not the next.
- Transfer: Mei pets a neighbour's cat for ten minutes. Soon her eyes itch and she sneezes several times. Her brother, petting the same cat, is fine. → *Mei's immune system treats something from the cat as an intruder and releases an alarm chemical; her brother's immune system does not react to it.*

### The Sore Weightlifter — Marcus's muscles repairing  ·  `muscle-repair`

*Level: Easy*

Marcus worked his leg muscles harder than they were used to, which made tiny tears in the muscle fibres. Repairing them takes days, and the soreness builds slowly — fine on Monday night, worst around Wednesday, gone by the weekend. The first workout also teaches the muscle to protect itself, so the same workout next week hurts much less.

- Soreness builds over the first day and peaks about 1–2 days after the workout.
- It fades over the next few days and is nearly gone by day 5.
- Harder workouts and lots of lowering movements make it stronger.
- Doing the same workout again causes much less soreness.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours since the workout** `t` · 0–96 h, case value 48 · source: Soreness isn't there at once: it builds over hours and is worst a day or two later.
- *bubble* · **First time or repeat** `rep` · 0–1, case value 0 · source: The first hard workout teaches the muscle to protect itself, so the same workout later causes much less soreness.
- *factor* · **How hard the workout was** `hard` · 0.4–1, case value 1 · source: Working muscles harder than they're used to causes more tiny tears.
- *factor* · **Lowering movements** `ecc` · 0.6–1, case value 1 · source: Muscles lengthening under load — lowering into a squat, running downhill — cause the most soreness.

**Formulas**

- Soreness (0–10): `S = clamp(8 * hard * ecc * (1 - 0.6 * rep) * (t * t * pow(0.5, t / 13.86)) / 217, 0, 10)`
- Repair under way (% done): `R = 100 * (1 - pow(0.5, t / 30))`
- Feels like: `W = clamp(8 * hard * ecc * (1 - 0.6 * rep) * (t * t * pow(0.5, t / 13.86)) / 217, 0, 10)` → shown as normal / a bit stiff / sore / stairs are hard

**From sources** (each checked against the linked page)

- Delayed soreness starts one to three days after a workout and builds over several hours; it rarely lasts more than five days. — Cleveland Clinic: Delayed Onset Muscle Soreness (DOMS) <https://my.clevelandclinic.org/health/diseases/delayed-onset-muscle-soreness>
- It comes from tiny tears in muscle fibres when muscles are worked too hard, especially with a new workout. — Cleveland Clinic: Delayed Onset Muscle Soreness (DOMS) <https://my.clevelandclinic.org/health/diseases/delayed-onset-muscle-soreness>
- Lengthening movements under load (eccentric movements) are the most likely to cause it. — Cleveland Clinic: Delayed Onset Muscle Soreness (DOMS) <https://my.clevelandclinic.org/health/diseases/delayed-onset-muscle-soreness>
- One bout of lengthening exercise produces an adaptation that reduces damage and soreness in later bouts, lasting at least six months. — MRC Protein Phosphorylation and Ubiquitylation Unit, University of Dundee (publication record): How long does the protective effect on eccentric exercise-induced muscle damage last? (Med Sci Sports Exerc) <https://www.ppu.mrc.ac.uk/node/8430>

**Our choices** (simplifications — please check these are fair)

- **Soreness follows a rise-and-fall curve that peaks around 40 hours.** This matches 'starts 1–3 days later, rarely lasts more than five days'. The exact peak differs between people.
- **A repeat workout gives 60% less soreness.** Studies show much less soreness the second time; 60% is a round teaching value.
- **Repair is shown as a smooth percentage.** Real repair has several overlapping stages; one curve keeps it simple.

**Illustrative** (made-up numbers): Marcus's very hard first workout and his 8-out-of-10 soreness on Wednesday are made up for a fictional story. The 0–10 soreness scale is a teaching scale.

**Limits:** shows — Shows soreness arriving late, peaking about two days after a hard workout, then fading; Shows harder and lowering-heavy workouts causing more soreness; Shows the same workout causing less soreness the second time. Does not — Tell the difference between normal soreness and an injury; Say how anyone should train or what to eat; Measure any real person.

**Wellbeing line:** Normal soreness is dull and fades in a few days. Sharp pain, swelling or pain that gets worse is a reason to stop and tell a coach or adult.

**Case claims to check**

- Best answer: Hard work made tiny tears in his muscle fibres; the repair process over several days causes the delayed soreness and rebuilds the fibres slightly stronger.
- Takeaway: Muscles get stronger by being repaired. Hard work causes tiny tears; the repair takes days, hurts a little in the middle, and finishes slightly stronger than before — which is why rest days are part of training.
- Transfer: Jade starts a new dance class on Tuesday. On Thursday her calves are too sore to go up on her toes; by the next week's class she manages the whole routine. → *New movements made tiny tears in her calf muscles; repairing them caused the delayed soreness and left them a little stronger for next week.*

### The Squinting Reader — Hana's pupils adjusting to light  ·  `pupil-light`

*Level: Easy*

Light gets into Hana's eye through the pupil, the black opening in the middle. Her iris — the coloured ring — has tiny muscles that squeeze the pupil small in bright light and open it wide in dim light. That evens out how much light reaches the back of her eye, so she can read on a bright beach and in a dim café. Squeezing is quick; widening again takes several seconds.

- Pupils are about 2–4 mm in bright light and 4–8 mm in dim light.
- Light let in depends on the pupil's area — width × width — so a small change in width makes a big difference.
- After stepping into the dim café, her pupils widen over several seconds.
- Sunglasses and shade lower the light, so the pupils open wider.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Light around her** `L` · 0.5–10, case value 1 · source: Brighter surroundings send more light toward the eye, so the pupils squeeze smaller.
- *bubble* · **Seconds after stepping inside** `S` · 0–10 s, case value 10 · source: Pupils shrink fast in bright light but widen again more slowly — over several seconds.
- *factor* · **Sunglasses** `glasses` · 0.15–1, case value 1 · choice: Tinted lenses block part of the light before it reaches the pupil.
- *factor* · **Shade** `shade` · 0.3–1, case value 1 · choice: Under an umbrella less light reaches her eyes.

**Formulas**

- Pupil width (mm): `P = ((2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6))) + ((2.5 + 4.5 / (1 + pow(10 * glasses * shade / 3, 1.6))) - (2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6)))) * pow(0.5, S / 1.5))`
- Light reaching the back of the eye (units): `E = (L * glasses * shade) * pow(((2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6))) + ((2.5 + 4.5 / (1 + pow(10 * glasses * shade / 3, 1.6))) - (2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6)))) * pow(0.5, S / 1.5)), 2) / 16`
- Reading the page: `R = (L * glasses * shade) * pow(((2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6))) + ((2.5 + 4.5 / (1 + pow(10 * glasses * shade / 3, 1.6))) - (2.5 + 4.5 / (1 + pow((L * glasses * shade) / 3, 1.6)))) * pow(0.5, S / 1.5)), 2) / 16` → shown as too dark / comfortable / glaring
- Light at her eyes (of 10): `K = (L * glasses * shade)`

**From sources** (each checked against the linked page)

- Light enters the eye through the pupil, and the iris controls how much light the pupil lets in. — NIH National Eye Institute: How the Eyes Work <https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/how-eyes-work>
- The iris changes pupil size with tiny muscles; pupils are about 2–4 mm in bright light and 4–8 mm in dim light. — Cleveland Clinic: Dilated Pupils <https://my.clevelandclinic.org/health/symptoms/22238-dilated-pupils>
- Light makes the pupils constrict first; they widen again slowly several seconds later. — NCBI Bookshelf (U.S. National Library of Medicine): The Pupils (Clinical Methods, 3rd edition) <https://www.ncbi.nlm.nih.gov/books/NBK381/>

**Our choices** (simplifications — please check these are fair)

- **Brightness is a 0–10 scale, not lux.** Real outdoor light can be hundreds of times brighter than indoor light; a simple scale keeps the focus on the pupil.
- **Pupil width follows a smooth curve from 7 mm to 2.5 mm.** This stays inside the published ranges; the exact curve differs between people.
- **Light let in = brightness × pupil area.** The amount of light through an opening depends on its area, and a circle's area depends on width squared.
- **Widening halves the gap every 1.5 seconds.** Widening takes several seconds; 1.5 s is a teaching value.

**Illustrative** (made-up numbers): Hana's beach and café brightness, and the sunglasses and umbrella amounts, are made up for a fictional story. 'Light reaching the back of the eye' is in teaching units.

**Limits:** shows — Shows pupils shrinking in bright light and widening in dim light; Shows the pupil evening out how much light reaches the back of the eye; Shows that widening again takes several seconds. Does not — Measure any real person's eyes; Use real light units (lux) or include eye problems; Say anything about safe sun exposure for the eyes.

**Wellbeing line:** Never look straight at the sun. Eye pain or sudden changes in vision are a reason to tell an adult.

**Case claims to check**

- Best answer: Her irises — the coloured rings around the pupils — are muscles that squeeze the pupils small in bright light and open them wide in dim light, controlling how much light gets into her eyes.
- Takeaway: Your pupils are adjustable windows. The iris squeezes them small in bright light and opens them wide in dim light — in seconds and without you deciding — so the light reaching the back of your eye stays in a comfortable range.
- Transfer: Jamal walks out of a dark movie theatre into a sunny parking lot. For a few seconds everything looks blindingly bright and he squints, then it feels normal. → *His pupils were wide open from the dark theatre; in the sun his irises squeeze them small so less light gets in.*

### The Stuffy-Nose Taster — Keisha's nose, tongue and flavour  ·  `smell-taste`

*Level: Easy*

Keisha's tongue can only pick up a few basic tastes, like sweet, sour and salty. Everything that makes strawberry taste like strawberry is a smell: when she chews, food smells travel up the back of her throat to her nose. Her cold has blocked that path, so the yogurt is just 'sweet' — until her nose clears.

- Flavour = the tongue's basic tastes + food smells reaching the nose.
- The more blocked her nose, the less of the food's smell gets through.
- Strong-smelling foods lose the most flavour when the nose is blocked.
- Sweet, sour and salty come from the tongue, so they stay the same.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How blocked her nose is** `B` · 0–100 %, case value 90 · source: Chewing sends food smells up a channel at the back of the throat to the nose. A stuffed-up nose blocks that channel.
- *bubble* · **How strongly the food smells** `Ar` · 2–10, case value 6 · choice: Strong-smelling foods send more aroma up to the nose, so they lose more flavour when the nose is blocked.
- *factor* · **Sweetness of the food** `Sw` · 0–10, case value 10 · source: Sweet is one of the basic tastes the tongue picks up by itself — no nose needed.
- *factor* · **Her usual sense of smell** `Sm` · 0.7–1.3, case value 1 · choice: People's sense of smell differs a little, even when they're healthy.

**Formulas**

- Flavour she notices (% of normal): `F = 100 * (wT * Sw / 10 + wA * (Ar / 10) * Sm * (1 - B / 100)) / max(0.01, wT * Sw / 10 + wA * (Ar / 10) * Sm)`
- Food smell reaching her nose (% of normal): `S = Sm * (100 - B)`
- Sweetness her tongue detects (0–10): `T = Sw`
- Apple or potato?: `N = 10 * Ar * Sm * (1 - B / 100)` → shown as can't tell / barely / easy
- Constants: `wT = 1`, `wA = 4`

**From sources** (each checked against the linked page)

- Taste cells on the tongue respond to at least five basic tastes: sweet, sour, bitter, salty and umami. — NIDCD (National Institutes of Health): Taste Disorders <https://www.nidcd.nih.gov/health/taste-disorders>
- Flavour is made when tastes combine with a food's aroma, which reaches the nose through a channel from the roof of the throat. — NIDCD (National Institutes of Health): Taste Disorders <https://www.nidcd.nih.gov/health/taste-disorders>
- Without smell, foods tend to taste bland and have little flavour. — NIDCD (National Institutes of Health): Smell Disorders <https://www.nidcd.nih.gov/health/smell-disorders>
- When a cold stuffs up the nose and blocks that channel, smells can't reach the smell cells; many people get their sense of smell back once they recover. — NIDCD (National Institutes of Health): Smell Disorders <https://www.nidcd.nih.gov/health/smell-disorders>

**Our choices** (simplifications — please check these are fair)

- **Smell counts four times as much as the tongue in flavour.** Scientists agree most of flavour comes from smell but don't give one exact share; 4-to-1 shows 'most' clearly.
- **Smell getting through falls in a straight line as the nose blocks.** Real noses don't block evenly, but a straight line keeps the idea simple.
- **Aroma strength is shown in three steps.** Real foods vary continuously; three examples make the comparison easy.

**Illustrative** (made-up numbers): Keisha's 90%-blocked nose, the yogurt's sweetness and aroma, and her 'average' sense of smell are made up for a fictional story. The 0–10 sweetness scale and the 'apple or potato' score are teaching scales.

**Limits:** shows — Shows flavour as basic tastes plus smell; Shows smell getting through less as the nose blocks; Shows the tongue's sweet taste staying the same. Does not — Measure any real person's sense of smell or taste; Include texture, temperature, spiciness or bitter tastes; Explain long-lasting loss of smell, which has other causes.

**Wellbeing line:** If you lose your sense of smell or taste for a long time without a stuffy nose, tell an adult.

**Case claims to check**

- Best answer: Most of what we call flavour is actually smell: smells from food drift up the back of the throat to the nose. With her nose blocked, only the tongue's basic tastes — like sweet, salty and sour — get through.
- Takeaway: Flavour is a team effort. Your tongue senses only a few basic tastes; the rest comes from smells that drift up the back of your throat to your nose. Block the nose and food tastes flat.
- Transfer: Leo holds his nose and eats a jellybean. It just tastes sweet. When he lets go of his nose, it suddenly tastes of cherry. → *Letting go let cherry smells from his mouth reach his nose, adding flavour to the sweet taste his tongue already had.*

### The Sunburned Lifeguard — Kai's skin in six hours of strong sun  ·  `skin-uv`

*Level: Easy*

Sunlight carries invisible UV rays that damage skin cells. What matters is the dose — how strong the UV is times how long Kai is in it. Once the dose passes his skin's burn threshold, the skin turns red a few hours later. A few days after that it makes extra melanin, the pigment that filters UV, so his shoulders end up darker.

- UV dose = UV index × hours (1 UV-index hour ≈ 0.9 SED, a standard sunburn dose).
- Sunscreen divides the dose by its SPF — if enough is used and it's reapplied.
- Fair skin needs a smaller dose to burn than darker skin.
- The more times over the threshold, the redder the skin — up to a maximum.
- Extra melanin (a tan) appears 2–3 days after the damage.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours in strong sun** `H` · 0–6 h, case value 6 · source: UV dose adds up with every hour in the sun — a dose is the UV strength multiplied by the time.
- *bubble* · **Sunscreen** `S` · 1–50, case value 1 · source: SPF tells you how much a sunscreen cuts the sunburn dose (when you use enough and reapply every two hours).
- *factor* · **UV index** `U` · 1–11, case value 8 · source: The UV index measures how strong the sun's burning rays are. At 8 or more, skin is harmed quickly.
- *factor* · **Skin type** `K` · 2–8, case value 2.5 · source: Fair skin burns more easily, but even dark skin can burn.

**Formulas**

- Sunburn dose on his skin (SED): `E = 0.9 * U * H / S`
- Times over his burn threshold (×): `X = 0.9 * U * H / S / K`
- Skin redness by bedtime (0–10): `B = 10 * (1 - pow(0.5, max(0, 0.9 * U * H / S / K - 0.5) / 1.5))`
- Time until he'd start to turn pink (min): `Tm = 60 * K * S / (0.9 * U)`
- Tan in 2–3 days: `M = 0.9 * U * H / S / K` → shown as none / slightly darker / noticeably darker, after the red

**From sources** (each checked against the linked page)

- One UV-index unit is 25 mW/m² of sunburn-weighted UV (the index is that UV multiplied by 40 m²/W). — Hong Kong Observatory: Measurement of Ultraviolet (UV) Index <https://www.hko.gov.hk/en/education/weather/sunshine-and-uv/00722-Measurement-of-Ultraviolet-Index.html>
- 1 SED (standard erythema dose) is a sunburn-weighted UV dose of 100 J/m²; the dose that turns skin red depends on skin pigment. — International Commission on Illumination (CIE): Standard Erythema Dose, a Review <https://cie.co.at/publications/standard-erythema-dose-review>
- The higher the UV index, the less time it takes for harm; at 8 and above you should avoid midday sun. — World Health Organization: Radiation: The ultraviolet (UV) index <https://www.who.int/news-room/questions-and-answers/item/radiation-the-ultraviolet-(uv)-index>
- Sunburn's first signs may take a few hours, the full effect up to 24 hours; peeling comes several days later; fair skin burns more easily, and a very light-skinned person can burn in under 15 minutes of midday sun. — MedlinePlus (U.S. National Library of Medicine): Sunburn <https://medlineplus.gov/ency/article/003227.htm>
- SPF measures protection against sunburn and relates to the amount of sun, not the time; reapply at least every two hours. — U.S. Food and Drug Administration: Sun Protection: How to Help Protect Your Skin from the Sun <https://www.fda.gov/drugs/understanding-over-counter-medicines/sunscreen-how-help-protect-your-skin-sun>
- UV rays damage skin cells. — CDC: Sun Safety <https://www.cdc.gov/skin-cancer/sun-safety/index.html>
- Delayed tanning appears 2–3 days after UV damage, and melanin filters UV. — Royal Society of Chemistry (Photochemical & Photobiological Sciences): Photoprotection conferred by low level summer sunlight exposures against pro-inflammatory UVR insult <https://pubs.rsc.org/en/content/articlehtml/2020/pp/c9pp00452a>

**Our choices** (simplifications — please check these are fair)

- **1 UV-index hour = 0.9 SED.** 25 mW/m² for 3,600 seconds is 90 J/m², and 100 J/m² is 1 SED. Real UV rises and falls through the day; we hold it steady.
- **Burn thresholds of 2–8 SED by skin type.** Chosen so a very fair person burns in about 15 minutes of strong midday sun, as MedlinePlus describes, and darker skin needs more. Real thresholds vary from person to person.
- **Sunscreen divides the dose by its SPF.** That's what SPF means when the amount the label asks for is used. Most people use less, so real protection is usually lower.
- **Redness levels off at 10.** Beyond a few times the threshold the burn is already severe; the 0–10 scale stops there.

**Illustrative** (made-up numbers): Kai's six hours, UV index 8 and 'fair, burns then tans' skin are made up for a fictional story. The 0–10 redness scale is a teaching scale.

**Limits:** shows — Shows UV dose as strength × time; Shows sunscreen and skin type changing how much dose it takes to burn; Shows redness growing with the dose, and a tan days later. Does not — Measure any real person's skin; Include clouds, reflection from water or sand, or UV changing through the day; Show long-term effects such as skin cancer risk.

**Wellbeing line:** Blistering, fever or feeling sick after sun is a reason to tell an adult.

**Case claims to check**

- Best answer: UV light damaged his skin cells; the redness is the repair response hours later, peeling clears the worst-hit cells, and extra melanin is the skin preparing for next time.
- Takeaway: Sunlight carries UV energy that damages skin cells. Redness hours later is the repair crew arriving, peeling is the clear-out, and the darker skin afterwards is the body building its own shade for next time.
- Transfer: Rosa skis all day on a bright, snowy mountain. That night her cheeks and nose are red and sore even though it was freezing cold. → *UV light — made stronger by altitude and reflected by snow — damaged her skin cells, and the redness is the delayed repair response.*

### The Thirsty Hiker — Priya's water budget on a hot climb  ·  `water-balance`

*Level: Easy*

Priya's body keeps a water budget. On a hot climb she sweats to stay cool, and if she drinks less than she sweats the difference comes out of her body's water. As the shortfall grows her kidneys hold water back (less, darker pee) and her brain switches on thirst. Past about 2% of her body weight, it gets hard to keep going and she may feel dizzy.

- Sweat rises with air temperature and with how hard she's working.
- Water lost = (sweat − water drunk) × hours.
- About two-thirds of her body weight is water; the loss is a share of that.
- As the loss grows, pee gets less and darker and thirst switches on.
- Above about 2% of body weight lost, performance drops and dizziness is likely.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours on the trail** `t` · 0–4 h, case value 2 · choice: Every hour she sweats more than she drinks adds to the water she has lost.
- *bubble* · **Water she drinks** `W` · 0–4 cups/h, case value 1 · source: Safety guidance for work in the heat is about a cup every 15–20 minutes — 3 to 4 cups an hour.
- *factor* · **Air temperature** `Ta` · 60–105 °F, case value 92 · source: Hotter air means more sweating to keep the body cool.
- *factor* · **How hard she's working** `e` · 0.7–1.3, case value 1.3 · choice: Harder work makes more body heat, so she sweats more.
- *factor* · **Body weight** `m` · 35–80 kg, case value 50 · choice: The same amount of lost water is a bigger share of a smaller body.

**Formulas**

- Sweat (cups/hour): `Sc = (0.2 + 0.015 * max(0, Ta - 60)) * e / cup`
- Body water left (% of normal): `L = 100 - 100 * max(0, (0.2 + 0.015 * max(0, Ta - 60)) * e - cup * W) * t / (water * m)`
- Water lost (% of body weight): `Pp = 100 * max(0, (0.2 + 0.015 * max(0, Ta - 60)) * e - cup * W) * t / m`
- Pee: `U = 100 * max(0, (0.2 + 0.015 * max(0, Ta - 60)) * e - cup * W) * t / m` → shown as normal, pale / less, darker / very little, dark yellow
- Thirst: `Th = 100 * max(0, (0.2 + 0.015 * max(0, Ta - 60)) * e - cup * W) * t / m` → shown as not yet / thirsty / very thirsty, dry mouth
- How she feels: `Dz = 100 * max(0, (0.2 + 0.015 * max(0, Ta - 60)) * e - cup * W) * t / m` → shown as OK / hard to keep going, may feel dizzy
- Constants: `cup = 0.237`, `water = 0.65`

**From sources** (each checked against the linked page)

- Sweating rates vary a lot between people; drinking during exercise aims to prevent losing more than 2% of body weight as water, which harms performance. — Europe PMC: American College of Sports Medicine position stand: Exercise and fluid replacement (Medicine & Science in Sports & Exercise) — abstract record <https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:17277604%20AND%20SRC:MED&resultType=core&format=json>
- In the heat, safety guidance is to drink 1 cup every 15–20 minutes (about ¾–1 quart an hour), and no more than 1½ quarts an hour. — NIOSH (CDC): Heat Stress: Hydration (DHHS NIOSH Publication No. 2017-126) <https://stacks.cdc.gov/view/cdc/45851>
- Signs of dehydration include a dry or sticky mouth, darker pee or peeing less, and dizziness. — Nemours KidsHealth: Dehydration <https://kidshealth.org/en/teens/dehydration.html>
- Water makes up more than two-thirds of body weight and cools the body through sweating. — MedlinePlus (U.S. National Library of Medicine): Water in diet <https://medlineplus.gov/ency/article/002471.htm>

**Our choices** (simplifications — please check these are fair)

- **Sweat = 0.2 L/h + 0.015 L/h for every °F above 60, times effort.** Gives about 0.9 L (3.7 cups) an hour for a steep climb at 92 °F — inside the range of real hikers, though people vary a lot. We could not check a single source for these exact numbers.
- **Body water counted as 65% of body weight.** 'More than two-thirds' is the figure for adults; teenagers are close to this.
- **The pee, thirst and dizziness bands switch at 1% and 2%.** The 2% line comes from the sports-medicine guidance; the 1% step for darker pee and thirst is our estimate.

**Illustrative** (made-up numbers): Priya's 50 kg, her steep climb at 92 °F and her one cup an hour are made up for a fictional story.

**Limits:** shows — Shows a water budget: sweat out versus water drunk, hour by hour; Shows the kidneys and thirst responding as water is lost; Shows heat, effort and body size changing the result. Does not — Measure any real person — sweat rates vary a lot; Include salt loss, food, breathing or shade breaks; Model dangerous dehydration or heat illness.

**Wellbeing line:** If someone feels dizzy or sick outdoors, get them into the shade, give them water and tell an adult.

**Case claims to check**

- Best answer: She has lost more water (sweat) than she drank, so her body is low on water and is trying to save it.
- Takeaway: Your body keeps a water budget. When more goes out as sweat than comes in, the kidneys hold water back and the brain turns on thirst — two different signals, one cause.
- Transfer: Marco plays a 90-minute soccer match on a hot day. Afterwards he has a headache and his pee is dark yellow. → *He sweated out more water than he drank, so his body is low on water.*

### The Blinkless Gamer — Ravi's blinking and tear film  ·  `blink-rate`

*Level: Moderate*

Every blink spreads a thin film of tears over Ravi's eyes. When he concentrates on a game he blinks far less — about a third as often — so the film dries between blinks and his eyes sting and feel gritty. When he finally looks away, his eyes make extra tears to catch up. Breaks every 20 minutes keep the film topped up.

- Concentrating cuts his blink rate by up to 60%.
- Longer gaps between blinks let the tear film dry out.
- Dry room air and longer stretches without breaks make it drier.
- 20-20-20 breaks cut the dryness a lot.
- Screen brightness changes the light, not the dryness.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How hard he's concentrating** `c` · 0–10, case value 9 · source: Concentrating on a screen cuts blinking from about 15 a minute to about 5–7.
- *bubble* · **Look-away breaks** `brk` · 0–1, case value 0 · source: The 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.
- *bubble* · **Screen brightness** `br` · 0–10, case value 7 · source: Test the 'screen light is burning his eyes' idea: experts have found no evidence screen light damages eyes — and here it changes the light, not the dryness.
- *factor* · **His usual blink rate** `b0` · 10–20 per min, case value 15 · source: Most people blink about 15 times a minute when they're not concentrating.
- *factor* · **Room air** `air` · 0.8–1.3, case value 1 · source: Dry air — from heating, air conditioning or wind — dries the eyes faster.
- *factor* · **Minutes played** `mins` · 10–180 min, case value 120 · choice: The longer the stretch without breaks, the more the eye surface dries.

**Formulas**

- Blinks (per min): `K = b0 * (1 - 0.6 * c / 10)`
- Gap between blinks (s): `g = 60 / (b0 * (1 - 0.6 * c / 10))`
- Eye dryness (0–10): `D = clamp(1.3 * max(0, 60 / (b0 * (1 - 0.6 * c / 10)) - 4) * air * (1 - pow(0.5, mins / 20)) * (1 - 0.6 * brk), 0, 10)`
- Eyes feel: `E = clamp(1.3 * max(0, 60 / (b0 * (1 - 0.6 * c / 10)) - 4) * air * (1 - pow(0.5, mins / 20)) * (1 - 0.6 * brk), 0, 10)` → shown as comfortable / a bit dry / stinging, gritty
- Watering afterwards: `Wt = clamp(1.3 * max(0, 60 / (b0 * (1 - 0.6 * c / 10)) - 4) * air * (1 - pow(0.5, mins / 20)) * (1 - 0.6 * brk), 0, 10)` → shown as unlikely / likely — catch-up tears
- Light from the screen (% of max): `Lt = 10 * br`

**From sources** (each checked against the linked page)

- People normally blink about 15 times a minute, but only about 5–7 times a minute while using screens. — American Academy of Ophthalmology: Computers, Digital Devices and Eye Strain <https://www.aao.org/eye-health/tips-prevention/computer-usage>
- Blinking keeps the front of the eye moist; the 20-20-20 rule is a 20-second look at something 20 feet away every 20 minutes. — American Optometric Association: Computer vision syndrome (digital eye strain) <https://www.aoa.org/healthy-eyes/eye-and-vision-conditions/computer-vision-syndrome>
- There's no scientific evidence that blue light from devices damages the eye; blinking less is what causes strain and dry eyes. — American Academy of Ophthalmology: Should You Be Worried About Blue Light? <https://www.aao.org/eye-health/tips-prevention/should-you-be-worried-about-blue-light>
- Tears moisten the eye; dry environments make dry eye worse; symptoms include burning, redness and a gritty feeling. — MedlinePlus (U.S. National Library of Medicine): Dry eye syndrome <https://medlineplus.gov/ency/article/000426.htm>

**Our choices** (simplifications — please check these are fair)

- **Concentration cuts blinking by up to 60%.** Takes 15 a minute down to about 6–7 at full concentration, inside the 5–7 range the AAO gives.
- **Dryness starts when blinks are more than 4 seconds apart.** A teaching threshold. The real time a tear film lasts differs from person to person.
- **Breaks cut dryness by 60%.** Breaks help a lot but don't remove all dryness; the exact amount is our estimate.
- **Watering afterwards appears when dryness is high.** Clue 3's sudden watering is the eye making extra tears to catch up; we show it as likely or unlikely, not as an amount.

**Illustrative** (made-up numbers): Ravi's two-hour game, his usual 15 blinks a minute and the 'normal' room air are made up for a fictional story. The 0–10 dryness scale is a teaching scale.

**Limits:** shows — Shows blinking dropping as concentration rises; Shows the tear film drying between blinks; Shows breaks and room air changing the dryness. Does not — Measure any real person's eyes; Include glasses, contact lenses or long-term dry eye; Show eye damage — screens don't cause it.

**Wellbeing line:** Eyes that stay red, sore or blurry after resting are a reason to tell an adult.

**Case claims to check**

- Best answer: When he concentrates on the screen he blinks far less, so the thin film of tears on his eyes dries out and they sting; the watering afterwards is the eye catching up.
- Takeaway: Every blink spreads a fresh layer of tears over your eyes. Concentrating hard makes you blink far less, so the eyes dry and sting — short breaks to look away let blinking and tears catch up.
- Transfer: Sofia, 15, spends an hour peering into a microscope in biology lab. Afterwards her eyes sting and feel dry. → *She blinked much less while concentrating, so the tear film on her eyes dried out.*

### The Braces Wearer — Zara's braces and the bone around her teeth  ·  `bone-remodel`

*Level: Moderate*

Zara's braces push her tooth gently and steadily. On the side being pushed, bone-clearing cells take bone away; on the other side, bone-building cells lay new bone down. So the tooth moves through her jaw a fraction of a millimetre a week. A fresh push after tightening makes teeth sore and a bit loose for a few days. Without the steady push, the bone stops remodelling.

- Tooth movement grows steadily with the weeks she wears her braces.
- Bone is taken down on the pushed side and built on the other side.
- Fewer hours of force a day means slower movement; very short spells do almost nothing.
- Heavier force moves the tooth only a little faster but makes it much sorer.
- Soreness and looseness peak right after tightening and fade within days.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Weeks wearing braces** `W` · 0–26 weeks, case value 20 · source: Teeth move slowly through bone; whole treatments usually take one to two years.
- *bubble* · **Hours a day wearing her bands** `H` · 0–24 h/day, case value 22 · choice: The bone only keeps remodelling while the push keeps going; short spells of force let it settle back.
- *bubble* · **How hard the braces push** `F` · 1–3, case value 2 · source: Test the 'pull harder, go faster' idea: heavy force moves teeth only a little faster and makes them much sorer.
- *factor* · **Gap to close** `G` · 1–6 mm, case value 4 · illustrative: A bigger gap takes longer to close; once it's closed, the tooth stops.
- *factor* · **Days since tightening** `d` · 0–42 days, case value 1 · source: Teeth are sore for a few days after the braces are fitted or adjusted, then settle; adjustments come every 6–8 weeks.

**Formulas**

- Tooth moved (mm): `M = min(G, rate * W * clamp((H - 6) / 16, 0, 1) * (0.85 + 0.15 * (F - 1)))`
- Gap left (mm): `Gp = G - min(G, rate * W * clamp((H - 6) / 16, 0, 1) * (0.85 + 0.15 * (F - 1)))`
- Bone remodelling (% of full speed): `R = 100 * clamp((H - 6) / 16, 0, 1) * (0.85 + 0.15 * (F - 1)) / 1.15`
- Soreness when biting (0–10): `So = round(clamp(2.7 * F * pow(0.5, d / 2), 0, 10))`
- Tooth feels: `Lo = 10 * clamp((H - 6) / 16, 0, 1) * pow(0.5, d / 3)` → shown as firm / slightly loose / a little wobbly
- Constants: `rate = 0.155`

**From sources** (each checked against the linked page)

- Teeth move because bone is resorbed by osteoclasts on the pushed (compression) side and built by osteoblasts on the tension side. — Frontiers in Oral Health: Selective modulation of the bone remodeling regulatory system through orthodontic tooth movement: a review (Danz & Degen) <https://frontiersin.org/journals/oral-health/articles/10.3389/froh.2025.1472711/full>
- The first reaction to a new push is inflammation, including pain, that usually lasts a few days. — Frontiers in Oral Health: Selective modulation of the bone remodeling regulatory system through orthodontic tooth movement: a review (Danz & Degen) <https://frontiersin.org/journals/oral-health/articles/10.3389/froh.2025.1472711/full>
- Teeth may be sore for a few days after braces are fitted; braces are adjusted every 6 to 8 weeks and usually stay on for 1 to 2 years. — NHS: Orthodontics <https://www.nhs.uk/tests-and-treatments/orthodontics/>
- Heavier forces tended to increase the rate of tooth movement but brought unwanted side effects; initial movement benefits from light forces. — Ondokuz Mayıs University repository: Rate of tooth movement under heavy and light continuous orthodontic forces (Yee et al., American Journal of Orthodontics and Dentofacial Orthopedics) — abstract record <https://acikerisim.omu.edu.tr/entities/publication/e4edce6b-9805-4d30-9786-93605397f01c/full>
- Orthodontic treatment typically takes over 18 months. — Cochrane: Surgical procedures for accelerating orthodontic treatment <https://www.cochrane.org/evidence/CD010572_surgical-procedures-accelerating-orthodontic-treatment>

**Our choices** (simplifications — please check these are fair)

- **The tooth moves about 0.155 mm a week (about two-thirds of a millimetre a month) at full wear.** Closes Zara's 4 mm gap in about six months, as clue 3 says, and fits treatments lasting over a year. We could not open a source giving a typical rate in millimetres.
- **Less than about 6 hours of force a day moves the tooth almost not at all; full speed needs about 22 hours.** Shows clue 4 (no bands, no progress). The real cut-off varies; the 6 and 22 hours are our estimate.
- **Heavy force is 15% faster than medium and light is 15% slower.** The study found heavier forces somewhat faster; the exact size here is our estimate.
- **Soreness halves every 2 days after tightening.** Matches 'sore for a few days' and clue 1 (fades in two or three days).

**Illustrative** (made-up numbers): Zara's 4 mm gap, her 22 hours a day and the 0–10 soreness scale are made up for a fictional story.

**Limits:** shows — Shows a tooth moving steadily through the jaw while a gentle force is applied; Shows bone around the tooth being taken down on one side and built up on the other; Shows movement slowing when the force acts for fewer hours a day. Does not — Measure any real person's teeth — the numbers are illustrative teaching values; Include how braces are planned or adjusted; Describe anything beyond mild, normal tenderness.

**Wellbeing line:** Sharp pain, a broken wire or a sore in your mouth that won't heal is a reason to tell an adult.

**Case claims to check**

- Best answer: A steady, gentle force from the braces makes bone cells remove bone on one side of each tooth and build new bone on the other, so the tooth slowly moves through the jaw.
- Takeaway: Bone isn't dead stone — it is constantly taken down and rebuilt. A steady force tells bone cells where to remove and where to add, which is how braces move teeth and how training makes bones stronger.
- Transfer: Mateo, 15, has done gymnastics for three years. A scan for a sports program shows the bones in his wrists are a little thicker than most kids' his age. → *Years of repeated force made his bone cells add bone where the load is — the same rebuilding that moves teeth.*

### The Brain-Freeze Smoothie — Tomás's brain freeze  ·  `brain-freeze`

*Level: Moderate*

When Tomás gulps a cold smoothie, the cold hits the roof of his mouth fast. Small blood vessels there tighten and then rush open, and a big face nerve passes the signal on — his brain feels it as an ache in his forehead, even though nothing touched it. His brain doesn't actually get colder. The ache fades within seconds, faster if he warms the roof of his mouth with his tongue.

- Faster gulps and colder drinks cool the roof of the mouth more.
- Below a small amount of cooling there's no ache — that's why slow sips are fine.
- The ache halves about every 12 seconds; a warm tongue makes it fade about twice as fast.
- His brain stays at body temperature the whole time.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How fast he gulps** `G` · 0–10, case value 8 · source: Cold that hits the roof of the mouth fast brings on brain freeze; slow sips usually don't.
- *bubble* · **Seconds after the gulp** `S` · 0–90 s, case value 5 · source: Brain freeze lasts from a few seconds to a few minutes and switches off by itself.
- *bubble* · **Warm tongue on the roof of his mouth** `W` · 0–1, case value 0 · source: Test the tongue trick: pressing a warm tongue on the roof of the mouth warms it back up, so the ache fades faster.
- *factor* · **Drink temperature** `Td` · 20–50 °F, case value 25 · choice: A colder drink cools the roof of the mouth more.
- *factor* · **How sensitive he is** `sens` · 0.7–1.3, case value 1.3 · choice: Some people get brain freeze easily, others hardly ever.

**Formulas**

- Roof-of-mouth cooling (°F): `T = (G / 10) * (body - Td) * 0.35`
- Forehead ache (0–10): `P = clamp(sens * max(0, (G / 10) * (body - Td) * 0.35 - 4) / 1.6, 0, 10) * pow(0.5, S / (12 - 7 * W))`
- Brain temperature: always shown as "about 98.6°F — steady"
- Ache: `Fl = clamp(sens * max(0, (G / 10) * (body - Td) * 0.35 - 4) / 1.6, 0, 10) * pow(0.5, S / (12 - 7 * W))` → shown as none / mild / sharp
- Constants: `body = 98.6`

**From sources** (each checked against the linked page)

- Cold on the roof of the mouth makes small blood vessels tighten then rapidly open; nerve signals through the trigeminal nerve are felt as pain in the head. — Harvard Health Publishing: What happens during a brain freeze, and is it harmful? <https://www.health.harvard.edu/pain/what-happens-during-a-brain-freeze-and-is-it-harmful>
- Brain freeze lasts from a few seconds to a few minutes; pressing the tongue on the roof of the mouth can stop it; eating cold foods slowly may avoid it. — Marshfield Clinic Health System (Shine365): Brain freeze <https://shine365.marshfieldclinic.org/wellness/brain-freeze/>
- It usually lasts under two minutes and is not harmful. — Harvard Health Publishing: What happens during a brain freeze, and is it harmful? <https://www.health.harvard.edu/pain/what-happens-during-a-brain-freeze-and-is-it-harmful>
- Normal body temperature is about 98.6°F (37°C). — MedlinePlus (U.S. National Library of Medicine): Body temperature norms <https://medlineplus.gov/ency/article/001982.htm>

**Our choices** (simplifications — please check these are fair)

- **Roof-of-mouth cooling = gulp speed × (98.6 − drink temperature) × 0.35.** A simple way to show faster gulps and colder drinks both cool the palate more; the 0.35 is a teaching value.
- **No ache until the palate cools by more than 4°F.** Shows clue 2: slow sips never hurt.
- **The ache halves every 12 seconds, every 5 seconds with a warm tongue.** Matches clue 4 (gone in about half a minute) and clue 3 (the tongue makes it fade faster).
- **Drink temperature and sensitivity are adjustable.** Lets you see why his friend gets the same thing from ice cream, and why some people rarely get it.

**Illustrative** (made-up numbers): Tomás's gulp speed, his 25°F smoothie and the 0–10 ache scale are made up for a fictional story.

**Still being studied:** Scientists still debate exactly what causes brain freeze. The leading idea is blood vessels in the roof of the mouth tightening and then rushing open, but it is hard to study because each one is over so quickly.

**Limits:** shows — Shows the ache growing with how much cold hits the roof of the mouth, and how fast; Shows the ache fading within half a minute; Shows slow sips causing little or no ache. Does not — Measure any real person — the numbers are illustrative teaching values; Show the exact timing of the blood vessels; scientists are still studying how it works; Say anything about other kinds of headaches.

**Wellbeing line:** Headaches that come without anything cold, or don't go away, are a reason to tell an adult.

**Case claims to check**

- Best answer: The cold on the roof of his mouth made blood vessels there squeeze and then rush open; nerves near those vessels send pain signals that his brain feels as coming from his forehead.
- Takeaway: A brain freeze isn't your brain freezing. Cold on the roof of your mouth makes blood vessels squeeze and then rush open, and the nerves there send a signal your brain feels as a forehead ache — short, harmless and gone in seconds.
- Transfer: Chloe bites straight into an ice-pop on a hot day and feels a stab of pain between her eyes for a few seconds. → *Cold on the roof of her mouth made nearby blood vessels squeeze and then rush open, and nerves there send pain that her brain feels in her forehead.*

### The Car-Sick Reader — Isabel's eyes and inner ear on a winding road  ·  `motion-conflict`

*Level: Moderate*

Isabel's brain works out how she's moving from two reports. Her inner ear feels the car swaying through every bend, but her eyes, fixed on a still page, say she isn't moving. The brain gets mixed signals, and the longer the mismatch lasts, the queasier she feels. When she looks out at the road, her eyes see the motion too, the reports agree and the queasiness fades.

- The inner ear feels more motion on a winding road than on a straight one.
- Mismatch = motion the inner ear feels minus what the eyes can see.
- Queasiness builds over the minutes the mismatch lasts.
- Looking out the window or sitting in front shrinks the mismatch.
- Younger children are a little more sensitive.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes reading** `R` · 0–40 min, case value 20 · choice: The mismatch adds up over time: a short read may be fine, a long one is not.
- *bubble* · **Time looking out the window** `L` · 0–10, case value 0 · source: When the eyes can see the motion, they agree with the inner ear and the mismatch shrinks.
- *bubble* · **Road** `Wd` · 0.1–1, case value 1 · source: Test the 'reading itself makes you sick' idea: on a straight highway the inner ear feels little motion, so reading causes almost no mismatch.
- *factor* · **Age** `age` · 11–18 years, case value 13 · source: Children are especially likely to get motion sickness.
- *factor* · **Seat** `seat` · 0.7–1, case value 1 · source: Sitting in the front lets the eyes see the road ahead.

**Formulas**

- Motion the inner ear feels (0–10): `Ie = 10 * Wd`
- Eye–ear mismatch (0–10): `M = 10 * Wd * (1 - L / 10)`
- Queasiness (0–10): `Q = clamp(10 * Wd * (1 - L / 10) * (1 - 0.04 * max(0, age - 12)) * seat * (1 - pow(0.5, R / 12)), 0, 10)`
- She feels: `Fe = clamp(10 * Wd * (1 - L / 10) * (1 - 0.04 * max(0, age - 12)) * seat * (1 - pow(0.5, R / 12)), 0, 10)` → shown as fine / a bit off / queasy

**From sources** (each checked against the linked page)

- Motion sickness happens when the movement you see is different from what your inner ear senses. — CDC Travelers' Health: Motion Sickness <https://wwwnc.cdc.gov/travel/page/motion-sickness>
- The brain senses movement from the inner ears, eyes, muscles and joints; mismatched signals cause motion sickness, and it's more common in children. — MedlinePlus (U.S. National Library of Medicine): Motion Sickness <https://www.medlineplus.gov/motionsickness.html>
- Looking out into the distance instead of reading can help. — MedlinePlus (U.S. National Library of Medicine): Motion Sickness <https://www.medlineplus.gov/motionsickness.html>
- Avoid reading; look at a fixed point such as the horizon and sit in the front of the car. — NHS: Motion sickness <https://www.nhs.uk/conditions/motion-sickness/>

**Our choices** (simplifications — please check these are fair)

- **Queasiness builds with a half-time of 12 minutes.** Shows clue 2 (fine at first, queasy later) and fits clue 4 (fades within about ten minutes).
- **Sensitivity drops 4% for each year over 12.** Sources say children are especially likely to get it but give no rate; this is our estimate.
- **The front seat cuts the mismatch by 30%.** Sitting in front helps; the size of the effect is our estimate.
- **Inner-ear motion on a straight highway is set to 1 out of 10.** Clue 2: an hour of reading on the highway caused no trouble.

**Illustrative** (made-up numbers): Isabel's 13 years, 20 minutes of reading and the 0–10 scales are made up for a fictional story.

**Limits:** shows — Shows queasiness building when the eyes and the inner ear report different things; Shows the mismatch shrinking when the eyes can see the motion too (looking out the window); Shows time adding up: a short read is fine, a long one is not. Does not — Measure any real person — the numbers are illustrative teaching values; Explain why some people are more sensitive than others; Include smells, heat or a full stomach, which can make it worse.

**Wellbeing line:** If you feel car-sick, tell the driver — stopping for fresh air and looking at the horizon helps.

**Case claims to check**

- Best answer: Her eyes report 'still' while her inner ear reports 'swaying', so her brain gets mixed signals and responds with queasiness; looking out the window makes them agree.
- Takeaway: Your brain checks your eyes against your inner ear. When one says 'moving' and the other says 'still', the mismatch can make you feel sick — letting your eyes see the motion brings them back into agreement.
- Transfer: Kofi, 14, sits on the sofa playing a virtual-reality flying game. After ten minutes of swooping through the sky he feels queasy, even though he hasn't moved. → *His eyes say he's moving but his inner ear says he's still — the same mismatch as reading in a car, the other way round.*

### The Cavity Detective — Ethan's teeth: acid attacks and repair  ·  `tooth-acid`

*Level: Moderate*

Every time Ethan sips sweet tea, bacteria on his teeth turn the sugar into acid, and the acid pulls minerals out of the enamel. Saliva takes about 20 minutes to wash the acid away; then saliva and fluoride put minerals back. Sipping all afternoon keeps restarting the attack, so his teeth hardly get repair time. His sister drinks the same tea in one go — one attack, then hours of repair.

- Each separate sip starts about 20 minutes of acid.
- Sips closer together than that overlap, so the acid never clears.
- More sugar makes each attack only a little longer.
- A dry mouth makes each attack last longer.
- Fluoride speeds up repair, but can't stop all-afternoon acid.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Separate sips a day** `N` · 0–20, case value 12 · source: Each sugary sip starts a fresh acid attack that saliva takes about 20 minutes to clear.
- *bubble* · **Sugar in the bottle** `Sg` · 20–80 g, case value 40 · choice: Test the 'it's the amount of sugar' idea: doubling the sugar makes each attack only a little longer — how often matters far more.
- *bubble* · **Fluoride toothpaste** `Fl` · 0–2, case value 2 · source: Fluoride helps enamel put back the minerals acid takes out — but it doesn't stop the acid.
- *factor* · **Saliva** `sal` · 1–2, case value 1 · source: Saliva washes acid away; a dry mouth takes about twice as long to clear it.
- *factor* · **Hours he spreads the sips over** `win` · 0.5–8 h, case value 4 · choice: Sips closer together than 20 minutes overlap, so acid never clears in between.

**Formulas**

- Acid attack (min/day): `A = min(N * 20 * sal * (0.8 + 0.2 * Sg / 40), win * 60 + 20 * sal * (0.8 + 0.2 * Sg / 40))`
- Acid attacks started (per day): `G = N`
- Repair time (min of the waking day): `Fr = max(0, day - min(N * 20 * sal * (0.8 + 0.2 * Sg / 40), win * 60 + 20 * sal * (0.8 + 0.2 * Sg / 40)))`
- Enamel: `Bl = 10 * max(0, day - min(N * 20 * sal * (0.8 + 0.2 * Sg / 40), win * 60 + 20 * sal * (0.8 + 0.2 * Sg / 40))) / day * (1 + 0.25 * Fl) - min(N * 20 * sal * (0.8 + 0.2 * Sg / 40), win * 60 + 20 * sal * (0.8 + 0.2 * Sg / 40)) / 15` → shown as losing minerals — soft spots can form / just about even / repairing
- Constants: `day = 960`

**From sources** (each checked against the linked page)

- Bacteria use sugars to make acids that eat away at the enamel; saliva and fluoride help enamel repair itself. — National Institute of Dental and Craniofacial Research (NIH): The Tooth Decay Process <https://nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process>
- Frequent sugary snacks or drinks mean repeated acid attacks win the tug-of-war, and the tooth loses minerals. — National Institute of Dental and Craniofacial Research (NIH): The Tooth Decay Process <https://nidcr.nih.gov/health-info/tooth-decay/more-info/tooth-decay-process>
- Saliva takes about 20 minutes to clear acid, and a dry mouth doubles that time. — SA Dental Service (Government of South Australia): Tooth friendly eating <https://www.dental.sa.gov.au/assets/downloads/Care-for-older-people-toolkit/Tooth_friendly_eating-V2.pdf>
- Fluoride helps reverse early decay by replacing lost minerals; fluoride toothpaste significantly reduces decay. — National Institute of Dental and Craniofacial Research (NIH): Ask the Expert: Why is fluoride good for dental health? <https://www.nidcr.nih.gov/health-info/fluoride/ask-expert-why-fluoride-good-dental-health>

**Our choices** (simplifications — please check these are fair)

- **Doubling the sugar makes each attack 20% longer.** How often sugar arrives matters more than how much; the exact size is our estimate.
- **Acid time can't be longer than the sipping window plus one attack.** Sips that overlap don't add extra acid on top of acid that's already there.
- **The enamel balance compares repair time (boosted up to 50% by fluoride) with acid time.** A teaching scale for the tug-of-war the NIDCR describes; real enamel changes are slower and harder to measure.
- **A 16-hour waking day.** Saliva flow drops during sleep, so we count only waking hours.

**Illustrative** (made-up numbers): Ethan's 12 sips over 4 hours and his usual bottle of tea are made up for a fictional story.

**Limits:** shows — Shows each sugary sip starting about 20 minutes of acid; Shows that splitting the same sugar into more sips means far more acid time; Shows saliva and fluoride repairing enamel between attacks. Does not — Measure any real person — the numbers are illustrative teaching values; Include the type of food, starches or how well someone brushes; Tell anyone how to look after their teeth — that's a dentist's job.

**Wellbeing line:** Tooth pain or sensitivity is a reason to tell an adult so a dentist can take a look.

**Case claims to check**

- Best answer: Bacteria in his mouth turn sugar into acid, and every sip starts about twenty minutes of acid softening his enamel. Sipping every few minutes means the acid never stops, so his saliva never gets the chance to repair the enamel.
- Takeaway: Teeth care about how often, not just how much. Every sugary sip feeds mouth bacteria that make acid for about twenty minutes; spread the sips all day and the acid never stops, so saliva never gets its turn to repair the enamel.
- Transfer: Nia chews sugary gum, one piece after another, from the start of school until lunch. Her brother eats the same amount of sugar as one dessert after dinner. Who is more likely to get soft spots on their teeth? → *Nia, because each piece keeps acid attacking her teeth all morning, with no break for saliva to repair them.*

### The Cramming Student — Ines's memory: cramming vs spacing  ·  `memory-spacing`

*Level: Moderate*

A new memory fades over time unless it is used again. Ines crammed 2 hours in one night, so her memory of the words was strong the next morning but faded fast. Her brother spread the same 2 hours over six days, with sleep in between, so he pulled each word back up again and again — and every time made the memory last longer.

- How much she learns at first depends on study time, number of words and how fast she learns.
- After that, what she remembers fades by half over a 'half-life' of a few days.
- Each extra day the study is spread over makes that half-life about 1.5 times longer.
- Less sleep than 8 hours makes the half-life shorter; more sleep makes it a little longer.
- The surprise-quiz score is what's left after the wait.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Days the study is spread over** `D` · 1–7 days, case value 1 · source: Spreading the same study time over several days is called spaced (distributed) practice — one of the two best-rated study techniques.
- *bubble* · **Hours of sleep each night** `Z` · 4–10 h, case value 8 · source: Sleep after learning helps the brain save new memories. Teens need about 8–10 hours a night.
- *bubble* · **How fast she learns new words** `L` · 0.5–1.5, case value 1 · choice: Tests the 'worse at languages' idea: a slower learner would also score lower on the very next morning, not just a week later.
- *factor* · **Total study time** `H` · 0.5–4 h, case value 2 · choice: Both twins studied for 2 hours in total. More time builds a stronger first memory.
- *factor* · **Words to learn** `W` · 20–80 words, case value 40 · choice: More words in the same time means less practice for each word.
- *factor* · **Days until the surprise quiz** `Q` · 1–14 days, case value 7 · source: The longer you wait, the more you forget — and the longer the wait, the bigger the best gap between study sessions.

**Formulas**

- Remembered at the surprise quiz (% of the words): `R = 100 * clamp(H * 60 * L / (W * minPerWord), 0, 1) * pow(0.5, Q / (h0 * pow(H / 2, 0.5) * pow(grow, D - 1) * pow(Z / 8, 1.2)))`
- Words remembered at the surprise quiz (words): `Rw = W * clamp(H * 60 * L / (W * minPerWord), 0, 1) * pow(0.5, Q / (h0 * pow(H / 2, 0.5) * pow(grow, D - 1) * pow(Z / 8, 1.2)))`
- Next-morning quiz score (%): `N = 100 * clamp(H * 60 * L / (W * minPerWord), 0, 1) * pow(0.5, 0.5 / (h0 * pow(H / 2, 0.5) * pow(grow, D - 1) * pow(Z / 8, 1.2)))`
- Nights of sleep between sessions: `S = D - 1`
- Constants: `minPerWord = 2.5`, `h0 = 4`, `grow = 1.49`

**From sources** (each checked against the linked page)

- A 2013 review of ten study techniques rated two as most effective: spreading study out over time (distributed practice) and quizzing yourself (practice testing). — Association for Psychological Science: Which Study Strategies Make the Grade? <https://www.psychologicalscience.org/news/releases/which-study-strategies-make-the-grade.html>
- A review of 317 experiments found that the gap between study sessions and the time until the test work together: the best gap gets longer the longer you need to remember. — eScholarship, University of California: Distributed practice in verbal recall tasks: A review and quantitative synthesis (Psychological Bulletin) <https://escholarship.org/uc/item/3rr6q10c>
- Sleep after learning helps save new information in the brain; learning ability may drop by up to 40% without sleep, and you can't pull an all-nighter and still learn effectively. — NIH News in Health: Sleep On It: How Snoozing Strengthens Your Memory <https://newsinhealth.nih.gov/node/1481>
- Teens aged 13–17 need 8–10 hours of sleep a day. — CDC: About Sleep <https://www.cdc.gov/sleep/about/index.html>
- A modern repeat of Ebbinghaus's famous 1880s memory experiment reproduced his forgetting curve, with a possible upward jump at the 24-hour point that may be linked to sleep. — PLOS ONE: Replication and Analysis of Ebbinghaus' Forgetting Curve <https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0120644>

**Our choices** (simplifications — please check these are fair)

- **Forgetting halves memory over a fixed half-life.** Real forgetting curves drop fast at first and then slow down; a halving curve has that shape and is easy to read.
- **Each extra day of spacing makes the half-life 1.5 times longer.** Chosen so the model reproduces the twins' week-later scores (about 12 and 34 words). The real benefit of spacing depends on the material and the person.
- **Sleep changes the half-life smoothly around 8 hours.** Sources agree sleep strengthens memories but don't give one formula, so we used a gentle curve.
- **Learning speed only changes how much she learns at first.** This keeps the 'worse at languages' test clear: a slower learner would score lower the very next morning.
- **It takes about 2.5 minutes of study per word to learn it fully.** A round number so 40 words in 2 hours are all learned by the next morning, as in the case.

**Illustrative** (made-up numbers): Ines and her brother are fictional; their scores (12 and 34 words a week later) are made up to fit the model. The 4-day half-life after cramming is an illustrative value, not a measurement.

**Still being studied:** Scientists are still working out exactly why spaced practice works so well, and exactly how the sleeping brain chooses which memories to keep.

**Limits:** shows — Shows a memory fading fast after cramming and lasting much longer when the same study time is spread out; Shows sleep between sessions making memories last longer; Lets you test whether 'just a slower learner' fits the evidence. Does not — Measure any real person — Ines is fictional and the numbers are illustrative; Include quizzing yourself, how interesting the words are, or stress; Predict anyone's own grades.

**Wellbeing line:** If you often can't sleep, or school stress feels too big, talk with an adult you trust.

**Case claims to check**

- Best answer: Spreading practice over several days, with sleep in between, makes the brain pull each word back up again and again; each recall after a gap makes the memory stronger and longer-lasting. Cramming fills a short-term memory that fades fast.
- Takeaway: How you split your practice matters as much as how long you practise. Short sessions spread over days, with sleep in between, make your brain pull memories back again and again — and each time they get stronger. Cramming fades fast.
- Transfer: Ollie learns a piano piece by practising 15 minutes a day for two weeks. His friend practises the same piece for 3½ hours the day before the recital. Both play well at the recital; a month later Ollie can still play it and his friend can't. → *Spaced practice with sleep in between made Ollie's memory of the piece stronger and longer-lasting.*

### The Dark Cinema — Sofia's eyes adjusting to a dark theatre  ·  `dark-adapt`

*Level: Moderate*

Bright light uses up the light-sensing pigment in the cells at the back of the eye. When Sofia walks into the dark theatre, two things happen: her pupils open wide within seconds, letting in more light, and over many minutes her eye cells rebuild their pigment, becoming thousands of times more sensitive. The pupils help a little; the rebuilt pigment does most of the work.

- Pupils open from about 2.5 mm to 7.5 mm within seconds of entering the dark.
- The eye's sensitivity starts far below its best and closes the gap by half about every 4 minutes.
- The brighter the lobby and the longer she was in it, the bigger the gap at the start.
- What she can see depends on her sensitivity, her pupils and how dark the theatre is.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes in the dark** `M` · 0–20 min, case value 5 · source: Full dark adaptation takes about 20–30 minutes: a quick first step in the first few minutes, then a bigger, slower one.
- *bubble* · **How bright it was before** `B` · 0–10, case value 10 · source: How long the eyes take to adjust depends on how bright the place you came from was.
- *bubble* · **Pupils** `u` · 0–1, case value 1 · source: Tests the 'only her pupils' idea. A fully open pupil lets in only about 16 times more light — far too little to explain everything.
- *factor* · **Minutes in the sunny lobby** `Lm` · 1–30 min, case value 10 · choice: A longer time in bright light uses up more of the light-sensing pigment, so there is more to rebuild.
- *factor* · **How dark the theatre is** `dk` · 0–2, case value 1 · choice: The darker the room, the more sensitive the eyes must become before she can see.

**Formulas**

- Eye sensitivity (% of fully adjusted): `S = 100 * (1 - 0.4 * B * clamp(Lm / 10, 0.3, 1) * pow(0.5, M / half) / 4)`
- How much she can see (%): `V = clamp(100 - scale * (0.4 * B * clamp(Lm / 10, 0.3, 1) * pow(0.5, M / half) + pupilLog * (1 - u * (1 - pow(0.5, M * 30))) + dk - 1), 0, 100)`
- Pupil width (mm): `P = 2.5 + u * 5 * (1 - pow(0.5, M * 30))`
- Retina more sensitive since walking in (×): `G = pow(10, 0.4 * B * clamp(Lm / 10, 0.3, 1) * (1 - pow(0.5, M / half)))`
- Constants: `half = 4`, `pupilLog = 1.2`, `scale = 28`

**From sources** (each checked against the linked page)

- A normal pupil is 2–4 mm wide in bright light and 4–8 mm in dim light; in the dark, pupils get larger to let more light in. — Cleveland Clinic: Dilated Pupils (Mydriasis) <https://my.clevelandclinic.org/health/symptoms/22238-dilated-pupils>
- The pupil can only enlarge its area about 16 times, yet we can see across changes in light level of far more than a million times. Cones max out after about five minutes; rods take over after about 10 minutes and do their best after about 20. — The Conversation: How do my eyes adjust to the dark, and how long does it take? <https://theconversation.com/how-do-my-eyes-adjust-to-the-dark-and-how-long-does-it-take-124044>
- Complete dark adaptation takes about 30 minutes: an early increase over about 7 minutes from the cones, then a much greater one from the rods. — Mississippi State University: Dark adaptation (e-Psych: the eye) <https://epsych.msstate.edu/biological/eye/about/19.html>
- Dark adaptation usually takes 20–30 minutes to reach its maximum, depends on how bright the previous surroundings were, and works by regenerating the light-sensing pigment (rhodopsin in rods). — Scientific American: Why does it take so long for our vision to adjust to a darkened theater? <https://www.scientificamerican.com/article/experts-eyes-adjust-to-darkness/>

**Our choices** (simplifications — please check these are fair)

- **Sensitivity is counted in 'log units' and its gap halves every 4 minutes.** Real dark adaptation has a fast cone step and a slower rod step; one smooth halving curve keeps the main idea and reaches nearly full sensitivity in about 20 minutes.
- **Fully open pupils add 1.2 log units (about 16 times more light).** This matches the 16-fold change in pupil area.
- **Pupils finish opening in a few seconds.** Sources say the pupil opens almost immediately; we gave it a half-time of 2 seconds.
- **Time in the lobby counts up to 10 minutes.** After that the pigment is treated as fully used up; the real relationship is more gradual.

**Illustrative** (made-up numbers): Sofia is fictional; the 'how much she can see' percentage is a made-up scale. The 4-log-unit starting gap and the ×5,000 retina gain after 15 minutes are picked inside real ranges, not measured.

**Limits:** shows — Shows pupils opening in seconds but giving only a small boost; Shows the eye's own sensitivity rising over many minutes as pigment is rebuilt; Shows a brighter lobby making the adjustment take longer. Does not — Measure any real person — Sofia is fictional and the numbers are illustrative; Separate the cone step from the rod step, or show colour vision fading in the dark; Include age, screens, or eye conditions.

**Wellbeing line:** If you notice you can't see well in dim light when your friends can, tell an adult — it's worth an eye check.

**Case claims to check**

- Best answer: Two things happened: her pupils opened wide in seconds, and over many minutes the light-sensing cells at the back of her eyes rebuilt the pigment that bright light had used up, making them far more sensitive.
- Takeaway: Your eyes adjust to the dark in two steps: pupils open wide in seconds, then the light-sensing cells slowly rebuild their pigment over many minutes, making you far more sensitive to dim light.
- Transfer: Wei goes outside at night to look at the stars. At first he sees only a few; after twenty minutes away from his phone screen he sees hundreds. → *His eyes rebuilt their light-sensing pigment in the dark, becoming far more sensitive over many minutes.*

### The Dizzy Spinner — Amara's inner ear after spinning  ·  `balance-spin`

*Level: Moderate*

Inside each inner ear are three fluid-filled loops. When Amara's head turns, the fluid pushes on tiny hair cells that tell her brain which way she is turning. While she spins, the fluid gets moving with her. When the spinner suddenly stops, the fluid keeps going for a while — so her brain is told she is still turning, the playground seems to spin, and her eyes flick to follow it.

- The longer she spins, the bigger the push on her balance sensors when she stops — up to a limit.
- A faster spinner gives a bigger push.
- After she stops, the spinning feeling halves about every 10 seconds; in trained dancers it fades faster.
- Her eyes flick side to side while the feeling is strong.
- How long since she ate changes her fuel, not her dizziness.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Spins on the spinner** `N` · 0–20, case value 10 · choice: The longer she spins, the more the fluid in her balance canals gets moving with her — so the bigger the jolt when she suddenly stops.
- *bubble* · **Seconds after stopping** `S` · 0–40 s, case value 0 · source: After you stop, the fluid in your inner ear keeps moving for a while, so you still feel as if you're spinning.
- *bubble* · **Hours since her last snack** `Hs` · 0–6 h, case value 1 · choice: Tests the 'low blood sugar' idea: change it and watch whether the dizziness changes at all.
- *factor* · **Spinner speed** `rps` · 0.25–1, case value 0.5 · choice: A faster spin gives a bigger sudden change when it stops, so the after-spin feeling is stronger.
- *factor* · **Spinning practice** `pr` · 0–2, case value 0 · source: In trained ballet dancers, the feeling of spinning after they stop lasts a shorter time than in other people.

**Formulas**

- Inner-ear fluid still pushing (% of max): `F = clamp(60 * (rps / 0.5) * (1 - pow(0.5, N / rps / (half * (1 - 0.25 * pr)))) * pow(0.5, S / (half * (1 - 0.25 * pr))), 0, 100)`
- Dizziness (0–10): `D = clamp(10.5 * (rps / 0.5) * (1 - pow(0.5, N / rps / (half * (1 - 0.25 * pr)))) * pow(0.5, S / (half * (1 - 0.25 * pr))), 0, 10)`
- Eyes: `E = clamp(10.5 * (rps / 0.5) * (1 - pow(0.5, N / rps / (half * (1 - 0.25 * pr)))) * pow(0.5, S / (half * (1 - 0.25 * pr))), 0, 10)` → shown as steady / flicking a little / flicking side to side
- Fuel in her blood (% of comfortable): `G = clamp(100 - 4 * Hs, 70, 100)`
- Constants: `half = 10`

**From sources** (each checked against the linked page)

- The semicircular canals are fluid-filled loops at right angles to each other. When the head turns, the fluid moves and bends a soft flap (the cupula) sitting on hair cells, which tell the brain the head has turned. — NIH National Institute on Deafness and Other Communication Disorders (NIDCD): Balance Disorders <https://www.nidcd.nih.gov/health/balance-disorders>
- After turning around rapidly, the fluid continues to move, which can make you feel like you're still spinning. — Imperial College London: Ballet dancers' brains adapt to stop them feeling dizzy <https://www.imperial.ac.uk/news/130786>
- In trained ballet dancers, both the eye reflexes and the feeling of spinning after a spin lasted a shorter time than in other athletes. — Imperial College London: Ballet dancers' brains adapt to stop them feeling dizzy <https://www.imperial.ac.uk/news/130786>
- Measured in 10 people, the flap in the balance canals springs back with a time constant of about 4 seconds; the brain then stretches the signal out for longer. — Icahn School of Medicine at Mount Sinai: Model-based study of the human cupular time constant (Journal of Vestibular Research) <https://scholars.mssm.edu/en/publications/model-based-study-of-the-human-cupular-time-constant-2/>

**Our choices** (simplifications — please check these are fair)

- **The after-spin feeling halves every 10 seconds.** The cupula itself springs back in about 4 seconds, but the brain stores the turning signal for longer. A 10-second half-life makes the feeling last about half a minute, as people report.
- **Spinning 'charges up' the signal with the same half-life.** During a steady spin the fluid slowly catches up with the head, so a longer spin gives a bigger jolt at the stop, levelling off.
- **Dancer training shortens the half-life by a quarter per level.** The study shows the feeling lasts shorter in dancers but doesn't give a simple number for 13-year-olds.
- **Hunger changes only the fuel number.** This is how the model tests the low-blood-sugar idea; in healthy people a skipped snack doesn't make the world spin.

**Illustrative** (made-up numbers): Amara is fictional; the 0–10 dizziness scale and the fuel percentage are made-up scales. The spinner speeds are typical playground values, not measurements.

**Still being studied:** Exactly how the brain stores and then lets go of the spinning signal — and how dancers learn to switch the feeling off — is still being researched.

**Limits:** shows — Shows the inner-ear fluid still pushing after the spin stops; Shows longer and faster spins giving a stronger after-spin feeling; Lets you test whether hunger could be the cause. Does not — Measure any real person — Amara is fictional and the numbers are illustrative; Model which direction the world seems to spin, or tilting the head; Cover dizziness that happens without spinning.

**Wellbeing line:** Dizziness that comes without spinning, or doesn't go away, is a reason to tell an adult.

**Case claims to check**

- Best answer: Fluid in the balance loops of her inner ear started swirling while she spun; when she stopped, it kept swirling for a while, so her brain was told she was still turning.
- Takeaway: Your balance sense lives in fluid-filled loops in your inner ear. Spinning sets the fluid swirling, and because it keeps going after you stop, your brain thinks you are still turning until it settles.
- Transfer: After a long ride on the spinning teacups at a fair, Ravi steps off and the ground seems to tilt and turn. He has to sit down for a minute until it passes. → *The fluid in his inner ear kept swirling after the ride stopped, telling his brain he was still turning.*

### The Indoor Winter — Mira's sunlight, vitamin D and calcium  ·  `vitamin-d`

*Level: Moderate*

Bones are built from calcium, which Mira gets from milk. But her gut can only take much calcium in when there is enough vitamin D, and most vitamin D is made by skin in sunlight. In winter, with a coat on and almost no daylight, her skin makes very little — so much of her milk's calcium passes straight through, even though she drinks plenty.

- Her skin makes vitamin D in proportion to hours outdoors, how much skin is uncovered and how strong the season's sunlight is.
- Winter sunlight makes almost none; summer sunlight makes a lot.
- Her daily vitamin D is sun plus food (fortified milk adds about 120 IU a cup); a teen needs about 600 IU.
- With enough vitamin D the gut absorbs about 30% of calcium; with too little, much less.
- Calcium absorbed = calcium eaten × the share absorbed.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours outdoors in daylight each week** `O` · 0–10 h/week, case value 3 · source: Skin makes vitamin D when sunlight's UVB falls on it. In summer, 5–30 minutes on bare skin a couple of times a week is usually enough.
- *bubble* · **Season** `Se` · 0–2, case value 0 · source: Between October and early March, sunlight in northern countries is too weak for skin to make enough vitamin D.
- *bubble* · **Glasses of milk a day** `g` · 0–5 glasses, case value 3 · source: Tests the 'just drink more milk' idea. Each cup has about 300 mg of calcium — but how much gets in depends on vitamin D.
- *factor* · **Skin uncovered outdoors** `sk` · 0.5–1.5, case value 0.5 · source: Covered skin makes no vitamin D — clothes, sunscreen and even window glass block the UVB.
- *factor* · **Milk has added vitamin D** `fort` · 0–1, case value 1 · source: Almost all US milk has about 120 IU of vitamin D added per cup — helpful, but three glasses is still less than a teen needs.

**Formulas**

- Vitamin D made by her skin (IU a day): `Vs = O * (20 + 130 * Se + 60 * Se * (Se - 1)) * sk`
- Vitamin D from sun and food (% of daily need): `Vp = 100 * (O * (20 + 130 * Se + 60 * Se * (Se - 1)) * sk + vitDPerCup * g * fort + otherVitD) / need`
- Share of calcium her gut absorbs (%): `A = 100 * (0.10 + 0.20 * clamp((O * (20 + 130 * Se + 60 * Se * (Se - 1)) * sk + vitDPerCup * g * fort + otherVitD) / need, 0, 1))`
- Calcium absorbed (mg a day): `Ca = (caPerCup * g + otherCa) * (0.10 + 0.20 * clamp((O * (20 + 130 * Se + 60 * Se * (Se - 1)) * sk + vitDPerCup * g * fort + otherVitD) / need, 0, 1))`
- Bones are: `B = (caPerCup * g + otherCa) * (0.10 + 0.20 * clamp((O * (20 + 130 * Se + 60 * Se * (Se - 1)) * sk + vitDPerCup * g * fort + otherVitD) / need, 0, 1))` → shown as short of calcium / a bit short / getting enough
- Constants: `need = 600`, `otherVitD = 40`, `otherCa = 250`, `caPerCup = 300`, `vitDPerCup = 120`

**From sources** (each checked against the linked page)

- Vitamin D helps the body absorb calcium, one of the main building blocks of bone. Teens aged 14–18 need 15 mcg (600 IU) a day; a cup of fortified milk has about 3 mcg (120 IU), and almost all US milk is fortified. Clothing, sunscreen, clouds and window glass reduce how much vitamin D skin makes. — NIH Office of Dietary Supplements: Vitamin D — Fact Sheet for Consumers <https://ods.od.nih.gov/factsheets/VitaminD-Consumer/>
- About 5–30 minutes of sun on exposed skin, especially between 10 a.m. and 4 p.m., daily or at least twice a week, usually leads to enough vitamin D; season and time of day change this. — NIH Office of Dietary Supplements: Vitamin D — Fact Sheet for Health Professionals <https://ods.od.nih.gov/factsheets/VitaminD-HealthProfessional/>
- Between October and early March people in the UK don't make enough vitamin D from sunlight; from late March to September most people can make all they need. — NHS (UK): Vitamin D <https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/>
- A cup of milk has about 276–299 mg of calcium; about 30% of calcium from dairy is absorbed, and vitamin D is required for that absorption. — NIH Office of Dietary Supplements: Calcium — Fact Sheet for Health Professionals <https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/>
- Teens aged 14–18 need 1,300 mg of calcium a day. — NIH Office of Dietary Supplements: Calcium — Fact Sheet for Consumers <https://ods.od.nih.gov/factsheets/Calcium-Consumer/>

**Our choices** (simplifications — please check these are fair)

- **Vitamin D made per outdoor hour: about 20 (winter), 150 (spring/autumn) and 400 (summer) IU a day for each weekly hour of face-and-hands-sized skin.** Picked so a little summer sun covers the daily need, as the sources say, while winter sun makes almost none.
- **Calcium absorption goes from 10% (very low vitamin D) up to 30% (enough).** Sources give about 30% with enough vitamin D and say less is absorbed without it; 10% is our estimate for the low end.
- **Other food adds 250 mg of calcium and 40 IU of vitamin D a day.** A rough allowance for the rest of her diet.
- **'Getting enough' means absorbing about 370–390 mg of calcium a day.** That is roughly 30% of the 1,300 mg teens are advised to eat.

**Illustrative** (made-up numbers): Mira is fictional; her 3 hours outside, 3 glasses of milk and winter coat are made up for the story. The location of 'northern country' winter sunlight is general; real amounts depend on latitude, cloud and skin colour.

**Limits:** shows — Shows skin making vitamin D in daylight, and very little in winter; Shows vitamin D controlling how much of the milk's calcium is absorbed; Lets you test whether more milk alone fixes the problem. Does not — Measure any real person — Mira is fictional and the numbers are illustrative; Include skin tone, latitude in detail, or exercise, which also builds bone; Tell anyone how much sun, milk or supplement they should have.

**Wellbeing line:** Questions about your own diet or bones are best taken to a parent, school nurse or doctor.

**Case claims to check**

- Best answer: Her skin makes vitamin D only in sunlight, and vitamin D lets her gut absorb calcium — so with almost no sun, much of the milk's calcium isn't taken in.
- Takeaway: Bones are built from calcium, but the gut needs vitamin D to take calcium in — and skin makes vitamin D in daylight. Food and sunlight work as a team.
- Transfer: Two classes drink the same amount of milk at lunch. One class has PE outdoors all year; the other has PE in a basement gym with no windows. → *The outdoor class takes in more calcium, because sunlight on their skin makes vitamin D, which helps the gut absorb it.*

### The Locker-Room Smell — Jordan's nose in the locker room  ·  `smell-adapt`

*Level: Moderate*

Smell-sensing cells in Jordan's nose send messages to his brain when smell molecules reach them. A new smell sets off a strong alarm. But when the smell stays the same, the system quiets down — within minutes he barely notices it, even though the smell is still in the air. Step outside for a few minutes and it resets, so walking back in, the smell hits him again.

- The smell in the air stays the same unless the room is aired.
- How strongly he notices it drops by half about every 3 minutes, down to a small leftover.
- Away from the smell, his sense of smell resets, halving the 'used to it' effect about every 2 minutes.
- A stuffy nose cuts how much smell reaches the sensors.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes in the room** `m` · 0–20 min, case value 10 · source: With a steady smell, the sense of smell becomes much less sensitive within about 10 minutes.
- *bubble* · **Window or fan** `W` · 0–2, case value 0 · choice: Tests the 'the smell went away' idea: airing the room really does lower the smell in the air. Was the room aired?
- *bubble* · **Break outside first** `b` · 0–10, case value 0 · choice: After 10 minutes in the room he steps out. Away from the smell, his nose and brain reset — so coming back, it hits him again.
- *factor* · **How strong the smell is** `Sst` · 2–10, case value 7 · illustrative: How many sweaty kits and shoes are in the room after a hot practice.
- *factor* · **Stuffy nose** `st` · 0–2, case value 0 · source: A nose stuffed up by a cold keeps smell molecules from reaching the smell-sensing cells.

**Formulas**

- Smell actually in the air (%): `A = Sst * 10 * pow(0.5, m * W / 5)`
- How strongly he notices it (%): `N = Sst * 10 * pow(0.5, m * W / 5) * (1 - 0.35 * st) * (floor + (1 - floor) * (1 - min(b, 1) * (1 - pow(0.5, 10 / adapt)) * pow(0.5, b / reset)) * pow(0.5, m / adapt))`
- His nose and brain are: `R = floor + (1 - floor) * (1 - min(b, 1) * (1 - pow(0.5, 10 / adapt)) * pow(0.5, b / reset)) * pow(0.5, m / adapt)` → shown as barely reporting it / quieting down / sounding the alarm
- Constants: `adapt = 3`, `reset = 2`, `floor = 0.15`

**From sources** (each checked against the linked page)

- Smell-sensing cells in the nose connect directly to the brain and send it messages when they detect odour molecules; a nose stuffed up by a cold keeps odours from reaching them. — NIH National Institute on Deafness and Other Communication Disorders (NIDCD): Smell Disorders <https://www.nidcd.nih.gov/health/smell-disorders>
- In a study of 80 people breathing a steady rose-like smell, their smell thresholds were already clearly raised (they had become less sensitive) after 10 minutes, and more so after 2 hours. — University of Regensburg publication server: Pronounced Olfactory Habituation with Age (Laryngoscope) <https://pred.uni-regensburg.de/id/eprint/63814/>
- The brain gets used to a constant smell and ignores it until there is a big enough change to get its attention. — The Daily Beacon, University of Tennessee: Ask a Scientist: Smelling your own breath <https://www.utdailybeacon.com/opinion/columns/ask-a-scientist-smelling-your-own-breath/article_014af98c-0da1-11e7-b3e5-733a95f4e961.html>

**Our choices** (simplifications — please check these are fair)

- **Noticing halves every 3 minutes, down to 15% of the start.** Chosen to match Jordan's clue (strong at the door, almost gone after 10 minutes) and the study's 'clearly less sensitive after 10 minutes'.
- **After stepping out, the 'used to it' effect halves every 2 minutes.** Recovery away from a smell is quick; we don't have a measured number for teens, so this is a teaching value.
- **Receptors and brain are counted together.** Both the smell-sensing cells and the brain adapt; separating them would add detail without changing the lesson.
- **An open window halves the smell every 5 minutes; a fan doubles that.** A simple way to show airing really removes smell from the air.

**Illustrative** (made-up numbers): Jordan is fictional; the smell strength and the percentages are made-up scales. The 70% at the door and 16% after 10 minutes match the story, not a measurement.

**Still being studied:** Scientists are still working out how much of 'nose blindness' happens in the nose itself and how much in the brain.

**Limits:** shows — Shows the smell staying in the air while noticing it fades; Shows a short break resetting the nose; Lets you test whether airing the room could explain it. Does not — Measure any real person — Jordan is fictional and the numbers are illustrative; Tell different smells apart, or model smells that are harmful to breathe; Separate adaptation in the nose from adaptation in the brain.

**Wellbeing line:** If you smell gas or smoke, don't wait to 'get used to it' — get out and tell an adult right away.

**Case claims to check**

- Best answer: Smell receptors in his nose fire hard at a new smell but quiet down when it doesn't change, so his brain stops getting the alarm — even though the smell is still in the air.
- Takeaway: Your senses report change, not sameness. Smell receptors quiet down when a smell stays the same, so you stop noticing it — even though it never left. A short break resets them.
- Transfer: Hana, 14, puts on perfume before school. By lunch she can't smell it at all and thinks it has worn off — but her friend sitting next to her says she can still smell it clearly. → *Hana's smell receptors adapted to the steady smell, so her brain stopped reporting it — her friend's nose hasn't adapted.*

### The Sleeping Foot — Kofi's squashed foot nerve  ·  `nerve-pressure`

*Level: Moderate*

Nerves carry messages between Kofi's foot and his brain. Sitting on his foot for 40 minutes squashed those nerves, so their signals stopped getting through and the foot felt numb. When he stands, the pressure comes off and blood flows back. The nerves start firing again, but jumbled at first — some too much, some not at all — and his brain reads that as pins and needles until everything is back to normal.

- The longer and harder he presses on the foot, the more numb it gets — up to a limit.
- After he stands, the numbness halves about every 8 seconds.
- Pins and needles rise in the first few seconds, then fade — longer after a longer squash.
- A cold floor changes the skin temperature, not the numbness.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes sitting on his foot** `M` · 0–60 min, case value 40 · source: Sitting on a foot squashes its nerves; the longer the pressure lasts, the more of their signals stop getting through.
- *bubble* · **Seconds since standing up** `S` · 0–120 s, case value 0 · source: Once the pressure is off, blood flows back and the nerves restart — with jumbled signals at first, which feel like pins and needles.
- *bubble* · **Floor temperature** `Tf` · 60–80 °F, case value 70 · choice: Tests the 'cold foot' idea: change the floor and watch whether the numbness changes.
- *factor* · **How he's sitting** `P` · 0.6–1.3, case value 1 · choice: More weight on the foot squashes the nerve harder, so it 'falls asleep' sooner.
- *factor* · **How much he shifts around** `Fd` · 0.5–1, case value 1 · choice: Moving now and then takes the pressure off for a moment, so the nerve doesn't get as squashed.

**Formulas**

- Numbness (0–10): `N = clamp(10 * (1 - pow(0.5, M * P * Fd / 15)), 0, 10) * pow(0.5, S / 8)`
- Pins and needles (0–10): `T = clamp(10 * (1 - pow(0.5, M * P * Fd / 15)), 0, 10) * (1 - pow(0.5, S / 5)) * pow(0.5, S / (2 + 2.5 * clamp(10 * (1 - pow(0.5, M * P * Fd / 15)), 0, 10)))`
- Nerve signals getting through (%): `G = 100 - 9 * clamp(10 * (1 - pow(0.5, M * P * Fd / 15)), 0, 10) * pow(0.5, S / 8)`
- Foot skin temperature (°F): `Ft = 88 + 0.15 * (Tf - 70)`

**From sources** (each checked against the linked page)

- Many people think a foot falls asleep because blood supply is cut off, but squashed nerves are more to blame: pressure stops them relaying messages to the brain. — Nemours KidsHealth: Why Does My Foot Fall Asleep? <https://kidshealth.org/en/kids/foot-asleep.html>
- As feeling comes back it can feel tingly, like pins and needles, and it lasts only a short time as the connection returns to normal. — Nemours KidsHealth: Why Does My Foot Fall Asleep? <https://kidshealth.org/en/kids/foot-asleep.html>
- Sustained pressure can squeeze arteries and block nerve signals; some nerves stop firing while others fire too much, and the brain reads these mixed signals as tingling — which gets stronger as blood flows back and the nerves restart. — NBC News (Dr. Robert Daroff, Case Western Reserve University): What makes our feet fall asleep? <https://www.nbcnews.com/id/wbna3076701>
- Paresthesia is a burning, tingling or prickling feeling, usually in the hands, arms, legs or feet; nerve injury can come from compression. — NIH National Institute of Neurological Disorders and Stroke (NINDS): Paresthesia <https://www.ninds.nih.gov/health-information/disorders/paresthesia>

**Our choices** (simplifications — please check these are fair)

- **Numbness builds up with a 15-minute half-time.** Chosen so 10 minutes gives mild numbness and 40 minutes strong numbness, matching the story.
- **Numbness halves every 8 seconds after standing; tingling fades over about a minute.** Sources say the tingling is short; we made it longer after a longer squash, as clue 4 describes.
- **Weight and fidgeting scale the squash.** More pressure squashes nerves harder and shifting gives relief; the exact amounts vary.
- **Floor temperature only changes skin temperature.** This is how the model tests the cold-foot idea.

**Illustrative** (made-up numbers): Kofi is fictional; the 0–10 numbness and tingling scales are made-up scales. His skin temperature of about 88°F is a typical value, not a measurement.

**Limits:** shows — Shows numbness building the longer a nerve is squashed; Shows the pins-and-needles phase as the nerve restarts; Lets you test whether a cold floor could be the cause. Does not — Measure any real person — Kofi is fictional and the numbers are illustrative; Separate nerve squashing from blood-flow squashing; Cover numbness or tingling that happens without pressure.

**Wellbeing line:** Numbness or tingling that happens without sitting on something, or doesn't go away, is a reason to tell an adult.

**Case claims to check**

- Best answer: Sitting on his foot pressed on a nerve and its blood supply, so its signals slowed and the foot went numb; once the pressure was off, the nerve started up again with jumbled signals — pins and needles — until it was back to normal.
- Takeaway: Nerves carry messages from your body to your brain. Squash one for a while and the messages slow down — numb. Take the pressure off and it restarts with jumbled signals — pins and needles — before getting back to normal.
- Transfer: Isabel falls asleep with her arm folded under her head. She wakes up and her hand is numb and floppy, then it tingles for a minute before it's normal. → *Her head pressed on a nerve in her arm so its signals slowed; when she moved, the nerve started up again with tingling.*

### The Sleepy Gamer — Theo's body clock and his bright screen  ·  `sleep-clock`

*Level: Moderate*

Theo's brain has a master clock that uses light from his eyes to tell the time. In the evening it releases melatonin, the sleep signal. Bright screen and room light late at night tell the clock it is still daytime, so melatonin starts later and he lies awake even though he is tired. Camping, with daylight all day and dark evenings, moves his clock earlier, so sleep comes fast.

- Each hour of bright light before bed pushes his clock about 0.4 hours later (less with a dim screen or room lights off).
- He can fall asleep about 2 hours after melatonin starts rising; before that he lies awake.
- A day of outdoor daylight moves the clock about 1.4 hours earlier.
- An exciting game adds only about 5 minutes.
- Sleep = time until the 6:30 alarm minus time awake in bed; teens need about 8–10 hours.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours of bright screen before lights-out** `S` · 0–4 h, case value 3 · source: Light reaching the eyes in the evening pushes back the start of the brain's sleep signal, melatonin.
- *bubble* · **What's on the screen** `E` · 0–1, case value 1 · choice: Tests the 'the game is too exciting' idea. Excitement adds a few minutes, but swap to a calm show on the same bright screen and he still lies awake.
- *bubble* · **Daylight during the day** `Dl` · 0–1, case value 0 · source: A weekend outdoors in natural light, with no screens at night, moved campers' melatonin rise about 1.4 hours earlier.
- *factor* · **Screen brightness** `Br` · 0.2–1, case value 1 · choice: A brighter screen sends more light into his eyes, so it holds the clock back more.
- *factor* · **Room lights** `Rl` · 0–1, case value 1 · source: Ordinary room lighting before bed was enough to delay melatonin in almost everyone tested.
- *factor* · **Lights-out time** `Bt` · -2–0, case value 0 · illustrative: Going to bed before the clock is ready means more time lying awake; school still starts at the same time.

**Formulas**

- Time to fall asleep (min): `F = 10 + 60 * max(0, Mo0 + gate + perHour * S * (0.5 * Br + 0.5 * Rl) - campShift * Dl - Bt) + 5 * E`
- Sleep signal (melatonin) at lights-out (% of a dark evening): `M = 100 * clamp((Bt - (Mo0 + perHour * S * (0.5 * Br + 0.5 * Rl) - campShift * Dl)) / 2, 0, 1) * (1 - 0.5 * (0.5 * Br + 0.5 * Rl) * min(S, 1))`
- Body clock shift (h later): `Dh = perHour * S * (0.5 * Br + 0.5 * Rl) - campShift * Dl`
- Sleep before the school alarm (h): `Sl = clamp(wake - Bt - (10 + 60 * max(0, Mo0 + gate + perHour * S * (0.5 * Br + 0.5 * Rl) - campShift * Dl - Bt) + 5 * E) / 60, 0, 12)`
- Morning alertness (0–10): `A = clamp(2 * (clamp(wake - Bt - (10 + 60 * max(0, Mo0 + gate + perHour * S * (0.5 * Br + 0.5 * Rl) - campShift * Dl - Bt) + 5 * E) / 60, 0, 12) - 4), 0, 10)`
- Evening light dose: `Lv = S * (0.5 * Br + 0.5 * Rl)`
- Constants: `Mo0 = -2.5`, `gate = 2`, `perHour = 0.4`, `campShift = 1.4`, `wake = 6.5`

**From sources** (each checked against the linked page)

- The brain's master clock (the SCN) controls melatonin production based on how much light the eyes receive; in the evening it makes more melatonin, causing sleepiness; light from electronic devices at night can confuse the clock. — NIH National Institute of General Medical Sciences: Circadian Rhythms <https://nigms.nih.gov/education/fact-sheets/Pages/circadian-rhythms.aspx>
- Compared with dim light, ordinary room light before bedtime delayed melatonin onset in 99% of people and shortened the melatonin night by about 90 minutes. — Journal of Clinical Endocrinology & Metabolism (Gooley et al.): Exposure to room light before bedtime suppresses melatonin onset and shortens melatonin duration in humans <https://academic.oup.com/jcem/article/96/3/E463/2833657>
- People reading on a light-emitting tablet for 4 hours before bed for 5 nights took nearly 10 minutes longer to fall asleep than with a printed book and were more tired the next morning. — Penn State News (study by Chang et al., PNAS): Light-emitting e-readers detrimentally shift circadian clock <https://www.psu.edu/news/research/story/light-emitting-e-readers-detrimentally-shift-circadian-clock>
- A weekend camping in natural light shifted campers' melatonin rise 1.4 hours earlier; a winter week of camping shifted it 2.6 hours earlier. — CU Boulder Today (study by Wright et al., Current Biology): Can't get to sleep? A wilderness weekend can help <https://www.colorado.edu/today/2017/02/01/cant-get-sleep-wilderness-weekend-can-help>
- In adolescence melatonin tends to be produced later at night, so bedtime and wake time typically become about 2 hours later. — Oxford Health NHS Foundation Trust (CAMHS): Why has it got harder to get to sleep? <https://oxfordhealth.nhs.uk/camhs/self-care/sleep/what-happens/teenagers>
- Teens aged 13–17 need 8–10 hours of sleep a night. — US Centers for Disease Control and Prevention: About Sleep <https://www.cdc.gov/sleep/about/index.html>

**Our choices** (simplifications — please check these are fair)

- **Each hour of bright light delays the clock by 0.4 hours.** Sized so a few hours of screen plus room light gives a delay of about an hour, in line with the 90-minute effect of room light.
- **He can fall asleep about 2 hours after melatonin starts rising.** A common teaching rule of thumb; real gaps vary from person to person.
- **Screen and room light count equally.** Both put light into his eyes; real amounts depend on the screen, the bulbs and the distance.
- **Excitement adds 5 minutes.** Lets you test idea C: excitement fades fast after he stops playing, so its effect is small.

**Illustrative** (made-up numbers): Theo is fictional; his natural melatonin start of 9:30 pm, the 6:30 alarm and the 0–10 alertness scale are made up for the story. Lights-out times are choices for exploring, not advice.

**Still being studied:** How much of a late clock comes from screens themselves, rather than room lights, staying up late or the normal teen shift, is still being studied.

**Limits:** shows — Shows evening light delaying the brain's sleep signal; Shows a late clock turning into lying awake and short sleep before school; Lets you test whether excitement or daylight explains the camping cure. Does not — Measure any real person — Theo is fictional and the numbers are illustrative; Include caffeine, noise, stress, naps or effects that build up over many nights; Tell anyone what bedtime or screen rules to follow.

**Wellbeing line:** If you often can't sleep or feel exhausted every day, that's worth talking about with an adult you trust.

**Case claims to check**

- Best answer: Bright light late at night tells his brain's clock it is still daytime, so the sleep signal is held back; without screens the clock runs on its own and sleep comes easily.
- Takeaway: Your brain has a clock, and light is how it tells the time. Bright light late holds back the sleep signal; dim evenings and morning daylight keep the clock on time.
- Transfer: Nadia flies from California to Spain. For the first three nights she is wide awake at 2 a.m. and exhausted by lunchtime, then it fades. → *Her body clock is still set to California time; daylight in Spain slowly re-sets it over a few days.*

### The Afterimage Artist — Hana's tired colour cells  ·  `afterimage`

*Level: Difficult*

Hana's eyes have cone cells that sense red, green and blue light, and her brain turns their signals into colour. Two minutes of bright red tired her red-sensing cones. On the white wall, the fresh green-sensing cones answer more strongly than the tired red ones, so her brain sees green — a colour that isn't there. As the tired cones recover, the ghost fades in about twenty seconds.

- Tiredness builds up the longer she stares, halving the gap to fully tired every 15 seconds.
- Vivid colour and eyes held still make the cones more tired.
- The ghost is the opposite colour: red → green, green → reddish-pink, blue → yellow, yellow → blue.
- After she looks away the ghost halves every 2–6 seconds (slower after a long stare) and is brightest on white.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Seconds staring at the red** `s` · 0–120 s, case value 120 · source: The longer the cone cells see one colour, the more they adapt — and the stronger the afterimage.
- *bubble* · **Seconds since she looked at the wall** `t` · 0–40 s, case value 0 · source: Away from the red, the tired cones slowly return to normal and the ghost fades.
- *bubble* · **Colour she stares at** `Cs` · 0–3, case value 0 · source: The twist: the ghost is always the opposite colour of what she stared at. It's made by her eyes and brain, not by anything on the wall.
- *bubble* · **Her eyes while staring** `Fx` · 0.15–1, case value 1 · choice: Wandering eyes spread the red over different cells, so no cells get as tired and the ghost is weak and blurry.
- *factor* · **How vivid the red is** `b` · 1–3, case value 3 · source: Stronger, higher-contrast colours tire the cones more.
- *factor* · **What she looks at afterwards** `Wb` · 0.25–1, case value 1 · source: On a white surface the fresh cones respond strongly, so the opposite colour stands out most.

**Formulas**

- Cones for that colour tired (%): `F = 100 * (1 - pow(0.5, s * Fx / half)) * b / 3`
- Ghost strength (0–10): `G = 10 * (1 - pow(0.5, s * Fx / half)) * b / 3 * Wb * pow(0.5, t / (2 + 4 * (1 - pow(0.5, s * Fx / half)) * b / 3))`
- How long the ghost lasts (s): `D = max(0, (2 + 4 * (1 - pow(0.5, s * Fx / half)) * b / 3) * 50 * (pow(max(10 * (1 - pow(0.5, s * Fx / half)) * b / 3 * Wb, 1), 0.02) - 1) / 0.693)`
- Ghost colour: `C = Cs` → shown as green / reddish-pink / yellow / blue
- Constants: `half = 15`

**From sources** (each checked against the linked page)

- Light bleaches cone cells; staring at red tires the red cones while the green cones stay fresh, so on a white background the green cones respond more and the afterimage is the complementary colour. After long exposure it takes a little while for the cones to return to normal. — BrainFacts.org (Society for Neuroscience): Aftereffects <https://www.brainfacts.org/thinking-sensing-and-behaving/vision/2018/aftereffects-091018>
- Cones exposed to the same colour for too long get fatigued and other cones take over; the colour of a negative afterimage is the complementary colour, and it can be seen for several seconds. — All About Vision: How afterimages play tricks on your eyes <https://allaboutvision.com/resources/human-interest/afterimage>
- The longer and stronger the adapting image, the larger the effect on the after-image; the chance of an after-image increases with adaptation time, and higher-contrast colours make adaptation easier. — Attention, Perception, & Psychophysics (Springer): Research article on after-image formation, DOI 10.3758/s13414-022-02570-8 <https://link.springer.com/10.3758/s13414-022-02570-8>
- Photoreceptors in the retina turn light into electrical signals that travel through the optic nerve to the brain, which turns them into the images we see. — NIH National Eye Institute: How the Eyes Work <https://www.nei.nih.gov/learn-about-eye-health/healthy-vision/how-eyes-work>

**Our choices** (simplifications — please check these are fair)

- **Cone tiredness builds with a 15-second half-time.** Chosen so a 20–30 second stare (as in common demos) gives a clear ghost and two minutes gives nearly the maximum.
- **The ghost fades with a half-time of 2–6 seconds, longer after a longer stare.** Matches Hana's clue (about 20 seconds after two minutes) and the sources' 'several seconds'.
- **'Lasts' means until the ghost drops below strength 1, worked out with a close approximation of a logarithm.** The model tool has no log function, so we use the standard power approximation.
- **Wandering eyes cut tiredness to about 15%.** Moving the image around spreads the load over many cells; the exact amount varies.

**Illustrative** (made-up numbers): Hana is fictional; the 0–10 ghost strength scale is made up. Real afterimage colours are close to, but not exactly, the opposite colour, and differ a little between people.

**Still being studied:** Scientists still debate how much of an afterimage comes from tired cones in the eye and how much from adaptation further along in the brain.

**Limits:** shows — Shows colour-sensing cells tiring the longer and harder they work; Shows the ghost is always the opposite colour, made inside the eye and brain; Shows the ghost fading as the cells recover. Does not — Measure any real person — Hana is fictional and the numbers are illustrative; Cover colour blindness or the brain's colour processing in detail; Suggest staring at bright lights or the sun — never do that.

**Wellbeing line:** Afterimages from paint or paper fade in seconds. If spots in your vision don't fade, tell an adult.

**Case claims to check**

- Best answer: The red-sensing cells in her eyes got tired from staring, so when she looks at white the other colour cells 'win' and her brain sees the opposite colour — green — until the tired cells recover.
- Twist: Hana sees a colour that isn't there at all. The green isn't on the wall or in her eye — it's made by tired red-sensing cells, and it shows up as the opposite colour.
- Takeaway: Your eyes have cells for different colours. Stare too long at one colour and those cells tire; then white looks like the opposite colour until they recover. That colour is made inside your eyes and brain.
- Transfer: Tomás stares at a bright yellow sticky note on his desk for a minute. When he looks at a blank white page, he sees a bluish square. → *The cells that sense yellow light tired from staring, so the white page looks like the opposite colour, blue, until they recover.*

### The Altitude Skier — Noor's breathing and heart up a mountain  ·  `altitude`

*Level: Difficult*

At 9,000 ft the air pressure is lower, so every breath Noor takes holds less oxygen than at the beach. On day one her body makes up for it quickly by breathing more and pumping her heart faster. Over the next few days slower changes take over: her breathing settles deeper and her blood becomes more concentrated, so the oxygen in her blood rises and her heart can slow back down.

- Oxygen in each breath halves about every 18,600 ft of height — about 69% of sea level at 10,000 ft.
- The bigger the change from her home altitude, the lower the oxygen in her blood on arrival.
- On arrival her resting heart rate rises; over 3–5 days it falls back as her blood oxygen improves.
- Her breathing rises with altitude and keeps deepening a little over the first days.
- Moving (walking, stairs) adds breaths and beats — much more when blood oxygen is low.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Altitude** `alt` · 0–12000 ft, case value 9000 · source: Higher up, air pressure is lower, so each breath brings in less oxygen — at 10,000 ft only about 69% as much as at sea level.
- *bubble* · **Days at altitude** `days` · 0–7 days, case value 0 · source: The body adjusts over the first 3–5 days: breathing steadily deepens and the blood gets more concentrated, so oxygen levels improve.
- *bubble* · **What she's doing** `e` · 0–2, case value 0 · choice: Moving makes muscles ask for more oxygen — and up high each breath has less to give.
- *bubble* · **Air temperature** `airT` · 0–70 °F, case value 25 · choice: Test the 'it's the cold' idea: cold air makes her feel chilly, but it doesn't change how much oxygen each breath holds.
- *factor* · **Altitude of her home** `home` · 0–6000 ft, case value 0 · choice: Noor lives by the beach. Someone from a mountain town is already partly used to thinner air, so the same trip is a smaller change.
- *factor* · **Resting heart rate at home** `Hrest` · 50–90 beats/min, case value 65 · source: Most people rest at 60–100 beats a minute; very active people can be lower.
- *factor* · **Resting breathing at home** `Brest` · 12–16 breaths/min, case value 14 · source: At rest most people take 12–16 breaths a minute.

**Formulas**

- Oxygen in each breath (% of sea level): `Ox = 100 * pow(0.5, alt / half)`
- Oxygen in her blood (%): `Sat = 98 - 30 * max(0, 1 - pow(0.5, (alt - home) / half)) * (1 - 0.55 * (1 - pow(0.5, days / acc)))`
- Breathing rate (breaths/min): `B = Brest * (1 + max(0, 1 - pow(0.5, (alt - home) / half)) * (0.6 + 0.6 * (1 - pow(0.5, days / acc)))) + e * (3 + 1.0 * 30 * max(0, 1 - pow(0.5, (alt - home) / half)) * (1 - 0.55 * (1 - pow(0.5, days / acc))))`
- Heart rate (beats/min): `H = Hrest * (1 + 0.8 * max(0, 1 - pow(0.5, (alt - home) / half)) * pow(0.5, days / acc)) + e * (20 + 1.5 * 30 * max(0, 1 - pow(0.5, (alt - home) / half)) * (1 - 0.55 * (1 - pow(0.5, days / acc))))`
- How her breathing feels: `Bl = e * 30 * max(0, 1 - pow(0.5, (alt - home) / half)) * (1 - 0.55 * (1 - pow(0.5, days / acc)))` → shown as comfortable / puffing a bit / out of breath
- How the air feels: `Fe = airT` → shown as cold / chilly / comfortable
- Constants: `half = 18600`, `acc = 1.5`

**From sources** (each checked against the linked page)

- At about 10,000 ft (3,050 m), the oxygen pressure in each breath is only 69% of what it is at sea level. — CDC: High-Altitude Travel and Altitude Illness (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html>
- At around 10,000 ft, arriving without time to adjust can lower blood oxygen saturation to 88–91%. — CDC: High-Altitude Travel and Altitude Illness (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html>
- Adjusting to altitude happens over the first 3–5 days: breathing steadily increases, oxygen levels improve, and plasma volume falls so the blood's hemoglobin is more concentrated. Making new red blood cells plays no role in this early adjustment. — CDC: High-Altitude Travel and Altitude Illness (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html>
- Travellers sleeping at 8,000 ft or higher without adjusting are at risk of altitude illness; headache is its main symptom. — CDC: High-Altitude Travel and Altitude Illness (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html>
- Resting heart rate rose on arriving at a moderate altitude (2,200 m) and then gradually fell back over the next two weeks. — Institute for Applied Training Science, Leipzig (database record): The use of heart rate for monitoring the acclimatization status to high altitude training in cross-country skiers (ECSS 2014 abstract) <https://www.iat.uni-leipzig.de/datenbanken/iks/dsv-biathlon/Record/4038375>
- For most people, a resting heart rate of 60–100 beats a minute is normal. — American Heart Association: Target Heart Rates Chart <https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates>
- Normal breathing for a person at rest is 12–16 breaths a minute. — Johns Hopkins Medicine: Vital Signs (Body Temperature, Pulse Rate, Respiration Rate, Blood Pressure) <https://www.hopkinsmedicine.org/health/conditions-and-diseases/vital-signs-body-temperature-pulse-rate-respiration-rate-blood-pressure>

**Our choices** (simplifications — please check these are fair)

- **Oxygen per breath halves every 18,600 ft.** This simple curve gives 69% at 10,000 ft, matching the CDC figure. Real air pressure also changes a little with weather.
- **Blood oxygen on arrival falls by 30 points for every 100% of oxygen 'missing'.** This puts Noor at about 89% on arrival at 9,000 ft, close to the 88–91% CDC gives for 10,000 ft. Real people vary a lot.
- **The early fix halves its gap about every 1.5 days.** Most of the adjustment is done by day 3–5, matching the CDC timeline.
- **Heart rate rises 0.8% for every 1% of missing oxygen, then fades as she adjusts.** Gives Noor about 80 beats a minute at rest on arrival, back near 67 by day four. The rise and fall match the altitude study; the size is our estimate.
- **Air temperature only changes how the air feels.** Cold doesn't change how much oxygen each breath holds. Very cold air can tighten some people's airways, but that's outside this model.

**Illustrative** (made-up numbers): Noor's home pulse (65) and breathing (14) are made up for a fictional character, chosen inside the normal ranges above. The extra breaths and beats for walking and stairs are rough teaching values.

**Still being studied:** Why some people adjust to altitude quickly and others feel unwell for days is still being researched.

**Limits:** shows — Shows how much less oxygen each breath holds as you go higher; Shows the quick fix on arrival (faster breathing and heart) and the slower fix over days; Shows that cold air and thin air are different things. Does not — Measure any real person — Noor is fictional and her numbers are estimates; Model altitude illness or anything dangerous; it stops at ski-resort heights; Include the new red blood cells that take weeks to build up.

**Wellbeing line:** A headache, feeling sick or being very short of breath on a mountain trip is a reason to rest and tell an adult straight away.

**Case claims to check**

- Best answer: The air at 9,000 ft holds less oxygen per breath, so at first her lungs and heart work harder; over a few days her breathing deepens and her blood carries more oxygen, so her heart can slow down again.
- Twist: In the Thirsty Hiker case 'the air is thin' was wrong. Here it is the right answer — and the body's fix takes days, not minutes, without any extra fitness.
- Takeaway: Higher up, each breath holds less oxygen. The body has a quick fix (breathe and pump harder) and a slower fix over a few days (breathe deeper all the time and concentrate the blood's oxygen carriers). Building new red blood cells takes weeks longer.
- Transfer: A soccer team from a sea-level city plays a match in a city at 7,000 ft the day they arrive. The players tire much faster than usual, even though the home team runs just as far. → *Each breath at 7,000 ft holds less oxygen; the visitors' bodies have not yet adjusted, while the home team's have.*

### The Bitter Broccoli — Imani's bitter-taste genes  ·  `taste-genes`

*Level: Difficult*

Bitter taste starts when bitter compounds in food fit into bitter-taste receptors on the tongue. People inherit different versions of one receptor gene, TAS2R38, so the same broccoli sends a strong bitter signal in some people and a weak one in others. Imani has a sensitive version; her brother doesn't. Salt can dim bitterness, and a blocked nose dulls flavour but not bitterness.

- Bitterness rises with the amount of bitter compound in the food.
- How strongly it rises depends on the version of the bitter-taste gene: non-taster, medium or supertaster.
- More taste buds make the signal a little stronger.
- Salt turns bitterness down.
- A blocked nose lowers flavour from smell, but not the tongue's bitter taste.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How much bitter compound is in the food** `c` · 0–10, case value 7 · illustrative: Broccoli and Brussels sprouts contain bitter-tasting compounds; some foods have hardly any. This is a 0–10 teaching scale.
- *bubble* · **Her bitter-taste gene (TAS2R38)** `g` · 0–2, case value 2 · source: The twist dial: different versions of one gene, TAS2R38, help explain why the same food tastes much more bitter to some people. Switch Imani to her brother's version and see.
- *bubble* · **Salt on the broccoli** `salt` · 0–2, case value 0 · source: Salt suppresses bitterness more than it suppresses other tastes — one reason food tastes better with a little salt.
- *bubble* · **Her nose** `nose` · 0–1, case value 0 · source: Test the 'she has a cold' idea: a blocked nose makes food taste bland because flavour needs smell — but the tongue's bitter taste is still there.
- *factor* · **Taste buds compared with average** `buds` · 0.8–1.2, case value 1 · source: Supertasters may have more, or stronger, taste buds as well as sensitive receptors.
- *factor* · **How the broccoli was cooked** `cook` · 0–2, case value 1 · illustrative: Test the 'cooked badly' idea: cooking changes the food a little for everyone at the table — it can't explain why only Imani finds it harsh.

**Formulas**

- Bitterness she tastes (0–10): `B = clamp(c * (0.25 + 0.375 * g) * buds * (1 - 0.12 * cook) * (1 - 0.22 * salt), 0, 10)`
- Bitter receptors firing (%): `T = clamp(10 * c * (0.25 + 0.375 * g) * buds * (1 - 0.12 * cook), 0, 100)`
- Flavour from smell (0–10): `F = 8 * (1 - 0.8 * nose) * (1 - 0.1 * cook)`
- Wants another bite: `W = clamp(c * (0.25 + 0.375 * g) * buds * (1 - 0.12 * cook) * (1 - 0.22 * salt), 0, 10)` → shown as yes / maybe / no thanks

**From sources** (each checked against the linked page)

- Different versions (alleles) of the bitter-receptor gene TAS2R38 are partly responsible for differences in how bitter people find things; people with more of the sensitive receptor rated a bitter test chemical as more intense. — PubMed: Human bitter perception correlates with bitter receptor messenger RNA expression in taste cells (Am J Clin Nutr) <https://pubmed.ncbi.nlm.nih.gov/24025627/>
- About 25% of people in the U.S. are 'supertasters' of the bitter test chemical PROP, linked to the TAS2R38 gene; supertasters may have more or stronger taste buds, and they are born, not made. — Cleveland Clinic: What It Means To Be a Supertaster <https://health.clevelandclinic.org/what-it-means-to-be-a-supertaster>
- Salt enhances flavour by suppressing bitterness: in experiments, salt suppressed bitterness much more than sweetness. — Nature: Salt enhances flavour by suppressing bitterness (Nature 387, 563) <https://www.nature.com/articles/42388>
- Taste cells detect at least five basic tastes, including bitter. Flavour is taste combined with a food's aroma, so a stuffed-up nose from a cold makes food taste bland. — NIH National Institute on Deafness and Other Communication Disorders: Taste Disorders <https://www.nidcd.nih.gov/health/taste-disorders>

**Our choices** (simplifications — please check these are fair)

- **Three gene groups (non-taster, medium, supertaster).** Real sensitivity is a range; three groups make the comparison between Imani and her brother clear. Supertasters are given 4 times the bitter signal of non-tasters.
- **Salt cuts bitterness by up to about 45%.** Salt clearly suppresses bitterness; the exact amount depends on how much salt and which bitter compound.
- **Taste-bud number has a small effect (±20%).** Researchers still debate how much the number of taste buds matters compared with the receptor genes.
- **A blocked nose only changes smell-based flavour.** Bitter is one of the tongue's basic tastes, so it is still detected when the nose is blocked.

**Illustrative** (made-up numbers): The 0–10 'bitter compound' and bitterness scales are teaching scales, not measurements. How much cooking changes the bitter compounds is a made-up size: the point is that it changes the food for everyone at the table, not just for Imani.

**Still being studied:** Scientists are still working out how all the different bitter-receptor genes (there are many besides TAS2R38) combine to shape what each person likes to eat.

**Limits:** shows — Shows the same food sending a different bitter signal depending on inherited taste genes; Shows that salt dims bitterness and a blocked nose dims flavour, not bitterness; Shows why cooking can't explain a difference between two people eating the same food. Does not — Measure anyone's own taste genes — Imani is fictional; Include the many other bitter-taste genes, or how habits and culture shape what we like; Say anything about health or what anyone should eat.

**Wellbeing line:** If food suddenly starts tasting very different or strange to you, mention it to an adult.

**Case claims to check**

- Best answer: Imani inherited extra-sensitive bitter-taste receptors on her tongue, so the same chemical in broccoli tastes much more bitter to her than to her brother.
- Twist: The obvious answer — 'she's just a picky eater' — is wrong. Her tongue really is detecting a bitter chemical more strongly than her brother's, and she inherited that.
- Takeaway: Taste isn't the same for everyone. Genes help decide how sensitive your bitter-taste receptors are, so the same broccoli can be mild to one person and harsh to another — that's biology, not pickiness.
- Transfer: Raj and his best friend share the same cup of black hot chocolate made with dark cocoa. Raj says it's harshly bitter; his friend says it just tastes rich. → *Raj probably inherited more sensitive bitter-taste receptors, so the same chemicals taste stronger to him.*

### The Feverish Friend — Tomás's brain thermostat during a fever  ·  `fever-setpoint`

*Level: Difficult*

When Tomás's immune system fights the germs from his cold, it sends signals that turn up his brain's thermostat. His body is now colder than the new setting, so he feels freezing and shivers to make heat — even though his forehead is hot. Hours later the fight eases, the thermostat drops back, and now his body is too warm, so he sweats.

- The harder the immune system fights, the higher the brain's set point goes.
- Body temperature follows the set point, but about an hour behind.
- While body temperature is below the set point he feels cold and shivers.
- When the set point drops back, body temperature is above it and he sweats.
- Blankets and room temperature change how fast he warms or cools — not the set point.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How hard his immune system is fighting** `G` · 0–10, case value 7 · source: Fighting germs releases signals that raise the brain's temperature set point — the temperature the body tries to reach.
- *bubble* · **Hours since the fever started** `h` · 0–8 h, case value 1.5 · choice: The twist dial: early on, his body is below the new set point, so he feels cold and shivers. When the fever eases, his body is above it, so he feels hot and sweats.
- *bubble* · **Blankets** `layers` · 0–2, case value 2 · source: Test the 'blankets are overheating him' idea: blankets hold heat in, so he warms up to the set point faster — but they don't move the set point.
- *bubble* · **Room temperature** `room` · 60–80 °F, case value 70 · choice: Test the 'the room is cold' idea: a cooler room adds a little shivering, but the fever comes from inside, not from the room.
- *factor* · **His normal temperature** `Tn` · 97.8–99 °F, case value 98.6 · source: Healthy people usually sit somewhere between about 97.8 °F and 99 °F.
- *factor* · **Hours until the fever eases** `dur` · 1–8 h, case value 4 · illustrative: When the immune signals fade, the set point drops back to normal and the body has to shed its extra heat.

**Formulas**

- Brain's set point (°F): `S = Tn + k * G * (1 - pow(0.5, max(0, h) / 0.5)) * clamp((dur + 1 - h) / 1.5, 0, 1)`
- Body temperature (°F): `T = Tn + k * G * (1 - pow(0.5, max(0, h - (1.2 - 0.25 * layers + 0.03 * (70 - room))) / 0.5)) * clamp((dur + 1 - (h - (1.2 - 0.25 * layers + 0.03 * (70 - room)))) / 1.5, 0, 1)`
- Shivering (0–10): `V = round(clamp(12 * (1 - 0.1 * layers) * (k * G * (1 - pow(0.5, max(0, h) / 0.5)) * clamp((dur + 1 - h) / 1.5, 0, 1) - k * G * (1 - pow(0.5, max(0, h - (1.2 - 0.25 * layers + 0.03 * (70 - room))) / 0.5)) * clamp((dur + 1 - (h - (1.2 - 0.25 * layers + 0.03 * (70 - room)))) / 1.5, 0, 1)) + 0.15 * max(0, 70 - room), 0, 10))`
- Sweating (0–10): `W = round(clamp(12 * (1 + 0.2 * layers) * (k * G * (1 - pow(0.5, max(0, h - (1.2 - 0.25 * layers + 0.03 * (70 - room))) / 0.5)) * clamp((dur + 1 - (h - (1.2 - 0.25 * layers + 0.03 * (70 - room)))) / 1.5, 0, 1) - k * G * (1 - pow(0.5, max(0, h) / 0.5)) * clamp((dur + 1 - h) / 1.5, 0, 1)), 0, 10))`
- He feels: `F = k * G * (1 - pow(0.5, max(0, h - (1.2 - 0.25 * layers + 0.03 * (70 - room))) / 0.5)) * clamp((dur + 1 - (h - (1.2 - 0.25 * layers + 0.03 * (70 - room)))) / 1.5, 0, 1) - k * G * (1 - pow(0.5, max(0, h) / 0.5)) * clamp((dur + 1 - h) / 1.5, 0, 1)` → shown as cold and shivery / chilly / about right / hot and sweaty
- Constants: `k = 0.45`

**From sources** (each checked against the linked page)

- A fever happens when signalling chemicals (pyrogens) raise the body's temperature set point. A moderate fever is about 100.6–102.2 °F. — NIH National Library of Medicine (NCBI Bookshelf): Physiology, Fever (StatPearls) <https://www.ncbi.nlm.nih.gov/books/NBK562334/>
- In a fever, the body's thermostat resets at a higher temperature, mostly because of an infection. — MSD Manuals: Fever in Adults (MSD Manual Consumer Version) <https://www.msdmanuals.com/home/infections/biology-of-infectious-disease/fever-in-adults>
- Chills are the body's way of raising its core temperature; shivering muscles contract and relax, which warms the body. Many people feel chilled when they have a fever. — Cleveland Clinic: Chills <https://my.clevelandclinic.org/health/symptoms/21476-chills>
- Fever is an important part of the body's defence against infection. Body temperature is usually highest in the evening, and someone with chills should not be bundled up. — MedlinePlus (U.S. National Library of Medicine): Fever <https://medlineplus.gov/ency/article/003090.htm>
- Normal body temperature in healthy adults is generally between 97.8 °F and 99 °F. — Johns Hopkins Medicine: Vital Signs (Body Temperature, Pulse Rate, Respiration Rate, Blood Pressure) <https://www.hopkinsmedicine.org/health/conditions-and-diseases/vital-signs-body-temperature-pulse-rate-respiration-rate-blood-pressure>

**Our choices** (simplifications — please check these are fair)

- **The set point rises 0.45 °F for each step of 'fight'.** A fight of 7 gives a set point near 101.7 °F — a moderate fever — matching the 101 °F Tomás's thermometer reads as he is still warming up.
- **Body temperature lags the set point by about an hour.** Warming takes time; the lag is what creates the cold, shivery phase. Blankets and a warm room shorten it.
- **Shivering and sweating depend on the gap between body temperature and set point.** That's how a thermostat works: below the setting it heats, above the setting it cools.
- **A cooler room adds a little extra shivering.** A cold room takes heat away faster, but it can't create a fever by itself.

**Illustrative** (made-up numbers): The 0–10 'fight' scale, the 0–10 shivering and sweating scales, and Tomás's four hours until the fever eases are teaching values. Tomás is fictional; his normal temperature (98.6 °F) is a typical value.

**Still being studied:** Exactly how much a fever helps the body fight different germs is still being researched.

**Limits:** shows — Shows a fever as the brain's thermostat being turned up, not the body losing control; Shows why someone with a hot forehead can feel cold and shiver; Shows sweating when the fever eases and the thermostat goes back down. Does not — Measure anyone's temperature or say what to do about a fever; Include high or dangerous fevers; the model stays in the moderate range; Model the germs themselves or how long a real cold lasts.

**Wellbeing line:** A high fever, a fever that lasts more than a couple of days, or feeling very unwell is a reason to tell an adult.

**Case claims to check**

- Best answer: His immune system is fighting germs and has turned up the brain's thermostat, so at his normal temperature he feels too cold and shivers to heat up; when the fight eases, the thermostat drops and he sweats to cool off.
- Twist: A hot person shivering seems backwards. His body isn't too cold at all — his brain's thermostat has been turned up, so a normal temperature suddenly feels cold.
- Takeaway: A fever isn't the body losing control — it's the immune system turning the brain's thermostat up while it fights germs. Shivering heats you to the new target; sweating cools you down when the target drops again.
- Transfer: Nia, 14, has a cold. On a warm afternoon she suddenly gets goosebumps, wants a sweater, and her temperature reads 100.5 °F. → *Her immune system turned up her brain's thermostat, so her normal temperature now feels too cold and she tries to warm up.*

### The Flagpole Faint — Kofi's legs, veins and the muscle pump  ·  `muscle-pump`

*Level: Difficult*

When Kofi stands up, gravity pulls several hundred millilitres of blood down into his leg veins. Marching, his calf muscles squeezed those veins with every step and pushed blood back up to his heart. Standing at attention with knees locked, nothing squeezes, so blood collects in his legs, a little less returns to his heart, and less reaches his brain — until he feels woozy and his vision greys.

- Standing pools about 500 mL of blood in the legs within a few minutes; standing still for a long time adds more.
- Moving leg muscles squeeze the veins and cut the pooling; locked knees don't.
- The more blood pooled, the faster the heart beats to make up for it.
- Past a point, the brain gets a little less blood and he feels light-headed.
- Earlier marching doesn't add to the pooling; heat adds a bit.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes standing perfectly still** `m` · 0–40 min, case value 30 · source: Standing up shifts several hundred millilitres of blood down into the legs within minutes, and standing still for a long time adds more.
- *bubble* · **Leg movement** `w` · 0–2, case value 0 · source: The twist dial: each time leg muscles tighten, they squeeze the veins and push blood back up toward the heart. Moving legs make standing easier, not harder.
- *bubble* · **Minutes of marching earlier** `march` · 0–60 min, case value 60 · choice: Test the 'worn out from marching' idea: earlier marching makes his legs a bit tired, but that tiredness fades while he stands — it doesn't add to the blood in his legs.
- *bubble* · **Air temperature** `airT` · 40–95 °F, case value 55 · source: Test the 'the sun did it' idea: being too hot can make people faint, and heat adds to the pooling. But Kofi's morning was cool and cloudy.
- *factor* · **His resting heart rate** `Hrest` · 50–90 beats/min, case value 65 · source: Most people rest at 60–100 beats a minute; active teenagers can be lower.
- *factor* · **His height** `ht` · 150–190 cm, case value 175 · choice: A taller person has a longer column of blood above their feet, so a little more blood sinks into the legs.

**Formulas**

- Extra blood pooled in legs (mL): `P = (fast * (1 - pow(0.5, m / 1.5)) + slow * (1 - pow(0.5, m / 15))) * (ht / 175) * (1 - 0.3 * w) * (1 + 0.008 * max(0, airT - 65))`
- Heart rate (beats/min): `H = Hrest + 0.02 * (fast * (1 - pow(0.5, m / 1.5)) + slow * (1 - pow(0.5, m / 15))) * (ht / 175) * (1 - 0.3 * w) * (1 + 0.008 * max(0, airT - 65)) + 0.3 * max(0, airT - 70)`
- Blood flow to the brain (% of normal): `B = 100 - 0.04 * max(0, (fast * (1 - pow(0.5, m / 1.5)) + slow * (1 - pow(0.5, m / 15))) * (ht / 175) * (1 - 0.3 * w) * (1 + 0.008 * max(0, airT - 65)) - 550)`
- How he feels: `F = 100 - 0.04 * max(0, (fast * (1 - pow(0.5, m / 1.5)) + slow * (1 - pow(0.5, m / 15))) * (ht / 175) * (1 - 0.3 * w) * (1 + 0.008 * max(0, airT - 65)) - 550)` → shown as light-headed — sit down / a bit woozy / fine
- Leg tiredness from marching (0–10): `Ti = round(10 * (march / 60) * pow(0.5, m / 10))`
- Constants: `fast = 500`, `slow = 300`

**From sources** (each checked against the linked page)

- Calf muscles squeeze the deep veins in the calf to push blood upward toward the heart with each step, and one-way valves keep it flowing the right way. — Cleveland Clinic: Veins <https://my.clevelandclinic.org/health/body/23360-veins>
- Between 300 and 800 mL of blood pools in the legs on standing; a normal heart-rate rise on standing is about 10 beats a minute. — Duke University: DukeMoves TipSheet: Orthostatic Hypotension <https://www.safety.duke.edu/sites/default/files/DukeMoves-TipSheet-Orthostatic-Hypotension.pdf>
- On standing, about 800 mL of blood moves into the veins of the pelvis and legs; most of it within 10 seconds, and pooling is complete within three to five minutes. — BMJ Journals (R. Schondorf): Acetylcholinesterase inhibition in the treatment of hypotension (J Neurol Neurosurg Psychiatry 74:1187) <https://jnnp.bmj.com/content/74/9/1187>
- Fainting can happen after standing in one place for too long; raising the feet above heart level helps someone who has fainted. — MedlinePlus (U.S. National Library of Medicine): Fainting <https://medlineplus.gov/ency/article/003092.htm>
- Being too hot can cause fainting; if you feel faint, lie down with your legs raised or sit with your head low between your knees. — NHS: Fainting <https://www.nhs.uk/conditions/fainting/>
- Crossing the legs and tensing leg muscles while standing raised the heart's output and blood pressure in people who faint easily. — University of Minnesota Experts (abstract): Hemodynamic effects of leg crossing and skeletal muscle tensing during free standing in patients with vasovagal syncope (J Appl Physiol 98:584) <https://experts.umn.edu/en/publications/hemodynamic-effects-of-leg-crossing-and-skeletal-muscle-tensing-d/>

**Our choices** (simplifications — please check these are fair)

- **500 mL pools quickly and up to 300 mL more builds over half an hour.** The fast part matches the 300–800 mL range; the slow part stands for fluid seeping into leg tissue, which matches his puffy ankles. The exact amount varies a lot.
- **Each step of leg movement cuts pooling by 30%.** Moving muscles clearly help; we chose a size that makes the difference easy to see.
- **Brain blood flow falls only once pooling passes about 550 mL.** The body copes at first by speeding up the heart; light-headedness comes when that isn't enough. That fits woozy at 30 minutes, grey vision near 40.
- **Taller people pool slightly more.** A longer column of blood above the feet means more pressure in the leg veins.
- **Marching tiredness fades by half every 10 minutes and doesn't change pooling.** This lets you test the 'he was worn out' idea: the tiredness is gone by the time he feels faint.

**Illustrative** (made-up numbers): Kofi is fictional; his height, resting pulse and the brain-flow percentages are teaching values.

**Still being studied:** Why some people faint after standing still for a while and others never do is still being researched.

**Limits:** shows — Shows blood pooling in the legs the longer someone stands perfectly still; Shows leg-muscle movement squeezing veins and pushing blood back to the heart; Shows less blood reaching the brain when more of it sits in the legs. Does not — Measure any real person — Kofi is fictional; Include hunger, water or anyone's health; Model fainting itself; it stops at feeling light-headed.

**Wellbeing line:** If you feel light-headed while standing, sit or crouch down straight away and tell an adult.

**Case claims to check**

- Best answer: Standing still lets gravity pool blood in his legs; without leg muscles squeezing the veins, less blood gets back to his heart and up to his brain. Marching works those muscles, so it's easier.
- Twist: Everyone assumes the hour of marching wore him out. The opposite is true: marching kept his leg muscles pumping blood back up, and standing perfectly still was the hard part.
- Takeaway: Your leg muscles help your veins. Moving squeezes blood back up to the heart; standing perfectly still lets it pool — so marching is easier on your brain than standing at attention.
- Transfer: Ana, 16, volunteers at a museum ticket desk, standing still for hours. By evening her ankles are puffy and she feels woozy — but on days she walks the galleries as a guide, she feels fine. → *Standing still lets blood pool in her legs; walking makes her leg muscles pump it back up.*

### The Morning-Light Fix — Sofia's body clock and morning light  ·  `morning-light`

*Level: Difficult*

Sofia's brain has a master clock that decides when her sleep hormone, melatonin, arrives. Light reaching her eyes sets that clock. Bright light in the morning nudges it earlier — about a quarter of an hour each day — while her teenage clock keeps trying to slide later. Two weeks of sunrise practice add up to a clock that's about two and a half hours earlier, so she's sleepy by 10:30.

- An hour of bright morning light moves the clock about 15 minutes earlier each day.
- Dimmer light moves it less; bright light late in the evening moves it later instead.
- Her teenage clock slides back a few minutes each day, so only the difference adds up.
- Feeling sleepy comes earlier by the same amount the clock moves.
- Being tired from practice only shortens the time it takes to drop off.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Bright light each day** `L` · 0–60 min, case value 60 · source: Bright light reaching the eyes in the morning moves the body clock earlier, so sleepiness arrives earlier in the evening.
- *bubble* · **When the bright light comes** `when` · 0–1, case value 0 · source: The twist dial: the same bright light late in the evening pushes the clock the other way — later, and by even more.
- *bubble* · **Days of the routine** `d` · 1–14 days, case value 14 · choice: Each morning nudges the clock a little, so the change builds up over days rather than happening on the first night.
- *bubble* · **How tired practice makes her** `tired` · 0–10, case value 5 · choice: Test the 'practice tires her out' idea: being tired helps her drop off a few minutes sooner, but it doesn't move her body clock.
- *factor* · **How bright her mornings are** `sky` · 0.1–1, case value 1 · source: The brain's master clock responds to the amount of light the eyes receive; outdoor daylight is far brighter than indoor lamps.
- *factor* · **Her night-owl drift** `drift` · 0–8 min/day, case value 4 · source: During the teen years the body starts making its sleep hormone later, so the clock tends to slide later unless something pulls it back.

**Formulas**

- Body clock shifted earlier (min): `C = clamp(d * (15 * (L / 60) * sky * (1 - 3 * when) - drift * min(1, L / 15)), -150, 180)`
- Feels sleepy at: `T = clamp(d * (15 * (L / 60) * sky * (1 - 3 * when) - drift * min(1, L / 15)), -150, 180)` → shown as after 1:45 a.m. / about 1:00 a.m. / about 12:30 a.m. / about 11:45 p.m. / about 11:00 p.m. / about 10:30 p.m.
- Lying awake after a 10:30 p.m. bedtime (min): `F = max(0, 150 - clamp(d * (15 * (L / 60) * sky * (1 - 3 * when) - drift * min(1, L / 15)), -150, 180)) + 20 - 1.5 * tired`
- Bright light reaching the eyes (min): `B = L * sky`

**From sources** (each checked against the linked page)

- Bright morning light causes a phase advance, so people get sleepy earlier in the evening; bright evening light causes a delay. Morning light can shift the clock about 1 hour earlier per day and evening light about 2 hours later. — CDC / NIOSH: Module 2. Effects of Light on Circadian Rhythms (NIOSH training for nurses on shift work and long hours) <https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod2/19.html>
- A single 1-hour bright-light pulse on waking moved the clock about 15 minutes earlier on average; individual responses varied widely. — Circadian Sleep Disorders Network: The Phase Response Curve (PRC) <https://www.circadiansleepdisorders.org/info/PRC.php>
- The brain's master clock controls melatonin based on the amount of light the eyes receive; in the evening it makes more melatonin, causing sleepiness. Light and dark have the biggest influence on circadian rhythms. — NIH National Institute of General Medical Sciences: Circadian Rhythms <https://www.nigms.nih.gov/education/fact-sheets/Pages/circadian-rhythms.aspx>
- Teenagers develop a strong tendency to be night owls because their bodies start producing melatonin later; teens need 8 to 10 hours of sleep. — Sleep Foundation: Teens and Sleep <https://www.sleepfoundation.org/teens-and-sleep>

**Our choices** (simplifications — please check these are fair)

- **An hour of bright morning light moves the clock 15 minutes a day.** This matches the average 1-hour light pulse; it is well under the 1-hour-a-day maximum.
- **Her clock slides back 4 minutes a day.** Teen clocks tend to run late; with this drift, two weeks of practice moves her sleepy time from 1 a.m. to about 10:30 p.m., matching clue 4.
- **Evening light pushes the clock later by twice as much.** Evening light can shift the clock about 2 hours later a day, versus about 1 hour earlier for morning light.
- **Practice tiredness only shortens the 20 minutes it takes to drop off.** Tiredness builds sleep pressure, but clue 1 shows it didn't move her bedtime — the dial lets you check that.
- **Days add up in a straight line.** Over two weeks a steady routine adds a similar nudge each day; real clocks settle once they line up with the light.

**Illustrative** (made-up numbers): Sofia is fictional; her 1 a.m. sleepy time, her drift and the lying-awake minutes are teaching values.

**Still being studied:** Scientists are still working out how much the teenage shift toward later sleep comes from biology and how much from evening light and schedules.

**Limits:** shows — Shows bright morning light moving the body clock earlier; Shows the shift building over days of the routine; Shows an earlier clock meaning less time lying awake at night. Does not — Measure any real person — Sofia is fictional; Include caffeine, stress or weekend lie-ins; Say anything about sleep problems; everyone's clock drifts sometimes.

**Wellbeing line:** If you're exhausted every day no matter what you try, talk with an adult you trust.

**Case claims to check**

- Best answer: Bright light in the morning resets her brain's body clock earlier each day, so her sleep signal arrives earlier at night; dark mornings had let the clock drift late.
- Twist: Most people try to fix a late bedtime at night. Sofia's fix came from the other end of the day: bright light in the morning pulled her body clock earlier.
- Takeaway: Your body clock is set by light. Bright light in the morning pulls it earlier, so sleepiness arrives earlier at night — the best fix for a late bedtime starts at sunrise.
- Transfer: After a summer of sleeping until noon, Ben dreads the first week of school. His sister suggests he eats breakfast on the sunny porch every morning for the week before school starts. → *Bright morning light will pull his body clock earlier, so he gets sleepy at a normal bedtime.*

### The Popping Ears — Lucía's eardrums on the way down  ·  `ear-pressure`

*Level: Difficult*

Lucía's eardrum has air on both sides. During the flight the air behind it settles at the cabin's lower cruising pressure. As the plane comes down, the cabin pressure rises, pushes on the outside of the eardrum and bends it inward — muffled, then painful. A swallow or yawn opens the small Eustachian tube to her throat, air rushes in, and the pressure evens out with a pop.

- Cabin pressure rises steadily as the plane descends from its cruising cabin altitude.
- Without swallowing, the air behind the eardrum stays at the old, lower pressure, so the difference grows.
- Each swallow or yawn lets air in and shrinks the difference; a stuffy nose or a very small tube makes that harder.
- On the climb, the extra pressure behind the eardrum escapes down the tube by itself, so the difference stays small.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes into the change** `D` · 0–20 min, case value 10 · source: As the plane comes down, the cabin air pressure rises back toward ground level, while the air trapped behind her eardrum stays at the lower cruising pressure.
- *bubble* · **Swallows or yawns per minute** `S` · 0–6 per min, case value 1 · source: Swallowing or yawning opens the Eustachian tube and lets air into the middle ear to even out the pressure. Lucía swallows now and then; her brother, chewing gum, swallows many times a minute — gum makes swallowing easier.
- *bubble* · **Part of the flight** `dir` · 0–1, case value 0 · source: The twist dial: on the climb, the trapped air is at higher pressure and pushes its own way out down the tube. On the way down, the tube stays shut until she swallows — which is why most ear trouble happens on descent.
- *bubble* · **Her nose** `nose` · 0–1, case value 0 · source: A cold can block the Eustachian tube, so swallows let much less air through.
- *factor* · **Cabin 'altitude' while cruising** `cab` · 5000–8000 ft, case value 7000 · source: Airliner cabins are pressurised to match somewhere between 5,000 and 8,000 feet — lower pressure than on the ground.
- *factor* · **Age** `age` · 3–18 years, case value 14 · source: Young children have small Eustachian tubes that let air through less easily.

**Formulas**

- Pressure difference across the eardrum (mmHg): `P = (1 - dir) * (sea * pow(0.5, cab * (1 - D / 20) / half) - sea * pow(0.5, cab / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)) + dir * min(vent, (sea - sea * pow(0.5, cab * (D / 20) / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)))`
- Cabin air pressure (mmHg): `Pc = (1 - dir) * sea * pow(0.5, cab * (1 - D / 20) / half) + dir * sea * pow(0.5, cab * (D / 20) / half)`
- Eardrum: `E = (1 - dir) * (sea * pow(0.5, cab * (1 - D / 20) / half) - sea * pow(0.5, cab / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)) + dir * min(vent, (sea - sea * pow(0.5, cab * (D / 20) / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)))` → shown as barely pushed / pushed / pushed hard
- Ear feels: `K = (1 - dir) * (sea * pow(0.5, cab * (1 - D / 20) / half) - sea * pow(0.5, cab / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)) + dir * min(vent, (sea - sea * pow(0.5, cab * (D / 20) / half)) / (1 + 0.2 * S * D * (1 - 0.7 * nose) * min(1, 0.4 + age / 15)))` → shown as normal / blocked, voices muffled / painful
- Constants: `sea = 760`, `half = 18600`, `vent = 8`

**From sources** (each checked against the linked page)

- Airliner cabins are pressurised to an altitude between about 5,000 and 8,000 feet. On descent the cabin pressure rises while the air in the ear stays at the lower pressure, so the eardrum is forced inward and hearing is muffled; on the climb it bulges outward. — The Conversation: Why Ryanair passengers were bleeding from the ears <https://theconversation.com/why-ryanair-passengers-were-bleeding-from-the-ears-100043>
- Swallowing or yawning opens the Eustachian tube; sucking on candy or chewing gum makes swallowing easier. Symptoms include ear discomfort and muffled hearing; small Eustachian tubes in young children are a risk. — Mayo Clinic: Airplane ear: Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/airplane-ear/symptoms-causes/syc-20351701>
- Ear pressure injury is most often due to an aircraft's descent; during descent the Eustachian tubes need to be open to let the pressure equalise, usually by yawning or sucking sweets. — GPnotebook: Otic barotrauma <https://gpnotebook.com/pages/ear-nose-and-throat/otic-barotrauma>
- When the Eustachian tube is blocked, for example by a cold or an allergy, air can't get into the middle ear, its pressure stays low and the eardrum bulges inward, causing pain. — MSD Manuals: Barotrauma of the Ear (MSD Manual Consumer Version) <https://www.msdmanuals.com/home/ear-nose-and-throat-disorders/middle-ear-disorders/barotrauma-of-the-ear>
- At about 10,000 feet each breath holds about 69% of the oxygen it does at sea level, because the air pressure is lower. — CDC: High-Altitude Travel and Altitude Illness (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html>

**Our choices** (simplifications — please check these are fair)

- **Air pressure halves about every 18,600 feet.** This simple curve matches the 69% figure at 10,000 feet; it gives a cabin pressure of about 586 mmHg at a 7,000-foot cabin altitude and 760 mmHg on the ground.
- **The descent takes 20 minutes at a steady rate.** It matches the story: her ears start feeling blocked about twenty minutes before landing.
- **Swallowing shrinks the difference rather than wiping it out.** Each swallow opens the tube for only a moment, so frequent swallows keep the difference small while the cabin pressure keeps rising.
- **On the climb the difference can't grow past about 8 mmHg.** Higher pressure behind the eardrum pushes the tube open by itself; the exact opening pressure varies.
- **Muffled above 10 mmHg, painful above 30 mmHg.** Teaching thresholds; real people notice pressure at different points.

**Illustrative** (made-up numbers): Lucía is fictional; her one swallow a minute, the swallow effect and the comfort bands are teaching values.

**Still being studied:** Why some people's Eustachian tubes open much more easily than others' is still being researched.

**Limits:** shows — Shows the pressure difference building as the cabin pressure rises during the descent; Shows each swallow or yawn letting air through a small tube to even it out; Shows why the descent, not the climb, is usually the uncomfortable part. Does not — Measure any real person or plane — Lucía is fictional; Show how a real eardrum moves or how much it can stretch; Model diving, where the pressure changes much faster.

**Wellbeing line:** Ear pain that doesn't go away after landing is a reason to tell an adult.

**Case claims to check**

- Best answer: As the plane descends, the air pressure in the cabin rises but the air behind her eardrum stays at the lower pressure, so the eardrum is pushed in — until swallowing or yawning opens a small tube that lets air in to even it out.
- Twist: Most people expect the climb to hurt because the plane is going up. It's actually the descent, when the cabin air pushes harder on the eardrum than the air trapped behind it — and a swallow fixes it.
- Takeaway: Your eardrum has air on both sides. When the outside pressure rises — a plane coming down, or diving deeper — the eardrum gets pushed in until a swallow or yawn opens a small tube and evens the pressure out.
- Transfer: Yusuf, 14, swims down to the bottom of the deep end and his ears start to hurt. When he gently swallows, they pop and feel better. → *Deeper water pushes harder on his eardrums than the air trapped behind them; swallowing opens the tube and lets air in to even the pressure.*

### The Recorded Voice — Malik's voice: through the air and through bone  ·  `bone-conduction`

*Level: Difficult*

When Malik talks, his voice reaches his inner ears two ways: through the air, like everyone else hears it, and straight through the bones of his skull. The bone route adds extra deep, low sound, so his voice seems richer to him. A microphone, and his friends, only get the air route. That's why the recording sounds thinner to Malik but exactly right to everyone else.

- The bone route adds the most at low pitches and less and less at higher ones.
- Only the speaker hears the bone route; listeners and microphones don't.
- Plugging the ears traps the low bone-carried sound and adds up to about 25 dB below 1,000 Hz.
- A phone mic trims a little of the lowest bass, but not enough to change what friends recognise.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Pitch of the sound** `f` · 100–1000 Hz, case value 300 · source: When you speak, the bones and tissues of your head carry your voice straight to your inner ears, and they boost the low, deep pitches most.
- *bubble* · **Who is listening** `L` · 0–1, case value 0 · source: The twist dial: only the person speaking gets the bone route. Friends and the microphone hear only the sound through the air — the version on the recording.
- *bubble* · **His ears** `plug` · 0–1, case value 0 · source: Blocking the ear canal traps the deep sound carried through bone, so his own voice gets louder and boomier — the 'occlusion effect'. Fingers pressed in make a fairly good seal.
- *bubble* · **Microphone** `mic` · 0–1, case value 1 · choice: Test the 'cheap microphone' idea: a phone mic loses a little of the very lowest bass, but the recording still matches what his friends hear.
- *factor* · **Main pitch of his speaking voice** `v0` · 100–300 Hz, case value 200 · choice: A deeper voice has more of its sound in the low pitches that bone boosts most. At 14, Malik's voice is somewhere in the middle and still changing.
- *factor* · **How strongly his head carries sound** `k` · 0.7–1.3, case value 1 · source: How much sound travels through bone differs from person to person, so some people notice the difference on recordings more than others.

**Formulas**

- Extra loudness through bone (dB): `B = (1 - L) * k * (8 * pow(f / 100, -0.6) + 25 * plug * seal * clamp((1000 - f) / 750, 0, 1))`
- His voice sounds, compared with the recording: `S = (1 - L) * k * (8 * pow(v0 / 100, -0.6) + 25 * plug * seal * clamp((1000 - v0) / 750, 0, 1))` → shown as about the same / a bit deeper / much deeper
- Recording matches what friends hear (%): `Rec = 100 - 6 * mic * clamp((250 - v0) / 150, 0, 1)`
- What a recording captures: always shown as "air route only"
- Constants: `seal = 0.8`

**From sources** (each checked against the linked page)

- Much of your own voice is conducted through your skull bones, and bone conduction boosts the lower frequencies, so your voice sounds deeper and richer to you; the recording sounds thinner and higher. — Popular Science (from The Conversation, by Neel Bhatt, University of Washington): Why your voice sounds weird on recordings <https://www.popsci.com/science/why-your-voice-sounds-weird-on-recordings/>
- Bones and tissues in your head carry sound waves directly to the cochlea and enhance lower-frequency vibrations; a recording captures what other people are used to hearing. — Wonderopolis (National Center for Families Learning): Why Does My Voice Sound Different on a Recording? <https://wonderopolis.org/wonder/why-does-my-voice-sound-different-on-a-recording>
- Sealing the ear canal increases low-frequency sound from your own voice by roughly 20–30 dB at 250 Hz, and the amount varies from person to person. — The Hearing Review (Wayne J. Staab): Solving the occlusion effect <https://hearingreview.com/hearing-products/accessories/earmolds/solving-the-occlusion-effect>
- The occlusion effect — the boost when the ear is covered — is greatest for frequencies below 1,000 Hz, because sound normally vented from the ear canal is trapped. — The Hearing Review: Rethinking hearing aid occlusion <https://hearingreview.com/practice-building/practice-management/rethinking-hearing-aid-occlusion>

**Our choices** (simplifications — please check these are fair)

- **With open ears, bone adds about 8 dB at 100 Hz, falling to about 2 dB at 1,000 Hz.** Sources agree the boost is biggest at low pitches; the exact sizes vary from person to person.
- **Fingers in the ears add 20 dB at 250 Hz (a sealed ear adds about 25), fading to nothing by 1,000 Hz.** Matches the 20–30 dB measured at 250 Hz and the effect being greatest below 1,000 Hz.
- **A phone mic lowers the match by up to 6%, more for deeper voices.** Phone mics pick up less of the deepest bass; we kept the effect small, because friends say the recording sounds exactly like him.
- **His voice's main pitch is 200 Hz.** A typical value for a teenage voice that is still changing.

**Illustrative** (made-up numbers): Malik is fictional; the 'match' percentage and the deepness bands are teaching values.

**Still being studied:** How the brain combines the air and bone routes into the voice we recognise as our own is still being researched.

**Limits:** shows — Shows your own voice reaching your ears through bone as well as through the air; Shows the bone route adding mostly low, deep sound; Shows plugging your ears making the bone route louder. Does not — Measure any real person or any real microphone — Malik is fictional; Include hearing problems or how the brain processes voices; Say how anyone's voice should sound.

**Wellbeing line:** If your own voice suddenly sounds very loud or echoey to you and it doesn't go away, tell an adult.

**Case claims to check**

- Best answer: Malik hears his own voice two ways — through the air and through the bones of his skull, which carry the deep sounds best. The recording only catches the air route, which is what everyone else hears.
- Twist: The voice you hear in your head isn't the one other people hear. The 'weird' recording is the accurate one — the voice in your head has extra deep sound carried through bone.
- Takeaway: You hear your own voice through the air and through the bones of your head, which add deep tones. A recording catches only the air — so the strange-sounding playback is how everyone else hears you.
- Transfer: When Inés eats crunchy chips, the crunching sounds really loud to her — but her friend across the table can barely hear it. → *The crunch travels through the bones of Inés's jaw and skull straight to her ears, a route her friend's ears don't get.*

### The Snowball Hands — Freya's fingers in the snow  ·  `cold-hands`

*Level: Difficult*

In the cold, Freya's body first squeezes the blood vessels in her bare fingers almost shut to save heat — so they go white and ache. After several minutes it opens them again in bursts, sending warm blood to protect the fingers. That is why her hand turns red and feels hot while it's still in the snow. A warm body reopens them sooner; a glove means it never has to.

- At first, colder snow squeezes the finger blood vessels harder, so blood flow drops.
- After several minutes (sooner when her body is warm) the vessels reopen and warm blood flows back.
- A warmer core — from moving about, a coat or milder air — makes the reopening stronger.
- A glove cuts heat loss, so blood flow stays near normal the whole time.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes holding snow bare-handed** `M` · 5–20 min, case value 12 · source: In real tests the fingers' blood vessels usually start reopening after about 5–10 minutes of local cold.
- *bubble* · **Snow temperature** `C` · 15–32 °F, case value 25 · choice: Colder snow pulls heat out faster, so the vessels squeeze harder at first.
- *bubble* · **How warm her body is** `Wm` · 0–2, case value 1 · source: When the body's core is warm, the finger vessels reopen sooner and more strongly — the body can afford to send heat to the fingers.
- *bubble* · **Hand covering** `G` · 0–2, case value 0 · choice: A glove slows heat loss, so the fingers never need the squeeze-then-burst response — like Freya's gloved hand.
- *factor* · **Air temperature** `Tair` · 0–40 °F, case value 28 · choice: Colder air chills her whole body, which weakens the reopening.
- *factor* · **Coat** `K` · 0–1, case value 1 · choice: A warm coat keeps her core warm, which helps the fingers reopen.

**Formulas**

- Blood flow to fingers (% of normal): `F = (100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + (((100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + 60 * ((40 - C) / 25) * (1 - 0.425 * G) * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4)) - (100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G))) * clamp((M - (12 - 4 * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4))) / 4, 0, 1)`
- Finger skin temperature (°F): `T = C + (88 - C) * 0.6 * ((100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + (((100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + 60 * ((40 - C) / 25) * (1 - 0.425 * G) * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4)) - (100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G))) * clamp((M - (12 - 4 * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4))) / 4, 0, 1)) / 100`
- Fingers look: `R = (100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + (((100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G)) + 60 * ((40 - C) / 25) * (1 - 0.425 * G) * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4)) - (100 - 75 * ((40 - C) / 25) * (1 - 0.425 * G))) * clamp((M - (12 - 4 * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4))) / 4, 0, 1)` → shown as white, aching / turning pink / red, feel hot
- Reopening starts after (min): `O = (12 - 4 * clamp(0.35 * Wm + 0.3 * K + (Tair - 10) / 60, 0, 1.4))`

**From sources** (each checked against the linked page)

- In cold, finger blood vessels open up again after about 5–10 minutes; this is called cold-induced vasodilation. — PubMed Central: Relation between finger cold-induced vasodilation and rewarming speed after cold exposure (European Journal of Applied Physiology) <https://pmc.ncbi.nlm.nih.gov/articles/PMC6342884>
- Squeezing and opening alternate in waves — scientists call it the 'hunting response' — and the opening raises finger blood flow and skin temperature. — PubMed Central: Relation between finger cold-induced vasodilation and rewarming speed after cold exposure (European Journal of Applied Physiology) <https://pmc.ncbi.nlm.nih.gov/articles/PMC6342884>
- When the body's core is warm, the reopening starts sooner; core temperature has a large effect on blood flow to the fingers in the cold. — PubMed Central: Relation between finger cold-induced vasodilation and rewarming speed after cold exposure (European Journal of Applied Physiology) <https://pmc.ncbi.nlm.nih.gov/articles/PMC6342884>
- Fingers are among the body parts most at risk of frostbite; white or grayish-yellow, numb skin is a warning sign. — CDC: Preventing Frostbite <https://cdc.gov/winter-weather/prevention/preventing-frostbite.html>

**Our choices** (simplifications — please check these are fair)

- **The waves are averaged into one smooth rise.** The real response switches on and off every few minutes (clue 4); one smooth curve keeps the chart readable.
- **Reopening starts at 12 minutes minus up to 5 for a warm body.** This keeps the start inside the 5–10 minute range reported, and earlier when the core is warm.
- **Air, coat and movement are combined into one 'body warmth' number.** They all act through the same thing — how warm the body core is.
- **Finger temperatures are rough.** Real finger temperatures depend on wetness, wind and hand size.

**Illustrative** (made-up numbers): Freya's 12 minutes, 25°F snow, 28°F air and the blood-flow percentages are made up for a fictional story. How much a glove or coat changes things is an illustrative guess.

**Still being studied:** Why some people have a strong reopening response and others hardly any is still being studied.

**Limits:** shows — Shows finger blood flow dropping in the cold, then rising again as the body reopens the vessels; Shows a warm body reopening them sooner and more strongly; Shows a glove removing the need for the response. Does not — Measure any real person — Freya is fictional; Show the on-off waves one by one, or wind and wet gloves; Model frostbite or any injury.

**Wellbeing line:** White or grayish, numb fingers are a warning sign of frostbite — go somewhere warm and tell an adult.

**Case claims to check**

- Best answer: Cold first shuts down blood flow to her bare fingers, but after a while her body opens the finger blood vessels in bursts to send warm blood and protect them — so they turn red and feel hot.
- Twist: Her hands feel hot while they're buried in snow — the opposite of what cold should do. The body briefly reopens finger blood vessels on purpose to stop them getting too cold.
- Takeaway: In the cold, your body first saves heat by shutting off blood to your fingers — then, to protect them, it opens the vessels in bursts and sends warm blood back. That's why cold hands can suddenly feel hot.
- Transfer: Lars, 15, goes ice fishing and handles wet lines with bare hands. After a while his fingers turn red and tingle with warmth, even though the water is freezing. → *His body opened the blood vessels in his cold fingers in bursts to send warm blood and protect them.*

### The Stage-Fright Singer — Ava's alarm system before a solo  ·  `stress-response`

*Level: Difficult*

When Ava's brain decides the solo is a big moment, it sounds an alarm: the adrenal glands release adrenaline. That one chemical makes her heart beat faster, her palms sweat and her hands tremble — all at once, while she stands perfectly still. After the song the body's calming system brakes the alarm, and every sign fades together within minutes. Singing solos more often makes the alarm smaller.

- The bigger the moment feels, the more adrenaline is released.
- Adrenaline raises heart rate toward her maximum (about 220 − age) — up to nearly half the gap from resting.
- The same adrenaline brings sweaty palms, a dry mouth and, at high levels, shaky hands.
- After the moment passes, adrenaline halves about every 3 minutes.
- Each solo she has sung before makes the alarm a little smaller.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How big the moment feels** `X` · 0–10, case value 9 · source: The brain's alarm reacts to how important a moment seems, not to any real danger.
- *bubble* · **Minutes after the song** `R` · 0–30 min, case value 0 · source: Once the moment passes, the body's calming system brakes the alarm and everything settles.
- *bubble* · **Solos she has sung before** `Pn` · 0–20, case value 1 · source: Facing a worrying situation again and again gradually makes the alarm smaller.
- *bubble* · **Stage-light heat** `L` · 0–2, case value 1 · choice: Test the 'hot lights' idea: heat adds a little sweat and a few heartbeats, but no dry mouth and no shaking.
- *factor* · **Age** `age` · 11–18 years, case value 15 · source: Maximum heart rate drops slowly with age (about 220 minus age), which limits how high it can climb.
- *factor* · **Resting heart rate** `Hrest` · 50–90 beats/min, case value 70 · source: Most people rest at 60–100 beats a minute; very active people can be lower.

**Formulas**

- Adrenaline (% above calm): `A = 100 * (X / 10) * (1 - 0.5 * Pn / (Pn + 5)) * pow(0.5, R / 3)`
- Heart rate (beats/min): `H = Hrest + (220 - age - Hrest) * 0.45 * (X / 10) * (1 - 0.5 * Pn / (Pn + 5)) * pow(0.5, R / 3) + 3 * L`
- Sweaty palms: `W = 100 * (X / 10) * (1 - 0.5 * Pn / (Pn + 5)) * pow(0.5, R / 3) + 10 * L` → shown as dry / a little damp / damp
- Mouth: `Y = 100 * (X / 10) * (1 - 0.5 * Pn / (Pn + 5)) * pow(0.5, R / 3)` → shown as normal / dry
- Shaky hands (0–10): `S = round(10 * clamp(((X / 10) * (1 - 0.5 * Pn / (Pn + 5)) * pow(0.5, R / 3) - 0.3) / 0.6, 0, 1))`

**From sources** (each checked against the linked page)

- Adrenaline is released when you are suddenly scared or stressed; your heart beats faster and you breathe faster. — Cleveland Clinic: Adrenaline <https://my.clevelandclinic.org/health/body/23038-adrenaline>
- Adrenaline makes the heart beat faster, muscles tense and sweat appear, and these changes happen before we are even aware of them. — Harvard Health Publishing: Understanding the stress response <https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response>
- After the moment passes, the body's calming (parasympathetic) system brakes the stress response. — Harvard Health Publishing: Understanding the stress response <https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response>
- Stress hormones such as adrenaline can cause a faster heartbeat, sweating and shaking; slowly building up time in worrying situations gradually reduces anxiety. — NHS: Overcoming fears <https://www.nhs.uk/conditions/stress-anxiety-depression/overcoming-fears/>
- A resting heart rate of 60–100 is normal for most people, and maximum heart rate is about 220 minus age. — American Heart Association: Target Heart Rates Chart <https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates>

**Our choices** (simplifications — please check these are fair)

- **Adrenaline halves every 3 minutes.** This matches clue 4 (pulse back near 75 about ten minutes after). Real hormones fade at different speeds.
- **The alarm shrinks by up to half with practice.** Practice helps, but the exact amount varies a lot from person to person.
- **A dry mouth is tied to the same adrenaline level.** The alarm slows digestion, including saliva; we treat it as switching on above a set level.
- **Stage lights add only a few beats and some sweat.** Heat raises sweating and heart rate a little, but doesn't cause dry mouth or shaking — that's what the dial lets you test.

**Illustrative** (made-up numbers): Ava's resting pulse of 70, her 120 backstage and the 0–10 scales are made up for a fictional character.

**Still being studied:** Exactly why practice shrinks the alarm so much for some people and less for others is still being studied.

**Limits:** shows — Shows one chemical changing heart, sweat, mouth and hands at the same time; Shows the response growing with how big the moment feels, and fading after; Shows practice making the alarm smaller. Does not — Measure any real person — Ava is fictional; Say anything about anxiety conditions; this is the everyday pre-performance response; Model long-lasting stress.

**Wellbeing line:** Nerves before a big moment are normal and pass. If worry gets in the way of everyday life, talk with an adult you trust.

**Case claims to check**

- Best answer: Her brain judged the solo as a big moment and released adrenaline, which gets the whole body ready to act at once — heart, sweat, mouth — and fades within minutes when the moment passes.
- Twist: Usually 'she's nervous' is the lazy wrong answer in these cases. Here the nerves really are the cause — the job is to explain how a thought becomes a racing heart, sweaty palms and a dry mouth all at once.
- Takeaway: Your brain has an alarm system. When it judges a moment as big, one chemical — adrenaline — changes heart, sweat and mouth all at once to get you ready, and it fades within minutes when the moment passes.
- Transfer: Eli is waiting to take a driving test. Sitting in the parked car he notices his heart thumping, his hands clammy on the wheel and a dry mouth. → *His brain has judged the test as a big moment and released adrenaline, so his heart, sweat glands and mouth all respond at once.*

### The Thirsty Swimmer — Kenji's water budget in the pool  ·  `pool-water`

*Level: Difficult*

Hard swimming makes Kenji's muscles hot, so he sweats — but the pool washes the sweat away, so he never notices. His skin doesn't drink the pool water back in, and his water bottle stayed full. So more water left than came in: about a pound and a half in two hours. His kidneys save water (less, darker pee) and his brain makes him thirsty.

- Sweat rises with how hard he swims and how warm the pool is.
- Water lost = sweat minus what he drinks, added up over the hours.
- The more water lost compared with his body size, the less pee his kidneys make.
- Losing about half a percent of body weight in water brings thirst; more brings strong thirst.
- On land he'd see the sweat; in the pool it's hidden, but it still leaves.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours of hard swimming** `t` · 0–3 h, case value 2 · source: Swimmers sweat too — studies of in-water training average roughly a third of a litre an hour — so every hour adds to the water he loses.
- *bubble* · **Water he drinks** `W` · 0–4 cups/h, case value 0.25 · source: Only drinking puts water back. Advice for active people outdoors is 6–12 ounces (about 1–1.5 cups) every 10–15 minutes.
- *bubble* · **Pool water temperature** `Tw` · 78–92 °F, case value 84 · source: Warmer water cools the body less, so swimmers sweat more: in one study sweat went from about 0.45 to 1.07 litres an hour between a 29 °C and a 33 °C pool.
- *bubble* · **Where he trains** `land` · 0–1, case value 0 · choice: The twist dial: on land he would see and feel the sweat. In the pool the same kind of water loss is hidden, so it's easy to think none is happening.
- *factor* · **How hard the practice is** `e` · 0.7–1.3, case value 1.3 · source: Harder swimming makes more body heat, so he sweats more.
- *factor* · **His body weight** `m` · 40–80 kg, case value 60 · choice: The same amount of lost water is a bigger share of a smaller body.

**Formulas**

- Sweat (litres/hour): `S = e * ((1 - land) * 0.31 * pow(2.4, (Tw - 84.2) / 7.2) + land * 0.9)`
- Weight lost (pounds): `Lb = 2.2 * (e * ((1 - land) * 0.31 * pow(2.4, (Tw - 84.2) / 7.2) + land * 0.9) - W * cup) * t`
- Body water left (% of normal): `L = 100 * (1 - (e * ((1 - land) * 0.31 * pow(2.4, (Tw - 84.2) / 7.2) + land * 0.9) - W * cup) * t / (bodyWater * m))`
- Sweat he notices: `Vis = land * e * 0.9` → shown as none — the pool hides it / dripping
- Pee (mL/hour): `U = 60 * clamp(1 - 100 * (e * ((1 - land) * 0.31 * pow(2.4, (Tw - 84.2) / 7.2) + land * 0.9) - W * cup) * t / m / 1.2, 0.2, 1.5)`
- Thirst: `Th = 100 * (e * ((1 - land) * 0.31 * pow(2.4, (Tw - 84.2) / 7.2) + land * 0.9) - W * cup) * t / m` → shown as not yet / thirsty / very thirsty
- Constants: `cup = 0.237`, `bodyWater = 0.6`

**From sources** (each checked against the linked page)

- Swimmers sweat: studies of in-water training averaged about 0.3–0.4 litres an hour; sweat rises with water temperature (about 0.45 L/h in a 29 °C pool vs 1.07 L/h at 33 °C) and with intensity. — Precision Hydration: Do you sweat when you swim? <https://www.precisionhydration.com/performance-advice/hydration/do-you-sweat-when-you-swim/>
- Oil from glands in the skin helps stop it absorbing too much water when you swim. — Cleveland Clinic: Skin <https://my.clevelandclinic.org/health/body/10978-skin>
- Lots of sweating reduces the body's water level; thirst means you are already mildly dehydrated; dark-coloured pee and headache are signs. — Cleveland Clinic: Dehydration <https://my.clevelandclinic.org/health/treatments/9013-dehydration>
- Dehydration can come from sweating while exercising in hot weather and not drinking enough; signs include thirst, darker yellow urine, not urinating much and headache. — MedlinePlus (U.S. National Library of Medicine): Dehydration <https://medlineplus.gov/ency/article/000982.htm>
- ADH, released from the pituitary at the base of the brain, acts on the kidneys to control how much water leaves in urine. — MedlinePlus (U.S. National Library of Medicine): Antidiuretic hormone blood test <https://medlineplus.gov/ency/article/003702.htm>

**Our choices** (simplifications — please check these are fair)

- **Kenji sweats about 0.4 litres an hour in an 84 °F pool during sprints.** That's within the swimming studies and matches clue 2: about 1.5 pounds lighter after two hours with almost nothing to drink.
- **Body water is 60% of body weight.** A typical value for a teenager; the page we used says up to 78% in some people.
- **Pee falls from 60 mL an hour toward a fifth of that as water loss nears 1.2% of body weight.** That's how ADH works — the kidneys hold water back — but the exact numbers vary from person to person.
- **Thirst starts at about 0.5% of body weight lost.** Thirst is an early sign; we picked a threshold that makes Kenji clearly thirsty after practice.
- **Running on land would mean about 0.9 litres of visible sweat an hour.** Land athletes usually sweat more than swimmers; the dial is mainly there to show that sweat can be hidden.

**Illustrative** (made-up numbers): Kenji is fictional; his weight, pee amounts and thirst bands are teaching values. The model ignores water lost in breath and the small amount the skin might take in.

**Still being studied:** How much the skin itself takes in or lets out during long swims is still being measured.

**Limits:** shows — Shows water leaving the body as sweat even while swimming; Shows that only drinking puts water back; Shows the kidneys saving water and thirst growing as water is lost. Does not — Measure any real person — Kenji is fictional; Include salt lost in sweat or water lost in breath; Say how much any particular person should drink.

**Wellbeing line:** Bring a water bottle and sip it during practice. Feeling dizzy, confused or very unwell after exercise is a reason to tell an adult right away.

**Case claims to check**

- Best answer: Hard swimming made him sweat, the pool hid it, and he drank almost nothing, so more water left his body than came in.
- Twist: He was surrounded by water the whole time, so 'dehydrated' sounds impossible — but skin doesn't drink pool water, and sweat hidden in the pool still leaves the body.
- Takeaway: Your water budget doesn't care what's around you. Hard work makes you sweat even in a pool or an ice rink, and only what you drink puts water back.
- Transfer: Ingrid, 16, plays a hard hockey game in an icy rink, sweating under heavy pads. Afterwards she's very thirsty and confused — “It was freezing in there, how could I lose water?” → *She sweated under her pads during hard play and drank little — cold or wet surroundings don't stop water leaving the body.*

### The Upside-Down Drinker — Leila's swallow, whichever way up  ·  `swallow-wave`

*Level: Difficult*

Swallowing isn't water falling into Leila's stomach. Once she swallows, rings of muscle along her 25-cm food tube squeeze one after another, pushing the water ahead of them — like toothpaste squeezed along a tube. Gravity only helps a little when she's upright. So upside down the water still arrives; it just takes a few seconds longer, especially for thick drinks.

- The muscle wave delivers the sip whichever way up she is.
- Gravity's help goes from full (standing) to none (lying) to working against her (handstand).
- Each sip takes about 6 seconds upright and a few seconds longer lying down or upside down; thick drinks take longer.
- Big gulps upside down lose a little; with the squeeze switched off, only gravity would work — and upside down it would fail.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Body angle** `a` · 0–180 °, case value 180 · choice: Tipping over turns gravity from helping, to sideways, to pulling the wrong way.
- *bubble* · **Size of each sip** `v` · 1–3, case value 1 · choice: Bigger gulps are harder to squeeze along against gravity.
- *bubble* · **How thick the drink is** `Kt` · 0–1, case value 0 · source: Thick drinks take longer to travel down the food tube than thin ones.
- *bubble* · **Muscle squeeze** `Q` · 0–1, case value 1 · choice: A thought experiment: switch the muscle wave off and see whether gravity alone could get the water there.
- *factor* · **Height** `ht` · 140–190 cm, case value 160 · source: Taller people have a longer food tube — about 25 cm in an adult.
- *factor* · **Where she is** `g` · 0–1, case value 1 · source: Swallowing doesn't depend on gravity — astronauts eat and drink in orbit.

**Formulas**

- Each sip reaching the stomach (%): `S = Q * clamp(100 - 3 * (v - 1) * max(0, -g * (1 - 2 * a / 180)), 0, 100) + (1 - Q) * clamp(100 * g * (1 - 2 * a / 180), 0, 100)`
- Time to reach the stomach (s): `T = (ht / 170) * (7.6 - 1.5 * g * (1 - 2 * a / 180) + Kt * (0.95 + 0.45 * g * (1 - 2 * a / 180)))`
- Gravity's help (% (negative = against)): `Gh = 100 * g * (1 - 2 * a / 180)`
- Squeeze waves (per minute): `Qw = 12 * Q`

**From sources** (each checked against the linked page)

- Once you begin swallowing it becomes automatic; peristalsis pushes food down the esophagus — the muscle behind the food squeezes while the muscle ahead relaxes. — NIDDK (NIH): Your Digestive System & How It Works <https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works>
- Swallowing does not depend on gravity: people swallow lying down and astronauts eat and drink in orbit; on Earth gravity gives only subtle help. — Binghamton University (The Conversation): Spaceflight could change how astronauts swallow, eat and drink in subtle ways <https://www.binghamton.edu/news/story/6386/spaceflight-could-change-how-astronauts-swallow-eat-and-drink-in-subtle-ways-binghamton-expert-explains>
- In a study, food took longer to travel down the esophagus lying down than sitting; sitting, a thick paste took about 7.5 s and a liquid about 6.1 s. — SciELO: Effect of swallowed bolus viscosity and body position on esophageal transit, contraction and perception of transit (Arquivos de Gastroenterologia) <https://scielo.br/j/ag/a/CMmxSJthQjW8DkD6CSvxZgx/?lang=en>
- The esophagus is a muscular tube about 25 cm (10 inches) long. — National Cancer Institute SEER Training: Anatomy of the Esophagus <https://www.training.seer.cancer.gov/ugi/anatomy/esophagus.html>

**Our choices** (simplifications — please check these are fair)

- **Upside-down times are extended from the lying-down numbers.** The study measured sitting and lying, not handstands; we continued the same trend.
- **Tilt changes gravity's help in a straight line.** Real help follows the angle more smoothly; a straight line keeps the dial simple.
- **The food tube is scaled with height.** Tube length roughly follows body size; 25 cm is the adult figure.
- **Switching the squeeze off is imaginary.** It lets you test hypothesis C: if gravity did the work, upside-down sips would never arrive.

**Illustrative** (made-up numbers): Leila's height, her sip sizes and the small loss for big upside-down gulps are made up for a fictional story.

**Limits:** shows — Shows that the muscle wave, not gravity, delivers each sip; Shows gravity helping, then hindering, as she tips over; Shows thick drinks travelling more slowly. Does not — Measure any real person — Leila is fictional; Model choking or anything going the wrong way; Show the separate muscles of the throat.

**Wellbeing line:** Eat and drink sitting up in everyday life; if swallowing ever hurts or feels stuck, tell an adult.

**Case claims to check**

- Best answer: Swallowing is done by muscles: rings of muscle in the food tube squeeze in a wave that pushes food and water to the stomach, so it works whichever way up you are — gravity only helps a little.
- Twist: Most people think food and drink fall down into the stomach. They don't: muscles squeeze them along, which is why Leila — and astronauts in space — can swallow upside down.
- Takeaway: Swallowing is a muscle job, not a gravity job. Rings of muscle squeeze food and drink along in a wave — which is why astronauts can eat in space and you can swallow upside down.
- Transfer: At the zoo, Orla watches a giraffe drink from a pond. Its head is far below its stomach, yet the water travels all the way up its long neck. → *Muscle waves in the giraffe's long food tube squeeze the water upward to its stomach.*

### The All-Nighter — Chloe's sleep, memory and focus  ·  `sleep-memory`

*Level: Complex* · *systems: Brain & sleep + Brain & memory*

Two things happened to Chloe. First, memory: the brain strengthens what you've learned while you sleep, so the facts she crammed on Thursday, followed by only three hours of sleep, were stored far less well than Wednesday's, which had a full night. Second, alertness: with so little sleep she reacts more slowly and loses focus. Teens need about 8–10 hours a night.

- Studying is stored better the closer she gets to a full night's sleep (8–10 hours).
- With a full night, about 95% is stored; with almost none, about a third — the 40% gap reported in sleep studies.
- Facts recalled = what she studied × how much was stored; Wednesday's facts had a full night.
- Alertness falls with each hour of sleep she's short, more after several short nights in a row.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours of sleep after studying** `S` · 2–10 h, case value 3 · source: Sleep after learning is when the brain strengthens new memories.
- *bubble* · **Hours crammed on Thursday** `T` · 0–6 h, case value 5 · choice: More studying means more facts to store — but only what sleep saves will stick.
- *bubble* · **Hours studied on Wednesday** `W` · 0–3 h, case value 1 · source: Wednesday's studying was followed by a full night's sleep, so it had time to be stored.
- *bubble* · **Short nights in a row** `N` · 1–5, case value 1 · source: Missed sleep adds up night after night, slowing reactions and focus more each day.
- *bubble* · **Hours awake by test time** `Aw` · 1–8 h, case value 3 · choice: The longer she's been up, the harder it is to stay sharp on so little sleep.
- *factor* · **Sleep she needs** `need` · 8–10 h, case value 9 · source: Teens need about 8–10 hours a night.
- *factor* · **Age** `age` · 13–18 years, case value 16 · choice: Younger teens tend to need the top of the 8–10 hour range.

**Formulas**

- Thursday's studying stored (%): `M = 35 + 60 * min(1, S / (need + 0.2 * (16 - age)))`
- Facts she can recall (of 10 per hour studied): `R = round(10 * T * (35 + 60 * min(1, S / (need + 0.2 * (16 - age)))) / 100 + 9 * W)`
- Alertness in the test (0–10): `A = clamp(10 - 8 * max(0, 1 - S / (need + 0.2 * (16 - age))) * (1 + 0.25 * (N - 1)) - 0.25 * max(0, Aw - 3), 1, 10)`

**From sources** (each checked against the linked page)

- Teens aged 13–18 should get 8 to 10 hours of sleep per 24 hours. — CDC: Sleep in Middle and High School Students <https://archive.cdc.gov/www_cdc_gov/healthyschools/features/students-sleep.htm>
- People kept awake all night before learning remembered new images 19% worse on average, and up to 40% worse, than well-rested people. — Harvard Gazette: Study shows importance of sleep for optimal memory functioning <https://news.harvard.edu/gazette/story/2007/02/study-shows-importance-of-sleep-for-optimal-memory-functioning>
- During a night of sleep some memories are strengthened; you can't pull an all-nighter and still learn effectively. — NIH News in Health: Sleep On It <https://newsinhealth.nih.gov/node/1481>
- Sleep-deficient people react more slowly, make more mistakes and have trouble focusing. — NHLBI (NIH): Sleep Deprivation and Deficiency: How Sleep Affects Your Health <https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects>

**Our choices** (simplifications — please check these are fair)

- **Storage rises in a straight line up to her full sleep need.** Real memory gains aren't even across the night; a straight line shows 'more sleep, more stored'.
- **About 10 facts per hour of studying.** A teaching number so the recall output is countable.
- **Short nights in a row add 25% each to the alertness drop.** Sleep loss builds up, but by how much differs a lot between people.
- **Age nudges sleep need up for younger teens.** Need varies within the 8–10 hour range; this is a simple way to show it.

**Illustrative** (made-up numbers): Chloe's hours, the 10-facts-per-hour rate and the 0–10 alertness scale are made up for a fictional story.

**Still being studied:** Exactly how the sleeping brain chooses which memories to strengthen is still an active research question.

**Limits:** shows — Shows sleep after studying deciding how much is stored; Shows short sleep lowering alertness separately; Shows the two problems adding up in one test. Does not — Measure any real person — Chloe is fictional; Separate the different stages of sleep; Say exactly how much any student will remember.

**Wellbeing line:** If you often can't sleep or feel exhausted every day, talk with an adult you trust.

**Case claims to check**

- Best answer: Both: sleep is when the brain stores what you studied, so Thursday night's cramming was never properly saved — and the short night also left her too tired to focus during the test.
- Takeaway: Sleep does two jobs for learning: it stores what you studied during the day, and it leaves you alert enough to use it. An all-nighter loses both — the extra hours of study never get saved, and the tired brain struggles to find what was.
- Transfer: Ana and her friend practise a new dance routine for two hours on Monday evening. Ana sleeps well and dances it better on Tuesday than at the end of practice. Her friend stays up until 3 a.m. gaming, forgets half the steps on Tuesday and keeps yawning. → *Sleep stored Ana's practice and left her alert; her friend's short night meant the steps weren't stored and she was too tired to focus.*

### The Breakfastless Test — Jamal's nerves and empty stomach  ·  `adrenaline-fuel`

*Level: Complex* · *systems: Adrenaline & the alarm system + Digestion & fuel*

Two things were working on Jamal's hands. The big test switched on his alarm system: adrenaline raced his heart, dampened his palms and made his hands tremble. And after fourteen hours without food, his liver's sugar store was nearly empty, so his body was releasing extra hormones — adrenaline among them — just to hold his blood sugar steady. His blood sugar stayed in the normal range, but the two hormone pushes added up.

- The bigger the moment, the more adrenaline; it eases a little once he gets going, and less with practice.
- The liver's sugar store empties over about 16–24 hours without food, faster after a small meal.
- As the store runs low, the body adds hormones (including adrenaline) to keep blood sugar steady — which stays in the normal range.
- Shaking appears once the total hormone push passes a level, and grows from there.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How big the moment feels** `X` · 0–10, case value 9 · source: The bigger the moment, the more adrenaline the alarm system releases.
- *bubble* · **Minutes into the test** `Mt` · 0–40 min, case value 0 · source: Once he gets going, the body's calming system eases the alarm a little (clue 2).
- *bubble* · **Practice tests done** `Pt` · 0–10, case value 1 · source: Facing the same kind of worry again and again gradually makes the alarm smaller.
- *bubble* · **Hours since eating** `h` · 0–16 h, case value 14 · source: Between meals the liver's sugar store keeps blood sugar steady; after 12–24 hours without food it is almost used up.
- *bubble* · **Size of his last meal** `z` · 0–2, case value 1 · choice: A bigger meal refills the liver's store more, so it lasts longer.
- *factor* · **Age** `age` · 11–18 years, case value 14 · source: Maximum heart rate is about 220 minus age.
- *factor* · **Resting heart rate** `Hrest` · 50–90 beats/min, case value 70 · source: Most people rest at 60–100 beats a minute.

**Formulas**

- Adrenaline (% above calm): `A = 100 * ((X / 10) * (1 - 0.5 * Pt / (Pt + 4)) * (0.8 + 0.2 * pow(0.5, Mt / 8)) + (0.35 * (1 - clamp(100 - 100 * h / (16 + 4 * z), 5, 100) / 100)))`
- Heart rate (beats/min): `H = Hrest + (220 - age - Hrest) * 0.4 * (X / 10) * (1 - 0.5 * Pt / (Pt + 4)) * (0.8 + 0.2 * pow(0.5, Mt / 8))`
- Liver sugar store (% full): `L = clamp(100 - 100 * h / (16 + 4 * z), 5, 100)`
- Blood sugar (mg/dL): `G = 92 - 12 * (1 - clamp(100 - 100 * h / (16 + 4 * z), 5, 100) / 100)`
- Shaky hands (0–10): `T = clamp(10 * ((X / 10) * (1 - 0.5 * Pt / (Pt + 4)) * (0.8 + 0.2 * pow(0.5, Mt / 8)) + (0.35 * (1 - clamp(100 - 100 * h / (16 + 4 * z), 5, 100) / 100)) - 0.7) / 0.45, 0, 10)`

**From sources** (each checked against the linked page)

- Adrenaline is released when you're suddenly scared or stressed; your heart beats faster and you breathe faster. — Cleveland Clinic: Adrenaline <https://my.clevelandclinic.org/health/body/23038-adrenaline>
- Adrenaline makes the heart beat faster and sweat appear, and releases stored sugar into the blood. — Harvard Health Publishing: Understanding the stress response <https://www.health.harvard.edu/staying-healthy/understanding-the-stress-response>
- The liver's glycogen store keeps blood sugar steady between meals; after 12–24 hours of fasting it is almost used up. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>
- For most people without diabetes, going without food doesn't cause low blood sugar, because the body keeps it in a healthy range; shakiness comes from hormones released to raise blood sugar. — Cleveland Clinic: Low Blood Sugar (Hypoglycemia) <https://my.clevelandclinic.org/health/diseases/11647-hypoglycemia-low-blood-sugar>
- Stress hormones can cause a faster heartbeat, sweating and shaking, and facing a worry repeatedly gradually makes it smaller. — NHS: Overcoming fears <https://www.nhs.uk/conditions/stress-anxiety-depression/overcoming-fears/>

**Our choices** (simplifications — please check these are fair)

- **The 'fasting push' is a share of adrenaline that grows as the liver store empties.** Several hormones work together to hold blood sugar steady; we lump them into one push.
- **Shaking only shows above a threshold.** Small amounts of adrenaline don't make hands visibly shake; this matches clue 4, where nerves alone gave only a slight tremble.
- **Blood sugar falls only from about 92 to 80 mg/dL.** In a healthy teen it stays in the normal range; the body works harder to keep it there.
- **The alarm eases by up to a fifth once the test is under way.** This matches clue 2 (it eased a little once he got going); how fast it eases differs between people.

**Illustrative** (made-up numbers): Jamal's pulse numbers, his 14 hours without food and the 0–10 shaking scale are made up for a fictional story.

**Still being studied:** How much the hormones that guard blood sugar add to exam-day shakiness, compared with nerves alone, hasn't been measured precisely in teens.

**Limits:** shows — Shows nerves and a long time without food each adding to the hormone push; Shows blood sugar staying in the normal range while the liver store runs down; Shows a meal removing one of the two causes. Does not — Measure any real person — Jamal is fictional; Say anything about diabetes or any condition; Tell anyone what or when to eat.

**Wellbeing line:** Feeling shaky, dizzy or unwell at school is a reason to tell a teacher or the school nurse.

**Case claims to check**

- Best answer: Both: the test switched on his alarm system (adrenaline — racing heart, sweaty palms, some shaking), and after fourteen hours without food his liver's sugar store was nearly empty, so his body released extra hormones to keep his blood sugar steady — adding to the shaking. Together, his hands shook far more than either would cause alone.
- Takeaway: Shaky hands can have more than one cause, and causes can add up. Adrenaline from a big moment is one; a body running down its fuel store, which releases extra hormones to keep blood sugar steady, is another. You can't always switch off nerves, but you can remove the second cause by eating.
- Transfer: Before her piano recital, Yuki skipped lunch because she felt too nervous to eat. On stage her fingers tremble more than at any recital before, even though she's played the piece perfectly at home. → *Stage nerves released adrenaline, and skipping lunch ran down her fuel store so her body added more hormones — two causes of trembling added together.*

### The Concert Night — Hana's ears and sleep after a concert  ·  `noise-sleep`

*Level: Complex* · *systems: Ears & hearing + Brain & sleep*

Hana has two separate problems. Her ears: three hours at about 105 dB is many times a safe day's sound dose, so the tiny hair cells in her inner ear are worn out — that's the ringing and muffled hearing, which usually clears in 16–48 hours. Her brain: five and a half hours of sleep, when teens need 8–10, leaves her unable to focus. Leila's earplugs fixed the first problem, but not the second.

- Sound dose = time at the concert compared with the safe time for that loudness (85 dB for 8 hours; half the time for every 3 dB louder).
- Moving back halves the energy reaching you: about 6 dB less per doubling of distance. Earplugs block more.
- Hair cells tire more as the dose climbs; tired hair cells ring and hear less, and recover over about 16–48 hours.
- Focus falls with every hour of sleep she's short of what she needs.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Loudness by the speakers** `V` · 70–110 dB, case value 105 · source: Concerts reach 94–110 dBA. Sounds at or below 70 are unlikely to harm hearing; long exposure above 85 can.
- *bubble* · **Hours at the concert** `Th` · 0.5–4 h, case value 3 · source: For every 3 dB louder, the safe time halves — so time and loudness work together.
- *bubble* · **Distance from the speakers** `Dd` · 0–3, case value 0 · source: Each doubling of distance cuts the level by about 6 dB.
- *bubble* · **Earplugs** `E` · 0–1, case value 0 · choice: Earplugs block part of the sound before it reaches the inner ear.
- *bubble* · **Hours of sleep** `S` · 3–10 h, case value 5.5 · source: Short sleep makes it harder to focus, react and learn the next day.
- *bubble* · **Short nights in a row** `N` · 1–5, case value 1 · choice: Missed sleep adds up over several nights.
- *factor* · **Sleep she needs** `need` · 8–10 h, case value 9 · source: Teens need about 8–10 hours a night.
- *factor* · **Hours awake at class time** `Aw` · 1–6 h, case value 2 · choice: The longer she's been up on little sleep, the harder it is to stay sharp.

**Formulas**

- Sound dose (% of a safe day): `L = (100 * Th * pow(2, ((V - 6 * Dd - 20 * E) - 85) / 3) / 8)`
- Hair-cell fatigue (0–10): `F = clamp(10 * (1 - pow(0.5, (100 * Th * pow(2, ((V - 6 * Dd - 20 * E) - 85) / 3) / 8) / 400)), 0, 10)`
- Ringing next morning: `R = clamp(10 * (1 - pow(0.5, (100 * Th * pow(2, ((V - 6 * Dd - 20 * E) - 85) / 3) / 8) / 400)), 0, 10)` → shown as none / a little / yes, and muffled
- Hearing back to normal in about (h): `Bk = 16 + 3.2 * clamp(10 * (1 - pow(0.5, (100 * Th * pow(2, ((V - 6 * Dd - 20 * E) - 85) / 3) / 8) / 400)), 0, 10)`
- Morning focus (0–10): `A = clamp(10 - 8 * max(0, 1 - S / need) * (1 + 0.25 * (N - 1)) - 0.25 * max(0, Aw - 3), 1, 10)`

**From sources** (each checked against the linked page)

- Sounds at or below 70 dBA are unlikely to harm hearing; long or repeated exposure at 85 dBA and above can; concerts reach 94–110 dBA. — NIDCD (NIH): Noise-Induced Hearing Loss <https://www.nidcd.nih.gov/health/noise-induced-hearing-loss>
- A temporary hearing loss after loud noise can disappear 16 to 48 hours later; damaged hair cells don't grow back. — NIDCD (NIH): Noise-Induced Hearing Loss <https://www.nidcd.nih.gov/health/noise-induced-hearing-loss>
- The recommended limit is 85 dBA over 8 hours, and every 3 dB louder halves the allowed time (100 dBA: 15 minutes). — CDC NIOSH: Understanding Noise Exposure Limits: Occupational vs. General Environmental Noise <https://cdc.gov/niosh/bulletin/2016/noise.html>
- Doubling your distance from a sound source lowers the level by about 6 dB. — University of Manchester: Basic Acoustics: the inverse square law <https://personalpages.manchester.ac.uk/staff/richard.baker/BasicAcoustics/4_inverse_square_law.html>
- Teens need 8 to 10 hours of sleep; sleep-deficient people react more slowly and have trouble focusing. — CDC: Sleep in Middle and High School Students <https://archive.cdc.gov/www_cdc_gov/healthyschools/features/students-sleep.htm>
- Sleep deficiency causes problems with learning, focusing and reacting. — NHLBI (NIH): Sleep Deprivation and Deficiency: How Sleep Affects Your Health <https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects>

**Our choices** (simplifications — please check these are fair)

- **Earplugs block 20 dB.** Real earplugs vary — the label's noise reduction rating tells you how much; 20 dB is a typical teaching value.
- **Fatigue rises toward 10 as the dose climbs past a few hundred percent.** There's no single number linking dose to how tired hair cells get; the curve shows 'more dose, more fatigue'.
- **A workplace limit is used for a concert.** Workplace limits were made for adults over a working day; they're used here as a yardstick, not a rule.
- **Recovery time grows with fatigue inside the 16–48 hour range.** The real recovery time varies from person to person.

**Illustrative** (made-up numbers): Hana's 105 dB, three hours, 5.5 hours of sleep and the 0–10 scales are made up for a fictional story.

**Limits:** shows — Shows loudness and time together setting the sound dose; Shows distance and earplugs cutting the dose; Shows short sleep hurting focus separately from hearing. Does not — Measure any real person or any real concert; Model permanent hearing loss; Replace a hearing test.

**Wellbeing line:** Ringing that lasts more than a day, or hearing that stays muffled, is a reason to tell an adult.

**Case claims to check**

- Best answer: Two separate things: the loud music tired the hair cells in her inner ear (ringing, muffled hearing), and the short night left her brain under-slept (zoning out, forgetting).
- Takeaway: Two symptoms can have two causes. Loud sound tires the hair cells that turn sound into signals; short sleep leaves the brain without the night it needs to reset and store the day. Fix one and the other is still there.
- Transfer: After a full day at a loud amusement park and a 2 a.m. drive home, Diego wakes up with his ears buzzing and can't remember the directions his mom gave him five minutes ago. → *Two things: loud noise tired his inner-ear hair cells, and short sleep left his brain foggy.*

### The Exam-Week Cold — Noah's sleep, stress and the cold going round  ·  `sleep-immune`

*Level: Complex* · *systems: Brain & sleep + Adrenaline & the alarm system*

Colds come from viruses passed around Noah's class — he can't catch one if nobody has it. Whether the virus wins depends on his defences. Night after night of short sleep is the biggest factor: under six hours, people are about four times more likely to catch a cold. Stress adds to it: exam stress lowers immune-cell activity, though stress that lasts a month or more matters much more than a single week.

- The cold needs a virus: more sick classmates means more chances to catch it; hand-washing cuts that.
- Sleeping under 6–7 hours raises the odds about 4 times, building up over several nights.
- Stress raises the odds too — a little for one stressful week, more for stress lasting a month or more.
- Sleep and stress multiply together, so both at once are worse than either alone.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours of sleep each night** `s` · 4–9 h, case value 5 · source: People sleeping under 6 hours were about 4 times more likely to catch a cold than those sleeping over 7.
- *bubble* · **Short nights in a row** `n` · 1–7, case value 5 · source: Ongoing short sleep weakens the body's defence; one late night does much less.
- *bubble* · **Sleep quality** `q` · 0–2, case value 1 · choice: Restless, broken sleep rests the body less than the same hours of sound sleep.
- *bubble* · **Stress level** `x` · 0–10, case value 8 · source: Exam stress has been measured lowering the activity of immune cells in students.
- *bubble* · **Weeks the stress lasts** `d` · 1–12 weeks, case value 1 · source: Long-lasting stress (a month or more) clearly raises the risk of colds; short stressful spells matter much less.
- *factor* · **Classmates with colds** `k` · 0–15, case value 12 · source: Colds are caused by viruses passed between people — no virus nearby, no cold.
- *factor* · **Hand-washing habit** `w` · 0–2, case value 1 · source: Hand-washing cuts colds and other breathing illnesses by about 16–21%.

**Formulas**

- Immune defence (% of full): `D = 100 * pow(((1 + (3.2 * clamp(7 - s, 0, 1) + 0.3 * clamp(6 - s, 0, 1)) * min(1, n / 5) * (1.2 - 0.2 * q)) * (1 + (x / 10) * (0.3 + 0.7 * min(1, d / 4)))), -0.5)`
- Stress effect (% extra risk): `C = 100 * ((1 + (x / 10) * (0.3 + 0.7 * min(1, d / 4))) - 1)`
- Chance the cold gets through (%): `Rk = 100 * (0.02 * k * (1 - 0.09 * w)) * ((1 + (3.2 * clamp(7 - s, 0, 1) + 0.3 * clamp(6 - s, 0, 1)) * min(1, n / 5) * (1.2 - 0.2 * q)) * (1 + (x / 10) * (0.3 + 0.7 * min(1, d / 4)))) / (1 - (0.02 * k * (1 - 0.09 * w)) + (0.02 * k * (1 - 0.09 * w)) * ((1 + (3.2 * clamp(7 - s, 0, 1) + 0.3 * clamp(6 - s, 0, 1)) * min(1, n / 5) * (1.2 - 0.2 * q)) * (1 + (x / 10) * (0.3 + 0.7 * min(1, d / 4)))))`

**From sources** (each checked against the linked page)

- Colds are caused by viruses, most often rhinoviruses, spread by droplets and contaminated surfaces. — CDC: About Common Cold <https://www.cdc.gov/common-cold/about/index.html>
- Volunteers sleeping under 6 hours were 4.2 times, and under 5 hours 4.5 times, more likely to catch a cold from the same virus than those sleeping over 7. — UCSF: Short Sleepers Are Four Times More Likely to Catch a Cold <https://www.ucsf.edu/news/2015/08/131411/short-sleepers-are-four-times-more-likely-catch-cold>
- Ongoing sleep deficiency can weaken the body's defence against common infections. — NHLBI (NIH): Sleep Deprivation and Deficiency: How Sleep Affects Your Health <https://www.nhlbi.nih.gov/health/sleep-deprivation/health-effects>
- Stressors lasting a month or longer were linked to a much higher risk of colds; short stressful events were not. — Carnegie Mellon University: Types of stressors that increase susceptibility to the common cold in healthy adults (Health Psychology) <https://www.cmu.edu/dietrich/psychology/stress-immunity-disease-lab/abstracts/pdf/types-of-stressors.pdf>
- In medical students, immune (natural killer) cell activity fell between a month before exams and the first day of exams. — Karger Research Viewpoints: Pillar articles: stress in humans affects natural killer cell function <https://researchviewpoints.karger.com/on-research/pillar-articles-stress-in-humans-affects-natural-killer-cell-function/>
- Hand-washing reduces colds and other respiratory illnesses by 16–21%. — CDC: Handwashing Facts <https://www.cdc.gov/clean-hands/data-research/facts-stats/index.html>
- Teens need 8–10 hours of sleep a night. — CDC: Sleep in Middle and High School Students <https://archive.cdc.gov/www_cdc_gov/healthyschools/features/students-sleep.htm>

**Our choices** (simplifications — please check these are fair)

- **Short sleep's effect builds over 5 nights.** One late night matters less than a pattern; the study measured people's usual sleep over a week.
- **A single stressful week raises risk only about a third as much as month-long stress.** Long stress is clearly linked to colds; the exam-stress study shows a smaller, short-term effect too.
- **Each classmate with a cold adds about 2% to the starting chance.** A teaching number for 'more virus around, more chances'.
- **Immune defence is shown as one percentage.** The real immune system has many parts; one number shows the direction.

**Illustrative** (made-up numbers): Noah's five hours, his stress level, the twelve sick classmates and the percentages are made up for a fictional story.

**Still being studied:** Exactly how sleep and stress change the many parts of the immune system is still being worked out.

**Limits:** shows — Shows a cold needing both a virus and a weakened defence; Shows short sleep as the biggest single factor; Shows stress adding to it, more when it lasts longer. Does not — Measure any real person — Noah is fictional; Predict whether anyone will get sick; Cover flu, other illnesses or what to do when sick.

**Wellbeing line:** Most colds pass in under a week. If you feel very unwell or it lasts much longer, tell an adult.

**Case claims to check**

- Best answer: Both: night after night of short sleep and a week of stress hormones each weakened his immune defences, so together they let the cold going around get through.
- Takeaway: Your immune system needs sleep, and long-lasting stress pushes it down. Each alone weakens your defences a little; together they open the door for whatever cold is going around.
- Transfer: During tech week for the school play, the cast rehearses until 11 p.m. every night and everyone is nervous about opening night. By Friday half the cast has the cold going around backstage. → *Short sleep and stress together weakened their immune defences, so the cold going around got past them.*

### The Heatwave Final — Ama's water and fuel in a hot final  ·  `heat-fuel`

*Level: Complex* · *systems: Kidneys & water + Digestion & fuel*

Two tanks ran low at once for Ama. Water: in 95 °F heat she sweats well over a litre an hour, and a few sips at half-time can't keep up — by the end she has lost about 4% of her body weight, and above 2% performance drops in the heat. Fuel: a soccer game uses up a lot of muscle fuel anyway, and seven hours without food left her liver's sugar store low, so the second half got harder still.

- Sweat rate rises with heat and with how much her position runs; water drunk at half-time replaces some.
- Water lost is shown as a share of body weight; above about 2% sprinting suffers in the heat.
- Muscle fuel drops during any full game; hours without food also run down the liver's sugar store, and a half-time snack tops it up.
- Sprint speed = fresh speed minus game fatigue, minus the low-fuel effect, minus the dehydration effect.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes into the match** `p` · 0–90 min, case value 90 · choice: A 90-minute game: water and fuel both run down as it goes on.
- *bubble* · **Air temperature** `Ta` · 60–100 °F, case value 95 · source: Heat drives sweating; above about 1 litre an hour is common in hot conditions.
- *bubble* · **Water drunk at half-time** `Wd` · 0–8 cups, case value 1 · choice: Each cup (about 240 ml) replaces some of the water sweated out.
- *bubble* · **Hours since her last meal** `e` · 0–8 h, case value 7 · source: The liver's sugar store tops up blood sugar for working muscles; it runs down the longer she goes without food.
- *bubble* · **Half-time snack** `Hs` · 0–1, case value 0 · choice: A quick snack at half-time adds fuel for the second half.
- *factor* · **Body weight** `mass` · 40–80 kg, case value 55 · choice: The same sweat loss is a bigger share of a lighter body.
- *factor* · **How much her position runs** `pos` · 0.8–1.2, case value 1 · choice: Midfielders run the most, so they sweat and burn muscle fuel fastest.

**Formulas**

- Sprint speed (% of fresh): `P = 100 - 3 * (p / 90) * pos - 0.15 * (100 - clamp(100 - 5 * (e + p / 60) + 12 * Hs * clamp(p - 45, 0, 1), 0, 100)) * (p / 90) - 1.5 * max(0, (100 * max(0, (((0.4 + 0.035 * (Ta - 60)) * pos) * p / 60) - (0.24 * Wd * clamp(p - 45, 0, 1))) / mass) - 1)`
- Fuel available (% of start): `F = ((100 - 45 * (p / 90) * pos) + clamp(100 - 5 * (e + p / 60) + 12 * Hs * clamp(p - 45, 0, 1), 0, 100)) / 2`
- Body water lost (% of body weight): `W = (100 * max(0, (((0.4 + 0.035 * (Ta - 60)) * pos) * p / 60) - (0.24 * Wd * clamp(p - 45, 0, 1))) / mass)`
- Thirst signal: `T = (100 * max(0, (((0.4 + 0.035 * (Ta - 60)) * pos) * p / 60) - (0.24 * Wd * clamp(p - 45, 0, 1))) / mass)` → shown as off / ON
- Sweat lost so far (litres): `S = (((0.4 + 0.035 * (Ta - 60)) * pos) * p / 60)`

**From sources** (each checked against the linked page)

- Sweating rates above 1 litre an hour are common in the heat; losing more than 2% of body weight usually hurts endurance performance in warm conditions but not in cool ones. — PubMed Central: Hypohydration and Human Performance: Impact of Environment and Physiological Mechanisms (Sports Medicine) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4672008/>
- In a soccer game thigh-muscle fuel (glycogen) fell by about 40%, and about half the fibres were nearly empty by the end. — University of the Faroe Islands research portal: Muscle and Blood Metabolites during a Soccer Game: Implications for Sprint Performance (Med Sci Sports Exerc) <https://www.pure.fo/en/publications/muscle-and-blood-metabolites-during-a-soccer-game-implications-fo/>
- Sprints were about 3% slower at the end of a game and about 4% slower after hard spells in the second half. — University of the Faroe Islands research portal: Muscle and Blood Metabolites during a Soccer Game: Implications for Sprint Performance (Med Sci Sports Exerc) <https://www.pure.fo/en/publications/muscle-and-blood-metabolites-during-a-soccer-game-implications-fo/>
- The liver's glycogen store keeps blood sugar steady; it runs down over hours without food, and repeated sprinting drains muscle glycogen quickly. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>

**Our choices** (simplifications — please check these are fair)

- **Sweat rate rises in a straight line with air temperature.** Real sweat rates also depend on humidity, sun and the person; the line gives about 1.6 L/h at 95 °F.
- **Above 1% water loss, each extra 1% slows sprints by 1.5%.** Studies agree dehydration hurts performance in heat but not on one exact number.
- **Skipping lunch acts through the liver's store, not the muscles.** After a normal breakfast her muscles start full; it's the blood-sugar supply that runs short later.
- **The thirst signal switches on at about 1% water loss.** Thirst usually starts around this level, but varies between people.

**Illustrative** (made-up numbers): Ama's weight, her single cup of water, the 95 °F heat and the percentages are made up for a fictional story.

**Limits:** shows — Shows water and fuel running down together over a hot game; Shows that a drink fixes one problem and food the other; Shows heat, position and body size changing the water loss. Does not — Measure any real person — Ama is fictional; Model heat illness or anything dangerous; Tell anyone how much to drink or eat.

**Wellbeing line:** Feeling dizzy, sick or confused in the heat is a reason to stop, get into the shade, drink and tell a coach or adult.

**Case claims to check**

- Best answer: Both: in the heat she sweated out far more water than she drank, AND seven hours without food left her body short of fuel for the second half — together they drained her.
- Takeaway: Heat drains water; time without food drains fuel. In a long hot game both run down at once, and each needs its own fix — a drink for water, food for fuel.
- Transfer: Leo hikes all day in desert heat. He keeps refilling his water bottle at every spring but brought no snacks. By evening he isn't thirsty at all, yet his legs are shaky and weak. → *He's low on fuel — he drank enough but ate nothing, so only the fuel problem is left.*

### The July Marching Band — Keisha's water and blood flow at band camp  ·  `heat-standing`

*Level: Complex* · *systems: Kidneys & water + Heart & blood flow*

Keisha's brain needs a steady supply of blood. Two things are cutting it down. Hours of sweating in a heavy uniform have taken water out of her blood. And standing perfectly still lets blood settle in her legs, because her leg muscles aren't squeezing it back up. Either alone she can handle — together, after about twelve minutes, she feels light-headed.

- Sweat rate climbs with air temperature and a heavy uniform; water drunk since the last break makes up some of it.
- Water missing is the sweat lost since the break, minus what she drank, as a share of her body weight.
- Standing still, blood builds up in the legs over several minutes; heat makes it worse, moving the legs undoes most of it.
- Blood getting back to the heart drops with both the blood in the legs and the water missing; below about 74% she feels light-headed.
- Her heart beats faster to make up for the blood that isn't coming back.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Minutes standing still** `m` · 0–20 min, case value 12 · source: Standing for too long, without moving the legs, is a common cause of heat-related dizziness and fainting.
- *bubble* · **Water drunk in the last hour** `W` · 0–4 cups, case value 0 · source: Health workers in the heat are told to drink about a cup every 15–20 minutes — that's 3–4 cups an hour.
- *bubble* · **Minutes since the last water break** `tb` · 0–120 min, case value 60 · choice: Sweat keeps leaving the body the whole time, so the water missing from the blood grows the longer it has been since a drink.
- *bubble* · **What the legs are doing** `L` · 0–2, case value 0 · source: Tensing or moving the leg muscles squeezes blood back up toward the heart and brain.
- *bubble* · **Air temperature** `Ta` · 60–105 °F, case value 95 · source: Getting too hot is a common cause of fainting: heat makes you sweat more and sends extra blood to the skin to cool off.
- *factor* · **Body weight** `mass` · 40–80 kg, case value 55 · choice: The same amount of sweat is a bigger share of a smaller body's water.
- *factor* · **Uniform** `U` · 0–1, case value 1 · source: Heavy clothing traps heat, so the body has to sweat more to stay cool.
- *factor* · **Days of band camp so far** `acc` · 1–7 days, case value 2 · source: Bodies get used to heat over several days. Not being used to the heat makes heat-related fainting more likely.

**Formulas**

- Blood getting back to the heart (% of normal): `R = 100 - 2.2 * (8 + 0.25 * max(0, Ta - 70) * (1 - 0.08 * (acc - 1))) * (1 - 0.45 * L) * (1 - pow(0.5, m / 6)) - 3 * 100 * max(0, clamp(0.2 + 0.035 * (Ta - 70) + 0.25 * U, 0.1, 2) * tb / 60 - cup * W) / mass`
- How her head feels: `F = 100 - 2.2 * (8 + 0.25 * max(0, Ta - 70) * (1 - 0.08 * (acc - 1))) * (1 - 0.45 * L) * (1 - pow(0.5, m / 6)) - 3 * 100 * max(0, clamp(0.2 + 0.035 * (Ta - 70) + 0.25 * U, 0.1, 2) * tb / 60 - cup * W) / mass` → shown as light-headed — sit down / a bit woozy / fine
- Heart rate (beats/min): `Q = 75 + 1.2 * (2.2 * (8 + 0.25 * max(0, Ta - 70) * (1 - 0.08 * (acc - 1))) * (1 - 0.45 * L) * (1 - pow(0.5, m / 6)) + 3 * 100 * max(0, clamp(0.2 + 0.035 * (Ta - 70) + 0.25 * U, 0.1, 2) * tb / 60 - cup * W) / mass)`
- Sweat rate (litres/hour): `S = clamp(0.2 + 0.035 * (Ta - 70) + 0.25 * U, 0.1, 2)`
- Water missing (% of body weight): `Dh = 100 * max(0, clamp(0.2 + 0.035 * (Ta - 70) + 0.25 * U, 0.1, 2) * tb / 60 - cup * W) / mass`
- Blood held in the legs (% extra): `P = (8 + 0.25 * max(0, Ta - 70) * (1 - 0.08 * (acc - 1))) * (1 - 0.45 * L) * (1 - pow(0.5, m / 6))`
- Constants: `cup = 0.24`

**From sources** (each checked against the linked page)

- Heat-related fainting or dizziness usually happens when standing for too long; dehydration and not being used to the heat make it more likely. — CDC / NIOSH: Heat-related Illnesses <https://www.cdc.gov/niosh/heat-stress/about/illnesses.html>
- Fainting happens when not enough blood gets to the brain. Standing for a very long time, getting too hot, and dehydration (which lowers blood pressure) are common causes; tensing the leg muscles helps blood flow, and lying down helps. — Nemours KidsHealth: Fainting (Syncope) <https://kidshealth.org/en/teens/fainting.html>
- When working in the heat, drink about 1 cup of water every 15–20 minutes; bodies get used to the heat gradually over several days. — CDC / NIOSH: Heat Stress — Workplace Recommendations <https://www.cdc.gov/niosh/heat-stress/recommendations/index.html>
- Signs of dehydration include extreme thirst, dark-coloured urine, urinating less and dizziness; sweating in hot weather causes fluid loss. — Mayo Clinic: Dehydration — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/dehydration/symptoms-causes/syc-20354086>
- Sweat loss can be worked out as the drop in body weight plus the fluid drunk during the activity. — Korey Stringer Institute, University of Connecticut: Sweat Rate Calculator <https://koreystringer-institute.media.uconn.edu/wp-content/uploads/sites/3814/2024/08/Sweat-Rate-Calculator.pdf>

**Our choices** (simplifications — please check these are fair)

- **Sweat rate is a straight line with temperature above 70 °F, plus extra for a heavy uniform.** Real sweat rates vary a lot between people; this gives about 1.3 litres an hour at 95 °F in uniform — in line with drinking 3–4 cups an hour to keep up.
- **Blood in the legs builds up with a half-time of 6 minutes.** Pooling starts as soon as you stand still and keeps growing for a while; 6 minutes makes the dizziness arrive around the 10–15 minute mark, as in the case.
- **Each 1% of body weight lost as water lowers the blood returning to the heart by 3 points.** Less water in the blood means less blood to send back up. The exact size of this effect differs from person to person; we picked a modest one.
- **The 'light-headed' line is set at 74% of normal.** There is no single cut-off in real bodies. The line is placed so that Keisha's July morning crosses it and an October game does not.
- **Each extra day of camp reduces the heat effect by 8%.** Getting used to the heat takes days; the size of the effect here is a teaching value.

**Illustrative** (made-up numbers): Keisha's weight (55 kg), the hour since her water break and her two days at camp are made up for a fictional story. The 'blood getting back to the heart' percentage is a teaching scale, not something you could measure with a cuff.

**Limits:** shows — Shows two separate causes — water lost as sweat, and blood held in still legs — adding together; Shows moving the legs or drinking water each helping, in different ways; Shows heat and a heavy uniform making both problems worse. Does not — Measure any real person — Keisha is fictional and the percentages are a teaching scale; Include salt loss, food, sleep, or illness; Model fainting itself; it stops at feeling light-headed.

**Wellbeing line:** If you feel light-headed in the heat, sit or lie down, drink water and tell an adult straight away.

**Case claims to check**

- Best answer: Heavy sweating has left less water in their blood, and standing still lets blood pool in their legs because the leg muscles aren't squeezing it back up. Together, too little blood reaches the head.
- Takeaway: Blood needs a push to get from your legs back to your head. Walking muscles provide it; standing still doesn't. Add heavy sweating on a hot day and there's less blood to go around — that's when the head runs short.
- Transfer: At a long school assembly on a warm afternoon, Omar stands perfectly still in the back row. After twenty minutes he feels light-headed; when he shifts from foot to foot and rises onto his toes, it passes. → *Warmth and standing still both mean less blood gets back up to his head; moving his legs squeezes it back.*

### The Long-Haul Flight — Arjun's body clock and water after a long flight  ·  `jetlag-water`

*Level: Complex* · *systems: Brain & sleep clock + Kidneys & water*

Arjun has two separate problems. His body clock is still set to Los Angeles, so at 3 a.m. in London his body thinks it's early evening — and the clock only catches up about one time zone a day. Separately, eleven hours of very dry cabin air and only two cups of water left him low on water. Water fixes the headache in hours; only time and daylight fix the clock.

- The body clock starts out of step by one hour for each time zone crossed.
- It catches up about one hour a day; flying west and getting morning daylight make it a bit faster.
- Minutes awake at night grow with how far out of step the clock still is.
- Water lost on the flight grows with flight length and dry air; water drunk makes up some of it.
- Water missing above about 1.5% of body weight makes a headache likely.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Time zones crossed** `Z` · 0–10, case value 8 · source: The more time zones you cross, the more likely jet lag is — and the longer it lasts.
- *bubble* · **Nights since landing** `n` · 0–10 nights, case value 0 · source: The body clock catches up a little each day — roughly a day for each time zone crossed.
- *bubble* · **Direction of the flight** `dir` · 0–1, case value 0 · source: Flying east, when you 'lose' hours, is usually harder to adjust to than flying west.
- *bubble* · **Hours outdoors in morning daylight** `light` · 0–3 h/day, case value 0.5 · source: Sunlight is one of the strongest signals that sets the body clock, so the right light helps it shift faster.
- *bubble* · **Water drunk on the flight** `W` · 0–10 cups, case value 2 · source: Cabin air is dry, so the body loses more water than usual just by breathing; not drinking enough leaves you slightly dehydrated.
- *bubble* · **Flight length** `h` · 2–16 hours, case value 11 · choice: Every hour in dry cabin air adds to the water lost.
- *factor* · **Body weight** `mass` · 35–75 kg, case value 45 · choice: The same water loss is a bigger share of a smaller body.
- *factor* · **Cabin humidity** `hum` · 10–40 %, case value 15 · source: Aircraft cabin air is usually only 10–20% humidity — very dry. Drier air takes more water from your lungs and skin.

**Formulas**

- Awake in the middle of the night (min): `M = clamp(16 * max(0, Z - n * (1 + 0.5 * dir) * (1 + 0.15 * light)) * (1 - 0.3 * dir), 0, 150)`
- Body clock still out of step (hours): `Rm = max(0, Z - n * (1 + 0.5 * dir) * (1 + 0.15 * light))`
- Nights until he's adjusted (nights): `D = Z / ((1 + 0.5 * dir) * (1 + 0.15 * light))`
- Water missing on landing (% of body weight): `L = 100 * max(0, (0.07 + 0.002 * (40 - hum)) * h - cup * W) / mass`
- Headache from low water: `Q = 100 * max(0, (0.07 + 0.002 * (40 - hum)) * h - cup * W) / mass` → shown as unlikely / possible / likely
- Constants: `cup = 0.24`

**From sources** (each checked against the linked page)

- It usually takes about a day to recover for each time zone crossed; the more time zones you cross, the more likely jet lag is. — Mayo Clinic: Jet lag disorder — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/jet-lag/symptoms-causes/syc-20374027>
- Jet lag is especially likely when flying east; eastward travel is usually harder to adjust to than westward. — Mayo Clinic: Jet lag disorder — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/jet-lag/symptoms-causes/syc-20374027>
- Sunlight is a key influence on the body's circadian rhythms (its internal clock). — Mayo Clinic: Jet lag disorder — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/jet-lag/symptoms-causes/syc-20374027>
- Humidity is low in planes, and not drinking enough water on a flight can leave you slightly dehydrated. — Mayo Clinic: Jet lag disorder — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/jet-lag/symptoms-causes/syc-20374027>
- Aircraft cabin air is typically dry, usually 10–20% humidity, and pressurised to the equivalent of about 8,000 feet. — CDC: Air Travel (CDC Yellow Book) <https://www.cdc.gov/yellow-book/hcp/travel-air-sea/air-travel.html>
- Signs of dehydration include extreme thirst, urinating less, dark-coloured urine and dizziness. — Mayo Clinic: Dehydration — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/dehydration/symptoms-causes/syc-20354086>

**Our choices** (simplifications — please check these are fair)

- **The clock catches up 1 hour a day flying east and 1.5 hours a day flying west.** Matches 'about a day per time zone' and 'east is harder'; the westward speed is a teaching value.
- **Each hour of morning daylight speeds adjustment by 15%.** Light is the strongest clock signal, but how much it helps depends on timing; the size here is illustrative.
- **About 16 minutes awake at night for each hour the clock is still out of step.** Gives about two hours awake on the first night after eight time zones, as in the case. Real nights vary a lot.
- **Water loss is a baseline plus extra for drier air.** Breathing and skin lose more water in very dry air; the numbers give a loss of about 1.3 litres on an 11-hour flight.
- **Headache 'likely' above about 1.5% of body weight.** Mild dehydration often brings headaches; there is no single cut-off, so this is a teaching line.

**Illustrative** (made-up numbers): Arjun's weight (45 kg), his two cups of water and his half-hour of daylight are made up for a fictional story. Minutes awake at night is a teaching scale; real sleep after a flight is much more uneven.

**Still being studied:** Exactly how fast the body clock shifts — and the best timing of light to speed it up — is still being studied and differs between people.

**Limits:** shows — Shows two separate problems from one trip, each with its own fix and its own speed; Shows the body clock catching up a little each day, faster flying west or with daylight; Shows dry cabin air and too little drinking adding up to water lost. Does not — Measure any real person — Arjun is fictional and the numbers are estimates; Plan anyone's real trip or sleep schedule; Include naps, caffeine, food, or seat comfort.

**Wellbeing line:** If a headache doesn't go away after drinking water and resting, or you feel unwell after a flight, tell an adult.

**Case claims to check**

- Best answer: Two problems: dry cabin air and too little drinking left him low on water (fixed in hours by drinking), and crossing eight time zones left his body clock out of step (fixed slowly, by daylight, over days).
- Takeaway: Two causes can heal at different speeds. Water lost to dry air comes back as fast as you drink it; a body clock shifted by several time zones moves only about an hour a day, nudged by daylight.
- Transfer: Nia's family drives from Arizona to Florida. When they arrive she's thirsty with a headache that a big bottle of water fixes by evening — but she's still yawning through breakfast for the next two mornings. → *Not enough water on the drive (fixed fast by drinking) plus a body clock that has to catch up with a two-hour time change (fixed slowly).*

### The Mountain Hike — Elena's oxygen and water on a mountain hike  ·  `altitude-water`

*Level: Complex* · *systems: Oxygen & altitude + Kidneys & water*

Elena has two problems at once. High up, the air pressure is lower, so each breath brings in less oxygen — her heart and lungs speed up even while she sits. Separately, sweating in the sun and breathing hard in dry mountain air take water out of her body faster than one small bottle can replace. Water helps the headache; only going down fixes the thin air.

- Air pressure — and the oxygen in each breath — falls with altitude, using NASA's standard-atmosphere formula.
- Her sitting heart rate and breathing rise to make up for the missing oxygen; after a few days at altitude this extra effort shrinks.
- Water lost each hour = sweat (more with pace and heat) + water breathed out (more with thinner air and faster breathing).
- Body water falls by the water lost minus the water drunk, over the hours of the hike.
- As body water drops, pee gets darker and scarcer and thirst switches on.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Altitude** `K` · 0–12 × 1,000 ft, case value 11 · source: Air pressure falls as you go up, so each breath holds less oxygen. Altitude sickness usually starts above about 8,000 feet.
- *bubble* · **Hiking pace** `pace` · 0–10, case value 5 · choice: Working harder means more sweat and faster breathing — and every breath out carries water away.
- *bubble* · **Days spent at altitude first** `days` · 0–7 days, case value 0 · source: Bodies adjust to thin air over days. Going up gradually is the most important way to avoid altitude sickness.
- *bubble* · **Water drunk** `W` · 0–4 cups/hour, case value 0.5 · source: Drinking replaces what sweat and breathing take out. In the heat, a cup every 15–20 minutes is the usual advice.
- *bubble* · **Hours hiking** `t` · 1–8 h, case value 4 · source: Water loss adds up hour after hour if drinking doesn't keep up.
- *factor* · **Resting heart rate at home** `Hrest` · 50–90 beats/min, case value 70 · source: Most people rest at 60–100 beats a minute; fitter people are often lower.
- *factor* · **Body weight** `mass` · 40–80 kg, case value 55 · choice: The same water loss is a bigger share of a smaller body.
- *factor* · **Air temperature** `Ta` · 40–95 °F, case value 75 · source: Sun and warm air make you sweat more.

**Formulas**

- Oxygen in each breath (% of sea level): `O = 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256)`
- Heart rate sitting down (beats/min): `Hs = Hrest + 0.75 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256)) * pow(0.5, days / 3)`
- Breathing sitting down (breaths/min): `Bs = 14 + 0.15 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256)) * pow(0.5, days / 3)`
- Water lost (sweat + breath) (litres/hour): `S = clamp(0.1 + 0.04 * pace + 0.008 * (Ta - 60), 0.05, 1.5) + (0.02 + 0.002 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256))) * (1 + 0.1 * pace)`
- Body water (% of normal): `L = clamp(100 - 100 * max(0, (clamp(0.1 + 0.04 * pace + 0.008 * (Ta - 60), 0.05, 1.5) + (0.02 + 0.002 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256))) * (1 + 0.1 * pace) - cup * W) * t) / (0.6 * mass), 80, 100)`
- Pee: `P = clamp(100 - 100 * max(0, (clamp(0.1 + 0.04 * pace + 0.008 * (Ta - 60), 0.05, 1.5) + (0.02 + 0.002 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256))) * (1 + 0.1 * pace) - cup * W) * t) / (0.6 * mass), 80, 100)` → shown as very little, dark / less / normal
- Thirst signal: `T = clamp(100 - 100 * max(0, (clamp(0.1 + 0.04 * pace + 0.008 * (Ta - 60), 0.05, 1.5) + (0.02 + 0.002 * (100 - 100 * pow((518.6 - 3.56 * K) / 518.6, 5.256))) * (1 + 0.1 * pace) - cup * W) * t) / (0.6 * mass), 80, 100)` → shown as ON / off
- Constants: `cup = 0.24`

**From sources** (each checked against the linked page)

- In the lower atmosphere, temperature T (°F) = 59 − 0.00356 × altitude (ft), and pressure = 2116 × [(T + 459.7) / 518.6]^5.256 pounds per square foot. — NASA Glenn Research Center: Earth Atmosphere Model — Imperial Units <https://www.grc.nasa.gov/www/k-12/airplane/atmos.html>
- Altitude sickness comes from lower air pressure and oxygen, usually above about 8,000 feet; a rapid pulse, shortness of breath with effort and headache are common; going up gradually is the most important prevention, and drinking plenty of fluids is advised. — MedlinePlus (U.S. National Library of Medicine): High altitude illness <https://medlineplus.gov/ency/article/000133.htm>
- Signs of dehydration include extreme thirst, urinating less, dark-coloured urine and dizziness; sweating in hot weather causes fluid loss. — Mayo Clinic: Dehydration — Symptoms and causes <https://www.mayoclinic.org/diseases-conditions/dehydration/symptoms-causes/syc-20354086>
- For activity in the heat, drink about 1 cup of water every 15–20 minutes. — CDC / NIOSH: Heat Stress — Workplace Recommendations <https://www.cdc.gov/niosh/heat-stress/recommendations/index.html>
- Sweat loss = drop in body weight plus fluid drunk; dividing by time gives sweat rate. — Korey Stringer Institute, University of Connecticut: Sweat Rate Calculator <https://koreystringer-institute.media.uconn.edu/wp-content/uploads/sites/3814/2024/08/Sweat-Rate-Calculator.pdf>
- Most people's resting heart rate is 60–100 beats a minute. — American Heart Association: Target Heart Rates Chart <https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates>

**Our choices** (simplifications — please check these are fair)

- **Oxygen per breath is shown as a share of sea-level air pressure.** The air is still about 21% oxygen at altitude; what drops is the pressure, so each breath holds fewer oxygen molecules.
- **Sitting heart rate rises 0.75 beats for each 1% less oxygen.** Chosen so Elena goes from 70 at home to about 95 at 11,000 ft, matching the clue. Real increases vary between people.
- **The extra heart and breathing effort halves every 3 days at altitude.** Bodies adjust over days to weeks; 3 days is a teaching value.
- **Water breathed out grows with thinner air and faster breathing.** Each breath out carries water vapour; faster breathing in dry mountain air loses more. The amounts are estimates.
- **Body water is shown as a share of the water in a body (about 60% of body weight).** Keeps the numbers easy to compare; pee and thirst bands are teaching lines.

**Illustrative** (made-up numbers): Elena's weight, her half-cup an hour and the four-hour climb are made up for a fictional story. Her sitting breathing rate and the size of the water-loss terms are estimates, not measurements.

**Still being studied:** Why some people get altitude sickness much more easily than others is still being studied.

**Limits:** shows — Shows air pressure — and so oxygen per breath — falling with altitude, from a standard NASA formula; Shows the heart and lungs working harder at rest high up, and settling after days of adjusting; Shows water loss from sweat and breathing adding up over a hike, and drinking making up for it. Does not — Measure any real person — Elena is fictional and the numbers are estimates; Model altitude sickness itself, or say who will get it; Include food, salt, wind or cold.

**Wellbeing line:** A headache, sick feeling or unusual breathlessness on a mountain is a reason to stop, drink water and tell an adult — going down is the real fix.

**Case claims to check**

- Best answer: Both: the thin air means less oxygen per breath, so she breathes and pumps harder — and breathing hard in dry mountain air plus sweating made her lose more water than she drank.
- Takeaway: Two problems can stack. At altitude each breath carries less oxygen, so you breathe and pump harder — and breathing hard in dry mountain air also drains water. A drink fixes one; only time or lower ground fixes the other.
- Transfer: On a ski trip at 9,000 feet, Jamal forgets his water bottle all day. That evening he's out of breath climbing the lodge stairs, has a pounding headache and very dark pee. → *Both: thin air gives less oxygen per breath, and a day in dry mountain air without water left him low on water.*

### The Pollen-Season Runner — Sofia's immune system and breathing on a pollen day  ·  `pollen-breathing`

*Level: Complex* · *systems: Immune system + Lungs & breathing*

Sofia's immune system mistakes pollen for an intruder and releases histamine, which makes her sneeze and her eyes stream. Running hard doesn't cause the allergy — but it makes her breathe several times more air each minute, so far more pollen reaches her nose. Indoors with the windows shut, the same hard breathing brings in almost no pollen, so nothing happens.

- Air breathed in rises from about 11 litres a minute at rest to about 100 at racing pace.
- Pollen breathed in = pollen in the air where she is × air breathed in.
- Sneezing grows with the pollen breathed in and with how strongly her immune system reacts.
- Itchy eyes depend on pollen in the air touching the eyes, not on breathing — sunglasses help them, not her nose.
- Histamine builds up with the total pollen breathed over the run.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Pollen count** `G` · 0–10, case value 8 · choice: How much pollen is floating in the air today, on a simple 0–10 scale like a weather app's pollen bar.
- *bubble* · **Pace** `P` · 0–10, case value 8 · source: We breathe about 12 litres of air a minute at rest and up to about 100 litres during hard exercise — and the pollen comes in with the air.
- *bubble* · **Minutes running** `D` · 5–90 min, case value 40 · choice: The longer she breathes pollen-filled air, the more pollen her immune system has to react to.
- *bubble* · **Where she runs** `loc` · 0.02–1, case value 1 · source: Keeping windows closed during pollen season keeps most pollen out of the air you breathe.
- *bubble* · **Weather** `wx` · 0.3–1.5, case value 1 · source: Hot, dry, windy days put more pollen in the air; rain washes most of it to the ground.
- *bubble* · **Sunglasses** `glasses` · 0–1, case value 0 · source: A hat and sunglasses help keep pollen out of the eyes. They protect the eyes, not the nose.
- *factor* · **How strongly her immune system reacts** `sens` · 0–10, case value 7 · source: In an allergy the immune system treats pollen as an intruder. People differ a lot in how strongly — some don't react at all.
- *factor* · **Breathing at rest** `Brest` · 12–16 breaths/min, case value 14 · source: Most people take 12–16 breaths a minute at rest.

**Formulas**

- Breathing rate (breaths/min): `B = Brest + (55 - Brest) * pow(P / 10, 1.3)`
- Air breathed in (litres/min): `V = 0.8 * Brest + (100 - 0.8 * Brest) * pow(P / 10, 1.3)`
- Pollen breathed in (units/min): `N = G * loc * wx * (0.8 * Brest + (100 - 0.8 * Brest) * pow(P / 10, 1.3)) / 10`
- Sneezes (per hour): `S = round(clamp(sens * G * loc * wx * (0.8 * Brest + (100 - 0.8 * Brest) * pow(P / 10, 1.3)) / 10 / 18, 0, 40))`
- Eyes: `E = clamp(sens * G * loc * wx * (1 - 0.6 * glasses) / 6, 0, 10)` → shown as fine / itchy / itchy & watery
- Alarm chemical (histamine) (% above calm): `H = clamp(sens * G * loc * wx * (0.8 * Brest + (100 - 0.8 * Brest) * pow(P / 10, 1.3)) / 10 * D / 350, 0, 100)`

**From sources** (each checked against the linked page)

- We breathe about 15 times a minute (12 litres of air) at rest, and up to about 40–60 times a minute (100 litres) during exercise. — European Lung Foundation: Your lungs and exercise <https://europeanlung.org/en/information-hub/keeping-lungs-healthy/your-lungs-and-exercise>
- In hay fever the immune system treats the allergen as an intruder and releases chemicals into the blood; histamine is the main one. Sneezing, a runny nose and itchy, watery eyes are common. — Cleveland Clinic: Allergic Rhinitis (Hay Fever) <https://my.clevelandclinic.org/health/diseases/8622-allergic-rhinitis-hay-fever>
- Closing windows during pollen season and wearing a hat and sunglasses help keep pollen away from the nose and eyes. — Cleveland Clinic: Allergic Rhinitis (Hay Fever) <https://my.clevelandclinic.org/health/diseases/8622-allergic-rhinitis-hay-fever>
- Hot, dry, windy days are more likely to have a lot of pollen in the air; on cool, damp, rainy days most pollen is washed to the ground. Staying indoors with air-conditioning helps during pollen season. — MedlinePlus (U.S. National Library of Medicine): Allergic rhinitis <https://medlineplus.gov/ency/article/000813.htm>
- Normal breathing at rest is 12–16 breaths a minute. — Johns Hopkins Medicine: Vital Signs (Body Temperature, Pulse Rate, Respiration Rate, Blood Pressure) <https://www.hopkinsmedicine.org/health/conditions-and-diseases/vital-signs-body-temperature-pulse-rate-respiration-rate-blood-pressure>

**Our choices** (simplifications — please check these are fair)

- **Pollen count is a 0–10 scale.** Real counts are grains per cubic metre and differ by plant; a simple scale keeps the focus on the mechanism.
- **Air breathed in curves up with pace (power 1.3).** Breathing climbs more steeply at hard effort; this matches about 12 litres at rest and 100 at racing pace.
- **A shut indoor room has 2% of the outdoor pollen.** Closed windows keep most pollen out; the exact amount depends on the building, so this is a teaching value.
- **Sneezing is proportional to pollen breathed in.** More pollen landing in the nose means more immune cells triggered; real reactions level off at very high doses.
- **Sunglasses cut eye exposure by 60%.** They block much of the pollen-laden air from the eyes but not all of it; the size is illustrative.

**Illustrative** (made-up numbers): Sofia's reaction strength (7 out of 10), her 40-minute run and the sneezes-per-hour numbers are made up for a fictional story. The histamine percentage is a teaching scale.

**Still being studied:** Why some people's immune systems react to pollen and others' don't is still being studied.

**Limits:** shows — Shows the allergy (immune system) and the breathing (lungs) as two separate parts that multiply together; Shows why the same hard run causes no symptoms indoors; Shows eyes and nose responding to different things. Does not — Measure any real person — Sofia is fictional and the numbers are a teaching scale; Say whether anyone has an allergy, or what to do about one; Include asthma, pollution, or different kinds of pollen.

**Wellbeing line:** Sneezing is harmless, but wheezing, chest tightness or trouble breathing during exercise is a reason to stop and tell an adult.

**Case claims to check**

- Best answer: Both: her immune system treats pollen as an intruder, and running hard makes her breathe in far more air — so far more pollen — each minute, which sets off a bigger alarm.
- Takeaway: The size of an allergy alarm depends on the dose. The immune system reacts to pollen; how much reaches it depends on how much is in the air and how much air you breathe. Run harder in pollen and you inhale a bigger dose.
- Transfer: Leo mows the lawn on a warm May afternoon and starts sneezing. Pushing the mower up the steep part of the yard, breathing hard, his sneezing gets much worse. Mowing the same lawn after a rainstorm, he barely sneezes. → *Grass pollen sets off his immune system, and breathing harder pulls in more of it; rain washes pollen out of the air.*

### The Skipped-Lunch Sprint — Ravi's fuel and his heart and lungs at sprint practice  ·  `fuel-exercise`

*Level: Complex* · *systems: Digestion & fuel + Lungs & heart*

Two things are going on. Sprinting makes everyone's heart and lungs work flat out — Ravi and Ji-woo breathe just as hard. But Ravi hasn't eaten for nine hours, so the fuel his liver stores between meals is running low, and his sprints burn through the fuel inside his leg muscles fast. Low fuel is why his hands shake and his legs give out after two sprints, while Ji-woo keeps going.

- Heart rate climbs in a straight line from resting toward his maximum (about 208 − 0.7 × age) as effort rises.
- Breathing rises from about 14 a minute toward about 52 at a full sprint.
- The liver's fuel store halves about every 5 hours after a meal; a bigger breakfast or a snack keeps it fuller.
- Each hard sprint takes a chunk out of the fuel stored in the leg muscles; short rests make it worse.
- Fuel available to the muscles combines their own store with sugar supplied by the blood.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Running effort** `I` · 0–10, case value 9 · source: Effort on the 0–10 scale health scientists use: 5–6 moderate, 7–8 vigorous, 10 all-out.
- *bubble* · **Hours since eating** `h` · 0–14 h, case value 9 · source: Between meals the liver releases stored fuel to keep blood sugar up; after a long gap the store runs low.
- *bubble* · **Snack before practice** `snack` · 0–2, case value 0 · choice: Food tops up the sugar in the blood that the brain and muscles can use.
- *bubble* · **Sprints done so far** `n` · 0–6, case value 2 · source: Repeated sprinting quickly drains the fuel stored inside the working muscles.
- *bubble* · **Rest between sprints** `r` · 30–180 s, case value 60 · choice: Longer rests let breathing and heart rate come down and the muscles recover a little before the next sprint.
- *factor* · **Age** `age` · 11–18 years, case value 14 · source: Maximum heart rate drops slowly with age.
- *factor* · **Resting heart rate** `Hrest` · 45–95 beats/min, case value 65 · source: Most people rest at 60–100 beats a minute; very active people can be lower.
- *factor* · **Breakfast size** `bk` · 0–2, case value 1 · choice: A bigger meal fills the fuel store more, so it lasts longer.

**Formulas**

- Heart rate (beats/min): `H = Hrest + (208 - 0.7 * age - Hrest) * (I / 10)`
- Breathing rate (breaths/min): `B = Brest + (Bmax - Brest) * pow(I / 10, 1.3)`
- Fuel available to his muscles (% of full): `G = 0.7 * clamp(100 - n * 18 * pow(I / 10, 2) * (1 + 30 / r), 0, 100) + 0.3 * clamp(100 * pow(0.5, max(0, h - 3) / (5 * (0.8 + 0.2 * bk))) + 30 * snack, 0, 100)`
- Fuel store between meals (liver) (% of full): `Fl = clamp(100 * pow(0.5, max(0, h - 3) / (5 * (0.8 + 0.2 * bk))) + 30 * snack, 0, 100)`
- Legs: `K = 0.7 * clamp(100 - n * 18 * pow(I / 10, 2) * (1 + 30 / r), 0, 100) + 0.3 * clamp(100 * pow(0.5, max(0, h - 3) / (5 * (0.8 + 0.2 * bk))) + 30 * snack, 0, 100)` → shown as jelly / heavy / strong
- Hands and head: `Sh = clamp(100 * pow(0.5, max(0, h - 3) / (5 * (0.8 + 0.2 * bk))) + 30 * snack, 0, 100)` → shown as shaky, fuzzy / hungry / steady
- Constants: `Bmax = 52`, `Brest = 14`

**From sources** (each checked against the linked page)

- Glycogen is the stored form of glucose, kept mainly in the liver and muscles. The liver's store helps keep blood sugar steady and depends on the time between meals; after 12–24 hours of fasting it is almost used up. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>
- High-intensity activity, such as repeated sprinting, can quickly lower glycogen stores in the working muscles. — Cleveland Clinic: Glycogen <https://my.clevelandclinic.org/health/articles/23509-glycogen>
- When blood sugar drops too low, people can shake or tremble, feel hungry, and have unclear thinking. — MedlinePlus (U.S. National Library of Medicine): Low blood sugar <https://medlineplus.gov/ency/article/000386.htm>
- A regression equation predicts maximum heart rate as 208 − 0.7 × age in healthy adults. — PubMed: Age-predicted maximal heart rate revisited (J Am Coll Cardiol) <https://pubmed.ncbi.nlm.nih.gov/11153730/>
- Most people's resting heart rate is 60–100 beats a minute; vigorous activity is about 70–85% of maximum. — American Heart Association: Target Heart Rates Chart <https://www.heart.org/en/healthy-living/fitness/fitness-basics/target-heart-rates>
- Health scientists rate effort on a 0–10 scale: 5–6 is moderate, 7–8 starts vigorous. — CDC: Measuring Physical Activity Intensity <https://www.cdc.gov/physical-activity-basics/measuring/index.html>
- We breathe about 15 times a minute at rest and up to about 40–60 times a minute during exercise. — European Lung Foundation: Your lungs and exercise <https://europeanlung.org/en/information-hub/keeping-lungs-healthy/your-lungs-and-exercise>

**Our choices** (simplifications — please check these are fair)

- **The liver store halves every 5 hours after a meal (longer after a bigger breakfast).** Gives a store that is low but not empty by 4 p.m., consistent with 'almost used up after 12–24 hours'.
- **Each sprint at full effort uses about 18% of the muscle store, more with short rests.** Repeated sprints drain muscle glycogen quickly; the exact amount differs between people, so this is a teaching value.
- **Fuel available to the muscles is 70% their own store and 30% sugar from the blood.** Working muscles rely mostly on their own store during sprints; blood sugar tops it up. The split is a simplification.
- **Heart rate and breathing don't depend on fuel.** That's why Ravi and Ji-woo breathe just as hard. In real life a very low fuel level can also change heart rate a little; we left that out.

**Illustrative** (made-up numbers): Ravi's nine-hour gap, his normal breakfast and his resting heart rate are made up for a fictional story. The fuel percentages and the 'jelly / heavy / strong' bands are a teaching scale.

**Limits:** shows — Shows effort driving heart rate and breathing the same way for everyone; Shows a long gap since eating lowering the fuel store, and sprints draining the muscles' own fuel; Shows why two runners can breathe equally hard but tire at different times. Does not — Measure any real person — Ravi is fictional and the fuel numbers are a teaching scale; Say what or when anyone should eat; Include water, heat, sleep or any medical condition.

**Wellbeing line:** Feeling shaky, dizzy or confused during exercise is a reason to stop and tell a coach or adult.

**Case claims to check**

- Best answer: Both: sprinting makes muscles burn fuel and oxygen very fast (that's the hard breathing everyone has), and after nine hours without food Ravi had less fuel to burn — so his muscles ran short at sprint pace even though jogging was fine.
- Takeaway: Effort and fuel are a pair. Sprinting makes everyone breathe hard because muscles burn fuel and oxygen fast; whether you can keep going depends on how much fuel is left. Lungs deliver the oxygen; food supplies the fuel.
- Transfer: Maya plays three soccer games in a tournament. Game one at 9 a.m. goes great, but in the third game at 3 p.m. — with only a granola bar since breakfast — her legs feel heavy and she can't keep up in the sprints, though she can still jog fine. → *Hard sprints burn muscle fuel fast, and with little food since breakfast her muscles ran short at high effort.*

### The Snow-Day Sledder — Elif's skin in the cold and the snow-glare  ·  `cold-uv`

*Level: Complex* · *systems: Skin & temperature + Skin & sunlight*

Elif's skin had two separate things happen to it. The freezing, windy air pulled heat out of her fast, so her muscles shivered to make heat and blood was kept away from her skin — all of which fades within minutes by the fire. Meanwhile UV from the sky, doubled by snow reflecting it back up, was damaging her skin cells; that shows up as redness hours later, and peeling days later.

- Wind chill uses the National Weather Service formula: colder air and stronger wind take heat faster.
- Shivering grows as the wind chill drops below about 40 °F; warm clothes and a hat reduce it.
- UV reaching her face = hours outside × UV index × the snow boost, minus what sunscreen blocks.
- Redness appears once the UV passes what her skin can take, and grows from there.
- The cold effects end when she warms up; the UV damage has already been done.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **Hours outside** `O` · 0–6 h, case value 5 · source: Sun damage adds up with time outdoors; the redness shows up hours afterwards.
- *bubble* · **UV index** `UVI` · 0–8, case value 3 · source: The UV index measures how strong the sun's UV is; at 3 or more, skin needs protection.
- *bubble* · **Ground** `snow` · 0–1, case value 1 · source: Snow reflects up to 80% of the sun's UV, so the rays hit you twice — from above and from below.
- *bubble* · **Face protection** `cover` · 0–1, case value 0 · choice: Sunscreen blocks much of the UV before it reaches the skin cells.
- *bubble* · **Air temperature** `T` · -10–50 °F, case value 20 · source: The colder the air, the faster it pulls heat from exposed skin.
- *bubble* · **Wind** `wind` · 3–30 mph, case value 10 · source: Wind makes heat leave exposed skin faster — that's what the 'wind chill' temperature measures.
- *factor* · **How easily her skin burns** `sk` · 4–12, case value 7 · choice: People's skin differs in how much UV it takes before it burns.
- *factor* · **Clothing** `cl` · 0–2, case value 0 · source: Warm, covering clothes cut the heat lost from the body, so there is less to make up by shivering.

**Formulas**

- Wind chill (°F): `WC = 35.74 + 0.6215 * T - 35.75 * pow(wind, 0.16) + 0.4275 * T * pow(wind, 0.16)`
- Shivering now (0–10): `V = round(clamp((40 - (35.74 + 0.6215 * T - 35.75 * pow(wind, 0.16) + 0.4275 * T * pow(wind, 0.16))) / 5 * (1 - 0.3 * cl) * (1 - pow(0.5, O / 0.5)), 0, 10))`
- Blood flow to skin: `F = 100 - 6 * clamp((40 - (35.74 + 0.6215 * T - 35.75 * pow(wind, 0.16) + 0.4275 * T * pow(wind, 0.16))) / 5 * (1 - 0.3 * cl) * (1 - pow(0.5, O / 0.5)), 0, 10)` → shown as low — pale fingers / reduced / normal
- UV reaching her face (burn units): `E = O * UVI * (1 + 0.8 * snow) * (1 - 0.7 * cover)`
- Face redness that night (0–10): `B = clamp((O * UVI * (1 + 0.8 * snow) * (1 - 0.7 * cover) - sk) / 3, 0, 10)`

**From sources** (each checked against the linked page)

- Snow reflects up to 80% of the sun's UV light, so the rays hit you twice; UV can burn skin year-round, especially at high altitudes. — The Skin Cancer Foundation: Winter Sun Safety <https://www.skincancer.org/blog/winter-sun-safety/>
- The first signs of sunburn may not appear for a few hours; the full effect may take 24 hours; peeling comes several days later; reflections off snow make the sun's rays stronger. — MedlinePlus (U.S. National Library of Medicine): Sunburn <https://medlineplus.gov/ency/article/003227.htm>
- The UV Index rates UV strength; at 3 or more, protection is needed. — U.S. EPA: UV Index Scale <https://www.epa.gov/sunsafety/uv-index-scale-0>
- Wind chill is based on the rate of heat loss from exposed skin caused by wind and cold: Wind chill (°F) = 35.74 + 0.6215T − 35.75·V^0.16 + 0.4275T·V^0.16, for T in °F and wind V in mph. — National Weather Service (NOAA): Wind Chill Chart <https://www.weather.gov/safety/cold-wind-chill-chart>
- Cold, wet or windy conditions can make the body lose more heat than it makes; shivering and chattering teeth are early signs. — Cleveland Clinic: Hypothermia (Low Body Temperature) <https://my.clevelandclinic.org/health/diseases/21164-hypothermia-low-body-temperature>
- Shivering is rapid, repeated muscle contractions that release heat to warm us up. — The Conversation: Curious Kids: why do we shiver when we feel cold? <https://theconversation.com/curious-kids-why-do-we-shiver-when-we-feel-cold-222863>

**Our choices** (simplifications — please check these are fair)

- **Snow adds 80% to the UV on her face.** Uses the 'up to 80%' reflection figure; real boosts depend on how fresh the snow is and which way she faces.
- **Shivering grows by 1 point for every 5 °F of wind chill below 40 °F.** Gives strong shivering at a 9 °F wind chill with no hat; the real starting point varies between people.
- **Shivering builds up over the first hour outside.** Bodies cool gradually; after about an hour the shivering is steady.
- **Sunscreen blocks 70% of the UV.** Well-applied sunscreen blocks more, but people usually put on less than the label assumes; this is a teaching value.
- **Narrower skin blood vessels are shown as falling skin blood flow.** Keeping warm blood away from the skin is the body's heat-saving move; the size here is a teaching scale.

**Illustrative** (made-up numbers): Elif's five hours, the UV index of 3, 20 °F with a 10 mph wind and her 'sometimes burns' skin are made up for a fictional story. Burn units and the 0–10 redness and shivering scales are teaching scales.

**Limits:** shows — Shows two separate effects on the same skin, each with its own timing; Uses the National Weather Service wind chill formula for the cold; Shows snow boosting UV and sunscreen cutting it. Does not — Measure any real person — Elif is fictional and the scales are for teaching; Model frostbite or dangerous cold; Account for time of day, altitude, clouds, or skin tone in detail.

**Wellbeing line:** Numb, white or hard patches of skin in the cold, or blistering after sun, are reasons to tell an adult straight away.

**Case claims to check**

- Best answer: Two things: the cold made her shiver and pulled blood away from her skin (gone once she warmed up), and UV light — boosted by snow reflecting it — damaged her skin cells, showing up as redness hours later.
- Takeaway: Cold and sunlight can hit the same skin on the same day but work differently. Cold triggers a fast response that switches off when you warm up; UV damage is silent at first and shows up hours later — and snow or water can boost the dose.
- Transfer: Tomás spends a sunny afternoon fishing from a boat on a cold lake in early spring. He comes home shivering and warms up in a hot shower, but by bedtime the backs of his hands and his nose are bright red. → *Cold made him shiver (fixed by the shower), while sunlight — plus light bouncing off the water — damaged his skin cells, showing up hours later.*

### The Winter Swim Team — Mateo's heat balance in a winter pool  ·  `cold-exercise`

*Level: Complex* · *systems: Skin & temperature + Muscles & energy*

Mateo's temperature is a balance. The 58 °F water pulls heat out of him the whole time — far faster than air would. Working muscles make heat. In slow kicking drills they make little, so heat loss wins and he shivers to make up the gap. Sitting wet on the bench they make almost none. In the sprint set his muscles make more heat than the water takes, so the shivering stops and his face flushes.

- Heat lost grows with how far the water is below body temperature; wet skin in cold air loses heat too.
- Heat made by muscles grows with effort, and more with a full stroke than kicking alone.
- Shivering switches on when heat lost is clearly bigger than heat made, and builds over the first minutes.
- Drying off in a towel cuts heat loss to a fraction.
- Breathing rises from about 14 to about 46 a minute as effort goes up.

**Dials** (primary = the main slider; bubbles = extra dials for this level; factors = the character and setting)

- *primary* · **How cold the water is** `C` · 0–30 °F, case value 28 · source: Water takes heat from the body up to 26 times faster than air at the same temperature — the colder the pool, the faster heat leaves.
- *bubble* · **Where he is** `where` · 0–2, case value 0 · source: Being wet in cold air chills the body too; drying off and covering up cuts the heat loss a lot.
- *bubble* · **Minutes there so far** `tm` · 0–30 min, case value 10 · choice: The body cools gradually, so shivering builds up over the first several minutes.
- *bubble* · **Swimming effort** `E` · 0–10, case value 2 · source: Effort on the 0–10 scale health scientists use: 5–6 moderate, 7–8 vigorous, 10 all-out.
- *bubble* · **Stroke** `stroke` · 0–1, case value 0 · source: The more muscles move, the more heat they make — arms and legs together make more than legs alone.
- *factor* · **Build** `ins` · 0.8–1.2, case value 1 · choice: A thicker layer under the skin slows heat escaping; slim swimmers lose heat a little faster.
- *factor* · **Air temperature on deck** `Ta` · 30–80 °F, case value 45 · source: Cold air chills wet skin on the bench, and the head and arms each time they leave the water.

**Formulas**

- Heat lost (units/min): `L = ins * (clamp(1 - where, 0, 1) * ((91 - (86 - C)) / 3 + (91 - Ta) / 40) + clamp(1 - abs(where - 1), 0, 1) * (91 - Ta) / 4 + clamp(where - 1, 0, 1) * (91 - Ta) / 14)`
- Heat made by muscles (units/min): `M = 1.2 + clamp(1 - where, 0, 1) * 16 * (E / 10) * (0.5 + 0.5 * stroke)`
- Shivering (0–10): `V = round(clamp((ins * (clamp(1 - where, 0, 1) * ((91 - (86 - C)) / 3 + (91 - Ta) / 40) + clamp(1 - abs(where - 1), 0, 1) * (91 - Ta) / 4 + clamp(where - 1, 0, 1) * (91 - Ta) / 14) - (1.2 + clamp(1 - where, 0, 1) * 16 * (E / 10) * (0.5 + 0.5 * stroke)) - 2) * 1.1 * min(1, (tm + 2) / 12), 0, 10))`
- Breathing rate (breaths/min): `B = 14 + clamp(1 - where, 0, 1) * 32 * pow(E / 10, 1.3)`
- Fingers and lips: `S = ins * (clamp(1 - where, 0, 1) * ((91 - (86 - C)) / 3 + (91 - Ta) / 40) + clamp(1 - abs(where - 1), 0, 1) * (91 - Ta) / 4 + clamp(where - 1, 0, 1) * (91 - Ta) / 14) - (1.2 + clamp(1 - where, 0, 1) * 16 * (E / 10) * (0.5 + 0.5 * stroke))` → shown as pink / pale / white fingers, blue lips
- Heat balance: `K = (1.2 + clamp(1 - where, 0, 1) * 16 * (E / 10) * (0.5 + 0.5 * stroke)) - ins * (clamp(1 - where, 0, 1) * ((91 - (86 - C)) / 3 + (91 - Ta) / 40) + clamp(1 - abs(where - 1), 0, 1) * (91 - Ta) / 4 + clamp(where - 1, 0, 1) * (91 - Ta) / 14)` → shown as losing heat / about even / making extra heat — face flushed

**From sources** (each checked against the linked page)

- Water conducts body heat away up to 26 times faster than air of the same temperature. — National Weather Service (NOAA): The Hazards of Cold Water Boating <https://www.weather.gov/car/TheHazardsofcoldwaterboating>
- Cold, wet or windy conditions can make the body lose more heat than it generates; the chill can come from being wet or in cold water. Shivering and chattering teeth are early signs. — Cleveland Clinic: Hypothermia (Low Body Temperature) <https://my.clevelandclinic.org/health/diseases/21164-hypothermia-low-body-temperature>
- Our bodies constantly lose heat; moving muscles generate heat, and the more they move the more heat they make. Shivering is rapid, repeated muscle contractions that release heat. — The Conversation: Curious Kids: why do we shiver when we feel cold? <https://theconversation.com/curious-kids-why-do-we-shiver-when-we-feel-cold-222863>
- Effort is rated 0–10: 5–6 is moderate and 7–8 is vigorous. — CDC: Measuring Physical Activity Intensity <https://www.cdc.gov/physical-activity-basics/measuring/index.html>
- We breathe about 15 times a minute at rest and up to about 40–60 times a minute during exercise. — European Lung Foundation: Your lungs and exercise <https://europeanlung.org/en/information-hub/keeping-lungs-healthy/your-lungs-and-exercise>

**Our choices** (simplifications — please check these are fair)

- **Heat lost in water grows in a straight line with the gap below 91 °F (skin temperature).** Heat flows faster across a bigger temperature gap; a straight line is the simplest version.
- **Sitting wet on the bench loses about as much heat as the slow drills.** Water evaporating from wet skin takes heat, and there's no muscle heat at all. The size is a teaching value.
- **Muscle heat rises from 1.2 at rest to about 17 units at an all-out full stroke.** Hard exercise makes many times more heat than resting; the exact ratio varies between people.
- **Shivering builds up over the first 10 minutes.** Bodies cool gradually rather than all at once.
- **Build changes heat loss by 20% either way.** The insulating layer under the skin differs between people; the size is illustrative.

**Illustrative** (made-up numbers): Mateo's 58 °F pool, 45 °F deck and the effort of the drills and sprints are made up for a fictional story. Heat units and the 0–10 shivering scale are teaching scales.

**Limits:** shows — Shows heat lost to cold water and heat made by working muscles as two separate flows; Shows shivering switching on when heat lost is bigger than heat made; Shows hard swimming making enough heat to switch shivering off, and the bench being the coldest place. Does not — Measure any real person — Mateo is fictional and the numbers are teaching values; Include wind, wetsuits or how long the whole practice lasts; Model dangerous cold; it stays inside a normal practice.

**Wellbeing line:** If someone can't stop shivering or seems confused after a cold swim, get them warm and tell an adult right away.

**Case claims to check**

- Best answer: The cold water takes heat away the whole time, while working muscles make heat. Swimming slowly, heat loss wins and they shiver; sprinting, the muscles' heat wins.
- Takeaway: Your temperature is a balance between heat lost to the surroundings and heat made by working muscles. Cold water or air pulls heat out all the time — move hard and you make enough to win; stop moving and shivering has to take over.
- Transfer: Priya goes cross-country skiing on a freezing morning. Skiing uphill she unzips her jacket because she's too warm; when she stops at the top to wait for her friends, she's soon shivering. → *The cold air takes heat the whole time; skiing uphill her muscles make more heat than she loses, but standing still they make almost none, so she shivers.*

## Sign-off

I have reviewed the body models and the case claims listed above at the level of the science, and read the four spot-check cases in full.

Name: ______________________   Role: ______________________   Date: __________

Corrections (model or case, and what to change):

________________________________________________________________________

________________________________________________________________________

*Generated by `tools/review_pack.py` from the case and model files. Re-run after any change.*
