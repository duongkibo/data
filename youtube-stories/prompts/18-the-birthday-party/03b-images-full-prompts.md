# 03b — Full Image Generation Prompts
# EP18 "The Birthday Party" — F01A through F34C (102 prompts) + S01–S15 (15 Ken Burns stills) = 117 total
# Copy-paste directly into Freepik — self-contained, no external reference needed

> **System**: Each scene = 3 start frames (A = Wide/Establishing, B = Medium, C = Close-Up/ECU)
> **Setup**: Ratio 16:9 · Resolution 2K · AI enhance OFF
> **Save**: media/images/F01A.png, F01B.png, F01C.png … F34C.png · S01.png … S15.png

---

## Characters

- **Vivian** — cube-bodied voxel female, 35, deep emerald dress (party), cream blouse/dark trousers (everyday), dark hair swept back in chignon, small gold earrings, composed authority. Ref: vivian-voxel-base.png
- **Daniel** — cube-bodied voxel male, 38, dark navy blazer, open-collar dress shirt, side-swept dark hair, broad-shouldered, crowd-pleasing ease. Ref: daniel-voxel-base.png
- **Claire** — cube-bodied voxel female, late 20s, dark coat, visibly pregnant silhouette, expression of irreversible decision
- **Petra** — cube-bodied voxel female, 30s, warm auburn tones, champagne flute
- **Rosalie** — cube-bodied voxel female, 60s, silver hair, steel-blue cardigan, disapproving bearing

---

## Model Routing

| Model | Use for |
|-------|---------|
| **Nano Banana 2 + vivian ref** | F01, F02, F06(C), F08, F09, F10, F11, F12, F14, F17, F18, F19, F20, F21, F30, F31, F32, F33 |
| **Nano Banana 2 + daniel ref** | F03, F04, F07, F09, F10, F13, F22, F28, F29 |
| **Nano Banana 2 + both refs** | F09, F10, F20 (both characters in frame) |
| **Flux 2 Pro** | F01(env), F05, F06(A/B), F15, F16, F19(env), F23, F25, F27, F34(env) |
| **Ideogram 3** | F24, F26, F28(C), F34(card) |
| **Seedream 4.5** | F06(atmosphere), F19(kitchen floor) |

---

## Color Arc Reference

| Frames | Beat | Palette |
|--------|------|---------|
| F01–F03 | Beat 1–2 | WARM cream #F3E9D2 + gold #D4A547 |
| F04–F08 | Beat 3 | WARM fading → cool slate #3B82F6 undertones |
| F09–F17 | Beat 4–5 | DARK COLD navy #0B1426 (betrayal / fall) |
| F18–F21 | Beat 6 | NEUTRAL TURNING WARM #C4B9A8 |
| F22–F28 | Beat 7 | NEUTRAL → WARMING #D4A547 muted |
| F29 | Beat 8 | COOL GRAY #1F2937 |
| F30–F34 | Epilogue | FULL WARM #D4A547 + sage #6B7F5A |

---

## DUTCH Tilt Rules

- **DUTCH applied to**: F09B, F09C, F10B, F10C, F11B — door arrival betrayal zone ONLY
- **ABSOLUTELY NO DUTCH**: F01–F08, F18 onward (epilogue must be stable and grounded)

---

## VOXEL STYLE TAG (included in every prompt)

> "Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K."

---

## 102 START FRAMES — F01 through F34

---

### F01 — Hawthorn & Co. Office, Vivian at Her Desk | Beat 1–2 | WARM

**F01A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a boutique event planning firm — Hawthorn & Co. Warm, creative office space. Clean voxel desks with mood boards, color swatches pinned to a wall panel, floral reference prints. A tall bookshelf with fabric samples and event binders. Large windows with warm cream curtains, morning gold light streaming in. A single prominent voxel figure at the central desk — back to us, working at a monitor. The office has the organized energy of someone who makes things beautiful for a living. Camera: isometric 45-degree overhead, full room. Color palette: warm cream #F3E9D2 walls, gold morning light #D4A547, sage accent plants. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium cinematic voxel shot of Vivian — cube-bodied voxel character from reference, deep emerald dress or cream blouse, dark hair swept back in chignon, gold earrings — at her desk in the Hawthorn & Co. office. Camera at desk level, 3/4 angle. She is reviewing a large printed event floor plan laid across her desk, stylus in one hand, notepad beside her. Her expression: focused, assured — she knows exactly how every piece of the room will land. Morning gold light from windows on her left. Color palette: warm cream #F3E9D2, gold #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel portrait of Vivian's face — cube-bodied voxel character from reference, dark hair swept back, gold earrings. Face fills most of frame. Her expression: the composed certainty of a woman who has planned a thousand rooms and knows what she is doing. Eyes sharp, attentive. Warm morning gold light from the left. She is entirely in her element here. Color palette: warm cream #F3E9D2 skin tones, gold #D4A547 morning light highlights. Background: soft warm office blur. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F02 — Vivian Getting Ready — Emerald Dress | Beat 2 | WARM GOLD

**F02A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of an elegant master bedroom — Vivian getting ready for her birthday party. The room: warm cream walls, gold bedside light, a full-length mirror. Vivian — cube-bodied voxel character from reference, deep emerald dress — standing before the mirror, adjusting her hair. On the bed: a small evening clutch, a gift card. The closet behind her is open — the dress was the clear choice tonight. Camera: isometric 45-degree overhead. Color palette: warm cream #F3E9D2, gold ambient, emerald accent from the dress. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, deep emerald fitted dress, dark hair swept back in chignon, small gold earrings — standing before a full-length mirror in her bedroom. 3/4 angle. She is looking at herself with the calm of someone who has chosen exactly what she is wearing and means it. The emerald is deliberate. She looks like a woman who expects the night to mean something. Warm gold light from bedside lamp. Color palette: gold #D4A547 ambient, emerald dress dominant, cream room. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02C** — Close-Up / Detail
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up ECU voxel detail of Vivian's earring — a small gold loop at her cube-shaped ear, warm light catching it. Her dark hair swept back in chignon just above it. The gold earring is the detail that says: she dressed for tonight on purpose. Warm bedroom light. Color palette: gold #D4A547 dominant, cream background. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F03 — Daniel Working the Room at a Prior Event | Beat 2 | WARM PARTY GOLD

**F03A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Wide isometric voxel shot of a corporate event or dinner party — Daniel in his natural habitat. A warm-lit room, round tables with event linen, voxel guests milling about with drinks. Daniel — cube-bodied voxel character from reference, dark navy blazer, open-collar shirt — stands center of frame, arms open, mid-laugh with three guests. He commands the room the way a confident host does — effortlessly, visibly. Camera: isometric 45-degree overhead. Color palette: warm party gold #D4A547, amber ambient light, cream linens. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, dark navy blazer, open-collar dress shirt — laughing with two voxel guests at a party. Camera at table level, 3/4 angle. He has a drink in one hand and has placed his other hand warmly on the shoulder of a guest. His smile is wide, genuine-looking, practiced. He is, undeniably, charming. Warm party amber light. Color palette: warm party gold #D4A547, warm amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03C** — Close-Up / Detail
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Close-up voxel detail — Daniel's phone lying face-down on a table at the event. His blazer sleeve visible beside it. The phone is conspicuously placed face-down in the middle of what seems to be a social moment. A single detail that tells a story without the story being explicit yet. Warm ambient event light. Color palette: warm gold, dark phone screen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F04 — November — Daniel's Late Nights, Phone in Hand | Beat 3 | COOL SLATE ENTERING

