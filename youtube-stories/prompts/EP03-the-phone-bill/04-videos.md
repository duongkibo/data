# 04 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)
# EP03: "The Phone Bill"

> **Model**: Kling 2.5 Turbo · **Duration**: 5s/clip · **Ratio**: 16:9 · 1080p
> **Precondition**: 34 start frames F01A/B/C – F34A/B/C gen xong (file 03)
> **Unlimited credits** ✅ · Save: `media/videos/C01A.mp4`, `C01B.mp4`, `C01C.mp4` ... `C34C.mp4`

---

## Hệ thống 3-Clip Per Scene (V4)

```
Mỗi "scene" = 3 clip × 5s generated → CapCut trim mỗi clip còn 3s → 9-10s on screen

  A-clip (5s gen → 3s used)  →  [CUT]  →  B-clip (5s gen → 3s used)  →  [CUT]  →  C-clip (5s gen → 3s used)
  WIDE / ESTABLISH                        MEDIUM / MOVEMENT                        CLOSE / DETAIL / REACTION
```

**Tại sao 3 cuts?** 1 góc 9-10s = nhàm. 3 cuts × 3s = cinematic, dynamic, giữ người xem dán mắt.

**CapCut trim rule:** Gen Kling 5s → import → trim last 2s → dùng 3s đầu (hoặc 3s đẹp nhất của clip).

**Rule per triplet:**
- **A-clip**: WIDE / ESTABLISHING — người xem biết mình đang ở đâu
- **B-clip**: MEDIUM / MOVEMENT — action hoặc emotion đang diễn ra
- **C-clip**: CLOSE / DETAIL / REACTION — object detail, face reaction, hoặc góc thứ 3

---

## Characters

| Character | Age | Role | Voxel Color | Outfit |
|---|---|---|---|---|
| **Diane** | 36 | Protagonist (accountant) | Cream/sage cardigan | Warm brown hair, sage green + cream |
| **Marcus** | 38 | Antagonist (contractor) | Dark navy | Dark navy work shirt, charcoal pants |
| **Serena** | 31 | Other woman / also betrayed | Burgundy | Burgundy top, dark jeans |

---

## Setup Kling

- Duration: **5s** (minimum Kling — trim về 3s trong CapCut)
- Start frame: **mỗi clip upload đúng frame tương ứng** — `F{NN}A.png` cho A-clip, `F{NN}B.png` cho B-clip, `F{NN}C.png` cho C-clip
- Save: `C{NN}A.mp4`, `C{NN}B.mp4`, `C{NN}C.mp4`

---

## Timeline Math

```
34 scenes × 3 clips × 5s generated  = 510s footage in Kling
→ CapCut trim mỗi clip còn ~3s
→ 34 scenes × 3 clips × 3s used     = 306s animated (~5:06)
15 Ken Burns stills × avg 15s        = 225s (~3:45)
CapCut transitions + gaps            = ~35s
Total                                ≈ 566s ≈ 9:26 → +BGM/voice = ~11:30 ✅
```

---

## Color Arc

| Frames | Zone | Palette | Mood |
|---|---|---|---|
| F01–F05 | WARM cream gold | Cream, honey gold, warm amber | Home warmth, safe routine |
| F06–F09 | COOL entering | Cool teal-gray, muted blue | First cracks, doubt |
| F10–F12 | DARK COLD | Deep navy, cold gray, single cold light | Betrayal confirmed |
| F13–F15 | DARK | Charcoal, muted, low key | Emotional fall |
| F16–F19 | TURNING WARM | Soft warm returning, decisive | Pivot — she acts |
| F20–F26 | COLD GRAY institutional | Gray, steel, official cold | Karma unfolding |
| F27 | WARMING | Neutral warming | Bridge to resolution |
| F28–F34 | FULL WARM | Warm gold, cream, open light | Epilogue / CTA |

---

## DUTCH Tilt Rule

