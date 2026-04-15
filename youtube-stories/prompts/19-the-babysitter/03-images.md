# EP19 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP19-F01A.png`, `EP19-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/prompts/19-the-babysitter/media/images/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `dara-ep19-voxel-base.png` | Dara in scene — character-driven | F02, F03, F04, F09, F13, F14, F15, F16, F17, F18, F19, F20, F21, F31, F32, F33, F34 |
| **Nano Banana 2** + `marcus-ep19-voxel-base.png` | Marcus in scene | F03, F07, F08, F09, F25, F26, F27, F28 |
| **Nano Banana 2** + `emma-ep19-voxel-base.png` | Emma in scene | F06, F07, F08, F11, F12 |
| **Nano Banana 2** + `patricia-ep19-voxel-base.png` | Patricia in scene | F20 |
| **Flux 2 Pro** | Environments, exteriors, objects (no character) | F01, F05, F10, F22, F23, F24, F29, F30 |
| **Ideogram 3** | Text on screen, documents, phone UI, legal text | F13C, F19C, F20C, F24C, F29C, F34B/C |
| **Seedream 4.5** | Atmospheric hero stills — driveway night, kitchen dawn, lights in rooms | F14A, F15A, F16 |

> Note: F03 needs both Dara AND Marcus — attach both character refs to Nano Banana 2.
> F07, F08, F09 show Marcus + Emma together in scenes — attach both refs.
> F11, F12 are Emma scenes in the kitchen during the discovery — attach emma ref.
> F13C (phone notes app text) handled by Ideogram 3 for text legibility.
> F20C (attorney notepad) is Ideogram 3 for exact text.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F11B, F11C, F12B, F12C, F13B
- These are the Betrayal peak scenes (kitchen table discovery, Emma and Marcus caught, Dara's face after three words)

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F10 (setup/crack phase — before kitchen discovery)
- F14 onward (fall, pivot, karma, downfall, epilogue)
- ANY Ken Burns stills
- Epilogue frames F31–F34

**Other camera moves:**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DUTCH · DESCENT · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Suburban house exterior, warm golden hour | 1 Hook | `#F3E9D2` warm cream + gold | Flux 2 Pro | ⭐ | A: wide house exterior warm evening, B: front door close — normal welcoming home, C: driveway detail — one family car |
| F02A/B/C | Dara at home desk, notes on phone, warm morning | 2 Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + dara ref | | A: wide warm home interior, B: Dara medium — at desk, composed, C: Dara's phone face-up on desk |
| F03A/B/C | Marcus + Dara morning routine, kitchen, family warmth | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + dara + marcus refs | | A: wide warm kitchen interior, B: Marcus + Dara together, C: coffee mugs detail — morning routine |
| F04A/B/C | Marcus on soccer field, coaching kids, Saturday morning | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + marcus ref | | A: wide soccer field sunny morning, B: Marcus medium — whistle, coaching, C: soccer ball and orange slices detail |
| F05A/B/C | Emma arriving at front door, dressed slightly nicer than usual | 2 Intro → 3 Crack | `#F3E9D2` warm cooling | Flux 2 Pro (door exterior) | ⭐ | A: wide front porch — Emma arriving, B: front door medium — Emma smiling at entry, C: Emma's outfit detail — nicer blouse, hair down |
| F06A/B/C | Emma with children at dinner table, Marcus present | 3 Crack | `#CBD5E1` cool entering | Nano Banana 2 + emma ref | ⭐ | A: wide warm kitchen — family dinner unexpected, B: Emma + Marcus at table together, C: pasta dish close — "Daddy's special pasta" |
| F07A/B/C | Marcus arriving home late — Thursday night, Emma's car visible | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + marcus ref | | A: wide driveway — two cars at night, B: Marcus at front door — later than expected, C: Emma's silver hatchback detail — still there |
| F08A/B/C | Dara noticing pattern — Marcus/Emma timing, her expression | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + marcus + emma ref | ⭐ | A: wide — Dara in background, Marcus and Emma in mid-ground saying goodnight, B: Dara medium — watching, face shifting, C: Dara's expression — cataloguing, not yet certain |
| F09A/B/C | Dara alone, typing in phone notes app — dates and details | 3 Crack | `#CBD5E1` cool to dark | Nano Banana 2 + dara ref | ⭐ | A: wide home interior — nighttime, Dara alone at kitchen table, B: Dara medium — phone in hand, typing quietly, C: phone screen close — notes app with dates visible |
| F10A/B/C | Dara in car, 7:14 PM — both cars in driveway visible through windshield | 4 Betrayal | `#0B1426` dark cold | Seedream 4.5 (atmospheric) + dara ref | ⭐ BETRAYAL APPROACH | A: wide shot — Dara's car parked, lit house and both cars in driveway behind windshield, B: Dara inside car medium — stillness, watching, C: windshield view — two cars in driveway, house lights on |
| F11A/B/C | Kitchen discovery — Marcus and Emma at Dara's kitchen table | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + emma + marcus refs | ⭐ PEAK BETRAYAL | A: wide kitchen — the scene from doorway, B: DUTCH — Marcus and Emma at table, too close, C: DUTCH — their faces, the proximity unmistakable |
| F12A/B/C | Dara sets purse on counter — three words moment | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + dara ref | ⭐ | A: wide kitchen — Dara at counter, Marcus and Emma in frame, B: DUTCH — Dara's hand placing purse down, C: DUTCH — Dara's face: completely level, decided |
| F13A/B/C | Emma picking up bag and leaving — Dara does not watch | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + dara ref | | A: wide — Emma leaving through front door, Dara turned away, B: DUTCH — front door closing behind Emma, C: Dara's profile — standing, not turning to watch |
| F14A/B/C | Dara alone at kitchen table — pre-dawn, long sit | 5 Fall | `#0B1426` dark | Seedream 4.5 atmospheric | ⭐ | A: wide kitchen — nighttime, one lamp, Dara at table alone, B: Dara medium — sitting, hands on table, not sleeping, C: kitchen window — darkness outside, faint dawn beginning |
| F15A/B/C | Dara making children's breakfast — functional, composed | 5 Fall | `#0B1426` dark | Nano Banana 2 + dara ref | | A: wide warm kitchen — early morning, B: Dara medium — making breakfast, composed, C: children's plates detail — normal morning routine continuing |
| F16A/B/C | Dara at bus stop, watching kids board — alone after | 5 Fall | `#0B1426` dark | Nano Banana 2 + dara ref | ⭐ | A: wide bus stop — quiet neighborhood, B: Dara medium — watching bus leave, children aboard, C: Dara's back — bus pulling away, alone on quiet street |
| F17A/B/C | Dara sitting back at empty table — Marcus's coffee mug still there | 5 Fall | `#0B1426` dark | Nano Banana 2 + dara ref | | A: wide kitchen — daylight now, empty house, B: Dara at table medium — still and present, C: coffee mug close — left on counter, untouched |
| F18A/B/C | Dara calling sister — purposeful, clear | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + dara ref | ⭐ PIVOT START | A: wide warm home interior — slight color warming, B: Dara medium — phone to ear, purposeful expression, C: phone screen close — sister's name on screen |
| F19A/B/C | Attorney's office reception — Dara arriving | 6 Pivot | Turning warm `#D4A547` | Flux 2 Pro (office env) | | A: wide professional office exterior — calm, institutional, B: office entrance medium — Dara entering, C: reception desk close — professional, warm wood |
| F20A/B/C | Patricia's office — Dara with phone notes open on desk | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + dara + patricia refs | ⭐ | A: wide lawyer's office — warm professional, B: Dara + Patricia medium — across the desk, composed deliberate, C: phone on desk close — notes app open, 18 entries (Ideogram 3) |
| F21A/B/C | Dara at laptop — certification enrollment confirmation | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + dara ref | | A: wide home desk — warm light, B: Dara medium — at laptop, enrolling, C: laptop screen close — certification program enrollment confirmed |
| F22A/B/C | Divorce papers filed — courthouse exterior | 7 Karma | Full warm `#D4A547` + gold | Flux 2 Pro | ⭐ | A: wide courthouse exterior — institutional, solid, B: courthouse entrance medium, C: filed documents stamp close — "Filed" seal visible |
| F23A/B/C | Primary custody order — Dara's name | 7 Karma | Full warm `#D4A547` | Flux 2 Pro (document) | | A: wide documents on warm desk, B: custody order medium — "Primary Custody" visible, C: document close — Dara's name + children's names |
| F24A/B/C | House deed + inheritance documentation on table | 7 Karma | Full warm `#D4A547` | Ideogram 3 (deed text) | ⭐ | A: wide — documents on warm desk, B: deed medium — "Down payment: inheritance" notation, C: deed close — "Dara [Last Name]. Retained primary owner." |
| F25A/B/C | Marcus carrying box out of house — rental move | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + marcus ref | | A: wide house exterior — Marcus with box, B: Marcus medium — box in hands, no whistle, C: house front door — closing behind him |
| F26A/B/C | Emma alone at home with newborn — her family had returned | 7 Karma | Cold neutral | Flux 2 Pro (simple domestic) | | A: wide modest apartment — just Emma, B: apartment medium — quiet, alone, C: window close — looking out |
| F27A/B/C | Soccer field — empty coaching spot, no Marcus | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro (sports field) | | A: wide soccer field — other coaches, no Marcus, B: empty bench medium — orange cooler still there, coach clipboard untouched, C: field detail — kids playing, gap where Marcus was |
| F28A/B/C | Marcus at sparse rental, financial documents spread out | 8 Downfall | Cold gray `#1F2937` | Nano Banana 2 + marcus ref | ⭐ | A: wide sparse rental — cold, minimal, papers everywhere, B: Marcus medium — at desk, documents in front of him, C: Marcus's expression close — managing too many things |
| F29A/B/C | Second custody filing — courthouse again, second proceeding | 8 Downfall | Cold gray `#1F2937` | Flux 2 Pro + Ideogram 3 (filing text) | | A: wide courthouse — same building, different case, B: filing desk medium — second set of documents, C: filing header close — "Custody Proceeding No. 2" |
| F30A/B/C | Marcus's financial split — three obligations visible | 8 Downfall | Cold gray `#1F2937` | Flux 2 Pro (documents) | | A: wide desk — three separate stacks of financial documents, B: documents medium — three obligation headers, C: bottom line close — numbers that don't leave room |
| F31A/B/C | Dara opening certification email — evening, warm | Epilogue | Full warm `#D4A547` | Nano Banana 2 + dara ref | ⭐ EPILOGUE START | A: wide warm home desk — evening golden light, B: Dara medium — at laptop, reading, expression lifting, C: laptop screen close — certification passed, warm confirmation |
| F32A/B/C | Dara at new job — instructional design office, part-time | Epilogue | Full warm + sage `#6B7F5A` | Nano Banana 2 + dara ref | ⭐ | A: wide warm office — nonprofit, modest but purposeful, B: Dara at desk medium — working, in her element, C: desk detail — her work, her name on it |
| F33A/B/C | Dara coming home — turning on lights in every room | Epilogue | Full warm `#D4A547` + sage | Nano Banana 2 + dara ref | ⭐ | A: wide house exterior — lit windows, warm from inside, B: Dara inside medium — reaching for light switch in hallway, C: hallway lit close — light flooding into warm room |
| F34A/B/C | Karma Caught Up butterfly logo / CTA | CTA | Deep navy + gold | Ideogram 3 (logo/card) | ⭐ | A: wide — warm home backdrop subtle, B: butterfly card medium — "@KarmaCaughtUp" logo, C: CTA close — "Subscribe · New story every week." |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Suburban house exterior, warm golden hour | Beat 1 Hook | 15s | WARM `#F3E9D2` | Slow PUSH in on front door | Opening anchor — normal house, inside story |
| S02 | Marcus on soccer field — reliable community dad | Beat 2 | 15s | WARM `#F3E9D2` + gold | Slow PAN-R across field | Establish the man before the fall |
| S03 | Emma arriving — dressed slightly nicer | Beat 3 | 20s | COOL `#CBD5E1` | Slow PUSH in on Emma's entrance | Audience sees the crack before Dara names it |
| S04 | Dara at nighttime kitchen table, typing notes | Beat 3 | 20s | COOL entering dark | Slow TILT-DN to phone screen | Her documentation — quiet weapon assembling |
| S05 | Dara's car — driveway with both cars in windshield view | Beat 4 | 25s | DARK `#0B1426` | STATIC — hold on two cars | ⭐ eleven minutes of suspension |
| S06 | Kitchen discovery — Marcus and Emma at table | Beat 4 | 30s | DARK `#0B1426` | Slow PUSH in toward table | ⭐ PEAK BETRAYAL — audience watches it land |
| S07 | Dara's face: level, decided, three words done | Beat 4 | 20s | DARK `#0B1426` | Slow PULL back — reveals empty kitchen around her | ⭐ the stillness after "Please leave now." |
| S08 | Dara alone at kitchen table — pre-dawn, long sit | Beat 5 | 20s | DARK COLD `#0B1426` | Slow DESCENT onto table surface | ⭐ the night she sat until morning |
| S09 | Dara calling sister — the pivot in motion | Beat 6 | 20s | TURNING WARM `#D4A547` | Slow PUSH in on Dara's face | ⭐ the first move of the new chapter |
| S10 | Phone on attorney's desk — notes app, 18 entries | Beat 6 | 25s | TURNING WARM gold | STATIC — hold on screen | ⭐ six weeks of quiet documentation made visible |
| S11 | House deed — retained primary owner | Beat 7 | 25s | FULL WARM `#D4A547` | Slow PUSH in on name | ⭐ she keeps the house |
| S12 | Marcus carrying box from house | Beat 7 | 15s | COLD GRAY `#1F2937` | Slow PULL back — reveals full house he's leaving | Justice — earned and quiet |
| S13 | Marcus at sparse rental — three financial stacks | Beat 8 | 20s | COLD GRAY `#1F2937` | Slow PULL back — reveals how sparse the rental is | The full financial weight in one frame |
| S14 | Dara turning lights on — every room warm | Epilogue | 30s | FULL WARM gold + sage | Slow PUSH in through hallway lights | ⭐ most powerful epilogue image |
| S15 | Dara at job desk — certification on wall, warm glow | Epilogue/CTA | 40s | FULL WARM `#D4A547` + sage | Slow CRANE-UP from desk to wide warm office | ⭐ FINAL SHOT — she is whole, she is working |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Dara, Marcus, Emma, or Patricia appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Seedream 4.5 — atmospheric hero moments:**
- Use for F10 (car in driveway), F14 (kitchen pre-dawn), F16 (bus stop alone)
- Maximum atmosphere, moody environmental lighting
- "Atmospheric premium voxel art, cinematic mood lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear (phone notes app, attorney notepad, house deed, CTA)
- "Legible voxel-style UI, clear typography, 1920x1080"
- Key text: "Thursday. Late again." / notes app entries / "Down payment: inheritance" / "Primary Custody: Dara" / "@KarmaCaughtUp · Subscribe"

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction for CapCut keyframing
- S15 (40s epilogue) — gen highest quality, most important still in episode
