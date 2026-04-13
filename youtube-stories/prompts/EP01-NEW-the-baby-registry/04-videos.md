# 04 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)

> **Model**: Kling 2.5 Turbo · **Duration**: 5s/clip · **Ratio**: 16:9 · 1080p
> **Precondition**: 34 start frames F01-F34 gen xong (file 03)
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

## 102 Motion Prompts (34 scenes × A+B+C)

---

### BEAT 1 — HOOK (0:00–0:15)

**SCENE 01 — Dark kitchen, laptop glow**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C01A | F01 | 5s | `ELS → PUSH` | Wide isometric kitchen 2am, dead city outside window, single laptop glow. Camera pushes slowly forward through darkness toward the light. |
| B | C01B | F01 | 5s | `RACK-FOCUS + ECU` | Rack focus from dark room background to Maya's face foreground — stunned, unblinking, laptop glow blue from below. Hold on face. |
| C | C01C | F01 | 5s | `DOLLY → STATIC` | Camera dollies sideways to overhead angle — Maya's hands on keyboard, completely frozen, laptop glow the only light. Hold still. |

**SCENE 02 — Registry screen reveal**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C02A | F02 | 5s | `PUSH → CU` | Camera pushes from medium to close-up on laptop screen. "Ethan's Welcome Registry" becoming readable. Cool blue glow intensifying. |
| B | C02B | F02 | 5s | `PULL + DUTCH` | Camera pulls back slowly with slight Dutch tilt. Maya's stunned face enters frame from below screen. Screen reflected in her eyes. |
| C | C02C | F02 | 5s | `ORBIT-L + CU` | Camera orbits left around laptop screen, Maya's tiny figure beneath it. Screen text huge — "Ethan" — her face small. |

---

### BEAT 2 — INTRO (0:15–1:00)

**SCENE 03 — Maya morning routine**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C03A | F03 | 5s | `CRANE-UP` | Start at floor level, crane up slowly to reveal Maya in warm yellow kitchen, morning light, making coffee. Plants on windowsill. |
| B | C03B | F03 | 5s | `CU + PAN-R` | Close-up on Maya's hands wrapping around warm coffee mug. Pan right to her face — small genuine smile looking out window. |
| C | C03C | F03 | 5s | `ECU + TILT-UP` | Extreme close-up on steaming coffee, tilt up to Maya's face. Peaceful morning. Pure warmth. She is happy. |

**SCENE 04 — Kindergarten classroom**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C04A | F04 | 5s | `ELS + PUSH` | Wide classroom isometric view, colorful voxel furniture, tiny child shapes at tables. Camera pushes slowly down center aisle. |
| B | C04B | F04 | 5s | `ORBIT-R + CU` | Camera orbits right around Maya crouching to a child's level. End on close-up of her face — full genuine laugh, eyes crinkling. |
| C | C04C | F04 | 5s | `PULL + LS` | Pull back slowly to show Maya framed in the classroom doorway — the whole room, her whole life, warm. |

**SCENE 05 — Ryan at party, first meeting**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C05A | F05 | 5s | `PAN-L + ELS` | Pan left across warm amber party room, voxel characters socializing, toward Ryan visible at far end. |
| B | C05B | F05 | 5s | `PUSH + MS` | Camera pushes toward Ryan who is talking with Maya. Both animated, forgetting the room. Warm energy between them. |
| C | C05C | F05 | 5s | `CU + STATIC` | Close-up on Ryan's and Maya's hands — almost touching, then touching briefly. The first contact. Simple and charged. |

**SCENE 06 — Ryan paints nursery clouds**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C06A | F06 | 5s | `TILT-UP + LS` | Start at floor, tilt up along pale yellow nursery wall revealing Ryan on step stool painting white cloud shapes on ceiling. |
| B | C06B | F06 | 5s | `CU + DRIFT-R` | Close-up on freshly painted voxel cloud shapes on ceiling, still slightly wet. Camera drifts gently right. Beautiful and innocent. |
| C | C06C | F06 | 5s | `TILT-UP + ELS` | Wide shot from below — full nursery revealed, ceiling clouds above, Ryan's work. Maya in doorway watching. Hopeful and perfect. |

---

### BEAT 3 — THE CRACK (1:00–2:30)

**SCENE 07 — Phone face down**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C07A | F07 | 5s | `LS + RACK-FOCUS` | Medium kitchen shot. Ryan's phone face-down on counter foreground. Rack focus from phone to Maya in background — she notices. |
| B | C07B | F07 | 5s | `PUSH → ECU` | Camera pushes to extreme close-up on face-down phone. Subtle buzz. Screen stays dark. Camera holds — the wrongness. |
| C | C07C | F07 | 5s | `ECU + STATIC` | Extreme close-up on phone buzzing again. Screen edge faint glow, then dark. Hold. Wrong. Something is wrong. |

