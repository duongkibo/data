# 04 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)

> **Model**: Kling 2.5 Turbo · **Duration**: 5s gen → CapCut trim ~3s · **Ratio**: 16:9 · 1080p
> **Precondition**: 34 start frames F01–F34 gen xong (file 03)
> **Unlimited credits** ✅ · Save: `media/videos/C01A.mp4`, `C01B.mp4`, `C01C.mp4` ... `C34A.mp4`, `C34B.mp4`, `C34C.mp4`

---

## System Overview — 3-Clip Per Scene (V4)

```
Each "scene" = 3 clips × 5s generated → CapCut trim mỗi clip còn ~3s
= 9-10s on screen với 2 HARD CUTS

  Clip A (5s gen → 3s trim)  →  [HARD CUT]  →  Clip B (5s gen → 3s trim)  →  [HARD CUT]  →  Clip C (5s gen → 3s trim)
  WIDE / ESTABLISH                               MEDIUM / MOVEMENT                              CLOSE / DETAIL / REACTION
```

**Why 3-clip?** Tạo rhythm A→B→C trong mỗi scene — viewer luôn có 2 hard cuts để duy trì pace, không bao giờ bored trong một angle quá lâu.

**Rule per triplet:**
- **A-clip**: WIDE / ESTABLISHING (viewer knows where they are)
- **B-clip**: MEDIUM / MOVEMENT (action, transition, energy)
- **C-clip**: CLOSE / DETAIL / REACTION (emotion, object, face — the punchline of the scene)
- **Different camera moves** between A, B, và C trong cùng scene

---

## Kling Setup

- Duration: **5s** generated — CapCut trim về **~3s** per clip
- Start frame: upload `F{NN}.png` cho A-clip — B và C-clip dùng same frame hoặc gen fresh từ same frame
- Save: `C{NN}A.mp4`, `C{NN}B.mp4`, `C{NN}C.mp4` vào `media/videos/`

---

## Timeline Math

```
34 scenes × 3 clips × 5s generated  = 510s footage
→ CapCut trim mỗi clip còn ~3s
→ 34 × 3 × 3s                       = 306s animated (~5:06)
15 Ken Burns stills × avg 15s        = 225s (~3:45)
CapCut transitions + BGM fade        = ~35s
Total                                ≈ 566s ≈ ~11:30 ✅
```

---

## Beat / Scene Timeline Map

| Beat | Scenes | Timestamp | Clips (A+B+C) | Ken Burns stills |
|---|---|---|---|---|
| Beat 1 — Hook | C01–C02 | 0:00–0:30 | C01A/B/C + C02A/B/C | S01 (5s) |
| Beat 2 — Intro | C03–C05 | 0:30–1:00 | C03–C05 A/B/C | S02–S03 (25s) |
| Beat 3 — Crack | C06–C09 | 1:00–2:30 | C06–C09 A/B/C | S04–S05 (30s) |
| Beat 4 — Betrayal | C10–C12 | 2:30–4:00 | C10–C12 A/B/C | S06 (15s) |
| Beat 5 — Fall | C13–C16 | 4:00–5:30 | C13–C16 A/B/C | S07–S08 (30s) |
| Beat 6 — Pivot | C17–C19 | 5:30–7:00 | C17–C19 A/B/C | S09–S10 (30s) |
| Beat 7 — Karma | C20–C25 | 7:00–9:30 | C20–C25 A/B/C | S11–S13 (60s) |
| Beat 8 — Downfall | C26–C28 | 9:30–10:30 | C26–C28 A/B/C | S14 (30s) |
| Epilogue | C29–C33 | 10:30–11:30 | C29–C33 A/B/C | S15 (50s) |
| CTA | C34 | 11:30–11:40 | C34A/B/C | — |
| **Total** | **34 scenes** | **~11:30** | **102 clips × 5s gen → 3s trim = 306s animated** | **275s** |

---

## 102 Motion Prompts — Scene Table (34 scenes × A + B + C)

---

### BEAT 1 — HOOK (0:00–0:30)

