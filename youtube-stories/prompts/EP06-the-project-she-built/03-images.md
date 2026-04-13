# EP06 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP06-F01A.png`, `EP06-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/assets/EP06/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `nadia-voxel-base.png` | Nadia in scene — character-driven | F01, F04, F05, F06, F09, F15, F16, F17, F18, F19, F20, F21, F22, F31, F32, F33 |
| **Nano Banana 2** + `marcus-voxel-base.png` | Marcus in scene — character-driven | F03, F07, F09, F11, F12, F29, F30 |
| **Flux 2 Pro** | Environments, exteriors, offices (no character) | F02, F08, F19 (env), F22 (env), F28, F32 (env) |
| **Ideogram 3** | Text on screen, documents, slides, UI, data | F02 (slide text), F05 (Figma UI), F07 (email), F10, F11, F13, F14, F16, F23, F24, F25, F26, F27, F34 |

> Note: F02 and F09 appear in multiple models — gen multiple variants and pick best. F09 needs both Nadia AND Marcus: use Nano Banana 2 with both refs attached.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F09B, F09C, F10B, F10C, F12B
- These are the presentation betrayal zone + HR meeting — maximum psychological tension

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F08 (setup/crack phase)
- F19 onward (pivot, karma, epilogue)
- ANY Ken Burns stills
- Epilogue frames F31–F34