**F04A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of an office building exterior at night. The building is mostly dark — only a few upper floors lit. A car park below, one car remaining. Cold blue-slate sky. The city at night around it. This is 9 PM on a Thursday, and whoever is still in that building is staying by choice. Camera: isometric 45-degree overhead. Color palette: cold slate #3B5E8A, night navy, single warm window glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, navy blazer, loosened tie — walking through a parking lot at night, phone in hand, reading a message. The lot is nearly empty. He doesn't look up. His expression: something between anticipation and conflict. Cold blue-slate night light. Color palette: cold slate #3B5E8A, night shadows, warm phone screen glow in his hand. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Extreme close-up ECU voxel shot of Daniel's hand holding a phone — the screen glowing, a message thread visible on it, but the text deliberately obscured or out of focus. His cube-shaped fingers lit warm by the screen against the cold parking lot dark around him. The content is hidden. The fact that he is reading it is not. Cold slate night ambient. Color palette: cold slate #3B5E8A, warm screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F05 — Hotel Receipt — The Arden Grand | Beat 3 | COOL NEUTRAL ⭐

**F05A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a dry-cleaning shop parking lot — daytime, gray winter sky. A single car in the lot. A voxel figure standing beside it, looking down at something in her hands. The dry cleaner storefront behind her — clean voxel signage, window display. The figure is small in the frame. What she is holding is what matters. Camera: isometric 45-degree, full lot visible. Color palette: cool neutral gray, winter slate sky, cream shop frontage. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, everyday cream blouse, dark trousers — standing in a parking lot, holding a small white paper receipt. She is looking at it. She has been looking at it for a while. Her posture is very still. Around her: the parking lot, her car, ordinary midday quiet. Nothing dramatic. But she is not moving. Camera: medium level, facing her. Color palette: cool neutral gray, cream blouse warm accent. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05C** — Close-Up / Detail ⭐
**Model**: Ideogram 3

```
Extreme close-up of a voxel-style hotel receipt in Vivian's hand — paper slightly creased from a coat pocket. Receipt design: clean printed format. Clear readable text at the top: "ARDEN GRAND" in elegant voxel serif font. Below: "Room: Superior Queen — 1 Night". Date: a Tuesday in December. Room charge: $289.00. Below that: "Paid — Credit card ending 4411." No name of the guest visible. The absence of the name is the detail. Voxel paper texture. Warm receipt paper tone against a neutral background. TEXT MUST BE FULLY READABLE: "ARDEN GRAND" · "1 Night" · "Tuesday". Style: clean voxel document aesthetic. 1920x1080, 2K.
```

---

### F06 — Party Setup — White Linen, Tall Candles, La Table du Soir | Beat 3 | WARM GOLD

**F06A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of an elegant home prepared for a dinner party. The main living and dining rooms opened up — white linen on round tables, tall white taper candles in silver holders, fresh white floral arrangements in tall vases, champagne coupes arranged on silver trays. La Table du Soir catering aesthetic — refined, warm. Through windows: city evening light softening into gold. Forty chairs arranged, staff moving in background. Camera: isometric 45-degree overhead. Color palette: warm gold #D4A547, cream linens, silver highlights, candlelight orange-amber accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the party table centerpiece — white taper candles, three of them, in polished silver holders, lit and burning. Around them: a low white floral arrangement, a few champagne coupes on the linen. The setup is beautiful. Expensive and tasteful. Shot from the height of someone standing at the table edge looking at the centerpiece. Warm candlelight glow. Color palette: warm gold ambient, white and silver, cream linen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06C** — Close-Up / Detail
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up voxel shot — a catering staff voxel figure (white uniform top, neutral professional) placing a final champagne coupe onto a silver tray. Vivian's hand — cube-shaped, emerald dress sleeve visible — adjusting a nearby floral stem with the ease of a woman who has overseen hundreds of these setups and trusts her own eye. The preparation is complete. The party is ready. Warm candlelight glow. Color palette: warm gold, cream, silver. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F07 — Daniel Working the Room at 8 PM | Beat 3 → 4 | WARM GOLD

**F07A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Wide isometric voxel shot of the birthday party at full momentum — 8 PM. Forty voxel guests in the rooms, conversations, laughter, champagne. Daniel — cube-bodied voxel character from reference, dark navy blazer — visible center-left of frame, moving between guest groups. He is the host in motion. The candles are burning. The party is beautiful. Camera: isometric 45-degree overhead. Color palette: warm party gold #D4A547, amber candlelight, cream room. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, navy blazer — at the center of a guest group. His hand on the shoulder of one guest, his drink raised slightly in a toast gesture. He is performing generosity. The guests around him are laughing. He is the reason. Camera: table level, 3/4 angle. Warm party candlelight. Color palette: warm gold #D4A547, amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Extreme close-up ECU voxel shot of Daniel's face — cube-bodied voxel character from reference — mid-laugh at the party. Warm candlelight. But there is something in his expression, visible only at this proximity: a very slight tension around the eyes. The laugh is real, but there is a secondary awareness running behind it. He is tracking the door without looking at it. Warm gold light. Color palette: warm gold ambient, his navy blazer visible at the edges. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F08 — Vivian Talking to Petra — Champagne, Pre-8:47 | Beat 3 → 4 | WARM GOLD

**F08A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the party — Vivian and Petra visible at the right side of the room, near a window. Vivian — cube-bodied voxel character from reference, emerald dress — stands with a champagne coupe, talking to Petra (cube-bodied voxel figure, warm auburn tones, champagne flute). Other guests in background. The room is warm, golden, full. This is the last good moment. Camera: isometric 45-degree overhead. Color palette: warm gold #D4A547, candlelight amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, emerald dress, dark hair in chignon, gold earrings — talking to Petra (cube-bodied voxel, auburn warm tones, champagne). Vivian is relaxed here. Her posture is open. She is laughing at something Petra has said. This is what comfort looks like. Camera: at eye level, 3/4 angle. Warm candlelight. Color palette: warm gold #D4A547, amber, emerald dress. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel portrait of Vivian's face — cube-bodied voxel character from reference, emerald dress at the edges. She is smiling. Her eyes are easy. This is genuinely Vivian at the party — not performing, just present. Warm gold candlelight catching the side of her face. This is the last frame before everything changes. Color palette: warm gold #D4A547, emerald green accent from her dress. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F09 — 8:47 PM — Claire at the Door | Beat 4 | DARK COLD ⭐ BETRAYAL PEAK

**F09A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png + Claire inline

