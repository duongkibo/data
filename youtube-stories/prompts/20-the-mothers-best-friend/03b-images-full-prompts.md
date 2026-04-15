# 03b — Full Image Generation Prompts
# EP20 "The Mother's Best Friend" — F01A through F34C (102 prompts) + S01–S15 (15 Ken Burns stills) = 117 total
# Copy-paste directly into Freepik — self-contained, no external reference needed

> **System**: Each scene = 3 start frames (A = Wide/Establishing, B = Medium, C = Close-Up/ECU)
> **Setup**: Ratio 16:9 · Resolution 2K · AI enhance OFF
> **Save**: media/images/F01A.png, F01B.png, F01C.png … F34C.png · S01.png … S15.png

---

## Characters

- **Nina** — cube-bodied voxel female, 34, English teacher, warm burgundy cardigan, dark brown wavy hair, composed quietly determined energy. Ref: nina-ep20-voxel-base.png
- **Marcus** — cube-bodied voxel male, 38, operations director, navy blazer + pale blue shirt, medium brown hair, easy social charm. Ref: marcus-ep20-voxel-base.png
- **Diane** — cube-bodied voxel female, early 60s, sage cardigan + cream blouse, silver-streaked warm brown hair, warm maternal authority. Ref: diane-ep20-voxel-base.png
- **Patricia** — cube-bodied voxel female, 52, deep teal blouse, dark hair with gray streaks pulled back, composed elegance. Ref: patricia-ep20-voxel-base.png (distance/glimpse only in scenes)

---

## Model Routing

| Model | Use for |
|-------|---------|
| **Nano Banana 2 + nina ref** | F02, F03, F06, F07, F08, F09, F10, F13, F14, F15, F16, F17, F18, F19, F20, F31, F33 |
| **Nano Banana 2 + marcus ref** | F03, F06, F07, F24, F25, F26, F28 |
| **Nano Banana 2 + diane ref** | F11, F12, F13, F22, F29, F31, F32, F33 |
| **Nano Banana 2 + patricia ref** | F04, F27 |
| **Flux 2 Pro** | F01, F05, F08, F10, F14, F16, F23, F26, F30 (environments / night / no characters) |
| **Ideogram 3** | F07C, F21, F23C, F26C, F34B/C (text-critical documents / phone screens / signs) |
| **Seedream 4.5** | F01A (neighborhood atmosphere), F16A (bedroom night atmosphere) |

---

## Color Arc Reference

| Frames | Beat | Palette |
|--------|------|---------|
| F01–F04 | Beat 1–2 | WARM cream #F3E9D2 + gold #D4A547 (arrival warmth, family trust) |
| F05–F08 | Beat 3 | COOL entering #CBD5E1 (the envelope, the phone call) |
| F09–F13 | Beat 3–4 | DARK COLD navy #0B1426 (the silence, Diane's house, the kitchen table) |
| F14–F17 | Beat 5 | DARK DESATURATED #1F2937 (driving home, Lily's door, lying awake) |
| F18–F21 | Beat 6 | PRE-DAWN returning warm #D4A547 muted (attorney call, deed) |
| F22–F30 | Beat 7–8 | MIXED — warm for Nina/Diane's actions, cold gray for Marcus/Patricia's consequence |
| F31–F34 | Epilogue | FULL WARM gold #D4A547 + sage #6B7F5A (the Christmas table, the olive tree) |

---

## DUTCH Tilt Rules

- **DUTCH applied to**: F10C, F11B, F11C, F12B, F12C, F13B, F13C — the night drive + kitchen table betrayal zone ONLY
- **ABSOLUTELY NO DUTCH**: F01–F09, F14 onward (epilogue must be stable / grounded)

---

## VOXEL STYLE TAG (included in every prompt)

> "Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K."

---

## 102 START FRAMES — F01 through F34

---

### F01 — Quiet Suburban Neighborhood Exterior, Warm Evening | Beat 1 | WARM

**F01A** — Wide / Establishing
**Model**: Seedream 4.5

```
Wide atmospheric voxel shot of a quiet suburban residential street at golden dusk. Neat houses with warm window light glowing amber, manicured front yards with voxel hedges and flowering shrubs in sage and cream tones. A row of mailboxes at the curb — one stands slightly open, a white envelope visible inside. The street has the warm stillness of early evening — everything looks ordinary, safe, and entirely undisturbed. This is the neighborhood before everything changes. Camera: wide isometric establishing shot, street and homes visible, mailbox at frame center-right. Color palette: warm cream #F3E9D2 houses, gold #D4A547 evening light, sage #6B7F5A hedges. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of a residential mailbox on a front path at dusk. The mailbox is standard suburban — cream painted metal, small flag down (mail arrived). The front door of a warm home visible in the background — warm yellow light through windows. A white envelope is just visible inside the partially open mailbox. The path to the house is warm stone. Everything looks peaceful, domestic, normal. Camera: eye-level, straight-on to mailbox and path. Color palette: warm cream #F3E9D2, gold #D4A547 evening light, dark sage front hedge. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of the inside of an open mailbox — a single white envelope resting inside. The envelope is addressed in elegant looping handwriting, face slightly toward camera. No return address visible on the envelope. The mailbox interior: dark metal, shadow, the white of the envelope stark against it. This is the object that starts everything. Camera: extreme close inside mailbox, envelope filling the frame. Color palette: warm cream #F3E9D2 envelope, shadow and dark metal mailbox interior, gold edge light from dusk outside. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F02 — Nina in Her Classroom, Capable and Warm | Beat 2 | WARM

**F02A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of a warm eighth-grade classroom interior. Student desks in neat rows (empty — after school hours). At the front: Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — standing at her desk, organizing papers. On the desk: a jar of extra pens, stacked student essays, a small plant. The classroom: warm with afternoon light from side windows, books on shelves, student work on the walls. A space that feels safe because she made it that way. Camera: isometric 45-degree overhead establishing. Color palette: warm cream #F3E9D2, gold #D4A547 afternoon light, soft sage accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina at her classroom desk — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. She is reading a student essay, one hand holding the paper, the other resting on the desk. Her expression: genuinely engaged, attentive — she actually reads every word. The jar of pens is visible at desk corner. Warm afternoon gold light #D4A547 from the classroom windows. Camera: desk-level, 3/4 angle. Color palette: warm cream #F3E9D2, gold #D4A547 afternoon light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's face — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. Her expression: warm intelligence, observant eyes, composed capability — the teacher who misses nothing. Soft warm gold light #D4A547 on her face. She is the kind of person who notices small things and files them. This shot introduces her to the audience as someone precise, caring, and ultimately very hard to deceive. Camera: tight on face, slight 3/4 angle. Color palette: warm cream skin tones, burgundy cardigan, gold light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F03 — Nina + Marcus at Family Dinner Table | Beat 2 | WARM

**F03A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + marcus-ep20-voxel-base.png

```
Wide isometric voxel shot of a warm family dining room — a big table with several people seated. Nina — cube-bodied voxel character from reference, warm burgundy cardigan — and Marcus — cube-bodied voxel character from reference, navy blazer, pale blue shirt, medium brown hair — are seated together. Other voxel family figures around the table. The room: warm, beautiful, lived-in — family photographs on the wall, candles lit, a warm feast in progress. Marcus is mid-story, one hand gesturing — everyone is engaged with him. Camera: isometric 45-degree overhead establishing, full table visible. Color palette: warm cream #F3E9D2, gold #D4A547 candlelight and window light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + marcus-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina and Marcus at the dinner table — both characters from reference. Marcus is speaking, easy charm, everyone's favorite — his posture open and engaging. Nina is beside him, watching him with affection — or what used to be affection. The family warmth of the table is around them. Camera: table-level 3/4 angle, both in frame. Color palette: warm cream #F3E9D2, gold #D4A547 candlelight. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03C** — Close-Up / ECU
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Close-up ECU voxel shot of Marcus's face at the dinner table — cube-bodied voxel character from reference, navy blazer, pale blue shirt. His expression: easy social warmth, the charm that fills every room, everyone's favorite — the man who makes you feel seen when you're talking to him. Soft gold candlelight on his face. This is the Marcus the world sees. The one everyone likes. Camera: tight on face at table level. Color palette: warm gold #D4A547 candlelight, navy blazer, medium brown hair. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F04 — Thanksgiving Table — Patricia's Place (Memory/Flashback) | Beat 2 | WARM