**SCENE 08 — Balcony call**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C08A | F08 | 5s | `LS + PUSH` | Interior looking through glass balcony door. Ryan outside, back turned, phone to ear. Camera pushes toward the glass. |
| B | C08B | F08 | 5s | `DUTCH + CU` | Close-up on Ryan's profile through glass, slight Dutch tilt. His lips moving, voice inaudible, posture guarded. Wrong. |
| C | C08C | F08 | 5s | `PULL + ELS` | Wide pull-back from behind Maya. She is watching Ryan through the glass from the kitchen. Alone. Distance between them. |

**SCENE 09 — Empty bed 3am**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C09A | F09 | 5s | `DESCENT` | Bird's eye camera descends from ceiling slowly onto bed — one side rumpled and occupied, one side cold, flat, empty. |
| B | C09B | F09 | 5s | `PULL + CU` | Pull back to reveal Maya sitting up alone, phone showing 3:04 AM. End on close-up of her face: not asleep, waiting, knowing. |
| C | C09C | F09 | 5s | `TILT-UP` | Low angle from mattress level, tilt up slowly to Maya's face against dark ceiling. She is awake. She is always awake. |

**SCENE 10 — New cologne**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C10A | F10 | 5s | `CU + PAN-R` | Extreme close-up on unfamiliar cologne bottle on bathroom shelf — distinct from others. Pan right to Ryan spraying it in mirror. |
| B | C10B | F10 | 5s | `RACK-FOCUS` | Rack focus from Ryan's mirror reflection (background) to Maya in doorway (foreground). She has noticed. Expression: careful. |
| C | C10C | F10 | 5s | `ECU + STATIC` | Extreme close-up on cologne bottle alone on shelf. New. Unfamiliar. Hold. Maya's hand enters frame and touches it. |

---

### BEAT 4 — THE BETRAYAL (2:30–4:00) ⭐

**SCENE 11 — Laptop opens** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C11A | F11 | 5s | `LS + PUSH` | Wide kitchen, Maya sits down at table, opens laptop. Relaxed posture. Normal Tuesday. Camera pushes in toward her. |
| B | C11B | F11 | 5s | `FAST PUSH → ECU freeze` | Camera pushes fast toward laptop screen as Maya's body goes completely still. End freeze drift on screen: "Ethan's Welcome Registry." |
| C | C11C | F11 | 5s | `STATIC + SLOW PUSH` | ECU of the laptop screen — "Ethan's Welcome Registry" text. Camera holds then drifts in micro-slow. The name. Just sitting there. |

**SCENE 12 — Scrolling registry**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C12A | F12 | 5s | `ECU + TILT-DN` | Close-up on Maya's hands on trackpad scrolling slowly through registry items. Tilt down following scroll motion. |
| B | C12B | F12 | 5s | `PULL + LS` | Pull back wide as Maya stops scrolling. She is small at the table, the kitchen large and cold around her. Alone. |
| C | C12C | F12 | 5s | `CU + ORBIT-R` | Close orbit right slowly around Maya's hunched shoulders. The cold kitchen surrounds her. She cannot move. |

**SCENE 13 — Invitations vs registry** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C13A | F13 | 5s | `CU + PAN-L` | Close-up on sunflower baby shower invitations — warm, yellow, hopeful. Pan left to laptop screen with cold blue registry. |
| B | C13B | F13 | 5s | `RACK-FOCUS + DUTCH` | Rack focus from warm invitations foreground to cold registry background. Slight Dutch tilt at end — the world tilting. |
| C | C13C | F13 | 5s | `ECU + STATIC` | Extreme close-up on registry items list on screen: "Ethan's Crib," "Ethan's Lullaby Mobile." Each item another cut. Hold. |

**SCENE 14 — Kayla's name** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C14A | F14 | 5s | `ECU + STATIC` | Extreme close-up on laptop screen. "From: Kayla" email text. Screen glow cold. The name just sitting there. |
| B | C14B | F14 | 5s | `RACK-FOCUS → CU` | Focus shifts from screen (background) to Maya's face (foreground). Close-up on her face — one slow exhale. She knows. |
| C | C14C | F14 | 5s | `PULL + ELS` | Pull back slowly from Maya's face to entire cold kitchen. She is tiny, alone, in complete silence. Hold. |