**F01: Nina addressing Christmas cards — warm kitchen**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C01A | F01 | 5s | `DOLLY → PUSH` | Wide isometric warm kitchen, late afternoon gold light, Nina at table surrounded by Christmas cards and envelopes. Camera dollies slowly forward from kitchen entrance toward the intimate scene. |
| B | C01B | F01 | 5s | `RACK-FOCUS + CU` | Rack focus from warm background kitchen to close-up on Nina's hands writing addresses on envelopes. Gold wedding ring catches the light. Hold on hands in motion. |
| C | C01C | F01 | 5s | `ECU + STATIC` | Extreme close-up, static hold on envelope being sealed — Nina's thumb pressing the flap shut. Gold ring prominent. Pure domestic warmth. Everything looks perfect from here. |

**F02: Christmas card photo — four people**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C02A | F02 | 5s | `PUSH → CU` | Camera pushes from wide toward the Christmas card photo on table — four voxel figures smiling, warm cream tones. The picture of a happy family. |
| B | C02B | F02 | 5s | `RACK-FOCUS + ECU` | Rack focus from card surface to individual faces. Hold on Daniel's face — charm, warmth. Then cut. The audience doesn't know yet what we know. |
| C | C02C | F02 | 5s | `ORBIT-L + CU` | Camera orbits left slowly around the Christmas card — all four faces visible from different angle. Warm light. Who is the fourth child? Hold. |

---

### BEAT 2 — INTRO (0:30–1:00)

**F03: Thanksgiving table, Lucas at kids table**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C03A | F03 | 5s | `CRANE-UP` | Camera cranes up from floor level revealing full Thanksgiving table — warm amber light, voxel food dishes, family gathered. Kids table visible in far corner. |
| B | C03B | F03 | 5s | `PAN-R + CU` | Pan right from main table to kids table. Close-up on small boy Lucas (sage green top) at kids table — eating, unaware. Nina watches him from across the room, curious. |
| C | C03C | F03 | 5s | `DOLLY + CU` | Dolly forward toward Lucas at kids table — he laughs at something, purely happy. In the far background, Nina's hands pause mid-reach for the bread basket. She has noticed something. |

**F04: Lucas close-up — Daniel's jaw**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C04A | F04 | 5s | `PUSH → MS` | Camera pushes from wide Thanksgiving room toward Lucas at kids table. He looks up. Medium shot on his face — bright and open. |
| B | C04B | F04 | 5s | `RACK-FOCUS + ECU` | DUTCH TILT slight — rack focus from Lucas foreground to Daniel background. Hold. Then rack back to Lucas — the jawline match is unmistakable. Nina's POV realization begins. |
| C | C04C | F04 | 5s | `PULL + ELS` | Pull back wide to show Daniel and Lucas in the same frame across the room — unmistakable physical match, same jaw, same brow. Nina tiny in far background, frozen. |

**F05: Daniel at airport kiss goodbye**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C05A | F05 | 5s | `ELS + PAN-L` | Wide airport departure area, warm interior light. Daniel with rolling bag, Nina and Sophie visible seeing him off. Busy background of travelers. |
| B | C05B | F05 | 5s | `PUSH + CU` | Camera pushes toward the goodbye kiss — Daniel and Nina. Close-up on their faces. He says "Atlanta." She smiles, trusting. The camera holds on her face after he turns. |
| C | C05C | F05 | 5s | `CU + STATIC` | Airport departure board "ATLANTA" visible behind Daniel's voxel silhouette. Nina's face in foreground watching him walk away — a slight unease she can't name yet. Static hold. |

---

### BEAT 3 — THE CRACK (1:00–2:30)

**F06: Nina at Daniel's laptop finding folder**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C06A | F06 | 5s | `LS + PUSH` | Wide home office. Nina sits at Daniel's laptop, relaxed. Normal evening. Camera pushes slowly toward her as she types. |
| B | C06B | F06 | 5s | `RACK-FOCUS + CU` | Rack focus to Nina's face — her fingers slow. Then stop. Something on the screen. Close-up on her eyes, widening slightly. |
| C | C06C | F06 | 5s | `DOLLY → STATIC` | Camera drifts forward very slowly toward Daniel's desk — laptop sits closed in foreground but the feeling lingers. Cold light. The desk waiting. |