**F04A** — Wide / Establishing
**Model**: Nano Banana 2 + patricia-ep20-voxel-base.png

```
Wide isometric voxel shot of a warm Thanksgiving dining room — a beautifully set table with a full holiday spread. Voxel family figures seated around the table. Patricia — cube-bodied voxel character from reference, deep teal blouse, dark hair with gray streaks pulled back — is visible in the background at the table, mid-conversation, laughing softly. She is at home here. She belongs here. The room: golden-lit, abundant, the warmth of a family that trusts completely. Camera: isometric 45-degree overhead establishing — warmth of twenty-two years of gatherings. Color palette: warm cream #F3E9D2, deep gold #D4A547, teal and sage accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04B** — Medium Shot
**Model**: Nano Banana 2 + patricia-ep20-voxel-base.png

```
Medium cinematic voxel shot of Patricia at the Thanksgiving table — cube-bodied voxel character from reference, deep teal blouse, dark hair with gray streaks. She is mid-conversation, slightly turned toward another figure (not Marcus — a different family member). Her expression: composed elegance, easy with this family, comfortable and trusted. This is how she has always been at this table. Camera: table-level 3/4 angle. This is a memory of warmth that will become unbearable. Color palette: warm cream #F3E9D2, gold #D4A547 candlelight, teal blouse. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel shot of a beautifully set place setting at a Thanksgiving table — fine plate, folded napkin, crystal wine glass with amber wine, warm candlelight. A small place card visible at the edge. This is Patricia's seat at the table — the one she has had for twenty-two years. The warmth of it is devastating because we now know what it cost. Camera: tight on place setting, candlelight warm. Color palette: warm cream #F3E9D2, gold #D4A547 candlelight, crystal glass glinting. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F05 — Nina's Home Mailbox / Front Path | Beat 3 | COOL

**F05A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of Nina's home — a warm two-story house with a neat front yard, stone path, and mailbox at the curb. The time: afternoon, slightly cooler light than the opening scenes. A mail delivery figure (small voxel form in distance) is walking away down the street. The mailbox flag is up — mail has arrived. Color palette cooling from warm: cream #F3E9D2 house, but the light is less golden, leaning toward `#CBD5E1` cool. Camera: wide isometric establishing, full front yard and house visible. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the front path and mailbox — stone path leading to front door, mailbox open at curb with envelopes sticking out. The house front door is closed, warm but the light is noticeably cooler than before — afternoon leaning toward evening. One envelope in the mailbox is slightly different: white, no return address visible on this angle. Camera: eye-level, slightly low, path and mailbox center frame. Color palette: `#CBD5E1` cool entering tone, cream house, sage front hedge. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of a white envelope resting in the mailbox slot — addressed in elegant, looping handwriting to "Marcus." The return address area is visibly blank — no sender. The handwriting on the envelope is beautiful and deliberate: the specific elegant loops of someone who learned cursive carefully. No name of sender. Just "Marcus." Just that handwriting. Camera: extreme close on envelope face in mailbox slot, handwriting visible. Color palette: `#CBD5E1` cool, cream envelope, dark shadow mailbox. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F06 — Nina at Kitchen Counter, Holding the Envelope | Beat 3 | COOL

**F06A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of Nina's kitchen interior — counter-tops, kitchen table visible in back, warm domestic space now with cooler evening light. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — is standing at the counter, holding a white envelope in both hands. She has not opened it. She is looking at it. The envelope is addressed side visible to her (not to camera). Kitchen objects around her: keys on counter, bag on chair — normal Tuesday evening. Camera: isometric 45-degree overhead establishing. Color palette: `#CBD5E1` cool entering, cream kitchen surfaces, warm burgundy cardigan against cooler scene. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina at the kitchen counter — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. She holds the white envelope in both hands, arms slightly extended — not holding it close to her chest but at a slight distance, as if testing something. Her expression: a shift happening — recognition crossing her face, something being placed. Not panic. Something worse: knowing. Camera: counter-level, 3/4 angle. Color palette: `#CBD5E1` cool, warm burgundy cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's face — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. Her expression: the moment of placing the handwriting — recognition, and underneath it, the first cold wave of understanding. She is not panicking. She is very, very still. Her eyes are focused on something not in frame (the envelope in her hands). This is the crack forming — visible in her stillness. Camera: tight on face, slightly side angle. Color palette: `#CBD5E1` cool, warm burgundy cardigan frame. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F07 — Envelope Close-Up — The Handwriting | Beat 3 | COOL

**F07A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of Nina's kitchen — she has set the envelope back down on the counter, exactly where she found it. She stands back slightly, looking at it. Her bag and keys are still on the counter beside it. The envelope is small and white on the counter surface — unremarkable to anyone who hasn't been reading that handwriting since they were seven years old. Camera: isometric 45-degree, counter and Nina in frame, slight distance. Color palette: `#CBD5E1` cool entering, warm domestic kitchen surfaces. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot — Nina's hand resting beside the envelope on the kitchen counter, not touching it. The envelope lies face-up between her hand and the edge of the counter. She has stepped back. The composition: her presence and the envelope's presence in equal tension. She is not opening it. This is a decision. Camera: counter-level, close on hand and envelope. Color palette: `#CBD5E1` cool, cream envelope, warm skin tone of hand. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel-style shot of the envelope face — white envelope, addressed in elegant looping cursive handwriting: "Marcus" — the capital M with a distinctive wider curve at the top. The return address area: blank, empty. The handwriting is beautiful and deliberate — elegant loops, learned carefully, familiar in a specific way. No sender. Just the name. TEXT MUST BE FULLY READABLE: "Marcus" — in elegant flowing cursive, distinctive capital M. Color palette: `#CBD5E1` cool light on cream envelope, shadow and depth behind. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F08 — Nina on Phone with Diane — Casual, Careful | Beat 3 | COOL

**F08A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a warm home living room at evening — a couch, a side table with a lamp, the ordinary comfort of a home. A female voxel figure (Nina — described inline: cube-bodied, warm burgundy cardigan, dark brown hair) is standing in the living room, phone held to ear, posture deliberately casual — leaning against the wall, free hand in pocket. The room is warm but the light has the cooler tint of `#CBD5E1`. The envelope is not visible from this room. Camera: isometric 45-degree overhead establishing. Color palette: `#CBD5E1` cool evening, warm domestic surfaces. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — standing in the living room with phone to ear. Her posture: deliberately casual. One hand in pocket. Leaning against the wall like someone making an ordinary call. Her expression: performing lightness — the tone of someone asking a question she has already half-answered. Camera: 3/4 angle, living room mid-shot. Color palette: `#CBD5E1` cool entering, warm burgundy against cooler scene. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's hand holding the phone — cube-bodied voxel character from reference. The phone screen is visible in her grip, the call timer running. Her grip is slightly tighter than a casual call. Her other hand has stopped moving — frozen at her side, mid-whatever-gesture it was making. The performance of casualness, at very close range, has small cracks in it. Camera: tight on phone and hand. Color palette: `#CBD5E1` cool, warm skin of hand, phone screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F09 — The Silence — Nina's Face After Diane Goes Quiet | Beat 3 → Dark | DARK ENTERING