```
Wide isometric voxel shot of the party from above — the room at full golden warmth, forty guests mid-conversation. The front door is open at the far side of the frame. In the doorway: a single voxel figure — Claire, cube-bodied, late 20s, dark coat, visibly pregnant silhouette — standing at the threshold. The room's warmth meets her cold. Guests nearest the door have registered her. A wave of noticing moving through the room. Camera: isometric 45-degree overhead. Color palette: the room warm gold #D4A547, the door and Claire cold navy #0B1426 encroaching. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09B** — Medium Shot — DUTCH ⭐
**Model**: Nano Banana 2 + Claire inline

```
Medium voxel shot of Claire — cube-bodied voxel figure, late 20s, dark coat, visibly pregnant — standing in the doorway of the home. DUTCH TILT — camera tilted 12 degrees. Her expression: someone who has made a decision they cannot unmake. She is looking into the party. She did not expect this to be easy. She does not look triumphant. She looks like someone who came here because she had no other option. Cold exterior light behind her, party warmth in front of her. Color palette: cold navy #0B1426 from outside, warm amber from within. DUTCH angle. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + Claire inline

```
Extreme close-up ECU voxel shot of the party interior — guests, candles, the beauty of the room — from Claire's perspective in the doorway. DUTCH TILT — camera tilted 12 degrees. The room seen from her vantage: warm, organized, real. All forty people. The candles. The white linen. This is what she walked into. The Dutch tilt communicates the wrongness of her presence not as blame but as structural — the geometry of this situation is off. Color palette: warm gold #D4A547 from inside, cold dark framing from the doorway edge. DUTCH angle. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F10 — Daniel Goes White | Beat 4 | DARK COLD ⭐

**F10A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png + vivian-voxel-base.png

```
Wide isometric voxel shot of the party room — Daniel (cube-bodied voxel from reference, navy blazer) visible across the room in background, frozen mid-gesture, his drink still raised. In the mid-ground: Vivian (cube-bodied voxel from reference, emerald dress) has turned. In the foreground: some guest shapes looking toward the door. The spatial story tells it all: Daniel has seen Claire. He has stopped. Camera: isometric 45-degree overhead. Color palette: warm gold collapsing — dark cold navy #0B1426 entering. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10B** — Medium Shot — DUTCH ⭐
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, navy blazer — his face in the moment he sees Claire at the door. DUTCH TILT — camera tilted 15 degrees. The blood has left his face. His drink is still raised but he has forgotten it is there. His expression: the specific collapsed look of a man whose two worlds have just collided in a room he organized. Dark cold light overtaking the warm party ambient. Color palette: cold navy #0B1426, the warm party gold retreating. DUTCH angle. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10C** — Close-Up / ECU — DUTCH
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian's eyes — cube-bodied voxel character from reference, emerald dress — watching Daniel watching the door. DUTCH TILT — camera tilted 12 degrees. Her eyes are tracking something off-frame (Daniel, then the door). The recognition is happening. She is watching his face and understanding. She has not moved yet. Her expression is very still — the stillness before the decision. Dark cold ambient. Color palette: cold navy #0B1426 dominant, emerald from her dress. DUTCH angle. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F11 — Vivian Walks to the Door | Beat 4 | DARK COLD ⭐

**F11A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the party room — silence beginning to radiate. Vivian — cube-bodied voxel character from reference, emerald dress — walking from where she stood toward the door. The forty guests are parting slightly as she moves. Nobody is speaking. Daniel is frozen across the room. Vivian is walking. She is unhurried. This walk is the whole story. Camera: isometric 45-degree overhead, full room visible. Color palette: cold navy #0B1426 dominant, remaining party gold only at the farthest edges. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11B** — Medium Shot — DUTCH ⭐
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, emerald dress, dark hair in chignon — walking toward the door, shot from behind and slightly to the side. DUTCH TILT — camera tilted 10 degrees. Her posture: spine straight, shoulders level, absolutely unhurried. The Dutch tilt communicates the wrongness of the situation — but Vivian's posture refuses it. She is walking through an impossible moment with her back perfectly straight. Color palette: cold navy #0B1426. DUTCH angle. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png + Claire inline

```
Close-up voxel shot — Vivian's hand extended toward Claire, palm open in greeting. Behind the hand: Vivian's emerald sleeve. Claire's dark-coated figure slightly out of focus behind. The hand says everything: I am Vivian. You must be Claire. Come in. Color palette: cold navy #0B1426, emerald accent from sleeve. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F12 — Vivian Leads Claire Inside, Offers Water | Beat 4 | DARK COLD ⭐ THE KEY FRAME

**F12A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png + Claire inline

```
Wide isometric voxel shot — Vivian (cube-bodied voxel from reference, emerald dress) guiding Claire (cube-bodied voxel, dark coat, pregnant) gently through the party room toward a seat. Forty voxel guests in absolute silence watching. Every face turned. Nobody speaks. Vivian's pace: measured, guiding. The room watches. Camera: isometric 45-degree overhead. Color palette: cold navy #0B1426, the party gold completely gone now. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png + Claire inline

