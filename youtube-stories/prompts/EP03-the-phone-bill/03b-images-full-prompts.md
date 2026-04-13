# 03b — Full Image Generation Prompts
# EP03 "The Phone Bill" — F01A through F34C (102 prompts) + S01–S15 (15 Ken Burns stills) = 117 total
# Copy-paste trực tiếp vào Freepik — self-contained, no external reference needed

> **System**: Each scene = 3 start frames (A = Wide/Establishing, B = Medium, C = Close-Up/ECU)
> **Setup**: Ratio 16:9 · Resolution 2K · AI enhance OFF
> **Save**: media/images/F01A.png, F01B.png, F01C.png ... F34C.png | S01.png ... S15.png

---

## Characters

| Character | Description | Signature Colors |
|-----------|-------------|-----------------|
| **Diane** | 36, accountant. Cube-bodied voxel, cream/sage cardigan, warm brown hair pulled back, practical glasses. | Cream #F3E9D2 + sage #6B7F5A |
| **Marcus** | 38, contractor. Dark navy work shirt, broader build, strong hands. | Navy #0B1426 + charcoal #1F2937 |
| **Serena** | 31, sales rep. Burgundy top, dark hair, professional travel look. | Burgundy #8B1E2F + dark |

---

## Model Routing

| Model | When to use |
|-------|-------------|
| **Nano Banana 2 + diane-voxel-base.png** | F01, F03, F10, F13, F15, F16, F17, F19, F28, F29, F30, F31, F33 |
| **Nano Banana 2 + marcus-voxel-base.png** | F03, F06, F25, F32 |
| **Nano Banana 2 + serena-voxel-base.png** | F11, F27 |
| **Flux 2 Pro** | F04, F07, F12, F19, F21, F24, F26 (environments / objects) |
| **Ideogram 3** | F02, F05, F08, F09, F14, F18, F20, F22, F23, F34 (text / screens) |

---

## Color Arc Reference

| Frames | Beat | Palette |
|--------|------|---------|
| F01–F05 | Beat 1–2 Intro | WARM — cream #F3E9D2 + gold #D4A547 |
| F06–F09 | Beat 3 Crack | COOL ENTERING — #3B5E8A, gray undertones |
| F10–F12 | Beat 4 Discovery | DARK COLD — navy #0B1426 + blue #3B82F6 |
| F13–F15 | Beat 4–5 Processing | DARK — near black |
| F16–F19 | Beat 5–6 Pivot | TURNING WARM — pre-dawn amber |
| F20–F26 | Beat 6–7 Consequences | COLD GRAY institutional — #1F2937 |
| F27 | Beat 7 Turn | WARMING — transitional |
| F28–F34 | Beat 8 Epilogue | FULL WARM — gold #D4A547 + sage #6B7F5A |

---

## DUTCH TILT RULES

- **F09C, F10B, F10C, F11C**: discovery/betrayal zone — DUTCH tilt applied
- **F12B**: 43 pages on counter — wrongness — DUTCH tilt applied
- **NEVER DUTCH**: F01–F05 (warm), F16+ (pivot onward)

---

## VOXEL STYLE TAG (included in every prompt)

> "Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K"

---

## 102 START FRAMES — F01 through F34

---

### F01 — Diane at Kitchen Table Paying Bills | Beat 1 | WARM

**F01A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel kitchen scene, warm evening. Full room visible. Diane — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair pulled back, practical glasses — sits at kitchen table with laptop open. Kitchen: warm cream walls #F3E9D2, candles lit on table casting soft gold glow #D4A547, warm wooden counters, potted voxel herb plants on windowsill. Evening light through window, cozy and domestic. Bills and papers loosely stacked near laptop. Camera: isometric 45-degree overhead establishing shot, full room in frame. Color palette: warm cream #F3E9D2, gold candlelight #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair pulled back, practical glasses — sitting at kitchen table, laptop open. Camera at table level, 3/4 angle. Diane relaxed, focused, routine bill-paying posture. Warm candlelight from nearby candles casting golden glow across her face and tabletop. A few papers and envelopes on table. Cozy domestic setting, warm wood table, candles visible at frame edge. Color palette: warm cream #F3E9D2, gold candlelight #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair pulled back, practical glasses. Face fills most of frame. Warm candlelight illuminating her from below-side, soft gold glow on her voxel face. Expression: calm, concentrated, routine. Dot eyes behind voxel glasses, neutral small smile. No stress — just ordinary Tuesday evening. Color palette: warm gold #D4A547 light on face, cream #F3E9D2 background. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F02 — Phone Bill on Laptop Screen, First Page Visible | Beat 1 | WARM→COLD

**F02A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel kitchen scene, laptop on table glowing with a phone bill document. No characters. Kitchen warm in background — cream walls, candles — but the laptop screen itself emits cool white-blue light contrasting the warm room. Laptop centered on table, papers around it. Phone bill website interface visible on screen, first page showing. The screen's cold light is the only discordant element in an otherwise warm scene. Camera: isometric overhead. Color palette: warm cream #F3E9D2 room, cold white-blue screen glow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop screen on kitchen table, phone bill page visible at slight angle. Screen fills center of frame. Verizon Wireless itemized phone bill header visible: account holder name, billing period, "Page 1 of 43" prominent in upper right corner. Clean sans-serif font, black text on white billing statement. Warm kitchen background slightly out of focus. Screen glow cooler than warm room light. Camera: slightly above table level, 3/4 angle toward screen. Style: clean digital billing document in voxel art aesthetic. 1920x1080, 2K.
```

**F02C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of a voxel-style laptop screen displaying a Verizon Wireless phone bill. Screen fills the entire frame. Large clear bold text at top: "ITEMIZED CALL LOG — Page 1 of 43". Below: table with columns "Date | Time | Number | Duration | Type". First visible row shows a call to a 615 area code number. White background, clean sans-serif black font. Bottom of page shows: "43 pages total — see attached itemization". Cold screen light, slight voxel pixel-grid aesthetic on screen bezel. 1920x1080, 2K.
```

---

### F03 — Diane and Marcus — Warm Home Life, Dinner Scene | Beat 2 | WARM

**F03A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png + marcus-voxel-base.png

```
Wide isometric voxel kitchen/dining scene, warm evening dinner. Full room visible. Diane — cube-bodied voxel character, cream/sage cardigan, warm brown hair pulled back, practical glasses — and Marcus — broader cube-bodied character, dark navy work shirt, strong hands — sit across kitchen table from each other having dinner. Table set with food, wine glasses, warm candlelight. Kitchen: warm cream walls #F3E9D2, gold light #D4A547, domestic and comfortable. Both characters relaxed, normal couple energy. Camera: isometric 45-degree overhead establishing shot. Color palette: warm cream #F3E9D2, gold #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png + marcus-voxel-base.png

```
Medium cinematic voxel shot, across-table dinner view. Diane — cube-bodied voxel, cream/sage cardigan, warm brown hair, glasses — and Marcus — broader voxel, dark navy work shirt — facing each other at dinner table. Camera at table level, catching both in frame. Plates of food, wine glasses between them. Both have relaxed expressions, normal domestic evening. Warm gold candlelight #D4A547. This is what safety felt like — comfortable, familiar, unaware. Color palette: warm cream #F3E9D2, gold #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03C** — Close-Up / Detail
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Close-up voxel shot of Diane's hands — cube-bodied voxel character from reference, cream/sage cardigan — reaching across dinner table, holding a wine glass. Warm golden candlelight catching the glass, Marcus's darker voxel hands barely visible at frame edge opposite. Detail of ordinary intimacy, domestic comfort. Gold light on cream tablecloth. The small gestures of a life that felt real. Color palette: warm gold #D4A547, cream #F3E9D2. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F04 — Brick House Exterior, Richmond Virginia, Warm Evening | Beat 2 | WARM