---

### BEAT 5 — THE FALL (4:00–5:30)

**SCENE 15 — Two hours unmoving**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C15A | F15 | 5s | `ORBIT-R + LS` | Camera orbits right slowly around Maya sitting completely still at kitchen table. Time has passed — light different. She hasn't moved. |
| B | C15B | F15 | 5s | `CRANE-UP` | Crane up from Maya's eye level to ceiling height, looking down. She is tiny in the large cold kitchen. One single blink. |
| C | C15C | F15 | 5s | `DESCENT` | Bird's eye descent slowly onto Maya's motionless shoulders. The kitchen is cold. Nothing moves. She is still there. |

**SCENE 16 — Nursery door**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C16A | F16 | 5s | `LS + PUSH` | Long hallway shot. Pale yellow nursery door at end, slightly ajar. Warm light visible inside. Maya approaches slowly. |
| B | C16B | F16 | 5s | `REVERSE` | Reverse shot from inside nursery looking out. Cloud paintings visible on ceiling above. Maya in doorway. She backs away. Pulls door shut. |
| C | C16C | F16 | 5s | `ECU + STATIC` | Close-up through door crack: cloud shapes on nursery ceiling visible. Ryan's painting. Still beautiful. Still devastating. Hold. |

**SCENE 17 — Sister phone call**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C17A | F17 | 5s | `MS + STATIC` | Maya sitting on kitchen floor, back against lower cabinets, knees drawn to chest, phone to ear. Small and alone. |
| B | C17B | F17 | 5s | `PULL + CRANE-UP` | Camera pulls back and cranes up slowly, making Maya smaller and smaller in the frame. Kitchen, darkness, silence around her. |
| C | C17C | F17 | 5s | `ECU + STATIC` | Extreme close-up on Maya's face. Not crying anymore. Just very still. The face of someone who has decided something. |

---

### BEAT 6 — THE PIVOT (5:30–7:00) ⭐

**SCENE 18 — 3am decision** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C18A | F18 | 5s | `ELS + PUSH` | Wide dark apartment. Single warm desk lamp circle the only light. Camera pushes toward the lit room — warmth returning. |
| B | C18B | F18 | 5s | `RACK-FOCUS + CU` | Rack focus from hands writing on notepad (foreground) to Maya's face (background). Her eyes: clear, decided. The pivot. |
| C | C18C | F18 | 5s | `TILT-UP` | Tilt up from notepad list items to Maya's lit face. The warm lamp on her. She is done waiting. This is the moment. |

**SCENE 19 — Packing suitcase**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C19A | F19 | 5s | `ORBIT-L + LS` | Camera orbits left around Maya packing suitcase on bed — calm, deliberate. Pre-dawn pink-gold light beginning at window. |
| B | C19B | F19 | 5s | `CU + PULL` | Close-up on her hands folding a tiny baby onesie, placing it carefully. Pull back to show two finished suitcases by the door. |
| C | C19C | F19 | 5s | `ECU + STATIC` | Extreme close-up: baby onesie being placed into suitcase. Her hands precise, gentle. She is taking everything that matters. |

**SCENE 20 — The note** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C20A | F20 | 5s | `TILT-DN + CU` | Camera tilts down to kitchen table revealing single notecard placed precisely center. Push to close-up. Text: "I know about Ethan." |
| B | C20B | F20 | 5s | `PULL + ELS` | Wide pull-back showing entire empty kitchen — note tiny in the center, laptop closed, invitations gone. She is already gone. |
| C | C20C | F20 | 5s | `ORBIT-R + ELS` | Camera orbits right slowly around the empty kitchen. The note sits alone on the table. No one else is here. Silence. |

**SCENE 21 — Driving away**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C21A | F21 | 5s | `PAN-R + LS` | Street level, dawn gold light. Maya's car pulls out of parking. Pan right following it. Apartment building receding. |
| B | C21B | F21 | 5s | `DOLLY → STATIC` | Camera dollies alongside car briefly — Maya's face through windshield, eyes forward, not looking back. Then holds static as car moves away. |
| C | C21C | F21 | 5s | `CRANE-UP` | Crane up as car leaves — showing full street, apartment building growing smaller, dawn expanding. She is free. |

---

### BEAT 7 — KARMA STRIKES (7:00–9:30)