**F07: Laptop screen "Family — Amber" folder**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C07A | F07 | 5s | `PUSH → ECU` | Camera pushes steadily from medium distance toward laptop screen. A folder visible labeled "Family — Amber 💙." The text growing, unavoidable. Cold. |
| B | C07B | F07 | 5s | `DUTCH + PULL` | DUTCH TILT — camera slightly rotated clockwise, sense of wrongness. Pull back slowly from screen to include Nina's frozen silhouette. She has not moved. The world is tilting. |
| C | C07C | F07 | 5s | `PUSH + ECU` | Extreme close push on "Family — Amber 💙" folder text — words fill the frame. Just the text. Cold blue screen glow. No ambiguity left. |

**F08: Baby photo Lucas on screen — hospital**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C08A | F08 | 5s | `ECU + STATIC` | Extreme close-up on laptop screen — a hospital baby photo of newborn Lucas, "Amber's room" visible in background of photo. Cold white screen light. The image just sitting there. |
| B | C08B | F08 | 5s | `RACK-FOCUS + DUTCH` | DUTCH TILT — rack focus from screen (background) to Nina's face (foreground). Her expression: not crying yet. Just the stillness before everything collapses. |
| C | C08C | F08 | 5s | `RACK-FOCUS + ECU` | Rack focus tight on the date stamp on the hospital photo on screen — "6 years ago" visible in photo metadata. The number hanging there. Six years. |

**F09: Christmas cards stacked — cold realization**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C09A | F09 | 5s | `TILT-DN + CU` | Camera tilts down slowly from warm kitchen ceiling to the stacked Christmas cards on the table — the same cards from F01. They haven't changed. But everything has. |
| B | C09B | F09 | 5s | `DOLLY + DUTCH` | DUTCH TILT — slow dolly backward from the card stack, Nina visible in far background at the laptop, alone in the frame. The warm cards now feel contaminated. Wrong. |
| C | C09C | F09 | 5s | `ECU + STATIC` | Single Christmas card held in frame — extreme close-up on the text: "Peace, Love, and Joy from our family." Static hold. The words devastating in this new context. |

---

### BEAT 4 — THE BETRAYAL (2:30–4:00) ⭐

**F10: Daniel walking in front door — Nina at table**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C10A | F10 | 5s | `ELS + STATIC` | Wide front entryway. Daniel opens front door, wheeling bag in, calling out cheerfully. Nina visible seated at dining table in background, phone face-down in front of her. |
| B | C10B | F10 | 5s | `RACK-FOCUS + DUTCH` | DUTCH TILT — rack focus from Daniel near door (background, blurred) to Nina's face (foreground, sharp). Her expression: composed, waiting. She knows. He doesn't know she knows. |
| C | C10C | F10 | 5s | `ECU + STATIC` | The photo on Nina's phone between them — static extreme close-up on the phone screen: Daniel's hand. Lucas. Zoo. Just the photo. |

**F11: Phone screen with photo between them**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C11A | F11 | 5s | `MS + STATIC` | Medium shot across dining table. Nina and Daniel facing each other. Nina's phone lies between them on the table, screen lit, photo of Lucas visible. Silence. |
| B | C11B | F11 | 5s | `PUSH + ECU` | Camera pushes in on Daniel's face as he sees the screen. Extreme close-up on his expression: the mask slipping. The calculation behind his eyes becoming visible. |
| C | C11C | F11 | 5s | `PULL + ELS` | Pull back wide to show the full room beyond the dining table — empty house, cold walls. Daniel has no defense left. The space amplifies his silence. |

**F12: Nina in dark guest room alone**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C12A | F12 | 5s | `DESCENT` | Bird's eye camera descends slowly from ceiling into dark guest room. Single dim lamp. Nina lying on guest bed fully clothed, staring at ceiling. Alone. |
| B | C12B | F12 | 5s | `PULL + CU` | Pull back from Nina's face to medium shot showing whole sparse guest room — a small figure in a cold space. Then push back to her face: not crying. Thinking. |
| C | C12C | F12 | 5s | `DESCENT` | Bird's eye descent again — slower this time — onto Nina small on the edge of the bed. She has moved to sit upright. The silence of three days compressed into a single frame. |

---

### BEAT 5 — THE FALL (4:00–5:30)

