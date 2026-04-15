# 03b — Full Image Generation Prompts
# EP15 "He Said He Was Going to the Gym" — F01A through F34C (102 prompts) + S01–S15 (15 Ken Burns stills) = 117 total
# Copy-paste directly into Freepik — self-contained, no external reference needed

> **System**: Each scene = 3 start frames (A = Wide/Establishing, B = Medium, C = Close-Up/ECU)
> **Setup**: Ratio 16:9 · Resolution 2K · AI enhance OFF
> **Save**: media/images/F01A.png, F01B.png, F01C.png … F34C.png · S01.png … S15.png

---

## Characters

- **Mara** — cube-bodied voxel female, 38, project manager, slate blue structured blazer + cream blouse, dark hair pulled back neatly, composed precise energy. Ref: mara-ep15-voxel-base.png
- **Daniel** — cube-bodied voxel male, 41, gray athletic shirt + black shorts (gym costume he never uses), broad shoulders relaxed posture, self-satisfied energy. Ref: daniel-ep15-voxel-base.png
- **Veronica** — cube-bodied voxel female, 32, personal trainer, coral-teal athletic jacket + dark leggings, light brown hair in high ponytail, confident fitness energy. Ref: veronica-ep15-voxel-base.png

---

## Model Routing

| Model | Use for |
|-------|---------|
| **Nano Banana 2 + mara ref** | F02, F04, F06, F09, F10, F12, F13, F14, F16, F17, F19, F20, F21, F23, F28, F29, F30, F32, F33, F34 |
| **Nano Banana 2 + daniel ref** | F03, F05, F07, F08, F26, F31 |
| **Nano Banana 2 + daniel ref + veronica ref** | F07 (together), F21 (daniel reaction) |
| **Nano Banana 2 + veronica ref** | F24 |
| **Flux 2 Pro** | F01, F10A, F15, F25, F27 (environments / objects / no characters) |
| **Ideogram 3** | F11, F15, F18, F22C, F34C (text-critical screens / documents / signs) |
| **Seedream 4.5** | F01A, F22A, F33C (wide atmospheric) |

---

## Color Arc Reference

| Frames | Beat | Palette |
|--------|------|---------|
| F01–F05 | Beat 1–2 | WARM cream #F3E9D2 + gold #D4A547 (Mara's good life, Daniel's performed routine) |
| F06–F09 | Beat 3 | COOL SLATE #CBD5E1 + gray undertones entering |
| F10–F13 | Beat 4 | DARK COLD navy #0B1426 + cold blue #3B82F6 (gym reveal + parking lot) |
| F14–F17 | Beat 5 | DARK DESATURATED #1F2937 (hollow continuation, attorney call, documents) |
| F18–F21 | Beat 6 | PRE-DAWN returning warm #D4A547 muted (pivot — email, filing, confrontation) |
| F22–F28 | Beat 7 | MIXED — warm gold for Mara, cold gray for Daniel/Veronica |
| F29–F31 | Beat 8 | WARM sage #6B7F5A + gold (house, dog, bedroom repaint) |
| F32–F34 | Epilogue | FULL WARM gold #D4A547 + sage #6B7F5A (First Light gym — her own five a.m.) |

---

## DUTCH Tilt Rules

- **DUTCH applied to**: F10B, F10C, F11B, F11C, F12B, F12C, F13B — gym reveal / parking lot zone ONLY
- **ABSOLUTELY NO DUTCH**: F01–F09, F14 onward (epilogue must be stable / grounded)

---

## VOXEL STYLE TAG (included in every prompt)

> "Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K."

---

## 102 START FRAMES — F01 through F34

---

### F01 — Blue Hydro Flask on Kitchen Counter, Morning | Beat 1 | WARM

**F01A** — Wide / Establishing
**Model**: Seedream 4.5