```
Medium voxel shot — Vivian holding a glass of water, handing it to Claire who is now seated in a chair near the wall. Vivian's posture: attentive, calm, nothing performative about it — she is just doing the next necessary thing. Claire's expression: shell-shocked, clearly not prepared for this specific response. The room is silent around them. Color palette: cold navy #0B1426, soft domestic light near the chair. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel portrait of Vivian's face — cube-bodied voxel character from reference, emerald dress — in the moment after she has handed the water to Claire. Her expression: completely composed. Not cold — composed. There is no anger visible. No satisfaction. Just presence. She is in the worst moment of her marriage and she is still the most capable person in the room. Cold dark ambient light. Color palette: cold navy #0B1426, emerald from dress. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F13 — Daniel Across the Room, Frozen | Beat 4 → 5 | DARK COLD

**F13A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Wide isometric voxel shot of the party room — Daniel (cube-bodied voxel from reference, navy blazer) visible far across the room, very small in frame. The room between him and the door where Vivian and Claire are is filled with silent guests. He cannot move. He has no exit. Camera: isometric 45-degree overhead. Color palette: cold navy #0B1426. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, navy blazer — across the party room, standing still. He is watching Vivian lead Claire inside. His expression: a man calculating in real time and finding no viable exit. His drink is still in his hand. He has not moved in two minutes. The performance has fully stopped. Color palette: cold navy #0B1426. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Extreme close-up ECU voxel of Daniel's hand — cube-shaped fingers still holding his champagne coupe. But he is not drinking. His grip has tightened slightly. The phone is in his other pocket — he cannot reach for it. He is exposed and he knows it. Cold dark ambient. Color palette: cold navy #0B1426, dark blazer. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F14 — Vivian Saying Goodbye to Guests — End of the Evening | Beat 5 | DARK COLD

**F14A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the front entryway — late evening. Most guests are filing out. Vivian — cube-bodied voxel character from reference, emerald dress, still perfect — stands at the door, receiving hugs, shaking hands. The room behind her is already being cleared by catering staff. She is completing the evening. Camera: isometric 45-degree overhead. Color palette: cold navy #0B1426 transitioning, a little warmer near the door amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, emerald dress — embracing Petra at the door as she leaves. Petra (auburn warm tones) is holding Vivian tightly. Her expression: worried, present, protective. Vivian's expression: she is receiving the hug and she is okay. She is holding it together. Camera: at eye level. Transitioning warm light near the door. Color palette: dark cold transitioning to door-warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian's face at the door — cube-bodied voxel character from reference — as the last guests leave. She is still composed. There is a very slight tightening around her eyes — the face of someone who has been holding something for three hours and is nearly at the end of the room. She has not broken. She will not break here. Color palette: dark transitioning cold, door amber edge light on her face. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F15 — Empty Party Room After Guests Leave | Beat 5 | DARK COLD

**F15A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of the party room after everyone has gone — the catering team has already cleared, but the party itself is still faintly visible. Tables half-cleared. White linen slightly disturbed. Tall candles burned all the way down to stubs in their silver holders. Floral arrangements still standing, still perfect. The room is beautiful and empty. Camera: isometric 45-degree overhead. Color palette: cold navy #0B1426, candle-end amber glow still faint. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium voxel shot of the candle centerpiece at the end of the party — three tall white tapers burned almost completely down, flames still small and guttering. Wax pooled in the silver holders. Around them: the half-cleared table, an abandoned napkin, a champagne coupe with lipstick on the rim. The party happened. It is over. Cold dark ambient. Color palette: cold navy #0B1426, candle amber faint. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel of a champagne coupe — lipstick mark on the rim, half-full. Someone set it down mid-party and did not come back for it. The candle behind it has burned down. This is the physical record of the evening. Dark cold ambient. Color palette: cold navy #0B1426, champagne coupe gold-glass, lipstick red on rim. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F16 — Daniel Near the Kitchen — Waiting | Beat 5 | DARK COLD

**F16A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of the home interior — Daniel (cube-bodied voxel, navy blazer) standing near the kitchen entrance. The living space empty around him. The party gone. The room cold and dark. He is standing, not sitting — the posture of a man who does not know what he is permitted to do. Camera: isometric 45-degree overhead. Color palette: cold navy #0B1426. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, navy blazer — standing near the kitchen entrance. He is waiting. His arms are at his sides. He is watching the hallway toward the bedroom. His expression: the look of a man who has been caught and is now waiting to find out which version of being caught this will be. Cold dark ambient. Color palette: cold navy #0B1426. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Extreme close-up ECU voxel of Daniel's face — cube-bodied voxel character from reference — waiting in the dark empty room. He is not crying. He is not angry. He is blank in the way a person goes blank when the performance they have maintained for months has simply run out of material. Cold dark. Color palette: cold navy #0B1426. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F17 — Vivian Takes Off the Emerald Dress | Beat 5 → 6 | TRANSITIONING

**F17A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the master bedroom — quiet, the party behind them now. Vivian (cube-bodied voxel from reference) is in the process of changing. The emerald dress is draped over a chair. She is now in everyday clothes — cream blouse and dark trousers — her posture shifting from party composure to something else: purpose. Camera: isometric 45-degree. Color palette: transitioning — cold navy fading, soft warm bedroom amber returning. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, now in cream blouse and dark trousers — setting down the emerald dress across the back of a chair. Deliberate. The action of someone who is not leaving the dress on the floor. Her expression: something has settled. She has moved from managing the room to making the decision. Soft warm bedroom ambient light. Color palette: transitioning warm, cream blouse. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up ECU voxel of Vivian's reflection in the bedroom mirror — cube-bodied voxel character from reference, now in cream blouse. She is looking at herself. Not with sadness. With the particular expression of someone who has just made a decision and is checking that it is the right one. It is. Soft warm bedroom light. Color palette: warm bedroom amber, cream blouse. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F18 — Vivian Packs Daniel's Bag | Beat 6 | NEUTRAL TURNING WARM ⭐

**F18A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the walk-in closet area — Vivian (cube-bodied voxel from reference, cream blouse, dark trousers) moving efficiently through the space. She has a bag open on the floor and is pulling items from Daniel's section: shirts on hangers, folded trousers, shoes from the rack. She is not angry. She is efficient. She has packed event kits under deadline pressure. This is the same skill. Camera: isometric 45-degree. Color palette: neutral turning warm, #C4B9A8 neutral, soft closet light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — crouching beside an open bag, placing a folded shirt inside with the precision of someone who folds things properly even under stress. A toiletry kit sits to the side, waiting to go in. She is focused. Not frantic. This is problem-solving, not breakdown. Neutral warm ambient. Color palette: neutral #C4B9A8 turning warm. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18C** — Close-Up / Detail
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up voxel shot of Vivian's hands — cube-shaped fingers folding a dress shirt with neat deliberateness. The fold is clean. No anger in the hands. Just competence. The bag is visible at the edge of the frame — being filled. This is a woman who even in this moment is doing the task well. Neutral warm light. Color palette: neutral turning warm, cream of the shirt, dark of the folded trousers. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F19 — Packed Bag by the Front Door | Beat 6 | NEUTRAL TURNING WARM ⭐ PIVOT PEAK

**F19A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of the home entryway — clean, orderly, the party fully cleared. A single large bag sits on the floor beside the coat rack. The coat rack holds only Vivian's coat now. Through the frosted glass panel beside the front door: headlights visible outside. The car is there. Camera: isometric 45-degree overhead. Color palette: neutral warm #C4B9A8, soft entryway amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of Daniel's packed bag beside the coat rack — full, zipped, positioned with precision at the base of the rack. Vivian's coat hangs above it on the rack. The bag is not thrown there. It is placed. The distinction matters. Soft entryway light. Color palette: neutral turning warm, bag dark, coat rack wooden-warm. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19C** — Close-Up / Detail
**Model**: Seedream 4.5

```
Cinematic atmospheric voxel close-up — frosted glass panel beside the front door. Through the glass: blurred, soft car headlights in the driveway beyond. The light is cool and gold at once — the car that was called, waiting. The bag is out of frame but its implication is in the shot. Intimate, quiet, final. Color palette: frosted glass cool, car headlight warm gold diffused through glass. Atmospheric voxel art. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F20 — "I've Called a Car. It's Outside." | Beat 6 | NEUTRAL WARM ⭐

**F20A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png + daniel-voxel-base.png

