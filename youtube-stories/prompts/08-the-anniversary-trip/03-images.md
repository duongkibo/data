# EP08 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP08-F01A.png`, `EP08-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/assets/EP08/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `maya-ep08-voxel-base.png` | Maya in scene — character-driven | F02, F03, F04, F09, F13, F14, F15, F16, F17, F18, F19, F20, F21, F31, F32, F33, F34 |
| **Nano Banana 2** + `daniel-ep08-voxel-base.png` | Daniel in scene | F03, F06, F07, F08, F25, F26, F27, F28 |
| **Nano Banana 2** + `hotel-manager-ep08-voxel-base.png` | Hotel Manager in scene | F12, F29 |
| **Flux 2 Pro** | Environments, exteriors, objects (no character) | F01, F05, F10, F11, F22, F23, F24, F30 |
| **Ideogram 3** | Text on screen, documents, booking confirmations, phone UI | F11, F12, F19, F24, F34 |

> Note: F03 needs both Maya AND Daniel — attach both character refs to Nano Banana 2.
> F12 (hotel reservation log screen) is Ideogram 3 for text legibility — also attach hotel-manager ref for character.
> F19 (attorney office) is Nano Banana 2 + maya ref; text details on notepad via Ideogram.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F10B, F10C, F11B, F11C, F12B, F13B
- These are the Betrayal peak scenes (spa confirmation paper + reservation log + Maya's face reading "Guest: two")

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F09 (setup/crack phase — before spa desk scene)
- F14 onward (fall, pivot, karma, downfall, epilogue)
- ANY Ken Burns stills
- Epilogue frames F31–F34

**Other camera moves:**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · DUTCH · DESCENT · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Ashwood Inn coastal exterior, dawn light | 1 Hook | `#F3E9D2` warm cream + gold | Flux 2 Pro | ⭐ | A: wide coastal exterior dawn, B: inn sign medium, C: ocean horizon close detail |
| F02A/B/C | Maya opening surprise envelope at home | 2 Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + maya ref | | A: wide warm home interior, B: Maya medium — envelope in hands, C: reservation printout close — "Ashwood Inn" |
| F03A/B/C | Maya + Daniel packing suitcases, excited | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + maya ref + daniel ref | | A: wide bedroom suitcases open, B: both medium — packing together, C: Maya's face — warm, hopeful |
| F04A/B/C | Maya at her marketing office desk, capable | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + maya ref | | A: wide marketing office interior, B: Maya at desk — confident, C: monitor close — campaign work |
| F05A/B/C | Coastal drive, car window ocean view | 2 Intro | `#F3E9D2` warm cream | Flux 2 Pro | | A: wide coastal road shot, B: car interior — passenger side, ocean visible, C: ocean through glass close |
| F06A/B/C | Hotel check-in — concierge "Welcome back" moment | 3 Crack | `#CBD5E1` cool entering | Nano Banana 2 + daniel ref | ⭐ | A: wide hotel lobby — warm but Daniel and concierge center, B: Daniel medium — confident at desk, C: concierge expression — recognition |
| F07A/B/C | Daniel navigating hotel without map, confident | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + daniel ref | | A: wide hotel corridor, B: Daniel medium — walking ahead, no map, C: hotel map brochure — untouched in his hand |
| F08A/B/C | Restaurant corner table — Daniel knows exactly which one | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + daniel ref | | A: wide hotel restaurant interior, B: Daniel pointing to/sitting at corner table, C: corner table detail — private, quiet, no sightline to entrance |
| F09A/B/C | Maya watching Daniel at hotel, expression shifting | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + maya ref | ⭐ | A: wide — Maya standing, Daniel ahead of her in corridor, B: Maya medium — watching him, something shifting in her expression, C: Maya's face close — noticing, deciding |
| F10A/B/C | Spa front desk — receptionist hands wrong confirmation | 4 Betrayal | `#0B1426` dark cold | Flux 2 Pro (spa env) + maya ref for B/C | ⭐ BETRAYAL START | A: wide spa reception area — soft indirect lighting, B: DUTCH — receptionist handing paper to Maya, C: DUTCH — paper in Maya's hands |
| F11A/B/C | Spa booking paper — "second visit" visible ⭐ | 4 Betrayal | `#0B1426` dark cold | Ideogram 3 (document text) | ⭐ | A: wide — Maya standing, paper in hand, spa background, B: DUTCH — paper close, booking text visible, C: DUTCH — extreme close: "Couples deep tissue — second visit. Daniel Harlow." |
| F12A/B/C | Hotel manager showing reservation log to Maya ⭐ | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + hotel-manager ref + Ideogram 3 | ⭐ PEAK BETRAYAL | A: wide hotel manager's office/desk — quiet professional setting, B: DUTCH — manager tilting screen toward Maya, C: DUTCH — screen close: "Guests: two. Duration: three nights. Daniel Harlow." |
| F13A/B/C | Maya's face reading the reservation: "Guest: two" | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + maya ref | ⭐ | A: wide — Maya and manager, paper and screen, B: DUTCH — Maya's face over the screen, reading, C: Maya's expression — completely still, processing |
| F14A/B/C | Maya alone at hotel room window, ocean view, night | 5 Fall | `#0B1426` dark | Nano Banana 2 + maya ref | | A: wide hotel room — night, ocean through window, B: Maya medium — standing at window, back partially toward camera, C: ocean through glass close — dark water |
| F15A/B/C | Room service tray — meal for one | 5 Fall | `#0B1426` dark | Nano Banana 2 + maya ref | | A: wide hotel room — room service tray on table, ocean light, B: Maya at table medium — eating alone, composed, C: tray detail close — single plate, single glass |
| F16A/B/C | Maya swimming alone in hotel pool, early morning | 5 Fall | `#0B1426` dark | Nano Banana 2 + maya ref | ⭐ | A: wide outdoor pool — pre-dawn light, Maya alone, B: Maya swimming medium — clean, rhythmic strokes, C: pool water surface close — ripples from her movement |
| F17A/B/C | Maya checkout — tipping staff, composed | 5 Fall | `#0B1426` dark | Nano Banana 2 + maya ref | | A: wide hotel checkout desk, B: Maya medium — handing tip to staff member, C: Maya's face — completely composed, controlled |
| F18A/B/C | Maya in car alone, phone photographing spa confirmation | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + maya ref | ⭐ PIVOT START | A: wide car interior — coastal road, B: Maya medium — phone raised, photographing paper on dashboard, C: phone screen close — image of confirmation being captured |
| F19A/B/C | Maya emailing document from hotel lobby wifi | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + maya ref | | A: wide hotel lobby — Maya at corner, phone in hand, B: Maya medium — typing email on phone, C: phone screen close — "Sent" confirmation + document attached |
| F20A/B/C | Lawyer's office — Maya with mother's attorney ⭐ | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + maya ref | ⭐ | A: wide lawyer's office — professional, warm wood, B: Maya medium — across from attorney, composed and deliberate, C: attorney's notepad close — "I want to document everything." written at top |
| F21A/B/C | Maya at home desk, organizing documents calmly | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + maya ref | | A: wide home office — warm returning light, B: Maya medium — documents organized on desk, C: document stack close — neat, labeled, ready |
| F22A/B/C | Divorce papers filed — courthouse exterior | 7 Karma | Full warm `#D4A547` + gold | Flux 2 Pro | ⭐ | A: wide courthouse exterior — solid, institutional, B: courthouse entrance medium — official setting, C: filed documents stamp close — "Filed" seal visible |
| F23A/B/C | Discovery documents — hidden bank account revealed | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro (documents on table) | | A: wide lawyer's table — documents spread, B: bank statement document medium — Serena's name visible, C: account detail close — date and account number |
| F24A/B/C | House deed — Maya's name only | 7 Karma | Full warm `#D4A547` | Ideogram 3 (deed document) | ⭐ | A: wide — deed document on warm desk, B: deed medium — Maya's name at top, C: deed close — "Maya [Last Name]. Sole owner." |
| F25A/B/C | Daniel carrying box out of house | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + daniel ref | | A: wide house exterior — Daniel at doorway, box in arms, B: Daniel medium — box in hands, charcoal blazer, C: house front door — closing behind him |
| F26A/B/C | Serena disappearing — apartment door closes | 7 Karma | Cold gray `#1F2937` | Flux 2 Pro (apartment door) | | A: wide apartment hallway — door visible, B: door closing medium — Serena's silhouette inside (dark, navy dress glimpse), C: closed door close — silence |
| F27A/B/C | Daniel's firm office — packing desk quietly | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + daniel ref | | A: wide architecture firm — Daniel's desk, B: Daniel medium — packing items into box, C: desk items close — drafting tools, blueprints — being packed |
| F28A/B/C | Daniel on phone calling Ashwood Inn, alone in rental | 8 Downfall | Cold gray `#1F2937` | Nano Banana 2 + daniel ref | ⭐ | A: wide sparse rental apartment — cold, minimal, B: Daniel medium — phone to ear, standing, agitated posture, C: Daniel's face close — not calm, not remorseful |
| F29A/B/C | Hotel manager logging the call, professional expression | 8 Downfall | Neutral | Nano Banana 2 + hotel-manager ref | | A: wide hotel manager's office — professional, B: manager medium — at desk, typing log entry, C: manager's expression close — composed, professional, entirely unimpressed |
| F30A/B/C | Courtroom — judge with documents, asset ruling | 8 Downfall | Neutral | Flux 2 Pro (courtroom env) | ⭐ | A: wide courtroom interior — institutional, B: judge's bench medium — documents in hand, C: ruling document close — "not remorseful in character" text visible |
| F31A/B/C | Maya checking into new hotel, alone, champagne | Epilogue | Full warm `#D4A547` | Nano Banana 2 + maya ref | ⭐ EPILOGUE START | A: wide different hotel lobby — warm, fresh, new, B: Maya medium — checking in alone, relaxed smile, C: champagne glass on tray close — single glass, clean start |
| F32A/B/C | Maya at new city marketing director office | Epilogue | Full warm + sage `#6B7F5A` | Nano Banana 2 + maya ref | ⭐ | A: wide marketing director's office — bigger than before, B: Maya at desk medium — in her element, C: office window view — new city skyline |
| F33A/B/C | Christmas card addressed to Ashwood Inn manager | Epilogue | Full warm `#D4A547` | Nano Banana 2 + maya ref | | A: wide warm home desk — Maya writing cards, B: Christmas card medium — hand-addressed, C: card front close — handwriting: "Thank you for your kindness." |
| F34A/B/C | Karma Caught Up butterfly logo / CTA | CTA | Deep navy + gold | Ideogram 3 (logo/card) | ⭐ | A: wide — subtle hotel coastal backdrop, B: butterfly card medium — "@KarmaCaughtUp" logo, C: CTA close — "Subscribe · New story every week." |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Ashwood Inn coastal exterior, dawn | Beat 1 Hook | 15s | WARM `#F3E9D2` | Slow PUSH in on inn entrance | Opening anchor — beautiful trap |
| S02 | Maya opening envelope, warm home | Beat 2 | 15s | WARM `#F3E9D2` + gold | Slow PAN-R across home | Warmth before the fall |
| S03 | Daniel at hotel check-in "Welcome back" | Beat 3 | 20s | COOL `#CBD5E1` | Slow PUSH in on concierge and Daniel | Audience sees the first crack before Maya does |
| S04 | Maya watching Daniel navigate hotel, expression shifting | Beat 3 | 20s | COOL entering dark | Slow TILT-DN to Maya's face | First suspicion — her eyes, her stillness |
| S05 | Spa front desk — receptionist handing wrong paper | Beat 4 | 25s | DARK `#0B1426` | Slow PUSH in on paper | ⭐ suspension before betrayal |
| S06 | Spa booking confirmation: "second visit. Daniel Harlow." | Beat 4 | 30s | DARK `#0B1426` | STATIC — hold on text | ⭐ PEAK BETRAYAL — audience reads it slowly |
| S07 | Maya's face: completely still, processing | Beat 4 | 20s | DARK `#0B1426` | Slow PULL back — reveals empty spa hall around her | ⭐ silence after the hit |
| S08 | Maya swimming alone in pool, pre-dawn | Beat 5 | 20s | DARK COLD `#0B1426` | Slow DESCENT onto pool surface | ⭐ the quiet survival of the fall |
| S09 | Maya photographing confirmation in car | Beat 6 | 20s | TURNING WARM `#D4A547` | Slow PUSH in on phone camera | ⭐ pivot moment — action begins |
| S10 | Attorney's notepad: "I want to document everything." | Beat 6 | 25s | TURNING WARM gold | STATIC — hold on text | She has a plan and it is already in motion |
| S11 | House deed — Maya's name only | Beat 7 | 25s | FULL WARM `#D4A547` | Slow PUSH in on name | ⭐ title payoff — she keeps the house |
| S12 | Daniel packing box out of house | Beat 7 | 15s | COLD GRAY `#1F2937` | Slow PULL back — reveals full house he's leaving | Justice — quiet and total |
| S13 | Daniel alone in rental, phone in hand (calling Ashwood) | Beat 8 | 20s | COLD GRAY `#1F2937` | Slow PULL back — reveals how sparse the rental is | The downfall in one frame |
| S14 | Maya at new hotel window, champagne, ocean light | Epilogue | 30s | FULL WARM gold + sage | Slow PUSH in on her face at window | ⭐ most powerful epilogue shot |
| S15 | Christmas card on warm desk — "Thank you for your kindness." | Epilogue/CTA | 40s | FULL WARM `#D4A547` + sage | Slow CRANE-UP from card to wide warm home desk | ⭐ FINAL SHOT — she is whole, she remembers kindness |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Maya, Daniel, or Hotel Manager appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear (spa confirmation, reservation log, deed, court ruling phrase)
- "Legible voxel-style UI, clear typography, 1920x1080"
- Key text: "Couples deep tissue — second visit. Daniel Harlow." / "Guests: two. Duration: three nights." / "not remorseful in character." / "I want to document everything."

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction for CapCut keyframing
- S15 (40s epilogue) — gen highest quality, most important still in episode