```
Wide atmospheric voxel shot of a clean domestic kitchen at pre-dawn — still dark outside the window, the kitchen lit only by the warm amber glow of under-cabinet lights. The kitchen is tidy, organized, lived-in with care. A tall blue Hydro Flask sits on the marble-effect voxel countertop — center frame, slightly in front of a neatly arranged kitchen scene: coffee maker running, a meal-prep container nearby, a gym bag near the door. The bottle is pristine. Too pristine. Camera: wide isometric establishing shot, slightly high angle. Color palette: warm cream #F3E9D2 walls and surfaces, gold #D4A547 under-cabinet glow, deep pre-dawn blue at the window. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the blue Hydro Flask centered on the kitchen counter. Camera at counter level, 3/4 angle, the bottle fills most of the frame. The flask is a large, thick-walled insulated bottle — blue, the cap screwed on tight, completely full. The pre-dawn kitchen light catches the voxel surface: no dents, no water marks, no evidence of use. Around it: the suggestion of a morning routine in progress — keys nearby, a packed gym bag strap visible at frame edge. The shot is quiet, suspicious, deliberate. Color palette: warm cream #F3E9D2 surfaces, gold #D4A547 under-cabinet light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F01C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel hero shot of the top of the blue Hydro Flask — the cap screwed on perfectly, the lip clean, no water residue, no scratch marks. Warm amber sidelight catches the surface. This bottle has never been opened in the heat of exertion. The detail is telling: pristine insulation ring, untouched mouthpiece. Background: the soft warm blur of the kitchen counter. Color palette: vivid blue #2563EB bottle, warm cream #F3E9D2 counter, honey gold #D4A547 sidelight. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F02 — Mara at Kitchen Counter, 5am — Daniel's Gym Bag by Door | Beat 2 | WARM

**F02A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a warm kitchen interior at 5:00am. Full kitchen visible — cream countertops, organized cabinets, warm amber light over the sink. Mara — cube-bodied voxel character from reference, slate blue blazer off (casual home morning wear), dark hair down or loosely back — stands at the counter with a coffee mug, watching the front door area where Daniel's gym bag sits packed and ready. Her expression is warm, proud, supportive — she believes in this version of him. Daniel is not yet in frame; only his gym bag at the door tells the story. Camera: isometric 45-degree overhead establishing shot. Color palette: warm cream #F3E9D2, gold #D4A547 morning warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at the kitchen counter — cube-bodied voxel character from reference, warm morning clothes, dark hair loosely back. Camera at counter level, 3/4 angle. She holds a coffee mug in both hands, watching with quiet pride as the door area prepares for Daniel's departure. Her posture: grounded, content — a woman who believes her husband is making a positive change. Warm gold morning light from under-cabinet glow. Color palette: warm cream #F3E9D2 kitchen, gold #D4A547 light catching her mug. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F02C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of the gym bag by the front door — packed, heavy, straps organized. Blue Hydro Flask tucked in the side pocket, full. Workout clothes compressed inside. The bag looks exactly right for a gym morning. The door is not yet open. Warm interior light catches the bag surface; outside the door window is still dark. This is the deception in one object. Color palette: warm cream #F3E9D2 interior, dark pre-dawn outside, gold under-cabinet glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F03 — Daniel Leaving at 5am with Gym Bag + Water Bottle | Beat 2 | WARM

**F03A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of the front entryway of a house at 5:00am. Daniel — cube-bodied voxel male from reference, gray athletic shirt, black shorts, broad shoulders relaxed — stands at the open front door with the gym bag on one shoulder and the blue Hydro Flask in his hand. He's half-turned to go, casual and confident. Through the open door: pre-dawn dark street. Mara's hand is visible in the background, a coffee mug — she's seeing him off. The departure feels normal. Camera: isometric 45-degree overhead wide shot. Color palette: warm cream #F3E9D2 interior, dark #0B1426 pre-dawn outside the door, gold under-cabinet glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel at the front door — cube-bodied voxel male from reference, gray athletic shirt, black shorts, gym bag on shoulder. Camera at door level, 3/4 angle. He holds the blue Hydro Flask in his right hand, full and heavy with water. His expression: easy, performed confidence — he has done this five days a week for six months and he has never once been nervous about it. Warm interior gold light from behind him; dark street ahead. Color palette: warm cream #F3E9D2 interior, pre-dawn dark outside, gold #D4A547 home warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F03C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of Daniel's hand holding the blue Hydro Flask as he steps out the door — the bottle gripped at mid-body height, the cap shining, the blue surface catching the transition from warm interior gold to cold pre-dawn dark. The bottle is full. It will return full. It has always returned full. This is the prop that doesn't lie even when he does. Color palette: blue #2563EB bottle, warm gold #D4A547 interior glow on left, dark cold #0B1426 outside on right. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F04 — Mara at Work — Project Manager Desk with Color-Coded Calendar | Beat 2 | WARM

**F04A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a modern open-plan office interior — warm cream walls, clean desks, warm ambient business lighting. Mara — cube-bodied voxel character from reference, slate blue blazer, cream blouse, dark hair neatly pulled back — sits at a central desk, organized and in command. Her workspace: color-coded planner, multiple labeled project folders, a second monitor with dashboard graphs. This is her domain — methodical and precise. Colleagues visible in background as smaller voxel figures, blurred. Camera: isometric 45-degree overhead wide shot. Color palette: warm cream office #F3E9D2, professional gold accent #D4A547 on desk accessories. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at her desk — cube-bodied voxel character from reference, slate blue blazer, cream blouse. Camera at desk level, 3/4 angle. Her hands move efficiently over a color-coded planner — different colored tabs, each labeled clearly. Her expression: focused, in control, the kind of woman who never misses a detail. A second monitor shows a project dashboard. Her life, professionally, is exactly what it appears to be. Warm office ambient light. Color palette: warm cream #F3E9D2 office walls, slate blue blazer pop, gold desk lamp accent #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F04C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of an open color-coded planner — pages with colored tabs, neat handwriting, a calendar blocked out in warm cream and gold tones. Every appointment is labeled. Every date accounted for. The organization is visual proof of how her mind works. Warm desk lamp light from above. Color palette: cream #F3E9D2 page, gold #D4A547 accents, coral and teal tab colors, warm wood desk tone. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F05 — Daniel Returning from "Gym" — Mirror Self-Satisfaction | Beat 2 | WARM

**F05A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of a home bathroom doorway — steam from the shower visible, warm bathroom light glowing. Daniel — cube-bodied voxel male from reference, now in a towel or fresh clothes post-shower — stands at the bathroom mirror, checking his reflection. His gym bag is on the floor nearby; the blue Hydro Flask sits on the counter, still full. The bathroom is warm and ordinary. He looks at himself with quiet satisfaction. Camera: isometric wide, bathroom doorway framing. Color palette: warm cream #F3E9D2 bathroom tiles, warm gold #D4A547 vanity lighting. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel at the bathroom mirror — cube-bodied voxel male from reference, fresh post-shower, checking his reflection. His expression: genuinely pleased with himself, performed confidence layered over something hollow. He turns slightly to check his profile. The gym bag on the floor nearby; no sweat visible anywhere. Warm vanity lighting catches the side of his face. Color palette: warm cream #F3E9D2, gold #D4A547 vanity light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F05C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of the blue Hydro Flask on the bathroom counter — still full, cap on, completely untouched by any real workout. Warm vanity light catches the top of the bottle. In the background blur: Daniel's gym clothes visible on a hook — clean, unworn in the athletic sense. This is the detail that gives everything away. Color palette: blue #2563EB bottle, warm cream #F3E9D2 counter, gold vanity light #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F06 — Mara Smelling Gym Shirt from Laundry — No Sweat Smell | Beat 3 | COOL

**F06A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a home laundry room — compact, organized, clean voxel machines and shelving. Mara — cube-bodied voxel character from reference, casual home clothes (not work blazer), dark hair loose — stands at the machine with a pile of clothes. She has paused, holding up a gray athletic shirt — Daniel's gym shirt — in both hands. Her posture is still. Something in her has shifted, though her face has not yet registered the full weight of it. Cool slate light enters from the window. Camera: isometric wide shot, slightly high angle. Color palette: cool slate #CBD5E1 entering, cream #F3E9D2 walls, laundry blue-gray machine. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara holding Daniel's gray athletic shirt close to her face — cube-bodied voxel character from reference, home clothes, dark hair loose. She holds the shirt up to nose level, eyes half-closed, inhaling carefully. Her expression: puzzled, processing, not yet alarmed. The shirt should smell like a gym — like sweat and exertion and effort. It does not. Camera at chest level, 3/4 angle. Cool ambient laundry room light. Color palette: cool slate #CBD5E1 light, cream #F3E9D2 shirt, neutral tones throughout. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F06C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Mara's face — cube-bodied voxel character from reference — in the moment of processing what the shirt does not smell like. Her eyes are clear, precise, already connecting dots she hasn't named yet. The expression is not panic, not anger — it is the face of someone who is very good at noticing things and has just noticed something important. Cool laundry room light. Color palette: cool slate #CBD5E1 ambient, cream #F3E9D2 skin tone warmth, dark hair. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F07 — Daniel with Veronica — Not at a Gym | Beat 3 | COOL

**F07A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png + veronica-ep15-voxel-base.png

```
Wide isometric voxel shot of a cozy café interior or quiet private apartment — warm but not their home. Not a gym. Soft voxel lighting, comfortable seating, intimacy in the space. Daniel — cube-bodied voxel male from reference, gray athletic shirt — sits across from Veronica — cube-bodied voxel female from reference, coral-teal athletic jacket, light hair in ponytail. They are close together at a small table, comfortable in a way that is not professional. No workout equipment in sight. No gym smell. Just two people who have been meeting like this for months. Camera: isometric wide, cool slate light. Color palette: cool slate #CBD5E1, warm interior cushion tones, cooling atmosphere. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png + veronica-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel and Veronica at their table — cube-bodied voxel characters from references. Camera at table level, 3/4 angle, showing both of them in conversation. Their body language: facing each other, leaning slightly in, comfortable familiarity. This is not a professional training relationship. This is what five a.m. really looked like. Cool ambient interior light. Color palette: cool slate #CBD5E1, warm interior accent tones, cooling. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F07C** — Close-Up / ECU
**Model**: Nano Banana 2 + veronica-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Veronica's face — cube-bodied voxel character from reference, coral-teal jacket, light ponytail. Her expression: at ease, familiar, confident. This is not the professional expression of a trainer with a client. This is someone who thinks she is winning. Cool ambient lighting from the café window. Color palette: cool slate #CBD5E1, coral jacket accent, neutral face tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F08 — Daniel Unable to Name Exercises — Dinner Table | Beat 3 | COOL

