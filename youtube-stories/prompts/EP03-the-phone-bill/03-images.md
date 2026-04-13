# 03 — Images Guide — EP03 "The Phone Bill"

> This is a **GUIDE FILE** (system V4). Full per-image prompts go in `03b-images-full-prompts.md`.
> Use this file to understand scope, routing, and naming before generating.

---

## Totals

- **34 scenes × 3 shots** (A/B/C) = **102 start frames**
- **15 Ken Burns stills** = 15 additional images
- **Grand total: 117 images**

---

## Naming convention

| Shot | Label | Use |
|---|---|---|
| F{NN}A.png | Wide / establishing | Scene context, environment |
| F{NN}B.png | Medium / two-shot | Character action, reaction |
| F{NN}C.png | Close / ECU | Detail, emotion, object focus |

**Save all to**: `media/images/`

---

## Model routing

| Content type | Model | Character ref required |
|---|---|---|
| Diane scenes | Nano Banana 2 | + `diane-voxel-base.png` |
| Marcus scenes | Nano Banana 2 | + `marcus-voxel-base.png` |
| Serena scenes | Nano Banana 2 | + `serena-voxel-base.png` |
| Diane + Marcus together | Nano Banana 2 | + both refs |
| Environment / objects / exteriors | Flux 2 Pro | none |
| Text / screens / documents / UI | Ideogram 3 | none |

---

## 34 Scenes — Shot breakdown

| Scene | Description | Beat | Palette | Model | Hero |
|---|---|---|---|---|---|
| **F01** | Diane at kitchen table paying bills — laptop open, warm evening light | Beat 1 | WARM | Nano Banana 2 + Diane | |
| **F02** | Phone bill on screen — itemized, 43 pages visible, scrolling | Beat 1 | WARM→COLD | Ideogram 3 | ⭐ |
| **F03** | Diane and Marcus warm home life — dinner table or vegetable garden | Beat 2 | WARM | Nano Banana 2 + Both | |
| **F04** | Brick house exterior — Richmond VA, warm evening, mature trees | Beat 2 | WARM | Flux 2 Pro | |
| **F05** | First National bank account on screen — joint savings, healthy balance | Beat 2 | WARM | Ideogram 3 | |
| **F06** | Marcus leaving gym late evening — phone in hand, not looking back | Beat 3 | COOL entering | Nano Banana 2 + Marcus | |
| **F07** | Marcus's phone face-down on multiple surfaces — counter, nightstand, car seat | Beat 3 | COOL | Flux 2 Pro | |
| **F08** | Bank email notification — "billing irregularity detected" | Beat 3 | COOL | Ideogram 3 | |
| **F09** | Phone bill spreadsheet — 247 calls, 615 Nashville number highlighted | Beat 3 | COOL→COLD | Ideogram 3 | ⭐ |
| **F10** | Diane dialing 615 number — hand on phone, held breath | Beat 4 | DARK COLD | Nano Banana 2 + Diane | |
| **F11** | Serena answering phone — expression shifting from routine to stunned | Beat 4 | DARK COLD | Nano Banana 2 + Serena | |
| **F12** | All 43 pages of phone bill printed, stacked on kitchen counter | Beat 4 | DARK COLD | Flux 2 Pro | ⭐ |
| **F13** | Diane at kitchen table 4am — laptop open, transaction audit, dark outside | Beat 5 | DARK | Nano Banana 2 + Diane | |
| **F14** | Hotel receipt + jewelry receipt on laptop screen | Beat 5 | DARK | Ideogram 3 | |
| **F15** | Diane dressed at 7am, Marcus still asleep in background — doorway shot | Beat 5 | DARK→TURNING | Nano Banana 2 + Both | |
| **F16** | Bank interior — Diane at advisor desk, 8am, composed | Beat 6 | TURNING WARM | Nano Banana 2 + Diane | |
| **F17** | Lawyer's office — documents spread on desk, Diane calm and signing | Beat 6 | TURNING | Nano Banana 2 + Diane | ⭐ |
| **F18** | Note on kitchen counter: handwritten — "I saw the phone bill. Lawyer: Hendricks." | Beat 6 | TURNING | Ideogram 3 | ⭐ |
| **F19** | Diane's car leaving brick house at dawn — first light, quiet street | Beat 6 | TURNING WARM | Flux 2 Pro | |
| **F20** | Marcus's phone screen — 47 missed calls from Diane | Beat 7 | COLD | Ideogram 3 | |
| **F21** | Exterior Richmond roofing work site — Patrick's domain, wide establishing | Beat 7 | COLD | Flux 2 Pro | |
| **F22** | Marcus receiving email notifications — bids lost, contracts cancelled | Beat 7 | COLD GRAY | Ideogram 3 | |
| **F23** | Joint bank account screen — $212 remaining balance | Beat 7 | COLD GRAY | Ideogram 3 | ⭐ |
| **F24** | Marcus's truck — FOR SALE sign in window, suburban street | Beat 8 | COLD GRAY | Flux 2 Pro | |
| **F25** | Marcus in east-side rental apartment — sparse, small, alone | Beat 8 | COLD GRAY | Nano Banana 2 + Marcus | |
| **F26** | Brick house FOR SALE listing on screen — Diane's real estate alert triggered | Beat 8 | COLD GRAY | Ideogram 3 | |
| **F27** | Phone message thread — Serena: "I hope you're okay." Diane: brief reply | Beat 8 | WARMING | Ideogram 3 | |
| **F28** | Diane's downtown accounting firm — warm light, 2 employees at desks | Epilogue | FULL WARM | Nano Banana 2 + Diane | ⭐ |
| **F29** | Diane's condo balcony — tomatoes in terracotta pots, morning light | Epilogue | FULL WARM | Flux 2 Pro | |
| **F30** | Client dinner scene — Diane and civil engineer, easy natural conversation | Epilogue | FULL WARM | Nano Banana 2 + Diane | |
| **F31** | Diane checking phone bill on laptop — calm, reading, slight smile | Epilogue | FULL WARM | Nano Banana 2 + Diane | ⭐ |
| **F32** | Marcus in east-side rental — far wide shot, small figure in frame, gray | Epilogue context | COLD GRAY | Nano Banana 2 + Marcus | |
| **F33** | Diane + colleague in bright accounting office — laughing, thriving | Epilogue | FULL WARM | Nano Banana 2 + Diane | |
| **F34** | Butterfly logo + "KARMA CAUGHT UP" channel card — clean brand close | CTA | BRAND | Ideogram 3 | |

