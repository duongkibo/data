# 03b — Full Image Generation Prompts
# EP07 "The MIL's Plan" — F01A through F34C + S01–S15 (117 prompts)
# Copy-paste trực tiếp vào Freepik — self-contained, no external reference needed

> **System**: Each scene = 3 start frames (A = Wide/Establishing, B = Medium, C = Close-Up/ECU)
> **Setup**: Ratio 16:9 · Resolution 2K · AI enhance OFF
> **Save**: media/images/F{NN}A.png, F{NN}B.png, F{NN}C.png ... S01.png–S15.png

---

## Characters

- **Claire** — cube-bodied voxel female, 33, cream/sage professional blouse, warm dark hair, reading glasses optional, composed "holds it together" energy
- **Owen** — cube-bodied voxel male, 34, warm charcoal/grey clothing, kind face, gentle relaxed posture
- **Renata** — cube-bodied voxel female, 63, cold burgundy/dark mauve clothing, older slightly-wider proportions, controlled precise smile (ANTAGONIST)

## Model Routing

- **Nano Banana 2 + claire-voxel-base.png** = F02, F03, F04, F10, F11, F15, F16, F17, F18, F19, F20, F21, F22, F23, F24, F25, F33, F34
- **Nano Banana 2 + owen-voxel-base.png** = F03, F04, F06, F11, F12, F14, F25, F26, F27, F28, F33
- **Nano Banana 2 + renata-voxel-base.png** = F05, F07, F08, F09, F13, F30
- **Flux 2 Pro** = F01, F02 (env only), F07 (env only), F16 (env only), F27 (env only), F31, F32
- **Ideogram 3** = F13, F20, F21, F22, F29, F32, F34

> Note: Scenes with multiple characters use both character refs. Scenes in both Nano Banana 2 AND Flux 2 Pro lists = gen both; use best result.

---

## Color Arc Reference

| Frames | Beat | Palette |
|--------|------|---------|
| F01–F04 | Beat 1–2 Hook/Intro | WARM cream #F3E9D2 + gold #D4A547 |
| F05–F10 | Beat 2–3 Crack begins | WARM cooling, campaign enters |
| F11–F15 | Beat 4–5 Betrayal | DARK COLD navy #0B1426 |
| F16–F19 | Beat 5 Fall | DARK navy #0B1426 |
| F20–F24 | Beat 6 Pivot | TURNING WARM pre-dawn #2A1F35 → warm |
| F25–F31 | Beat 7 Karma | COLD GRAY institutional #1F2937 |
| F32–F33 | Beat 8 Downfall | NEUTRAL COOL #374151 |
| F34 | Epilogue | FULL WARM #D4A547 + sage #6B7F5A |

---

## DUTCH ANGLE RESTRICTION

- **DUTCH allowed**: F12B, F13B, F13C, F14B, F15B — betrayal zone ONLY
- **NEVER DUTCH**: F01–F11, F16–F34, all Ken Burns S01–S15

---

## VOXEL STYLE TAG (included in every prompt)
> "Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K"

---

## 102 START FRAMES — F01 through F34

---

### F01 — Phone Screen Voicemail Glow | Beat 1 Hook | DARK WARM → FOREBODING

**F01A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a dark bedroom nightstand, entire surface visible. Smartphone face-up on nightstand, screen glowing with a voicemail notification icon — orange pulse light, ominous glow. Surrounding objects: lamp off, glass of water, small book. Deep shadows everywhere, warm amber street-light leak through window blinds forming slanted lines across the scene. Mood: quiet, foreboding, before-the-storm stillness. No characters. Camera: isometric 45-degree overhead establishing shot, full nightstand surface in frame. Color palette: deep burgundy-tinged dark #1A0D14, amber street-glow #C4782A, voicemail orange pulse #F59E0B. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of smartphone lying on dark nightstand surface, camera at table level. Voicemail icon fills the screen — a pulsing orange envelope with notification badge. Screen glow reflects off the nightstand surface. The room behind is pitch dark. Soft amber street-light from one side. Mood: quiet menace, something waiting. Camera: eye-level to nightstand, horizontal cinematic. Color palette: deep dark #1A0D14, screen orange pulse #F59E0B, ambient amber #C4782A. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of smartphone screen only, filling frame. Voicemail notification icon centered: orange envelope glowing, notification count badge visible. Screen light reflects on glass surface. Deep dark vignette surrounds the phone. No characters, no room details — just the glowing screen. Mood: ominous, something unseen waiting. Color palette: bright orange #F59E0B screen glow, deep black-burgundy #1A0D14 surrounding dark. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F02 — Claire at Clinical Office Morning | Beat 2 Intro | WARM

**F02A** — Wide / Establishing
**Model**: Flux 2 Pro (environment) + Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of a warm professional clinical office, morning light. Full room visible: desk, bookshelves, diplomas on wall, potted plant in corner, window with warm morning sunlight streaming in. Claire — cube-bodied voxel character from reference, cream/sage professional blouse, warm dark hair, reading glasses on, composed professional energy — sits at desk organizing papers. Everything looks orderly, competent, calm. Camera: isometric 45-degree overhead establishing. Color palette: warm cream #F3E9D2, morning gold #D4A547, sage accents #6B7F5A. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire at her clinical office desk. Claire — cube-bodied voxel character from reference, cream/sage professional blouse, warm dark hair, reading glasses on — leans slightly forward over papers, composed and focused. Warm morning sunlight from window at her side, desk lamp off. Bookshelves visible behind her. Expression: calm competence, measured warmth. Camera: 3/4 angle, table level, Claire fills center-left frame. Color palette: warm cream #F3E9D2 walls, morning gold light #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel portrait of Claire's face, morning office. Claire — cube-bodied voxel character from reference, cream/sage professional blouse, warm dark hair, reading glasses on — face in soft warm morning light. Expression: professional warmth, gentle intelligence, the kind of face that holds other people's pain for a living. Dot eyes steady and kind. Camera: tight portrait, face fills frame, slight warm-side lighting. Color palette: warm cream skin tones, gold light #D4A547 on face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F03 — Community Garden — Claire + Owen Meeting | Beat 2 Intro | WARM

**F03A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of a community garden in warm afternoon light. Raised garden beds, brick paths, lush green voxel plants. Claire — cube-bodied voxel character, cream/sage blouse, dark hair — and Owen — cube-bodied voxel character, warm charcoal/grey clothing, kind face — stand near a raised bed, facing each other, relaxed and smiling. First meeting energy: open posture, slight lean toward each other. Other gardeners blurred in background. Camera: wide isometric establishing, full garden visible. Color palette: warm cream #F3E9D2, gold afternoon light #D4A547, sage green #6B7F5A garden. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire and Owen in community garden, both visible from waist up. Claire — cube-bodied voxel character, cream/sage blouse, warm dark hair — and Owen — cube-bodied voxel character, warm charcoal grey, kind gentle face — face each other over a raised bed of voxel tomato plants. Body language: interested, open, slightly leaning in. Warm afternoon light between them. Camera: 3/4 angle, both in frame, garden behind. Color palette: warm gold #D4A547 light, cream #F3E9D2, sage green #6B7F5A. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Close-up ECU voxel shot: two pairs of hands close together over a raised garden bed, nearly touching. Claire's hands — slightly smaller, cream-toned — and Owen's hands — warm, capable — both in gardening gloves, holding a small voxel seedling between them as if showing each other. Garden soil and plants at edge of frame. Warm light on hands. This is the "first touch" moment. Camera: close on hands, garden blurred behind. Color palette: warm cream #F3E9D2 skin tones, sage #6B7F5A gloves, gold light #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F04 — Owen Fixing Porch Step, Lunch Break Call | Beat 2 Intro | WARM