**DUTCH tilt ONLY on:** `C09B`, `C09C`, `C10B`, `C10C`, `C11C`, `C12B`
**NEVER** use DUTCH in Epilogue (F28–F34).

---

## Beat / Scene Timeline Map

| Beat | Scenes | Time range | Function |
|---|---|---|---|
| BEAT 1 — HOOK | C01–C02 | 0:00–0:30 | Pull viewer in with the phone bill reveal |
| BEAT 2 — INTRO | C03–C05 | 0:30–1:30 | Establish warm home life, Diane's character |
| BEAT 3 — THE CRACK | C06–C09 | 1:30–3:00 | First suspicious signals, spreadsheet discovery |
| BEAT 4 — THE BETRAYAL | C10–C12 | 3:00–4:30 | Diane dials, Serena answers, 43 pages on counter |
| BEAT 5 — THE FALL | C13–C15 | 4:30–5:45 | 4am audit, hotel receipts, 7am decision |
| BEAT 6 — THE PIVOT | C16–C19 | 5:45–7:00 | Bank, lawyer, note, car leaving |
| BEAT 7 — KARMA | C20–C26 | 7:00–9:00 | Marcus's world collapses — 47 calls, bids rejected, $212 |
| BEAT 8 — EPILOGUE | C27–C31 | 9:00–10:30 | Diane thriving — firm, condo, client dinner, phone bill calm |
| CONTRAST/CLOSE | C32–C33 | 10:30–11:00 | Marcus sparse vs Diane flourishing |
| CTA | C34 | 11:00–11:30 | Butterfly channel card / subscribe |

---

## 102 Motion Prompts (34 scenes × A+B+C)

---

### BEAT 1 — HOOK (0:00–0:30)

**SCENE 01 — Diane at bills desk**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C01A | F01A | 5s | `ELS → PUSH` | Extreme wide isometric kitchen, warm cream gold light, Diane at corner desk with laptop, stacks of organized bills. Camera pushes slowly forward through warm kitchen toward her. |
| B | C01B | F01B | 5s | `RACK-FOCUS + CU` | Rack focus from warm kitchen background to Diane's hands on laptop foreground — fingers moving through monthly routine, warm ring detail visible. |
| C | C01C | F01C | 5s | `ECU + STATIC` | Extreme close-up on laptop screen showing neat monthly expenses list — routine, orderly, warm honey glow on screen. Hold. The calm before. |

**SCENE 02 — Phone bill reveal** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C02A | F02A | 5s | `PUSH → CU` | Camera pushes from medium toward laptop screen — phone bill PDF loading, "615" number appearing in call log. Screen text becoming readable, unavoidable. |
| B | C02B | F02B | 5s | `RACK-FOCUS + DUTCH` | Rack focus from screen text to Diane's face appearing below — expression shifting from routine to stunned. Slight Dutch tilt as wrongness lands. |
| C | C02C | F02C | 5s | `ECU + STATIC` | Extreme close-up on screen: "615-XXX-XXXX" call log entry, dozens of calls highlighted. Hold. The number just sitting there. |

---

### BEAT 2 — INTRO (0:30–1:30)

**SCENE 03 — Warm home life**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C03A | F03A | 5s | `CRANE-UP` | Start at garden level, crane up slowly to reveal warm kitchen and garden — morning light, cream walls, warmth of a built life. |
| B | C03B | F03B | 5s | `PAN-R + MS` | Pan right across kitchen to reveal Diane and Marcus at breakfast — easy, comfortable, domestic warmth. Not looking closely at each other, just present. |
| C | C03C | F03C | 5s | `CU + STATIC` | Close-up on simple domestic detail — morning coffee mugs side by side, warm honey light. Pure surface warmth. Hold. |

**SCENE 04 — Brick house exterior**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C04A | F04A | 5s | `ELS + TILT-UP` | Start ground level on warm evening street, tilt up to reveal brick house with warm lit windows — solid, real, theirs. |
| B | C04B | F04B | 5s | `MS + PUSH` | Camera pushes toward front door — warm porch light glowing, the house approaching as if welcoming. |
| C | C04C | F04C | 5s | `CU + STATIC` | Close-up on red mailbox in warm evening light — "PORTER" name visible, letter inside. The house is real, the life is real. Hold. |

