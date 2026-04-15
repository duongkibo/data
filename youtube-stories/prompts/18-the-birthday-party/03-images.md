# EP18 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP18-F01A.png`, `EP18-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/prompts/18-the-birthday-party/media/images/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `vivian-voxel-base.png` | Vivian in scene — character-driven | F01, F02, F06, F08, F09, F10, F11, F12, F14, F18, F19, F20, F21, F30, F31, F32, F33 |
| **Nano Banana 2** + `daniel-voxel-base.png` | Daniel in scene | F03, F04, F07, F09, F10, F13, F22, F28, F29 |
| **Flux 2 Pro** | Environments, party interiors, exterior establishing | F01 (party env), F05, F15, F16, F17, F23, F25, F27, F34 |
| **Ideogram 3** | Text documents, legal papers, phone screens, card | F13 (divorce papers), F24 (settlement doc), F26 (Instagram), F34 (CTA card) |
| **Seedream 4.5** | Atmospheric wide shots — party atmosphere, kitchen floor moment | F06 (atmosphere), F19 (kitchen floor) |

> Note: F09 and F10 need both Vivian AND Daniel — use Nano Banana 2 with both refs attached.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F09B, F09C, F10B, F10C, F11B
- These are the door-arrival betrayal zone and immediate aftermath — maximum psychological tension

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F08 (setup/crack phase)
- F18 onward (pivot, karma, epilogue)
- ANY Ken Burns stills
- Epilogue frames F30–F34