**F09A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of the living room — Nina is now standing very still in the center of the room. The phone is still at her ear but her arm has lowered slightly. The room around her is unchanged — the same ordinary home — but the atmosphere has shifted: light going cooler and darker, `#0B1426` entering. She is completely alone in frame. The stillness is the subject. Camera: isometric 45-degree overhead — Nina in center, room around her suddenly smaller. Color palette: entering dark `#0B1426`, cool living room, warm burgundy cardigan now isolated in the cooling light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — phone lowered from her ear now, held at her side, call still running. Her expression: the moment of knowing. Not crying. Not open-mouthed. Still. The kind of still that is not calm but its opposite — the stillness of someone who has understood something complete and devastating and cannot yet name what they will do with it. Camera: 3/4 angle, medium, entering dark `#0B1426`. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Extreme close-up ECU voxel shot of Nina's face — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. Her expression: completely still. Eyes forward, slightly unfocused — the eyes of someone looking at something interior, assembling a picture. The two-second silence told her everything. Her face: devastated and certain, in equal measure, perfectly controlled. Dark cold `#0B1426` surrounding her face. Camera: extreme tight on face, slight push-in feel. Color palette: dark `#0B1426`, warm burgundy cardigan, skin against darkness. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F10 — Nina Driving to Diane's House, Night | Beat 4 | DARK COLD

**F10A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a quiet suburban residential street at night — dark, pools of amber streetlight, house windows lit warm behind closed curtains. A single car is driving through the frame — ordinary sedan, headlights cutting through the dark. The street is empty except for this car. The night: heavy and quiet, the kind of night when driving feels like the only possible action. Camera: isometric 45-degree overhead, street at night, car passing through center. Color palette: dark cold `#0B1426`, amber streetlights, deep navy night sky. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of a car interior at night — dark, headlights illuminating the road ahead. The driver: Nina (cube-bodied voxel figure, warm burgundy cardigan, dark brown wavy hair) is visible from passenger-side angle. Her expression: controlled, driving. Both hands on the wheel. She is not crying. She is going somewhere specific with a specific intention. The road ahead: dark residential neighborhood, pools of amber light. Camera: interior car, passenger side angle, dashboard glow. Color palette: dark `#0B1426`, amber streetlight, warm burgundy isolated against dark interior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Extreme close-up ECU DUTCH TILT voxel shot of Nina's hands on the steering wheel at night — cube-bodied voxel character from reference. The wheel is gripped steady — not tight with anxiety, steady with purpose. The night road is visible through the windshield ahead, amber streetlight crossing the glass. DUTCH TILT: slight off-axis camera angle — the world is not aligned. She is driving straight through it anyway. Color palette: dark cold `#0B1426`, amber light on hands and wheel, deep navy car interior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F11 — Diane Opening Her Front Door to Nina | Beat 4 | DARK COLD

**F11A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's front door at night — a warm house, dark neighborhood behind Nina arriving at the door. Diane — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair — stands in the open doorway. Nina's figure (dark against the night, burgundy cardigan, dark hair) is at the door. Diane has stepped aside to let her in — no words needed. The warm kitchen light behind Diane spills out into the dark night. Camera: isometric 45-degree outside the house, both figures visible. Color palette: dark cold `#0B1426` outside, warm interior gold #D4A547 behind Diane. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11B** — Medium Shot — DUTCH
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Medium cinematic DUTCH TILT voxel shot of Diane in the doorway — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. She is reading her daughter's face. She does not ask why Nina has come. Her expression: a mother who already knows, has been dreading this, has hoped to be wrong, and now understands she was not. The doorway frames her — warm kitchen light behind, cold night in front. DUTCH TILT: slight off-axis camera — the stability of the home is tilted. Color palette: warm kitchen gold `#D4A547` behind Diane, cold dark `#0B1426` in front. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Close-up ECU DUTCH TILT voxel shot of Diane's face in the doorway — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: the specific grief of a mother who sees her child's devastation and cannot stop it — only meet it. Love and heartbreak and a decision forming simultaneously. This is also her betrayal. DUTCH TILT persists: the world has tilted. She holds it steady enough to keep the door open. Color palette: warm gold `#D4A547` on one half of her face, cold `#0B1426` on the other — the division in the threshold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F12 — Two Women at Diane's Kitchen Table — Yellow Legal Pad | Beat 4 | DARK COLD

**F12A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's kitchen at late night — 9:30 PM. The kitchen table dominates the frame — the same table Patricia has sat at a hundred times, where casseroles were set down, where coffee was drunk on Sunday mornings. Now: two women. Nina — cube-bodied voxel character from reference, burgundy cardigan, dark wavy hair — across from Diane — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm hair. Between them on the table: a yellow legal pad, a pen, two cups of tea. The kitchen around them is warm but the atmosphere is heavy, the light late-night. Camera: isometric 45-degree overhead, both women and table visible. Color palette: dark `#0B1426`, warm kitchen surfaces, yellow legal pad vivid against dark. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12B** — Medium Shot — DUTCH
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png + nina-ep20-voxel-base.png

```
Medium cinematic DUTCH TILT voxel shot of the two women at the kitchen table — Diane writing on the yellow legal pad, Nina watching. Diane — cube-bodied voxel character from reference, sage cardigan — is writing carefully with a pen, assembling remembered details on the page. Nina — cube-bodied voxel character from reference, burgundy cardigan — is across from her, hands wrapped around tea cup, watching, still. DUTCH TILT: the kitchen where everything was ordinary is no longer ordinary. Color palette: dark `#0B1426`, yellow legal pad bright in frame, warm skin tones of both characters. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Close-up ECU DUTCH TILT voxel shot of the yellow legal pad on the kitchen table — Diane's hand writing on it. The legal pad: yellow paper, blue ruled lines, Diane's handwriting in careful cursive — a list of details being assembled. The pen in hand, the letters forming. This is the record of what was missed and what has now been assembled. DUTCH TILT: the world is still tilted, the record is being made anyway. Color palette: dark `#0B1426`, vivid yellow pad #F3E200-tone, dark blue handwriting, warm skin of Diane's hand. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F13 — Nina and Diane Facing the Truth Together | Beat 4 | DARK COLD

**F13A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's kitchen table at late night — the yellow legal pad between them, the pen set down, both women sitting back. The assembling is complete. Nina — cube-bodied voxel character from reference, burgundy cardigan — and Diane — cube-bodied voxel character from reference, sage cardigan — are both in frame, looking at each other across the table. The kitchen is quiet. The weight of what has been assembled is in the air. Camera: isometric 45-degree overhead, both women and table centered. Color palette: dark `#0B1426`, warm skin tones isolated against dark. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13B** — Medium Shot — DUTCH
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic DUTCH TILT voxel shot of Nina's face across the kitchen table — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. Her expression: the full weight of understanding, assembled. Not collapse. The specific devastated-but-functional stillness of someone who has built their whole life on trust and has now understood the full architecture of how it was used against them. DUTCH TILT — the world is off-axis. She is still in it. Color palette: dark `#0B1426`, burgundy cardigan warm against dark, yellow legal pad edge in frame. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Close-up ECU DUTCH TILT voxel shot of Diane's face at the kitchen table — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: the specific grief of someone who has lost a marriage-length friendship and a piece of her own identity in the same hour. Love for her daughter. Fury quiet beneath the surface. Grief for what twenty-two years meant. The decision already forming about what comes next. DUTCH TILT final — the last tilted frame before everything realigns. Color palette: dark `#0B1426`, sage cardigan warm, warm face tones against dark kitchen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F14 — Nina Driving Home at 1:30 AM | Beat 5 | DARK

**F14A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a quiet suburban street at 1:30 AM — very late night, deep dark. A single car drives through nearly empty streets toward camera. Streetlights pool in the dark. Houses are dark except for the occasional porch light. The whole city is asleep. Only this car is moving. Camera: isometric 45-degree, late night street, single car in frame. Color palette: deep dark desaturated `#1F2937`, amber streetlight pools, deep navy night sky. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina in the car interior — cube-bodied voxel character from reference, warm burgundy cardigan, dark wavy hair — driving alone at 1:30 AM. The dashboard is lit, the road ahead dark. Her expression: the Fall — she has assembled the full picture, sat with it for four hours, and is now carrying it home. She is not visibly broken. She is somewhere inside herself that most people never have to visit. Camera: passenger-side interior angle. Color palette: dark desaturated `#1F2937`, dashboard glow warm, deep night outside. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's face in the dark car — cube-bodied voxel character from reference. Headlight glare passing intermittently across her face as she drives. Her expression: heavy, somewhere interior — the specific gravity of a person making a list in their head of every next thing they will do to protect what matters. Not defeated. Weight-bearing. There is a difference. Camera: tight on face, dashboard glow low. Color palette: dark `#1F2937`, intermittent amber light on face, deep dark. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F15 — Nina at Lily's Bedroom Door | Beat 5 | DARK

