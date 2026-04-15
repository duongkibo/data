# EP15 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP15-F01A.png`, `EP15-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/prompts/15-the-gym-routine/media/images/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `mara-ep15-voxel-base.png` | Mara in scene — character-driven | F02, F04, F09, F10, F11, F12, F13, F14, F16, F17, F19, F20, F21, F23, F25, F28, F31, F32, F33 |
| **Nano Banana 2** + `daniel-ep15-voxel-base.png` | Daniel in scene | F03, F05, F06, F07 (with Veronica), F08, F26, F27, F30 |
| **Nano Banana 2** + `veronica-ep15-voxel-base.png` | Veronica in scene | F07 (attach both Daniel + Veronica refs), F24 |
| **Flux 2 Pro** | Environments, exteriors, objects (no character) | F01, F15, F22, F29, F34 |
| **Ideogram 3** | Text on screen, documents, phone UI, signs | F10C, F11, F18, F22C, F34C |
| **Seedream 4.5** | Wide atmospheric establishing shots | F01A, F22A, F29A, F33C |

> Note: F07 needs both Daniel AND Veronica: attach both character refs to Nano Banana 2.
> F11 (gym check-in screen) and F18 (credit card statement + LLC doc) are primarily Ideogram 3 for text legibility.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F10B, F10C, F11B, F11C, F12B, F12C, F13B
- These are the Betrayal peak scenes (gym check-in reveal + car parking lot + attorney discovery)

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F09 (setup/crack phase — before gym visit)
- F14 onward (pivot, karma, epilogue)
- ANY Ken Burns stills
- Epilogue frames F33–F34

