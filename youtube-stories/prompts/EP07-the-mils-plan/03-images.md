# EP07 — Images
## V4 Image Prompts — 117 Total

---

## V4 Guide

| Element | Spec |
|---|---|
| Total images | **117** (102 scene frames + 15 Ken Burns stills) |
| Scene frames | 34 scenes × 3 angles = **102 frames** (F{NN}A / F{NN}B / F{NN}C) |
| Ken Burns stills | **15 stills** (S01–S15) — longer holds, emotional anchor moments |
| Resolution | 1920×1080 (all frames) |
| Style | Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road. 2K |

**Naming convention**:
- Scene frames: `F{NN}{angle}.png` — e.g., `F01A.png`, `F01B.png`, `F01C.png`
- Ken Burns stills: `S{NN}.png` — e.g., `S01.png`
- Angles: A = primary/establishing, B = closer/reaction, C = detail/alternate angle or DUTCH (betrayal zone only)

---

## Model Routing Table

| Model | Use case | Scenes |
|---|---|---|
| **Nano Banana 2** + `claire-voxel-base.png` | Claire present in frame | F02, F03, F04, F10, F11, F15, F16, F17, F18, F19, F20, F21, F22, F23, F24, F25, F33, F34 |
| **Nano Banana 2** + `owen-voxel-base.png` | Owen present in frame | F03, F04, F06, F11, F12, F14, F25, F26, F27, F28, F33 |
| **Nano Banana 2** + `renata-voxel-base.png` | Renata present in frame | F05, F07, F08, F09, F13, F30 |
| **Nano Banana 2** + both refs | Claire + Owen together | F03, F04, F11, F25, F33 |
| **Nano Banana 2** + both refs | Owen + Renata together | — (use judgment for F08, F09) |
| **Flux 2 Pro** | Environments, no character or character secondary | F01, F02 (env layer), F07 (env), F16 (env), F27 (env), F31 (env), F32 (env) |
| **Ideogram 3** | Readable text on screen / documents | F13 (text on screen), F20 (VM3 screen), F21 (VM5 screen), F22 (written log), F29 (no-contact doc), F32 (Facebook post), F34 (nameplate) |

> For scenes using BOTH character + environment: generate environment layer with Flux 2 Pro first, then composite character with Nano Banana 2, OR use Nano Banana 2 with environment description in prompt.

---

## DUTCH Tilt Rules — STRICT

