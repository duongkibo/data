# 03 — Scene Images (40 start frames + 15 Ken Burns stills)

> **Series**: True Karma TK01 — The Verdict That Cost Eight Million
> **Total 55 images** = 40 start frames (for Kling video) + 15 stills (Ken Burns zoom CapCut)
> **Precondition**: Character refs generated for Marcus/Elena/Kevin/Angela/Dale/Diane

---

## Setup Freepik

- **Ratio**: 16:9
- **Resolution**: 2K
- **AI enhance**: OFF
- **Save**: `media/images/F01.png` -> `F40.png` + `S01.png` -> `S15.png`

## Model routing rule

| Scene type | Model | Ref upload |
|---|---|---|
| Character (Marcus/Elena/Kevin/Angela/Dale/Diane) | **Nano Banana 2** | Upload matching base ref |
| Object/Document/Phone close-up | **Flux 2 Pro** | -- |
| Wide environment / mood / B-roll | **Seedream 4.5** | -- |
| Logo/brand text / TRUE STORY badge | **Ideogram 3** | -- |

## Color palette per beat (MANDATORY in every prompt)

- **Beat 1 Hook**: Deep navy + gavel gold accent
- **Beat 2 Intro**: Warm brown + cream domestic
- **Beat 3 Crack**: Cool blue shift + manila envelope tan
- **Beat 4 Betrayal**: Deep navy + cold photograph blue
- **Beat 5 Fall**: Desaturated cool blue + concrete gray
- **Beat 6 Pivot**: Warm amber + legal office mahogany
- **Beat 7 Karma**: Courtroom warm wood + verdict gold
- **Beat 8 Downfall**: Cold gray + fluorescent budget gym
- **Epilogue**: Warm peach + cream + sage green

---

## 40 START FRAMES (paired with video clips)

| # | Beat | Scene | Model | Ref |
|---|---|---|---|---|
| F01 | 1 Hook | Courtroom gavel striking wooden sound block, dramatic single light | Flux 2 Pro | -- |
| F02 | 2 Intro | Marcus standing at construction site, hard hat, morning light, confident | Nano Banana 2 | Marcus |
| F03 | 2 Intro | Marcus coaching daughter softball, sunny field, warm Saturday | Nano Banana 2 | Marcus |
| F04 | 2 Intro | Marcus + Elena at Italian restaurant table, warm candle light, Friday night | Nano Banana 2 | Marcus + Elena |
| F05 | 2 Intro | Brick house exterior with tire swing, half-acre lot, warm afternoon | Seedream 4.5 | -- |
| F06 | 3 Crack | Elena at gym treadmill, new workout clothes, bright gym lighting | Nano Banana 2 | Elena |
| F07 | 3 Crack | Elena texting on phone late night, bedroom dark, screen glow on face | Nano Banana 2 | Elena |
| F08 | 3 Crack | Marcus at kitchen table, manila envelope in hand, kids asleep upstairs | Nano Banana 2 | Marcus |
| F09 | 3 Crack | Close-up of PI photographs spread on table, time stamps visible | Flux 2 Pro | -- |
| F10 | 3 Crack | Surveillance photo: Elena + Kevin at hotel entrance, date stamp | Flux 2 Pro | -- |
| F11 | 3 Crack | Surveillance photo: Elena + Kevin at coffee shop, two towns over | Flux 2 Pro | -- |
| F12 | 4 Betrayal | Marcus sitting alone with photographs, deep shadows, kitchen lamp | Nano Banana 2 | Marcus |
| F13 | 4 Betrayal | Close-up Kevin portrait: confident smile, gym polo, leased BMW behind | Nano Banana 2 | Kevin |
| F14 | 4 Betrayal | Calendar page with funeral date circled, affair start marked week after | Flux 2 Pro | -- |
| F15 | 4 Betrayal | Marcus at mother's gravestone, rain, black coat, grief | Nano Banana 2 | Marcus |
| F16 | 4 Betrayal | Split frame: left Marcus at funeral, right Elena meeting Kevin gym | Flux 2 Pro | -- |
| F17 | 5 Fall | Marcus pouring concrete at work, hollow expression, losing weight | Nano Banana 2 | Marcus |
| F18 | 5 Fall | Marcus sleeping in guest room alone, single lamp, back pain excuse | Nano Banana 2 | Marcus |
| F19 | 5 Fall | Kids climbing into Marcus's lap on couch, movie night, innocence | Nano Banana 2 | Marcus |
| F20 | 5 Fall | Marcus in truck driveway at night, engine off, staring at house | Nano Banana 2 | Marcus |
| F21 | 5 Fall | House exterior from truck POV, Elena visible through window laughing at phone | Seedream 4.5 | -- |
| F22 | 6 Pivot | Angela's law office, mahogany desk, bookshelves, Marcus across from her | Nano Banana 2 | Angela + Marcus |
| F23 | 6 Pivot | Angela examining PI photographs on desk, sharp focused expression | Nano Banana 2 | Angela |
| F24 | 6 Pivot | NC General Statute book open, 52-13 highlighted, warm desk lamp | Flux 2 Pro | -- |
| F25 | 6 Pivot | Map of USA with 6 states highlighted (alienation of affection states) | Flux 2 Pro | -- |
| F26 | 6 Pivot | Courthouse exterior, NC flag, Marcus walking up steps with Angela | Nano Banana 2 | Marcus + Angela |
| F27 | 7 Karma | Courtroom interior wide shot, jury box, judge bench, Marcus at plaintiff table | Seedream 4.5 | -- |
| F28 | 7 Karma | Marcus on witness stand, calm composed, American flag behind | Nano Banana 2 | Marcus |
| F29 | 7 Karma | Angela presenting PI photographs to jury, evidence board | Nano Banana 2 | Angela |
| F30 | 7 Karma | Text message displayed on courtroom screen: "She's going to leave him" | Flux 2 Pro | -- |
| F31 | 7 Karma | Kevin at defense table, nervous, lawyer whispering to him | Nano Banana 2 | Kevin |
| F32 | 7 Karma | Jury foreman standing, reading verdict paper, courtroom tense | Seedream 4.5 | -- |
| F33 | 7 Karma | Close-up verdict paper: "$8,800,000" visible in bold | Flux 2 Pro | -- |
| F34 | 7 Karma | Kevin's face turning white, courtroom silent, devastation | Nano Banana 2 | Kevin |
| F35 | 7 Karma | Kevin at budget gym training client, garnishment papers on counter | Nano Banana 2 | Kevin |
| F36 | 7 Karma | Elena packing boxes leaving Kevin's apartment, tired defeated | Nano Banana 2 | Elena |
| F37 | 8 Downfall | Kevin in small studio apartment, single overhead bulb, paycheck stub | Nano Banana 2 | Kevin |
| F38 | 8 Downfall | Marcus quoted in newspaper: "Not revenge. Accountability." | Flux 2 Pro | -- |
| F39 | Epilogue | Marcus coaching softball, daughter throwing curveball, sunny | Nano Banana 2 | Marcus |
| F40 | Epilogue | Marcus + Diane at church dinner table, casserole dish, warm candle | Nano Banana 2 | Marcus + Diane |