**Other camera moves:**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Blue Hydro Flask on kitchen counter, early morning | 1 Hook | `#F3E9D2` warm cream + gold | Flux 2 Pro | ⭐ | A: wide kitchen counter morning, B: water bottle medium hero, C: cap/top ECU — suspiciously pristine |
| F02A/B/C | Mara at kitchen counter, 5am — Daniel's gym bag by door | 2 Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + mara ref | | A: wide warm kitchen 5am, B: Mara medium — coffee in hand watching Daniel's routine, C: gym bag at door — full and ready |
| F03A/B/C | Daniel leaving at 5am with gym bag + water bottle | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + daniel ref | | A: wide front door — Daniel leaving, B: Daniel medium — gym bag on shoulder, C: water bottle ECU in hand — full |
| F04A/B/C | Mara at work — project manager at desk with color-coded calendar | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + mara ref | | A: wide open-plan office, B: Mara at desk — color-coded planner, C: planner close — organized life, warm detail |
| F05A/B/C | Daniel returning from "gym" — shower steam, mirror self-satisfaction | 2 Intro | `#F3E9D2` slight cooling | Nano Banana 2 + daniel ref | | A: wide bathroom doorway — steam, B: Daniel medium — checking himself in mirror, C: his expression — pleased, performing |
| F06A/B/C | Mara sniffing gym shirt from laundry — no sweat smell | 3 Crack | `#CBD5E1` cool entering | Nano Banana 2 + mara ref | ⭐ | A: wide laundry room — Mara with pile of clothes, B: Mara medium — holding gray shirt to nose, C: her expression ECU — still, processing |
| F07A/B/C | Daniel with Veronica — not at a gym | 3 Crack | `#CBD5E1` cool slate | Nano Banana 2 + daniel + veronica refs | ⭐ | A: wide — cozy café or apartment interior, not a gym, B: Daniel + Veronica at table — close, comfortable, C: Veronica's expression — familiar, not professional |
| F08A/B/C | Daniel unable to name exercises — dinner table | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + daniel ref | | A: wide dining table, B: Daniel medium — vague hand gesture when asked about workout, C: Mara's expression ECU — noticing |
| F09A/B/C | Blue Hydro Flask in Mara's hands — still completely full | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + mara ref | ⭐ | A: wide kitchen — Mara standing, bottle in hand, B: Mara medium — looking at bottle, C: bottle ECU — full water level visible, cap pristine |
| F10A/B/C | Velocity Fitness gym exterior — Mara's car in parking lot | 4 Betrayal | `#0B1426` dark cold | Flux 2 Pro | ⭐ BETRAYAL START | A: wide gym exterior, B: DUTCH — Mara's car in parking lot, C: DUTCH — Mara inside gym talking to front desk |
| F11A/B/C | Gym check-in screen — "No results for Daniel Marsh" | 4 Betrayal | `#0B1426` dark cold | Ideogram 3 (screen UI) | ⭐ PEAK BETRAYAL | A: wide — Mara's face above the screen, B: DUTCH — computer screen close, C: DUTCH — "No member found: Daniel Marsh" on screen |
| F12A/B/C | Mara alone in parking lot car — watching clock, 9 minutes | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + mara ref | ⭐ | A: wide dark parking lot — Mara's car, B: DUTCH — Mara in driver's seat, C: DUTCH — her hands on wheel, clock visible |
| F13A/B/C | Mara driving home, composed — face utterly still | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + mara ref | ⭐ | A: wide — car on road, B: DUTCH — Mara driving, eyes forward, C: Mara's face ECU — controlled, decided |
| F14A/B/C | Mara makes dinner that evening — mechanical calm | 5 Fall | `#0B1426` dark | Nano Banana 2 + mara ref | | A: wide kitchen same as F02 — but cold, B: Mara medium — stirring something, eyes flat, C: pot on stove ECU — normal dinner, hollow ritual |
| F15A/B/C | Credit card statement — VM Personal Training LLC charge | 5 Fall | `#0B1426` dark cold | Ideogram 3 (document) | ⭐ | A: wide — Mara at desk with documents, B: statement medium — VM Personal Training LLC visible, C: charge ECU: "VM Personal Training LLC · $1,440.00" |
| F16A/B/C | Mara's phone — attorney Stephanie Okafor contact open | 5 Fall | `#0B1426` dark | Nano Banana 2 + mara ref | | A: wide kitchen — Mara at table, phone to ear, B: Mara medium — listening intently, C: phone screen ECU — "Stephanie Okafor · Family Law" |
| F17A/B/C | House deed document — Mara's name only | 5 Fall | `#0B1426` dark | Nano Banana 2 + mara ref | | A: wide study — Mara at desk, documents spread, B: document medium — deed header visible, C: deed ECU — "Owner: Mara [name]" — her name alone |
| F18A/B/C | VM Personal Training LLC state filing document | 6 Pivot | Turning warm `#D4A547` | Ideogram 3 (document) | ⭐ PIVOT | A: laptop screen showing state business bureau website, B: filing document close — "VM Personal Training LLC · Owner: Veronica Malone", C: ECU — Veronica's name on document |
| F19A/B/C | Mara composing email to Veronica — professional, one paragraph | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + mara ref | ⭐ | A: wide home desk — Mara at laptop, B: Mara medium — typing, composed expression, C: screen ECU — email visible, SEND button highlighted |
| F20A/B/C | Attorney's office — Mara signing divorce papers | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + mara ref | | A: wide attorney's office — professional warm, B: Mara medium — pen over papers, C: signature line ECU — her name going down |
| F21A/B/C | Mara tells Daniel — kitchen, morning, coffee in hand | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + mara ref + daniel ref | ⭐ | A: wide kitchen — both of them, B: Mara medium — calm, direct, keys in hand, C: Daniel's expression ECU — unraveling |
| F22A/B/C | First Light gym exterior — women-owned studio, warm signage | 7 Karma (callback/contrast) | Full warm `#D4A547` + gold | Seedream 4.5 + Ideogram (sign) | | A: wide warm studio exterior, B: "First Light" sign medium, C: sign ECU — "First Light · Women's Fitness Studio" |
| F23A/B/C | Mara meets attorney Stephanie — the plan comes together | 7 Karma | Full warm `#F3E9D2` + gold | Nano Banana 2 + mara ref | | A: wide attorney's office — warm, professional, B: Mara + Stephanie medium — papers, strategy, C: Mara's face — clear, decided |
| F24A/B/C | Veronica's training space — clients leaving, business collapsing | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + veronica ref | ⭐ | A: wide empty training studio — barely any clients, B: Veronica medium — checking phone, C: her face ECU — worried, the confidence gone |
| F25A/B/C | Owen filing divorce documents — separate attorney's office | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro (env) | | A: wide attorney's office — cooler, more clinical, B: Owen's hands on documents medium, C: signature line ECU — Owen's name |
| F26A/B/C | Daniel alone in bare apartment — unpacked boxes | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + daniel ref | ⭐ | A: wide sparse apartment — moving boxes, B: Daniel medium — phone in hand, trying to call, C: phone screen ECU — Mara's contact, no answer |
| F27A/B/C | Meridian Boulevard sublease — VM Training location shuttered | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro | | A: wide street exterior — unit dark, "Space Available" sign, B: empty studio interior through window, C: "Space Available" sign ECU |
| F28A/B/C | Settlement documents — larger number than Daniel expected | 7 Karma | Full warm `#D4A547` (Mara's side) | Nano Banana 2 + mara ref | ⭐ | A: wide attorney's office — Mara composed, B: settlement document medium — figure visible, C: Mara's expression ECU — quiet satisfaction |
| F29A/B/C | Clementine the dog with Mara — vet record, adoption papers | 8 Downfall | Full warm `#D4A547` + sage | Nano Banana 2 + mara ref | ⭐ | A: wide warm living room — Mara + Clementine, B: Mara medium — dog in lap, documents on table, C: adoption paperwork ECU — Mara's name at top |
| F30A/B/C | Mara repainting bedroom sage green | 8 Downfall | Full warm `#D4A547` + sage `#6B7F5A` | Nano Banana 2 + mara ref | ⭐ | A: wide bedroom — Mara with roller, walls going sage, B: Mara medium — paint roller in hand, C: fresh sage paint on wall ECU |
| F31A/B/C | Daniel at budget gym — alone, Saturday morning | 8 Downfall | Neutral cool `#1F2937` | Nano Banana 2 + daniel ref | | A: wide basic gym — fluorescent lights, B: Daniel alone on a machine, C: his expression ECU — deflated, without audience |
| F32A/B/C | First Light gym interior — 5am, Mara and Jess training | Epilogue | Full warm `#D4A547` + cream | Nano Banana 2 + mara ref | ⭐ | A: wide warm studio — 5am, warm lights on, B: Mara + Jess (trainer) medium — working, C: Mara's face ECU — fully present, working hard |
| F33A/B/C | Mara at home after real workout — sweaty, green water bottle empty | Epilogue | Full warm gold + sage `#6B7F5A` | Nano Banana 2 + mara ref | ⭐ EPILOGUE PEAK | A: wide warm kitchen — Mara back from gym, B: Mara medium — green water bottle on counter, sweaty, content, C: green bottle ECU — empty, condensation |
| F34A/B/C | Mara making breakfast, Clementine at her feet — CTA | Epilogue/CTA | Full warm `#D4A547` + sage | Nano Banana 2 + mara ref | ⭐ | A: wide warm kitchen — Mara cooking breakfast, Clementine visible, B: butterfly card on counter — "@KarmaCaughtUp · Subscribe", C: ECU butterfly card |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Blue Hydro Flask on counter — hero prop | Beat 1 Hook | 15s | WARM `#F3E9D2` | Slow PUSH in on bottle | Opening anchor — one object, everything wrong |
| S02 | Daniel leaving at 5am — gym bag, water bottle full | Beat 2 | 15s | WARM `#F3E9D2` + gold | Slow PAN-R across door scene | The lie beginning — audience sees it unfold |
| S03 | Mara sniffing gym shirt — no smell | Beat 3 | 20s | COOL `#CBD5E1` | Slow PUSH in on Mara's face | First crack — the small wrong things adding up |
| S04 | Blue Hydro Flask in Mara's hands — full | Beat 3 | 20s | COOL entering dark | Slow TILT-DN onto bottle | Water level visible — still full. Always full. |
| S05 | Mara walking into Velocity Fitness | Beat 4 | 25s | DARK `#0B1426` | Slow PUSH in on gym entrance | ⭐ suspension before betrayal |
| S06 | Gym screen — "No member found: Daniel Marsh" | Beat 4 | 30s | DARK `#0B1426` | STATIC — hold on screen | ⭐ PEAK BETRAYAL — audience reads it slowly |
| S07 | Mara in car, parking lot, watching clock | Beat 4 | 20s | DARK `#0B1426` | Slow PULL back — reveals empty lot around her | ⭐ silence after the hit |
| S08 | Credit card statement — VM Personal Training LLC | Beat 5 | 20s | DARK COLD `#0B1426` | Slow DESCENT onto charge line | ⭐ justice craving — the lie has a paper trail |
| S09 | VM Training LLC state filing — Veronica Malone named | Beat 6 | 20s | TURNING WARM `#D4A547` | Slow PUSH in on name on document | ⭐ pivot moment — information becomes power |
| S10 | Mara composing email — SEND button | Beat 6 | 15s | TURNING WARM gold | Slow PUSH in on send button | She is precise. One email. Done. |
| S11 | Settlement document — figure visible | Beat 7 | 25s | FULL WARM `#D4A547` | Slow PUSH in on number | ⭐ justice — the house baseline, the number |
| S12 | Veronica's space shuttered — "Space Available" sign | Beat 7 | 15s | COLD GRAY `#1F2937` | Slow PAN-L across empty space | Collapse — no drama, just empty |
| S13 | Daniel alone in sparse apartment, phone not answered | Beat 7 | 20s | COLD GRAY `#1F2937` | Slow PULL back — reveals emptiness | Justice — understated and complete |
| S14 | Green water bottle on counter — empty, sweating | Epilogue | 30s | FULL WARM gold + sage | Slow PULL back — reveals full kitchen | ⭐ most powerful epilogue shot — empty = real |
| S15 | Mara at First Light — running form, dawn outside window | Epilogue/CTA | 40s | FULL WARM `#D4A547` + sage | Slow CRANE-UP from Mara to dawn window | ⭐ FINAL SHOT — she owns five a.m. now |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Mara, Daniel, or Veronica appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear (credit card statement, gym screen, LLC filing, email)
- "Legible voxel-style UI, clear typography, 1920x1080"
- For key text: "No member found: Daniel Marsh", "VM Personal Training LLC", "Veronica Malone", SEND button

**Seedream 4.5 — wide atmospheric:**
- Use for wide exterior establishing shots where atmosphere matters more than characters
- F01A hook wide, F22A First Light exterior, F29A Clementine warm home, F33C full kitchen

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction for CapCut keyframing
- S15 (40s epilogue) — gen highest quality, most important still in episode