**SCENE 05 — Bank account screen**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C05A | F05A | 5s | `PUSH → CU` | Camera pushes toward laptop screen showing bank dashboard — savings account balance number growing, warm screen glow. |
| B | C05B | F05B | 5s | `RACK-FOCUS` | Rack focus from screen balance (background) to Diane's face (foreground) — small quiet satisfaction. She built this. |
| C | C05C | F05C | 5s | `ECU + STATIC` | Extreme close-up on savings balance number — $47,000+. Warm screen light. Hold. She is careful with money. She notices everything. |

---

### BEAT 3 — THE CRACK (1:30–3:00)

**SCENE 06 — Marcus leaving gym late**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C06A | F06A | 5s | `ELS + PUSH` | Parking lot at night — cool teal-gray light, Marcus emerging from car alone (no gym bag). Camera pushes forward from far end of lot. |
| B | C06B | F06B | 5s | `MS + STATIC` | Marcus lit by phone screen glow, texting with one thumb, not looking up. The focus on the phone is wrong. Cool light. |
| C | C06C | F06C | 5s | `CU + PULL` | Camera starts on Marcus's face — a smile that doesn't belong here — and pulls back slowly. Where has he been? |

**SCENE 07 — Phone face-down**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C07A | F07A | 5s | `LS + RACK-FOCUS` | Kitchen counter — Marcus's phone face-down in foreground, Diane in background kitchen activity. Rack focus from phone to Diane: she has noticed. |
| B | C07B | F07B | 5s | `PUSH → ECU` | Camera pushes to extreme close-up on face-down phone. Subtle buzz vibration. Screen stays completely dark facing down. Hold — the wrongness. |
| C | C07C | F07C | 5s | `ECU + STATIC` | Extreme close-up on face-down phone screen edge — barely visible glow of incoming text, then dark again. Something is hiding here. Hold. |

**SCENE 08 — Bank email**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C08A | F08A | 5s | `PUSH → CU` | Camera pushes toward laptop screen showing email notification — "Your monthly statement is ready." Cool blue screen in otherwise warm kitchen. |
| B | C08B | F08B | 5s | `RACK-FOCUS + MS` | Rack focus from notification (background) to Diane's face (foreground) — curiosity, the accountant in her. She clicks. |
| C | C08C | F08C | 5s | `ECU + STATIC` | Extreme close-up on email subject line: "Verizon Statement — $847.13 — this month." Her normal bill is $180. Hold. |

**SCENE 09 — 247 calls spreadsheet** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C09A | F09A | 5s | `PUSH → CU` | Camera pushes toward laptop screen showing Diane's own spreadsheet — call log sorted by frequency, 247 calls to one number highlighted in yellow. |
| B | C09B | F09B | 5s | `ECU + DUTCH` | Extreme close-up on "247 calls" cell, Dutch tilt applied — the number enormous on screen, wrong angle, the world tilting around this discovery. ⚠️ DUTCH |
| C | C09C | F09C | 5s | `ECU + STATIC` | Extreme close-up on the 615 number circled — "615-447-3291 × 247 calls × 4 months." Each digit a confirmation. Hold. ⚠️ DUTCH |

---

### BEAT 4 — THE BETRAYAL (3:00–4:30) ⭐

**SCENE 10 — Diane dials 615**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C10A | F10A | 5s | `MS + STATIC` | Medium shot — Diane at kitchen table, phone in hand, spreadsheet open on laptop beside her. Completely still. Composing herself. |
| B | C10B | F10B | 5s | `CU + DUTCH` | Close-up on Diane's finger pressing dial button — Dutch tilt, the action weighted, the world tilted by what this call will confirm. ⚠️ DUTCH |
| C | C10C | F10C | 5s | `ECU + STATIC` | Extreme close-up on phone screen: "Calling... 615-447-3291" — call connecting, timer beginning. Hold. No going back. ⚠️ DUTCH |