---

## Prompt templates

### Template A — Character scene (Nano Banana 2 + ref)
```
[Isometric / Cinematic close-up] voxel art [scene type],
the voxel character from reference [action + expression],
wearing [outfit],
[setting description voxel],
[lighting: e.g. courtroom warm overhead / cold gym fluorescent / warm restaurant candle],
[color palette for this beat],
clean premium voxel art aesthetic NOT raw Minecraft NOT realistic NOT cartoon,
Astroneer meets Crossy Road style,
1920x1080 [isometric 45 degrees / cinematic], 2K
```

### Template B — Object/environment (Flux 2 Pro)
```
[Cinematic close-up / Isometric / Macro / Top-down] voxel art scene of [subject],
[specific voxel cube-based details],
[lighting direction + color temperature],
[color palette for this beat],
[mood adjective],
clean premium voxel NOT raw Minecraft NOT realistic,
Astroneer aesthetic,
1920x1080 [composition], 2K
```

---

## 6 HERO PROMPTS (copy as-is, do not edit)

### F01 — Gavel strike (Hook)
```
Cinematic voxel art extreme close-up of wooden courtroom gavel striking sound block,
dramatic single shaft of warm gold voxel light from upper-left,
voxel wood grain texture on gavel and block,
dark courtroom background deep navy dissolving into shadow,
dust particles floating in light beam,
deep navy and gavel gold accent palette,
justice atmosphere powerful moment,
clean premium voxel art NOT raw Minecraft,
Astroneer premium voxel aesthetic,
1920x1080 cinematic, 2K
```

### F09 — PI photographs on table (Crack)
```
Cinematic voxel art top-down view of manila envelope opened on wooden kitchen table,
multiple surveillance photographs spread across surface showing voxel figures,
time stamps visible in corner of each photo as small voxel text blocks,
single warm kitchen lamp illuminating from above-right,
cool blue and manila tan palette,
devastating discovery atmosphere,
clean premium voxel NOT cartoon NOT realistic,
1920x1080 cinematic top-down, 2K
```