**F04A** — Wide / Establishing
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Wide isometric voxel shot of a home's front porch, warm midday light. Owen — cube-bodied voxel character, warm charcoal/grey work clothes, kind face — kneels on a porch step with a toolbox open beside him, mid-repair. Phone in one hand, leaning against knee. House exterior behind: warm brick or painted siding, potted plants, homey. Lunch bag visible nearby. Sunny, safe domestic warmth. Camera: isometric establishing, full porch visible. Color palette: warm gold #D4A547 noon light, cream #F3E9D2, warm charcoal. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium voxel shot of Owen kneeling on porch step, phone to his ear, tools around him. Owen — cube-bodied voxel character, warm charcoal/grey work clothes, kind relaxed face — holds phone in one hand, the other resting on a half-repaired step. Expression: light, happy, talking-to-someone-you-like warmth. Warm noon light falls on him from above. Camera: 3/4 angle, Owen fills frame, porch behind. Color palette: warm noon gold #D4A547, cream #F3E9D2 house exterior. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Close-up ECU voxel portrait of Owen's face during phone call, warm noon light. Owen — cube-bodied voxel character from reference, warm charcoal grey, kind face — holds phone up, expression: easy smile, genuine warmth, the look of early-relationship happiness. Dot eyes soft and bright. Porch background blurred behind him. Camera: portrait tight, face fills frame, warm side-lighting. Color palette: warm gold #D4A547 light on face, cream #F3E9D2. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F05 — First Renata Meeting — Warm Hug, Door Closing Smile | Beat 2 Intro | WARM FADING ⭐

**F05A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + renata-voxel-base.png

```
Wide isometric voxel shot of a home entryway, warm late-afternoon light. Claire — cube-bodied voxel character, cream/sage blouse, dark hair, slightly uncertain smile — stands near the front door. Renata — cube-bodied voxel character, cold burgundy/dark mauve outfit, older slightly-wider proportions — faces her with arms slightly extended post-hug. The hug just ended. Warm living room visible behind Renata. Owen just off-frame right. Front door behind Claire. Camera: isometric wide, full entryway visible. Color palette: warm cream #F3E9D2 lighting, but burgundy #8B1E2F entering frame. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png + renata-voxel-base.png

```
Medium 3/4 angle voxel shot of Renata facing Claire in home entryway. Renata — cube-bodied voxel character, cold burgundy outfit, older proportions — smiles at Claire with a perfectly controlled warm smile. Claire — cube-bodied voxel character, cream/sage blouse — smiles back, open, genuine. But something is slightly off about Renata's smile. It doesn't reach the voxel dot eyes. Camera: 3/4 angle, both in frame, warm light behind. Color palette: warm cream fading, burgundy #8B1E2F entering on Renata's side. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05C** — Close-Up / ECU
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Extreme close-up ECU voxel portrait of Renata's face, the controlled smile. Renata — cube-bodied voxel character from reference, cold burgundy clothing, older proportions — smiles with her mouth but not her eyes. Dot eyes: precise, watchful, calculating beneath a warm surface expression. This is the "door closing" smile — polite, practiced, something behind it. Camera: tight portrait, face fills frame, slightly cool light despite warm surroundings. Color palette: burgundy #8B1E2F, controlled cold in the eyes. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F06 — Owen Comes Home "Slightly Off" | Beat 3 Crack | WARM COOLING

**F06A** — Wide / Establishing
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Wide isometric voxel shot of home dining room, Tuesday evening. Owen — cube-bodied voxel character, warm charcoal/grey, kind face now slightly distant — sits at dinner table, posture changed from usual. Table set with simple dinner, two place settings. Claire's seat visible but she is not in frame. Owen stares slightly past the table. Warm home lighting, but something feels muted. Camera: isometric establishing, full dining room visible. Color palette: warm cream #F3E9D2 cooling, grey undertones entering, gold #D4A547 dimmed. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium 3/4 angle voxel shot of Owen at dinner table, slightly off. Owen — cube-bodied voxel character, warm charcoal grey — sits with elbows on table, looking slightly past camera. Fork in hand but not eating. Expression: somewhere else, muted, a gentle withdrawal that is hard to name. Warm room light, but the warmth feels thinner now. Camera: 3/4 angle, Owen center-frame, dining room behind. Color palette: warm cream cooling to grey, #D4A547 dimmed. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Close-up ECU voxel portrait of Owen's face at dinner, slightly off. Owen — cube-bodied voxel character from reference, warm charcoal grey — looks just past camera, dot eyes distant, expression: the look of someone who has been told something that is rearranging quietly inside. Not upset. Not cold. Just... slightly somewhere else. Camera: tight portrait, warm light from side, face fills frame. Color palette: warm tones cooling at edges, grey entering. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F07 — Renata's Timed Morning Calls | Beat 3 Crack | WARM COOLING

**F07A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a home kitchen, early morning. No characters. Phone visible on counter, notification light blinking. Kitchen calendar on wall with subtle red-circled dates at regular intervals suggesting a pattern. Coffee machine mid-brew, morning light just coming in cold through window. Mood: ordinary scene but pattern feels slightly ominous. Camera: isometric wide establishing. Color palette: cool morning light, cream #F3E9D2 cooling to grey-blue undertones. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07B** — Medium Shot
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Medium 3/4 angle voxel shot of Renata in her own home, making a phone call. Renata — cube-bodied voxel character, cold burgundy/dark mauve, older proportions, controlled smile — holds phone to ear, sitting at a precise, tidy desk. Behind her: orderly bookshelves, a wall clock. Expression: calm, purposeful, executing a plan she has thought through. Camera: 3/4 angle, Renata center-frame, her tidy home behind. Color palette: cold burgundy #8B1E2F, muted mauve, grey-cool environment. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07C** — Close-Up / ECU
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Close-up ECU voxel shot: Renata's hand holding phone, close on the phone screen. The screen shows Owen's name as the contact being called. Renata's hand is visible — older, burgundy-sleeved, deliberate grip. A wall clock visible blurred in background showing 7:14 AM. This is the timed morning call. Camera: close on phone in hand, burgundy sleeve edge in frame. Color palette: burgundy #8B1E2F sleeve, phone screen warm glow on cool background. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F08 — Renata Unannounced Visit | Beat 3 Crack | COOLING

**F08A** — Wide / Establishing
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Wide isometric voxel shot of a home living room, Renata having arrived unannounced. Renata — cube-bodied voxel character, cold burgundy/dark mauve, older proportions, controlled presence — stands in center of living room, casserole dish in hands, acting as if she was expected. Food items on the coffee table. Owen (not visible in wide) presumably nearby. Living room: warm but now invaded. Claire's personal items visible on shelves — displaced energy. Camera: isometric wide establishing. Color palette: warm cream #F3E9D2 home, but burgundy #8B1E2F dominates Renata's presence. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08B** — Medium Shot
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Medium voxel shot of Renata in Claire's living room, low voice to Owen. Renata — cube-bodied voxel character, cold burgundy, older proportions — leans slightly toward Owen's direction (Owen off-frame), face close, speaking quietly. Expression: warm to Owen, performing intimacy, deliberately low-voiced. The body language is territorial — she has claimed the center of the room. Camera: 3/4 angle, Renata dominant in frame, living room behind. Color palette: burgundy #8B1E2F, cool grey undertone in room. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08C** — Close-Up / ECU
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Close-up ECU voxel shot of Renata's mouth and lower face, whispering. Renata — cube-bodied voxel character from reference, cold burgundy — mouth slightly open in quiet speech, expression: controlled warmth masking deliberate information-planting. Something is being said that is not meant for Claire to hear. Camera: very tight on mouth and chin area, angled from below and side. Color palette: cold burgundy, dim living room light, slight shadow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F09 — Owen: "Boring and Provincial" Rewrite Confrontation | Beat 3 Crack | COOLING