**F13: 5am kitchen — Nina writing two lists**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C13A | F13 | 5s | `ELS + PUSH` | Dark kitchen, pre-dawn 5am. Single warm light above kitchen table. Nina sitting alone, writing on a notepad. Camera pushes from dark entryway toward the single lamp circle. |
| B | C13B | F13 | 5s | `RACK-FOCUS + CU` | Rack focus from notepad text (two columns visible) to Nina's face. Her expression is clear-eyed, resolved. Not broken — building something. The pivot beginning. |
| C | C13C | F13 | 5s | `TILT-UP` | Camera tilts up from the legal pad on the table — two lists visible — up to Nina's face in warm lamp light. She has decided. Her eyes steady. |

**F14: Nina's phone — calling Amber**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C14A | F14 | 5s | `CU + STATIC` | Extreme close-up on Nina's phone screen — a contact "Amber" — thumb hovering over the call button. Still. The moment before. |
| B | C14B | F14 | 5s | `PUSH + ECU` | Camera pushes to extreme close-up on Nina's face as she presses call. Her expression: calm, deliberate. Not rage — precision. |
| C | C14C | F14 | 5s | `ECU + STATIC` | Phone screen in extreme close-up: "CALLING AMBER... 00:00:01" — the call connects. The display changes. Hold on screen. |

**F15: Amber picking up phone**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C15A | F15 | 5s | `MS + STATIC` | Amber voxel character (navy top, blonde hair) in a modest apartment, phone buzzing on table. She picks it up — sees an unknown number. Curious, not alarmed. |
| B | C15B | F15 | 5s | `PUSH + CU` | Camera pushes toward Amber's face as she listens. Her expression shifting — confusion to disbelief to understanding. The color draining from her warm scene. |
| C | C15C | F15 | 5s | `PULL + LS` | Pull back wide to show Amber's full apartment — she stands alone in the frame, phone to ear, the full weight of the truth she is receiving visible in her posture. |

**F16: Lawyer's office — documents**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C16A | F16 | 5s | `ELS + PUSH` | Wide professional lawyer's office, cool blue tones. Large voxel desk, bookshelves. Nina seated across from lawyer figure. Documents on the desk between them. |
| B | C16B | F16 | 5s | `TILT-DN + CU` | Camera tilts down from lawyer's face to the documents on the desk. Close-up on legal papers, Nina's signature line visible. She is ready to sign. |
| C | C16C | F16 | 5s | `CU + STATIC` | Documents being signed — extreme close-up on Nina's hand holding the pen, pressing down. Calm. Decisive. The pen moves. Done. |

---

### BEAT 6 — THE PIVOT (5:30–7:00) ⭐

**F17: Court document $92,000**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C17A | F17 | 5s | `PUSH → ECU` | Camera pushes steadily toward court document on lawyer's desk. The number "$92,000" growing larger in frame — bold voxel text, cold steel blue light. |
| B | C17B | F17 | 5s | `RACK-FOCUS + CU` | Rack focus from the document (background) to Nina's hand signing with a pen (foreground). The pen lifts. Done. Close-up on her face: quiet, powerful. |
| C | C17C | F17 | 5s | `ORBIT-R + ECU` | Camera orbits right around the court document — "$92,000" visible from a different angle, cold steel light. The number from every direction says the same thing. |

**F18: Daniel's bank app draining**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C18A | F18 | 5s | `CU + PAN-R` | Close-up on Daniel's phone showing banking app. Account balance dropping — numbers visibly decreasing. Pan right to Daniel's face registering the damage. |
| B | C18B | F18 | 5s | `PULL + LS` | Pull back to show Daniel alone in the kitchen — the large house around him suddenly too big. He is small. The account number still visible on the phone in his hand. |
| C | C18C | F18 | 5s | `ECU + STATIC` | Extreme close-up on the phone screen — bank balance final row. The savings are gone. A last transaction. Static hold on the number. |

**F19: House for sale sign**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C19A | F19 | 5s | `TILT-UP + LS` | Start at ground level, camera tilts up from lawn grass to reveal FOR SALE sign in front yard. Family home behind it, now cold and still. |
| B | C19B | F19 | 5s | `DOLLY + CU` | Dolly forward past the FOR SALE sign toward the house. Close-up on the sign text. The house receding as the sign fills frame. |
| C | C19C | F19 | 5s | `CRANE-UP` | Crane up from the FOR SALE sign slowly to full street view — the house one of many on the block. The life for sale. The street unchanged, indifferent. |

---

### BEAT 7 — KARMA STRIKES (7:00–9:30)

