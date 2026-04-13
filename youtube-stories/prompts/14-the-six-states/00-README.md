# EPISODE TK04 — The Six States (True Karma — Real Cases)

> **Script goc**: `../../scripts/14-the-six-states.md`
> **Series**: True Karma — Real Cases (educational composite)
> **Workflow**: Lam theo thu tu so. Moi file doc lap, prompts copy-paste san.

---

## Thu tu lam (tick khi xong)

| # | File | Noi dung | Thoi gian |
|---|---|---|---|
| 03 | [`03-images.md`](./03-images.md) | 40 scene images + 15 Ken Burns stills | 90 phut |
| 04 | [`04-videos.md`](./04-videos.md) | 40 clips Kling 2.5 (10s moi clip) | 120 phut |
| 05 | [`05-voice.md`](./05-voice.md) | ElevenLabs Charlotte 3 chunks | 20 phut |
| 06 | [`06-thumbnail.md`](./06-thumbnail.md) | 3 variants A/B test | 15 phut |
| 07 | [`07-title-description.md`](./07-title-description.md) | Title + description + tags | 5 phut |

**Total**: ~4.5 gio cho 1 tap, video 11:30 final.

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

## Characters (episode-specific)

| Character | Role | Age | Signature color | Outfit |
|---|---|---|---|---|
| Grace | Protagonist | 52 | Warm cream + soft blue | Cream cardigan, reading glasses |
| Robert | Antagonist | 55 | Charcoal gray | Dark gray dental coat / suit |
| Vanessa | Antagonist 2 | 34 | Deep red accent | Red blouse / dental scrubs |
| Diane | Lawyer | 60s | Navy + silver | Navy business suit, gray bob |
| Howard | Epilogue partner | 58 | Sage green | Green polo, warm friendly |
| Carl | PI | 50s | Dark brown | Brown jacket, neutral |

---

## Key visual scenes (unique to this episode)

1. **Tiffany receipt** — folded paper falling from suit jacket pocket
2. **PI stakeout** — dark car interior, camera telephoto lens, parking lot
3. **Blue binder** — evidence organized with numbered tabs on kitchen table
4. **Courtroom** — jury box, witness stand, Grace composed, Robert/Vanessa deflated
5. **Legal documents** — alienation of affection filings, official stamps
6. **Outer Banks cottage** — small coastal house, ocean view, morning light
7. **Financial literacy classroom** — Grace teaching women, whiteboard, warm setting
8. **Howard with coffee** — porch morning scene, two mugs, ocean background

---

## Setup tool (doc 1 lan duy nhat)

### Freepik Unlimited Premium
- https://www.freepik.com/pikaso/ai-image-generator
- AI enhance **OFF**
- Models: **Flux 2 Pro**, **Seedream 4.5**, **Nano Banana 2** (character ref), **Ideogram 3** (text), **Kling 2.5 Turbo** (video 10s max)

### ElevenLabs
- Voice: **Charlotte** (`XB0fDUnXU5powFXDhCwa`)
- Speed **0.92** / Stability **55** / Similarity **80** / Style **30**

### CapCut (edit)
- Import voice truoc -> align video theo voice
- Background music volume -18dB
- Export 1080p 30fps H.264 10Mbps

---

Khi xong tap nay -> ping toi tao folder tap tiep theo.