**F04A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel exterior of a brick row house, Richmond Virginia residential street, warm evening. Full street visible — sidewalk, mature voxel oak trees with autumn gold leaves, neighboring brick houses. The house: warm red-brown voxel brick facade, white trim, front porch with two steps, warm interior light glowing from windows. Front yard: small voxel grass patch, walkway to door. Street: lamp post casting amber pool, parked voxel cars. Early evening, golden hour light. Color palette: warm red-brown brick, gold light #D4A547, cream trim #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the brick house front facade, slightly low angle. House fills center-to-upper frame. Warm brick voxel texture, white trim windows with warm amber interior light glowing through. Front door centered. Porch lamp on. Mature voxel tree at frame left. Golden hour sky behind the roofline — orange-gold gradient. A house that looks like home, stable, built to last. Camera: slightly below eye level, 3/4 angle. Color palette: warm brick red-brown, gold #D4A547 interior glow, amber sky. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04C** — Close-Up / Detail
**Model**: Flux 2 Pro

```
Close-up voxel detail of a lit window in the brick house exterior, evening. Window fills most of frame. Warm amber-gold light glowing from inside — silhouettes of furniture barely visible through voxel glass pane. Window frame: white voxel wood trim. Brick texture surrounds the window, chunky warm voxel cubes. A potted voxel plant on the outside windowsill. This is what security looks like from the outside. Color palette: warm gold interior glow #D4A547, red-brown brick, cream trim. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F05 — Joint Savings Account Screen, Balance Growing | Beat 2 | WARM

**F05A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel scene of a home office corner — warm, cozy. Desk with laptop open showing bank website, warm desk lamp casting gold light #D4A547. Bookshelves, framed photos, warm cream walls #F3E9D2. No character. Camera: isometric overhead, full desk area. The screen glows warmly — financial security visible. Color palette: warm cream #F3E9D2, gold lamp light #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop on desk, First National Bank online banking screen visible. Warm desk lamp light from left. Screen shows joint savings account summary page. Balance visible: "$47,312.00" in bold. Account name: "Marcus & Diane — Joint Savings". Warm gold from lamp contrasts with the clean white screen. Camera: slightly above desk level, straight toward screen. Style: clean bank website UI in voxel art aesthetic. 1920x1080, 2K.
```

**F05C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of a laptop screen showing First National Bank online banking. Screen fills entire frame. Clean banking interface. Large bold text: "Joint Savings Account". Account balance prominently centered: "$47,312.00". Below: recent deposits listed — "$1,500 Direct Deposit", "$800 Transfer", "$620 Payroll". Text: "Account in good standing". Green checkmark icon. White background, clean sans-serif blue banking font. Voxel pixel aesthetic on screen edges. 1920x1080, 2K.
```

---

### F06 — Marcus Leaving Gym Late Evening, Phone in Hand | Beat 3 | COOL

**F06A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Wide isometric voxel parking lot scene, late evening, gym exterior. Full lot visible — rows of voxel cars, lamp posts casting isolated cold blue-white pools of light, dark sky above. Marcus — broader cube-bodied voxel character from reference, dark navy work shirt, strong hands — walking away from gym entrance toward parking lot, phone in one hand, gym bag over shoulder. Far from other people. Isolated. Camera: isometric overhead wide. Color palette: cool gray-blue #3B5E8A, dark sky, cold lamp pool light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06B** — Medium Shot
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Medium cinematic voxel shot of Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — in dark gym parking lot, standing near his truck with phone raised to his face, looking at screen. Expression: guarded, focused, private. Cold blue parking lot lamp casting downward pool of light on him. Dark surroundings. Camera: eye-level, slightly low, 3/4 angle. He doesn't know he's being observed. Color palette: cold gray #3B5E8A, dark navy parking lot, phone screen blue-white glow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06C** — Close-Up / Detail
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Close-up voxel shot of Marcus's hands — broader voxel character from reference, strong hands — holding phone in dark parking lot. Phone screen lighting his hands from below, cold blue-white glow. Screen not readable. Hands gripping phone with focused intensity. Dark surrounding, cold concrete underfoot. The hands of a man typing something he wouldn't want his wife to see. Color palette: cold blue phone glow, dark navy #0B1426 surrounding. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F07 — Marcus's Phone Face-Down on Counter | Beat 3 | COOL

**F07A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel kitchen scene, daytime, slightly cool color temperature. Full counter area visible. Marcus's phone placed face-down on kitchen counter — no character present, just the phone. Counter: gray-blue toned voxel tile. Nearby: keys, wallet, coffee mug. The phone is conspicuously face-down, face-down position deliberate. Indirect natural light from window. Camera: isometric overhead, full counter area. Color palette: cool gray #3B5E8A, muted kitchen tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot, close to counter surface. Phone face-down on kitchen counter, dominating frame center. Counter level camera, slightly elevated 3/4 angle. Phone: dark rectangle, face completely hidden, screen against counter. Keys at frame edge. The deliberateness of the face-down position is visible — it was placed this way, not dropped. Cool indirect light. Color palette: cool gray #3B5E8A, dark phone rectangle. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07C** — Close-Up / Detail
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel detail of a phone lying face-down on a kitchen counter. Phone fills most of frame. Dark phone back casing visible — no screen, deliberately hidden. Voxel cube tile counter surface texture beneath it. Slight cool gray light from above. The face-down position is the entire subject. No decoration, no context. Just a phone hiding its screen. Color palette: dark phone #1F2937, cool gray counter #3B5E8A. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F08 — Bank Email "Billing Irregularity Detected" on Laptop | Beat 3 | COOL

**F08A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel home office or kitchen scene, evening. Laptop open on desk or table, screen showing email notification. Room: cool blue-gray tones beginning to dominate — warm cream still present but gray shadows creeping in. No character. Laptop glow: cool white-blue. Camera: isometric overhead, full room. Color palette: cool gray entering #3B5E8A, muted cream, cold screen light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop screen showing an email. Cool room light. Email interface visible: inbox with an alert email highlighted. Sender: "First National Bank — noreply@fnb.com". Subject line in bold: "Billing Irregularity Detected — Action Required". Email preview text visible. Screen fills upper half of frame. Cool blue-gray color temperature. Camera: slightly above desk level, toward screen. Style: realistic email interface in voxel art aesthetic. 1920x1080, 2K.
```

**F08C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of a laptop screen showing a bank email alert. Screen fills entire frame. Clean email client interface. Bold header: "BILLING IRREGULARITY DETECTED". From: "First National Bank Security Team". Body text: "We have identified unusual billing activity on your joint account ending in 4471. An itemized phone bill totaling 43 pages has been flagged for review. Please log in to verify." Red caution icon at top left. White background, black sans-serif font, red accent. Voxel aesthetic on screen edges. 1920x1080, 2K.
```

---

### F09 — Spreadsheet: 247 Calls to 615 Number Highlighted | Beat 3–4 | COOL→COLD ⭐

**F09A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel home office scene, night, cold. Diane's laptop on desk, screen dominating with spreadsheet glow. No character present, just the scene. Room now cold — cream walls looking gray, no warm candles. Only screen light, cold white-blue. Papers spread on desk — printed phone bill pages. Camera: isometric overhead wide. Color palette: cold blue-gray #3B5E8A entering, screen cold white. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop screen showing a spreadsheet, cold light. Spreadsheet visible: columns for Date, Time, Number Dialed, Duration. One phone number — 615-area-code — appears repeatedly throughout the list, each instance highlighted in bright yellow. Row count visible: numbers going past 200. The pattern is undeniable. Camera: slightly elevated, straight toward screen. Color palette: cold blue screen glow, yellow highlight cells. Style: clean spreadsheet UI in voxel art aesthetic. 1920x1080, 2K.
```

**F09C** — Close-Up / Detail | DUTCH TILT
**Model**: Ideogram 3

```
Extreme close-up of a spreadsheet on screen. Screen fills entire frame. DUTCH TILT — camera rotated approximately 12 degrees, slightly disorienting. Spreadsheet zoomed in on highlighted rows. Yellow highlighted cells: "615-XXX-XXXX" repeating down the list. Cell counter at bottom: "247 matching results". Column header visible: "NUMBER DIALED". The yellow is garish, inescapable. Cold screen white light. No other color. Just the number, 247 times, in yellow. Voxel aesthetic on screen edges. Dutch tilt composition adds wrongness. 1920x1080, 2K.
```

---

### F10 — Diane's Hand Dialing 615 Number | Beat 4 | DARK COLD

