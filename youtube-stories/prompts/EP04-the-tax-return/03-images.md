# 03 — Images Guide — EP04 "The Tax Return"

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
| Vivian scenes | Nano Banana 2 | + `vivian-voxel-base.png` |
| Colin scenes | Nano Banana 2 | + `colin-voxel-base.png` |
| Vivian + Colin together | Nano Banana 2 | + both refs |
| Marcus (attorney, brief) | Nano Banana 2 | inline prompt only |
| Paul (epilogue, brief) | Nano Banana 2 | inline prompt only |
| Environment / objects / exteriors | Flux 2 Pro | none |
| Text / screens / documents / UI | Ideogram 3 | none |

---

## 34 Scenes — Shot breakdown

| Beat | Scene | Description | Palette | F-A Model | F-B Model | F-C Model | Hero |
|---|---|---|---|---|---|---|---|
| Beat 1 | **F01** | Vivian at kitchen table, tax return spread open, warm morning coffee light | WARM | Nano B2 + Vivian | Nano B2 + Vivian | Nano B2 + Vivian | |
| Beat 1 | **F02** | Joint return + two coffee cups on table — domestic routine visible | WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | |
| Beat 2 | **F03** | Colin kissing Vivian — "secret weapon" moment, warm kitchen morning | WARM | Nano B2 + Both | Nano B2 + Both | Nano B2 + Vivian | |
| Beat 2 | **F04** | Colin with rolling suitcase, frequent travel pose — hallway or door | COOL entering | Nano B2 + Colin | Nano B2 + Colin | Nano B2 + Colin | |
| Beat 2 | **F05** | Colin's phone face-down at dinner table — foreboding domestic detail | COOL | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | |
| Beat 3 | **F06** | Vivian opens manila receipt folder pulled from filing cabinet | COOL | Nano B2 + Vivian | Nano B2 + Vivian | Nano B2 + Vivian | |
| Beat 3 | **F07** | Hotel receipt — Harborview Suites, Savannah — close on paper | COOL | Flux 2 Pro | Ideogram 3 | Ideogram 3 | |
| Beat 3 | **F08** | Google Calendar open vs hotel dates — side-by-side comparison on screen | COOL→COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 | |
| Beat 3 | **F09** | February 14 hotel receipt extreme close-up — date and name visible | COOL→COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 4 | **F10** | Spreadsheet — 31 hotel stays pattern, dates and amounts highlighted | DARK COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 4 | **F11** | Dara Whitfield name on forwarded itinerary — Vivian seeing it | DARK COLD | Nano B2 + Vivian | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 4 | **F12** | "Fraudulent business deductions — preliminary" spreadsheet on screen | DARK COLD | Ideogram 3 | Ideogram 3 | Ideogram 3 | |
| Beat 5 | **F13** | Vivian night audit — legal pad + laptop at kitchen table, dark outside | DARK | Nano B2 + Vivian | Nano B2 + Vivian | Nano B2 + Vivian | |
| Beat 5 | **F14** | Eight years of tax returns spread across kitchen table — volume of paper | DARK | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | |
| Beat 5 | **F15** | "$61,400" total on spreadsheet — the number that names the fraud | DARK | Ideogram 3 | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 6 | **F16** | Marcus tax attorney's office — meeting across desk, documents between them | TURNING WARM | Nano B2 + Vivian + Marcus | Nano B2 + Vivian | Nano B2 + Marcus |  |
| Beat 6 | **F17** | Form 8857 innocent-spouse documents laid out on attorney desk | TURNING | Flux 2 Pro | Ideogram 3 | Ideogram 3 | |
| Beat 6 | **F18** | Form 3949-A IRS tip form — filled, ready, Vivian's hand at edge | TURNING | Ideogram 3 | Ideogram 3 | Nano B2 + Vivian | ⭐ |
| Beat 7 | **F19** | Colin served divorce papers at door — expression shift | COLD GRAY | Nano B2 + Colin | Nano B2 + Colin | Nano B2 + Colin | |
| Beat 7 | **F20** | Vivian calm face — "I did the math" moment, composed | COLD GRAY | Nano B2 + Vivian | Nano B2 + Vivian | Nano B2 + Vivian | |
| Beat 7 | **F21** | Audit notice letter arriving — IRS envelope | COLD GRAY | Flux 2 Pro | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 7 | **F22** | IRS examination room — 8 years of Schedule C folders on table | COLD GRAY | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | |
| Beat 7 | **F23** | $79,800 assessment document — the number printed on IRS letterhead | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 | ⭐ |
| Beat 7 | **F24** | Criminal referral / double-billing discovery — legal document close | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 | |
| Beat 7 | **F25** | Colin's consulting desk empty — monitor dark, plants dead, bare | COLD GRAY | Flux 2 Pro | Flux 2 Pro | Nano B2 + Colin | |
| Beat 7 | **F26** | LinkedIn profile gone quiet — no activity, connection count falling | COLD GRAY | Ideogram 3 | Ideogram 3 | Ideogram 3 | |
| Beat 7 | **F27** | Form 8857 APPROVED — Vivian's liability zeroed, stamped document | TURNING WARM | Ideogram 3 | Ideogram 3 | Nano B2 + Vivian | ⭐ |
| Beat 8 | **F28** | Dilworth neighborhood house with FOR SALE sign — Colin's house | NEUTRAL COOL | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | |
| Beat 8 | **F29** | "SOLD — Below Asking" sticker across sale sign | NEUTRAL COOL | Flux 2 Pro | Ideogram 3 | Ideogram 3 | |
| Epilogue | **F30** | Vivian partner announcement plaque — her name on frosted glass | FULL WARM | Nano B2 + Vivian | Nano B2 + Vivian | Ideogram 3 | ⭐ |
| Epilogue | **F31** | Pivot the rescue greyhound on left side of couch — calm morning | FULL WARM | Flux 2 Pro | Flux 2 Pro | Flux 2 Pro | ⭐ |
| Epilogue | **F32** | New apartment morning light — warm windows, open space, Vivian's touch | FULL WARM | Flux 2 Pro | Flux 2 Pro | Nano B2 + Vivian | |
| Epilogue | **F33** | Paul holding W-2 — Vivian reviews it, slight smile, "simple return" | FULL WARM | Nano B2 + Vivian + Paul | Nano B2 + Vivian | Nano B2 + Paul | |
| CTA | **F34** | Butterfly logo + "KARMA CAUGHT UP" channel card — clean brand close | BRAND | Ideogram 3 | Ideogram 3 | Ideogram 3 | |