**F15A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of a dark hallway at night — a narrow hall with several doors. One door is slightly ajar, a small nightlight glow visible inside. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — is at the door, one hand on the frame, leaning in slightly. The hallway around her: dark and still, the whole house sleeping. Camera: isometric 45-degree, hallway and Nina visible. Color palette: dark `#1F2937`, soft warm nightlight glow from inside Lily's room, burgundy cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina in Lily's doorway — cube-bodied voxel character from reference, warm burgundy cardigan. She is leaning over a small child's bed, where a tiny voxel child figure (Lily, 7 years old, small cube-bodied form, dark wavy hair like Nina, pajamas) is sleeping. Nina's posture: the specific weight of every parent who has ever stood over their sleeping child and understood what they are doing this for. Camera: bed-level, Nina and Lily both visible. Color palette: dark `#1F2937`, soft warm nightlight, burgundy and small child pajamas. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's expression looking down at Lily sleeping — cube-bodied voxel character from reference, warm burgundy cardigan. Her face: everything she is protecting. Love and grief and steadiness all in one expression, visible at very close range. This is what she is building toward. This is why she will not collapse. Camera: tight on Nina's face looking slightly downward, soft warm nightlight below frame. Color palette: dark `#1F2937`, warm soft nightlight, dark warm skin tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F16 — Nina Lying Awake at 2 AM — Making a List | Beat 5 | DARK

**F16A** — Wide / Establishing
**Model**: Seedream 4.5

```
Wide atmospheric voxel shot of a master bedroom at 2 AM — dark, still. A large bed in the center frame. One side: Nina (cube-bodied voxel figure, burgundy cardigan changed to nightwear, dark wavy hair spread on pillow) lying on her side, eyes open, staring at the ceiling. The other side of the bed: empty but undisturbed — pillows still arranged, bedding smooth. He is not home yet or she came home before him. Either way: his side is there, unchanged, a presence by its normalcy. Camera: isometric 45-degree overhead, full bedroom visible, both sides of bed in frame. Color palette: deep dark `#1F2937`, dim ambient bedroom light, the white of the bedding and pillows. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina lying in bed, eyes open — cube-bodied voxel character from reference, dark nightwear, dark brown wavy hair on pillow. She is on her side, face toward camera, eyes open and focused on nothing visible — focused inward, making a list, planning step by step. Her expression: heavy, awake, working. Not panicking. Planning. The darkened bedroom around her, the empty side of the bed at edge of frame. Camera: side angle, bed-level. Color palette: deep dark `#1F2937`, soft ambient bedroom light, warm skin of her face in dark. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of a ceiling at night — from Nina's point of view, looking up from bed. The ceiling: plain, domestic, dark. A small strip of ambient light from somewhere — a window or a hall light — catches the ceiling texture faintly. This is her perspective: lying awake in the dark, staring at the ceiling, running through everything. The ceiling is the canvas for the list in her head. Camera: looking straight up, ceiling fills frame. Color palette: deep dark `#1F2937`, faint ambient light, ceiling voxel texture. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F17 — Nina Making Lily's Lunch in the Morning | Beat 5 → 6 | TRANSITIONING WARM

**F17A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of the kitchen in the morning — warm morning light returning, the same kitchen as before but now in daylight. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — is at the counter making lunch. Lily's school bag is on a kitchen chair. A lunch box is open. The ordinary morning ritual of a parent who has been awake all night and is performing normalcy for her child with extraordinary precision. Camera: isometric 45-degree overhead, kitchen and Nina visible. Color palette: warm morning light returning `#D4A547` muted, cream kitchen surfaces. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina at the counter — cube-bodied voxel character from reference, warm burgundy cardigan. She is packing a lunch box: sandwich cut in half, small snack, a note tucked in (she always puts a note in). Her expression: composed. Perfectly normal. If you didn't know what you know, you'd see a mother making lunch on a Tuesday morning. Camera: counter-level, 3/4 angle, lunch box in focus. Color palette: warm morning light `#D4A547` muted, cream counter surfaces. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's hands closing the lunch box — cube-bodied voxel character from reference. The lunch box clicks shut. Her hands are steady. Not shaking. Steady. The performance of normal as an act of protection and discipline. Camera: tight on hands and lunch box. Color palette: warm morning light, cream and warm lunch box colors, steady hands. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F18 — Nina at School, Teaching | Beat 6 | TURNING WARM

**F18A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of Nina's classroom in session — students (small cube-bodied voxel figures) in rows, Nina at the front. She is teaching: one hand at the whiteboard, the other gesturing. The classroom: alive with the ordinary energy of a lesson in progress. She is present, professional, completely functional. No one in this room knows anything is wrong. Camera: isometric 45-degree overhead, classroom full and active. Color palette: pre-dawn returning warm `#D4A547` muted — the classroom is warm but the warmth has a slightly muted, deliberate quality. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina at the whiteboard — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair. She is mid-sentence, writing a word on the board, partially turned toward the students. Her posture: controlled, professional, present. Her expression: teaching mode — engaged, warm, exactly as her students know her. Inside, she is building something invisible. Camera: 3/4 angle, classroom mid-shot. Color palette: pre-dawn warm `#D4A547` muted, classroom soft light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's expression while teaching — cube-bodied voxel character from reference. On the surface: engaged, warm, present. But at very close range, at the edge of her eyes, the plan is visible — the specific focused quality of someone who is simultaneously doing the present thing and running a parallel track in their mind. She is very, very good at this. Camera: tight on face, classroom softly in background. Color palette: pre-dawn warm `#D4A547`, warm skin tones, burgundy cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F19 — Nina Calling Claire, the Family Attorney | Beat 6 | TURNING WARM

**F19A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of a car parked in a school parking lot — after-school hours, the lot mostly empty. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark brown wavy hair — is inside the parked car, alone, phone held to ear. The school building is visible in background. This is the pivot moment: she is not driving, she is not at home, she is parked and alone and making a specific call. Camera: isometric 45-degree overhead, car in parking lot, school behind. Color palette: turning warm `#D4A547` — afternoon school light, warmer than the crack scenes. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina in the parked car — cube-bodied voxel character from reference, warm burgundy cardigan, phone to ear. Her posture: deliberate, upright, composed. This is not a desperate call. This is a calculated one. Her expression: the warm `#D4A547` returning pivot — she is moving, she has a direction, she has chosen her first step. Camera: exterior car, driver-side window angle. Color palette: turning warm `#D4A547`, afternoon parking lot light, warm burgundy. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel-style shot of a phone screen in Nina's hand — the contact name displayed: "Claire — Family Attorney." The call is connecting or just connected — call timer at 00:00 or beginning. The phone screen: clean, modern, minimal voxel UI. The name is clear. This is the call that begins everything changing in her favor. TEXT MUST BE FULLY READABLE: "Claire — Family Attorney" as contact name. Color palette: warm `#D4A547` ambient light, phone screen glow, warm skin of hand holding phone. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F20 — Claire's Law Office — Nina Presenting Her Case | Beat 6 | TURNING WARM

**F20A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Wide isometric voxel shot of a professional law office interior — warm wood, bookshelves lined with legal books, a wide desk with documents. Two figures in frame: Nina — cube-bodied voxel character from reference, burgundy cardigan, dark wavy hair — sits across from the attorney (Claire — described inline: cube-bodied voxel figure, professional gray blazer, dark hair, warm professional expression, notepad open). The room: a professional sanctuary, warm and organized. Camera: isometric 45-degree overhead, full office and both figures. Color palette: turning warm `#D4A547`, warm wood tones, professional office light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina across from the attorney — cube-bodied voxel character from reference, burgundy cardigan, dark wavy hair. She is speaking — composed, clear, presenting. The attorney (partial frame, described inline: professional gray blazer, dark hair, notepad) is taking notes. Nina's posture: the deliberate composure of someone telling a story that is already fully organized in their mind. Camera: attorney's side, 3/4 angle, Nina across the desk. Color palette: turning warm `#D4A547`, law office warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Close-up ECU voxel shot of Nina's expression across the attorney's desk — cube-bodied voxel character from reference, warm burgundy cardigan. Her expression: the pivot realized. She is past devastation, in the pivot — controlled, clear, deliberate. The warmth `#D4A547` is returning to her face. This is the moment the story turns. She is building something undeniable. Camera: tight on face, across desk, warm office light. Color palette: turning warm `#D4A547`, burgundy cardigan, warm office tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F21 — House Deed — Nina's Name Only | Beat 6 | TURNING WARM