**F10A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel kitchen scene, deep night. Full room visible. Diane — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair pulled back, practical glasses — stands alone at kitchen counter, phone raised to ear. Room: dark navy #0B1426, only cold blue phone screen light and one under-cabinet strip light. Spreadsheet still visible on laptop behind her. She is very still, waiting. Isolated in the dark room. Camera: isometric overhead wide, she is small in the large dark space. Color palette: dark navy #0B1426, cold blue #3B82F6 phone glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10B** — Medium Shot | DUTCH TILT
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan — standing in dark kitchen, phone pressed to ear, dialing. DUTCH TILT — camera at approximately 10-degree angle. Cold blue phone glow on her face and hand. Expression: controlled, clinical, resolved. Not panicked. She is in accountant mode — gather data. Dark navy #0B1426 walls. Cold blue light #3B82F6 on face. Color palette: dark navy dominant, cold blue phone light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10C** — Close-Up / ECU | DUTCH TILT
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel shot of Diane's hand holding phone, finger on dial pad — cold blue phone screen visible, 615 number partially typed. DUTCH TILT — camera at approximately 15-degree angle. Just the hand and phone, dark background. Voxel fingers pressing voxel phone screen. Cold blue digit glow on cream-colored voxel fingers. The moment right before she calls. Color palette: cold blue #3B82F6 screen, dark navy #0B1426 background, cream hand. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F11 — Serena Answering, Expression Shifting | Beat 4 | DARK COLD

**F11A** — Wide / Establishing
**Model**: Nano Banana 2 + serena-voxel-base.png

```
Wide isometric voxel scene — hotel room or modern apartment, cool tones. Serena — cube-bodied voxel character from reference, burgundy top, dark hair, professional look — visible small in frame, phone to ear. Room: cool gray-blue, travel bags on floor, unfamiliar setting. Cold overhead light. She is mid-motion, caught off guard by the call. Camera: isometric overhead wide, she is in lower third. Color palette: cold gray #1F2937, burgundy accent. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11B** — Medium Shot
**Model**: Nano Banana 2 + serena-voxel-base.png

```
Medium cinematic voxel shot of Serena — cube-bodied voxel character from reference, burgundy top, dark hair — mid-sentence on the phone, expression caught transitioning from casual to stunned. Phone to ear. Her mouth slightly open, caught in the moment she realized who was calling. Cold blue-gray light. Professional composure cracking. Camera: eye-level, straight, 3/4 angle. Color palette: cold gray #1F2937 room, burgundy #8B1E2F her top. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11C** — Close-Up / ECU | DUTCH TILT
**Model**: Nano Banana 2 + serena-voxel-base.png

```
Extreme close-up ECU voxel portrait of Serena's face — cube-bodied voxel character from reference, dark hair, burgundy top. Face fills frame. DUTCH TILT — camera at approximately 12-degree angle. Expression: stunned, the color draining, dot eyes going wide. The moment she hears the name — the wife — and everything inside her recalculates. Cold blue-gray room light on her face. Color palette: cold gray light #3B5E8A, dark hair, burgundy shoulder visible at frame bottom. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F12 — 43 Printed Pages on Counter, Marcus Standing | Beat 4 | DARK COLD ⭐

**F12A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel kitchen scene, next morning, gray-cold light. Full kitchen visible. Kitchen counter dominated by a massive stack of printed papers — 43 pages of phone bill, precisely stacked. Marcus — broader dark voxel figure (silhouette, dark navy) — visible standing in doorway background, just arrived, seeing the counter. Diane not present. The stack of papers is the center of gravity of the entire scene. Cold gray morning light from window. Color palette: dark navy #0B1426, cold gray, white paper stack. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12B** — Medium Shot | DUTCH TILT
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of kitchen counter, center frame. Enormous stack of printed papers — 43 pages — stacked precisely on the counter. Top page visible: "ITEMIZED CALL LOG — 247 calls to: 615-XXX-XXXX". DUTCH TILT — camera at approximately 10-degree angle. Counter surface. Stack is neat, deliberate, not thrown in anger — placed with precision. Cold gray morning light. Marcus's dark voxel figure barely visible at frame edge, just entering. Color palette: cold gray, white paper stack, dark navy surroundings. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12C** — Close-Up / Detail
**Model**: Flux 2 Pro

```
Extreme close-up voxel detail of top page of the paper stack on counter. Top sheet fills frame. Clean printed document text visible — "Page 1 of 43 | ITEMIZED CALL LOG". Column headers: "Date | Time | Number | Duration". First rows clearly show 615-area-code calls. Paper is crisp, precise, accountant-organized. Each corner perfectly aligned. The precision of it is the statement. Cold gray light on white paper. Color palette: white paper, black text, cold gray light, dark counter below. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F13 — Diane at Kitchen Table 4am, Receipts | Beat 4–5 | DARK

**F13A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel kitchen scene, 4am, dark and cold. Full room visible. Diane — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair pulled back, glasses — tiny figure at kitchen table, alone in large dark room. Laptop open showing transaction history, papers and receipts spread across table. Dark navy walls #0B1426. Only lamp and laptop cold light. Clock on wall shows 4:00. She has been here all night. Camera: isometric overhead wide, she is small. Color palette: near-black dark #0B1426, cold blue screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan — at kitchen table 4am, methodical. Receipts and papers organized into groups on table. Laptop open, transaction history on screen. Coffee mug going cold beside her. Her posture: not defeated — concentrated. Doing the work. Accountant brain engaged. Cold blue screen light on her glasses. Dark room around her. Camera: table-level, 3/4 angle. Color palette: dark navy #0B1426, cold blue screen glow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face at 4am — cube-bodied voxel character from reference, practical glasses, warm brown hair. Face fills frame. Expression: hollow but deliberate, not crying. The face of someone who has already processed the grief and moved to the next phase. Cold blue laptop screen light illuminating her glasses. Dark beneath the glasses. She sees everything clearly now. Color palette: dark navy background, cold blue #3B82F6 light on face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F14 — Hotel Receipt / Jewelry Receipt Screen | Beat 5 | DARK

**F14A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel home office night scene, cold. Laptop on desk, screen showing financial documents — hotel and jewelry receipts. Dark room, near-black walls. Only screen glow. Papers spread on desk around laptop. Evidence gathering. Camera: isometric overhead. Color palette: near-black dark #0B1426, cold blue-white screen. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop screen showing two documents side by side. Left: hotel receipt from Marriott — "Gaylord Opryland Resort, Nashville TN". Right: jewelry receipt — "Sherwood Jewelers, Nashville TN". Both showing Marcus's name, dates from 3 months ago. Screen cold blue-white glow. Dark background. Camera: straight toward screen, slightly elevated. Style: clean receipt documents in voxel art aesthetic. 1920x1080, 2K.
```

**F14C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of laptop screen. Screen fills entire frame. Hotel receipt top half of screen: "Gaylord Opryland Resort & Convention Center | Guest: Marcus [last name] | Check-in: March 14 | Check-out: March 16 | Total: $847.00 | Suite Premium King". Bottom half: jewelry receipt "Sherwood Jewelers Nashville | Item: Rose gold bracelet | $1,240.00 | Engraved: To S, always — M". Cold white screen light. The engraving is visible. 1920x1080, 2K.
```

---

### F15 — Diane Dressed 7am, Marcus Asleep in Background | Beat 5 | DARK→TURNING

**F15A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel bedroom scene, 7am, pre-dawn light. Full room visible. Diane — cube-bodied voxel character from reference, now dressed professionally in a dark blazer over cream — stands near the bedroom doorway, ready to leave. Marcus — broader dark voxel figure — still asleep in bed in background, unaware. Room transitioning from dark night to first gray dawn. Very little light. She is already moving forward. Camera: isometric overhead wide. Color palette: dark navy #0B1426 still dominant, first hint of pre-dawn gray. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, professional dark blazer, glasses, brown hair pulled back — standing in bedroom doorway, bag over shoulder. Fully dressed, briefcase or work bag in hand. In background: Marcus's voxel figure asleep in bed, completely unaware. She is already dressed, already decided. First gray dawn light at window. Camera: from hallway angle, through doorway, her in foreground. Color palette: pre-dawn gray, dark navy room, first warmth approaching. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face — cube-bodied voxel character from reference, dark blazer, practical glasses. Face in doorway light. Expression: calm. Resolved. No anger, no grief. The face of a woman who spent the night doing math and came to a conclusion. Pre-dawn light catching the lens of her glasses. Behind her: the dark bedroom, Marcus's dark shape. She is turning away from it. Color palette: first pre-dawn warm amber at edges, dark navy behind. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F16 — Bank Interior, Diane at Desk with Officer | Beat 6 | TURNING WARM