**F09A** — Wide / Establishing
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Wide isometric voxel shot of a home living room, tense quiet confrontation. Renata — cube-bodied voxel character, cold burgundy/dark mauve, older proportions — stands near doorway, posture: composed, waiting. The room feels slightly charged. Claire's belongings visible. Owen implied just off-frame. Mood: the moment after something unkind was said, surface still smooth. Camera: isometric wide, full room, doorway in frame. Color palette: warm cream #F3E9D2 cooling, burgundy #8B1E2F, grey undertones entering. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09B** — Medium Shot
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Medium voxel shot of Renata, post-delivering the "boring and provincial" line. Renata — cube-bodied voxel character, cold burgundy, precise — face composed, not cruel-looking, just... measured. She has said what she came to say and is waiting for it to land. Expression: controlled satisfaction beneath polite neutral. Camera: 3/4 angle, Renata center, living room behind. Color palette: cold burgundy #8B1E2F, grey-cooling room. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09C** — Close-Up / ECU
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Extreme close-up ECU voxel portrait of Renata's dot eyes — controlled, watchful, calculating. Renata — cube-bodied voxel character from reference, cold burgundy — expression: a perfectly maintained neutral that reveals, in this tight shot, the deliberateness behind it. Dot eyes: precise, assessing. No warmth. Camera: ECU on upper face, eyes fill frame. Color palette: cold grey-burgundy, shadow. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F10 — Claire Tracking Patterns — Professional Notebook | Beat 3 Crack | COOLING

**F10A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's home study or kitchen table, evening. Claire — cube-bodied voxel character, cream/sage blouse, dark hair, reading glasses on — sits at table with a professional notebook open, writing with focus. Small lamp provides warm pool of light in an otherwise dimming cool room. Calendar on wall behind her. Phone nearby. Expression: clinical observation mode, bringing professional skills to personal situation. Camera: isometric wide establishing, full desk area visible. Color palette: warm lamp pool #D4A547 on Claire, cool grey #3B5E8A surrounding room. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire writing in professional notebook, lamp-lit. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses — leans over notebook, pen moving. Expression: composed concentration, the same steady focus she brings to case notes at work. Something has shifted from personal to clinical. Camera: 3/4 angle, Claire center-left, notebook visible. Color palette: warm lamp gold #D4A547 on face and notebook, cool room behind. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel shot of Claire's notebook page, hand visible writing. Entries visible: dates, times, brief behavioral notes — clinical, precise. A line visible: "8:14am call — Owen quiet at breakfast. Tuesday visit — mood shift by 6pm." The social worker's trained eye applied to her own life. Camera: tight on notebook page, Claire's hand with pen at edge of frame, glasses reflection in voxel style. Color palette: warm cream page, gold lamp light, grey-cool background. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F11 — Sunday Kitchen — Owen Hands Folded, No Coffee | Beat 4 Betrayal Approaching | DARK COLD

**F11A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of home kitchen, Sunday morning. Cold light. Claire — cube-bodied voxel character, cream/sage, dark hair — stands at counter, coffee mug in hand. Owen — cube-bodied voxel character, warm charcoal grey, but posture closed — sits at kitchen table with hands folded, no coffee in front of him. The small detail of no coffee matters. The room feels cold despite being Sunday. Something is about to be said. Camera: isometric wide, full kitchen visible, both characters separated by space. Color palette: dark cold navy #0B1426 entering, cream cooling. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium 3/4 angle voxel shot of Owen at kitchen table, hands folded, no coffee. Owen — cube-bodied voxel character, warm charcoal grey, but posture withdrawn and closed — sits still. Hands folded on table. Expression: something prepared, something decided, the look of someone who has been thinking about what they are about to say for days. Camera: 3/4 angle, Owen fills frame, cold kitchen behind. Color palette: dark cold navy #0B1426, grey charcoal. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Close-up ECU voxel shot of Owen's hands folded on kitchen table, no coffee cup. The absence of the mug is the detail. Hands: still, deliberate, folded. Cold blue-grey light on the table surface. A wedding ring visible. Camera: close on hands, table surface fills frame, cold light. Color palette: deep navy #0B1426, grey-cold #3B5E8A, single cold light source. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F12 — "Fundamental Incompatibility" — Owen at Kitchen Table | Beat 4 Betrayal | DARK COLD

**F12A** — Wide / Establishing
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Wide isometric voxel shot of kitchen, betrayal scene. Owen — cube-bodied voxel character, charcoal grey, posture heavy — sits at table, has just delivered the words. Claire (not in frame, implied across the table) has heard them. The kitchen feels enormous suddenly. Cold blue-grey light. Empty space between Owen and the edge of frame where Claire would be. Camera: isometric wide, vast cold kitchen, Owen small at table. Color palette: deep navy #0B1426, cold grey, all warmth drained. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12B** — Medium Shot | DUTCH ANGLE
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium DUTCH ANGLE voxel shot of Owen at kitchen table. Camera tilted 12–15 degrees, deliberate destabilization. Owen — cube-bodied voxel character, charcoal grey — visible from waist up, expression: someone who has said the prepared thing and is waiting, not entirely unkind but resolved. The DUTCH angle makes the room feel wrong, the world tilted. Color palette: deep navy #0B1426, cold grey, no warmth. DUTCH ANGLE — tilted camera, world off-axis. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Extreme close-up ECU voxel portrait of Owen's face delivering the words. Owen — cube-bodied voxel character from reference — expression: resolved, pained, the look of someone who has been talked into something they're not entirely sure about but has committed. Dot eyes: sad but decided. Not cruel. Just gone. Camera: tight portrait, cold light on face. Color palette: deep navy #0B1426, cold blue on face edges. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F13 — "You Told Her You Didn't Want Children at Thanksgiving" | Beat 4 Betrayal Peak | DARK COLD ⭐