**F08A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of a home dining table — two place settings, a home-cooked dinner, warm kitchen light in background starting to cool at the edges. Mara and Daniel are seated across from each other. Mara has just asked something; Daniel is in the middle of a vague, hand-gesture answer. The food is untouched. The moment is ordinary but slightly off. Camera: isometric wide, 45-degree overhead. Color palette: cool slate #CBD5E1 ambient, warm gold #D4A547 fading, dinner plate tones warm. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel at the dinner table — cube-bodied voxel male from reference, casual home button-down. Camera at table level, 3/4 angle. His hands are doing an explanatory gesture — the universal vague wave of someone who has no real information but needs to seem like he does. "You know, the machines. The trainer handles all that." His expression: performed ease, not quite convincing under scrutiny. Cool ambient dining light. Color palette: cool slate #CBD5E1, warm dinner tone fading, neutral home tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F08C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Mara's face across the dinner table — cube-bodied voxel character from reference. She is listening to Daniel's non-answer with the expression of someone who is very carefully noting everything. Not suspicious-looking on the surface — she would not give herself away. But her eyes: sharp, recording, precise. This is the third time she has asked. She will not ask a fourth. Cool ambient dining light. Color palette: cool slate #CBD5E1, dark composed eyes, neutral dinner tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F09 — Blue Hydro Flask in Mara's Hands — Still Completely Full | Beat 3 | COOL ⭐

**F09A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the kitchen — Mara standing at the counter on a Friday morning, holding the blue Hydro Flask that Daniel forgot. The kitchen is ordinarily warm but something has shifted — a cool undertone entering. Mara is still. The gym bag is gone (Daniel already left with everything else). But the water bottle is here, in her hands, and it is heavy. Full. Always full. Camera: isometric wide, cool light beginning to dominate. Color palette: cool slate #CBD5E1 entering, cream #F3E9D2 fading, morning light cooler. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara holding the blue Hydro Flask in both hands — cube-bodied voxel character from reference, morning home clothes, dark hair loose. Camera at waist level, 3/4 angle. She holds the bottle out slightly, as if weighing it. It is full. She knows what a water bottle feels like after a two-hour workout — she'd had her own. This bottle weighs exactly what it did when it left the house. She looks at it for a long moment. Cool kitchen light. Color palette: cool slate #CBD5E1, blue #2563EB bottle, cream #F3E9D2 surface. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F09C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel hero shot of the blue Hydro Flask — Mara's hands visible holding it at the bottom. The water level is visible through a transparent section or suggested by the bottle's weight and the uncondensed exterior. Cap pristine. No wear on the mouthpiece. No evidence that this bottle has ever been used for its stated purpose. Cool sidelight from the kitchen window. Color palette: vivid blue #2563EB bottle, cream #F3E9D2 hands, cool slate #CBD5E1 ambient light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F10 — Velocity Fitness Exterior — Mara's Car in Parking Lot | Beat 4 | DARK COLD ⭐

**F10A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a fitness gym exterior at morning — "Velocity Fitness" signage above the entrance, clean modern gym building, large windows showing equipment inside, glass door with pull handle. The parking lot has a few cars but is mostly quiet. The light is bright morning commercial — slightly clinical, cool. No character visible yet. This is the location of the reveal. Camera: isometric wide establishing shot. Color palette: dark cold navy #0B1426 shadows, cool blue #3B82F6 gym window light, gray exterior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10B** — Medium Shot — DUTCH TILT
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium DUTCH TILT voxel shot of Mara's car in the gym parking lot — cube-bodied voxel character from reference visible through the windshield, parked, engine off. Camera at slight Dutch angle, giving the frame a sense of psychological wrongness. The gym building is visible in the background — the signage she will walk into in a moment. Mara's silhouette is composed but the Dutch angle makes the world feel tilted. Dark cold morning light. Color palette: dark cold navy #0B1426, cool blue #3B82F6 gym windows in background. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F10C** — Close-Up / ECU — DUTCH TILT
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Close-up DUTCH TILT voxel shot of Mara at the gym front desk speaking to the young desk attendant — cube-bodied voxel character from reference, casual workout clothes (she dressed for the visit). The desk attendant is typing on a computer. Mara is asking the question. The Dutch angle holds the sense of a world about to tilt further. Cool gym interior lighting — commercial, clinical. Color palette: dark cold navy #0B1426 ambient, cool blue #3B82F6 computer screen glow, cream #F3E9D2 Mara's clothing. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F11 — Gym Check-In Screen — "No Results for Daniel Marsh" | Beat 4 | DARK COLD ⭐ PEAK BETRAYAL

**F11A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the gym reception desk area — Mara on one side, the young front desk attendant on the other, computer screen between them. The screen emits a cool blue-white glow. The attendant is looking at it with a slightly puzzled expression, having typed the name twice. Mara's expression: controlled, still. She knows what the screen is about to confirm. Dark cold gym interior light, commercial fluorescent undertone. Color palette: dark cold navy #0B1426, cool blue #3B82F6 screen glow, cream #F3E9D2 Mara's posture. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11B** — Medium Shot — DUTCH TILT
**Model**: Ideogram 3

```
Medium DUTCH TILT voxel shot of the gym's computer check-in screen — clean voxel UI design, member lookup interface. The search field shows "Daniel Marsh" typed in. The results area shows: "No member found" with an empty list below. The screen is the center of the frame, Dutch-tilted, the cold blue glow the dominant light source. Gym reception counter visible at bottom. Voxel-style gym management software UI. Color palette: dark cold navy #0B1426 background, cool blue #3B82F6 screen, white text "No member found: Daniel Marsh". Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F11C** — Close-Up / ECU — DUTCH TILT
**Model**: Ideogram 3

```
Extreme close-up DUTCH TILT voxel shot of the gym check-in screen — the text filling the frame: "Member Search: Daniel Marsh" — search bar on top. Below, in clear bold text: "No results found." And beneath that, smaller: "This name has no active or past membership on record." Dutch angle on the screen. Cold blue-white screen glow is the only light. The text is legible, factual, devastating. Color palette: dark navy #0B1426 background, cool blue #3B82F6 glow, white legible text. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F12 — Mara Alone in Parking Lot Car — Watching Clock, 9 Minutes | Beat 4 | DARK COLD ⭐

**F12A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a near-empty gym parking lot in mid-morning — only a few cars scattered far apart. One car in the foreground: Mara's, parked, engine off, windshield showing a figure sitting still inside. The gym building is visible in the background. The lot is quiet, open, the cold morning light casting long shadows. There is nothing happening. She is just sitting. And sitting is everything right now. Camera: isometric wide shot. Color palette: dark cold navy #0B1426 pavement shadows, cool blue #3B82F6 sky, gray parking lot. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12B** — Medium Shot — DUTCH TILT
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium DUTCH TILT voxel shot of Mara in the driver's seat of her car — cube-bodied voxel character from reference, hands on the steering wheel, engine off. She is not moving. Not crying. Not screaming. She is simply sitting, with the precision of someone counting seconds, watching the clock on the dashboard. Dutch angle makes the car interior feel slightly wrong, slightly tilted from what life should be. Dark cold interior light — only the dashboard glow. Color palette: dark cold navy #0B1426 interior, dashboard blue glow #3B82F6, cream #F3E9D2 Mara. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F12C** — Close-Up / ECU — DUTCH TILT
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Close-up DUTCH TILT voxel shot of Mara's hands on the steering wheel — cube-bodied voxel character from reference. Her hands are steady. Not gripping. Just resting. The clock on the dashboard in the background shows 8:52am — she has been sitting for nine minutes. The Dutch angle holds. Her hands do not shake. This is what it looks like to be very good at staying inside yourself. Color palette: dark cold navy #0B1426, dashboard clock glow, cream #F3E9D2 hands. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F13 — Mara Driving Home, Composed — Face Utterly Still | Beat 4 | DARK COLD ⭐

