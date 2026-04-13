# 04 — Video Clips (102 Kling 2.5 Turbo × 5s — 3 clips/scene)
# EP05: "The Best Man Speech"

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
| **Marcus** | 31 | Protagonist (structural engineer) | Cream/navy | Cream dress shirt, navy jacket, composed expression |
| **Derek** | ~33 | Antagonist (best man, betrayer) | Dark grey | Dark grey suit, easy smile |
| **Jade** | ~29 | Wife (complicit) | Cream | Cream wedding dress (ceremony + reception) |

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
| F01–F08 | WARM amber gold | Warm amber #D4A547, cream, string-light honey | Ceremony warmth — Riverside Gardens, trust, anticipation |
| F09–F11 | WARM entering crack | Amber still present but first fractures — Derek's unease | The façade holding but fingers trembling |
| F12–F17 | DARK COLD | Deep navy #0B1426, cold gray, single cold light source | Confession, fall, Marcus processing alone |
| F18–F20 | GREY-BLUE DAWN | Blue-grey dawn, cool neutral, cold desk light | Turning — Marcus at his desk, forward motion begins |
| F21–F27 | COLD GRAY | Institutional gray #1F2937, official cool, no warmth | Karma unfolding — Derek's collapse, Marcus building |
| F28–F29 | NEUTRAL COOL | Cool gray, quiet, no warmth | Downfall locked in — Derek gone, Jade gone |
| F30–F34 | FULL WARM + sage | Warm gold, cream, sage green, morning light | Epilogue — quiet satisfaction, new life, channel card |

---

## DUTCH Tilt Rule

**DUTCH tilt ONLY on:** `C12B`, `C12C`, `C13B`, `C13C`, `C14B`

| Clip | Scene | Why |
|---|---|---|
| C12B | Derek at mic — "I can't do this." | The crack moment — world tilting as words leave his mouth |
| C12C | Derek's mouth forming words | Words irrevocable — Dutch locks the wrongness |
| C13B | Confession — "Jade and I. Fourteen months." | Derek's face in focus, crowd blurred — the betrayal |
| C13C | Derek's face — can't unsay it | Full confession out — maximum Dutch impact |
| C14B | Jade turning toward Derek | Jade's face caught — looking at the wrong man |

**NEVER** use DUTCH in F01–F11 (warm/crack entering — world still structured) or F18+ (world reordering to justice).

---

## Beat / Scene Timeline Map

| Beat | Scenes | Time range | Function |
|---|---|---|---|
| BEAT 1 — HOOK | C01–C02 | 0:00–0:30 | Pull viewer in: empty venue + Marcus ordinary morning |
| BEAT 2 — INTRO | C03–C06 | 0:30–1:30 | Establish Marcus + Jade, Marcus + Derek, last trust moment |
| BEAT 3 — THE CRACK | C07–C11 | 1:30–3:00 | Ceremony, vows, reception warmth — then Derek's hand shaking |
| BEAT 4 — THE BETRAYAL | C12–C14 | 3:00–4:30 | "I can't do this." Confession. Jade looking at Derek. |
| BEAT 5 — THE FALL | C15–C17 | 4:30–5:45 | Marcus goes still. Stone steps. Cataloguing memories. |
| BEAT 6 — THE PIVOT | C18–C20 | 5:45–7:00 | Monday 7am. Contracts recovered. Recreation center blueprints. |
| BEAT 7 — KARMA | C21–C27 | 7:00–9:00 | Instagram, courthouse, Derek's decline, LinkedIn gone, approval |
| BEAT 8 — EPILOGUE | C28–C31 | 9:00–10:30 | Downfall complete, ribbon-cutting, Marcus project lead, chili |
| CONTRAST/CLOSE | C32–C33 | 10:30–11:00 | Marcus + someone new. Two coffee cups. |
| CTA | C34 | 11:00–11:30 | Butterfly channel card / subscribe |

---

## 102 Motion Prompts — Scene Table (34 scenes × A + B + C)