**F16A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel bank interior, daytime. Full lobby visible — teller windows, desk areas, potted voxel plants, clean institutional design with warm touches. Diane — cube-bodied voxel character from reference, professional dark blazer, practical glasses — sits across desk from a bank officer (generic voxel figure in white shirt and tie). Documents on desk between them. Warm natural light from large bank windows. She is composed, professional — doing business. Camera: isometric overhead wide. Color palette: transitional warm amber beginning — cream walls #F3E9D2 returning, gold light #D4A547 at window. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, professional dark blazer, practical glasses — sitting across from bank officer at desk. Documents visible between them — account forms, separation papers. Diane's posture: upright, controlled, professional. She is not a victim filing paperwork — she is an accountant handling a transaction. Warm natural light from window at frame right. Camera: eye-level, 3/4 angle, Diane in focus, bank officer at edge. Color palette: warm turning gold #D4A547 light, institutional light cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16C** — Close-Up / Detail
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Close-up voxel shot of Diane's hands on bank desk — cube-bodied voxel character from reference. Her hands signing or handling documents. Practical, capable hands. Pen in hand, signature being made. Warm natural light from bank window casting gold warmth on her cream voxel hands. Documents below: bank account separation form, her name clearly at top. The hands of someone who knows exactly what she's doing. Color palette: warm gold #D4A547 light, cream hands #F3E9D2. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F17 — Lawyer's Office, Diane Signing Documents | Beat 6 | TURNING ⭐

**F17A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel law office interior. Full office visible — bookcase of voxel law books, framed certificates on wall, large desk, warm wood tones, window with afternoon warm light. Diane — cube-bodied voxel character from reference, professional dark blazer, practical glasses — sits across from lawyer's desk. Lawyer (generic voxel figure) on opposite side. Documents spread on desk. Warm amber light from window. Camera: isometric overhead wide. Color palette: transitional warm — amber gold #D4A547 light, warm wood tones, cream walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, professional dark blazer, glasses — at lawyer's desk, pen in hand, signing legal documents. Posture: calm, deliberate, not rushed. Law books in background on shelves. Document stack to the left — divorce petition pages. Afternoon warm light from window behind lawyer. This is the moment of formal beginning. Camera: across-desk angle, Diane centered. Color palette: warm amber turning #D4A547, cream #F3E9D2 document pages. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17C** — Close-Up / Detail
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up voxel shot of Diane's hand signing a legal document — cube-bodied voxel character from reference. Pen tip on signature line, "Diane [last name]" visible being completed. Document header: "PETITION FOR DISSOLUTION OF MARRIAGE — Circuit Court of Virginia". Warm afternoon light on paper. Her signature is neat, practiced, confident. Not angry. Not hesitant. The accountant's hand — precise. Color palette: warm gold light on cream paper, dark ink signature. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F18 — The Note on Kitchen Counter | Beat 6 | TURNING ⭐

**F18A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel kitchen scene, early morning, transitional light. Full kitchen visible. Kitchen counter empty except for one folded note in center. No people. First dawn light starting to warm the room — pre-dawn amber at window edges, kitchen still mostly dark. The single note on the counter is the focal point of the entire empty room. Camera: isometric overhead. Color palette: pre-dawn transitional — dark navy #0B1426 still with warm amber at window edge. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of kitchen counter, note placed in center. Counter level camera. Note: folded white paper, written side facing up, handwriting visible but not yet readable. Single shaft of pre-dawn light across the counter touching the note. Dark kitchen behind. The note is alone — no context needed, the absence of everything else tells the story. Camera: counter level, 3/4 angle to note. Color palette: dark navy room, pre-dawn amber light shaft on note. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18C** — Close-Up / Screen/Note Detail
**Model**: Ideogram 3

```
Extreme close-up of a handwritten note on kitchen counter. Note fills entire frame. Clean, neat handwriting — accountant's precision. Text reads exactly: "I saw the phone bill. 247 calls. 43 pages. I called her. She picked up. Lawyer: Hendricks & Associates on Main. Already retained. — D." Clean white note paper. Black ink. No decorations, no emotion in the handwriting itself — just facts, organized like a financial report. The "— D" is the signature. Warm pre-dawn light on paper. 1920x1080, 2K.
```

---

### F19 — Diane's Car Leaving Brick House at Dawn | Beat 6 | TURNING WARM

**F19A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel exterior of the Richmond Virginia brick house, dawn. Full street visible. Diane's car — practical sedan, cream or silver colored voxel vehicle — pulling away from the curb in front of the house, rear visible, driving away toward dawn light. House behind: brick still warm, but windows dark now — Marcus not yet awake. Dawn sky: amber and pale gold beginning at horizon. Mature voxel oak trees on street. The car is moving, not stopped. Camera: isometric overhead wide street view. Color palette: pre-dawn amber gold at horizon, dark sky above, warm brick house. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of Diane's car from the side, moving slowly away from the brick house in early dawn. Car in center frame, house receding in background. Dawn light beginning — amber at horizon line behind the rooftop. Street lamps still on, transitioning. The house in background: note still on counter inside, Marcus still asleep. The car moving forward is the entire story in one frame. Camera: street-level, 3/4 angle. Color palette: pre-dawn amber #D4A547 at horizon, dark upper sky, warm brick house receding. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19C** — Close-Up / Detail
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Close-up voxel shot inside car: Diane — cube-bodied voxel character from reference, professional dark blazer, glasses — visible through driver's side window or windshield, driving. Expression: forward-looking, composed, driving toward the light. Dawn amber catching her glasses from outside. Hands on wheel, eyes forward. Not looking back at the house. Color palette: pre-dawn warm amber #D4A547 coming through windshield, dark interior. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F20 — Marcus's Phone: 47 Missed Calls from Diane | Beat 7 | COLD

**F20A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel shot of a kitchen, morning — now gray and cold without Diane. Phone on counter in foreground, note visible on counter (or already gone — counter empty). Marcus's dark voxel figure barely visible in background, confused, reading the note or standing still. The kitchen feels different — colder, the absence of the warm presence felt. Camera: isometric overhead. Color palette: cold gray #1F2937, no warm gold light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of phone screen held in Marcus's hands (hands visible, dark navy work shirt sleeves). Phone screen visible: missed call notification screen. Screen shows: "47 Missed Calls — Diane" stacked list, all from the same contact. Below calls: voicemail icon — "14 Voicemails". Cold gray light. Marcus's voxel hands holding the phone, frozen. Camera: slightly above, straight toward phone screen. Style: realistic phone missed call interface in voxel art aesthetic. 1920x1080, 2K.
```

**F20C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of phone screen showing missed calls. Screen fills entire frame. Clean smartphone interface. Large bold notification: "47 MISSED CALLS". Contact photo slot: Diane's name with small voxel avatar icon. Below: scrollable list — "Diane — Yesterday 11:14 PM", "Diane — Yesterday 11:18 PM", continuing down the list. Timestamp from last night through this morning. At bottom: "14 New Voicemails". Red indicator. Cold gray light. 1920x1080, 2K.
```

---

### F21 — Commercial Roofing Site, Marcus Receiving Bad News | Beat 7 | COLD

**F21A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel commercial roofing construction site, gray overcast day. Full site visible — scaffolding, voxel workers in hardhats, commercial building being re-roofed, equipment and materials. Cold gray sky, no sun. Marcus — darker broader voxel figure with hardhat among the workers — answering a phone call, pulling away from the work group. He is becoming small against the large construction site. Something is wrong. Camera: isometric overhead wide. Color palette: cold institutional gray #1F2937, overcast sky. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of Marcus at roofing construction site, slightly apart from workers. Phone to ear, expression shifting from contractor-normal to concerned. Hardhat on, work boots, dark navy work shirt under vest. Gray overcast sky behind him, scaffolding at frame edges. Body language: stiffening, going quiet, bad news arriving. Camera: eye-level, 3/4 angle, Marcus center. Color palette: cold gray #1F2937, overcast, dark navy. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel portrait of Marcus's face — broader cube-bodied character, hardhat, dark navy work shirt. Face filling frame. Expression: the moment bad news is landing. Dot eyes going slightly wider, mouth not moving. The face of a man whose contractor business partner just pulled out. Gray overcast light cold on his face. No warmth. Color palette: cold gray flat light #1F2937, dark navy hardhat. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F22 — Marcus's Laptop: Bid Rejection Emails | Beat 7 | COLD GRAY