---

## Hero scenes — priority gen order

Generate these **first** before remaining scenes. Structural to the edit.

| Frame | Description |
|---|---|
| F09 ⭐ | February 14 receipt ECU — betrayal's first concrete date |
| F10 ⭐ | Spreadsheet: 31 hotel stays — the pattern named |
| F11 ⭐ | Dara Whitfield name on itinerary — peak betrayal moment |
| F15 ⭐ | "$61,400" spreadsheet — fraud quantified |
| F18 ⭐ | Form 3949-A filled — agency, the turning point |
| F21 ⭐ | IRS audit notice arriving — karma begins |
| F23 ⭐ | $79,800 assessment — the consequence made real |
| F27 ⭐ | Form 8857 APPROVED — Vivian exonerated |
| F30 ⭐ | Partner plaque — Vivian's name, her light |
| F31 ⭐ | Pivot on couch — peace, new life symbol |

---

## 15 Ken Burns stills

> Longer-hold static frames with slow Ken Burns pan/zoom in CapCut.
> Save as: `media/images/S{NN}.png`
> Model: same routing rules as scenes above.

| Still | Description | Beat zone | Palette | Hold time | Model |
|---|---|---|---|---|---|
| S01 | Vivian's face — realization ECU, moment she sees Dara's name | Beat 3 | DARK COLD | 5s | Nano B2 + Vivian |
| S02 | Full tax return spread on kitchen table — warm morning before everything | Beat 1-2 | WARM | 15s | Flux 2 Pro |
| S03 | Hotel receipt folder — Harborview Suites name visible on paper | Beat 3 | COOL | 10s | Ideogram 3 |
| S04 | Spreadsheet — 31 hotel stays in red highlight | Beat 4 | DARK COLD | 15s | Ideogram 3 |
| S05 | Dara Whitfield itinerary ECU — name and dates in focus | Beat 4 | DARK COLD | 20s | Ideogram 3 |
| S06 | "$61,400" spreadsheet extreme close — the fraud's total | Beat 5 | DARK | 20s | Ideogram 3 |
| S07 | Form 3949-A filled and ready to submit — Vivian's hand resting beside | Beat 6 | TURNING WARM | 15s | Ideogram 3 |
| S08 | Attorney desk — Form 8857 documents spread, pen resting | Beat 6 | NEUTRAL | 15s | Flux 2 Pro |
| S09 | IRS audit notice letter — official envelope opened | Beat 7 | COLD GRAY | 20s | Ideogram 3 |
| S10 | $79,800 assessment document — number large on IRS letterhead | Beat 7 | COLD GRAY | 20s | Ideogram 3 |
| S11 | Criminal referral letter — Colin's name clearly referenced | Beat 7 | COLD GRAY | 15s | Ideogram 3 |
| S12 | Empty consulting office — overhead wide, Colin absent, cold | Beat 7 | COLD GRAY | 20s | Flux 2 Pro |
| S13 | FOR SALE sign — Dilworth house, Colin's downfall made physical | Beat 8 | NEUTRAL COOL | 20s | Flux 2 Pro |
| S14 | Form 8857 APPROVED letter — Vivian's name, liability zero stamped | Beat 7 | TURNING WARM | 15s | Ideogram 3 |
| S15 | Vivian + Pivot on couch, morning warm light — peace and ownership | Epilogue | FULL WARM | 40s | Nano B2 + Vivian + Flux 2 Pro |

---

## DUTCH tilt rules (BẮT BUỘC)

| Scene | Allowed shots | Rule |
|---|---|---|
| F10 | B + C only | Betrayal zone — spreadsheet pattern |
| F11 | B + C only | Betrayal peak — Dara's name |
| F12 | B only | Fraud label — limited DUTCH |
| F16 onward | NONE | Pivot through epilogue — TUYỆT ĐỐI KHÔNG DUTCH |

**DUTCH = 8-12° camera tilt. Use ONLY in Beat 4 betrayal zone (F10-F12). Never in pivot, karma, downfall, or epilogue beats.**

---

## Voxel art style reminder (all images)

Every image must follow the VOXEL-STYLE-GUIDE:

- Cube-based geometry — Crossy Road / Astroneer aesthetic
- NOT raw Minecraft (no 1:2 head ratio, no pixelated blocky textures)
- NOT realistic / NOT cartoon / NOT anime
- Lighting: WARM = golden hour soft directional shadows · COLD = blue-gray overhead flat · COLD GRAY = institutional fluorescent flat
- Color palette strictly follows beat temperature arc above
- Characters always reference their `*-voxel-base.png` for consistency
- Resolution: 1920×1080, 2K, landscape

---

## Next

Xong 117 images → `04-videos.md`