**Other camera moves (reference for 03b prompts):**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Veltara office — modern software firm, Nadia at desk, warm morning light | Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + nadia ref | | A: wide office, B: Nadia at desk medium, C: hands on laptop close |
| F02A/B/C | CEO conference — Nadia's onboarding portal work on slide, "34% drop-off," her name NOT on slide | Beat 2 | Warm fading → cool | Ideogram 3 (slide text) + Flux 2 Pro (env) | | A: wide conference room, B: slide on screen medium, C: slide text close — no Nadia name visible |
| F03A/B/C | Orrin Group kickoff meeting — Marcus front/center, Nadia seated behind him | Beat 2–3 | Cool slate fluorescent | Nano Banana 2 + marcus ref | | A: wide meeting room, B: Marcus at whiteboard, C: Nadia half-visible behind him |
| F04A/B/C | Nadia conducting 14 user interviews — laptop, notes, focused listening | Beat 3 | Cool slate | Nano Banana 2 + nadia ref | | A: Nadia across table from blurred voxel participant, B: notes filling page, C: Nadia's focused expression |
| F05A/B/C | Figma screen — 300 artboards, Nadia building alone | Beat 3 | Cool slate → late night | Nano Banana 2 + nadia ref / Ideogram 3 (Figma UI) | ⭐ | A: Nadia at large monitor, B: Figma canvas with artboard grid, C: artboard thumbnails close — hundreds of screens |
| F06A/B/C | 11 PM Thursday — Nadia in dark office, all other lights off around her | Beat 3 | `#0B1426` dark cold, single desk lamp | Nano Banana 2 + nadia ref | | A: wide dark office, single light on Nadia, B: Nadia medium — tired but working, C: clock on wall 11:00 PM |
| F07A/B/C | Marcus's recap emails — Nadia's words, Marcus's name in the footer | Beat 3–4 | Cool slate | Nano Banana 2 + marcus ref / Ideogram 3 (email UI) | | A: Marcus at desk composing email, B: email on screen — "Prepared by: Marcus W.", C: close on footer — Nadia's name absent |
| F08A/B/C | Orrin launch — "On time. Under budget." announcement in meeting | Beat 4 | `#0B1426` entering dark cold | Flux 2 Pro (conference room env) | | A: wide launch meeting room, B: banner/slide "DELIVERED ON TIME UNDER BUDGET", C: champagne glasses on table |
| F09A/B/C | Marcus's 40-slide presentation — Nadia at end of table watching her own slides | Beat 4 | `#0B1426` dark cold | Nano Banana 2 + nadia ref + marcus ref | ⭐ | A: wide boardroom, Marcus at front, Nadia at far end, B: DUTCH — Marcus gesturing at her slide, C: DUTCH — Nadia's face watching, still |
| F10A/B/C | "Project Contributors" slide — Nadia listed 4th in 11-person footnote | Beat 4 | `#0B1426` dark cold | Ideogram 3 (slide with text) | ⭐ BETRAYAL PEAK | A: wide — room reaction, B: DUTCH — slide on screen close (Nadia's name 4th, tiny), C: DUTCH — extreme close on the footnote text |
| F11A/B/C | Marcus Director bonus celebration — Nadia receives $30 gift card | Beat 4 | `#0B1426` dark cold | Nano Banana 2 + marcus ref / Ideogram 3 ($30 card) | | A: wide — office celebration cake, B: Marcus holding award/champagne, C: Nadia's hand holding $30 Amazon gift card close |
| F12A/B/C | Marcus in HR office with Gretchen — "communication concerns" | Beat 4–5 | `#0B1426` dark cold | Nano Banana 2 + marcus ref (Gretchen inline desc) | ⭐ | A: wide HR office door ajar, B: Marcus leaning forward to Gretchen, C: DUTCH — Gretchen taking notes, "communication concerns" visible |
| F13A/B/C | Peer review form — language Nadia had never heard used about her | Beat 5 | `#0B1426` dark cold | Ideogram 3 (document with text) | | A: Nadia reading document, B: form on screen — negative language highlighted, C: close on specific phrase on form |
| F14A/B/C | Gretchen: "Role being restructured. 30 days." | Beat 5 | `#0B1426` dark cold | Ideogram 3 (document) / inline Gretchen | ⭐ | A: Gretchen and Nadia across desk, B: "ROLE ELIMINATION — 30 DAYS" letter on desk, C: close on letter — date + signature |
| F15A/B/C | Nadia driving home — sitting alone in parking garage, 20 minutes | Beat 5 | `#0B1426` dark cold, concrete | Nano Banana 2 + nadia ref | | A: wide parking garage — one car, Nadia inside, B: Nadia in driver's seat — not moving, staring forward, C: steering wheel — her hands on it, still |
| F16A/B/C | Figma version history — every timestamp, Nadia's name on 94% of artboards | Beat 5 | `#0B1426` dark, screen glow | Nano Banana 2 + nadia ref / Ideogram 3 (version history UI) | ⭐ | A: Nadia at laptop — screen reflected in glasses, B: Figma version history panel close — "Nadia K. — edited", timestamps, C: "94% of artboards" visible in UI |
| F17A/B/C | Exporting files — clean folders, organized archives | Beat 5 | `#0B1426` dark | Nano Banana 2 + nadia ref | | A: Nadia at laptop — deliberate, calm, B: screen showing folder structure being exported, C: USB drive or download bar — methodical |
| F18A/B/C | Resignation email — professional, last day at Veltara. No mention of Marcus. | Beat 5 | `#0B1426` transitioning | Nano Banana 2 + nadia ref / Ideogram 3 (email UI) | | A: Nadia composing email — final moment, B: email text — "I appreciate the opportunities..." professional, C: cursor on SEND button |
| F19A/B/C | First month freelance — small projects, apartment desk, enough to pay rent | Beat 6 | Neutral turning warm | Nano Banana 2 + nadia ref / Flux 2 Pro (apartment env) | | A: apartment home office — small, neat, warm light, B: Nadia at standing desk, B: screen showing freelance project — modest |
| F20A/B/C | Crestline UX LLC registration — apartment office, standing desk, Notion board | Beat 6 | Turning warm neutral | Nano Banana 2 + nadia ref / Ideogram 3 (LLC doc) | ⭐ | A: Nadia at standing desk — Notion board behind her, B: LLC registration document on screen — "CRESTLINE UX LLC", C: close on company name on document |
| F21A/B/C | Dana's phone call — "Was that yours? The Orrin project?" | Beat 6 | Turning warm | Nano Banana 2 + nadia ref / inline Dana desc | ⭐ PIVOT PEAK | A: Nadia on phone — apartment, warm light, B: Nadia's expression — pause before she answers, C: close — "Yes. That was mine." moment |
| F22A/B/C | Meridian Freight dispatch interface — Nadia building | Beat 7 | Neutral → warming | Nano Banana 2 + nadia ref / Flux 2 Pro (office env) | | A: Nadia at monitor — new office or co-working space, B: Meridian Freight dispatch UI on screen — Nadia's design, C: detail of interface — clean UX |
| F23A/B/C | "$74,000" first Crestline invoice | Beat 7 | Warming | Ideogram 3 (invoice UI) | ⭐ | A: Nadia seeing invoice confirmation, B: invoice document — "TOTAL: $74,000.00", C: extreme close on the number |
| F24A/B/C | 41% error reduction data — Meridian Freight results | Beat 7 | Warming | Ideogram 3 (data chart) | | A: Meridian results deck — bar chart, B: "Error Rate: -41%" close, C: Dana's email to Nadia with results |
| F25A/B/C | Priya at Veltara — finds Figma version history, 94% Nadia | Beat 7 | Cold gray `#1F2937` (Veltara) | Nano Banana 2 + inline Priya desc | ⭐ | A: Priya at Veltara desk — surprised expression, B: Figma version history on screen — same panel, C: close — "Nadia K." on 94% of entries |
| F26A/B/C | UXPA Regional Excellence Award nomination letter | Beat 7 | Warming | Ideogram 3 (nomination letter) | ⭐ | A: Nadia reading letter — warm apartment, B: letter text — "demonstrated exceptional ability...", C: "UXPA Regional Excellence Award" header close |
| F27A/B/C | UXPA awards committee contacts Veltara — version history revealed | Beat 7 | Warming → tension | Ideogram 3 (email correspondence) | | A: email chain — UXPA committee to Veltara, B: Veltara's reply — version history attached, C: close on attached Figma version history thumbnail |
| F28A/B/C | Orrin Group doesn't renew Veltara contract — cold announcement | Beat 7–8 | Cool gray `#1F2937` | Flux 2 Pro (Veltara office exterior / Orrin email) | | A: wide Veltara exterior — cold gray, B: email — "Orrin Group has decided not to renew...", C: Orrin logo on screen — frozen |
| F29A/B/C | Marcus laterally moved — same title, smaller team | Beat 8 | Cool gray `#1F2937` | Nano Banana 2 + marcus ref | | A: Marcus at smaller desk — quieter area, B: org chart — his position shifted, C: Marcus's expression — no client meetings on his calendar |
| F30A/B/C | Marcus's diminished desk — no client-facing work, no presentations | Beat 8 | Cool gray `#1F2937` | Nano Banana 2 + marcus ref | | A: Marcus's desk from afar — alone, B: his empty calendar — no client calls, C: his screen — internal admin work only |
| F31A/B/C | UXPA trophy on windowsill — good plant beside it | Epilogue | `#D4A547` gold + sage `#6B7F5A` | Nano Banana 2 + nadia ref | ⭐ | A: Nadia at her Crestline office window — wide, B: trophy + plant on windowsill — warm sun, C: close on trophy base — "UXPA Regional Excellence" |
| F32A/B/C | Crestline UX — 7 clients, 2 employees, $340k last quarter board | Epilogue | `#D4A547` + sage | Nano Banana 2 + nadia ref / Flux 2 Pro (office env) | | A: Crestline office — two desks, two employees, B: Notion/whiteboard — "7 CLIENTS · $340K QTR", C: Nadia reviewing with team |
| F33A/B/C | Third hire starting May — team grows | Epilogue | `#D4A547` + sage | Nano Banana 2 + nadia ref | | A: empty third desk being set up, B: Nadia writing offer letter or onboarding doc, C: "Starting May" on office calendar |
| F34A/B/C | Butterfly channel card — @KarmaCaughtUp CTA | Epilogue | `#D4A547` full warm | Ideogram 3 (channel card with butterfly + text) | ⭐ | A: full butterfly card — "@KarmaCaughtUp · Subscribe", B: butterfly close with channel name, C: end card with subscribe button style |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Nadia at end of table watching Marcus present her slides — her face | Beat 4 | 25s | DARK `#0B1426` | Slow PUSH in on Nadia's face | ⭐ most emotional KB — silence before storm |
| S02 | Veltara office warm — Nadia early morning, first at her desk | Beat 2 | 15s | WARM `#F3E9D2` | Slow PAN-R across office | Contrast anchor — before everything |
| S03 | CEO slide — Nadia's onboarding portal work on screen, her name absent | Beat 2 | 15s | WARM FADING | Slow PUSH in on slide — no name visible | First crack — audience spots it before Nadia does |
| S04 | Figma artboards grid — 300 screens laid out | Beat 3 | 20s | DARK COLD `#0B1426` | Slow PULL back — reveals scale | ⭐ scale of Nadia's invisible labor |
| S05 | "Project Contributors" slide — Nadia 4th in list of 11 | Beat 4 | 25s | DARK COLD `#0B1426` | Slow PUSH in on footnote | ⭐ audience reads the list — justice craving |
| S06 | Figma version history — timestamps, 94% Nadia's name | Beat 5 | 20s | DARK `#0B1426` glow | Slow TILT-DOWN through version history | ⭐ the proof that survives everything |
| S07 | Resignation email on screen — cursor on SEND | Beat 5 | 15s | DARK transitioning | STATIC — hold on SEND | Quiet devastation — she doesn't fire back |
| S08 | Crestline UX LLC registration document | Beat 6 | 15s | TURNING WARM | Slow PUSH in on company name | Turn — she builds for herself now |
| S09 | Dana's phone call — Nadia holding phone, pause before she answers | Beat 6 | 20s | TURNING WARM | Slow PUSH in on Nadia's face | ⭐ pivot peak — audience holds breath |
| S10 | "$74,000" first Crestline invoice | Beat 7 | 20s | NEUTRAL warming | Slow PUSH in on number | ⭐ justice craving hit — first reward |
| S11 | Priya at Veltara — version history discovery, Nadia's name everywhere | Beat 7 | 25s | COLD GRAY `#1F2937` | Slow TILT-UP to Priya's expression | ⭐ catalyst moment — the truth spreading |
| S12 | UXPA nomination letter — "demonstrated exceptional ability" | Beat 7 | 20s | WARMING | Slow PAN-L across letter | ⭐ public validation — karma accelerating |
| S13 | Marcus's smaller desk — lateral move, no client work | Beat 8 | 20s | COOL GRAY `#1F2937` | Slow PULL back — reveals emptiness | Justice — understated |
| S14 | Crestline $340k quarter board on wall | Epilogue | 20s | FULL WARM `#D4A547` | Slow PUSH in on numbers | ⭐ catharsis — the scale of what she built |
| S15 | UXPA trophy on windowsill + good plant, warm sun | Epilogue | 40s | FULL WARM gold + sage | Slow ORBIT-L around windowsill | ⭐ FINAL SHOT — holds longest. She stopped building for someone else. |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Nadia or Marcus appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear on screen
- "Legible voxel-style UI, clear typography, 1920x1080"
- For financial figures: include exact number in prompt (e.g. "$74,000.00")

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction in filename metadata for CapCut
- S15 (40s epilogue) — gen highest quality, most important still in episode