**DUTCH allowed ONLY**: F12B, F13B, F13C, F14B, F15B — betrayal zone (Renata's lies landing on Owen)

**ABSOLUTELY NO DUTCH on**: F01–F10 (setup), F16–F11 (C clips normal), F20+ (pivot onward), ALL Ken Burns stills, ALL epilogue frames

> DUTCH = camera tilted ~10–15 degrees off horizontal. Creates psychological disorientation. Use ONLY where specified. Overuse kills impact.

---

## Color Reference Quick-Card

| Phase | Hex Primary | Hex Secondary | Frames |
|---|---|---|---|
| WARM cream + gold | `#F3E9D2` | `#D4A547` | F01–F04 |
| WARM fading | `#E8D5B0` | `#C4A882` | F05–F10 |
| DARK COLD navy | `#0B1426` | `#162035` | F11–F15 |
| DARK fall | `#0D1A2B` | `#1A2640` | F16–F19 |
| TURNING WARM pre-dawn | `#1C2B3A` → `#3D4F3C` | `#4A6B5A` | F20–F24 |
| COLD GRAY institutional | `#1F2937` | `#374151` | F25–F31 |
| NEUTRAL COOL | `#2D3748` | `#4B5563` | F32–F33 |
| FULL WARM + sage | `#D4A547` | `#6B7F5A` | F34 |

---

## 34-Scene Frame Table

> Each row = 3 frames (A/B/C). Primary model listed — check Model Routing Table for character refs to upload.

| Scene | Frames | Beat | Color Phase | Model | Description | Notes |
|---|---|---|---|---|---|---|
| F01 | F01A F01B F01C | Beat 1 | WARM cream | Flux 2 Pro | Phone screen close-up — voicemail icon glowing amber, dark surrounding, 8 voicemails unread | Foreboding hook. No character. Pure object. |
| F02 | F02A F02B F02C | Beat 2 | WARM cream | Nano Banana 2 (Claire) + Flux 2 Pro (env) | Claire at clinical office — warm professional. Desk, files, community center window behind her | Protagonist intro. Warm, competent, grounded. |
| F03 | F03A F03B F03C | Beat 2 | WARM cream | Nano Banana 2 (Claire + Owen) | Community garden — Claire and Owen meeting, warm afternoon light, garden beds in voxel | Origin warmth. Both characters. |
| F04 | F04A F04B F04C | Beat 2 | WARM cream | Nano Banana 2 (Claire + Owen) | Warm married life — Owen fixing porch step in warm light / phone to ear (lunch call) | Domestic warmth. Happy baseline. |
| F05 | F05A F05B F05C | Beat 2–3 | WARM fading | Nano Banana 2 (Renata) | First Renata meeting — warm hug at doorstep but "door closing" smile, warm interior | Renata intro. Pleasant surface, subtle wrong note. |
| F06 | F06A F06B F06C | Beat 3 | WARM fading | Nano Banana 2 (Owen) | Owen comes home "slightly off" — standing in doorway, jacket still on, Tuesday evening | First crack. Owen's posture subtly closed. |
| F07 | F07A F07B F07C | Beat 3 | WARM fading | Nano Banana 2 (Renata) + Flux 2 Pro (env) | Renata's timed morning calls — phone close-up / Renata with phone / weekday calendar voxel | Pattern establishing. Cool tone creeping in. |
| F08 | F08A F08B F08C | Beat 3 | WARM fading | Nano Banana 2 (Renata) | Renata unannounced visit — childhood food on table, Renata low voice in living room | Intrusion. Warmth used as weapon. |
| F09 | F09A F09B F09C | Beat 3 | WARM fading | Nano Banana 2 (Owen) | Owen: "she said you found my job boring and provincial" — Owen mid-sentence, confused | First rewrite moment. Owen genuinely believes it. |
| F10 | F10A F10B F10C | Beat 3–4 | WARM fading → cold | Nano Banana 2 (Claire) | Claire tracking patterns — professional mind, small notebook open, reading her own notes | Pattern recognition. Professional trained eye. |
| F11 | F11A F11B F11C | Beat 4 | DARK COLD navy | Nano Banana 2 (Claire + Owen) | Sunday kitchen — Owen hands folded on table, no coffee, Claire standing | Silence before betrayal. Weight. |
| F12 | F12A F12B F12C | Beat 4 | DARK COLD navy | Nano Banana 2 (Owen) | "My mother thinks we have a fundamental incompatibility" — Owen at kitchen table, face down | Betrayal approaching. **F12B: DUTCH tilt** |
| F13 | F13A F13B F13C | Beat 4 | DARK COLD navy | Nano Banana 2 (Owen) + Ideogram 3 (text) | "You told her at Thanksgiving you didn't want children" — Owen's face / text on screen ⭐ BETRAYAL PEAK | **F13B: DUTCH tilt. F13C: DUTCH tilt.** Maximum impact. |
| F14 | F14A F14B F14C | Beat 4 | DARK COLD navy | Nano Banana 2 (Claire + Owen) | Owen asks for separation — Claire's face understanding it's Renata, not Owen | Claire's clarity through pain. **F14B: DUTCH tilt** |
| F15 | F15A F15B F15C | Beat 4 | DARK COLD navy | Nano Banana 2 (Claire) | Claire very still — "window-watcher for four years" realization ⭐ | **F15B: DUTCH tilt.** Claire alone with the full picture. |
| F16 | F16A F16B F16C | Beat 5 | DARK fall | Nano Banana 2 (Claire) + Flux 2 Pro (env) | Owen moves to short-term rental — Claire alone in house, evening light | Empty house. Quiet devastation. |
| F17 | F17A F17B F17C | Beat 5 | DARK fall | Nano Banana 2 (Claire) | Claire at work holding it together / alone at home at night | Duality — professional composure vs. private pain |
| F18 | F18A F18B F18C | Beat 5 | DARK fall | Nano Banana 2 (Claire) | Claire's pattern recognition — 4 years of behavior mapping in her mind | Visualization of professional analysis. Mind map or notebook close-up. |
| F19 | F19A F19B F19C | Beat 5–6 | DARK → turning | Nano Banana 2 (Claire) | Finding voicemail archive on phone — Claire's face as she sees the saved list | The turn begins. First light of hope. |
| F20 | F20A F20B F20C | Beat 6 | TURNING WARM | Nano Banana 2 (Claire) + Ideogram 3 (screen) | Listening to VM3 — "not built for closeness with family" on phone screen ⭐ | Pivot begins. Phone screen text must be legible. |
| F21 | F21A F21B F21C | Beat 6 | TURNING WARM | Nano Banana 2 (Claire) + Ideogram 3 (screen) | Listening to VM5 — "some women say they want children and then realize they don't" ⭐ PIVOT PEAK | Clearest evidence. Claire's expression: recognition, not collapse. |
| F22 | F22A F22B F22C | Beat 6 | TURNING WARM | Nano Banana 2 (Claire) + Ideogram 3 (log) | Claire's written log — timestamps + behavior correlations, handwritten in notebook ⭐ | Documentation as weapon. Professional precision. |
| F23 | F23A F23B F23C | Beat 6 | TURNING WARM | Nano Banana 2 (Claire) | Claire calls Owen — phone to ear, calm face, "I found something you should hear" | The call. Steady voice. |
| F24 | F24A F24B F24C | Beat 6 | TURNING WARM | Nano Banana 2 (Claire) | Claire hands Owen phone, turns and leaves the room ⭐ THE MOMENT | No DUTCH. Quiet power. Claire's back as she leaves. |
| F25 | F25A F25B F25C | Beat 7 | COLD GRAY | Nano Banana 2 (Claire + Owen) | Owen listening alone, Claire in kitchen with cold tea | Parallel solitude. Two rooms, one truth. |
| F26 | F26A F26B F26C | Beat 7 | COLD GRAY | Nano Banana 2 (Owen) | Owen comes to find Claire — "How long did you know?" — Owen's face in kitchen doorway | Confrontation turned inward. Owen reckoning. |
| F27 | F27A F27B F27C | Beat 7 | COLD GRAY | Nano Banana 2 (Owen) + Flux 2 Pro (env) | Owen in backyard on phone — Claire watching through kitchen window ⭐ | Distance + witness. Cold gray exterior, warm kitchen glass. |
| F28 | F28A F28B F28C | Beat 7 | COLD GRAY | Nano Banana 2 (Owen) | "Those are from her own number. Her own voice." — Owen's face, certainty | The words. Owen's expression: resolved, not angry. |
| F29 | F29A F29B F29C | Beat 7 | COLD GRAY | Ideogram 3 | No-contact order document — formal document, Owen's name visible ⭐ | Document close-up. Readable text. Institutional gravity. |
| F30 | F30A F30B F30C | Beat 7 | COLD GRAY | Nano Banana 2 (Renata) | Renata calling Diane + Marcus — voicemails shared, Renata on phone unaware | Renata still operating, unaware the network has turned. |
| F31 | F31A F31B F31C | Beat 7 | COLD GRAY → warming | Flux 2 Pro | Christmas — family gathering, warm voxel interior, Renata's seat empty | Renata absent. Warmth returns to family without her. |
| F32 | F32A F32B F32C | Beat 8 | NEUTRAL COOL | Flux 2 Pro + Ideogram 3 | Facebook post — victim narrative on screen, 1 like, 0 comments visible ⭐ | Social media UI in voxel. Readable like/comment count. |
| F33 | F33A F33B F33C | Beat 8 | NEUTRAL COOL | Nano Banana 2 (Claire + Owen) | Claire reads it — "nothing left to prove" — closed case feeling | Claire and Owen together, quiet. Resolution. |
| F34 | F34A F34B F34C | Epilogue | FULL WARM + sage | Nano Banana 2 (Claire) + Ideogram 3 (nameplate) | Clinical Supervisor nameplate + lunch call + voicemails still saved + butterfly card ⭐ | Epilogue warmth. All threads closed. |

---

## Ken Burns Stills — 15 Stills

> Ken Burns = slow zoom or pan on a single still image in CapCut. No Kling clip generated for these.
> Generate as single high-quality images. Duration listed is CapCut hold time.

| Still | Beat | Color Phase | Duration | Model | Description | Notes |
|---|---|---|---|---|---|---|
| S01 | Beat 4 | DARK COLD navy | 20s | Nano Banana 2 (Claire) | Claire's face — "window-watcher" realization ⭐ | Maximum emotional weight. Eyes slightly distant, processing. Slow zoom in. |
| S02 | Beat 2 | WARM cream | 15s | Nano Banana 2 (Claire + Owen) | Community garden — Claire + Owen warm, first meeting | Origin warmth. Slow pan right. |
| S03 | Beat 2 | WARM cream | 15s | Flux 2 Pro | Owen's wedding photo on work desk — voxel framed photo on engineer's desk | Object anchor. Slow zoom in. |
| S04 | Beat 2–3 | WARM fading | 10s | Nano Banana 2 (Renata) | Renata at front door — first meeting, controlled smile ⭐ | The smile that hides everything. Brief hold. |
| S05 | Beat 3 | COOL creeping | 15s | Nano Banana 2 (Renata) | Renata low voice to Owen in living room — Renata leaning slightly toward Owen | The whisper campaign. Cool lighting. Slow zoom to Renata's face. |
| S06 | Beat 6 | TURNING WARM | 20s | Nano Banana 2 (Claire) + Ideogram 3 | Claire's written log — timestamps correlated, behavior grid visible ⭐ | Professional documentation. Pan across page. |
| S07 | Beat 5 | DARK | 15s | Ideogram 3 | Voicemail archive — 8 saved voicemails listed on phone screen, dates visible | The archive that saved the marriage. Slow zoom in. |
| S08 | Beat 6 | TURNING WARM | 20s | Ideogram 3 | VM3 on screen — "not built for closeness with family" in Renata's words ⭐ | Text must be fully readable. Slow zoom to phrase. |
| S09 | Beat 6 | TURNING WARM | 25s | Ideogram 3 | VM5 on screen — "some women say they want children and then realize they don't" ⭐ | Longest Ken Burns. The planted lie visible in text. Pan + zoom. |
| S10 | Beat 7 | COLD GRAY | 20s | Nano Banana 2 (Owen) + Flux 2 Pro (env) | Owen in backyard on phone, Claire watching through window ⭐ | Two planes of glass and four years of damage. Slow push in from inside. |
| S11 | Beat 7 | COLD GRAY | 20s | Ideogram 3 | No-contact order document — Owen's signature visible ⭐ | Institutional weight. Slow zoom to signature. |
| S12 | Beat 7 | WARMING | 20s | Flux 2 Pro | Christmas family gathering — warm voxel interior, Renata's chair visibly empty | The empty chair reads louder than words. Slow pan across room. |
| S13 | Beat 8 | NEUTRAL COOL | 15s | Ideogram 3 | Facebook post — victim narrative, 1 like, 0 comments visible | Renata's last move. The silence of the internet. Slow zoom to like count. |
| S14 | Epilogue | FULL WARM | 15s | Ideogram 3 | Clinical Supervisor nameplate — "Claire [Last Name], Clinical Supervisor" on desk | Claire's name. Her identity intact. Slow zoom in. |
| S15 | Epilogue | FULL WARM + sage | 40s | Ideogram 3 | Phone voicemail archive — all 8 still saved, last timestamp visible ⭐ | Final image. Longest hold. The truth is still there. Slow zoom out from phone. |

---

## CapCut Sequence Logic (per scene)

```
[F{NN}A — 3s] hard cut → [F{NN}B — 3s] hard cut → [F{NN}C — 3s]
                                     ↓
                    crossfade ONLY when transitioning to Ken Burns still
                    Ken Burns still: hold duration per table above
```

- Hard cuts within A/B/C of same scene
- Crossfade ONLY entering Ken Burns stills
- DUTCH clips (F12B, F13B, F13C, F14B, F15B) appear in B or C slot — never as A (establishing)
- After DUTCH zone (F15), return immediately to straight camera — no carry-over

---

## Generation Checklist per Scene

Before generating each scene's 3 frames:
- [ ] Correct character ref uploaded (claire / owen / renata)
- [ ] Correct color hex in prompt
- [ ] Model matches routing table
- [ ] DUTCH only if specified
- [ ] Text legibility confirmed for Ideogram frames
- [ ] Naming: F{NN}A.png, F{NN}B.png, F{NN}C.png