**F13A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of the kitchen in the worst moment. Claire — cube-bodied voxel character, cream/sage, but expression shattered — stands across table from Owen — cube-bodied voxel character, charcoal grey. The space between them feels enormous. Cold navy light. The confrontation is at peak. Both standing now. Camera: isometric wide, maximum space between characters emphasizes the chasm. Color palette: deep navy #0B1426, cold blue #3B82F6, all warmth gone. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13B** — Medium Shot | DUTCH ANGLE
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Medium DUTCH ANGLE voxel shot, both Claire and Owen visible. DUTCH tilt 15 degrees — the moment everything goes sideways. Claire — cube-bodied voxel character, cream/sage, expression: stunned devastation — faces Owen — cube-bodied voxel character, charcoal grey. The Thanksgiving betrayal has been named. The word "children" is in the air. Body language: Claire frozen, Owen unable to meet her eyes. Color palette: deep navy #0B1426, cold blue shock. DUTCH ANGLE deliberately destabilizing. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13C** — Close-Up / ECU | DUTCH ANGLE
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Extreme close-up voxel-style phone or notepad screen, DUTCH ANGLE. Text on screen in clean typography: "You told her you didn't want children. At Thanksgiving. Before I even knew that was a conversation." — displayed as if a message or note. Background: deep navy #0B1426 voxel texture, cold blue screen glow. DUTCH ANGLE on the text itself, world tilted. Font: clean modern sans-serif, white text on dark, cold blue glow. Voxel art background texture visible. 1920x1080, 2K.
```

---

### F14 — Owen Asks for Separation — Door Closing | Beat 4 Betrayal | DARK COLD

**F14A** — Wide / Establishing
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Wide isometric voxel shot of home entryway/hallway, Owen near the front door with a bag. Owen — cube-bodied voxel character, charcoal grey, posture slumped with sadness and resolve — stands near door, bag at feet, about to leave. Claire is not in frame. The house behind him is dark and cold. The door is half-open, cold grey light from outside. Camera: isometric wide, Owen small against the large dark house, door in frame. Color palette: deep navy #0B1426, cold grey exterior light at door. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14B** — Medium Shot | DUTCH ANGLE
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium DUTCH ANGLE voxel shot of Owen at the front door, bag in hand. Camera tilted 12 degrees. Owen — cube-bodied voxel character, charcoal grey — hand on door, looking back over shoulder toward interior (toward Claire, off-frame). Expression: fractured, sad, committed to leaving. The DUTCH angle captures the world broken and tilting. Half-light from outside, dark house behind. Color palette: deep navy #0B1426, cold grey door light. DUTCH ANGLE. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Close-up ECU voxel shot: Owen's hand on the door handle, pulling it closed. His charcoal grey sleeve visible. The door itself: dark, wooden voxel planks. The light from outside is cold grey-white through the narrowing gap. The handle turns. The door closes. Camera: close on hand and door handle, cold light through shrinking gap. Color palette: dark charcoal #1F2937, cold grey door-light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F15 — Claire Very Still — "Window-Watcher for Four Years" Realization | Beat 4 Fall | DARK COLD ⭐

**F15A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of empty living room after Owen has left. Claire — cube-bodied voxel character, cream/sage blouse, dark hair — stands completely still in the center of the empty room. Not crying. Not moving. Just standing. The house enormous and silent around her. Cold navy light from windows. Owen's absence takes up space. Camera: isometric wide, Claire tiny and still in the center of the large dark room. Color palette: deep navy #0B1426, cold grey, cream of Claire's clothes the only warmth remaining. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15B** — Medium Shot | DUTCH ANGLE
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium DUTCH ANGLE voxel shot of Claire standing still in living room. DUTCH tilt 10 degrees — the world is still wrong. Claire — cube-bodied voxel character, cream/sage blouse — stands with arms slightly at sides, not moving. Expression: the realization arriving. Four years. She has been watched. The world tilts around her. Camera: 3/4 angle, DUTCH, Claire center, dark room. Color palette: deep navy #0B1426, cold. DUTCH ANGLE. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Extreme close-up ECU voxel portrait of Claire's face in the realization moment. Claire — cube-bodied voxel character from reference, cream/sage — face in cold navy light. Expression: not tears, not anger — the specific still devastation of comprehension. She has just understood what four years meant. Dot eyes: wide, steady, hollow with the enormity of it. Camera: tight portrait, cold navy light, face fills frame. Color palette: deep navy #0B1426, cold blue on face, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F16 — Owen's Rental — Claire Alone in House | Beat 5 Fall | DARK

**F16A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a rental apartment exterior — modest, functional, a step down in warmth. Night. A window glows from inside, Owen's silhouette faint behind curtain. The street is cold, city quiet. Simultaneously, implied split: another voxel space — the family home — dark, unlit windows, just visible. The before/after of a separation rendered in two voxel spaces. Camera: isometric wide, both spaces implied. Color palette: dark navy #0B1426, cold city grey, single warm light in rental window. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire in the now-quiet family home, alone. Claire — cube-bodied voxel character, cream/sage blouse now slightly disheveled, dark hair down — sits on the couch, knees pulled in slightly, looking at nothing. The house is hers but feels wrong-sized without another person. Quiet. Cold. Camera: 3/4 angle, Claire on couch, empty room around her. Color palette: dark navy #0B1426, dim ambient light only, cream of Claire isolated. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel portrait of Claire alone at night, face in the quiet. Claire — cube-bodied voxel character from reference — expression: held together on the outside, the effort of a trained professional who knows how not to fall apart in public, alone now and still holding it. Dot eyes: steady, tired, something banked behind them. Camera: tight portrait, dim cold night light. Color palette: dark navy #0B1426, dim ambient. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F17 — Claire at Work — Holding Together | Beat 5 Fall | DARK

**F17A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's clinical office, daytime. Claire — cube-bodied voxel character, cream/sage professional, reading glasses on — sits at her desk, client chair empty across from her (between sessions). Professional, composed, fully present at work. But the room feels slightly colder than F02's version of the same office. Morning gold gone — now neutral professional light. Camera: isometric wide establishing. Color palette: neutral professional #3B5E8A cool, cream #F3E9D2, muted warm. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire at her desk between sessions, professional composure in full effect. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses — writes in client notes, pen in hand, posture impeccable. Expression: held together, competent, the face she shows the world. At work she is unbreakable. Camera: 3/4 angle, Claire center, office behind. Color palette: neutral cool office light, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Extreme close-up ECU voxel portrait of Claire at work, the professional face. Claire — cube-bodied voxel character from reference — dot eyes focused, expression: the specific trained composure of a clinical social worker. She helps other people carry their pain. She does not put hers down here. The exhaustion is microscopic and only visible this close. Camera: ECU portrait, professional lighting. Color palette: neutral cool professional, cream face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F18 — Claire's Pattern Recognition — 4 Years in Her Mind | Beat 5 Fall | DARK

**F18A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's home study, night. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses, hair pulled back — surrounded by open notebooks, a timeline on the wall drawn on paper. Four years of data. She is mapping something the way she maps cases. The room around her: dark navy, lamp-lit desk island in the dark. Camera: isometric wide, full room visible, Claire at lamp-center. Color palette: dark navy #0B1426 surrounding, warm lamp pool #D4A547 on desk, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire at study desk, notebooks open, pattern recognition mode. Claire — cube-bodied voxel character, cream/sage, reading glasses — leans forward over notes, connecting entries across pages. Expression: the clinical mind engaged, finding a shape in data. Professional focus applied to four years of her own life. Camera: 3/4 angle, Claire and notebooks visible. Color palette: dark navy #0B1426, warm lamp gold on notes and face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel shot of Claire's eyes behind reading glasses, pattern recognition moment. Claire — cube-bodied voxel character from reference — eyes fixed on notes off-frame. Behind the glasses: the specific narrowing of focus when a pattern becomes visible. Dot eyes sharp, intense. This is the social worker seeing it. Camera: ECU on upper face, glasses in frame, lamp light. Color palette: warm lamp #D4A547 on face, dark navy surrounding. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F19 — Finding Voicemail Archive on Phone — 8 Saved | Beat 5 Fall/Pivot | DARK

**F19A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's bedroom at night, sitting on edge of bed. Claire — cube-bodied voxel character, cream/sage, hair down, tired — holds phone in both hands, screen glow on her face. The bedroom: dark navy, minimal, quiet. She has just found something in the phone. The moment before she fully realizes what she has. Camera: isometric wide, dark bedroom, Claire's figure lit only by phone. Color palette: dark navy #0B1426, cold phone screen glow, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire on bed edge, phone in hands, looking at screen. Claire — cube-bodied voxel character, cream/sage — holds phone in both hands, leaning slightly in. Screen visible: voicemail inbox, list of messages, several starred. Expression: dawning recognition, the held breath before certainty. Camera: 3/4 angle, Claire and phone visible, dark room behind. Color palette: dark navy #0B1426, phone screen glow on face, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel shot of phone screen in Claire's hands. Voicemail inbox visible: 8 messages, all from same contact — "Renata" — over 4 years. Dates visible on messages. Claire's thumbs at bottom of screen. The archive visible: saved, labeled, timestamped. The evidence has always been there. Camera: close on phone screen, Claire's hands at edges. Color palette: cold phone screen glow, dark navy #0B1426, cream hands. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F20 — Listening to VM3 — "Not Built for Closeness with Family" | Beat 6 Pivot | TURNING WARM ⭐

**F20A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's kitchen at early morning, pre-dawn. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses, hair somewhat pulled back — sits at kitchen table with phone and notepad. The sky outside the window is the specific deep blue-violet of pre-dawn, not full dark, not light. A single kitchen lamp. She is listening to something. Camera: isometric wide, full kitchen, pre-dawn window. Color palette: turning warm #2A1F35 pre-dawn violet, lamp warm pool #D4A547 center, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire listening to voicemail, phone to ear, notepad open. Claire — cube-bodied voxel character, cream/sage, reading glasses — sits at kitchen table, phone held to ear, pen poised over notepad. Expression: professional listening mode, but this time what she hears is about her. Eyes steady, absorbing. Camera: 3/4 angle, Claire and notepad visible. Color palette: pre-dawn turning warm #2A1F35, lamp gold #D4A547 on Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20C** — Close-Up / ECU
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Clean voxel-style phone screen showing voicemail transcription or notable text. VM3 content displayed: "She's simply not built for the kind of closeness our family needs. Owen deserves someone who prioritizes family above everything." — clean readable typography. Background: dark voxel texture #2A1F35 purple-navy, warm lamp glow from one side. Font: clean modern sans-serif, cream/white text, high legibility. Voxel art texture on background. 1920x1080, 2K.
```

---