**F13A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a residential street in morning — Mara's car moving through a suburban neighborhood, light traffic. The street looks ordinary: voxel trees, houses, morning commuters. Inside the car, Mara's silhouette is visible — upright, hands at ten and two, driving with total control. The world around her is normal. Something inside the car is not. Camera: wide isometric tracking the car from above. Color palette: dark cold navy #0B1426 shadows, cool morning street tones, gray asphalt. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13B** — Medium Shot — DUTCH TILT
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium DUTCH TILT voxel shot of Mara driving — cube-bodied voxel character from reference, both hands on wheel, eyes forward on the road. Camera inside the car, passenger side angle, Dutch tilt applied. Her expression: utterly still. Not in shock. Not broken. Decided. She has already begun to plan. The Dutch tilt reflects the world tilted in this moment, not her — she is the most level thing in the frame. Dark cold car interior. Color palette: dark cold navy #0B1426, cool morning light through windshield #3B82F6, cream #F3E9D2 Mara. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F13C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up voxel shot of Mara's face — cube-bodied voxel character from reference — while driving home. No Dutch tilt here: the camera is level, the face is level. Her expression: clear, cold, decided. This is not grief. This is the project manager activating. The road is in the background blur. She is already somewhere else — she is already planning. Cool morning light through windshield. Color palette: dark cold navy #0B1426 ambient, morning light #3B82F6 on her face, dark composed eyes. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F14 — Mara Makes Dinner That Evening — Mechanical Calm | Beat 5 | DARK

**F14A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the home kitchen that evening — the same kitchen as F02 but now cold. The warm gold light has been replaced by cooler, more clinical overhead illumination. Mara stands at the stove stirring dinner. Daniel is visible at the kitchen table in the background — oblivious, scrolling his phone. The domestic scene looks normal. Everything underneath it has changed. Camera: isometric wide. Color palette: dark desaturated #1F2937 ambient, cold kitchen tones, no warm gold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at the stove — cube-bodied voxel character from reference, home clothes. Camera at stove level, 3/4 angle. Her hands stir the pot on automatic. Her eyes are elsewhere. Not unfocused — calculating. The motions of dinner-making continue because she decided they would continue. Because she is not going to be reactive. She is going to be precise. Cold overhead kitchen light. Color palette: dark desaturated #1F2937, muted kitchen tones, no gold warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F14C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of a pot on the stove — ordinary dinner being made. The food is fine. The stirring spoon moves. The steam rises. This is a dinner that is happening because routines happen even when everything beneath them has been destroyed. Cold overhead light, no warmth in the color. Color palette: dark desaturated #1F2937, muted food tones, no warm gold. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F15 — Credit Card Statement — VM Personal Training LLC | Beat 5 | DARK COLD ⭐

**F15A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a home study desk — Mara sits at the desk surrounded by documents she has printed. Multiple pages, organized and highlighted already. She is doing what she is best at: documenting. Building a case. The desk light is the only warm thing in the frame; everything else is dark and purposeful. Camera: isometric wide. Color palette: dark cold #0B1426, warm desk lamp pool #D4A547, document cream #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15B** — Medium Shot
**Model**: Ideogram 3

```
Medium cinematic voxel shot of a credit card statement laid on a desk — clean voxel document design. The statement shows a clear line item: "VM Personal Training LLC — $1,440.00" highlighted or circled. Below it, the charge date. The document is authoritative, factual, and damning. A pen rests beside it. Desk lamp light from above. Color palette: dark cold #0B1426, warm desk lamp #D4A547, cream document #F3E9D2, dark text legible. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F15C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the credit card statement charge line — filling the frame: "VM Personal Training LLC" in clean sans-serif text, the amount "$1,440.00" beside it, the date range "January–June" below. A yellow highlighter mark runs under the line. This is not Velocity Fitness. This is an LLC. This is the paper trail. Warm desk lamp sidelight. Color palette: cream #F3E9D2 document, dark navy text, yellow highlight, warm lamp gold #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F16 — Mara's Phone — Attorney Stephanie Okafor Contact | Beat 5 | DARK

**F16A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the home kitchen — Mara at the kitchen table, phone to her ear, morning coffee beside her. Daniel's gym bag is visible by the door (he has already left for his "session"). Mara speaks quietly, precise. This is the first call to her attorney. The kitchen is hollow, cold. She does not look upset. She looks like someone conducting important business, because she is. Camera: isometric wide. Color palette: dark desaturated #1F2937, morning cold light, no gold warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at the kitchen table — cube-bodied voxel character from reference, phone to ear, posture erect and intentional. Her expression: focused, listening intently. She has a notepad in front of her; she is taking notes. This is not a panicked call — this is a strategic call. Stephanie Okafor is speaking on the other end. Mara is writing everything down. Cold morning ambient light. Color palette: dark desaturated #1F2937, muted kitchen tones, cream notepad #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F16C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of a phone screen showing "Stephanie Okafor · Family Law Attorney" as the contact header, active call timer visible — 00:14:23 — showing a long, substantive call in progress. The screen is clean, professional, legible. Cold ambient light. Color palette: dark cold #0B1426 phone exterior, screen blue-white glow, legible white contact name. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F17 — House Deed Document — Mara's Name Only | Beat 5 | DARK

**F17A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a home study — Mara at a desk with multiple documents spread before her: the deed, mortgage papers, a notepad of dates and figures. She is organized. She knows what she has. A file box is open beside her. The desk lamp provides the only warm light in an otherwise cold scene. Camera: isometric wide. Color palette: dark cold #0B1426 room, warm desk lamp pool #D4A547, cream documents #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara holding the house deed — cube-bodied voxel character from reference, reading it at her desk. Her expression: calm recognition, the satisfaction of a woman who bought a house in her own name before she trusted anyone enough to share it. The document is clearly a legal deed — header visible, pages thick. Warm desk lamp light catches her face from below. Color palette: dark cold #0B1426 ambient, warm desk lamp #D4A547, cream deed #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F17C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the top of the house deed document — clean legal document design. The header reads "PROPERTY DEED" and below it: "Owner of Record: Mara [—]" with a blank surname for privacy. The deed is dated two years before the marriage. Her name alone. The warm desk lamp light catches the document edge. Color palette: cream #F3E9D2 document, dark navy text, warm gold desk lamp #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F18 — VM Personal Training LLC State Filing Document | Beat 6 | TURNING WARM ⭐

**F18A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of Mara at her home desk — laptop open, warm desk lamp on, the study slightly warmer now as the pivot begins. She has been researching. The state business bureau website is on the screen. She sits forward, focused, the energy in the scene subtly shifting from dark cold to purposeful warm. This is the moment she finds the information that sets everything in motion. Camera: isometric wide, warm lamp now competing with the cold. Color palette: returning warm #D4A547 desk lamp, dark cold #0B1426 fading, cream #F3E9D2 surfaces. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18B** — Medium Shot
**Model**: Ideogram 3

```
Medium cinematic voxel shot of a laptop screen showing a state business registration website — clean voxel web UI design. The page shows: "VM Personal Training LLC — Active Business Registration" — below it: "Registered Owner: Veronica Malone" — and below that: "Co-signatory on founding loan: Owen Malone." The screen is legible, the information clear. Warm desk lamp light from the left; cool screen glow from center. Color palette: returning warm #D4A547 lamp, screen blue-white glow, cream #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F18C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the business filing section of the laptop screen — the two key lines filling the frame: "Registered Owner: Veronica Malone" in clean sans-serif text. Below it: "Co-signatory: Owen Malone." The name "Owen Malone" is slightly highlighted or circled by a voxel cursor. This name is the key that unlocks everything. Warm desk lamp sidelight on the screen. Color palette: warm gold #D4A547 sidelight, screen white glow, dark navy text on cream. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F19 — Mara Composing Email to Veronica — Professional, One Paragraph | Beat 6 | TURNING WARM ⭐