**F20: Office — Daniel clearing desk**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C20A | F20 | 5s | `ELS + PUSH` | Wide cold corporate office floor. Daniel at his desk, packing personal items into a box. Other voxel colleagues visible, not helping, watching sidelong. |
| B | C20B | F20 | 5s | `DOLLY + CU` | Dolly forward to Daniel's face as he picks up his box. Expression: a man who thought he was untouchable, understanding he is not. |
| C | C20C | F20 | 5s | `DOLLY + CU` | Dolly toward Daniel's face as he walks out carrying the box — eyes down, not looking at anyone. The long walk to the elevator. |

**F21: Termination letter on desk**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C21A | F21 | 5s | `DESCENT` | Bird's eye descent onto Daniel's now-empty desk. Single termination letter placed center. Harsh fluorescent cold light. The desk stark and bare. |
| B | C21B | F21 | 5s | `PUSH → ECU` | Camera pushes toward the termination letter. The word "TERMINATED" fills frame. Cold steel blue light. Hold. |
| C | C21C | F21 | 5s | `ECU + STATIC` | Extreme close-up on specific line of the termination letter — "four years of falsified travel reports." Just the words. Cold and specific. |

**F22: Daniel in furniture store uniform**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C22A | F22 | 5s | `ELS + STATIC` | Wide furniture store floor, harsh fluorescent voxel lighting. Daniel — now in retail uniform, name tag visible — straightening cushions on a display couch. |
| B | C22B | F22 | 5s | `PULL + LS` | Pull back to show Daniel from far end of the showroom floor. He is small in the large store. Other staff pass without acknowledging him. |
| C | C22C | F22 | 5s | `RACK-FOCUS + LS` | Daniel foreground in uniform slightly blurred, the vast empty store interior behind him in focus. Cold fluorescent ceiling stretching away. He is swallowed by it. |

**F23: Amber + Lucas warm new apartment**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C23A | F23 | 5s | `CRANE-UP` | Camera cranes up from floor in Amber's new warm apartment. Sage green accents, afternoon light, plants on windowsill. Amber and Lucas settling in together. |
| B | C23B | F23 | 5s | `PUSH + CU` | Camera pushes toward Amber's face as she looks around the new apartment. Close-up: relief, resolution, the beginning of something new. No Daniel in this frame. |
| C | C23C | F23 | 5s | `ECU + STATIC` | Lucas's drawing pinned to Amber's fridge — a house, two figures, the sun. Child's crayon art. Warm primary colors. Warmth reclaimed on their terms. |

**F24: Sophie + Lucas awkward park bench meeting**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C24A | F24 | 5s | `ELS + PUSH` | Sunny park scene, warm gold afternoon light. Sophie (8, cream dress) and Lucas (6, sage green shirt) sitting on a bench together, visible gap between them. Adult legs visible at edges. |
| B | C24B | F24 | 5s | `RACK-FOCUS + MS` | Rack focus from the park environment to the two children. Medium shot on both faces — awkward, uncertain, studying each other. The start of something. |
| C | C24C | F24 | 5s | `PULL + LS` | Pull back wide — Sophie and Lucas on the bench, park stretching behind them. Space between them on the bench but not hostile. Two kids navigating something adults caused. |

**F25: Sophie + Lucas laughing — "pretty okay"**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C25A | F25 | 5s | `ORBIT-L + MS` | Camera orbits left around Sophie and Lucas on the bench — now leaning toward each other, both laughing. Something between them has softened. |
| B | C25B | F25 | 5s | `CU + PAN-R` | Close-up on Sophie's face, full laugh. Pan right to Lucas, equally delighted. Two kids who didn't ask for any of this, finding each other anyway. |
| C | C25C | F25 | 5s | `CU + STATIC` | Both kids' faces in frame together, mid-laugh. The word "siblings" unspoken but present. Warm afternoon light on their faces. Hold. |

---

### BEAT 8 — THE DOWNFALL (9:30–10:30)

**F26: Nina design studio — award on wall**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C26A | F26 | 5s | `TILT-UP + LS` | Camera tilts up from Nina's desk in her own design studio — warm cream walls, work pinned up, plants. Tilts up to reveal framed design award on wall. |
| B | C26B | F26 | 5s | `PUSH + CU` | Camera pushes to close-up on Nina at her desk — she is working, headphones on, in the zone. This is her life now. This is better. |
| C | C26C | F26 | 5s | `TILT-UP` | Tilt up slowly from the award plaque — text visible: studio name, Nina's name — to Nina's face above it. She earned this alone. She knows it. |