### F21 — Listening to VM5 — "Some Women Don't Really Want Children" | Beat 6 Pivot Peak | TURNING WARM ⭐

**F21A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's kitchen, now slightly warmer pre-dawn. Claire — cube-bodied voxel character, cream/sage — still at table, notepad now with several pages of notes visible. The sky outside: slightly less dark, faint warm edge at horizon. The room temperature is shifting — emotionally and visually. Something is becoming clear. Camera: isometric wide, window showing pre-dawn shift. Color palette: #2A1F35 warming toward #3D2B1F, lamp gold #D4A547, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire, VM5 moment — the worst one. Claire — cube-bodied voxel character, cream/sage, reading glasses — phone to ear, pen down. Expression: absolutely still. The kind of still that comes from hearing something that explains everything. Not crying. The professional is listening and understanding. Camera: 3/4 angle, Claire center, pre-dawn window behind. Color palette: pre-dawn warm-violet, lamp gold on face, cream. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21C** — Close-Up / ECU
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Phone screen showing VM5 transcription text. Displayed text: "Some women say they want children until they're actually faced with the reality. Claire strikes me as someone who uses her career as a substitute. I've told Owen what I've observed." — clean readable modern typography. Background: deep pre-dawn voxel texture #2A1F35, warm glow from one side. Font: cream/white sans-serif on dark, high contrast, legible. Voxel art background visible. 1920x1080, 2K.
```

---

### F22 — Claire's Written Log — Timestamps + Behavioral Correlations | Beat 6 Pivot | TURNING WARM

**F22A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's kitchen table at dawn, all the materials spread. Claire — cube-bodied voxel character, cream/sage — surrounded by her professional notebook, phone, printed pages, a written timeline. The first warm light is coming through the window. She has been here all night and has found the shape of it. Camera: isometric wide, full table visible, dawn window beginning to warm. Color palette: cream #F3E9D2 returning at window, lamp gold #D4A547, professional notes spread. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire at table, looking at completed written log. Claire — cube-bodied voxel character, cream/sage, reading glasses — sits back slightly, looking at the correlation chart she has built. Expression: clarity. Not triumph, not yet — but the specific calm of understanding. The log makes the pattern undeniable. Camera: 3/4 angle, Claire and table materials visible. Color palette: dawn warm light entering, lamp gold, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22C** — Close-Up / ECU
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Claire's written log closeup — handwritten-style entries with dates, times, behavioral notes, color-coded correlations. Visible entries: "8/14 — VM to Owen AM / Owen withdrawn by dinner [3.2hrs]", "11/23 — Thanksgiving VM / Children topic introduced by Owen [never discussed before]", "Pattern: 94% correlation, Renata call → Owen behavioral shift within 4 hours." Clean clinical handwritten aesthetic rendered in voxel art style. Background: warm cream page, golden morning light. 1920x1080, 2K.
```

---

### F23 — Claire Calls Owen — "Something You Should Hear" | Beat 6 Pivot | TURNING WARM

**F23A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's kitchen, morning, phone to ear. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses, posture composed and deliberate — stands at kitchen counter making a call. Warm morning light coming through window. The notebook and phone on counter beside her. She is ready. Camera: isometric wide, morning kitchen. Color palette: warm cream #F3E9D2 returning, morning gold #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire on phone call, deliberate and calm. Claire — cube-bodied voxel character, cream/sage, reading glasses — phone to ear, other hand on counter. Expression: measured, composed, the professional delivering information clearly. Not vengeful. Precise. Camera: 3/4 angle, Claire center, warm kitchen behind. Color palette: warm cream #F3E9D2, gold #D4A547 morning light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel portrait of Claire on the phone call, the moment she says the words. Claire — cube-bodied voxel character from reference, cream/sage, reading glasses — expression: steady, clear, certain. Dot eyes: level and calm. This is not the face of someone who is falling apart — it is the face of someone who has found solid ground under her feet. Camera: ECU portrait, warm morning light. Color palette: warm cream #F3E9D2, gold morning light #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F24 — Claire Hands Owen Phone, Leaves Room | Beat 6 Pivot | TURNING WARM ⭐

**F24A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of home entryway or living room — Owen has come to the house. Claire — cube-bodied voxel character, cream/sage, composed — stands near Owen — cube-bodied voxel character, charcoal grey, uncertain posture — and is handing him her phone. The living room visible behind them. Claire is already slightly turning to leave the room. Camera: isometric wide, both characters visible, moment of handoff. Color palette: warm cream #F3E9D2 returning, soft morning gold #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Medium 3/4 angle voxel shot of Claire handing phone to Owen. Claire — cube-bodied voxel character, cream/sage — extends phone toward Owen — cube-bodied voxel character, charcoal grey — who takes it, looking at her face. Claire's expression: calm and clear. Not cruel. Not triumphant. Just: "listen." She is already turning away before he takes it. Camera: 3/4 angle, handoff centered, both in frame. Color palette: warm cream #F3E9D2, gold light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Close-up ECU voxel shot of the handoff — Claire's hand releasing the phone into Owen's hand. Both hands visible in frame, phone between them, transferring. Claire's hand letting go. Owen's hand closing around it. No words needed. This single gesture contains everything. Camera: ECU on hands and phone, warm light. Color palette: warm cream #F3E9D2 skin tones, gold light #D4A547, phone screen faintly glowing. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F25 — Owen Listening Alone, Claire in Kitchen Cold Tea | Beat 7 Karma | COLD GRAY

**F25A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of home, split-space composition. Left: living room where Owen — cube-bodied voxel character, charcoal grey — sits on the couch, phone pressed to ear, listening, back hunched. Right: kitchen where Claire — cube-bodied voxel character, cream/sage — stands at counter, hands around a mug of cold tea, looking at nothing. Both are alone together. Camera: isometric wide, both spaces in one frame. Color palette: cold gray institutional #1F2937, Claire's cream and Owen's charcoal the only texture. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium voxel shot of Owen on the couch, phone to ear, listening to the voicemails. Owen — cube-bodied voxel character, charcoal grey — body folded forward slightly, elbow on knee, phone pressed hard to ear. Expression: absorbing something that is rewriting everything. The first voicemail is playing. Camera: 3/4 angle, Owen on couch, cold grey living room. Color palette: cold gray #1F2937, dim institutional light, charcoal. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel shot of Claire's hands around a mug of cold tea in the kitchen. The tea is cold — steam gone, surface flat. Claire's hands — cream-toned — wrapped around the mug, not drinking. Just holding. Waiting. The mug as a prop for her hands to have something to do while the world changes in the other room. Camera: ECU on hands and mug, cold grey light. Color palette: cold gray #1F2937, cream mug, pale hands. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F26 — Owen Finds Claire — "How Long Did You Know?" | Beat 7 Karma | COLD GRAY

**F26A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Wide isometric voxel shot of kitchen doorway moment. Owen — cube-bodied voxel character, charcoal grey, expression changed, phone in hand — stands in kitchen doorway looking at Claire — cube-bodied voxel character, cream/sage — who still stands at the counter. Distance between them. Owen has heard everything. Camera: isometric wide, doorway threshold visible, distance between them. Color palette: cold gray #1F2937, dim institutional light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium voxel shot of Owen in the kitchen doorway, phone held at side, after listening. Owen — cube-bodied voxel character, charcoal grey — expression: devastated, stripped, the specific look of someone who understands they were used as a weapon against the person they love. Dot eyes: hollow shock, but directed at Claire. He has heard his own mother's voice. Camera: 3/4 angle, Owen in doorway, cold gray room. Color palette: cold gray #1F2937, dim light, charcoal. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Extreme close-up ECU voxel portrait of Owen's face, post-listening. Owen — cube-bodied voxel character from reference — expression: the specific devastation of realizing you were a conduit for your parent's cruelty without knowing. Dot eyes: wide, searching, ashamed. Something breaking open. Camera: ECU portrait, cold gray institutional light. Color palette: cold gray #1F2937, dim flat light on face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F27 — Owen in Backyard on Call — Claire Watching Through Window | Beat 7 Karma | COLD GRAY ⭐