**F22A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel sparse home office or apartment corner, cold and gray. Desk with laptop, single lamp, bare walls. No warmth. Marcus's dark voxel figure slumped slightly at desk looking at laptop screen. Room: cold gray #1F2937, no decor, impersonal. The sparse quality of a man whose home situation collapsed. Camera: isometric overhead wide. Color palette: cold institutional gray #1F2937, blue screen light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of laptop screen in cold gray room, showing email inbox. Multiple emails from different contractors visible. Subject lines negative. Cold gray room light. Camera: slightly elevated, straight toward screen. Laptop on bare desk. Style: realistic email interface in voxel art aesthetic. 1920x1080, 2K.
```

**F22C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of laptop screen showing email inbox. Screen fills entire frame. Email list visible — multiple senders, all with cold subject lines: "RE: Commercial Bid #447 — Declined at this time", "Project Cancellation — Richmond Municipal Contract", "Unfortunately, we are moving forward with another contractor", "Bid Withdrawal Confirmation — Hendricks Properties". Three red unread indicators. Clean email client interface. Cold screen light. The business collapse documented in subject lines. 1920x1080, 2K.
```

---

### F23 — Bank App: Joint Account Balance $212 | Beat 7 | COLD GRAY ⭐

**F23A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel shot of Marcus's sparse rental apartment, cold gray. Marcus — dark broader voxel figure — sitting on couch or chair, phone in hand, looking at screen. Sparse furniture, bare walls, gray light. The phone in his hands is the only light source. Cold and impersonal. Camera: isometric overhead wide. Color palette: cold gray #1F2937, dark navy. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel shot of phone screen held in Marcus's hands (darker navy sleeves), showing banking app. Phone fills center of frame. Balance visible on screen: large bold numbers. His dark voxel hands holding the phone still. Cold gray apartment background. Camera: slightly above, toward screen. Style: realistic banking app interface in voxel art aesthetic. 1920x1080, 2K.
```

**F23C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of phone screen showing banking app. Screen fills entire frame. First National Bank mobile app. Account: "Marcus [last name] — Personal Checking" (joint account now separated). Balance displayed in large, bold, impossible-to-miss text: "$212.47". Below: recent transactions — "Legal Fee Transfer — $3,200", "Account Separation — Funds Redistributed", "Contractor Insurance Lapse — Auto-charge $87.00". Red deficit warnings. Available credit: $0. Cold screen light. The number $212 is the entire story. 1920x1080, 2K.
```

---

### F24 — Marcus's Truck with FOR SALE Sign | Beat 7 | COLD GRAY

**F24A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel street scene, gray overcast. Marcus's contractor truck — full-size pickup, dark gray or dark navy, contractor company decals possibly peeling — parked on street with handwritten FOR SALE sign on windshield. Generic suburban street, bare trees, gray sky. Cold and flat light. No one around. The truck alone in the gray. Camera: isometric overhead wide. Color palette: cold gray #1F2937, dark truck, overcast sky. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the contractor truck, street level, 3/4 angle. Dark navy/gray pickup truck centered in frame. Handwritten FOR SALE sign clearly visible on windshield: "$24,500" in marker. Truck looking slightly worn — construction equipment tie-downs on truck bed empty, bed worn from use. Gray overcast light flat on the truck. No warmth. Camera: street level, 3/4. Color palette: cold gray, dark truck, white sign. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24C** — Close-Up / Detail
**Model**: Flux 2 Pro

```
Extreme close-up voxel detail of the FOR SALE sign on the truck windshield. Sign fills frame. Handwritten on white paper, slightly hurried: "FOR SALE — $24,500 — CALL MARCUS — [phone number]". Marker ink, not printed — urgent, not planned. Windshield glass voxel surface visible around paper. Reflected gray sky in glass. The handwriting of a man liquidating. Color palette: cold gray, white paper, dark handwriting ink. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F25 — Marcus in Sparse East-Side Rental Apartment | Beat 7 | COLD GRAY

**F25A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Wide isometric voxel apartment interior, sparse and cold. Full room visible — very little furniture: mattress on floor or basic bed frame, single lamp, cardboard boxes still unpacked in corner. Bare walls, no decor. Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — sitting on edge of bed or on floor, small in the empty room. No warmth. Camera: isometric overhead wide, he is small in the large sparse space. Color palette: cold institutional gray #1F2937, dark navy figure. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25B** — Medium Shot
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Medium cinematic voxel shot of Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — sitting on basic bed in sparse rental, elbows on knees. Room: cold gray walls, a single lamp, boxes still unpacked. Expression: subdued, contained, the weight of consequences. Camera: eye-level, slightly low, straight at him. Behind him: blank wall, no pictures, no personality. This is not home. Color palette: cold gray #1F2937, dark navy clothes. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25C** — Close-Up / ECU
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Extreme close-up ECU voxel portrait of Marcus's face — broader cube-bodied character from reference, dark navy work shirt. Face fills frame. Expression: hollowed. Not dramatic — just diminished. Dot eyes looking down, not meeting camera. Cold gray room light flat on his face. No drama, no sympathy demand — just the natural consequence of things. Color palette: cold flat gray light #1F2937, dark. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F26 — Real Estate Listing: Brick House For Sale | Beat 7 | COLD GRAY

**F26A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of the Richmond Virginia brick house exterior — now with a real estate FOR SALE sign on the front lawn. Same house as F04, now looking slightly different: overcast sky, no warm interior light in windows, sign staked on small front yard. "FOR SALE — Hendricks Realty" sign with red and white voxel cube design. Street empty, gray overcast. Camera: isometric overhead wide. Color palette: cold gray overcast, brick house now muted. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the brick house front with prominent FOR SALE sign in front yard. House centered, sign lower frame. Real estate sign: "FOR SALE — Hendricks Realty — 804-555-0199". Windows dark — no warm interior light, no one home. House now less warm than F04, same bricks but cold overcast sky instead of golden hour. Camera: slightly below eye level, 3/4 angle. Color palette: cold gray overcast sky, warm brick muted, no interior glow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26C** — Close-Up / Detail
**Model**: Ideogram 3

```
Extreme close-up of a laptop or phone screen showing a real estate listing. Screen fills frame. Zillow or similar real estate website interface. Property listing: photo of the brick Richmond house at top. Listing details: "3BR/2BA | 1,847 sq ft | Richmond, VA 23220 | Listed: $387,000". Below: property description "Well-maintained brick colonial... motivated sellers, priced to sell quickly." Status badge: "NEW LISTING". The house reduced to a transaction. Clean real estate website UI. 1920x1080, 2K.
```

---

### F27 — Two Phones: "I hope you're okay" / "Better than okay" | Beat 7–8 | WARMING

**F27A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel scene — Diane's bright new apartment or office space, warm and personal, phone in hand. Room warming — natural light returning, cream walls, personal touches beginning. Diane — cube-bodied voxel character from reference, cream/sage cardigan returned, practical glasses — sitting in her own space reading a message. Warm amber light beginning to return. Camera: isometric overhead wide. Color palette: warming transitional — cream #F3E9D2 returning, amber beginning. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27B** — Medium Shot
**Model**: Nano Banana 2 + serena-voxel-base.png

```
Medium cinematic voxel split — or side by side suggestion — of Serena's phone message being read by Diane. Diane — cube-bodied voxel character from reference — visible holding phone in warm light, reading. Expression: soft, a hint of peace. The message from Serena visible partially on screen. Not enemies — both caught in the same lie. Warm light beginning to return to Diane's environment. Camera: eye-level, 3/4, Diane and phone centered. Color palette: warming amber gold, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27C** — Close-Up / Screen Detail
**Model**: Ideogram 3