**F19A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the home desk — Mara at her laptop in the evening, desk lamp warm. The documents are still spread around her but she is now composing, not just reading. The scene feels more active, more purposeful. The laptop screen glows. She knows exactly what she is going to write. Camera: isometric wide, warm lamp dominant. Color palette: returning warm #D4A547, cream #F3E9D2 documents, dark navy background fading. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at her laptop — cube-bodied voxel character from reference, slate blue blazer back on, composed professional. Camera at desk level, 3/4 angle. She is typing with deliberate precision. Her expression: calm, certain, professional. She has drafted the email three times in her head before touching the keyboard. No anger in her posture. Pure precision. Warm desk lamp light from left. Color palette: returning warm #D4A547 lamp, cream #F3E9D2 blazer, screen glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F19C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the laptop screen showing the composed email — clean voxel email UI. TO: "veronica@vmpersonaltraining.com" — SUBJECT: "Re: My Husband" — Body text (partial, legible): "I believe you have been meeting with my husband outside of your stated professional capacity. My attorney will be in contact. I wanted you to be prepared." — Below the text: a large "SEND" button, highlighted, cursor hovering. The email is one paragraph. No profanity. No threats. Warm desk lamp sidelight. Color palette: warm gold #D4A547 sidelight, screen white, dark text legible. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F20 — Attorney's Office — Mara Signing Divorce Papers | Beat 6 | TURNING WARM

**F20A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a family law attorney's office — professional, warm wood tones and cream walls, bookshelf with legal volumes, a desk with neat paperwork. Mara sits across from attorney Stephanie — a cube-bodied voxel female figure, dark blazer, natural hair, notepad, sharp attentive expression. Documents are laid out between them on the desk. The meeting is professional, calm, purposeful. Camera: isometric wide, returning warm tones. Color palette: returning warm #D4A547 office lamp, cream #F3E9D2 walls, professional warm wood. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara at the attorney's desk — cube-bodied voxel character from reference, slate blue blazer, composed posture. A pen is in her hand, hovering over the divorce filing papers. Her expression: clear, resolved, without drama. She has thought about this moment. She is ready. Stephanie's hands are visible on the other side of the desk, guiding. Warm desk lamp light. Color palette: returning warm #D4A547, cream #F3E9D2 papers, dark navy signature area. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F20C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of a pen signing a document — the signature line visible, "Mara [—]" being written in clean deliberate strokes. The document header above reads "Petition for Dissolution of Marriage." The pen is a good pen — not a throwaway. She chose this pen. Warm desk lamp sidelight. Color palette: cream #F3E9D2 document, warm gold lamp #D4A547, dark signature ink. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F21 — Mara Tells Daniel — Kitchen, Morning, Coffee in Hand | Beat 6 | TURNING WARM ⭐

**F21A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of the home kitchen on a June morning — both Mara and Daniel visible. Mara stands near the counter with her coffee mug and her keys in hand. Daniel stands near the table, recently returned from his "session" — gym bag on a chair. Mara's posture is open, direct. Daniel's is relaxed, unsuspecting. This is the moment just before she speaks. Camera: isometric wide. Color palette: returning warm #D4A547 kitchen light, cream #F3E9D2 walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara — cube-bodied voxel character from reference, slate blue blazer, keys in one hand, coffee mug in the other. Camera at kitchen counter level, 3/4 angle. She faces slightly toward where Daniel would be, her expression calm, factual. She says it the same way she would say anything that is simply true: "You were never at the gym, Daniel." No raised voice. No performance. Warm kitchen morning light. Color palette: returning warm #D4A547, cream #F3E9D2 blazer, slate blue pop. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F21C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Daniel's face — cube-bodied voxel character from reference — in the moment of hearing the words. His expression: the particular collapse of someone whose performance has just met an audience that stopped believing it. Mouth opening, closing. Three sentence starts that go nowhere. The ease is gone. The confidence is gone. The warm kitchen light from behind doesn't reach his face the way it used to. Color palette: returning warm #D4A547 background, Daniel's face going cool and flat in the foreground. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F22 — First Light Gym Exterior — Women-Owned Studio Signage | Beat 7 | FULL WARM

**F22A** — Wide / Establishing
**Model**: Seedream 4.5

```
Wide atmospheric voxel shot of a warm, welcoming small gym studio exterior — "First Light" written in clean warm signage above the entrance. The building is modest but well-kept: large windows showing the studio inside, warm light visible within, a small chalk board outside. Dawn light is beginning to touch the exterior, soft pink-gold at the edges. Women's fitness studio energy — inviting, real, no performance. Camera: wide isometric establishing shot, warm dawn light. Color palette: full warm gold #D4A547 dawn light, cream #F3E9D2 studio exterior, sage #6B7F5A accent planters. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the First Light gym entrance — the signage above the door in warm wood-backed lettering: "First Light · Women's Fitness Studio." Below the sign, the glass door shows a warm-lit studio interior. A small chalk board beside the door shows class times. The dawn light catches the sign surface. This is a real place, unpretentious and genuine. Camera at entrance level, 3/4 angle. Color palette: full warm gold #D4A547 dawn, cream #F3E9D2 exterior, warm interior glow. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F22C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the First Light studio sign — warm wood backing, clean serif typography: "First Light" in large letters, below it smaller: "Women's Fitness Studio" — and below that: "Est. with intention." The sign is warm, genuine, not corporate. Dawn gold light catches the lettering surface. Color palette: warm wood sign tones, gold #D4A547 dawn light, cream #F3E9D2 lettering. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F23 — Mara Meets Attorney Stephanie — Plan Comes Together | Beat 7 | FULL WARM

**F23A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of attorney Stephanie's office — warm professional space, legal bookshelf, cream walls, warm desk lamp. Mara and Stephanie are seated across from each other, papers between them — settlement documents, the deed, financial statements. The energy in the room is focused and purposeful. Both figures lean forward slightly. This is the plan being executed. Camera: isometric wide, full warm tones returning. Color palette: full warm gold #D4A547 office lamp, cream #F3E9D2 walls, warm wood desk. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara in the attorney's office — cube-bodied voxel character from reference, slate blue blazer, composed, leaning forward over the documents. Her expression: clear, decided, fully present. She is not the person who fell apart — she is the person who researched, documented, and arrived prepared. Stephanie's hands visible on the other side, pointing to figures on a document. Warm office lamp light. Color palette: full warm gold #D4A547, slate blue blazer pop, cream #F3E9D2 documents. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F23C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Mara's face in the attorney's office — cube-bodied voxel character from reference — in the moment of full clarity. Her eyes: sharp, satisfied in a quiet way. She has done everything right. She knows it. The warm lamp light from Stephanie's desk catches the side of her face. This is the look of someone who knew what was hers, protected it, and is watching the plan complete. Color palette: full warm gold #D4A547 lamp, dark resolved eyes, cream #F3E9D2 skin tone. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F24 — Veronica's Training Space — Business Collapsing | Beat 7 | COLD GRAY ⭐

**F24A** — Wide / Establishing
**Model**: Nano Banana 2 + veronica-ep15-voxel-base.png

```
Wide isometric voxel shot of a small gym studio space — once busy, now clearly sparse. Only two or three voxel client figures remain; equipment sits unused in the background. The energy has left the room. Veronica — cube-bodied voxel character from reference, coral-teal jacket slightly rumpled — stands near the center of the floor, checking her phone. The studio feels emptied out. Cold gray institutional light. Camera: isometric wide. Color palette: cold gray #1F2937 ambient, institutional fluorescent tones, muted colors. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24B** — Medium Shot
**Model**: Nano Banana 2 + veronica-ep15-voxel-base.png