**F27A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of house exterior backyard view. Owen — cube-bodied voxel character, charcoal grey — visible in backyard, phone to ear, pacing slightly. Inside through window: Claire's figure faint but present, watching. The glass between them. The backyard: cold gray, institutional light, leafless tree or bare garden. Camera: isometric wide from outside, window with Claire's reflection visible. Color palette: cold gray #1F2937, institutional light, charcoal of Owen, cream of Claire behind glass. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium voxel shot of Owen in backyard, phone to ear, calling Renata. Owen — cube-bodied voxel character, charcoal grey — stands in backyard, posture changed: shoulders set, something decided. The call he is making is not gentle. Cold gray light. Window of the house visible behind him, Claire's silhouette faint through glass. Camera: 3/4 angle, Owen center, house window in background. Color palette: cold gray #1F2937, dim light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Close-up ECU voxel shot of Claire's face watching through the window, seeing Owen outside on the call. Claire — cube-bodied voxel character from reference, cream/sage — stands at the kitchen window, looking out. Expression: not triumph — witnessing. She did not orchestrate this moment. She only played a voicemail. But she watches it unfold. Dot eyes: steady, present, something quiet and still. Camera: ECU on Claire's face, window glass texture between camera and face, cold exterior light. Color palette: cold gray exterior #1F2937, interior slightly warmer, cream of Claire. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F28 — Owen's Face — "Her Own Number. Her Own Voice." | Beat 7 Karma | COLD GRAY ⭐

**F28A** — Wide / Establishing
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Wide isometric voxel shot of Owen re-entering the house from backyard, door behind him. Owen — cube-bodied voxel character, charcoal grey — stands just inside the back door, phone in hand at side. The call is over. His posture has the weight of what he has just said and heard. Cold gray institutional light inside. Camera: isometric wide, Owen near door, large empty kitchen around him. Color palette: cold gray #1F2937, charcoal, dim flat light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28B** — Medium Shot
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Medium 3/4 angle voxel shot of Owen standing with phone, post-confrontation call. Owen — cube-bodied voxel character, charcoal grey — holds the phone loosely, looking at nothing. Expression: the specific silence after you have told your mother what you know and what you have decided. Something settled, something grieving. Camera: 3/4 angle, Owen center, gray room. Color palette: cold gray #1F2937, charcoal, institutional flat light. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28C** — Close-Up / ECU
**Model**: Nano Banana 2 + owen-voxel-base.png

```
Extreme close-up ECU voxel portrait of Owen's face with the full comprehension. Owen — cube-bodied voxel character from reference — expression: the weight of "her own number. Her own voice." He heard his mother described his wife in those voicemails. His mother. His voice. The dot eyes: fractured, certain. Camera: ECU portrait, cold flat institutional light, gray. Color palette: cold gray #1F2937, flat cold light on face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F29 — No-Contact Order Document | Beat 7 Karma | COLD GRAY ⭐

**F29A** — Wide / Establishing
**Model**: Ideogram 3 (text/document)

```
IDEOGRAM 3 TEXT SCENE: Wide voxel shot of a desk surface with a formal legal-looking document on it. The document header: "Notice of No-Contact Agreement" — formal typography. Document on a cold gray desk, other items: pen, folded envelope, nearby coffee mug. Owen's hand partially visible at edge, just signed. The document is real, formal, undeniable. Background: cold gray institutional #1F2937 voxel desk surface. Font: formal document serif + clean sans, dark text on cream document paper. 1920x1080, 2K.
```

**F29B** — Medium Shot
**Model**: Ideogram 3 (text/document)

```
IDEOGRAM 3 TEXT SCENE: Medium angle voxel shot of no-contact document on desk, more visible. Document clearly shows formal structure: header "No-Contact Agreement", date, signatory lines, terms visible. A pen resting across it, just-signed. Cold gray desk, cold institutional light. Mood: legal, final, clean. Background: cold gray #1F2937 voxel texture. Document: cream white, formal typography, high legibility. 1920x1080, 2K.
```

**F29C** — Close-Up / ECU
**Model**: Ideogram 3 (text/document)

```
IDEOGRAM 3 TEXT SCENE: Extreme close-up of the no-contact document signature line and key text. Visible: "The undersigned agrees to cease all contact with [Claire]..." and a signature. The finality of ink on paper. Cold institutional light. Document cream white against cold gray #1F2937 surface. Typography: clean formal serif, readable, the weight of legal finality. 1920x1080, 2K.
```

---

### F30 — Renata Calling Diane + Marcus — Voicemails Forwarded | Beat 7 Karma | COLD GRAY

**F30A** — Wide / Establishing
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Wide isometric voxel shot of Renata in her home, alone, making calls. Renata — cube-bodied voxel character, cold burgundy/dark mauve, older proportions — sits at her precise tidy desk, phone in hand. But something is different from F07: her posture is slightly less controlled. She is making multiple calls, notepad in front of her. The campaign that worked on Owen is being deployed outward — except this time there is no Owen to receive it. Camera: isometric wide, Renata's tidy room. Color palette: cold gray institutional entering Renata's burgundy #8B1E2F space. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30B** — Medium Shot
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Medium voxel shot of Renata on the phone, campaign outreach mode. Renata — cube-bodied voxel character, cold burgundy — phone to ear, posture now slightly tense beneath the controlled surface. The control is slightly cracked here. She is calling family members with her version of events. Expression: performing distress, the victim narrative being constructed. Camera: 3/4 angle, Renata center, cold gray-burgundy room. Color palette: cold gray #1F2937, burgundy #8B1E2F. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30C** — Close-Up / ECU
**Model**: Nano Banana 2 + renata-voxel-base.png

```
Close-up ECU voxel portrait of Renata's face during the outreach calls, something off. Renata — cube-bodied voxel character from reference, cold burgundy — expression: the controlled precision is slightly cracked. The dot eyes: still calculating, but behind them something like the beginning of a person who did not get what they planned for. The smile she deploys is the same smile as F05C but now it lands differently. Camera: ECU portrait, cold institutional light. Color palette: cold gray #1F2937, cold burgundy. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F31 — Christmas Family Gathering — Warm, Renata Absent | Beat 7 Karma | WARMING

**F31A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a warm family home at Christmas, full gathering. Living room with Christmas tree glowing warm gold, family members around — voxel characters, various warm clothing, engaged in conversation and laughter. Table set in background with food. The gathering is full, warm, celebratory. One chair at the table: empty. Not prominently featured, but present. Camera: isometric wide, full celebratory room. Color palette: warm cream #F3E9D2 returning, Christmas gold #D4A547, warm reds and greens. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Medium voxel shot of Claire and Owen together at Christmas gathering. Claire — cube-bodied voxel character, cream/sage, warm — and Owen — cube-bodied voxel character, charcoal grey now with warmer accents — sit together, close but not performatively so. Natural warmth. Expression: something rebuilt, or beginning to rebuild. Family sounds around them. Camera: 3/4 angle, both visible, warm Christmas light. Color palette: warm cream #F3E9D2, gold Christmas light #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel shot of the empty chair at the family gathering table. Just the chair — warm wood-voxel, a place setting, but no one sitting. Around it: glasses with drinks, plates, the sounds of family implied by framing. The absence is noted but not mourned. The party continues. Camera: close on the empty chair, warm Christmas light, family celebration implied at edges. Color palette: warm cream #F3E9D2, gold #D4A547, warm celebration at frame edges. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F32 — Facebook Post — 1 Like, Victim Narrative | Beat 8 Downfall | NEUTRAL COOL