| Scene | Beat | Palette | F-A Camera | F-B Camera | F-C Camera | Notes |
|---|---|---|---|---|---|---|
| C01 | HOOK | WARM amber gold | ELS → PUSH | PAN-L + CU | ECU + STATIC | Empty venue, string lights, mic stand — foreboding |
| C02 | HOOK | WARM amber gold | ELS → PUSH | RACK-FOCUS + MS | ECU + STATIC | Marcus at engineering desk, ordinary morning |
| C03 | INTRO | WARM amber gold | ELS → PULL | MS + STATIC | ECU + STATIC | Marcus + Jade, mountain trail engagement |
| C04 | INTRO | WARM amber gold | ELS + STATIC | MS + PAN-R | ECU + STATIC | Marcus + Derek, college friendship warm bar |
| C05 | INTRO | WARM amber gold | CRANE-UP | PAN-R + CU | ECU + STATIC | Wedding morning, groom suite |
| C06 | INTRO | WARM amber gold | MS + STATIC | PUSH + CU | ECU + STATIC | Derek helps Marcus cufflinks ⭐ — last trust moment |
| C07 | THE CRACK | WARM amber gold | ELS → PUSH | DOLLY + CU | ECU + STATIC | Jade walks in, ceremony |
| C08 | THE CRACK | WARM amber gold | ELS + STATIC | MS + ORBIT-L | ECU + STATIC | Vows, Marcus + Jade at altar |
| C09 | THE CRACK | WARM amber gold | CRANE-UP | PAN-L + MS | ECU + STATIC | Reception, 74 guests, warmth peak |
| C10 | THE CRACK | WARM entering crack | ELS → PUSH | MS + STATIC | CU + STATIC | Derek stands, buttons jacket — first unease |
| C11 | THE CRACK | WARM entering crack | ELS → PULL | RACK-FOCUS + CU | ECU + STATIC | Derek's hand shaking on glass ⭐ |
| C12 | THE BETRAYAL | DARK COLD | ELS → PULL | DOLLY + CU + DUTCH ⚠️ | ECU + DUTCH ⚠️ | "I can't do this." ⭐ |
| C13 | THE BETRAYAL | DARK COLD | ELS + STATIC | RACK-FOCUS + DUTCH ⚠️ | ECU + DUTCH ⚠️ | Confession — "Jade and I. Fourteen months." ⭐ |
| C14 | THE BETRAYAL | DARK COLD | ELS + STATIC | DOLLY + CU + DUTCH ⚠️ | ECU + STATIC | Jade looking at Derek ⭐ |
| C15 | THE FALL | DARK COLD | ELS → PULL | PUSH + CU | ECU + STATIC | Marcus goes very still ⭐ |
| C16 | THE FALL | DARK COLD | ELS → PULL | MS + STATIC | ECU + STATIC | Marcus on stone steps, 6:47 PM, mother |
| C17 | THE FALL | DARK COLD | ELS + STATIC | RACK-FOCUS + CU | ECU + STATIC | Cataloguing memories — engineer mode |
| C18 | THE PIVOT | GREY-BLUE DAWN | CRANE-UP | PUSH + CU | ECU + STATIC | Monday 7am, Marcus at desk |
| C19 | THE PIVOT | GREY-BLUE DAWN | ELS → PUSH | DOLLY + CU | ECU + STATIC | Contracts, deposits recovered — "61%" |
| C20 | THE PIVOT | GREY-BLUE DAWN | ELS → PUSH | PAN-R + CU | ECU + STATIC | Recreation center blueprints ⭐ |
| C21 | KARMA | COLD GRAY | ELS → PULL | RACK-FOCUS + CU | ECU + STATIC | Instagram — Derek + Jade public |
| C22 | KARMA | COLD GRAY | ELS + STATIC | DOLLY + CU | ECU + STATIC | Courthouse ceremony — just two, no crowd |
| C23 | KARMA | COLD GRAY | ELS + STATIC | PULL + LS | ECU + STATIC | Derek's decline, disappearances |
| C24 | KARMA | COLD GRAY | ELS → PUSH | RACK-FOCUS + CU | ECU + STATIC | LinkedIn "Private" — profile unavailable |
| C25 | KARMA | COLD GRAY | ELS → PULL | PUSH + CU | ECU + STATIC | Mutual friend's text — "Heard about Derek" |
| C26 | KARMA | COLD GRAY | ELS + STATIC | PULL + LS | ECU + STATIC | Jade moved out, studio — starting over |
| C27 | KARMA | COLD GRAY | ELS → PUSH | DOLLY + CU | ECU + STATIC | Recreation center — "No revisions" ⭐ |
| C28 | DOWNFALL | NEUTRAL COOL | CRANE-UP | DESCENT | ECU + STATIC | Derek's empty desk — dead plant, cold inbox |
| C29 | DOWNFALL | NEUTRAL COOL | ELS → PULL | PUSH + CU | ECU + STATIC | Jade new city, online — starting over |
| C30 | EPILOGUE | FULL WARM + sage | ELS + STATIC | PAN-R + CU | ECU + STATIC | Ribbon-cutting, Marcus in back ⭐ |
| C31 | EPILOGUE | FULL WARM + sage | ELS → PUSH | DOLLY + CU | ECU + STATIC | Marcus project lead — nameplate |
| C32 | EPILOGUE | FULL WARM + sage | ELS + STATIC | MS + STATIC | ECU + STATIC | Marcus + mother, chili, Lexington Ave ⭐ |
| C33 | EPILOGUE | FULL WARM + sage | ELS + STATIC | MS + ORBIT-L | CU + STATIC | Marcus + someone new — two coffee cups ⭐ |
| C34 | CTA | FULL WARM + sage | PUSH + ORBIT-R | PULL + ELS | STATIC | Butterfly channel card ⭐ |