**SCENE 11 — Serena answers**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C11A | F11A | 5s | `MS + STATIC` | Medium shot — Serena (burgundy top, dark jeans) in her apartment, phone to ear. Natural posture, then a pause — who is this? |
| B | C11B | F11B | 5s | `RACK-FOCUS + ECU` | Rack focus to Serena's face — expression shifting: confusion to recognition to horror. She knows Marcus has a wife. |
| C | C11C | F11C | 5s | `ECU + DUTCH` | Extreme close-up on Serena's face — the realization landing completely. She was lied to too. Dutch tilt — both women in the wrong world now. ⚠️ DUTCH |

**SCENE 12 — 43 pages on counter** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C12A | F12A | 5s | `ELS + PUSH` | Wide kitchen shot — Marcus comes home to see 43 pages of printed phone bill stacked on kitchen counter. Camera pushes forward toward the counter. |
| B | C12B | F12B | 5s | `TILT-DN + CU` | Camera tilts down the stack of pages — each page another month, another 247 calls. Close-up on the stack: thick, heavy, damning. ⚠️ DUTCH |
| C | C12C | F12C | 5s | `ECU + DUTCH` | Extreme close-up on phone bill cover page — account name, billing period, $847.13 balance. Dutch tilt. The evidence is physical and undeniable. |

---

### BEAT 5 — THE FALL (4:30–5:45)

**SCENE 13 — 4am audit**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C13A | F13A | 5s | `ELS + PUSH` | Extreme wide dark apartment interior — single lamp lit at 4am, one bright pool of light. Diane at laptop. Everything else dark. Camera pushes toward the light. |
| B | C13B | F13B | 5s | `RACK-FOCUS + CU` | Rack focus from dark apartment to Diane's face illuminated by screen — close-up on her expression: not crying, calculating. The accountant mode. |
| C | C13C | F13C | 5s | `ECU + STATIC` | Extreme close-up on laptop screen: transaction list scrolling — credit card charges, cash withdrawals, dates, amounts. Column after column. Hold. |

**SCENE 14 — Hotel receipts**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C14A | F14A | 5s | `PUSH → CU` | Camera pushes toward laptop screen showing scanned hotel receipts — "Grand Hyatt Nashville" × 4 weekends. Screen glow cold on Diane's face. |
| B | C14B | F14B | 5s | `ECU + TILT-DN` | Extreme close-up on receipt amounts — $340/night × 4 nights. Camera tilts down the column of amounts. The money is real. |
| C | C14C | F14C | 5s | `ECU + STATIC` | Extreme close-up on one specific line: "Pandora Store — $387.00 — recipient: S." A piece of jewelry Diane never received. Hold. |

**SCENE 15 — 7am Diane dressed**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C15A | F15A | 5s | `LS + PUSH` | Long shot of bedroom — Marcus asleep in bed, oblivious. Diane stands fully dressed at foot of bed, briefcase beside her. Camera pushes in. |
| B | C15B | F15B | 5s | `MS + STATIC` | Medium shot on Diane standing composed. She has not slept. She is dressed for the most important day of her professional life. Still. Decided. |
| C | C15C | F15C | 5s | `CU + STATIC` | Close-up on Diane's face — not rage, not tears. Precision. The accountant who has finished her audit. She knows exactly what comes next. |

---

### BEAT 6 — THE PIVOT (5:45–7:00)

**SCENE 16 — Bank 8am**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C16A | F16A | 5s | `ELS + PUSH` | Wide interior of bank branch — 8:00am, first customers, official institutional space. Camera pushes down the main aisle toward the advisor desks. |
| B | C16B | F16B | 5s | `MS + STATIC` | Medium shot — Diane at bank advisor's desk, documents spread. Professional posture. The advisor processing paperwork. Both calm and official. |
| C | C16C | F16C | 5s | `CU + STATIC` | Close-up on documents being processed — account separation forms, Diane's signature line being signed. Each signature: deliberate. |