```
Medium cinematic voxel shot of Veronica — cube-bodied voxel character from reference — looking at her phone in the studio. Her expression: the confidence is gone. The polish is gone. She is looking at a number she does not want to see — a client roster that has dropped from fourteen to three. Her posture has lost its upright athlete's ease. Cold gray light. Color palette: cold gray #1F2937, muted coral jacket, flat institutional light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F24C** — Close-Up / ECU
**Model**: Nano Banana 2 + veronica-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Veronica's face — cube-bodied voxel character from reference. The confident fitness professional is gone. What remains: worry, calculation, and the beginning of understanding exactly how badly this has gone. Her eyes are flat. The ponytail is slightly loose. Cold gray light. Color palette: cold gray #1F2937, muted coral jacket edge, flat cold light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F25 — Owen Filing Divorce Documents | Beat 7 | COLD GRAY

**F25A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a different attorney's office — cooler, more clinical than Stephanie's. Less warm wood, more institutional. Owen — cube-bodied voxel male figure, early 40s, business casual, shocked and resolute expression — sits across from his attorney. Documents are on the desk: divorce filing papers. The room has the feel of someone who had to find a lawyer quickly, who did not see this coming. Cold gray institutional light. Camera: isometric wide. Color palette: cold gray #1F2937 ambient, institutional cream #F3E9D2, clinical lighting. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of Owen's hands on the desk — cube-bodied voxel male figure — preparing to sign the divorce filing. His posture is deliberate, resigned. He is not angry in a dramatic way; he is angry in the quiet way of someone who believed something that was not true and is now dealing with the reality. Attorney's hand and notepad visible on the other side. Cold gray office light. Color palette: cold gray #1F2937, institutional cream documents #F3E9D2, clinical lighting. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F25C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of a divorce filing document signature line — "Petitioner: Owen Malone" printed above a blank signature line. A pen rests beside it. The document is clinical, factual, devastating in its ordinariness. Cold gray office light. Color palette: cold gray #1F2937 ambient, cream #F3E9D2 document, cold institutional light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F26 — Daniel Alone in Bare Apartment — Unpacked Boxes | Beat 7 | COLD GRAY ⭐

**F26A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of a bare two-bedroom apartment — moving boxes unpacked or half-unpacked stacked against walls, minimal furniture, a folding chair in place of an armchair. The apartment is forty minutes from the house — a fact visible in the impermanence of everything. Daniel — cube-bodied voxel male from reference, casual button-down — sits on a box near the center of the main room, phone in hand. Cold gray apartment light. Camera: isometric wide. Color palette: cold gray #1F2937 ambient, pale institutional walls, flat cold light. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel — cube-bodied voxel male from reference — in the sparse apartment, phone to ear or phone in his hand with Mara's contact visible, unanswered. His posture: the slump of someone whose performance has ended with no audience and no next act. He is not looking at anything in particular. The box he sits on has "LIVING ROOM" written on it in marker. Cold gray light. Color palette: cold gray #1F2937, muted button-down, pale institutional apartment walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F26C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of Daniel's phone screen — showing a call to "Mara" — the call attempt display showing "No answer." The screen is cold blue-white. Her name. His call. Her silence. Cold ambient light from the sparse apartment. Color palette: cold gray #1F2937, phone screen blue-white glow, "Mara" in white text. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F27 — Meridian Boulevard Sublease — VM Training Location Shuttered | Beat 7 | COLD GRAY

**F27A** — Wide / Establishing
**Model**: Flux 2 Pro

```
Wide isometric voxel shot of a commercial street exterior — Meridian Boulevard, modest storefronts, a gym visible a block away. One unit in the foreground is dark: windows papered over or blinds drawn, a "Space Available" sign in the window. This was VM Personal Training LLC. It is nothing now. Cold gray morning light on the empty street. Camera: isometric wide. Color palette: cold gray #1F2937, gray commercial street, institutional building tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27B** — Medium Shot
**Model**: Flux 2 Pro

```
Medium cinematic voxel shot of the shuttered commercial unit — the front door dark, blinds down, "Space Available" sign visible in the window. Inside: empty. The fitness equipment is gone. The clients are gone. The sublease that Owen co-signed and didn't renew: gone. Just a dark empty room that used to be something. Cold gray street light. Color palette: cold gray #1F2937, dark interior through window, institutional street tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F27C** — Close-Up / ECU
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the "Space Available" sign in the window of the shuttered unit — clean printed sign, slightly crooked. Below the main text: a property management phone number. Through the glass behind it: dark empty room, a ghost of the equipment layout visible as floor marks. Cold gray light. Color palette: cold gray #1F2937, white sign, dark interior. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F28 — Settlement Documents — Larger Number Than Daniel Expected | Beat 7 | WARM (Mara) ⭐

**F28A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of attorney Stephanie's office — warm lighting, documents on the desk. Mara sits composed; Stephanie has a document in her hands. The energy in the room is resolved and purposeful. On the other side of a conference table, a smaller detail: a set of documents that represent the settlement. This is the moment things are finalized. Full warm gold light in the office. Camera: isometric wide. Color palette: full warm gold #D4A547, cream #F3E9D2 walls, warm wood desk. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara in the attorney's office — cube-bodied voxel character from reference, slate blue blazer, reading the settlement document. Her expression: the particular quiet satisfaction of someone who did not overreach but got exactly what was right. The document number is partially visible — large. She knew it would be. She knew the equity baseline; she knew the appreciated value; she ran the numbers. Warm office lamp light. Color palette: full warm gold #D4A547, slate blue blazer, cream documents #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F28C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Mara's face in the attorney's office — cube-bodied voxel character from reference. The expression: a quiet, deep exhale of satisfaction. Not triumph. Not gloating. The face of someone who prepared, documented, knew what was hers, and received it. Warm office lamp light from the side. Color palette: full warm gold #D4A547 sidelight, dark composed eyes, calm resolved expression. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F29 — Clementine the Dog with Mara — Vet Record + Adoption Papers | Beat 8 | FULL WARM ⭐

**F29A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a warm living room — Mara on the couch with Clementine the dog (small-medium cube-bodied voxel dog shape, warm brown-tan coloring, friendly simple form) in her lap. Documents are spread on the coffee table — vet records, the original adoption paperwork. The living room is warm: the same house, but now fully hers again. Sage green throw blanket on the couch. Warm gold afternoon light. Camera: isometric wide. Color palette: full warm gold #D4A547, sage #6B7F5A throw, cream #F3E9D2 walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara on the couch — cube-bodied voxel character from reference, casual comfortable clothes, Clementine (warm brown-tan voxel dog) curled in her lap. On the coffee table: the adoption paperwork, vet records. Her expression: warm, unhurried, at home. Clementine was hers before any of this. And Clementine is hers now. Warm afternoon gold light. Color palette: full warm gold #D4A547, sage #6B7F5A couch accent, cream #F3E9D2 home tones. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F29C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of the original dog adoption paperwork on the coffee table — voxel document design, warm afternoon light catching the page. The header reads "Pet Adoption Certificate" and the "Owner" line shows "Mara [—]" — dated years before the marriage. Clementine's voxel paw print visible in a corner of the document. Warm gold light. Color palette: warm gold #D4A547, cream #F3E9D2 document, sage #6B7F5A couch visible at edge. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F30 — Mara Repainting Bedroom Sage Green | Beat 8 | FULL WARM + SAGE ⭐

**F30A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of a bedroom mid-renovation — one wall already sage green #6B7F5A, other walls still cream. Mara — cube-bodied voxel character from reference, old clothes, hair loosely tied back — stands with a paint roller in hand, mid-stroke. Clementine (warm brown-tan voxel dog) is asleep on the floor beside a paint tray. This is Sunday afternoon. This is hers. Camera: isometric wide. Color palette: sage green #6B7F5A new paint, cream #F3E9D2 old walls, warm afternoon gold through window #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara painting — cube-bodied voxel character from reference, old clothes, paint roller up the wall. Camera at wall level, 3/4 angle. The sage green goes up smooth and warm. She wanted this color for years. Daniel said he didn't like it. He does not live here anymore. Her expression: simple, focused pleasure. Warm afternoon gold light through the window. Color palette: sage green #6B7F5A new paint, cream old wall, warm gold light #D4A547. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F30C** — Close-Up / ECU
**Model**: Flux 2 Pro

```
Extreme close-up ECU voxel shot of the paint roller leaving a fresh stroke of sage green on the wall — the voxel texture of new paint over old cream, the color rich and decided. This is the first thing she chose for herself in this house in a long time. Warm afternoon sidelight catches the fresh paint surface. Color palette: sage green #6B7F5A paint, cream #F3E9D2 old wall showing beneath edge, warm gold #D4A547 sidelight. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F31 — Daniel at Budget Gym — Alone, Saturday Morning | Beat 8 | NEUTRAL COOL