**F27: Design conference — Nina meets photographer**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C27A | F27 | 5s | `ELS + PUSH` | Wide conference hall, warm amber networking light. Voxel crowd of creative professionals. Nina visible in center, talking with a warm voxel male character (warm brown tones). |
| B | C27B | F27 | 5s | `ORBIT-R + CU` | Camera orbits right around Nina and the photographer, ending in close-up on Nina's face — genuine laugh, unguarded. She is not guarding anything anymore. |
| C | C27C | F27 | 5s | `ECU + STATIC` | Two coffee cups on a conference table — easy conversation starting. Close-up, static. The simple fact of two people choosing to talk. |

**F28: Nina + Sophie cream apartment morning**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C28A | F28 | 5s | `CRANE-UP` | Camera cranes up from floor in Nina's new cream apartment — bright, warm, morning light flooding in. Nina and Sophie at the kitchen table together, just the two of them. |
| B | C28B | F28 | 5s | `PUSH + CU` | Camera pushes to close-up on Sophie reading a book at the table while Nina makes coffee. Peace. The specific quiet of a morning without lies. |
| C | C28C | F28 | 5s | `PAN-R + CU` | Pan from horse figurines on the windowsill — warm gold morning light catching their edges — to Nina's calm face in profile. Home. |

---

### EPILOGUE (10:30–11:30)

**F29: Christmas card — 2 people (Nina + Sophie) this year** ⭐

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C29A | F29 | 5s | `PUSH → ECU` | Camera pushes from wide toward the new Christmas card on the table. Two voxel figures — Nina and Sophie — smiling. Not four. Just two. Warm gold light. |
| B | C29B | F29 | 5s | `RACK-FOCUS + CU` | Rack focus from the card to Nina's face as she seals the envelope. Close-up: a smile that is not performed. Real. Settled. She chose this. |
| C | C29C | F29 | 5s | `ECU + STATIC` | Christmas card extreme close-up — "Nina & Sophie" in elegant text. Snowflake border. Just two names. The card that tells the whole story without a word of explanation. |

**F30: Sophie + horse figurines windowsill**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C30A | F30 | 5s | `TILT-UP + LS` | Camera tilts up along the cream apartment wall to reveal the windowsill — Sophie's collection of small voxel horse figurines lined up in golden afternoon light. |
| B | C30B | F30 | 5s | `CU + PAN-L` | Close-up on one horse figurine, golden light catching its edges. Pan left slowly along the row of horses. Sophie's hands gently moving one into place. |
| C | C30C | F30 | 5s | `PUSH + ECU` | Push in to Sophie's face as she sets down a figurine — pure child happiness. No shadows. Full warm gold. The peace of a child who feels safe. |

**F31: Daniel at furniture store — far shot alone**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C31A | F31 | 5s | `ELS + STATIC` | Extreme wide shot of the furniture store, end of business day, fluorescent lights, nearly empty. Daniel's tiny figure in the far distance, closing up alone. |
| B | C31B | F31 | 5s | `PULL + ELS` | Pull back further — Daniel even smaller in frame. The store enormous around him. No movement. Just the distance between who he was and who he is now. |
| C | C31C | F31 | 5s | `DESCENT` | Bird's eye descent — Daniel tiny on the store floor, vast fluorescent ceiling grid above him. He is a small thing in a large space. Hold. |

**F32: Amber + new partner warm scene**

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C32A | F32 | 5s | `MS + PUSH` | Warm living room, evening. Amber and a warm voxel partner (brown tones, friendly) sitting together on a couch, Lucas playing on the floor nearby. Natural, easy. |
| B | C32B | F32 | 5s | `ORBIT-L + CU` | Orbit left around Amber and her partner. Close-up on Amber's face — relaxed, happy. Lucas's laughter audible. This is what she chose for her son. |
| C | C32C | F32 | 5s | `ECU + STATIC` | Amber's hand and her partner's hand resting side by side on the couch — natural comfort, not posed. She is okay. She chose better. Static hold. |

