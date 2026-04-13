# 🎬 EPISODE 01 — The Engagement Ring Was a Lie

> **Script gốc**: `../../scripts/01-the-engagement-ring-was-a-lie.md`
> **Workflow**: Làm theo thứ tự số. Mỗi file độc lập, prompts copy-paste sẵn.

---

## 📋 Thứ tự làm (tick khi xong)

| # | File | Nội dung | Thời gian |
|---|---|---|---|
| 01 | [`01-channel-setup.md`](./01-channel-setup.md) | Avatar + banner + info kênh (1 lần duy nhất) | 15 phút |
| 02 | [`02-characters.md`](./02-characters.md) | 5 base refs Sarah/Daniel/Rachel/James/Patricia | 30 phút |
| 03 | [`03-images.md`](./03-images.md) | 40 scene images + 15 Ken Burns stills | 90 phút |
| 04 | [`04-videos.md`](./04-videos.md) | 40 clips Kling 2.5 (10s mỗi clip) | 120 phút |
| 05 | [`05-voice.md`](./05-voice.md) | ElevenLabs Charlotte 3 chunks | 20 phút |
| 06 | [`06-thumbnail.md`](./06-thumbnail.md) | 3 variants A/B test | 15 phút |
| 07 | [`07-title-description.md`](./07-title-description.md) | Title + description + tags | 5 phút |
| 08 | [`08-upload.md`](./08-upload.md) | Upload protocol YouTube Studio | 15 phút |

**Total**: ~5 giờ cho 1 tập, video 11:30 final.

---

## 📁 Output paths

```
media/
├── images/       (F01.png → F40.png + S01.png → S15.png)
├── videos/       (C01.mp4 → C40.mp4)
├── voice/        (chunk1.mp3, chunk2.mp3, chunk3.mp3)
└── thumbnails/   (v1.png, v2.png, v3.png)

../../assets/
├── characters/   (5 base refs — reuse forever)
└── branding/     (avatar.png, banner.png — 1 lần duy nhất)
```

---

## ⚙️ Setup tool (đọc 1 lần duy nhất)

### Freepik Unlimited Premium
- https://www.freepik.com/pikaso/ai-image-generator
- AI enhance **OFF**
- Models: **Flux 2 Pro**, **Seedream 4.5**, **Nano Banana 2** (character ref), **Ideogram 3** (text), **Kling 2.5 Turbo** (video 10s max)

### ElevenLabs
- Voice: **Charlotte** (`XB0fDUnXU5powFXDhCwa`)
- Speed **0.92** · Stability **55** · Similarity **80** · Style **30**

### CapCut (edit)
- Import voice trước → align video theo voice
- Background music volume -18dB
- Export 1080p 30fps H.264 10Mbps

---

Khi xong tập 1 → ping tôi tạo folder `02-{tập-2-title}/` y hệt.