**F31A** — Wide / Establishing
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Wide isometric voxel shot of a basic budget gym — fluorescent lighting, older equipment, no premium feel. The kind of gym a membership costs thirty-one dollars a month. Saturday morning: a handful of other voxel figures scattered far apart, no one talking. Daniel — cube-bodied voxel male from reference — is on a cardio machine in the foreground, alone. Camera: isometric wide. Color palette: neutral cold #1F2937 fluorescent shadows, gray gym equipment, pale institutional walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31B** — Medium Shot
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Medium cinematic voxel shot of Daniel on a basic cardio machine — cube-bodied voxel male from reference, gray shirt, black shorts — actually using it this time. He does not have a trainer. There is no audience for this. He is just a man on a machine, alone, on a Saturday, at a gym that cost thirty-one dollars. His expression: deflated, going through motions that used to be a prop for a performance. Cold fluorescent light. Color palette: neutral cold #1F2937, gray gym equipment, pale walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F31C** — Close-Up / ECU
**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Daniel's face — cube-bodied voxel male from reference — on the gym machine. His expression: the particular deflation of someone who has lost everything that gave his performance meaning. Without an audience, without a trainer to see, without Mara to lie to, without Veronica to be impressive for — he is just a man who cannot name a single exercise. Cold fluorescent gym light. Color palette: cold institutional #1F2937, flat gym tone, no warmth. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F32 — First Light Gym Interior — 5am, Mara and Jess Training | Epilogue | FULL WARM ⭐

**F32A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of First Light gym studio interior at 5:00am — warm amber studio lights on, windows dark outside but beginning to hint at pre-dawn. The studio is small, well-equipped, intimate. Mara — cube-bodied voxel character from reference, workout clothes for real use — is training with Jess (cube-bodied voxel female, late 20s, bright athletic wear, warm smile, encouraging energy). No one else in the studio yet. This is hers. Camera: isometric wide. Color palette: full warm gold #D4A547 studio lights, sage #6B7F5A accent, cream #F3E9D2 walls. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara training with Jess — cube-bodied voxel character from reference, actually sweating, actually working. Jess beside her with a clipboard, encouraging. Mara's expression: fully present, focused, doing the real version of what was used as a lie against her. Warm studio light from above. Color palette: full warm gold #D4A547, cream #F3E9D2, sage #6B7F5A accent. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F32C** — Close-Up / ECU
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Extreme close-up ECU voxel shot of Mara's face during training — cube-bodied voxel character from reference, flushed with real effort, expression showing real concentration. No performance. No audience she needs to manage. Just the work and the woman doing it. Warm studio light. Color palette: full warm gold #D4A547, warm flushed face tones, dark focused eyes. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F33 — Mara Home After Real Workout — Sweaty, Green Water Bottle Empty | Epilogue | FULL WARM + SAGE ⭐ EPILOGUE PEAK

**F33A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the home kitchen — fully warm now, sage green accents visible in the redesigned space, morning gold light streaming through the window. Mara — cube-bodied voxel character from reference, workout clothes actually damp and worked in — has just arrived home. She sets the green water bottle on the counter. Clementine (warm brown-tan voxel dog) greets her at the door. The kitchen is hers: ordered, warm, chosen. Camera: isometric wide, full warm. Color palette: full warm gold #D4A547, sage #6B7F5A accents, cream #F3E9D2 kitchen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara in the kitchen — cube-bodied voxel character from reference, post-workout, real sweat visible on her workout clothes, green water bottle in hand. She sets it on the counter. It is empty. Actually empty. She is smiling slightly — not performing happiness but simply in possession of it. Warm gold morning light from the kitchen window. Color palette: full warm gold #D4A547, sage #6B7F5A bottle, cream #F3E9D2 kitchen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F33C** — Close-Up / ECU
**Model**: Seedream 4.5

```
Wide atmospheric voxel shot from inside the warm kitchen looking through the window to the early morning outside — dawn gold and pink beginning to show. In the foreground: the green water bottle on the counter, clearly empty (condensation on the outside, lighter in the light). Behind it: Mara's blurred silhouette beginning to make breakfast. Outside the window: the day beginning. This is what five a.m. was always supposed to look like. Color palette: full warm gold #D4A547 dawn light, sage #6B7F5A bottle, cream #F3E9D2 kitchen, soft pink dawn outside. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### F34 — Mara Making Breakfast, Clementine at Feet — CTA | Epilogue/CTA | FULL WARM + SAGE

**F34A** — Wide / Establishing
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Wide isometric voxel shot of the warm kitchen — Mara at the stove making breakfast, Clementine (warm brown-tan voxel dog) at her feet. The kitchen is fully hers: sage green accents, green water bottle empty on the counter, warm morning gold light streaming through the window. The house is quiet except for the sounds of breakfast being made. This is the epilogue life — simple, earned, real. Camera: isometric wide, full warm. Color palette: full warm gold #D4A547, sage #6B7F5A accents, cream #F3E9D2 kitchen. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34B** — Medium Shot
**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Medium cinematic voxel shot of Mara cooking breakfast — cube-bodied voxel character from reference, clean home clothes post-shower post-workout, content and relaxed. A small butterfly-shaped card is propped against the green water bottle on the counter: "@KarmaCaughtUp · Subscribe." She doesn't notice it in the scene — it's for us. Warm gold morning light. Color palette: full warm gold #D4A547, sage #6B7F5A, cream #F3E9D2. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

**F34C** — Close-Up / ECU — CTA Card
**Model**: Ideogram 3

```
Extreme close-up ECU voxel shot of the butterfly CTA card propped on the kitchen counter — clean warm card design, butterfly illustration in gold and sage tones, text reading: "@KarmaCaughtUp" in large warm serif, below it: "Subscribe. New story every week. 🦋" — warm gold light catching the card. Behind it: the blurred warm kitchen. The card is small but legible. Color palette: warm gold #D4A547 card, sage #6B7F5A butterfly accent, cream #F3E9D2 background. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

## 15 KEN BURNS STILLS — S01 through S15

> **Setup**: Same generation settings as scene frames — 1920×1080, 2K
> **CapCut**: Apply scale keyframe 100%→115% over stated duration
> **ABSOLUTELY NO DUTCH on any Ken Burns still**