```
Wide isometric voxel shot of the entryway — Vivian (cube-bodied voxel from reference, cream blouse, dark trousers) and Daniel (cube-bodied voxel from reference, navy blazer) facing each other across the entry hall. The bag is visible beside the coat rack. The front door is behind Daniel. They are not touching. The space between them is the whole story. Camera: isometric 45-degree overhead. Color palette: neutral warm #C4B9A8. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — facing Daniel in the entryway. Her expression: final, calm, no cruelty and no softness either. She has said what needs to be said. She is not waiting for his response. She is simply the woman who has made the decision and will not be talked out of it. Neutral warm light. Color palette: neutral warm #C4B9A8. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up voxel shot — the front door from inside as Daniel (vague silhouette, cube-bodied) opens it and steps out. Through the doorway: the night, the car headlights, the outside world. Vivian's emerald sleeve or cream blouse sleeve visible at the frame edge — she is watching him go. The door is closing. Color palette: night cold from outside, neutral warm from inside. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F21 — Vivian on the Kitchen Floor | Beat 6 | NEUTRAL WARM ⭐

**F21A** — Wide / Establishing
**Model**: Seedream 4.5

```
Cinematic atmospheric voxel wide shot of a kitchen at night — Vivian (cube-bodied voxel, cream blouse) sitting on the kitchen floor, back against the cabinets, legs out. The kitchen: clean, the party fully cleared. A kettle on the stove, its light on. A laptop open on the floor beside her. The scene is lit by the soft under-cabinet kitchen lights and the laptop glow. Not dramatic. Just a woman who has had the night she has had and is sitting on her kitchen floor. Camera: wide cinematic. Color palette: neutral warm, kitchen cream and wood tones, soft amber under-cabinet light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — sitting on the kitchen floor, laptop open on the tile in front of her. A mug of tea steaming beside the laptop. She is looking at the screen. She is not crying — or she was briefly and has stopped. She is working. The Monday meeting. The business. The thing that belongs entirely to her. Soft kitchen ambient light. Color palette: neutral warm, kitchen cream, laptop screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian's face — cube-bodied voxel character from reference — on the kitchen floor. Her expression: somewhere between grief and the beginning of something else. Not broken. Processing. The kind of face that comes just before a decision becomes complete. Soft kitchen light, tea steam faint at the edge of the frame. Color palette: neutral warm, cream, soft amber. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F22 — Monday Morning — Divorce Filed | Beat 7 | NEUTRAL → WARMING

**F22A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the Hawthorn & Co. office — Monday morning. The space: familiar, warm, hers. Vivian (cube-bodied voxel from reference, cream blouse, dark trousers) at her central desk, phone at her ear. Papers on the desk. The office hums. She is calm. She is already in motion. Camera: isometric 45-degree overhead. Color palette: neutral warming, cream #F3E9D2 faintly returning, morning light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — at her desk on the phone, notepad open in front of her. She is talking to her attorney. Her expression: focused, decisive. She has not slept much. She is doing it anyway. Camera: desk level, 3/4 angle. Neutral warming light. Color palette: neutral warming, cream and wood desk, morning light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22C** — Close-Up / Detail
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up voxel shot of Vivian's notepad on the desk — cube-shaped hand visible at the edge, pen in hand. The top of the notepad visible: "Monday" written at the top. Two items listed below in clean handwriting: "1. Attorney" and "2. Morning client prep." That is the whole priority list for today. Warm morning light. Color palette: warm cream notepad, dark ink, morning light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F23 — She Keeps the House — Settlement | Beat 7 | WARMING ⭐

**F23A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of Vivian's house exterior — warm spring daylight. The home: elegant, well-maintained. Her car in the driveway. The garden beginning to bloom. This is her house. The shot communicates ownership through warmth and familiarity. Camera: isometric 45-degree wide. Color palette: warming gold #D4A547 light, spring green garden, cream home exterior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — standing at the front door of her home, key in hand. She is entering. She is home. The expression on her face: something settled. This is still hers. Camera: front of house, medium level. Warming gold light. Color palette: warming #D4A547, cream home. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23C** — Close-Up / Detail
**Model**: Ideogram 3

```
Extreme close-up of a voxel-style legal document — settlement agreement, clean format. Title visible: "SETTLEMENT AGREEMENT". Key clause highlighted: "Hawthorn & Co. Event Planning LLC — sole ownership retained by Vivian [surname redacted]. Established prior to marriage. Not subject to division." Below: "Property — [address redacted] — retained by Vivian." Vivian's attorney's signature block at the bottom. TEXT MUST BE READABLE: "Hawthorn & Co." · "sole ownership retained" · "Property — retained by Vivian". Voxel document aesthetic, clean legal typography. 1920x1080, 2K.
```

---

### F24 — Divorce Settlement Document — Hawthorn & Co. Protected | Beat 7 | WARMING ⭐

**F24A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of a law office — clean, professional. Vivian (cube-bodied voxel from reference, cream blouse) seated across a desk from her attorney voxel figure (professional, neutral, suited). Documents on the desk. The conversation is professional, efficient. She came prepared. Camera: isometric 45-degree. Color palette: warming neutral, professional office cream and wood. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24B** — Medium Shot
**Model**: Ideogram 3

```
Medium voxel shot of the settlement document on a desk — clean legal format. Key section clearly visible in the center: "COMPANY ASSETS — Hawthorn & Co. Event Planning LLC: Founded [date, prior to marriage]. 100% sole ownership — Vivian. Not subject to division." A highlighted yellow voxel bar under the key line. The document is neat, final, signed. Warm office light. Voxel legal document aesthetic, fully readable text. 1920x1080, 2K.
```

**F24C** — Close-Up / ECU ⭐
**Model**: Ideogram 3

```
Extreme close-up of the settlement document signature line — Vivian's signature (stylized, clear) on the final line of the agreement. Beneath the signature: the date. Above it: the final clause: "Settlement agreed — complete." The pen has just been lifted. The document is signed. TEXT FULLY READABLE: "Settlement agreed — complete" · Vivian's signature. Voxel document close-up aesthetic. 1920x1080, 2K.
```

---

### F25 — Daniel's Studio Apartment | Beat 7 | COOL GRAY ⭐

**F25A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a studio apartment interior — small, anonymous, recently moved into. A pullout sofa half-open in the corner with a folded blanket. Moving boxes along one wall. A single floor lamp. A window on the far wall looking out at a highway overpass and mid-range city buildings. The space communicates diminishment without editorializing: it is simply small, and he is in it. Camera: isometric 45-degree overhead. Color palette: cool gray #1F2937, industrial ambient. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium voxel shot of the studio apartment — the pullout sofa in the center of the shot, half-folded. A laptop on it, still in its bag. On the windowsill: a single coffee cup. The boxes behind the sofa haven't all been opened. Camera: at couch level, facing the sofa and window. Cool gray ambient light from the window. Color palette: cool gray #1F2937, flat light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Close-up ECU voxel of the studio apartment window — the view through the glass: a section of highway overpass, mid-rise buildings. Not scenic. Not designed for. Just the window you get when this is what you can afford right now. Cool gray light. Color palette: cool gray #1F2937, overcast exterior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F26 — Rosalie — The Maternal Reckoning | Beat 7 | COOL GRAY ⭐

**F26A** — Wide / Establishing
**Model**: Nano Banana 2 + Rosalie inline

