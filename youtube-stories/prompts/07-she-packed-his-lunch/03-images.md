# EP07 — Images Guide (V4)
## 117 Images Total · 34 Scenes × 3 Angles + 15 Ken Burns

---

## V4 Image System

**Total assets:** 117 images
- **102 scene frames:** 34 scenes × 3 angles (A = wide/establish, B = medium/action, C = close/detail)
- **15 Ken Burns stills:** extended duration hero moments (15–40s each)

**Naming convention:**
- Scene frames: `F{NN}{LETTER}` — e.g. `F01A`, `F01B`, `F01C`
- Ken Burns stills: `S{NN}` — e.g. `S01`, `S02`
- Full filename: `EP07-F01A.png`, `EP07-S01.png`

**Output folder:** `/Users/MAC/Desktop/agent/youtube-stories/assets/EP07/`

---

## Model Routing

| Model | Use case | Frames |
|---|---|---|
| **Nano Banana 2** + `claire-ep07-voxel-base.png` | Claire in scene — character-driven | F02, F04, F08, F09, F13, F14, F16, F17, F19, F20, F21, F23, F25, F28, F31, F33, F34 |
| **Nano Banana 2** + `greg-ep07-voxel-base.png` | Greg in scene | F03, F05, F06, F07 (restaurant), F26, F27, F30 |
| **Nano Banana 2** + `natalie-ep07-voxel-base.png` | Natalie in scene | F07 (Chez Lune — Greg + Natalie together, attach both refs) |
| **Flux 2 Pro** | Environments, exteriors, objects (no character) | F01, F10, F11, F15, F22, F24, F29, F32 |
| **Ideogram 3** | Text on screen, documents, receipts, phone UI | F11, F12, F18, F22, F34 |