---

## Quick Reference — Camera by Clip

| Scene | A | B | C |
|---|---|---|---|
| C01 | ELS → PUSH | PAN-L + CU | ECU + STATIC |
| C02 | ELS → PUSH | RACK-FOCUS + MS | ECU + STATIC |
| C03 | ELS → PULL | MS + STATIC | ECU + STATIC |
| C04 | ELS + STATIC | MS + PAN-R | ECU + STATIC |
| C05 | CRANE-UP | PAN-R + CU | ECU + STATIC |
| C06 | MS + STATIC | PUSH + CU | ECU + STATIC |
| C07 | ELS → PUSH | DOLLY + CU | ECU + STATIC |
| C08 | ELS + STATIC | MS + ORBIT-L | ECU + STATIC |
| C09 | CRANE-UP | PAN-L + MS | ECU + STATIC |
| C10 | ELS → PUSH | MS + STATIC | CU + STATIC |
| C11 | ELS → PULL | RACK-FOCUS + CU | ECU + STATIC |
| C12 | ELS → PULL | DOLLY + CU **⚠️DUTCH** | ECU **⚠️DUTCH** |
| C13 | ELS + STATIC | RACK-FOCUS **⚠️DUTCH** | ECU **⚠️DUTCH** |
| C14 | ELS + STATIC | DOLLY + CU **⚠️DUTCH** | ECU + STATIC |
| C15 | ELS → PULL | PUSH + CU | ECU + STATIC |
| C16 | ELS → PULL | MS + STATIC | ECU + STATIC |
| C17 | ELS + STATIC | RACK-FOCUS + CU | ECU + STATIC |
| C18 | CRANE-UP | PUSH + CU | ECU + STATIC |
| C19 | ELS → PUSH | DOLLY + CU | ECU + STATIC |
| C20 | ELS → PUSH | PAN-R + CU | ECU + STATIC |
| C21 | ELS → PULL | RACK-FOCUS + CU | ECU + STATIC |
| C22 | ELS + STATIC | DOLLY + CU | ECU + STATIC |
| C23 | ELS + STATIC | PULL + LS | ECU + STATIC |
| C24 | ELS → PUSH | RACK-FOCUS + CU | ECU + STATIC |
| C25 | ELS → PULL | PUSH + CU | ECU + STATIC |
| C26 | ELS + STATIC | PULL + LS | ECU + STATIC |
| C27 | ELS → PUSH | DOLLY + CU | ECU + STATIC |
| C28 | CRANE-UP | DESCENT | ECU + STATIC |
| C29 | ELS → PULL | PUSH + CU | ECU + STATIC |
| C30 | ELS + STATIC | PAN-R + CU | ECU + STATIC |
| C31 | ELS → PUSH | DOLLY + CU | ECU + STATIC |
| C32 | ELS + STATIC | MS + STATIC | ECU + STATIC |
| C33 | ELS + STATIC | MS + ORBIT-L | CU + STATIC |
| C34 | PUSH + ORBIT-R | PULL + ELS | STATIC |