```
Wide isometric voxel shot of Rosalie's kitchen — a different home, modest, warm in another way. Rosalie (cube-bodied voxel figure, 60s, silver hair, steel-blue cardigan) sits at her kitchen table, phone in hand. The kitchen around her: lived-in, a teapot, mail on the counter. She is a woman who has been waiting for this call to become necessary. Camera: isometric 45-degree overhead. Color palette: cool gray #1F2937 (the weight of it), warm kitchen undertones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26B** — Medium Shot
**Model**: Nano Banana 2 + Rosalie inline

```
Medium voxel shot of Rosalie — cube-bodied voxel figure, silver hair, steel-blue cardigan — at her kitchen table, phone in hand. Her expression: the specific, ancient look of a mother who was right all along and finds no satisfaction in it. She is not gloating. She is reckoning. Cool gray ambient light from the window. Color palette: cool gray #1F2937, steel-blue cardigan. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26C** — Close-Up / ECU
**Model**: Nano Banana 2 + Rosalie inline

```
Close-up ECU voxel of Rosalie's face — cube-bodied voxel figure, silver hair — her expression in the moment she says: "I told him for years he would do something he couldn't take back." Her eyes: not unkind. Just clear. The reckoning is complete. Cool gray light. Color palette: cool gray #1F2937, silver hair. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F27 — Business Contacts Distancing — June | Beat 7 | COOL GRAY

**F27A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Wide isometric voxel shot of a smaller, less prestigious office — Daniel (cube-bodied voxel from reference, navy blazer, slightly more tired-looking) at his desk. The office around him: fewer people, no warmth. A calendar on the wall shows June. His desk: paperwork he didn't have before. Camera: isometric 45-degree overhead. Color palette: cool gray #1F2937, institutional office. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference — at his desk, reading an email on his monitor. His expression: he is reading bad news. His posture has deflated slightly from the confident crowd-pleaser. The email subject line is visible at the top of the screen — deliberately blurred enough to be unreadable except the tone of it. Cool gray ambient. Color palette: cool gray #1F2937. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up of a voxel-style email on a monitor screen — clean corporate email format. Subject: "Re: Regional Partnership — Decision". Body text opening: "Thank you for your continued partnership over the past three years. After careful consideration, we have decided to move in a different direction for this cycle." Signed with a generic corporate sign-off. No reason given. TEXT MUST BE READABLE: "Thank you for your continued partnership" · "we have decided to move in a different direction". Voxel screen aesthetic, legible typography. 1920x1080, 2K.
```

---

### F28 — Claire Raising the Child Alone | Beat 7 | COOL NEUTRAL

**F28A** — Wide / Establishing
**Model**: Nano Banana 2 + Claire inline

```
Wide isometric voxel shot of a smaller, quieter home — a hometown feel. Claire (cube-bodied voxel figure, late 20s, no longer pregnant — some months have passed) at her kitchen table, a voxel infant in a high chair nearby. The home is modest but functional. She is managing. Not thriving in the way she imagined — but managing. Camera: isometric 45-degree overhead. Color palette: cool neutral gray, domestic. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28B** — Medium Shot
**Model**: Nano Banana 2 + Claire inline

```
Medium voxel shot of Claire — cube-bodied voxel figure, late 20s, dark coat traded for home clothes — at her kitchen table, a small voxel baby in a seat nearby. Her expression: the particular tiredness of a person doing something significant without the support they expected. She is doing it. But it is harder than she planned. Cool neutral light. Color palette: cool neutral gray. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28C** — Close-Up / Detail
**Model**: Ideogram 3

```
Close-up of a voxel-style legal document on a table — birth certificate style format. Key fields: "Father: Daniel [surname redacted]" clearly printed. Below that: "Child Support Order — Effective October [year]". The document is signed, official, binding. The amount field is visible: a monthly figure. Eighteen years is a long time. TEXT READABLE: "Father: Daniel" · "Child Support Order" · "Effective October". Voxel document aesthetic. 1920x1080, 2K.
```

---

### F29 — Daniel's Diminished Presence | Beat 8 | COOL GRAY ⭐

**F29A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Wide isometric voxel shot of the studio apartment building exterior — unremarkable mid-rise, third floor visible. Winter light. A few bare trees. The building is fine, just entirely ordinary. The kind of place that communicates that something changed. Camera: isometric 45-degree. Color palette: cool gray #1F2937, winter flat light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29B** — Medium Shot
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Medium voxel shot of Daniel — cube-bodied voxel character from reference, casual jacket now (the blazer retired for this setting) — receiving a grocery bag from another voxel figure at the apartment door. The voxel figure is Rosalie — silver hair, steel-blue cardigan. She has come with groceries. His expression: he finds this genuinely humbling. This is not the person he thought he would be at thirty-eight. Cool gray ambient. Color palette: cool gray #1F2937. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-voxel-base.png

