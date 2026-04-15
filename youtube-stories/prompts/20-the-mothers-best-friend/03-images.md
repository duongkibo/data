# EP20 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP20-F01A.png`, `EP20-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/assets/EP20/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `nina-ep20-voxel-base.png` | Nina in scene — character-driven | F02, F03, F04, F09, F10, F13, F14, F15, F16, F17, F18, F19, F20, F21, F31, F32, F33, F34 |
| **Nano Banana 2** + `marcus-ep20-voxel-base.png` | Marcus in scene | F03, F06, F07, F24, F25, F26, F28 |
| **Nano Banana 2** + `diane-ep20-voxel-base.png` | Diane in scene | F11, F12, F13, F22, F29 |
| **Nano Banana 2** + `patricia-ep20-voxel-base.png` | Patricia (glimpse/shadow/distance) | F04, F27 |
| **Flux 2 Pro** | Environments, exteriors, objects (no character) | F01, F05, F08, F23, F30 |
| **Ideogram 3** | Text on screen, documents, card envelopes, phone UI | F09C, F15C, F19C, F21C, F23C, F29C, F34B/C |
| **Seedream 4.5** | Atmospheric establishing shots — home exterior, night drive, kitchen atmosphere | F01, F05, F16 |

> Note: F03 needs both Nina AND Marcus — attach both character refs to Nano Banana 2.
> F13 needs both Nina AND Diane — attach both character refs.
> F22 (Diane's phone call) is Nano Banana 2 + diane ref; phone closeup via Ideogram.
> F09C (envelope close-up text) → Ideogram 3 for handwriting legibility.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F10B, F10C, F11B, F11C, F12B, F12C, F13B
- These are the Betrayal peak scenes (thank-you card reveal + two women at kitchen table, assembling the truth)

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F09 (setup/crack phase — before kitchen table scene)
- F14 onward (fall, pivot, karma, downfall, epilogue)
- ANY Ken Burns stills
- Epilogue frames F31–F34

**Other camera moves:**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DUTCH · DESCENT · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Quiet suburban neighborhood exterior, warm evening — Nina's house | 1 Hook | `#F3E9D2` warm cream + gold | Seedream 4.5 / Flux 2 Pro | ⭐ | A: wide neighborhood dusk, B: mailbox and path medium, C: mailbox close — envelope inside |
| F02A/B/C | Nina in her classroom, capable and warm | 2 Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + nina ref | | A: wide classroom interior, B: Nina at desk — pens jar, papers, C: close on Nina's expression — warm intelligence |
| F03A/B/C | Nina + Marcus at family dinner table (with family warmth) | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + nina ref + marcus ref | | A: wide warm dining room — full family gathering, B: Nina and Marcus together — medium, C: Marcus's expression — easy charm, everyone's favorite |
| F04A/B/C | Thanksgiving table — Patricia's place setting (memory/flashback warmth) | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + patricia ref (distance) | ⭐ | A: wide Thanksgiving table — beautiful, full, Patricia visible in background warmth, B: Patricia at table — distance, teal blouse, elegant, C: empty place setting detail — the warmth of what was trusted |
| F05A/B/C | Nina's home mailbox / front path — mail arriving | 3 Crack | `#CBD5E1` cool entering | Flux 2 Pro | | A: wide front path — mail delivery, B: mailbox open — envelopes inside, C: specific envelope in slot — addressed to "Marcus," no return address |
| F06A/B/C | Nina at kitchen counter holding the envelope — not opening it | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + nina ref | ⭐ CRACK START | A: wide kitchen — Nina at counter, envelope in hand, B: Nina medium — looking at envelope, something shifting, C: Nina's face close — placing the handwriting |
| F07A/B/C | Envelope close-up — handwriting visible, elegant loops | 3 Crack | `#CBD5E1` cool entering | Nano Banana 2 + nina ref / Ideogram 3 for C | ⭐ | A: wide — envelope on counter in kitchen light, B: Nina's hand holding envelope — not opening, C: envelope close ECU — "Marcus" in elegant looping handwriting |
| F08A/B/C | Nina on phone with Diane — casual, careful | 3 Crack | `#CBD5E1` cool | Flux 2 Pro (environment) + nina for B/C | | A: wide home interior — evening, B: Nina medium — phone to ear, deliberately casual expression, C: phone in hand close — dial screen, calling "Mom" |
| F09A/B/C | The silence — Nina's face after Diane goes quiet | 3 Crack | `#0B1426` entering dark | Nano Banana 2 + nina ref | ⭐ PIVOT CRACK | A: wide — Nina standing alone in room, evening, B: Nina medium — phone lowered slightly, face shifting, C: Nina's face close — knowing, still, devastated and certain |
| F10A/B/C | Nina driving to Diane's house, night | 4 Betrayal | `#0B1426` dark cold | Flux 2 Pro (night road) | | A: wide night road — headlights, residential neighborhood, B: car driving medium — night, C: car interior — Nina driving, expression controlled, DUTCH on C |
| F11A/B/C | Diane opening her front door to Nina | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + diane ref | ⭐ | A: wide — Diane's front door, night, Nina arriving, B: DUTCH — Diane's face at doorway — reading her daughter's expression without words, C: the open door — warm kitchen light behind Diane, cold night outside |
| F12A/B/C | Two women at Diane's kitchen table — the yellow legal pad | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + diane ref + nina ref | ⭐ PEAK BETRAYAL | A: wide — kitchen table, two women, late night, B: DUTCH — Diane writing on yellow legal pad, Nina watching, C: DUTCH — legal pad close — handwritten list of remembered details |
| F13A/B/C | Nina and Diane facing the truth together | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + nina ref + diane ref | ⭐ | A: wide — both women, kitchen table, late night, B: DUTCH — Nina's face close — assembling it, still and certain, C: Diane's face close — grief, love for her daughter, and betrayal all at once |
| F14A/B/C | Nina driving home at 1:30 AM | 5 Fall | `#0B1426` dark | Flux 2 Pro (night road) | | A: wide night suburban road — quiet, B: car interior — Nina driving alone, late night, C: her hands on wheel close — steady, not shaking |
| F15A/B/C | Nina at Lily's bedroom door — kissing her forehead in the dark | 5 Fall | `#0B1426` dark | Nano Banana 2 + nina ref | ⭐ | A: wide dark hallway — Nina at child's door, B: Nina medium — leaning over small bed, Lily's tiny voxel form visible, C: Nina's expression close — everything she is protecting |
| F16A/B/C | Nina at home at 2 AM — lying in bed, eyes open, making a list | 5 Fall | `#0B1426` dark | Seedream 4.5 (atmospheric) + nina ref | | A: wide dark bedroom — Nina on her side of the bed, Marcus's side empty but untouched, B: Nina medium — lying still, eyes open, C: ceiling close — her point of view — darkness she is already moving through |
| F17A/B/C | Nina making Lily's lunch in the morning — normal, composed | 5 Fall | `#0B1426` dark → warm transitioning | Nano Banana 2 + nina ref | | A: wide morning kitchen — making lunch, school bag visible, B: Nina medium — packing lunch box, controlled composure, C: lunch box close — ordinary morning object in the middle of everything |
| F18A/B/C | Nina at school, teaching — carrying it all inside | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + nina ref | | A: wide classroom — Nina teaching, students (voxel figures in rows), B: Nina at board medium — writing lesson, C: Nina's expression close — the professional surface, the plan building underneath |
| F19A/B/C | Nina calling Claire, the family attorney | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + nina ref | ⭐ PIVOT START | A: wide — Nina alone in car (parked), after school, B: Nina medium — phone to ear, deliberate and certain, C: phone screen close — "Claire — Attorney" contact shown |
| F20A/B/C | Claire's law office — Nina presenting her case | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + nina ref | ⭐ | A: wide law office — warm wood, professional, B: Nina across from attorney — composed, clear, C: attorney's notepad close — notes being taken |
| F21A/B/C | House deed — Nina's name only, grandmother's estate | 6 Pivot | Turning warm `#D4A547` | Ideogram 3 (deed document) | ⭐ | A: wide — deed on warm desk with soft golden light, B: deed medium — header and owner name visible, C: deed close ECU — "Nina Reyes. Sole owner. Pre-marital property." |
| F22A/B/C | Diane making one phone call — the four words | 7 Karma | Full warm `#D4A547` | Nano Banana 2 + diane ref | ⭐ KARMA PIVOT | A: wide — Diane's kitchen, morning, phone in hand, B: Diane medium — dialing, expression resolved and quiet, C: Diane's face close — the woman who has made her decision |
| F23A/B/C | Discovery — hidden credit card statement revealed | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro + Ideogram 3 (document text) | | A: wide — attorney table, documents spread, B: credit card statement medium — account detail visible, C: statement close — itemized: restaurant names, hotel charges, jewelry store |
| F24A/B/C | Marcus served at his office | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + marcus ref | ⭐ | A: wide office floor — Marcus at his desk, a figure approaching, B: Marcus medium — receiving divorce papers, charm finally failing, C: Marcus's face close — blindsided |
| F25A/B/C | Marcus moving out — carrying boxes from Nina's house | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + marcus ref | | A: wide house exterior — Marcus at door, boxes, B: Marcus medium — carrying box out, C: front door of the house — being pulled shut behind him |
| F26A/B/C | Patricia's phone — six missed calls, two unanswered texts | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro + Ideogram 3 (phone screen) | ⭐ | A: wide — apartment interior, cold and still, B: phone on table medium — screen lit, missed calls, C: phone screen close — "6 missed calls. Diane." / "2 messages. Diane." — read receipt off |
| F27A/B/C | Patricia disappearing — silhouette at door, cold hallway | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + patricia ref (shadow only) | | A: wide hallway — Patricia's silhouette moving away, B: apartment door closing — Patricia's dark teal glimpse inside, C: closed door — silence |
| F28A/B/C | Marcus at Lily's birthday party — alone at the edge of the yard | 8 Downfall | Cold gray `#1F2937` | Nano Banana 2 + marcus ref | ⭐ | A: wide backyard — birthday party, other parents gathered, Marcus at the far edge alone, B: Marcus medium — standing apart, watching, C: Marcus's face close — the man who used to own every room, standing outside one |
| F29A/B/C | Diane at home — quiet, resolved, the friendship ended | 8 Downfall | Neutral warm → grief | Nano Banana 2 + diane ref | | A: wide Diane's kitchen — quiet morning, B: Diane at table medium — cup of tea, composed, C: the phone on the table close — silent, no missed calls incoming |
| F30A/B/C | Patricia moving away — removal truck, quiet departure | 8 Downfall | Cold gray neutral | Flux 2 Pro (exterior / removal truck) | ⭐ | A: wide neighborhood exterior — removal truck at a house, sparse, B: truck pulling away medium — no one watching, C: empty driveway close — the absence |
| F31A/B/C | Christmas at Diane's — table set for four, the olive tree | Epilogue | Full warm `#D4A547` | Nano Banana 2 + nina ref + diane ref | ⭐ EPILOGUE START | A: wide dining room — beautiful table set for four, olive tree in terracotta pot where Marcus's seat was, B: the four women (Nina, Lily, Diane, Rachel) medium — around the table, C: the olive tree in the terracotta pot close — warm candlelight |
| F32A/B/C | Lily asking Diane about the olive tree — Diane smiling | Epilogue | Full warm + sage `#6B7F5A` | Nano Banana 2 + diane ref | ⭐ | A: wide — kitchen table, women mid-dinner, B: Diane and Lily medium — Diane showing Lily the tree, C: Diane's expression close — genuine warmth, the answer that needs no explanation |
| F33A/B/C | Nina and Diane doing dishes together after dinner | Epilogue | Full warm `#D4A547` | Nano Banana 2 + nina ref + diane ref | ⭐ | A: wide kitchen — warm light, Christmas evening, both at sink, B: Nina and Diane at sink medium — drying dishes, C: their hands close — a dish passed between them, quiet and whole |
| F34A/B/C | Karma Caught Up butterfly / CTA | CTA | Deep navy + gold | Ideogram 3 (logo/card) | ⭐ | A: wide — warm home kitchen backdrop, subtle, B: butterfly card medium — "@KarmaCaughtUp" logo, C: CTA close — "Subscribe · New story every week." |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Neighborhood mailbox at dusk — the envelope inside | Beat 1 Hook | 15s | WARM `#F3E9D2` | Slow PUSH in on mailbox | Opening anchor — the object that starts everything |
| S02 | Nina's classroom — jar of pens, student papers, quiet capability | Beat 2 | 15s | WARM `#F3E9D2` + gold | Slow PAN-R across classroom | The woman at the center of the story |
| S03 | Thanksgiving table — Patricia's place setting, full warmth (before) | Beat 2 | 20s | WARM gold | Slow PUSH in on table | What was trusted — before |
| S04 | Envelope in Nina's hand — not opened, held at arm's length | Beat 3 | 20s | COOL `#CBD5E1` | Slow TILT-DN to Nina's hands | The crack forming — she already knows something |
| S05 | Nina's face — phone lowered, after the two-second silence | Beat 3 | 25s | DARK entering `#0B1426` | Slow PULL back — reveals the empty room around her | ⭐ The silence that tells her everything |
| S06 | Yellow legal pad — Diane's handwriting, the assembled pieces | Beat 4 | 30s | DARK `#0B1426` | STATIC — hold on text | ⭐ PEAK BETRAYAL — the record of what was missed |
| S07 | Diane's face at the kitchen table — grief and love simultaneously | Beat 4 | 20s | DARK `#0B1426` | Slow PULL back — reveals both women in kitchen | ⭐ The double betrayal — mother and daughter |
| S08 | Nina at Lily's door — her daughter sleeping, protected | Beat 5 | 20s | DARK COLD `#0B1426` | Slow DESCENT onto child's bed | ⭐ What she is doing this for |
| S09 | House deed — "Nina Reyes. Sole owner." | Beat 6 | 25s | TURNING WARM `#D4A547` | Slow PUSH in on name | ⭐ Pre-marital. Grandmother's gift. Hers. |
| S10 | Diane dialing Patricia's number — expression resolved | Beat 7 | 20s | FULL WARM gold | STATIC — hold on Diane's face | The four words that are coming |
| S11 | Patricia's phone screen — "6 missed calls. Diane." | Beat 7 | 25s | COLD GRAY `#1F2937` | Slow PUSH in on phone | The network disappearing in silence |
| S12 | Marcus at the edge of the birthday party yard — alone | Beat 8 | 20s | COLD GRAY `#1F2937` | Slow PULL back — reveals how far from the center he is | The cost of what he chose |
| S13 | Empty driveway where Patricia's car used to be | Beat 8 | 15s | COLD GRAY neutral | Slow PULL back from driveway | The quiet erasure |
| S14 | The olive tree in terracotta pot at the Christmas table | Epilogue | 30s | FULL WARM gold + sage | Slow PUSH in on olive tree — candlelight | ⭐ The most important object in the epilogue |
| S15 | Nina and Diane at the sink — a dish passed between them | Epilogue/CTA | 40s | FULL WARM `#D4A547` + sage | Slow CRANE-UP from hands to wide kitchen | ⭐ FINAL SHOT — two women, whole, no words needed |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Nina, Marcus, Diane, or Patricia appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro / Seedream 4.5 — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear
- Key text: "Marcus" (envelope handwriting) · "Nina Reyes. Sole owner. Pre-marital property." · "6 missed calls. Diane." · "@KarmaCaughtUp · Subscribe · New story every week."
- "Legible voxel-style UI, clear typography, 1920x1080"

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction for CapCut keyframing
- S15 (40s epilogue) — gen highest quality, most important still in episode