---

## Hero scenes — priority gen order

Generate these **first** before remaining scenes. These are structural to the edit.

| Frame | Description |
|---|---|
| F02 ⭐ | Phone bill on screen — the discovery object |
| F09 ⭐ | Spreadsheet: 247 calls, 615 number highlighted |
| F12 ⭐ | 43 pages of phone bill on counter — all printed |
| F17 ⭐ | Lawyer's office, Diane signing — agency moment |
| F18 ⭐ | Note: "I saw the phone bill. Lawyer: Hendricks." |
| F23 ⭐ | Joint account $212 — Marcus's ruin quantified |
| F28 ⭐ | Diane's accounting firm — her name, her light |
| F31 ⭐ | Diane checking bill calm — full circle close |

---

## 15 Ken Burns stills

> Longer-hold static frames with slow Ken Burns pan/zoom in CapCut.
> Save as: `media/images/S{NN}.png`
> Model: same routing rules as scenes above.

| Still | Description | Hold time | Model |
|---|---|---|---|
| S01 | Diane's face — hollow shock after 22-minute call with Serena | 5s | Nano Banana 2 + Diane |
| S02 | Warm home kitchen morning — before everything changed | 15s | Flux 2 Pro |
| S03 | Diane and Marcus happy dinner — the life she believed was real | 15s | Nano Banana 2 + Both |
| S04 | Phone face-down on kitchen counter — the small wrong detail | 10s | Flux 2 Pro |
| S05 | Spreadsheet: 247 calls highlighted in red — the evidence | 15s | Ideogram 3 |
| S06 | 43 printed pages on counter — weight of the truth | 15s | Flux 2 Pro |
| S07 | Diane tiny at 4am kitchen table — laptop glow, dark outside | 20s | Nano Banana 2 + Diane |
| S08 | Note on counter "I saw the phone bill. Lawyer: Hendricks." — close | 20s | Ideogram 3 |
| S09 | Bank app: $212 balance — Marcus opens it for the first time | 15s | Ideogram 3 |
| S10 | Marcus's truck FOR SALE sign — close on window | 20s | Flux 2 Pro |
| S11 | Marcus in sparse rental alone — overhead wide, small figure | 25s | Nano Banana 2 + Marcus |
| S12 | Brick house FOR SALE listing — Diane's alert on screen | 20s | Ideogram 3 |
| S13 | Message thread — Serena: "I hope you're okay." Diane's brief reply | 20s | Ideogram 3 |
| S14 | Diane's firm signage — her name on the door, warm light | 15s | Flux 2 Pro |
| S15 | Diane on balcony with tomato pots — morning, peace, full warm | 40s | Nano Banana 2 + Diane |

---

## Voxel art style reminder (all images)

Every image must follow the VOXEL-STYLE-GUIDE:

- Cube-based geometry — Crossy Road / Astroneer aesthetic
- NOT raw Minecraft (no 1:2 head ratio, no pixelated blocky textures)
- NOT realistic / NOT cartoon / NOT anime
- Lighting: warm = golden hour soft shadows · cold = blue-gray overhead flat
- Color palette strictly follows beat temperature arc above
- Characters always reference their `*-voxel-base.png` for consistency

---

## Next

Xong 117 images → `04-videos.md`