**SCENE 22 — Ryan's 37 missed calls**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C22A | F22 | 5s | `CU + DUTCH` | Close-up on Ryan's phone screen: "Maya (37 missed calls)." Dutch angle. The number just sitting there. |
| B | C22B | F22 | 5s | `PAN-U + MS` | Pan up from phone to Ryan standing pacing, hand through hair. His face: panic mixed with calculation. Not remorse. |
| C | C22C | F22 | 5s | `DOLLY + CU` | Slow dolly toward Ryan's face while he paces. Dutch tilt. Close on his expression — this is panic, not grief. |

**SCENE 23 — Kayla hears everything**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C23A | F23 | 5s | `MS + STATIC` | Kayla in apartment, phone on table on speaker, hand frozen over mouth. Ryan's voice audible. She is very still. |
| B | C23B | F23 | 5s | `ECU + DUTCH` | Extreme close-up on Kayla's face — the moment his words about Ethan land. Dutch tilt. Her world tilting. |
| C | C23C | F23 | 5s | `PULL + LS` | Pull back slowly to show Kayla's full apartment. She is alone. Phone on table. The voice still speaking. She is processing. |

**SCENE 24 — Kayla messages Maya**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C24A | F24 | 5s | `CU` | Close-up on Kayla's hands typing on phone. Resolved expression — not emotional, certain. The message sends. |
| B | C24B | F24 | 5s | `MS + STATIC` | Maya at her mother's house — warm cream space — reading the message. She takes a breath. She dials back. Calm. |
| C | C24C | F24 | 5s | `ECU + STATIC` | Maya's face close-up after the call. Not angry. Not sad. Free. The expression of someone who no longer needs to wait. |

**SCENE 25 — Ryan loses job**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C25A | F25 | 5s | `ELS + PUSH` | Cold corporate corridor, fluorescent voxel light. Ryan walking toward glass meeting room. Long cold hallway. |
| B | C25B | F25 | 5s | `DOLLY + LS` | Ryan exiting office, box under arm, eyes down. Other characters watch. Long dolly track to elevator. Defeated. |
| C | C25C | F25 | 5s | `ECU + STATIC` | Ryan's name plate on office door — then a hand removes it. Small detail. Final. |

**SCENE 26 — Family cuts him off**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C26A | F26 | 5s | `CU + DUTCH` | Ryan's phone screen: brother's text "I don't recognize you anymore." Dutch angle. Something breaking. |
| B | C26B | F26 | 5s | `PULL + ELS` | Wide pull-back to show Ryan alone in bare studio apartment. Small sparse room. He is a tiny figure. Alone. |
| C | C26C | F26 | 5s | `RACK-FOCUS` | Studio window foreground (bars of light) to Ryan in background — trapped in the space of his own choices. |

**SCENE 27 — Kayla's baby, new name**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C27A | F27 | 5s | `TILT-UP + MS` | Start at baby's voxel feet, tilt up to Kayla holding newborn. Family around her. Hospital room warm. |
| B | C27B | F27 | 5s | `RACK-FOCUS + CU` | Rack focus from bassinet name tag (NOT Ethan — different name) to Kayla's face. She is okay. She is fine. No Ryan. |
| C | C27C | F27 | 5s | `ECU + STATIC` | Extreme close-up: bassinet name tag. A different name. Not Ethan. New life. New start. Hold. |

---

### BEAT 8 — THE DOWNFALL (9:30–10:30)

**SCENE 28 — Letter to lawyer**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C28A | F28 | 5s | `MS + STATIC` | Maya at mailbox, baby Lily in carrier on chest. Opens envelope. Reads first paragraph. Expression: mild. Almost bored. |
| B | C28B | F28 | 5s | `CU` | Close-up on Maya's hands resealing the letter into new envelope addressed to lawyer. Sealing it. Done. Finished. |
| C | C28C | F28 | 5s | `CRANE-UP` | Crane up from Maya and Lily at mailbox to full neighborhood morning. Life is large. She is in it. |

**SCENE 29 — Basement + hardware store**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C29A | F29 | 5s | `DESCENT` | Bird's eye descent into small basement bedroom — low ceiling, dim bulb, suitcase half-unpacked on floor. The smallness. |
| B | C29B | F29 | 5s | `DOLLY + CU` | Slow dolly forward to Ryan in hardware store uniform, stacking shelves under harsh fluorescent light. Close on face: empty, worn. |
| C | C29C | F29 | 5s | `PULL + ELS` | Wide pull-back in hardware store — Ryan tiny among the shelves under fluorescent ceiling. This is what remains. |

---

### EPILOGUE (10:30–11:30)