**F21A** — Wide / Establishing
**Model**: Ideogram 3

```
Wide voxel-style shot of a legal document on a warm wood desk — soft gold light illuminating the scene. The document: a real estate deed, formal header, owner name prominent. The desk: warm, professional, the attorney's office. The deed is the only object in focus — everything else warm blur around it. This is the grandmother's gift. This is pre-marital property. This is Nina's. Camera: slight overhead angle on desk document. Color palette: warm `#D4A547` gold light, cream document, warm wood desk. TEXT: "Property Deed" as formal header. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21B** — Medium Shot
**Model**: Ideogram 3

```
Medium voxel-style shot of the property deed document on the desk — the header and owner section visible and legible. The document: formal property deed format, clear headers, owner line prominent. Gold light on the document surface. TEXT MUST BE FULLY READABLE: "PROPERTY DEED" as header, "Owner: Nina Reyes" clearly on the owner line, "Classification: Pre-Marital Property" below. Color palette: warm `#D4A547` light, cream document, dark formal type. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel-style shot of the crucial line of the property deed — tight on the owner section. The text is completely legible, formal legal font, black on cream paper with gold light. TEXT MUST BE FULLY READABLE: "Nina Reyes. Sole owner. Pre-marital property." on consecutive lines. Below: a line reading "Recorded prior to marriage." The specificity is devastating in its protection. Color palette: warm `#D4A547` light, cream paper, dark formal legal type. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F22 — Diane Making One Phone Call | Beat 7 | FULL WARM KARMA

**F22A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's kitchen in the morning — warm daylight, the same table where she and Nina sat late at night, now in morning light. Diane — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair — stands in the kitchen holding her phone. She is about to make a call. The kitchen: warm, quiet, ordinary — except for the expression on Diane's face. Camera: isometric 45-degree overhead, kitchen and Diane visible. Color palette: full warm `#D4A547` morning light, warm cream kitchen, sage cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22B** — Medium Shot
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Medium cinematic voxel shot of Diane in her kitchen — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. She is dialing Patricia's number. Her posture: upright, resolved. The expression on her face: grief and clarity simultaneously — twenty-two years of friendship ended in a decision she has already made. Her thumb on the screen. The call beginning. Camera: 3/4 angle, medium. Color palette: full warm `#D4A547`, sage cardigan, warm kitchen light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Close-up ECU voxel shot of Diane's face — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: the four words forming behind it — "I know. Don't call." The resolved stillness of someone who has already done the grief and arrived at the decision. No anger in her face — something quieter and more final than anger. Camera: tight on face, morning kitchen light warm gold on one side. Color palette: full warm `#D4A547`, warm skin tones, sage cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F23 — Discovery — Hidden Credit Card Statement | Beat 7 | COLD GRAY

**F23A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a law office table — documents spread across the surface in a discovery session. Multiple papers, folders, statement pages. The room: professional, controlled, the cold institutional quality of legal proceedings. Cold gray `#1F2937` atmosphere — this is Marcus's consequence zone. Camera: isometric 45-degree overhead, full table of documents. Color palette: cold gray `#1F2937`, cream documents, institutional office. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of a credit card statement document on the law table — the document face visible with account summary lines. A legal hand (attorney's voxel hand) points to a line. The document: formal financial statement, itemized. Cold gray `#1F2937` office light. The document is damning in the specificity of its mundaneness — restaurants, hotels, a jewelry store. Camera: table-level, document and pointing hand in focus. Color palette: cold gray `#1F2937`, cream statement document, pointing detail. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel-style shot of the credit card statement itemized section — the crucial lines visible and fully legible. Cold gray light. TEXT MUST BE FULLY READABLE — itemized statement lines including: "Restaurant — [name]" with amounts, "Hotel — [name]" with amounts, "Jewelry Store — [name]" with amounts. Account name: "Marcus [Last Name]." Account opened date. The record of fourteen months. Color palette: cold gray `#1F2937`, cream statement, dark formal type. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F24 — Marcus Served at His Office | Beat 7 | COLD GRAY

**F24A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Wide isometric voxel shot of an open-plan corporate office — operations director's area. Marcus — cube-bodied voxel character from reference, navy blazer, pale blue shirt, medium brown hair — is at his desk when a figure (process server — cube-bodied voxel, business casual, envelope in hand) approaches from across the office. Other voxel worker figures are visible at nearby desks. Everyone's favorite, served in his own office. Camera: isometric 45-degree overhead, full office floor visible. Color palette: cold gray `#1F2937`, corporate office neutrals. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24B** — Medium Shot
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Medium cinematic voxel shot of Marcus receiving the divorce papers — cube-bodied voxel character from reference, navy blazer, pale blue shirt. The process server (cube-bodied voxel, business casual) is handing him a legal envelope. Marcus is holding it, expression shifting — the easy charm collapsing. He is blindsided. He thought this room was safe. He thought this life was stable. Camera: desk-level, 3/4 angle, both figures. Color palette: cold gray `#1F2937`, navy blazer, corporate environment. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24C** — Close-Up / ECU
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Close-up ECU voxel shot of Marcus's face holding the divorce papers — cube-bodied voxel character from reference, navy blazer, pale blue shirt, medium brown hair. His expression: blindsided. The easy warmth is gone. The charm has no application here. He is holding papers that make visible everything that was previously invisible. Camera: tight on face, cold gray office light. Color palette: cold gray `#1F2937`, navy blazer, pale blue shirt, the collapse of the charm. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F25 — Marcus Moving Out of Nina's House | Beat 7 | COLD GRAY

**F25A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Wide isometric voxel shot of the exterior of Nina's house — the grandmother's house, warm stone facade, the front path. Marcus — cube-bodied voxel character from reference, navy blazer, medium brown hair — is at the front door carrying a cardboard box. The house around him: unchanged, warm, as if it is politely indifferent to his departure. His car is visible at the curb. Camera: isometric 45-degree overhead, full house exterior and Marcus visible. Color palette: cold gray `#1F2937` atmosphere, the house in warm cream #F3E9D2 — the contrast between what he is leaving and what he is walking into. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25B** — Medium Shot
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Medium cinematic voxel shot of Marcus — cube-bodied voxel character from reference, navy blazer, medium brown hair — carrying a cardboard box down the front path toward his car. His posture: the weight of the box, and of what it represents. He is not being dramatic. He is just leaving. Camera: path-level, 3/4 angle, box and Marcus in mid-frame. Color palette: cold gray `#1F2937`, warm house behind him, cold front yard light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel shot of the front door of Nina's house — the warm wooden door, the stone threshold, the path behind it. The door is being pulled closed from outside — Marcus's hand just visible at the edge as the door swings closed. The house: warm, whole, unchanged. It was always hers. Camera: tight on door closing from outside, hand at edge. Color palette: warm cream `#F3E9D2` door, cold gray `#1F2937` outside, the warm amber of the interior just visible through the narrowing gap. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F26 — Patricia's Phone — Six Missed Calls | Beat 7 | COLD GRAY