```
Extreme close-up ECU voxel of Daniel's face — cube-bodied voxel character from reference — in the moment of receiving the groceries. His expression: tired in a specific way. The performance has stopped. The charm is not available. He is just tired. This is what is left when the audience goes home. Cool gray flat light. Color palette: cool gray #1F2937. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F30 — Vivian's New Apartment — Spring | Epilogue | FULL WARM + SAGE ⭐

**F30A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of Vivian's new apartment — spring, bright, east-facing windows flooding the space with morning gold light. The apartment: well-chosen, spare but warm. A bookshelf, a comfortable sofa, a kitchen visible in the background. Plants on the windowsill, sage green accents. Vivian (cube-bodied voxel from reference, cream blouse) visible in the kitchen doorway, easy and at home. Camera: isometric 45-degree. Color palette: full warm #D4A547 + sage #6B7F5A. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse, dark trousers — in her new kitchen, unhurried. She is measuring something into a bowl — cooking a lamb dish. Her posture: relaxed, present. She is not performing contentment. She is in it. Warm morning gold light from the window to her left. Color palette: full warm #D4A547, sage #6B7F5A kitchen accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian's face — cube-bodied voxel character from reference — in her new kitchen, cooking. Her expression: quiet, settled. Not the composure of someone holding something together — the ease of someone who isn't holding anything anymore. She is just cooking. Warm gold light. Color palette: warm #D4A547, sage hints. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F31 — Eight Guests, Her Table | Epilogue | FULL WARM + SAGE ⭐

**F31A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of Vivian's dining table — eight voxel figures seated, mid-dinner. The table: not catered. Real food on mismatched serving dishes. Wine opened. Candles (shorter, warmer than the party). The room: her apartment, her things, her people. Vivian (cube-bodied voxel from reference, cream blouse) at the head. The room has warmth that cannot be hired. Camera: isometric 45-degree overhead. Color palette: full warm #D4A547 + sage #6B7F5A. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference — at the head of the table, surrounded by guests, in the middle of laughing. Genuinely. Her head is slightly back, her glass is on the table because she put it down to laugh properly. This is not a performance. This is the real one. Warm gold candlelight. Color palette: full warm #D4A547, sage accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian's hands at the table — glass of wine set down, both hands visible, relaxed on the tablecloth. She is fully at rest. The table she cooked. The people she chose. The evening she designed exactly as she wanted it. Nothing walked through this door uninvited. Warm gold light. Color palette: full warm #D4A547, cream tablecloth, sage hints. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F32 — Petra's Toast | Epilogue | FULL WARM ⭐

**F32A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of the dinner table — Petra (cube-bodied voxel, auburn warm tones) standing, wine glass raised, making a toast. All eight guests looking at her. Vivian (cube-bodied voxel from reference) at the head of the table, her expression about to break into a laugh. The warmth in this room is undeniable. Camera: isometric 45-degree. Color palette: full warm #D4A547, sage #6B7F5A. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Petra — cube-bodied voxel, auburn warm tones, wine glass raised — giving her toast. Her expression: she means every word. She has been Vivian's witness for this entire year. What she is saying is true. Vivian in the background, already covering her mouth to hold the laugh. Warm gold light. Color palette: full warm #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32C** — Close-Up / ECU
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel of Vivian laughing — cube-bodied voxel character from reference — her hand raised, glass of wine set down because she needed both hands free to laugh properly. This is not contained. This is the real laughter. Eyes crinkled. The full warmth of it. Warm gold light. Color palette: full warm #D4A547, cream and sage. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F33 — Vivian at the Window — No Surprises | Epilogue | FULL WARM + SAGE ⭐ FINAL SHOT

**F33A** — Wide / Establishing
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide isometric voxel shot of Vivian's apartment at the end of the birthday evening — guests are gone, the table half-cleared, glasses still out. Vivian (cube-bodied voxel from reference, cream blouse) stands at the large east-facing window. City at night outside. The apartment warm and quiet behind her. She is at rest. Camera: isometric 45-degree. Color palette: full warm #D4A547 + sage #6B7F5A, city night through window. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33B** — Medium Shot
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Medium voxel shot of Vivian — cube-bodied voxel character from reference, cream blouse — at the window, looking out at the city at night. She is not doing anything. Just looking. Her posture: completely settled. Not performing peace — inhabiting it. The city lights below: soft voxel point-lights in amber and gold. Color palette: warm #D4A547 interior, night city exterior, sage room accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33C** — Close-Up / ECU ⭐ FINAL FRAME
**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up ECU voxel portrait of Vivian's face at the window — cube-bodied voxel character from reference, warm window light from behind. Her expression: not happiness exactly. Something beyond it. The face of a woman who knows exactly where she is, chose this room, chose these people, planned this evening from beginning to end and knows every person in it. Nothing uninvited. No surprises. Just her. Warm gold window light. Color palette: full warm #D4A547, sage #6B7F5A. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F34 — Butterfly Channel Card — CTA | Epilogue/CTA | FULL WARM

**F34A** — Wide / Establishing
**Model**: Ideogram 3

```
YouTube end card voxel art style, full frame. Deep warm navy #0B1426 background with warm gold #D4A547 accent lighting emanating from center. Center: a large beautiful stylized voxel butterfly in gold and sage green tones, wings spread. Below butterfly: channel name text "KARMA CAUGHT UP" in clean bold white sans-serif, large. Below that: white "Subscribe" button shape with a voxel subscribe icon. Lower right: small "@KarmaCaughtUp" watermark. Warm, inviting, premium. TEXT READABLE: "KARMA CAUGHT UP" · "Subscribe" · "@KarmaCaughtUp". Voxel art aesthetic, NOT Minecraft, NOT realistic. 1920x1080, 2K.
```

**F34B** — Medium / Butterfly Close
**Model**: Ideogram 3

```
Close voxel art medium shot of the butterfly alone — large, beautiful, gold and sage voxel butterfly filling most of the frame. Wings detailed in warm gold #D4A547 and sage #6B7F5A against a deep warm navy background. The butterfly is peaceful, settled. Below it in clean white text: "@KarmaCaughtUp". No other elements — just the butterfly and the channel handle. This is the comment prompt visual. TEXT READABLE: "@KarmaCaughtUp". Premium voxel art butterfly. 1920x1080, 2K.
```

**F34C** — Close-Up / CTA Card
**Model**: Ideogram 3

```
Full voxel art end card — the final frame. Deep warm navy background. Large centered yellow text #FFED00 in bold: "DROP A 🦋 IN THE COMMENTS". Below in white smaller text: "Subscribe for a new story every Tuesday + Friday". Small butterfly icon at the left of the subscribe line. Channel watermark "@KarmaCaughtUp" bottom right. Warm gold glow behind the text block. All text fully readable at 120px YouTube mobile thumbnail size. TEXT: "DROP A 🦋 IN THE COMMENTS" · "Subscribe for a new story every Tuesday + Friday" · "@KarmaCaughtUp". 1920x1080, 2K.
```

---

## 15 KEN BURNS STILLS — S01 through S15

---

### S01 — Hotel Receipt in Vivian's Hand | Beat 3 | COOL NEUTRAL

**Model**: Flux 2 Pro + Ideogram 3 (for text legibility)

```
Extreme close-up voxel Ken Burns still — Vivian's hand (cube-shaped, cream blouse sleeve) holding a hotel receipt in a parking lot. The receipt clearly readable: "ARDEN GRAND" at the top, one-night stay, Tuesday, credit card charged. The parking lot around the hand: cold, gray, ordinary midday. Nothing dramatic about this moment except the receipt itself and the fact that she is not moving. Camera: Ken Burns — slow PUSH in on the receipt text over 20 seconds. Color palette: cool neutral gray, warm cream sleeve, paper receipt tone. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S02 — Party Room Full — The Last Normal Moment | Beat 4 | WARM GOLD

**Model**: Flux 2 Pro

```
Wide voxel Ken Burns still — the birthday party at full golden warmth and attendance. Forty voxel figures in the room, tall candles burning, champagne coupes in hands, the room exactly as it was intended. White linen, floral arrangements, warm candlelight. This is 8 PM. The room is beautiful. Everything is fine. Camera: Ken Burns — slow PAN-R across the room over 15 seconds. Color palette: full warm gold #D4A547, amber candlelight, cream linens. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S03 — Vivian's Face — The Second She Understands | Beat 4 | DARK COLD ⭐

**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Extreme close-up voxel Ken Burns still — Vivian's face (cube-bodied voxel from reference, emerald dress) in the second she watches Daniel's face and understands everything. Her expression: the still, contained shock of sudden complete understanding. She is not reacting yet. She is processing. Something has just permanently changed and she knows it and she has not moved. Cold dark #0B1426 party ambient collapsing. Camera: Ken Burns — slow PUSH in on her face over 25 seconds. Color palette: cold navy #0B1426 dominant, emerald from dress. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S04 — Claire at the Door — The Threshold | Beat 4 | DARK COLD ⭐

**Model**: Nano Banana 2 + Claire inline

```
Wide voxel Ken Burns still — Claire (cube-bodied voxel figure, late 20s, dark coat, visibly pregnant) standing in the open doorway of the home. The party visible behind her in the foreground — warm and golden. She is cold and dark in the doorway. The threshold between the outside and inside is the geometry of this entire situation. Her expression: the irreversible decision. Camera: Ken Burns — STATIC full hold for 20 seconds. No movement. Just presence. Color palette: warm gold from inside, cold dark #0B1426 from doorway exterior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S05 — Vivian's Hand Extended — "I'm Vivian" | Beat 4 | DARK COLD ⭐