**SCENE 17 — Lawyer's office** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C17A | F17A | 5s | `ELS + PUSH` | Wide shot — law office interior, warm wood desk, floor-to-ceiling bookshelves, serious institutional space. Camera pushes toward desk where Diane sits. |
| B | C17B | F17B | 5s | `MS + STATIC` | Medium shot — Diane and attorney across desk, documents laid out. Diane's posture: straight, focused, deliberate. She has come prepared. |
| C | C17C | F17C | 5s | `CU + STATIC` | Close-up on Diane's hand signing divorce petition — decisive, unhurried, final. The pen completes the signature and sets down. |

**SCENE 18 — Note on counter** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C18A | F18A | 5s | `TILT-DN + CU` | Kitchen counter at dusk — camera tilts down to reveal a single folded note placed on counter. No phone bill. No suitcase. Just the note. |
| B | C18B | F18B | 5s | `PUSH → ECU` | Camera pushes toward the note — text visible: "I know about Serena. I know about Nashville. I know about the jewelry. My attorney will be in touch." |
| C | C18C | F18C | 5s | `ORBIT-R + ELS` | Camera orbits right and pulls to wide — empty kitchen, note alone on counter in fading light. The house quiet. She is already gone. |

**SCENE 19 — Diane's car leaving**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C19A | F19A | 5s | `PAN-R + LS` | Street at dawn — Diane's car pulling out of driveway in first light, unhurried, deliberate. Camera pans right following the car. |
| B | C19B | F19B | 5s | `DOLLY → STATIC` | Camera dollies sideways level with driver's window — Diane's face through glass, looking straight forward, jaw set, no tears. |
| C | C19C | F19C | 5s | `CRANE-UP` | Camera cranes up to aerial — Diane's car moving down the street, the brick house growing smaller behind her. She does not look back. |

---

### BEAT 7 — KARMA (7:00–9:00)

**SCENE 20 — Marcus 47 missed calls**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C20A | F20A | 5s | `CU + DUTCH` | Close-up on phone screen: "47 Missed Calls" — Diane's contact photo visible. Gray cold light. Dutch tilt — his world is already wrong. ⚠️ NOTE: Scene 20 — no DUTCH per zone rules, use STATIC instead. |
| B | C20B | F20B | 5s | `PAN-U + MS` | Camera pans up from phone in Marcus's hand to his face — pacing the kitchen alone, the note in his other hand, panic written clearly. |
| C | C20C | F20C | 5s | `DOLLY + CU` | Camera dollies forward to close-up on Marcus's face — not remorse. Panic about consequences. The distinction matters. |

**SCENE 21 — Patrick calls**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C21A | F21A | 5s | `ELS + PUSH` | Wide roofing job site — gray cold institutional light, crew visible in background. Marcus alone near truck, phone ringing: "Patrick." Camera pushes in. |
| B | C21B | F21B | 5s | `MS + STATIC` | Medium shot — Marcus on call, posture stiffening, face going pale with each sentence he hears. The roofing contract. Gone. |
| C | C21C | F21C | 5s | `ECU + STATIC` | Extreme close-up on Marcus's face: something collapsing behind the eyes. The professional referral network is small. Word travels fast. |

**SCENE 22 — Bid rejection emails**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C22A | F22A | 5s | `PUSH → CU` | Camera pushes toward laptop screen — inbox showing multiple emails: "RE: Bid Submission — Update." Cold gray screen glow. |
| B | C22B | F22B | 5s | `ECU + TILT-DN` | Extreme close-up, camera tilts down the email list — first rejection, second rejection, third rejection. Each one: "We have decided to go in a different direction." |
| C | C22C | F22C | 5s | `ECU + STATIC` | Extreme close-up on third email subject: "Bid Declined — Westside Commercial Roofing." The third in two weeks. Hold. |