**F26A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of an apartment interior — spare, slightly cold since Gerald died. A living room with a sofa, minimal decor. Patricia's apartment — the warmth is maintained but something in it has been hollow since the funeral. A phone is on the coffee table, screen lit. The room: quiet, cold gray `#1F2937`. Camera: isometric 45-degree overhead, full apartment room visible, phone at center. Color palette: cold gray `#1F2937`, sparse apartment, phone screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the phone on the coffee table — screen lit, missed call notifications. The phone lies face-up on the table. No one picks it up. The apartment is empty of any figure — Patricia is not visible, only the phone. The phone is trying to reach back across a line that has already been cut. Camera: coffee table level, phone in center frame. Color palette: cold gray `#1F2937`, phone screen blue-white glow against dark. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel-style shot of the phone screen — the notifications visible and fully legible. The screen shows missed call notifications. TEXT MUST BE FULLY READABLE: "6 Missed Calls — Diane" as the primary notification, and below it "2 Messages — Diane" — both with read receipt unavailable. The screen glow is cold and blue-white against the dark. This is the network going silent. Color palette: cold gray `#1F2937`, blue-white phone screen glow, the notifications stark and unanswered. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F27 — Patricia Disappearing — Silhouette at Door | Beat 7 | COLD GRAY

**F27A** — Wide / Establishing
**Model**: Nano Banana 2 + patricia-ep20-voxel-base.png

```
Wide isometric voxel shot of a hallway — cold gray `#1F2937`, an apartment door at the end. Patricia — cube-bodied voxel character from reference, deep teal blouse, dark hair with gray streaks — is visible as a silhouette moving away from camera down the hallway, toward the far end. She is walking away from everything. The hallway: cold, institutional, the specific emptiness of a corridor that has witnessed too many departures. Camera: isometric 45-degree, wide hallway, Patricia's silhouette in distance moving away. Color palette: cold gray `#1F2937`, deep teal glimpse of blouse, dark hallway. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27B** — Medium Shot
**Model**: Nano Banana 2 + patricia-ep20-voxel-base.png

```
Medium cinematic voxel shot of an apartment door from hallway — the door is closing. Patricia — cube-bodied voxel character from reference, deep teal blouse glimpse — is just inside, the door swinging to. Her face is not visible. Only the glimpse of teal, the dark hair, the door closing. Camera: hallway-level, door mid-swing, Patricia's form inside as gap narrows. Color palette: cold gray `#1F2937`, deep teal glimpse, dark closing door. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel shot of a closed apartment door — the door is shut, the hallway silent beyond it. No sound. No figure. Just the closed door and the cold hallway quiet. This is the end of Patricia's presence in this story's world. The door: plain, institutional, final. Camera: tight on closed door, cold gray hallway. Color palette: cold gray `#1F2937`, neutral door color, institutional hallway. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F28 — Marcus at Lily's Birthday Party — Alone at the Edge | Beat 8 | COLD GRAY

**F28A** — Wide / Establishing
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Wide isometric voxel shot of a backyard birthday party — colorful decorations, a birthday table with cake, voxel child figures and parent figures in groups at the center. Far at the edge of the yard: Marcus — cube-bodied voxel character from reference, navy blazer, medium brown hair — stands alone. He is at the party because Lily is his daughter and he is allowed to be there. But the other adults who used to welcome him are clustered in the center, and there is visible space between him and them. Camera: isometric 45-degree overhead, full party visible, Marcus isolated at edge. Color palette: warm party colors at center, cold gray `#1F2937` creeping in at Marcus's edge of the yard. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28B** — Medium Shot
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Medium cinematic voxel shot of Marcus standing at the edge of the birthday party yard — cube-bodied voxel character from reference, navy blazer, medium brown hair. He is watching the party from the margin. The group of parents and children visible at the far side of the frame, warm and gathered. Marcus: mid-shot, alone, watching. The space between him and them: notable. Camera: yard-level, Marcus at one side, party at distant other. Color palette: cold gray `#1F2937` around Marcus, warm party colors in background distance. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28C** — Close-Up / ECU
**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Close-up ECU voxel shot of Marcus's face at the birthday party edge — cube-bodied voxel character from reference. His expression: the man who used to own every room at the edge of one he no longer belongs in. Not angry. Something quieter — the specific isolation of someone who has lost not just a marriage but an entire ecosystem of belonging. Party sounds implied. He is outside it. Camera: tight on face, warm party blur behind him, cold gray his side. Color palette: cold gray `#1F2937`, warm party glow behind out of focus, Marcus's face in between. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F29 — Diane at Home — Quiet, Resolved | Beat 8 | NEUTRAL WARM

**F29A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's kitchen in the morning — warm light, the table clean and clear. Diane — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair — sits at the table with a cup of tea. The kitchen: her domain, steady, as it has always been. The yellow legal pad is not visible — that chapter is closed. The phone sits on the table beside her, silent. Camera: isometric 45-degree overhead, kitchen and Diane centered. Color palette: warm neutral returning — cream `#F3E9D2`, sage `#6B7F5A` cardigan, morning soft gold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29B** — Medium Shot
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Medium cinematic voxel shot of Diane at her kitchen table — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. She holds a cup of tea in both hands. Her expression: composed, resolved, the specific quiet dignity of someone who has made an irreversible decision and is at peace with it. She is grieving, yes. But she is also whole. Camera: table-level, 3/4 angle. Color palette: warm neutral cream `#F3E9D2`, sage cardigan, morning gold soft. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29C** — Close-Up / ECU
**Model**: Ideogram 3

```
Close-up ECU voxel-style shot of a phone lying on a kitchen table — screen dark, no notifications. The phone is still. No missed calls coming in now. The table surface: warm cream, the phone at the center. The silence of a phone that is no longer being called: complete. No text notifications, no incoming calls visible. Just a silent screen. Color palette: warm cream `#F3E9D2` table, phone screen dark and still, morning gold soft light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F30 — Patricia Moving Away — Removal Truck | Beat 8 | COLD GRAY

**F30A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a residential street — a removal/moving truck parked in front of a house. The street: quiet, neighboring houses indifferent. Voxel moving figures loading the last boxes into the truck. No crowd watching. No goodbye party. No one stood on the lawn to send her off. The house will be empty by nightfall. Camera: isometric 45-degree overhead, street and truck visible. Color palette: cold gray `#1F2937`, neutral street, the truck an ordinary object performing an extraordinary erasure. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the removal truck pulling away from the curb — the house behind it, the street ahead. No figure is on the sidewalk watching. The truck just goes. Patricia is leaving the city. She did not say goodbye to anyone in the neighborhood. Camera: street-level, truck pulling away toward distance. Color palette: cold gray `#1F2937`, the house behind neutral, the truck moving. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of an empty driveway — the house's front driveway, empty. Where a car used to be parked. Where a life used to dock. Now: empty concrete, the garage closed, a few dead leaves at the edge. The absence has its own weight. Camera: tight on empty driveway surface, garage door closed behind. Color palette: cold gray `#1F2937`, neutral concrete, dead leaves at edge. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F31 — Christmas at Diane's — Table Set for Four, The Olive Tree | Epilogue | FULL WARM

**F31A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's dining room at Christmas — the table beautifully set, white tablecloth, white candles lit, a ceramic bowl of oranges and pine cones at the center. Four place settings. At what was once Marcus's seat: a large potted olive tree in a terracotta pot — healthy, living, green in the warm light. The four women (Nina — cube-bodied voxel character from reference, warm burgundy; Diane — cube-bodied voxel character from reference, sage cardigan; Lily — small cube-bodied voxel child form; Rachel — cube-bodied voxel figure, warm sweater similar coloring to Nina) are seated or approaching. The room: full warm `#D4A547` + sage `#6B7F5A`, Christmas-lit, abundant. Camera: isometric 45-degree overhead, full table and all four women. Color palette: full warm cream `#F3E9D2`, gold `#D4A547`, sage `#6B7F5A`. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Medium cinematic voxel shot of the Christmas table — the four women seated, the olive tree in terracotta pot visible at the edge of frame where one seat is absent. Diane — sage cardigan, silver-streaked hair — and Nina — burgundy cardigan, dark wavy hair — are both in mid-frame, mid-dinner, mid-conversation. The energy: alive, warm, the specific laughter of women who have been through something together. Lily (small voxel child form) visible beside Nina. Camera: table-level, 3/4 angle, all four in frame. Color palette: full warm `#D4A547`, cream and gold Christmas light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel shot of the potted olive tree in its terracotta pot at the Christmas table — candlelight warming its leaves, the sage green of the leaves catching the gold light. Behind it, just visible: the warmth of the table, the women, the dinner. The olive tree: alive, green, present. It needed more light. It was moved here. It belongs here now. Camera: tight on olive tree and pot, candlelight warm. Color palette: full warm `#D4A547` candlelight, sage green #6B7F5A leaves, terracotta pot, cream tablecloth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F32 — Lily Asking Diane About the Olive Tree | Epilogue | FULL WARM + SAGE

