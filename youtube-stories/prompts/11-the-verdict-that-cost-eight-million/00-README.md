# TRUE KARMA TK01 — The Verdict That Cost Eight Million

> **Series**: True Karma — Real Cases (based on real events, anonymized + dramatized)
> **Script**: `../../scripts/11-the-verdict-that-cost-eight-million.md`
> **Workflow**: Follow numbered order. Each file is self-contained with copy-paste prompts.

---

## Episode info

| Field | Value |
|---|---|
| Series | True Karma — Real Cases |
| Episode | TK01 |
| Slug | 11-the-verdict-that-cost-eight-million |
| Based on | Real alienation of affection case, NC 2018 (names changed) |
| Duration | 11:30 |
| Word count | ~2,080 |
| Characters | Marcus (protagonist), Elena (wife), Kevin (affair partner), Angela (lawyer), Diane (epilogue), Dale (PI) |

---

## Production order (tick when done)

| # | File | Content | Est. time |
|---|---|---|---|
| 03 | [`03-images.md`](./03-images.md) | 40 scene images + 15 Ken Burns stills | 90 min |
| 04 | [`04-videos.md`](./04-videos.md) | 40 clips Kling 2.5 (10s each) | 120 min |
| 05 | [`05-voice.md`](./05-voice.md) | ElevenLabs Charlotte 3 chunks | 20 min |
| 06 | [`06-thumbnail.md`](./06-thumbnail.md) | 3 variants A/B test with TRUE STORY badge | 15 min |
| 07 | [`07-title-description.md`](./07-title-description.md) | Title + description + tags | 5 min |

**Total**: ~4.5 hours for 1 episode, 11:30 final video.

---

## Output paths

```
media/
├── images/       (F01.png -> F40.png + S01.png -> S15.png)
├── videos/       (C01.mp4 -> C40.mp4)
├── voice/        (chunk1.mp3, chunk2.mp3, chunk3.mp3)
└── thumbnails/   (v1.png, v2.png, v3.png)
```

---

## Character refs (NEW cast — NOT Episode 1 characters)

| Character | Role | Signature color | Age |
|---|---|---|---|
| Marcus | Protagonist (betrayed husband) | Warm brown + tan work shirt | 45 |
| Elena | Wife who left | Burgundy + black gym attire | 42 |
| Kevin | Affair partner / personal trainer | Dark green + gray athletic | 38 |
| Angela | Civil litigation lawyer | Navy suit + silver | 50 |
| Dale | Private investigator | Charcoal coat + brown hat | 55 |
| Diane | Epilogue love interest (teacher) | Sage green + cream | 43 |

---

## TRUE KARMA series badge

All frames include subtle "BASED ON REAL EVENTS" red badge in lower-right corner.
Thumbnail has prominent "TRUE STORY" red badge upper-left.

---

## Tools setup (same as Episode 1)

### Freepik Unlimited Premium
- https://www.freepik.com/pikaso/ai-image-generator
- AI enhance OFF
- Models: Flux 2 Pro, Seedream 4.5, Nano Banana 2 (character ref), Ideogram 3 (text), Kling 2.5 Turbo (video 10s max)

### ElevenLabs
- Voice: Charlotte (`XB0fDUnXU5powFXDhCwa`)
- Speed 0.92 / Stability 55 / Similarity 80 / Style 30

### CapCut (edit)
- Import voice first -> align video to voice
- Background music volume -18dB
- Export 1080p 30fps H.264 10Mbps