**SCENE 23 — Bank $212** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C23A | F23A | 5s | `PUSH → CU` | Camera pushes toward bank app screen on Marcus's phone — account balance loading. Cold institutional light. The numbers coming into focus. |
| B | C23B | F23B | 5s | `ECU + STATIC` | Extreme close-up on balance: "$212.47" — in an account that held joint savings six months ago. Cold. Final. Arithmetic. |
| C | C23C | F23C | 5s | `PULL + ELS` | Camera pulls back wide from the phone screen — Marcus alone in the middle of the spare apartment, the $212 on screen, vast empty room around him. |

**SCENE 24 — Truck FOR SALE**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C24A | F24A | 5s | `ELS + PUSH` | Wide street shot — Marcus's work truck parked at curb, FOR SALE sign in windshield. Gray cold light. Camera pushes toward the truck. |
| B | C24B | F24B | 5s | `CU + STATIC` | Close-up on the handwritten FOR SALE sign in the windshield — the tool of his trade, now being sold. Hold. |
| C | C24C | F24C | 5s | `RACK-FOCUS` | Rack focus from truck in background to empty curb foreground — after a beat, the truck feels already gone, already past. |

**SCENE 25 — Marcus rental**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C25A | F25A | 5s | `ELS + PUSH` | Wide shot of sparse studio apartment — bare walls, minimal furniture, cold gray light from one window. Camera pushes in. Marcus barely visible in corner. |
| B | C25B | F25B | 5s | `MS + STATIC` | Medium shot — Marcus sitting on the edge of a cheap mattress on the floor, phone in hand, staring at nothing. He is very small in this room. |
| C | C25C | F25C | 5s | `DESCENT` | Bird's eye camera descends from ceiling slowly — Marcus a small dark figure in the center of bare gray floor, the apartment vast around him. |

**SCENE 26 — Brick house listing**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C26A | F26A | 5s | `ELS` | Wide shot of the brick house from the street — FOR SALE sign in the yard, the house unchanged, the life it held: gone. Gray sky. |
| B | C26B | F26B | 5s | `CU + STATIC` | Close-up on Diane's laptop showing the Zillow listing of their house — photos of rooms she decorated. Price: $312,000. Below what they expected. Hold. |
| C | C26C | F26C | 5s | `ECU` | Extreme close-up on listing price — "$312,000." She knows what a fair share of that means. The accountant never stops counting. |

---

### BEAT 8 — EPILOGUE (9:00–11:00)

**SCENE 27 — Message exchange**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C27A | F27A | 5s | `CU + STATIC` | Close-up on phone screen — text message from "Serena": "Are you doing okay? Really?" Warming light, soft. |
| B | C27B | F27B | 5s | `PUSH → CU` | Camera pushes to close-up on the reply bubble appearing: "Better than okay. Thank you for being honest." Warm screen light. |
| C | C27C | F27C | 5s | `PULL + LS` | Camera pulls back to reveal Diane at her new home desk, message sent, a small genuine exhale. Distance covered. New ground. |

**SCENE 28 — Diane's firm** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C28A | F28A | 5s | `CRANE-UP` | Camera cranes up from street level — warm morning light on office building exterior, then up and through lobby windows to Diane's floor. |
| B | C28B | F28B | 5s | `TILT-UP + LS` | Camera tilts up from floor level to reveal full office: Diane at her own desk, name plate visible, morning light flooding in. She built this. |
| C | C28C | F28C | 5s | `PAN-R + CU` | Pan right to close-up on Diane's face at her desk — not performing happiness. Settled. This is what thriving looks like when it's real. |

**SCENE 29 — Condo balcony tomatoes**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C29A | F29A | 5s | `CRANE-UP` | Camera cranes up from street to reveal condo balcony — warm sunlight, city skyline behind, green tomato plant in terracotta pot. |
| B | C29B | F29B | 5s | `MS + STATIC` | Medium shot — Diane on balcony tending tomatoes, unhurried, at home in this smaller space that is entirely hers. |
| C | C29C | F29C | 5s | `ECU + STATIC` | Extreme close-up on tomato plant — small green tomatoes visible, growing. Earned peace has a texture. Hold. |