**F32A** — Wide / Establishing
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of the Christmas dinner table mid-meal — warm, full, alive. Diane — cube-bodied voxel character from reference, sage cardigan — and Lily (small cube-bodied voxel child form, dark wavy hair, Christmas dress) are both looking at the olive tree. Lily's hand points at it — asking. The other women at the table are mid-smile, watching this exchange. The tree: green and lit by candles. Camera: isometric 45-degree overhead, full table and the moment. Color palette: full warm `#D4A547`, sage `#6B7F5A`, Christmas gold and cream. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32B** — Medium Shot
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Medium cinematic voxel shot of Diane and Lily at the Christmas table — Diane — cube-bodied voxel character from reference, sage cardigan — leaning slightly toward Lily (small voxel child form). Diane's expression: genuine warmth, the specific tenderness of a grandmother explaining something true and simple. She is answering: "An olive tree." Lily is looking up at her, waiting for the rest. Camera: table-level 3/4 angle, both in warm candlelight. Color palette: full warm `#D4A547`, sage cardigan, child's Christmas dress, candlelight gold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32C** — Close-Up / ECU
**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Close-up ECU voxel shot of Diane's face — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: the warm answer, the simple answer, the true answer — "It's an olive tree. It needed more light." Her face: full warm peace, the kind that comes after something difficult has been survived and things have rearranged themselves around what remains. Camera: tight on face, warm candlelight Christmas. Color palette: full warm `#D4A547`, sage cardigan, warm skin tones in Christmas light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F33 — Nina and Diane Doing Dishes Together | Epilogue | FULL WARM

**F33A** — Wide / Establishing
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Wide isometric voxel shot of Diane's kitchen — after Christmas dinner, warm evening. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark wavy hair — and Diane — cube-bodied voxel character from reference, sage cardigan, silver-streaked hair — stand side by side at the kitchen sink. The kitchen: warm light, the smell of sage and cinnamon implied by the warmth, the dishes stacked nearby. Lily and Rachel visible in the background dining room, talking. Camera: isometric 45-degree overhead, kitchen and both women at sink. Color palette: full warm `#D4A547`, sage `#6B7F5A`, cream kitchen surfaces Christmas evening. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33B** — Medium Shot
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Medium cinematic voxel shot of Nina and Diane at the kitchen sink — both characters from reference. Diane is washing; Nina is drying. Diane passes a dish. Nina accepts it. Their expression: not discussing anything large. They are just there, together, in the ordinary motion of after-dinner. The specific warmth of two people who have been through something and are now just being. Camera: sink-level, 3/4 angle, both in frame. Color palette: full warm `#D4A547`, sage and burgundy cardigans, warm kitchen Christmas. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33C** — Close-Up / ECU
**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Close-up ECU voxel shot of two pairs of hands at the kitchen sink — Diane's hands passing a dish, Nina's hands receiving it. One dish, between two pairs of hands, warm light on them. This is the final close object of the episode: not a document, not a phone, not a legal paper. A dish. Passed between two people who love each other. Clean and ordinary and whole. Camera: very tight on hands and dish transfer, warm sink light. Color palette: full warm `#D4A547`, warm skin tones of both hands, white dish, gold light on water. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F34 — Karma Caught Up Butterfly / CTA | CTA | DEEP NAVY + GOLD

**F34A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide voxel shot of a warm home kitchen backdrop — soft, intimate, the gold-lit kitchen of the episode's epilogue. The scene is gentle and slightly soft-focus — a CTA backdrop, not a story scene. Warm cream and gold tones throughout, the suggestion of home. This is the channel's world: warm, real, earned. Camera: slight overhead angle, warm kitchen backdrop. Color palette: deep navy `#0B1426` vignette at edges, warm gold `#D4A547` at center. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34B** — Medium Shot
**Model**: Ideogram 3

```
Medium voxel-style shot of a channel card — clean, premium design. Center: a stylized butterfly in gold, wings open, warm and minimal. Above the butterfly: "@KarmaCaughtUp" in clean bold type. Below: "New story every week." The card: deep navy `#0B1426` background with gold #D4A547 butterfly and white type. Warm, premium, recognizable. TEXT MUST BE FULLY READABLE: "@KarmaCaughtUp" above butterfly, "New story every week." below. Color palette: deep navy `#0B1426`, gold #D4A547 butterfly, white clean type. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34C** — Close-Up / ECU
**Model**: Ideogram 3

```
Close-up ECU voxel-style shot of the CTA card — tight on the text and butterfly. The butterfly: gold, wings slightly open, clean and minimal. The text: "Subscribe · New story every week." in clean readable white type, bold, below the butterfly. "@KarmaCaughtUp" above. Deep navy background. The card: final frame of every episode, burned into audience memory. TEXT MUST BE FULLY READABLE: "@KarmaCaughtUp" · gold butterfly · "Subscribe · New story every week." Color palette: deep navy `#0B1426`, gold `#D4A547`, white type, clean premium. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

## 15 KEN BURNS STILLS — S01 through S15

> **Settings**: All stills at 1920×1080 · Note movement for CapCut keyframing · Gen at highest quality

---

### S01 — Neighborhood Mailbox at Dusk — The Envelope Inside | Beat 1 | 15s | WARM

**Model**: Flux 2 Pro

```
Ken Burns still — wide shot of a residential mailbox at golden dusk, the front path to a warm house behind it. The mailbox is partially open — inside: a white envelope visible, cream against the mailbox dark interior. The dusk light is warm gold `#D4A547`, the neighborhood quiet and safe-looking. Beautiful and ordinary — the object that starts everything. No motion captured, full quality still for Ken Burns slow PUSH in on mailbox. Color palette: warm cream `#F3E9D2`, gold `#D4A547` dusk, sage hedges. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PUSH in on mailbox — 15s duration

---

### S02 — Nina's Classroom — Jar of Pens, Student Papers | Beat 2 | 15s | WARM

**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Ken Burns still — wide shot of Nina's empty classroom in warm afternoon light. Nina — cube-bodied voxel character from reference, warm burgundy cardigan, dark wavy hair — at her desk, a jar of extra pens visible, stacked student essays in her hands. The classroom: warm, organized, hers. Student work on the walls, books on shelves. This is the woman we are trusting to carry this story. No motion, full quality still for Ken Burns slow PAN-R. Color palette: warm cream `#F3E9D2`, gold `#D4A547` afternoon light, sage accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PAN-R across classroom — 15s duration

---

### S03 — Thanksgiving Table — Patricia's Place Setting, Full Warmth | Beat 2 | 20s | WARM

**Model**: Nano Banana 2 + patricia-ep20-voxel-base.png

```
Ken Burns still — wide shot of a Thanksgiving table set in full golden warmth. Patricia — cube-bodied voxel character from reference, deep teal blouse, dark hair with gray streaks — is visible in the background at the table, laughing, part of the family. The table: abundant, beautiful, twenty-two years of belonging. This is the warmth of what was trusted. No motion, full quality still for Ken Burns slow PUSH in. Color palette: warm cream `#F3E9D2`, deep gold `#D4A547`, teal blouse, sage and copper autumn tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PUSH in on table — 20s duration

---

### S04 — Envelope in Nina's Hand — Not Opened | Beat 3 | 20s | COOL

**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Ken Burns still — medium shot of Nina at the kitchen counter, holding the white envelope in both hands at arm's length. She has not opened it. Her expression: the recognition forming, something being placed. The envelope: white, elegant looping "Marcus" handwriting visible on face. Cool entering light `#CBD5E1`. The crack forming. No motion, full quality still for Ken Burns slow TILT-DN to her hands. Color palette: `#CBD5E1` cool, warm burgundy cardigan against cooler kitchen light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow TILT-DN from Nina's face to her hands holding envelope — 20s duration