**Other camera moves (reference for 03b prompts):**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DESCENT · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Hawthorn & Co. event firm — Vivian at her desk, morning, confident in her work | Hook/Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + vivian ref / Flux 2 Pro (env) | | A: wide office, B: Vivian at desk medium, C: portfolio/event board close |
| F02A/B/C | Vivian preparing for birthday party — her home, getting ready, emerald dress | Intro | Warm cream + gold `#D4A547` | Nano Banana 2 + vivian ref | | A: wide bedroom/dressing area, B: Vivian in emerald dress medium, C: gold earring detail close |
| F03A/B/C | Daniel working the room at a prior event — charming, crowd-pleasing | Intro | Warm gold, party ambient | Nano Banana 2 + daniel ref | | A: wide party room with Daniel hosting, B: Daniel laughing with guests medium, C: his phone face-down on table close |
| F04A/B/C | November — Daniel's late nights, leaving the office, phone in hand | Crack | `#F3E9D2` fading → cool slate | Nano Banana 2 + daniel ref | | A: wide office exterior at night, B: Daniel at parking lot checking phone, C: phone screen glow close (content obscured) |
| F05A/B/C | Hotel receipt — Arden Grand, dry cleaning shop parking lot | Crack | Cool neutral palette | Flux 2 Pro (dry cleaner env) | ⭐ | A: wide dry cleaning parking lot, B: Vivian's hand holding receipt, C: receipt close — "ARDEN GRAND" + date visible |
| F06A/B/C | Party setup — white linen, tall candles, champagne on arrival, La Table du Soir | Crack | Warm gold transitioning | Seedream 4.5 (atmosphere) + Flux 2 Pro | | A: wide party interior establishing, B: catering staff setting tables, C: champagne coupes on silver tray |
| F07A/B/C | Daniel at 8 PM — working the room, hand on shoulder, charming guests | Crack → Betrayal | Warm party gold, beginning to shadow | Nano Banana 2 + daniel ref | | A: wide room with Daniel center, B: Daniel charming a guest group, C: his face — laughing, performing |
| F08A/B/C | Vivian talking to Petra — champagne, warm party ambient | Crack → Betrayal | Warm gold | Nano Banana 2 + vivian ref | | A: wide party room with Vivian and Petra, B: Vivian and Petra in conversation medium, C: Vivian's face — relaxed, present |
| F09A/B/C | 8:47 PM — Claire at the door. Visibly pregnant. The room begins to silence. | Betrayal | `#0B1426` entering cold, party lights still warm | Nano Banana 2 + vivian ref / Claire inline | ⭐ BETRAYAL PEAK | A: wide — room seen from door, Claire at threshold, B: DUTCH — Claire's face at doorway, C: DUTCH — room going quiet — guests registering |
| F10A/B/C | Daniel goes white — his face across the room as Claire appears | Betrayal | `#0B1426` dark cold | Nano Banana 2 + daniel ref + vivian ref | ⭐ | A: wide room — Daniel in background, B: DUTCH — Daniel's face — blood leaving it, C: DUTCH — Vivian watching Daniel watching the door |
| F11A/B/C | Vivian walks to the door — across her own party, unhurried, composed | Betrayal | `#0B1426` dark cold | Nano Banana 2 + vivian ref | ⭐ | A: wide room — Vivian walking toward door, B: DUTCH — Vivian from behind, approaching Claire, C: Vivian's hand extended — "I'm Vivian" |
| F12A/B/C | Vivian leads Claire inside, offers water — room in absolute silence | Betrayal | `#0B1426` dark cold | Nano Banana 2 + vivian ref + Claire inline | ⭐ THE KEY FRAME | A: wide — Vivian guiding Claire through room, B: Vivian handing a glass of water to Claire, C: Vivian's face — composed, present, completely calm |
| F13A/B/C | Daniel across the room — calculating, pale, frozen | Betrayal → Fall | `#0B1426` dark cold | Nano Banana 2 + daniel ref | | A: Daniel across the room — small in the frame, B: Daniel's face — the calculation failing, C: his hand — phone in hand, he can't use it |
| F14A/B/C | Vivian saying goodbye to guests at end of evening — hosting through it all | Fall | `#0B1426` transitioning | Nano Banana 2 + vivian ref | | A: wide — remaining guests at door, Vivian at threshold, B: Vivian hugging Petra goodbye, C: Vivian's face at door — holding it together |
| F15A/B/C | Empty party room after guests leave — candles burned down, flowers still standing | Fall | `#0B1426` dark cold | Flux 2 Pro (party env, empty) | | A: wide empty room — the aftermath of a beautiful party, B: burned-down candles in silver holders, C: champagne flute — lipstick mark, half-full |
| F16A/B/C | Daniel near the kitchen — waiting to see which version she'll give him | Fall | `#0B1426` dark cold | Flux 2 Pro (home interior) + Daniel inline | | A: wide home — Daniel standing near kitchen entrance, B: Daniel standing — posture of a man waiting for a verdict, C: the silence between them — empty hallway |
| F17A/B/C | Vivian in the bedroom — takes off emerald dress, puts on everyday clothes | Fall → Pivot | `#0B1426` transitioning | Nano Banana 2 + vivian ref | ⭐ | A: wide bedroom — Vivian changing, B: Vivian setting down the emerald dress — deliberate, C: her face in the mirror — something has settled |
| F18A/B/C | Vivian packs Daniel's bag — efficient, ten minutes | Pivot | Neutral turning warm `#C4B9A8` | Nano Banana 2 + vivian ref | ⭐ | A: wide closet area — Vivian moving through it methodically, B: bag being packed — shirts, shoes, toiletry kit, C: her hands folding a shirt — no anger, just precision |
| F19A/B/C | Packed bag by the front door — coat rack behind it, car light visible through glass | Pivot | Neutral turning warm | Seedream 4.5 (atmospheric) + Flux 2 Pro | ⭐ PIVOT PEAK | A: wide hallway — bag by door, A: medium — bag beside coat rack, C: car headlights visible through frosted door glass |
| F20A/B/C | "I've called a car. It's outside." — Vivian to Daniel, entryway | Pivot | Neutral warm | Nano Banana 2 + vivian ref + daniel ref | ⭐ | A: wide entryway — Vivian and Daniel facing each other, B: Vivian's face — final, calm, no cruelty, C: the door — Daniel in silhouette leaving |
| F21A/B/C | Vivian on kitchen floor — not dramatic, just present. Tea brewing. Laptop open. | Pivot | Neutral warm, soft kitchen light | Nano Banana 2 + vivian ref | ⭐ | A: wide kitchen — Vivian on floor, warm ambient light, B: Vivian on floor, laptop open, tea visible, C: her face — somewhere between grief and decision |
| F22A/B/C | Monday morning — Vivian at her Hawthorn & Co. desk, divorce papers requested | Karma | Neutral → warming | Nano Banana 2 + vivian ref / Ideogram 3 (legal doc) | | A: wide Hawthorn & Co. office, B: Vivian at desk — on the phone with her attorney, C: notepad — "Monday" written at top, two items below |
| F23A/B/C | Settlement — she keeps the house and Hawthorn & Co. — 5 weeks | Karma | Warming `#D4A547` | Flux 2 Pro (home exterior) | | A: wide — Vivian's house exterior, warm sun, B: settlement document on desk (Ideogram 3), C: "Hawthorn & Co." signage or business card close |
| F24A/B/C | Divorce settlement document — Hawthorn & Co. protected, house retained | Karma | Warming | Ideogram 3 (legal document) | ⭐ | A: document overview — clean legal formatting, B: key clause — "Company: Hawthorn & Co. — sole ownership confirmed", C: Vivian's signature on the final line |
| F25A/B/C | Daniel in studio apartment — pullout sofa, boxes, one lamp | Karma | Cool neutral gray `#1F2937` | Flux 2 Pro (studio apartment env) | | A: wide studio — small, lonely, B: pullout sofa half-open in corner, C: his one window — city highway visible through it |
| F26A/B/C | Rosalie (Daniel's mother) — the call. Her disapproval is ancient. | Karma | Cool gray `#1F2937` | Nano Banana 2 + Rosalie inline desc | ⭐ | A: wide — Rosalie at her own kitchen table, phone in hand, B: Rosalie's face — the specific look of a mother who was right all along, C: Daniel's phone — missed call from "Mom" later (no answer) |
| F27A/B/C | Daniel's business contacts distancing — June, the regional account loss | Karma | Cool gray → neutral | Nano Banana 2 + daniel ref | | A: Daniel at office desk — fewer people around, B: Daniel's laptop — empty calendar, C: an email close — "Thank you for your partnership. We've decided to..." |
| F28A/B/C | Claire — raising the child alone, hometown, his name on birth certificate | Karma | Cool neutral | Nano Banana 2 + Claire inline / Daniel ref | | A: Claire in a smaller, quieter home — early domestic scene, B: birth certificate document on table (Ideogram 3 — name visible), C: child support paperwork — a number and a Tuesday in October |
| F29A/B/C | Daniel's diminished presence — third-floor apartment, groceries from his mother | Downfall | Cool gray `#1F2937` | Nano Banana 2 + daniel ref | | A: Daniel's apartment building exterior — unremarkable, B: Daniel accepting grocery bag — slightly deflated, C: his face: tired, the performance suspended |
| F30A/B/C | Vivian in her new apartment — spring, light-filled, kitchen she likes | Epilogue | `#D4A547` full warm + sage `#6B7F5A` | Nano Banana 2 + vivian ref | ⭐ | A: wide new apartment — east-facing windows, warm spring light, B: Vivian in kitchen, relaxed, measuring spices, C: her face — settled, unhurried, present |
| F31A/B/C | Eight guests for her 36th birthday — intimate, exactly right | Epilogue | `#D4A547` + sage | Nano Banana 2 + vivian ref | ⭐ | A: wide dining table — eight people, warmth, laughter, B: Vivian at head of table — genuine smile, C: the table — real food, no catering, wine, friends |
| F32A/B/C | Petra giving a toast that makes Vivian laugh | Epilogue | `#D4A547` full warm | Nano Banana 2 + vivian ref | | A: wide — Petra standing, wine glass raised, everyone looking, B: Petra's face — she means every word, C: Vivian laughing — glass down, hand up |
| F33A/B/C | No surprises — Vivian's designed evening, every detail known to her | Epilogue | `#D4A547` + sage | Nano Banana 2 + vivian ref | ⭐ FINAL SHOT | A: wide apartment at end of evening — warm, lived-in, B: Vivian at the window — city at night, peaceful, C: close on her face — not performing. Just here. |
| F34A/B/C | Butterfly channel card — @KarmaCaughtUp CTA | CTA | `#D4A547` full warm | Ideogram 3 (channel card with butterfly + text) | | A: full butterfly card — "@KarmaCaughtUp · Subscribe", B: butterfly close with channel name, C: end card with subscribe button style |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Hotel receipt — "ARDEN GRAND" in Vivian's hand, parking lot | Beat 3 | 20s | COOL NEUTRAL | Slow PUSH in on receipt text | First forensic detail — the crack made visible |
| S02 | Party room wide — full guests, warm candlelight, before 8:47 | Beat 4 | 15s | WARM GOLD `#D4A547` | Slow PAN-R across party | The last normal moment — audience knows what's coming |
| S03 | Vivian's face in the moment she understands — watching Daniel watch the door | Beat 4 | 25s | DARK `#0B1426` | Slow PUSH in on Vivian's face | ⭐ most emotional KB — the second of understanding |
| S04 | Claire at the door — the threshold, the decision made visible | Beat 4 | 20s | DARK COLD `#0B1426` | STATIC — full hold | ⭐ audience holds breath — justice craving begins here |
| S05 | Vivian's hand extended — "I'm Vivian" | Beat 4 | 25s | DARK COLD `#0B1426` | Slow PUSH in on extended hand | ⭐ THE image — composure as the whole story |
| S06 | Empty party room — burned candles, flowers still standing | Beat 5 | 15s | DARK `#0B1426` | Slow PULL back | The aftermath without the drama |
| S07 | Packed bag by the front door | Beat 6 | 20s | NEUTRAL TURNING WARM | STATIC — hold on bag | ⭐ pivot peak — the decision materialized |
| S08 | Vivian on kitchen floor — laptop open, tea brewing | Beat 6 | 20s | NEUTRAL WARM | Slow PUSH in on her face | The real private moment — grief and forward motion |
| S09 | Divorce settlement document — "Hawthorn & Co. — sole ownership confirmed" | Beat 7 | 20s | WARMING `#D4A547` | Slow PUSH in on the clause | ⭐ justice craving satisfied — the business is hers |
| S10 | Daniel's studio apartment — pullout sofa, one lamp, his window | Beat 7 | 20s | COOL GRAY `#1F2937` | Slow PULL back to reveal emptiness | Understated consequence |
| S11 | Rosalie's face — the specific maternal reckoning | Beat 7 | 20s | COOL GRAY | Slow PUSH in on her expression | ⭐ even his mother knows |
| S12 | Daniel's empty calendar / distanced contacts email | Beat 7–8 | 20s | COOL GRAY `#1F2937` | Slow TILT-DOWN | The professional freeze |
| S13 | Vivian's new apartment — spring light, east window | Epilogue | 15s | FULL WARM `#D4A547` | Slow PAN-R across the space | The new chapter — unhurried |
| S14 | Petra's toast — the genuine one | Epilogue | 20s | FULL WARM + sage | Slow PUSH in on Vivian laughing | ⭐ catharsis — this is what love in a room actually feels like |
| S15 | Vivian at the window — city at night, peaceful | Epilogue | 40s | FULL WARM gold + sage `#6B7F5A` | Slow ORBIT-L around Vivian | ⭐ FINAL SHOT — holds longest. She planned this night herself. No surprises. |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Vivian or Daniel appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Seedream 4.5 — atmospheric party/private moments:**
- Use for F06 (party atmosphere wide), F19 (kitchen floor)
- Specify mood heavily: "intimate, cinematic voxel atmosphere, soft ambient light"
- Do not use for character-close shots — Nano Banana 2 handles those

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear on screen
- "Legible voxel-style document, clear typography, 1920x1080"
- For legal documents: include key phrase in prompt (e.g. "sole ownership confirmed")

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction in filename metadata for CapCut
- S15 (40s epilogue) — gen highest quality, most important still in episode