### F16 — Split frame funeral/gym (Betrayal KEY SHOT)
```
Cinematic voxel art split composition,
left half: voxel male character at gravestone in rain dark navy cold lighting grief,
right half: voxel female character at bright gym with male trainer warm fluorescent,
hard vertical split line dividing the two scenes,
devastating timeline contrast moment,
deep navy left and bright gym white right color split,
clean premium voxel art emotional powerful,
1920x1080 cinematic, 2K
```

### F33 — Verdict amount (Karma KEY SHOT)
```
Cinematic voxel art extreme close-up of legal document paper,
bold text reading "$8,800,000" visible clearly on verdict sheet,
warm courtroom wood desk surface beneath paper,
dramatic warm overhead voxel light from courtroom fixtures,
gold and warm mahogany palette,
justice delivered atmosphere,
clean premium voxel NOT raw Minecraft,
1920x1080 cinematic, 2K
```

### F34 — Kevin devastated (Karma)
```
Cinematic voxel art close-up of the voxel character from reference,
male voxel face registering shock and devastation, mouth open, eyes wide,
sitting at courtroom defense table,
cold overhead courtroom light casting harsh shadows,
cool gray and desaturated palette,
devastating realization of consequence,
clean premium voxel art emotional,
1920x1080 cinematic, 2K
```

### F40 — Church dinner (Epilogue)
```
Isometric voxel art cozy church community hall dinner scene,
the voxel character from reference sitting across from female voxel character,
warm table setting with voxel casserole dish centerpiece and voxel candles,
warm golden evening voxel light from overhead,
other voxel figures at tables in soft background,
warm peach + cream + sage palette,
peaceful new beginning atmosphere simple honest,
clean premium voxel,
1920x1080 isometric, 2K
```

> **34 remaining frames**: use Template A/B + description from table above + correct beat color palette.

---

## 15 KEN BURNS STILLS

> Gen as static image -> CapCut apply scale 100% -> 115% over duration per still

**Save**: `media/images/S01.png` -> `S15.png`

| # | Beat | Description | Model | CapCut duration |
|---|---|---|---|---|
| S01 | 1 Hook | Courthouse exterior establishing shot, American flag, dramatic sky | Seedream 4.5 | 5s |
| S02 | 2 Intro | Brick house with tire swing wide establishing shot, afternoon | Seedream 4.5 | 15s |
| S03 | 3 Crack | Gym sign exterior night, Elena's car in parking lot | Seedream 4.5 | 15s |
| S04 | 3 Crack | Close-up manila envelope sealed, "CONFIDENTIAL" stamp | Flux 2 Pro | 15s |
| S05 | 4 Betrayal | Hotel on Route 9 exterior, red vacancy sign, dusk | Seedream 4.5 | 15s |
| S06 | 4 Betrayal | Gravestone with flowers, rain drops, dark atmosphere | Flux 2 Pro | 15s |
| S07 | 5 Fall | Construction site morning, Marcus small figure in frame | Seedream 4.5 | 20s |
| S08 | 5 Fall | Guest room bed made perfectly, single lamp, lonely | Seedream 4.5 | 20s |
| S09 | 6 Pivot | Law books and NC statute open on desk, reading glasses | Flux 2 Pro | 20s |
| S10 | 6 Pivot | Courthouse steps wide with Marcus silhouette walking up | Seedream 4.5 | 20s |
| S11 | 7 Karma | Jury box 12 jurors seated, warm wood courtroom | Seedream 4.5 | 25s |
| S12 | 7 Karma | Evidence board with photographs and red string connections | Flux 2 Pro | 20s |
| S13 | 7 Karma | "JUDGMENT" stamp on legal paper close-up | Flux 2 Pro | 25s |
| S14 | 8 Downfall | Budget gym exterior, Kevin visible through window, cold | Seedream 4.5 | 30s |
| S15 | Epilogue | Softball field sunset, Marcus and daughter silhouettes | Seedream 4.5 | 40s |

---

## TRUE KARMA badge overlay

For all frames, add in CapCut post:
- Lower-right corner: Red (#CC2222) rectangle badge
- White text: "BASED ON REAL EVENTS"
- Font: Bold sans-serif, 18pt
- Opacity: 85%

---

## Quality gate per image

- [ ] Voxel cube aesthetic (NOT raw Minecraft)
- [ ] Color palette matches beat
- [ ] Single main light source
- [ ] Character consistent (if applicable)
- [ ] NOT realistic, NOT cartoon
- [ ] 16:9 correct frame
- [ ] Filename correct (F01-F40, S01-S15)

**Fail** -> Gen Variations 2-3 times, pick best.

---

## Next
Done 55 images -> next file: `04-videos.md`