**SCENE 30 — Client dinner meeting**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C30A | F30A | 5s | `ELS + PUSH` | Wide restaurant interior — warm amber light, booths, evening. Camera pushes toward a booth where Diane sits across from a client. |
| B | C30B | F30B | 5s | `MS + STATIC` | Medium shot — Diane and client in easy conversation, documents on table, dinner plates. She is relaxed, engaged, no weight on her. |
| C | C30C | F30C | 5s | `CU + STATIC` | Close-up on Diane's face during conversation — open, present, genuine smile. No performance. No vigilance. She is simply here. |

**SCENE 31 — Checking phone bill calmly** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C31A | F31A | 5s | `LS + PUSH` | Long shot of Diane's home desk — warm light, tidy, her space. She opens laptop, pulls up phone bill. Camera pushes in toward her. |
| B | C31B | F31B | 5s | `MS + STATIC` | Medium shot — Diane reading her phone bill. Posture completely relaxed. She scans it with accountant's eyes — no tension, just precision. |
| C | C31C | F31C | 5s | `CU + STATIC` | Close-up on Diane's face as she checks the bill — calm, methodical, no fear. She will always check. But now it means something different. Full circle. |

---

### CONTRAST / CLOSE (10:30–11:00)

**SCENE 32 — Marcus sparse rental far**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C32A | F32A | 5s | `ELS + PUSH` | Wide sparse rental apartment — gray walls, minimal furniture, Marcus visible at far end. Cold light. Camera pushes slowly. |
| B | C32B | F32B | 5s | `DOLLY + CU` | Camera dollies forward to close-up on Marcus going through motions — phone in hand, nothing incoming. The quiet of consequence. |
| C | C32C | F32C | 5s | `DESCENT` | Bird's eye camera descends slowly — Marcus a tiny dark figure on bare gray floor. The overhead view says everything. He is very small. |

**SCENE 33 — Diane thriving with colleague**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C33A | F33A | 5s | `ELS + PUSH` | Wide bright office — warm light, plants, people at desks. Camera pushes toward Diane and a colleague laughing at her station. |
| B | C33B | F33B | 5s | `MS + STATIC` | Medium shot — Diane and colleague looking at something on screen, mid-laugh. The ease of people who actually like where they are. |
| C | C33C | F33C | 5s | `ORBIT-R + CU` | Camera orbits right slowly to close on Diane's face — real settled happiness. Not relief that the bad thing is over. Joy at what came after. |

---

### CTA (11:00–11:30)

**SCENE 34 — Butterfly channel card**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C34A | F34A | 5s | `PUSH + ORBIT-R` | Camera pushes and orbits right around Karma Caught Up butterfly logo — warm gold light, the logo centered, growing. |
| B | C34B | F34B | 5s | `PULL + ELS` | Camera pulls back to reveal full end card frame — channel name, subscribe button visible, butterfly logo centered. Warm. |
| C | C34C | F34C | 5s | `STATIC` | Full end card hold — "KARMA CAUGHT UP" text, butterfly, subscribe. Static hold for viewer to act. |

---

## CapCut Assembly Rule

- Trim each 5s clip to 3s (keep first 3s or best 3s)
- Hard cut A → B → C within each scene
- Crossfade ONLY when transitioning to Ken Burns still frames
- BGM: -18dB under voice
- Export: 1080p 30fps H.264

---

## Quick Reference Table

