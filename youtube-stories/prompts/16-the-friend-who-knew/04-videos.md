# EP16 — Video Generation Overview
## 34 Scenes × 3 Clips = 102 Clips Total · Kling 2.5 Turbo

---

## Generation Settings

| Setting | Value |
|---|---|
| Model | Kling 2.5 Turbo |
| Duration | 5s per clip (gen length) |
| Ratio | 16:9 |
| Resolution | 1080p |
| Start frame | Upload F{NN}{X}.png before pasting prompt |
| Save to | `media/videos/C{NN}A.mp4`, `C{NN}B.mp4`, `C{NN}C.mp4` |

---

## Timeline Math

| Unit | Value |
|---|---|
| Total clips generated | 102 × 5s = 510s raw |
| CapCut trim per clip | 5s gen → 3s used |
| Total used footage | 102 × 3s = 306s = ~5:06 |
| Ken Burns stills | 15 × avg 20s = 300s = ~5:00 |
| Total video timeline | ~10:06 (voice track drives final cut) |
| Target finished length | 11:30 (with pauses + music) |

---

## Camera Move Palette

| Move | Code | Beat usage |
|---|---|---|
| Push forward | PUSH | Beat 1-2 establishing shots |
| Pull back | PULL | Betrayal reveals, karma |
| Pan left | PAN-L | Intro sweeps |
| Pan right | PAN-R | Leaving/departing scenes |
| Tilt up | TILT-UP | Establishing buildings |
| Tilt down | TILT-DN | Discovery beats |
| Orbit left | ORBIT-L | Character reveals |
| Orbit right | ORBIT-R | Karma scenes |
| Rack focus | RACK-FOCUS | Hook, detail reveals |
| Dolly | DOLLY | Smooth travel scenes |
| Crane up | CRANE-UP | Epilogue wide reveals |
| Dutch tilt | DUTCH | Beat 3-5 B/C clips ONLY |
| Descent | DESCENT | Overhead drops |
| Static | STATIC | ECU text holds, objects |

**DUTCH RULE**: C10B, C10C, C11B, C11C, C12B, C12C, C13B, C13C ONLY.
**NO DUTCH**: All other clips — especially Epilogue and CTA.

---

## Scene-to-Beat Assignment

| Scene | Name | Beat | Color |
|---|---|---|---|
| C01 | Maya at wedding altar | Hook | WARM |
| C02 | Iris at desk, apartment morning | Intro | WARM |
| C03 | Wedding flashback — Maya's speech | Intro | WARM |
| C04 | Iris and Maya — coffee scene | Intro | WARM |
| C05 | Daniel leaving Thursday morning | Intro | WARM cool edge |
| C06 | Daniel "working late" — phone | Crack | COOL SLATE |
| C07 | Maya's Instagram — hotel geolocation | Crack | COOL SLATE |
| C08 | Iris drives past restaurant | Crack | COOL SLATE |
| C09 | Iris parked — watching clock | Crack | COOL entering cold |
| C10 | Family tablet — 6 Thursdays | Betrayal | DARK COLD [DUTCH B/C] |
| C11 | Maya's Instagram geolocation | Betrayal | DARK COLD [DUTCH B/C] |
| C12 | Iris in parking lot — camera raised | Betrayal | DARK COLD [DUTCH B/C] |
| C13 | Timestamp photo — walking in | Betrayal | DARK COLD [DUTCH B/C] |
| C14 | Iris at desk — planning | Fall | DARK DESATURATED |
| C15 | Iris on phone with sister | Fall | DARK DESATURATED |
| C16 | Attorney search on laptop | Fall | DARK DESATURATED |
| C17 | Iris closes laptop | Fall | DARK DESATURATED |
| C18 | Attorney office exterior | Pivot | PRE-DAWN WARM |
| C19 | Helen reviewing docs — Iris across desk | Pivot | PRE-DAWN WARM |
| C20 | Divorce papers on desk | Pivot | PRE-DAWN WARM |
| C21 | Iris texts Maya "Thursday?" | Pivot | PRE-DAWN WARM |
| C22 | Daniel receives papers — shock | Karma | MIXED |
| C23 | Iris's apartment — deed | Karma | WARM GOLD |
| C24 | Ring box returned | Karma | MIXED COOL |
| C25 | Maya's blocked text | Karma | COOL GRAY |
| C26 | Iris's phone — blocked | Karma | WARM |
| C27 | Iris at desk — 5 clients | Karma | WARM GOLD |
| C28 | Daniel and Maya — gathering | Downfall | NEUTRAL COOL |
| C29 | Moving boxes — Iris packing | Downfall→Transition | NEUTRAL returning WARM |
| C30 | New apartment — east windows | Epilogue | FULL WARM GOLD |
| C31 | Iris at new desk — framed name | Epilogue | FULL WARM |
| C32 | Book group — wine bar | Epilogue | FULL WARM + SAGE |
| C33 | Dinner party — Iris + Callum | Epilogue | FULL WARM GOLD |
| C34 | Apartment buzzer — Iris's name | CTA | FULL WARM + SAGE |

---

## CapCut Assembly Notes

- **Cut order**: A → B → C (hard cut, no transition)
- **Ken Burns stills**: crossfade only — fade in from black, hold, fade out to next clip
- **BGM**: -18dB under voice throughout; slight lift in Epilogue (+2dB)
- **Voice track drives timing**: adjust clip holds to match voice pacing
- **DUTCH clips**: Beat 4 B/C only — ensure cut back to stable frame at C14A
- **Export**: 1080p 30fps H.264, target ~500 Mbps
