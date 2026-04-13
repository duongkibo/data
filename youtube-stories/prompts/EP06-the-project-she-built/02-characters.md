# EP06 — Characters
## Freepik Nano Banana 2 Setup · Voxel Reference Generation

---

## Freepik Setup

**Model:** Nano Banana 2
**Resolution:** 1920×1080 (landscape) OR 512×512 (character ref square)
**Style anchor:** "Clean premium voxel art, NOT raw Minecraft. Astroneer meets Crossy Road aesthetic."
**Negative prompt (apply to all):** `raw Minecraft blocks, pixelated texture, low-res, blurry, realistic human, 3D render, photo, clay, cartoon flat, anime`

---

## CHARACTER 1 — NADIA

### Save path
```
/Users/MAC/Desktop/agent/youtube-stories/assets/characters/nadia-voxel-base.png
```

### Visual identity
- **Age feel:** 32 — focused, competent, quietly determined
- **Body:** cube-bodied voxel figure, clean proportions
- **Hair:** dark hair pulled back (bun or low ponytail) — neat, professional
- **Outfit:** warm cream or sage blouse, dark trousers
- **Accessory:** reading glasses (pushed up or on face)
- **Energy:** "good in a quiet way" — composed, not flashy, earns rooms by doing the work
- **Signature prop:** laptop open, Figma artboards on screen

### Freepik Nano Banana 2 prompt (character ref)

```
Clean premium voxel art character sheet, Nadia, 32-year-old UX designer, cube-bodied voxel figure, dark hair pulled back in neat bun, warm cream sage blouse, dark trousers, thin reading glasses, neutral standing pose against flat white background, Astroneer meets Crossy Road voxel aesthetic, soft warm lighting, focused composed expression, professional energy, NO background, character reference sheet, 1:1 square format, ultra clean voxel render, 2K quality
```

### Usage — attach nadia-voxel-base.png to:
F01, F04, F05, F06, F09, F15, F16, F17, F18, F19, F20, F21, F22, F31, F32, F33

---

## CHARACTER 2 — MARCUS

### Save path
```
/Users/MAC/Desktop/agent/youtube-stories/assets/characters/marcus-voxel-base.png
```

### Visual identity
- **Age feel:** 39 — polished, confident, "good in rooms"
- **Body:** cube-bodied voxel figure, slightly taller/broader than Nadia
- **Hair:** short dark hair, neat side part
- **Outfit:** charcoal or navy suit, light dress shirt, no tie (senior tech director energy)
- **Energy:** performative authority — the kind of person who stands at the front of every room
- **Signature prop:** clicker/laser pointer, presentation remote

### Freepik Nano Banana 2 prompt (character ref)

```
Clean premium voxel art character sheet, Marcus, 39-year-old senior product director, cube-bodied voxel figure, short neat dark hair slight side part, charcoal navy suit, light dress shirt open collar, confident standing pose front-facing, neutral background, Astroneer meets Crossy Road voxel aesthetic, cool ambient lighting, authoritative polished energy, NO background, character reference sheet, 1:1 square format, ultra clean voxel render, 2K quality
```

### Usage — attach marcus-voxel-base.png to:
F03, F07, F09, F11, F12, F29, F30

---

## Quality Gate — Before Moving to 03-images.md

Run both prompts → inspect output:

| Check | Nadia | Marcus |
|---|---|---|
| Cube-body voxel (not realistic human) | ☐ | ☐ |
| Voxel style matches Astroneer/Crossy Road | ☐ | ☐ |
| Clean background (no scene) | ☐ | ☐ |
| Expression reads clearly at thumbnail size | ☐ | ☐ |
| No Minecraft-block texture / no raw pixels | ☐ | ☐ |
| Usable as reference attachment for 03b prompts | ☐ | ☐ |

If any check fails: regenerate with seed variation. Do NOT proceed to image gen until both refs approved.

---

## Minor Characters (no voxel ref needed — describe inline in 03b prompts)

| Character | Description for inline prompts |
|---|---|
| Gretchen (HR) | cube-bodied voxel figure, mid-50s feel, gray blazer, neutral expression, clipboard |
| Dana (Meridian client) | cube-bodied voxel figure, professional, warm tone blazer, phone in hand |
| Priya (new hire) | cube-bodied voxel figure, 20s, bright colors, laptop open, surprised expression |