```
Extreme close-up of phone screen showing text message exchange. Screen fills entire frame. Text message thread: iMessage-style blue and gray bubbles. Message from "Serena M." in gray bubble: "Diane. I'm sorry. I ended it the night you called. I hope you're okay." Diane's reply in blue bubble: "Better than okay. Don't worry about me." Below Diane's message: small timestamp and "Delivered". The finality of it. Clean smartphone text interface. Warming gold light touching the screen edges. 1920x1080, 2K.
```

---

### F28 — Diane's Downtown Accounting Firm | Beat 8 | FULL WARM ⭐

**F28A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel modern office interior, bright and warm. Full office visible — open plan with two employee desks (occupied by generic voxel worker figures), Diane's private office visible through glass partition at back with her name on the door. Large windows with warm city view and afternoon gold light streaming in. Plants, framed credentials on walls, neat professional space. Diane — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses — visible at her office desk through the glass, working. Camera: isometric overhead wide, full office. Color palette: full warm gold #D4A547, cream #F3E9D2, sage #6B7F5A plant accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot looking through glass office partition, Diane's name on door in foreground (frosted glass panel), Diane visible inside at her desk working. Warm afternoon gold light from window behind her. Plants on desk. Two employee desks visible in outer office background. Her name on door clear. The name on the door is the entire achievement. Camera: from outer office angle through glass, Diane centered. Color palette: full warm gold #D4A547 afternoon light, cream office, sage plants. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28C** — Close-Up / Detail
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Close-up voxel shot of the glass office door with frosted text: "DIANE [LAST NAME], CPA — Principal Accountant". Door fills frame. Behind the glass: warm warm gold light, blurred silhouette of Diane working at her desk. The name on the door. Clear, professional, hers. Afternoon warm sun catching the gold lettering. Color palette: full warm gold #D4A547, cream office visible through glass. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F29 — Diane on Condo Balcony, Tomato Plants, Morning | Beat 8 | FULL WARM

**F29A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel condo balcony scene, morning gold light. Full balcony visible — compact urban outdoor space, railing overlooking city skyline, several terracotta pots with voxel tomato plants in various stages, a small bistro table with coffee mug. Diane — cube-bodied voxel character from reference, casual cream/sage cardigan, practical glasses — standing among the tomato plants, tending them. Morning sun warm and golden, full gold #D4A547 bathing everything. City in background. Camera: isometric overhead wide, full balcony. Color palette: full warm gold #D4A547, cream #F3E9D2, sage #6B7F5A tomato plant leaves. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan, glasses — on condo balcony among tomato plants, morning. She is tending a plant, touching a small voxel tomato cluster beginning to ripen. Coffee mug on bistro table at frame edge. Warm morning gold light #D4A547 from the east. Expression: peaceful, present. This is hers — grown by her hands, no one else's story. Camera: balcony level, 3/4 angle, morning city backdrop. Color palette: full warm gold #D4A547, sage green plants #6B7F5A, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face on balcony, morning gold light — cube-bodied voxel character from reference, cream cardigan, practical glasses. Face fills frame. Morning sun warm on her face, gold light #D4A547 catching the lens of her glasses. Expression: peace, quiet satisfaction, something earned. Dot eyes looking out toward the city — or down at the tomato plants. Not looking back. Morning has arrived. Color palette: full warm gold #D4A547 morning light, cream #F3E9D2, soft. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F30 — Client Dinner, Diane Meeting Civil Engineer | Beat 8 | FULL WARM

**F30A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel upscale restaurant interior, evening, warm and elegant. Full dining room visible — warm low lighting, voxel candles on tables, warm wood and cream decor, soft gold glow. Diane — cube-bodied voxel character from reference, dressed professionally in dark blazer over cream, practical glasses — at a table with a male voxel figure (civil engineer, professional look, dark hair, medium build — generic but distinct). Easy conversation — both leaning slightly forward, comfortable. Other diners in background. Camera: isometric overhead wide. Color palette: full warm gold #D4A547, cream #F3E9D2, warm amber restaurant. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, professional dark blazer, glasses — at restaurant table with civil engineer voxel figure across from her. Both in warm candlelight, easy conversation. Wine glasses on table, small candle between them. Diane's expression: genuinely engaged, laughing slightly or smiling naturally. This is not performance — she is actually here, present. Camera: across-table, eye-level, warm candlelight. Color palette: full warm gold #D4A547 candlelight, cream, warm restaurant amber. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face at restaurant — cube-bodied voxel character from reference, glasses, professional blazer. Face fills frame. Expression: open, a genuine smile — the dot mouth actually curved upward warmly. Warm candlelight gold #D4A547 illuminating her face from below and right. This is what her face looks like when no one is lying to her. Color palette: full warm gold candlelight, cream, warm amber. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F31 — Diane at Desk, Checking Phone Bill Calmly | Beat 8 | FULL WARM ⭐

**F31A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel office scene, bright warm afternoon. Diane's own office — her name on door, warm gold afternoon light from window, plants on desk. Diane — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses — sitting at her desk, own phone bill open on laptop. Posture completely relaxed — one hand on keyboard, coffee mug nearby. She is reviewing a phone bill as a routine task. No fear, no dread. Just precision. Camera: isometric overhead wide. Color palette: full warm gold #D4A547, cream #F3E9D2, sage #6B7F5A office plants. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses — at her office desk, looking at laptop showing a simple one-page phone bill. Expression: unbothered, professional. This is just a bill. Nothing to fear here. Coffee mug nearby, warm afternoon light from window behind her, plants on desk. Her own name on her own desk plaque. Camera: across-desk, eye-level. Color palette: full warm gold #D4A547, cream office. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane's face at office desk — cube-bodied voxel character from reference, practical glasses, cream cardigan. Face fills frame. She is looking at screen — expression: neutral, professional focus, completely calm. No tension. The glasses lens catching warm afternoon light #D4A547. This is her face unclenched. The face that knows: phone bills are just data. Color palette: full warm gold #D4A547 afternoon light on face, cream background. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F32 — Marcus in Sparse Rental, Small in Frame | Beat 8 | COLD GRAY

**F32A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Wide isometric voxel overhead view of Marcus's sparse east-side rental room. Very wide shot, full room visible — the room feels large and empty around him. Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — is very small in the center of the frame, sitting alone. Bare walls, minimal furniture, one uncurtained window with cold gray light. Boxes still in corner, unpacked. Camera: overhead wide, maximum negative space. He is diminished by the frame. Color palette: cold gray #1F2937, dark navy figure, bare room. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32B** — Medium Shot
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Medium cinematic voxel shot of Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — sitting alone in sparse rental room. Basic furniture only. Cold gray window light. Expression: quiet, contained — the smallness of the daily. Camera: slightly above eye-level, Marcus in lower center of frame, large bare wall visible above him — negative space dominates. Color palette: cold gray #1F2937, dark navy. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32C** — Close-Up / ECU
**Model**: Nano Banana 2 + marcus-voxel-base.png

```
Extreme close-up ECU voxel shot of Marcus's hands in his sparse rental apartment — broader voxel character from reference. Hands in lap, not holding anything. Still. Cold gray room light on his hands. Strong contractor hands, now idle. Nothing in them. The absence of purpose visible in the stillness of the hands. Color palette: cold flat gray light, dark navy sleeves. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F33 — Diane with Colleague, Laughing in Bright Office | Beat 8 | FULL WARM

**F33A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Wide isometric voxel bright office interior, full warm afternoon. Full office visible — warm, busy, professional, alive. Diane — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses — standing near a colleague's desk (colleague: female voxel figure, friendly design, professional). Both laughing or mid-conversation, warm body language. Other voxel workers in background at desks. Office full of warm gold afternoon light #D4A547. Camera: isometric overhead wide. Color palette: full warm gold #D4A547, cream #F3E9D2, bright and alive. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33B** — Medium Shot
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Medium cinematic voxel shot of Diane — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses — with a colleague, both standing in warm office, laughing together. Diane's expression: genuine, open laugh, head slightly back. Afternoon warm gold light from window. Plants visible. This is the texture of her actual life now — normal, warm, hers. Camera: eye-level, both in frame, warm window light from behind. Color palette: full warm gold #D4A547, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-voxel-base.png

```
Extreme close-up ECU voxel portrait of Diane laughing — cube-bodied voxel character from reference, practical glasses, cream cardigan. Face fills frame, mid-laugh, mouth curve upward, dot eyes bright. Warm afternoon gold light #D4A547 full on her face. The absolute opposite of the hollow 4am face. This is what came after. Color palette: full warm gold #D4A547 light, cream #F3E9D2, warm. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F34 — Butterfly Logo + "KARMA CAUGHT UP" | Beat 8 | BRAND