**F32A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a phone lying on a coffee table, Facebook-style social media post visible on screen. The room: neutral, quiet, daytime. No characters. Coffee table, couch in background, everyday. The phone screen glows with a social media post — low engagement visible. Ordinary and slightly sad. Camera: isometric wide, full room, phone on table. Color palette: neutral cool #374151, everyday ambient light, no drama. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32B** — Medium Shot
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Medium angle voxel shot of phone screen showing a Facebook-style post. Post text visible: "I never thought my own son would choose a stranger over his family. I only ever loved him. Praying for peace and healing during this difficult time. 🙏" — Posted by: Renata [surname]. Below: reaction count "1 like" — just one. Comment section: empty. The victim narrative, published, with almost no audience. Background: neutral cool voxel #374151. Font: social media style sans-serif, clean, realistic post format. 1920x1080, 2K.
```

**F32C** — Close-Up / ECU
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Extreme close-up of the Facebook post "1 like" detail. The like counter highlighted: just "1 ♥ 1" — barely visible against the post. The rest of the post text partially visible above. The comment section: "(0 comments)" visible. The performance with almost no audience. Maximum irony in minimum engagement. Background: neutral cool #374151 voxel texture. Typography: social media format, clean. 1920x1080, 2K.
```

---

### F33 — Claire Reads It — "Nothing Left to Prove" | Beat 8 Resolution | NEUTRAL COOL → WARM

**F33A** — Wide / Establishing
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Wide isometric voxel shot of Claire's home, morning, reading phone. Claire — cube-bodied voxel character, cream/sage blouse, reading glasses, hair neat — sits comfortably in a chair with coffee, phone in one hand. The room: returning warmth. She has just seen the Facebook post. Expression: utterly calm. No reaction. The warmth of morning around her. Camera: isometric wide, Claire in chair, warm morning room. Color palette: neutral cool #374151 transitioning to warm cream #F3E9D2, morning gold #D4A547 entering. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
Medium voxel shot of Claire showing phone to Owen nearby. Claire — cube-bodied voxel character, cream/sage — holds phone toward Owen — cube-bodied voxel character, charcoal grey with warm accents — who looks at it. Between them: the shared quiet of people who have been through something together and are now on the other side of it. Owen's expression: a slight exhale, a small shake of the head. Camera: 3/4 angle, both visible, warm morning light. Color palette: warm cream #F3E9D2 returning, gold #D4A547. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33C** — Close-Up / ECU
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Extreme close-up ECU voxel portrait of Claire's face, nothing left to prove. Claire — cube-bodied voxel character from reference, cream/sage, reading glasses — expression: clean, settled, done. Not cold. Not triumphant. Just: finished. The dot eyes: clear and at rest. This is what it looks like when someone no longer needs anything from a situation. Camera: ECU portrait, warm morning side-light. Color palette: warm cream #F3E9D2, gold morning light #D4A547 on face. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F34 — Epilogue: Clinical Supervisor Nameplate + Lunch Call + Voicemail Archive + Butterfly | Epilogue | FULL WARM ⭐

**F34A** — Wide / Establishing
**Model**: Ideogram 3 (text/nameplate)

```
IDEOGRAM 3 TEXT SCENE: Wide voxel shot of a warm professional office door, nameplate visible. Nameplate reads: "Claire [Last Name], LCSW — Clinical Supervisor" — engraved or printed, professional. The door: warm wood-toned voxel, gold door handle catching light. Hallway behind: warm cream walls, soft institutional gold light. This is the office she earned. The promotion visible. Background: full warm cream #F3E9D2 + gold #D4A547. Font: professional engraved nameplate serif, gold on dark background of plate. 1920x1080, 2K.
```

**F34B** — Medium Shot
**Model**: Nano Banana 2 + claire-voxel-base.png

```
Medium voxel shot of Claire at her Clinical Supervisor office desk, phone to ear — Owen's lunch call. Claire — cube-bodied voxel character, cream/sage professional blouse, reading glasses, composed — phone to ear, warm smile. On the desk: framed diplomas, a small plant, organized files. Through the window behind her: warm exterior light, sage #6B7F5A garden or trees visible. Expression: genuine warmth, the ease of someone whose life is built on solid ground. Camera: 3/4 angle, Claire and warm office visible. Color palette: full warm cream #F3E9D2, gold #D4A547, sage #6B7F5A accents. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34C** — Close-Up / ECU | BUTTERFLY CARD
**Model**: Ideogram 3 (text overlay)

```
IDEOGRAM 3 TEXT SCENE: Extreme close-up of a phone screen showing voicemail archive — all 8 voicemails still saved, labeled "Renata" with dates spanning 4 years. Beside the phone: a small card with a butterfly illustration. The card text: "🦋 Sometimes the evidence saves itself." — or simply a butterfly card with handwriting. The voicemails still there, kept, not deleted. The archive as quiet power. Background: full warm gold #D4A547 voxel surface, sage green #6B7F5A accent. Font: clean modern, voicemail UI style + handwritten card aesthetic. 1920x1080, 2K.
```

---

---

## 15 KEN BURNS STILLS — S01 through S15

> **System**: Ken Burns = single high-quality still → CapCut slow zoom/pan. No character motion. Pure atmosphere.
> **Model**: Nano Banana 2 (character stills) or Flux 2 Pro (environment stills) or Ideogram 3 (text stills)
> **Duration note**: Duration listed = CapCut Ken Burns timing reference, not gen parameter

---

### S01 — Claire's Face "Window-Watcher" Realization | Beat 4 | DARK COLD | 20s Ken Burns

**Model**: Nano Banana 2 + claire-voxel-base.png

```
High-quality single still voxel portrait of Claire's face — the "window-watcher for four years" realization. Claire — cube-bodied voxel character from reference, cream/sage blouse, dark hair, no glasses — face in deep cold navy light #0B1426. Expression: the specific devastation of comprehension that arrives quietly. Not crying. Not rage. The understanding of four years viewed through someone else's lens. Dot eyes: wide, still, hollow with the enormity of realized surveillance. Cold navy #0B1426 dominates. Cream of her face as only warmth. No motion — single perfect still for slow Ken Burns zoom. Ratio 16:9, 2K. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic.
```

---

### S02 — Community Garden — Claire + Owen | Beat 2 | WARM | 15s Ken Burns

**Model**: Nano Banana 2 + claire-voxel-base.png + owen-voxel-base.png

```
High-quality single still wide voxel shot of community garden, Claire and Owen. Claire — cube-bodied voxel character, cream/sage — and Owen — cube-bodied voxel character, warm charcoal grey — stand among raised garden beds, afternoon gold light. The warmth of before: easy body language, open, happy. Garden: voxel vegetables, brick paths, golden light filtering through. Mood: everything that was possible, before. Single perfect still, no motion. Ratio 16:9, 2K. Warm cream #F3E9D2 + gold #D4A547 palette. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic.
```

---

### S03 — Owen's Wedding Photo on Work Desk | Beat 2 | WARM | 15s Ken Burns

**Model**: Flux 2 Pro

```
High-quality single still voxel shot of Owen's structural engineering work desk. A framed wedding photo prominently visible: two voxel figures, blurred but warm, in wedding attire, clearly happy. Around the photo: blueprints, drafting tools, coffee mug, desk lamp. Warm professional desk light. The photo is the focal point — warmth of a life that was real. Single perfect still for slow Ken Burns pan. Ratio 16:9, 2K. Warm cream #F3E9D2 + gold #D4A547 palette. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic.
```

---

### S04 — Renata First Meeting Smile — Something Slightly Off | Beat 2 | WARM FADING | 10s Ken Burns

**Model**: Nano Banana 2 + renata-voxel-base.png

```
High-quality single still voxel portrait of Renata's smile at the first meeting — the controlled smile that is not quite right. Renata — cube-bodied voxel character from reference, cold burgundy #8B1E2F clothing, older proportions — smiling with mouth and not eyes. The dot eyes: watchful, calculating, beneath the warm-surface expression. The warmth of the room behind her is real; the warmth of the smile is performed. This is the moment before the audience understands what they are looking at. Single perfect still. Ratio 16:9, 2K. Warm fading at edges, burgundy entering. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic.
```

---

### S05 — Renata Low Voice to Owen in Living Room | Beat 3 | COOL | 15s Ken Burns

**Model**: Nano Banana 2 + renata-voxel-base.png

```
High-quality single still voxel shot of Renata leaning close to Owen's direction in the living room, low-voiced. Renata — cube-bodied voxel character, cold burgundy, older proportions — body angled toward Owen (off-frame), face in profile, lips slightly parted in quiet deliberate speech. The living room: cooling from warm to grey-cool. This is the campaign, visible for what it is. Territorial presence in another person's home. Single perfect still. Ratio 16:9, 2K. Cool grey entering, burgundy #8B1E2F dominant. Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic.
```

---

### S06 — Claire's Written Log — Timestamps Correlated | Beat 6 | TURNING WARM | 20s Ken Burns ⭐

**Model**: Ideogram 3 (text/document)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of Claire's written log spread on table, lamp-lit. The log visible: handwritten-style clinical entries, timestamps, behavioral correlations, color-coded annotations. Key entries legible: dates, times, behavioral shift notations, percentage correlation noted at bottom. The document is the evidence that changes everything. Warm lamp light #D4A547 on the document, pre-dawn #2A1F35 surrounding. Single perfect still for slow Ken Burns zoom in on key entries. Ratio 16:9, 2K. Clean premium voxel art background, document in clinical font. Astroneer meets Crossy Road aesthetic.
```