---

### S05 — Nina's Face After the Two-Second Silence | Beat 3 | 25s | DARK ENTERING

**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Ken Burns still — medium shot of Nina standing in the living room, phone lowered from ear. The room around her: unchanged, ordinary. Her expression: the moment of knowing. Completely still. The light has shifted to dark entering `#0B1426`. She has understood something complete. No motion, full quality still for Ken Burns slow PULL back — reveals the empty room around her. Color palette: entering dark `#0B1426`, warm burgundy cardigan isolated in cooling light, empty room. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PULL back — reveals how alone she is in the room — 25s duration

---

### S06 — Yellow Legal Pad on Kitchen Table — Assembled Pieces | Beat 4 | 30s | DARK COLD

**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Ken Burns still — close shot of the yellow legal pad on Diane's kitchen table at late night. Diane's hand rests beside it. The pad: yellow paper, blue ruled lines, Diane's handwriting in careful cursive — a list of details assembled. This is the record of what was missed and what has now been understood. Dark cold `#0B1426`. No motion — STATIC hold on the legal pad. Full quality for maximum legibility. Color palette: dark `#0B1426`, vivid yellow legal pad, dark handwriting, warm hand skin. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: STATIC — hold for 30s — audience assembles along with the scene

---

### S07 — Diane's Face at the Kitchen Table — Double Betrayal | Beat 4 | 20s | DARK COLD

**Model**: Nano Banana 2 + diane-ep20-voxel-base.png + nina-ep20-voxel-base.png

```
Ken Burns still — medium shot of Diane across the kitchen table — cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: grief and love simultaneously — this is her betrayal too. Nina partially visible across the table. Dark cold `#0B1426`. No motion, full quality still for Ken Burns slow PULL back — reveals both women in the full weight of the kitchen. Color palette: dark `#0B1426`, sage and burgundy cardigans warm against dark, yellow legal pad between them. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PULL back — reveals both women in full kitchen — 20s duration

---

### S08 — Nina at Lily's Door — What She Is Protecting | Beat 5 | 20s | DARK COLD

**Model**: Nano Banana 2 + nina-ep20-voxel-base.png

```
Ken Burns still — medium shot of Nina in Lily's doorway at night — cube-bodied voxel character from reference, warm burgundy cardigan, dark wavy hair. She leans over the small bed where Lily (tiny voxel child form) sleeps. The nightlight soft warm below. Dark cold `#1F2937` hallway behind Nina. This is what she is doing all of this for. No motion, full quality still for Ken Burns slow DESCENT. Color palette: dark `#1F2937` hallway, warm nightlight glow from child's room, burgundy cardigan, tiny sleeping child. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow DESCENT onto child in bed — 20s duration

---

### S09 — House Deed — "Nina Reyes. Sole Owner." | Beat 6 | 25s | TURNING WARM

**Model**: Ideogram 3

```
Ken Burns still — close shot of the property deed on the attorney's warm wood desk. The key section visible: "Nina Reyes. Sole owner. Pre-marital property." in legible formal type. Gold light warm `#D4A547` on the document. This is the pivot payoff — pre-marital, grandmother's gift, recorded, hers. TEXT MUST BE FULLY READABLE: "Nina Reyes. Sole owner. Pre-marital property." No motion, full quality still for Ken Burns slow PUSH in on owner name. Color palette: turning warm `#D4A547`, cream document, dark formal type, warm wood desk. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PUSH in on "Nina Reyes. Sole owner." — 25s duration

---

### S10 — Diane Dialing — The Four Words Coming | Beat 7 | 20s | FULL WARM

**Model**: Nano Banana 2 + diane-ep20-voxel-base.png

```
Ken Burns still — medium shot of Diane in her kitchen holding the phone, about to make the call. Cube-bodied voxel character from reference, sage cardigan, silver-streaked warm brown hair. Her expression: resolved, quiet, grief and clarity. The four words are coming. This is the karma moment. No motion — STATIC hold on Diane's face and the phone. Full warm `#D4A547`. Color palette: full warm `#D4A547`, sage cardigan, warm kitchen light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: STATIC — hold for 20s — let the moment build

---

### S11 — Patricia's Phone Screen — "6 Missed Calls. Diane." | Beat 7 | 25s | COLD GRAY

**Model**: Ideogram 3

```
Ken Burns still — close shot of a phone screen lying on a cold apartment coffee table. The notifications are visible and legible: "6 Missed Calls — Diane" and "2 Messages — Diane." The screen glows blue-white against the dark cold apartment. No one picks it up. TEXT MUST BE FULLY READABLE: "6 Missed Calls — Diane" primary, "2 Messages — Diane" secondary. No motion, full quality still for Ken Burns slow PUSH in on phone screen. Color palette: cold gray `#1F2937`, blue-white phone screen glow, dark apartment. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PUSH in on phone screen — 25s duration

---

### S12 — Marcus at the Edge of the Birthday Party | Beat 8 | 20s | COLD GRAY

**Model**: Nano Banana 2 + marcus-ep20-voxel-base.png

```
Ken Burns still — wide shot of the birthday party yard. Marcus — cube-bodied voxel character from reference, navy blazer — stands at the far edge, alone. The party in warm colors at the center, adults and children gathered, happy. Marcus at the margin: cold gray `#1F2937` around him, the distance between him and the center palpable. No motion, full quality still for Ken Burns slow PULL back — reveals how far he is from the center. Color palette: warm party colors at center, cold gray `#1F2937` at Marcus's edge, the contrast deliberate. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PULL back — reveals full yard, his distance from center — 20s duration

---

### S13 — Empty Driveway Where Patricia's Car Used to Be | Beat 8 | 15s | COLD GRAY

**Model**: Flux 2 Pro

```
Ken Burns still — close shot of an empty residential driveway. The garage door closed. The driveway: empty concrete, no car, a few dried leaves at the edges. She has left. The removal truck is gone. The absence has its own weight. No motion, full quality still for Ken Burns slow PULL back from driveway. Color palette: cold gray `#1F2937`, neutral concrete, closed garage door, dried leaves. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PULL back from empty driveway — 15s duration

---

### S14 — The Olive Tree at the Christmas Table | Epilogue | 30s | FULL WARM

**Model**: Flux 2 Pro

```
Ken Burns still — medium shot of the potted olive tree in its terracotta pot at the Christmas dinner table. Candlelight warming the sage green leaves, the terracotta pot glowing in the warm light, the cream tablecloth below. Behind it: the warm blur of the four women at the table — voxel forms, warm colors, alive. The tree: healthy, present, it needed more light. Full warm `#D4A547` + sage `#6B7F5A`. No motion, full quality still for Ken Burns slow PUSH in on olive tree and candlelight. Color palette: full warm gold `#D4A547`, sage green `#6B7F5A`, terracotta, cream tablecloth, warm Christmas candlelight. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow PUSH in on olive tree — candlelight filling frame — 30s duration

---

### S15 — Nina and Diane's Hands Passing a Dish | Epilogue / CTA | 40s | FULL WARM

**Model**: Nano Banana 2 + nina-ep20-voxel-base.png + diane-ep20-voxel-base.png

```
Ken Burns still — close shot of two pairs of hands at the kitchen sink: Diane's hands passing a white dish, Nina's hands receiving it. Both voxel hand forms, warm skin tones, the dish between them white and clean. The kitchen warm gold `#D4A547` light on both sets of hands. Sage and burgundy cardigans visible at frame edges — both characters from reference. This is the final image: not a document, not a phone, not a legal paper. A dish. Two people. A transfer of ordinary love. No motion, full quality still for Ken Burns slow CRANE-UP from hands to wide kitchen. Color palette: full warm gold `#D4A547`, sage green `#6B7F5A`, cream dish, warm skin tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**CapCut movement**: Slow CRANE-UP from hands to wide warm kitchen — 40s duration — FINAL SHOT OF EPISODE