**F34A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide isometric voxel closing card scene. Dark navy background #0B1426 with warm gold accents. Center: large stylized butterfly logo in voxel art aesthetic — wings made of geometric cube shapes, gold #D4A547 and deep navy #0B1426 color combination. Below butterfly: channel name "KARMA CAUGHT UP" in clean bold sans-serif, gold letters on navy. Background: subtle voxel cube grid pattern in dark navy, barely visible. Full card visible, centered composition. Camera: straight on, symmetrical. Color palette: brand navy #0B1426, brand gold #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34B** — Medium Shot
**Model**: Ideogram 3

```
Medium-angle voxel brand card. Navy background #0B1426. Butterfly logo centered and larger — geometric voxel wings in detail, gold #D4A547. Below: "KARMA CAUGHT UP" in bold clean typography, gold letters. Below the channel name: "@KarmaCaughtUp" in smaller clean font, cream #F3E9D2. Subtle light: warm gold glow radiating from behind butterfly logo. Brand seal quality. Color palette: navy #0B1426, gold #D4A547, cream accent. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34C** — Close-Up / Detail
**Model**: Ideogram 3

```
Extreme close-up of the butterfly logo only, filling the frame. Geometric voxel butterfly wings in full detail — cube-based wing construction, gold #D4A547 dominant with navy #0B1426 shadow detail on wings. Wing geometry: left and right symmetrical, blocky cube shapes creating butterfly silhouette. Center body: thin vertical cube column. Warm gold light emanating from center behind wings. The logo as a finished piece of voxel art. Color palette: brand gold #D4A547, brand navy #0B1426. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

## 15 KEN BURNS STILLS — S01 through S15

> **Ken Burns format**: CapCut Scale 100%→115% over duration. Slow gentle zoom in or pan.
> **Setup**: Same 2K resolution. Generate as static frame, animate in CapCut.

---

### S01 — Diane's Face After the Call | 5s | DARK COLD

**Model**: Nano Banana 2 + diane-voxel-base.png
**CapCut**: Scale 100%→110% over 5s | Subtle zoom in on face

```
Extreme close-up ECU voxel portrait of Diane's face — cube-bodied voxel character from reference, cream/sage cardigan, practical glasses, warm brown hair. Face fills frame. Expression: hollow. Not crying. Processing. The moment after hanging up the phone when Serena confirmed everything. Cold blue room light on her face. Dot eyes open, not blinking, completely still. No tears — not yet. Just the face of a woman doing math on something that cannot be unmathematized. This frame holds for 5 seconds. Color palette: dark navy #0B1426 background, cold blue #3B82F6 light on face. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S02 — Warm Kitchen Before Everything | 15s | WARM

**Model**: Flux 2 Pro
**CapCut**: Scale 100%→115% over 15s | Very slow gentle zoom in | Center to slightly upper-right

```
Wide isometric voxel kitchen scene, warm evening before the discovery. Full room visible — warm cream walls #F3E9D2, candles lit on table casting gold glow #D4A547, wooden counters, herb plants on windowsill, papers and bills casually stacked on table beside laptop. The kitchen of a working couple on a Tuesday evening — comfortable, lived-in, nothing alarming. A wine glass on the counter. The ordinary made beautiful by what we know comes next. No characters present. Camera: isometric 45-degree overhead wide. Color palette: full warm cream #F3E9D2, gold #D4A547 candlelight, wooden warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S03 — Diane and Marcus — Happy Dinner Recall | 15s | WARM

**Model**: Nano Banana 2 + diane-voxel-base.png + marcus-voxel-base.png
**CapCut**: Scale 100%→115% over 15s | Slow zoom in toward the two figures | Warm

```
Wide isometric voxel kitchen/dining scene, warm evening dinner — a memory recalled. Diane — cube-bodied voxel character from reference, cream/sage cardigan, warm brown hair, practical glasses — and Marcus — broader cube-bodied voxel, dark navy work shirt — at dinner table together. Table set with food, wine, candles. Both relaxed, normal couple. Warm gold light #D4A547 everywhere. This is the image of what they were — or what Diane believed they were. Static memory quality — slightly warm, slightly idealized. Camera: isometric overhead, both characters visible. Color palette: full warm cream #F3E9D2, gold #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S04 — Phone Face-Down on Kitchen Counter | 10s | COOL

**Model**: Flux 2 Pro
**CapCut**: Scale 100%→112% over 10s | Slow zoom toward phone | Center

```
Close-angle voxel still of a phone lying face-down on kitchen counter — the detail Diane noticed but didn't register. Counter visible: gray-blue cool toned voxel tile. Phone: dark rectangle face-down, screen hidden. Keys and wallet nearby, ordinary counter clutter. But the phone face-down is wrong. Cool indirect natural light from window, slightly cold. The phone is the only subject — everything else is supporting context. This frame holds, the audience looking at what was hiding in plain sight. Color palette: cool gray-blue #3B5E8A counter, dark phone. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S05 — Spreadsheet: 247 Calls Highlighted Yellow | 15s | COOL→COLD ⭐

**Model**: Ideogram 3
**CapCut**: Scale 100%→115% over 15s | Slow pan down the spreadsheet rows | DUTCH TILT applied in CapCut rotate layer

```
Full laptop screen voxel still showing spreadsheet — screen fills entire frame. Spreadsheet: columns for Date, Time, Number Dialed, Duration. One phone number in 615 area code highlighted in bright yellow throughout — rows visible stretching down the screen. Row counter at bottom: "247 matching results". Column header: "NUMBER DIALED — 615-XXX-XXXX". The yellow highlighting is overwhelming, undeniable, repeating. Cold screen white-blue glow. No other color in the frame except white spreadsheet, black text, and yellow highlighting. This frame holds for 15 seconds — the audience reading the rows. Voxel pixel aesthetic on screen edges. 1920x1080, 2K.
```

---

### S06 — 43 Pages of Phone Bill on Counter | 15s | DARK COLD

**Model**: Flux 2 Pro
**CapCut**: Scale 100%→115% over 15s | Slow zoom in toward paper stack top

```
Close voxel still of kitchen counter, dominated by precisely stacked 43 pages of printed phone bill. Stack centered in frame on gray counter surface. Top page clearly visible: "VERIZON WIRELESS | ITEMIZED CALL LOG | Account: Marcus [last name] | Page 1 of 43 | 247 calls to: 615-XXX-XXXX — highlighted". Stack neat, corners aligned, accountant-organized. Cold gray morning light from above. Dark kitchen beyond the counter edge. The stack of papers as a monument. This frame holds for 15 seconds. Color palette: cold gray, white paper stack dominant, dark surroundings. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S07 — Diane Tiny at 4am Kitchen Table | 20s | DARK

**Model**: Nano Banana 2 + diane-voxel-base.png
**CapCut**: Scale 100%→115% over 20s | Very slow zoom in from wide to medium | Start overhead wide

```
Wide isometric voxel overhead shot — maximum negative space. Diane — cube-bodied voxel character from reference, cream/sage cardigan — tiny figure at kitchen table, 4am. The kitchen is enormous around her. Dark navy walls #0B1426. Only laptop screen cold blue light and one lamp. Receipts and papers spread on table. Clock on wall: 4:00. Coffee mug cold beside her. She is doing the accounting work that will save her. She is very small in the frame. The room presses in around her tiny figure. This frame holds for 20 seconds — the audience understanding the scale of what she's carrying alone. Color palette: near-black #0B1426, single cold blue screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S08 — The Note Close-Up | 20s | TURNING ⭐

**Model**: Ideogram 3
**CapCut**: Scale 100%→115% over 20s | Slow zoom in on note text | Start slightly wide to close