---

### S07 — Phone Voicemail Archive — 8 Messages Saved | Beat 5 | DARK | 15s Ken Burns

**Model**: Ideogram 3 (text/screen)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of phone screen showing voicemail archive. All 8 voicemails visible in list: "Renata" as caller name, dates spanning 4 years, some starred/saved. The archive list is clear and readable. Phone on dark surface, cold phone glow as only light source. This is the evidence before it becomes power. Single perfect still. Ratio 16:9, 2K. Dark navy #0B1426 surrounding, cold screen glow on phone, voicemail UI clean and legible. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S08 — VM3 Text on Screen — "Not Built for Closeness" | Beat 6 | TURNING WARM | 20s Ken Burns ⭐

**Model**: Ideogram 3 (text/screen)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of phone screen showing VM3 transcription text prominently. Text displayed in clean typography: "She's simply not built for the kind of closeness our family needs. Owen deserves someone who prioritizes family above everything." — Renata's voice, in text, on screen. Pre-dawn warm-violet voxel background #2A1F35 around phone, warm lamp glow from one side turning the scene. Single perfect still for slow Ken Burns zoom into text. Ratio 16:9, 2K. Clean modern sans-serif, cream text on dark, high legibility. Voxel art texture visible. Astroneer meets Crossy Road aesthetic.
```

---

### S09 — VM5 Text on Screen — "Some Women Say They Want Children..." | Beat 6 | TURNING WARM | 25s Ken Burns ⭐

**Model**: Ideogram 3 (text/screen)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of phone screen showing VM5 transcription text, the most damning. Text displayed prominently: "Some women say they want children until they're actually faced with the reality. Claire strikes me as someone who uses her career as a substitute. I've told Owen what I've observed." — full text visible, clean, readable. This is the voicemail that explains the Thanksgiving conversation. Pre-dawn #2A1F35 background warming toward dawn. Single perfect still for slow Ken Burns zoom — slowest pan, 25s, most important text. Ratio 16:9, 2K. Clean modern sans-serif, cream/white on dark, maximum legibility. Astroneer meets Crossy Road aesthetic.
```

---

### S10 — Owen in Backyard on Phone, Claire Through Window | Beat 7 | COLD GRAY | 20s Ken Burns

**Model**: Flux 2 Pro

```
High-quality single still voxel shot from inside, looking through kitchen window to backyard. Owen — cube-bodied voxel character, charcoal grey — visible in backyard through window glass, phone to ear, back slightly turned. Claire's reflection faint in the window glass — watching. The glass between inside and outside. Cold gray institutional #1F2937 throughout. The geometric division of the window frame. Single perfect still — slow Ken Burns push toward window. Ratio 16:9, 2K. Cold gray #1F2937, dim flat light, charcoal of Owen through glass. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S11 — No-Contact Order Document | Beat 7 | COLD GRAY | 20s Ken Burns ⭐

**Model**: Ideogram 3 (text/document)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of no-contact order document, centered on desk. Document: "No-Contact Agreement" header, formal legal structure, key terms visible, signature line with signature present. Cold gray institutional desk surface #1F2937. A pen resting on the document. The document is the formal end. Clean, legal, undeniable. Single perfect still for slow Ken Burns zoom into signature. Ratio 16:9, 2K. Document cream white, formal serif typography, cold gray voxel surrounding. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S12 — Christmas Gathering — Family, Renata Seat Empty | Beat 7 | WARMING | 20s Ken Burns ⭐

**Model**: Flux 2 Pro

```
High-quality single still voxel shot of Christmas family gathering, wide. Living room full of family voxel characters in warm holiday light. Christmas tree glowing gold #D4A547. Table set in background — one chair empty, place setting present but no occupant. The warmth of the room: genuine. The gathering: real. The empty chair: noted without being mourned. Single perfect still — slow Ken Burns wide to zoom on empty chair. Ratio 16:9, 2K. Full warm cream #F3E9D2 + Christmas gold #D4A547 + warm reds, the single note of the empty chair. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S13 — Facebook Post — Victim Narrative, 1 Like | Beat 8 | COOL | 15s Ken Burns

**Model**: Ideogram 3 (text/screen)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of phone screen showing the Facebook post in full. Post: "I never thought my own son would choose a stranger over his family. I only ever loved him. Praying for peace and healing during this difficult time. 🙏" — Posted: Renata. Reactions: "1 ♥" — one like. Comments: 0. The entire post visible, the low engagement undeniable. Neutral cool voxel background #374151. Single perfect still — slow Ken Burns zoom into the "1 like" detail. Ratio 16:9, 2K. Social media UI typography, clean modern, clean legibility. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S14 — Clinical Supervisor Nameplate on Office Door | Epilogue | FULL WARM | 15s Ken Burns

**Model**: Ideogram 3 (text/nameplate)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of warm office door with Clinical Supervisor nameplate. Door: warm wood-voxel #D4A547 gold-touched, nameplate centered: "Claire [Last Name], LCSW — Clinical Supervisor" — professional engraved. Gold door handle catching warm light. Hallway behind: cream #F3E9D2 walls, sage #6B7F5A plants visible at edge. The door she earned. Single perfect still — slow Ken Burns zoom toward nameplate. Ratio 16:9, 2K. Full warm cream + gold #D4A547 + sage #6B7F5A. Clean premium voxel art. Astroneer meets Crossy Road aesthetic.
```

---

### S15 — Phone Voicemail Archive — All 8 Still Saved | Epilogue | FULL WARM + Sage | 40s Ken Burns ⭐

**Model**: Ideogram 3 (text/screen)

```
IDEOGRAM 3 TEXT SCENE: High-quality single still voxel shot of phone screen showing voicemail archive in the epilogue light. All 8 voicemails from "Renata" still saved — dates visible, all present, kept. Not deleted. The archive as quiet archive of truth that needed no action — it existed, it mattered, it was enough. Phone on warm gold #D4A547 surface, sage #6B7F5A accent nearby. The voicemail list: warm, lit, full warm color. Beside the phone: a small butterfly card visible at edge. The longest Ken Burns — 40s, slowest zoom toward the list. Full warm #D4A547 + sage #6B7F5A. Ratio 16:9, 2K. Clean voicemail UI, legible entries, warm voxel art background. Astroneer meets Crossy Road aesthetic.
```

---

## Quick Reference — Frame Count

| Type | Count |
|------|-------|
| Scene frames F01A–F34C | 102 frames |
| Ken Burns stills S01–S15 | 15 stills |
| **TOTAL** | **117 images** |

## DUTCH Angle Scenes (betrayal zone only)
- F12B, F13B, F13C, F14B, F15B

## Ideogram 3 Text Scenes
F13C, F20C, F21C, F22C, F29A/B/C, F32B/C, F34A/C, S06, S07, S08, S09, S11, S13, S14, S15

## Freepik Setup Reminder
- Ratio: **16:9**
- Resolution: **2K**
- AI Enhance: **OFF**
- Save naming: `F01A.png` ... `F34C.png`, `S01.png` ... `S15.png`