**SCENE 30 — Lily's birthday party**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C30A | F30 | 5s | `CRANE-UP` | Camera cranes up low-to-high revealing full backyard birthday party — sunflower decorations, forty guests, golden light. |
| B | C30B | F30 | 5s | `PUSH + CU` | Camera pushes through party crowd toward Maya holding Lily. Close-up on Maya's face: full, real, warm happiness. |
| C | C30C | F30 | 5s | `PAN-R + CU` | Pan right across sunflower decorations to Lily's laughing face — the birthday girl. Pure joy. |

**SCENE 31 — Caleb brings coffee**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C31A | F31 | 5s | `MS + PUSH` | School courtyard, Tuesday morning. Caleb walks toward camera holding two coffee cups. Warm sage green cardigan. |
| B | C31B | F31 | 5s | `CU + ORBIT-L` | Close-up on coffee handoff — she didn't ask, he just noticed. Orbit left slowly around them: easy, right, simple. |
| C | C31C | F31 | 5s | `STATIC + CU` | Close on their faces beside each other — easy smiles, no weight. This is what good looks like. Hold. |

**SCENE 32 — Yellow kitchen morning**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C32A | F32 | 5s | `TILT-UP + LS` | Start at floor, tilt up slowly through yellow kitchen — plants, morning light, warm walls. The whole scene revealed. |
| B | C32B | F32 | 5s | `PAN-R + CU` | Pan right to Maya feeding baby Lily at breakfast, both laughing. Close-up on their faces: pure domestic joy. |
| C | C32C | F32 | 5s | `ECU + STATIC` | Baby Lily's small hands reaching upward. Maya's hands meeting them. Life is whole. Hold. |

**SCENE 33 — Lily laughs** ⭐

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C33A | F33 | 5s | `ECU + STATIC` | Extreme close-up on baby Lily laughing — full body, eyes scrunched, arms up. The total joy of a baby. Hold. |
| B | C33B | F33 | 5s | `PULL + ECU` | Pull back to include Maya watching. Then push back in to Maya's eyes. Quiet gratitude. She almost missed this. Hold. |
| C | C33C | F33 | 5s | `ORBIT-R + CU` | Camera orbits right slowly around Maya's face — eyes settled, warm, real. This is what she chose. This is what she has. |

---

### CTA (11:30–11:40)

**SCENE 34 — Butterfly + subscribe**

| | Clip | Frame | Dur | Camera | Motion prompt |
|---|---|---|---|---|---|
| A | C34A | F34 | 5s | `PUSH + ORBIT-R` | Camera pushes toward gold voxel butterfly logo, then orbits right around it. "KARMA CAUGHT UP" text visible. |
| B | C34B | F34 | 5s | `PULL + ELS` | Pull back to full end card layout. Subscribe button area. Channel branding. Hold. |
| C | C34C | F34 | 5s | `STATIC` | Full end card — butterfly centered, "KARMA CAUGHT UP" text fully revealed, wings spread. Hold for subscribe. |

---

## Timeline map

| Beat | Time | Scenes | Clips (A+B+C) | Ken Burns stills |
|---|---|---|---|---|
| 1 Hook | 0:00–0:15 | 01–02 | C01+C02 × 3 | S01 (5s) |
| 2 Intro | 0:15–1:00 | 03–06 | C03–C06 × 3 | S02–S03 (30s) |
| 3 Crack | 1:00–2:30 | 07–10 | C07–C10 × 3 | S04–S05 (25s) |
| 4 Betrayal | 2:30–4:00 | 11–14 | C11–C14 × 3 | S06 (15s) |
| 5 Fall | 4:00–5:30 | 15–17 | C15–C17 × 3 | S07–S08 (35s) |
| 6 Pivot | 5:30–7:00 | 18–21 | C18–C21 × 3 | S09–S10 (30s) |
| 7 Karma | 7:00–9:30 | 22–27 | C22–C27 × 3 | S11–S13 (65s) |
| 8 Downfall | 9:30–10:30 | 28–29 | C28–C29 × 3 | S14 (30s) |
| Epilogue | 10:30–11:30 | 30–33 | C30–C33 × 3 | S15 (40s) |
| CTA | 11:30–11:40 | 34 | C34 × 3 | — |
| **Total** | **~11:40** | **34 scenes** | **102 clips × 3s = 306s used** | **275s** |

---

## CapCut Edit Rule (V4)

```
Gen Kling: 5s/clip → CapCut trim each clip to 3s (cut at 3s mark, discard last 2s)
Timeline: A-clip (3s) → CUT → B-clip (3s) → CUT → C-clip (3s) → CUT → next scene A-clip...

Hard cut giữa tất cả A, B, C
Crossfade chỉ dùng khi chuyển SANG Ken Burns still (0.3s crossfade)
```