> Note: F07 needs both Greg AND Natalie: attach both character refs to Nano Banana 2.
> F12 (phone screen text) and F18 (Dorothy's note) are primarily Ideogram 3 for text legibility.

---

## DUTCH Tilt Rules

**DUTCH allowed ONLY in:** F10B, F10C, F11B, F11C, F12B, F13B
- These are the Betrayal peak scenes (phone screen + Greg's message text + Claire's frozen face)

**TUYỆT ĐỐI KHÔNG DUTCH:**
- F01–F09 (setup/crack phase — before phone scene)
- F14 onward (pivot, karma, epilogue)
- ANY Ken Burns stills
- Epilogue frames F33–F34

**Other camera moves:**
PUSH · PULL · PAN-L/R · TILT-UP/DN · ORBIT-L/R · RACK-FOCUS · DOLLY · CRANE-UP · STATIC

---

## 34-Scene Frame Table

| Frame | Scene Description | Beat | Color Palette | Model | Hero ⭐ | Camera Notes |
|---|---|---|---|---|---|---|
| F01A/B/C | Brown paper bag on kitchen counter, morning light | 1 Hook | `#F3E9D2` warm cream + gold | Flux 2 Pro | ⭐ | A: wide kitchen counter, B: bag medium, C: folded top close detail |
| F02A/B/C | Claire at kitchen counter 6:30am making lunch | 2 Intro | `#F3E9D2` warm cream + gold | Nano Banana 2 + claire ref | | A: wide warm kitchen, B: Claire medium — hands working, C: turkey/sourdough/green apple close |
| F03A/B/C | Greg leaving with paper bag, Claire at door | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + greg ref | | A: wide front door scene, B: Greg medium — bag in hand, C: Claire's face at door — soft goodbye |
| F04A/B/C | Claire at school library helping child | 2 Intro | `#F3E9D2` warm gold | Nano Banana 2 + claire ref | | A: wide library interior, B: Claire + child at bookshelf, C: child's book open — warm detail |
| F05A/B/C | Greg at law firm confident in navy suit | 2 Intro | `#F3E9D2` cooling slightly | Nano Banana 2 + greg ref | | A: wide downtown law firm interior, B: Greg at desk — confident, C: phone face-up on desk — normal |
| F06A/B/C | Greg phone face-down on kitchen table | 3 Crack | `#CBD5E1` cool entering | Nano Banana 2 + greg ref | | A: wide kitchen table, Greg distracted, B: phone face-down close — medium, C: extreme close on phone back — dark screen |
| F07A/B/C | Greg at Chez Lune restaurant with Natalie | 3 Crack | `#CBD5E1` cool slate | Nano Banana 2 + greg ref + natalie ref | ⭐ | A: wide French restaurant interior, B: Greg + Natalie at table — close together, C: prix fixe menu close detail |
| F08A/B/C | Claire holding Chez Lune receipt in kitchen | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + claire ref | ⭐ | A: wide kitchen, Claire standing alone, B: Claire medium — receipt in hand, C: receipt close — "Chez Lune · $43.00 · Tuesday" |
| F09A/B/C | Claire putting receipt back, hands in pocket | 3 Crack | `#CBD5E1` cool | Nano Banana 2 + claire ref | | A: wide laundry area, B: Claire's hand sliding receipt back into pants pocket, C: expression close — deciding something |
| F10A/B/C | Claire opening Greg's phone in dark bedroom | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + claire ref | ⭐ BETRAYAL START | A: wide dark bedroom — Greg's shower light visible, B: DUTCH — Claire's hands holding phone, C: DUTCH — phone screen illuminates her face |
| F11A/B/C | Phone screen — Natalie's contact thread visible | 4 Betrayal | `#0B1426` dark cold | Ideogram 3 (phone UI) | ⭐ | A: wide — Claire's silhouette, phone light, B: DUTCH — phone screen close, Natalie thread, C: DUTCH — message thread: "14 months" of messages visible |
| F12A/B/C | Phone screen — Greg's text "toss it in the break room" ⭐ | 4 Betrayal | `#0B1426` dark cold | Ideogram 3 (phone screen text) | ⭐ PEAK BETRAYAL | A: Claire's face in dark above phone screen, B: DUTCH — phone screen: Greg's message visible, C: DUTCH — extreme close on text: "I usually toss it in the break room for whoever wants it." |
| F13A/B/C | Claire's face frozen, phone on table, dark kitchen | 4 Betrayal | `#0B1426` dark cold | Nano Banana 2 + claire ref | ⭐ | A: wide dark kitchen — one dim light, B: DUTCH — Claire at table, phone in front of her, C: Claire's face — still, completely still |
| F14A/B/C | Claire making lunch next morning, hollow expression | 5 Fall | `#0B1426` dark | Nano Banana 2 + claire ref | | A: wide kitchen — same scene as F02 but cold, B: Claire medium — hands moving but eyes empty, C: green apple close — mechanical slice |
| F15A/B/C | Break room trash can with paper bag inside ⭐ | 5 Fall | `#0B1426` dark cold | Flux 2 Pro | ⭐ | A: wide office break room, cold fluorescent, B: trash can medium — brown paper bag visible inside, C: extreme close — bag folded twice at top, untouched |
| F16A/B/C | Claire at library desk, not reading, just sitting | 5 Fall | `#0B1426` dark | Nano Banana 2 + claire ref | | A: wide empty library interior, B: Claire at desk — open book, not reading, C: her eyes — unfocused, somewhere else |
| F17A/B/C | Claire on phone with sister, kitchen floor | 5 Fall | `#0B1426` dark | Nano Banana 2 + claire ref | | A: wide kitchen — Claire on floor, back against cabinet, B: Claire medium — phone to ear, C: her face — resolute, not crying, thinking |
| F18A/B/C | Dorothy's handwritten note: "Do something that makes you impossible to ignore" ⭐ | 6 Pivot | Turning warm `#D4A547` | Ideogram 3 (handwritten note) | ⭐ PIVOT PEAK | A: envelope and note on kitchen table, warm light returning, B: note close — handwriting visible, C: extreme close on text: "Do something that makes you impossible to ignore." |
| F19A/B/C | Claire at culinary course, chef instructor | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + claire ref | | A: wide culinary school kitchen, B: Claire at workstation — focused, C: knife + bread close — skill building |
| F20A/B/C | Claire painting food truck pale yellow | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + claire ref | ⭐ | A: wide parking lot — white truck, B: Claire with paint roller — pale yellow going on, C: pale yellow paint on roller close — color reveal |
| F21A/B/C | Lawyer office — Claire signing divorce papers | 6 Pivot | Turning warm `#D4A547` | Nano Banana 2 + claire ref | | A: wide lawyer's office — professional, warm, B: Claire medium — pen in hand over papers, C: signature line close — her name going down |
| F22A/B/C | Food truck exterior "Two Thousand Five Hundred and Fifty-Five" ⭐ | 7 Karma | Full warm `#D4A547` + gold | Flux 2 Pro + Ideogram 3 (truck text) | ⭐ | A: wide establishing shot — pale yellow truck at farmers market, B: truck side medium — truck name in clean lettering, C: extreme close on "Two Thousand Five Hundred and Fifty-Five" lettering |
| F23A/B/C | Line of customers at food truck Saturday market | 7 Karma | Full warm `#F3E9D2` + gold | Nano Banana 2 + claire ref | | A: wide farmers market — line snaking from truck, B: Claire at window serving — warm, C: customer receiving paper bag — the same bag, now wanted |
| F24A/B/C | Food blogger photographing truck, caption on phone | 7 Karma | Full warm `#F3E9D2` | Flux 2 Pro (crowd/truck env) | | A: wide — blogger in crowd with phone raised, B: blogger's phone screen — truck photo + caption, C: likes counter: "12,847" close |
| F25A/B/C | News crew interviewing Claire at truck | 7 Karma | Full warm `#D4A547` | Nano Banana 2 + claire ref | ⭐ | A: wide — news van + truck, B: Claire speaking to interviewer — at ease, C: Claire's expression — she knows who she is now |
| F26A/B/C | Greg alone in empty apartment, phone in hand | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + greg ref | | A: wide empty apartment — sparse, B: Greg medium — phone screen, trying to call, C: phone screen — Claire's contact, not answered |
| F27A/B/C | Greg at smaller law firm, sparse desk | 7 Karma | Cold gray `#1F2937` | Nano Banana 2 + greg ref | | A: wide smaller firm office — less prestigious, B: Greg at desk — desk sparse, no window, C: business card close — smaller firm name |
| F28A/B/C | Investor meeting — Claire with two investors | 7 Karma | Full warm `#D4A547` | Nano Banana 2 + claire ref | ⭐ | A: wide restaurant/meeting space, B: Claire medium — pitching, investors leaning in, C: Claire's notebook — "Dorothy's" written at top of notes |
| F29A/B/C | Dorothy's restaurant exterior sign | 8 Downfall | Full warm `#D4A547` + cream | Flux 2 Pro | ⭐ | A: wide corner restaurant exterior, B: Dorothy's sign medium — warm hanging sign, C: sign close — "Dorothy's" in clean type, window warm inside |
| F30A/B/C | Greg entering Dorothy's restaurant | 8 Downfall | Neutral transitioning | Nano Banana 2 + greg ref | | A: wide — Greg at restaurant door, B: Greg medium — entering, looks around, C: Greg's expression — not ready for this |
| F31A/B/C | Claire walking to Greg's table, server pad ⭐ | 8 Downfall | Full warm `#D4A547` | Nano Banana 2 + claire ref | ⭐ | A: wide restaurant floor, Claire moving through tables, B: Claire medium — server pad in hand, C: Claire's face approaching — calm, complete |
| F32A/B/C | The Usual on table + check for $12 | 8 Downfall | Full warm `#D4A547` | Flux 2 Pro (table/food detail) | ⭐ | A: wide table — Greg alone, food in front of him, B: The Usual medium — turkey sourdough, green apple, C: check close — "$12.00 — The Usual" |
| F33A/B/C | Claire walking away, back to camera ⭐ | Epilogue | Full warm gold + sage `#6B7F5A` | Nano Banana 2 + claire ref | ⭐ EPILOGUE PEAK | A: wide restaurant floor — Claire walking away, warm, B: Claire's back medium — she does not look back, C: restaurant interior from behind Claire — warm light, full tables |
| F34A/B/C | Dorothy's note framed above restaurant register | Epilogue/CTA | Full warm `#D4A547` + sage | Ideogram 3 (framed note text) | ⭐ | A: wide — register area, framed note on wall above, B: framed note medium — "Do something that makes you impossible to ignore.", C: butterfly card — "@KarmaCaughtUp · Subscribe" |

---

## 15 Ken Burns Stills Table

| Still | Source Frame | Beat | Duration | Color Palette | Movement | Notes |
|---|---|---|---|---|---|---|
| S01 | Brown paper bag on counter — hero prop | Beat 1 Hook | 15s | WARM `#F3E9D2` | Slow PUSH in on bag top | Opening anchor — simple object, massive weight |
| S02 | Claire at kitchen 6:30am — morning ritual | Beat 2 | 15s | WARM `#F3E9D2` + gold | Slow PAN-R across kitchen | Warmth before the fall |
| S03 | Greg at Chez Lune with Natalie — wide | Beat 3 | 20s | COOL `#CBD5E1` | Slow PUSH in on table | Audience sees what Claire doesn't yet |
| S04 | Chez Lune receipt in Claire's hand | Beat 3 | 20s | COOL entering dark | Slow TILT-DN onto receipt | First crack — her stillness while reading |
| S05 | Claire opening Greg's phone in dark bedroom | Beat 4 | 25s | DARK `#0B1426` | Slow PUSH in on Claire's face | ⭐ suspension before betrayal |
| S06 | Phone screen — Greg's "toss it in the break room" text | Beat 4 | 30s | DARK `#0B1426` | STATIC — hold on text | ⭐ PEAK BETRAYAL — audience reads it slowly |
| S07 | Claire frozen at dark kitchen table, phone in front | Beat 4 | 20s | DARK `#0B1426` | Slow PULL back — reveals darkness around her | ⭐ silence after the hit |
| S08 | Break room trash can with brown paper bag inside | Beat 5 | 20s | DARK COLD `#0B1426` | Slow DESCENT onto bag | ⭐ justice craving — 2,000+ lunches ended here |
| S09 | Dorothy's handwritten note on kitchen table | Beat 6 | 20s | TURNING WARM `#D4A547` | Slow PUSH in on handwriting | ⭐ pivot moment — the note changes everything |
| S10 | Food truck pale yellow — Claire painting it | Beat 6 | 15s | TURNING WARM gold | Slow ORBIT-L around truck | She is building something now |
| S11 | "Two Thousand Five Hundred and Fifty-Five" lettering on truck | Beat 7 | 25s | FULL WARM `#D4A547` | Slow PUSH in on text | ⭐ title payoff — audience understands the name |
| S12 | Line of customers at Saturday farmers market | Beat 7 | 15s | FULL WARM gold | Slow PAN-L along the line | Catharsis building — people choose her |
| S13 | Greg alone at sparse desk, smaller firm | Beat 7 | 20s | COLD GRAY `#1F2937` | Slow PULL back — reveals empty desk | Justice — understated and complete |
| S14 | Claire walking away from Greg's table | Epilogue | 30s | FULL WARM gold + sage | Slow PULL back — she walks, doesn't look back | ⭐ most powerful epilogue shot |
| S15 | Dorothy's note framed above register — full restaurant visible | Epilogue/CTA | 40s | FULL WARM `#D4A547` + sage | Slow CRANE-UP from note to full restaurant | ⭐ FINAL SHOT — she did it. 7 staff. Still going. |

---

## Generation Notes

**Nano Banana 2 — character scenes:**
- Always attach character ref PNG when Claire, Greg, or Natalie appear
- Specify color palette hex in prompt
- Add "voxel art, Astroneer meets Crossy Road, NOT raw Minecraft, 1920x1080, 2K" to every prompt

**Flux 2 Pro — environment shots:**
- No character refs needed
- Specify color temperature and hex
- "Clean premium voxel art environment, soft voxel lighting, 1920x1080"

**Ideogram 3 — text/UI/documents:**
- Specify exact text to appear (receipts, notes, phone screens)
- "Legible voxel-style UI, clear typography, 1920x1080"
- For key text: Dorothy's note, Greg's phone message, truck name lettering, check amount

**Ken Burns stills (all models):**
- Generate at 1920×1080
- Note movement direction for CapCut keyframing
- S15 (40s epilogue) — gen highest quality, most important still in episode