**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Close-up voxel Ken Burns still — Vivian's hand (cube-shaped, emerald sleeve) extended in greeting toward the door, palm open. The gesture is neither warm nor cold — it is simply a greeting. It is Vivian being the most composed person in her own worst moment. Claire's dark coat barely visible at the very edge of the frame, receiving the hand. Camera: Ken Burns — slow PUSH in on the extended hand over 25 seconds. Color palette: cold dark #0B1426, emerald green sleeve. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S06 — Empty Party Room — Burned Candles | Beat 5 | DARK COLD

**Model**: Flux 2 Pro

```
Wide voxel Ken Burns still — the party room after everyone has gone. Tables half-cleared. White linen disturbed. Three tall taper candles burned completely down to stubs in silver holders — wax pooled. The floral arrangements still perfect and standing, indifferent to everything that happened around them. The room is empty. Camera: Ken Burns — slow PULL back from the table center, revealing the full empty room over 15 seconds. Color palette: cold dark #0B1426, candle-end amber barely remaining. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S07 — Daniel's Packed Bag by the Door | Beat 6 | NEUTRAL TURNING WARM ⭐

**Model**: Flux 2 Pro

```
Medium voxel Ken Burns still — Daniel's packed bag sitting on the entryway floor beside the coat rack. The coat rack has only Vivian's coat now. The bag is full, zipped, placed with precision — not thrown. Through the frosted glass beside the door: blurred gold car headlights waiting. Everything about this shot is the decision made material. Camera: Ken Burns — STATIC full hold for 20 seconds. Let it sit. Color palette: neutral warm #C4B9A8, frosted glass cold-warm, car headlights gold-diffused. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S08 — Vivian on the Kitchen Floor | Beat 6 | NEUTRAL WARM ⭐

**Model**: Seedream 4.5

```
Cinematic atmospheric voxel Ken Burns still — Vivian (cube-bodied voxel from reference, cream blouse) sitting on her kitchen floor, back to the cabinets, laptop open, mug of tea steaming beside her. The kitchen around her: quiet, clean, the aftermath of the party removed. She is not collapsed. She is on the floor because it felt right, and she is already working because that is who she is. Camera: Ken Burns — slow PUSH in on her face over 20 seconds. Color palette: neutral warm, soft kitchen amber light, laptop screen glow. Atmospheric voxel art. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S09 — Settlement Document — "Hawthorn & Co. — Sole Ownership" | Beat 7 | WARMING ⭐

**Model**: Ideogram 3

```
Close voxel Ken Burns still — the settlement document on a desk, warm office light. The key clause clearly visible and readable: "Hawthorn & Co. Event Planning LLC — sole ownership retained by Vivian. Established prior to marriage." Below that: "Property — retained by Vivian." Below the last clause: the signature. The document is signed. The thing she built before him remains hers. Camera: Ken Burns — slow PUSH in on the key clause over 20 seconds. Color palette: warming gold #D4A547 ambient, clean document white. Ideogram 3 voxel document aesthetic. 1920x1080, 2K.
```

---

### S10 — Daniel's Studio — Pullout Sofa | Beat 7 | COOL GRAY ⭐

**Model**: Flux 2 Pro

```
Wide voxel Ken Burns still — the studio apartment interior. The pullout sofa half-open. Moving boxes along one wall, not all unpacked. One floor lamp. The window with the highway view. The room communicates its meaning without narration: this is what is left of the life he had. Camera: Ken Burns — slow PULL back to reveal the full studio over 20 seconds. Color palette: cool gray #1F2937, flat industrial ambient. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S11 — Rosalie's Face — The Maternal Reckoning | Beat 7 | COOL GRAY ⭐

**Model**: Nano Banana 2 + Rosalie inline

```
Close-up voxel Ken Burns still — Rosalie's face (cube-bodied voxel figure, silver hair, steel-blue cardigan) at her kitchen table, phone in hand. Her expression: the ancient particular look of a mother who was right all along and finds no pleasure in it. She will not speak to her son for seven months. This is the face just before that decision. Camera: Ken Burns — slow PUSH in on her face over 20 seconds. Color palette: cool gray #1F2937, steel blue cardigan, warm kitchen edge light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S12 — Daniel's Empty Calendar / Departure Email | Beat 7–8 | COOL GRAY

**Model**: Ideogram 3

```
Close voxel Ken Burns still — Daniel's laptop screen showing an email. Subject line: "Re: Regional Partnership — Decision". The email body beginning: "Thank you for your continued partnership. After careful consideration, we have decided to move in a different direction for this cycle." No reason given. Clean corporate email format on a voxel screen. The brevity of the email is the thing. Camera: Ken Burns — slow TILT-DOWN through the email text over 20 seconds. Color palette: cool gray #1F2937, screen glow. Ideogram 3 voxel screen aesthetic. TEXT READABLE. 1920x1080, 2K.
```

---

### S13 — Vivian's New Apartment — Spring Light | Epilogue | FULL WARM

**Model**: Flux 2 Pro

```
Wide voxel Ken Burns still — Vivian's new apartment in spring. East-facing windows, morning gold light flooding in. The space: warm, chosen, hers. Books on a shelf, sage green cushions on the sofa, a plant on the windowsill. The apartment is small but exactly right. Camera: Ken Burns — slow PAN-R across the apartment over 15 seconds. Color palette: full warm #D4A547, sage #6B7F5A accents, spring morning gold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S14 — Petra's Toast — The Real Warmth | Epilogue | FULL WARM ⭐

**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide voxel Ken Burns still — Petra (cube-bodied voxel, auburn warm tones) standing at the dinner table, wine glass raised, mid-toast. All eight guests visible. Vivian (cube-bodied voxel from reference, cream blouse) at the head of the table, already beginning to laugh — glass set down. The room: warm, alive, full of people who mean it. Camera: Ken Burns — slow PUSH in on Vivian's laughing face over 20 seconds. Color palette: full warm #D4A547, sage accents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```

---

### S15 — Vivian at the Window — No Surprises | Epilogue | FULL WARM + SAGE ⭐ FINAL SHOT

**Model**: Nano Banana 2 + vivian-voxel-base.png

```
Wide voxel Ken Burns still — Vivian (cube-bodied voxel from reference, cream blouse) standing at her apartment window at the end of her birthday evening. The apartment warm and quiet behind her. The city at night through the glass: soft voxel point-lights, amber and gold. She is not performing contentment. She is simply here. She planned this evening herself. She knows every person who was in this room. Nothing uninvited. No surprises. This is what a good party actually feels like. Camera: Ken Burns — slow ORBIT-L around Vivian over 40 seconds — the slowest, longest shot of the episode. Color palette: full warm #D4A547 + sage #6B7F5A, city night through glass. This is the final shot. Hold it. Clean premium voxel art, NOT raw Minecraft, NOT realistic. 1920x1080, 2K.
```