| Scene | Description | A-clip Camera | B-clip Camera | C-clip Camera | Notes |
|---|---|---|---|---|---|
| C01 | Diane at bills desk | ELS → PUSH | RACK-FOCUS + CU | ECU + STATIC | Warm zone |
| C02 | Phone bill reveal | PUSH → CU | RACK-FOCUS + DUTCH | ECU + STATIC | Hook ⭐ |
| C03 | Warm home life | CRANE-UP | PAN-R + MS | CU + STATIC | Warm zone |
| C04 | Brick house exterior | ELS + TILT-UP | MS + PUSH | CU + STATIC | Warm zone |
| C05 | Bank account screen | PUSH → CU | RACK-FOCUS | ECU + STATIC | Warm zone |
| C06 | Marcus leaving gym late | ELS + PUSH | MS + STATIC | CU + PULL | Cool zone |
| C07 | Phone face-down | LS + RACK-FOCUS | PUSH → ECU | ECU + STATIC | Cool zone |
| C08 | Bank email | PUSH → CU | RACK-FOCUS + MS | ECU + STATIC | Cool zone |
| C09 | 247 calls spreadsheet | PUSH → CU | ECU + DUTCH ⚠️ | ECU + STATIC ⚠️ | DUTCH B+C |
| C10 | Diane dials 615 | MS + STATIC | CU + DUTCH ⚠️ | ECU + STATIC ⚠️ | DUTCH B+C |
| C11 | Serena answers | MS + STATIC | RACK-FOCUS + ECU | ECU + DUTCH ⚠️ | DUTCH C only |
| C12 | 43 pages on counter | ELS + PUSH | TILT-DN + CU ⚠️ | ECU + DUTCH | DUTCH B+C |
| C13 | 4am audit | ELS + PUSH | RACK-FOCUS + CU | ECU + STATIC | Dark zone |
| C14 | Hotel receipts | PUSH → CU | ECU + TILT-DN | ECU + STATIC | Dark zone |
| C15 | 7am Diane dressed | LS + PUSH | MS + STATIC | CU + STATIC | Dark zone |
| C16 | Bank 8am | ELS + PUSH | MS + STATIC | CU + STATIC | Turning warm |
| C17 | Lawyer's office | ELS + PUSH | MS + STATIC | CU + STATIC | Pivot ⭐ |
| C18 | Note on counter | TILT-DN + CU | PUSH → ECU | ORBIT-R + ELS | Pivot ⭐ |
| C19 | Diane's car leaving | PAN-R + LS | DOLLY → STATIC | CRANE-UP | Turning warm |
| C20 | Marcus 47 missed calls | CU + STATIC | PAN-U + MS | DOLLY + CU | Cold gray |
| C21 | Patrick calls | ELS + PUSH | MS + STATIC | ECU + STATIC | Cold gray |
| C22 | Bid rejection emails | PUSH → CU | ECU + TILT-DN | ECU + STATIC | Cold gray |
| C23 | Bank $212 | PUSH → CU | ECU + STATIC | PULL + ELS | Karma ⭐ |
| C24 | Truck FOR SALE | ELS + PUSH | CU + STATIC | RACK-FOCUS | Cold gray |
| C25 | Marcus rental | ELS + PUSH | MS + STATIC | DESCENT | Cold gray |
| C26 | Brick house listing | ELS | CU + STATIC | ECU | Cold gray |
| C27 | Message exchange | CU + STATIC | PUSH → CU | PULL + LS | Warming |
| C28 | Diane's firm | CRANE-UP | TILT-UP + LS | PAN-R + CU | Epilogue ⭐ |
| C29 | Condo balcony tomatoes | CRANE-UP | MS + STATIC | ECU + STATIC | Full warm |
| C30 | Client dinner meeting | ELS + PUSH | MS + STATIC | CU + STATIC | Full warm |
| C31 | Checking phone bill calmly | LS + PUSH | MS + STATIC | CU + STATIC | Full circle ⭐ |
| C32 | Marcus sparse rental far | ELS + PUSH | DOLLY + CU | DESCENT | Contrast |
| C33 | Diane thriving with colleague | ELS + PUSH | MS + STATIC | ORBIT-R + CU | Epilogue |
| C34 | Butterfly channel card | PUSH + ORBIT-R | PULL + ELS | STATIC | CTA |