```
Extreme close-up voxel still of handwritten note on kitchen counter. Note fills entire frame — the full text readable clearly. Clean, neat handwriting, accountant precision. Complete text: "I saw the phone bill. 247 calls. 43 pages. I called her. She picked up. Lawyer: Hendricks & Associates on Main. Already retained. — D." White paper, black ink. Each line a statement of fact, not emotion. The "— D" signature. No decoration, no crying-visible ink smears — just the facts, organized and precise. Pre-dawn amber light beginning to touch the edge of the note paper. This frame holds for 20 seconds. 1920x1080, 2K.
```

---

### S09 — Marcus's Phone: 47 Missed Calls | 15s | COLD

**Model**: Ideogram 3
**CapCut**: Scale 100%→115% over 15s | Slow zoom in toward screen | Center

```
Close voxel still of phone screen held in darker hands — screen fills most of frame. Missed call notification screen: "47 MISSED CALLS — Diane". Full list visible scrolling: timestamps from last night through this morning. "Diane — Yesterday 11:47 PM", "Diane — Yesterday 11:52 PM", continuing through morning. "14 New Voicemails" at bottom, red icon. Cold gray room light. The phone screen the only warmth source, and even that is cold. This frame holds for 15 seconds — the audience counting the calls. Smartphone interface in voxel art aesthetic. 1920x1080, 2K.
```

---

### S10 — Bank Account $212 Remaining | 20s | COLD GRAY ⭐

**Model**: Ideogram 3
**CapCut**: Scale 100%→115% over 20s | Slow zoom in toward balance number

```
Close voxel still of phone screen showing banking app — screen fills entire frame. First National Bank mobile app. Account summary: "Marcus [last name] — Personal Checking". Balance in large centered bold text: "$212.47". Available: "$212.47". Recent transactions below: "Legal Fee Transfer — ($3,200.00)", "Account Separation — Funds Redistributed", "Business Insurance Lapse — ($87.00)", "Contractor License Renewal — ($340.00)". Balance in red, deficit warnings active. Cold screen light. The number $212 is enormous on screen. This frame holds for 20 seconds. Smartphone banking UI in voxel art aesthetic. 1920x1080, 2K.
```

---

### S11 — Marcus in Sparse Rental, Overhead Wide | 25s | COLD GRAY

**Model**: Nano Banana 2 + marcus-voxel-base.png
**CapCut**: Scale 100%→115% over 25s | Very slow zoom in — overhead to medium overhead | Maximum negative space maintained

```
Maximum wide isometric voxel overhead shot of Marcus's sparse rental room — this is the widest possible frame. Marcus — broader cube-bodied voxel character from reference, dark navy work shirt — is a very small figure in the dead center of a large empty gray room. Around him: bare gray walls, one uncurtained window with cold flat light, mattress on floor at one side, cardboard boxes unpacked in a corner, single lamp. He is sitting, elbows on knees, small. The room is much larger than he fills. Negative space is the story. This frame holds for 25 seconds — the audience sitting with the silence of it. Color palette: cold institutional gray #1F2937, dark navy figure. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S12 — Brick House FOR SALE, Real Estate Alert on Screen | 20s | COLD GRAY

**Model**: Flux 2 Pro
**CapCut**: Scale 100%→115% over 20s | Slow pan right — house to real estate alert on phone screen visible in corner

```
Wide isometric voxel exterior of the Richmond Virginia brick house, now with FOR SALE real estate sign on lawn. Overcast gray sky. Windows dark. "FOR SALE — Hendricks Realty" sign prominent. In foreground lower-right corner: phone screen showing real estate app alert — Diane's phone, receiving notification: "Price Reduced: [address] — $387,000". The house in background, the alert in foreground. Both pieces of the same story visible in one frame. Cold gray overcast light. This frame holds for 20 seconds. Color palette: cold gray overcast, brick house muted, dark sign. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S13 — Two Phones: Text Exchange | 20s | WARMING

**Model**: Ideogram 3
**CapCut**: Scale 100%→115% over 20s | Slow zoom in toward text messages | Warming glow increasing

```
Close voxel still of phone screen showing full text message thread. Screen fills entire frame. iMessage interface. Full visible thread: Gray bubble from "Serena M.": "Diane. I ended it the night you called. He told me he was separated. I didn't know. I'm sorry." Below: Diane's blue reply: "I believe you. Don't carry it." Below that, Serena: "I hope you're okay." Final: Diane's blue bubble: "Better than okay. Don't worry about me." Timestamp: this morning. Warm gold light touching the phone edges — warming. The thread is complete. Smartphone text interface in voxel art aesthetic. 1920x1080, 2K.
```

---

### S14 — Diane's Firm Door With Her Name | 15s | FULL WARM

**Model**: Nano Banana 2 + diane-voxel-base.png
**CapCut**: Scale 100%→115% over 15s | Slow zoom in toward name on door | Full warm gold

```
Close-medium voxel still of Diane's office glass door — frosted glass panel with professional text etched clearly: "DIANE [LAST NAME], CPA — Principal Accountant". Door fills most of frame. Behind the glass: warm warm afternoon gold light #D4A547, blurred silhouette of Diane's desk and figure working. The name on the door is hers. Warm afternoon sun catching the lettering, gold and cream. Plants visible through glass. This frame holds for 15 seconds — the audience reading the name. Color palette: full warm gold #D4A547 through glass, cream office, warm afternoon. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S15 — Diane on Condo Balcony with Tomatoes, Morning Peace | 40s | FULL WARM ⭐

**Model**: Nano Banana 2 + diane-voxel-base.png
**CapCut**: Scale 100%→115% over 40s | Very slow gentle zoom in | Start wide balcony to medium on Diane and plants | Morning gold brightening slowly

```
Wide isometric voxel condo balcony, morning, peak golden hour. The final image. Full balcony visible — compact urban space, railing with city skyline beyond, several terracotta voxel pots with tomato plants thriving (small red voxel tomatoes visible on vines), bistro table with coffee mug steaming, soft morning light. Diane — cube-bodied voxel character from reference, casual cream/sage cardigan, practical glasses, warm brown hair — tending the tomato plants, touching a ripe cluster, at peace. Morning sun full gold #D4A547, warm sage green #6B7F5A plant leaves catching light, cream walls of condo behind her. City below: distant, beautiful, belonging to no one in particular. She is on a balcony she chose, with plants she grew, in a morning that is entirely hers. This frame holds for 40 seconds with slow gentle Ken Burns zoom — the audience sitting in the earned peace of it. Color palette: full warm gold #D4A547, cream #F3E9D2, sage #6B7F5A, morning amber sky. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

## SUMMARY — 117 Total Prompts

| Type | Count | Notes |
|------|-------|-------|
| F01–F34 A+B+C frames | 102 | 34 scenes × 3 frames each |
| S01–S15 Ken Burns stills | 15 | Extended duration stills |
| **TOTAL** | **117** | Ready for Freepik generation |

---

## GENERATION ORDER (recommended)

1. **Ideogram 3 first** — Text screens are reference anchors (F02C, F05C, F08C, F09C, F14C, F18C, F20C, F22C, F23C, F34A/B/C, S05, S08, S09, S10, S13)
2. **Flux 2 Pro environments** — Set the world without characters (F04, F07, F12, F19, F21, F24, F26, S02, S04, S06, S12)
3. **Nano Banana 2 + diane ref** — Most scenes, generate in Beat order
4. **Nano Banana 2 + marcus ref** — F06, F25, F32, S11
5. **Nano Banana 2 + serena ref** — F11, F27B only
6. **Ken Burns stills last** — After character refs established, for consistency

---

## DUTCH TILT QUICK REFERENCE

Apply DUTCH TILT at these specific frames:
- `F09C` — Spreadsheet 247 calls ≈ 15° rotation
- `F10B` — Diane dialing ≈ 10° rotation
- `F10C` — Hand on dial pad ≈ 15° rotation
- `F11C` — Serena stunned face ≈ 12° rotation
- `F12B` — 43 pages on counter ≈ 10° rotation
- `S05` — Apply DUTCH TILT in CapCut rotate layer (not in prompt — prompt generated straight)

**After F15: NO MORE DUTCH TILT.** Pivot onward = straight camera.