---

### S01 — Blue Hydro Flask on Counter — Hero Prop | Beat 1 Hook | WARM | 15s | PUSH IN

**Model**: Flux 2 Pro

```
Still voxel hero image — blue Hydro Flask centered on warm kitchen counter at pre-dawn. The bottle is full, pristine, cap on tight. Under-cabinet gold #D4A547 light catches the blue surface. The countertop is cream #F3E9D2. Nothing else in the close frame — just the bottle and what it represents. Warm pre-dawn kitchen. CapCut: slow push in from wide to medium over 15s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S02 — Daniel Leaving at 5am — Gym Bag, Full Water Bottle | Beat 2 | WARM | 15s | PAN-R

**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Still voxel image — Daniel at the front door at 5:00am departure, gym bag on shoulder, blue Hydro Flask in hand. Warm interior gold #D4A547 behind him, dark pre-dawn street outside. His posture: casual, performed ease. CapCut: slow pan right across the doorway scene over 15s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S03 — Mara Sniffing Gym Shirt — No Smell | Beat 3 | COOL | 20s | PUSH IN

**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Still voxel image — Mara in the laundry room, holding Daniel's gray athletic shirt up to her face. Her expression: puzzled, processing. The shirt is too clean. Cool slate #CBD5E1 laundry room light. CapCut: slow push in on her face and the shirt over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S04 — Blue Hydro Flask in Mara's Hands — Full | Beat 3 | COOL | 20s | TILT-DN

**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Still voxel image — Mara holding the blue Hydro Flask in both hands in the kitchen, bottle held out slightly as if weighing it. It is full. Cool slate #CBD5E1 kitchen light. The water level is clearly still at maximum. CapCut: slow tilt down from her face to the bottle over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S05 — Mara Walking into Velocity Fitness | Beat 4 | DARK | 25s | PUSH IN

**Model**: Flux 2 Pro

```
Still voxel image — Mara walking through the front door of Velocity Fitness gym, her back slightly to camera, entering. The gym interior is visible ahead — equipment, cool blue-white light. Dark cold navy #0B1426 outside behind her. She is dressed in workout clothes. This is the moment of no return. CapCut: slow push in following her through the door over 25s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S06 — Gym Screen — "No Member Found: Daniel Marsh" | Beat 4 | DARK | 30s | STATIC ⭐ PEAK

**Model**: Ideogram 3

```
Still voxel image — the gym check-in computer screen filling most of the frame. Clean voxel UI: member search interface. Search field: "Daniel Marsh." Results: "No member found." Below: "This name has no active or past membership on record." Cold blue-white screen glow against dark navy #0B1426 background. The text is large and fully legible. STATIC hold — do not move. CapCut: hold static for full 30s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S07 — Mara in Car, Parking Lot, Watching Clock | Beat 4 | DARK | 20s | PULL BACK

**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Still voxel image — Mara in the driver's seat of her car in the gym parking lot, engine off, hands on wheel, clock showing 8:52am. She is still. Not broken — counting. The parking lot extends around the car: nearly empty, cold morning. Dark cold navy #0B1426 ambient. CapCut: slow pull back revealing the emptiness of the lot around her over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S08 — Credit Card Statement — VM Personal Training LLC | Beat 5 | DARK | 20s | DESCENT

**Model**: Ideogram 3

```
Still voxel image — credit card statement document on desk, lamp light from above. Clear line item visible: "VM Personal Training LLC — $1,440.00" — highlighted. Date range below. The document is factual and damning. Dark cold #0B1426 background, warm desk lamp pool on the document. CapCut: slow descent from above the document down to the charge line over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S09 — VM Training LLC Filing — Veronica Malone Named | Beat 6 | TURNING WARM | 20s | PUSH IN ⭐

**Model**: Ideogram 3

```
Still voxel image — laptop screen showing state business bureau registration page. "VM Personal Training LLC — Registered Owner: Veronica Malone." The cursor hovers on "Owen Malone" as co-signatory. Warm desk lamp #D4A547 returning from the left. CapCut: slow push in from laptop-and-desk wide shot to screen close over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S10 — Mara at Laptop — SEND Button Highlighted | Beat 6 | TURNING WARM | 15s | PUSH IN

**Model**: Nano Banana 2 + mara-ep15-voxel-base.png

```
Still voxel image — Mara at her desk, laptop open, email visible on screen, cursor over the SEND button. Her hand rests on the trackpad. Her posture is decided, professional. One paragraph. No threats. Accurate. Ready to send. Warm desk lamp #D4A547 returning. CapCut: slow push in from desk wide shot to cursor on SEND over 15s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S11 — Settlement Document — Number Visible | Beat 7 | FULL WARM | 25s | PUSH IN ⭐

**Model**: Ideogram 3

```
Still voxel image — divorce settlement document on attorney's desk, warm office lamp light. A key figure is visible on the document — the equity settlement amount — larger than expected. The document is official, stamped, real. Warm gold #D4A547 lamp, cream #F3E9D2 document, dark legible text. CapCut: slow push in from document-and-desk to the settlement figure over 25s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S12 — Veronica's Space Shuttered — Space Available Sign | Beat 7 | COLD GRAY | 15s | PAN-L

**Model**: Flux 2 Pro

```
Still voxel image — shuttered commercial unit on Meridian Boulevard, "Space Available" sign in the dark window. The surrounding street is gray and ordinary. This is where VM Personal Training used to be. Cold gray #1F2937 ambient, institutional street light. CapCut: slow pan left across the full length of the shuttered storefront over 15s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S13 — Daniel Alone in Sparse Apartment, Phone Not Answered | Beat 7 | COLD GRAY | 20s | PULL BACK

**Model**: Nano Banana 2 + daniel-ep15-voxel-base.png

```
Still voxel image — Daniel in the bare apartment, phone in hand showing Mara's contact and no answer. Moving boxes around him unpacked. Cold gray #1F2937 apartment light. He sits on a box labeled "LIVING ROOM." CapCut: slow pull back revealing the full extent of the empty apartment around him over 20s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S14 — Green Water Bottle on Counter — Empty, Sweating | Epilogue | FULL WARM + SAGE | 30s | PULL BACK ⭐

**Model**: Flux 2 Pro

```
Still voxel image — green Hydro Flask on the warm kitchen counter, clearly empty after real use, condensation on the outside surface. The bottle is slightly damp, the cap off. Behind it: the warm sage-accented kitchen, Mara's blurred silhouette at the stove. Morning gold #D4A547 light and sage #6B7F5A accents. CapCut: slow pull back from the bottle to reveal the full warm kitchen around it over 30s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

### S15 — Mara at First Light — Running, Dawn Window Behind Her | Epilogue/CTA | FULL WARM + SAGE | 40s | CRANE-UP ⭐ FINAL SHOT

**Model**: Seedream 4.5

```
Still atmospheric voxel image — Mara running on a treadmill at First Light studio, 5:00am. Her form is real, working, no performance. The large studio window behind her shows the pre-dawn sky beginning to lighten: gold and soft pink at the horizon. She does not know the camera is on her. She is just running. Warm studio gold #D4A547 lights, sage #6B7F5A studio accents, dawn light building outside the window. This is the most important still in the episode — generate highest quality. CapCut: slow crane up from ground level to above Mara, revealing the full studio and the dawn window over 40s. Clean premium voxel art, NOT raw Minecraft, NOT realistic. Astroneer meets Crossy Road aesthetic. 1920x1080, 2K.
```

---

**END OF 03b — 117 image prompts complete (102 scene frames + 15 Ken Burns stills)**