**F33: Nina + Sophie morning coffee — full warm** ⭐

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C33A | F33 | 5s | `CRANE-UP` | Camera cranes up slowly from Nina and Sophie's feet to their faces — cream kitchen, morning gold light, coffee mugs in hand, both laughing at something. Full warm epilogue palette. |
| B | C33B | F33 | 5s | `PUSH + ECU` | Camera pushes to extreme close-up on Nina's eyes — warm, soft, fully present. She is not thinking about Daniel. She is here. This is enough. |
| C | C33C | F33 | 5s | `ORBIT-R + CU` | Orbit slowly around Nina's face — settled, real, at peace. Full warm gold light. The face of someone who has come through the other side. Hold. |

---

### CTA (11:30–11:40)

**F34: Butterfly logo + "KARMA CAUGHT UP" channel card** ⭐

| | Clip | Frame | Dur | Camera Move | Motion Prompt |
|---|---|---|---|---|---|
| A | C34A | F34 | 5s | `PUSH + ORBIT-R` | Camera pushes toward the gold voxel butterfly logo centered on dark navy background, then orbits right around it — gold wings catching light as we circle. "KARMA CAUGHT UP" text visible. |
| B | C34B | F34 | 5s | `PULL + ELS` | Pull back to full end card layout — butterfly logo, channel name, subscribe button glow, social links. Full brand. Hold. |
| C | C34C | F34 | 5s | `STATIC` | Full end card hold — static. Butterfly wings spread. "KARMA CAUGHT UP." The last frame the viewer sees. Let it breathe. |

---

## CapCut Edit Rule (V4)

```
Timeline per scene: A-clip → [HARD CUT] → B-clip → [HARD CUT] → C-clip → [HARD CUT] → next scene A-clip...

Gen 5s → trim in CapCut to ~3s per clip
→ Use best 3s window from the 5s generated (usually skip first 0.5s of camera drift ramp)

Do NOT crossfade between A, B, C within the same scene.
→ Hard cut A→B→C = dynamic, modern pacing
→ Crossfade ONLY when transitioning from animated clip TO Ken Burns still
→ Ken Burns: CapCut keyframe scale 100% → 115% over 12-18s on stills
```

---

## DUTCH Angle — Usage Rule

```
DUTCH angle = camera rotated ~8-12° clockwise = sense of wrongness / unease

PERMITTED SCENES (Beat 3-4 zone ONLY):
  F04B (Lucas/Daniel jaw reveal), F07B (folder reveal), F08B (baby photo),
  F09B (card realization), F10B (Daniel walks in)

STRICTLY FORBIDDEN:
  Any frame F23 and above (Epilogue + CTA) — world is re-aligned, must feel stable
  Beat 5+ — Nina is in action mode, no more wrongness tilt
```

---

## Color Arc — Beat by Beat

```
F01–F05   →  WARM cream gold      (domestic trust, before the crack)
F06–F12   →  COLD navy blue       (discovery, wrongness, DUTCH zone)
F13–F16   →  TURNING warm        (decision, pivot, Nina taking control)
F17–F22   →  COLD gray steel      (legal, karma mechanics, Daniel's fall)
F23–F34   →  FULL WARM gold + sage (resolution, rebirth, epilogue)
```

**BẮT BUỘC**: Color arc này phải visible in Kling prompt lighting descriptions. Không được mix warm vào F06-F12 hoặc cold vào F23+.

---

## Quality Gate Per Clip (V4)

- [ ] Camera move is visible and smooth within 5s
- [ ] Character appearance matches start frame F{NN}
- [ ] Color palette matches beat color arc above
- [ ] 5s duration exact generated — trim to ~3s in CapCut
- [ ] A-clip WIDER than B-clip, B-clip WIDER than C-clip (general rule)
- [ ] No character proportion drift between A, B, C
- [ ] DUTCH only on F04B, F07B, F08B, F09B, F10B (Beat 3-4 zone)
- [ ] Epilogue frames (F23–F34) NEVER use DUTCH
- [ ] Save as `C{NN}A.mp4`, `C{NN}B.mp4`, `C{NN}C.mp4` in `media/videos/`
- [ ] Total clips: 34 × 3 = 102 clips ✅

---

## Next

All 102 clips done → `04b-videos-full-prompts.md` (copy-paste Kling prompts) → `05-voice.md`
