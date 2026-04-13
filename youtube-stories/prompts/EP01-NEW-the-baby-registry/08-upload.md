# 08 — CapCut Edit + Upload Protocol

> Final edit → QC → upload YouTube Studio → first-hour engagement

---

## CapCut Edit Workflow

### Track layout

```
Track 1 Audio  : chunk1.mp3 → chunk2.mp3 → chunk3.mp3 (merge, no gap)
Track 2 Audio  : BGM CapCut library (-18dB under voice)
Track 1 Video  : C01 → C34 aligned với voice beats
Track 2 Video  : S01-S15 Ken Burns stills in gaps
Track 3 Video  : Subtitles auto-generated
```

### Step-by-step

1. **Import voice** — 3 chunks lên Track 1 Audio, merge sequential, no crossfade between chunks
2. **Import 34 video clips** (C01→C34) lên Track 1 Video, align theo beat timestamps:
   - C01-C02: 0:00-0:15 (Hook)
   - C03-C06: 0:15-1:00 (Intro)
   - C07-C10: 1:00-2:30 (Crack)
   - C11-C14: 2:30-4:00 (Betrayal)
   - C15-C17: 4:00-5:30 (Fall)
   - C18-C21: 5:30-7:00 (Pivot)
   - C22-C27: 7:00-9:30 (Karma)
   - C28-C29: 9:30-10:30 (Downfall)
   - C30-C33: 10:30-11:30 (Epilogue)
   - C34: 11:30-11:40 (CTA)
3. **Insert 15 Ken Burns stills** vào gaps giữa clips:
   - Scale keyframe: 100% → 115% over duration
   - S01 (5s), S02-S03 (15s each), S04-S08 (10-20s), S09-S15 (15-40s)
4. **BGM** CapCut library:
   - Genre: Emotional cinematic / Ambient piano / Soft orchestral
   - Volume: **-18dB** (voice stays dominant at -6dB)
   - Fade in 3s at start, fade out 5s at end
5. **Color grade** (optional, subtle):
   - Beat 1-2: Temp +2 (warm)
   - Beat 3-5: Temp -3, Saturation -5 (cold)
   - Beat 6: Temp 0 (neutral turning)
   - Epilogue: Temp +3, Saturation +3 (full warm)
6. **Subtitles**: Auto-generate English → manual fix: Maya / Ryan / Caleb / Kayla / Lily / Ethan / Austin
7. **Export**:
   - Resolution: 1920×1080
   - Frame rate: 30fps
   - Codec: H.264
   - Bitrate: 10 Mbps
   - Format: MP4

**Save**: `media/final/EP01-NEW-baby-registry-final.mp4`

---

## Final QC checklist (trước khi upload)

- [ ] Video total **11:30** (±15s)
- [ ] Voice clear, không cắt/glitch giữa 3 chunks
- [ ] Camera movements visible trong Kling clips (không static bất thường)
- [ ] Color arc visible: warm → cold → warm
- [ ] Background music KHÔNG át voice (test headphones)
- [ ] Subtitle đúng chính tả key names
- [ ] Export 1080p 30fps confirmed

---

## YouTube Studio Upload Steps

### 1. Upload file

YouTube Studio → Create → Upload videos → chọn `EP01-NEW-baby-registry-final.mp4`

### 2. Details tab

- **Title**: paste từ `07-title-description.md` (V1 primary)
- **Description**: paste full từ `07-title-description.md`
- **Thumbnail**: upload `v1.png` (primary) — lưu v2, v3 cho A/B test sau 1k subs
- **Playlists**: "Karma Caught Up Stories" → add (tạo mới nếu chưa có)
- **Audience**: No, it's not made for kids
- **Age restriction**: No
- More options:
  - Tags: paste 15 tags
  - Language: English
  - Category: **Entertainment** (hoặc People & Blogs)
  - License: Standard YouTube License
  - ✅ Allow embedding
  - ✅ Publish to subscriptions feed + notify
  - Shorts sampling: OFF

### 3. Video elements tab

- **Subtitles**: Upload SRT từ CapCut export (English)
- **End screen** (add at 11:10):
  - Subscribe button (bottom-right)
  - Next video (bottom-left, "best for viewer")
- **Cards**:
  - 1 card at **5:30** (Pivot moment) → link subscribe

### 4. Checks tab

- Copyright scan: wait green ✅
- Ad suitability: target Green — nếu Yellow request manual review

### 5. Visibility tab

- **Schedule**: Tuesday 9:00 PM EST hoặc Friday 9:00 PM EST
- ✅ Set as Premiere (optional — tạo pre-launch hype)
- Click **Schedule**

---

## Hour-1 Engagement Protocol

**0-5 min after live**:

- [ ] Post pinned comment (copy từ `07-title-description.md`)
- [ ] Like own pinned comment
- [ ] Share to personal accounts (Twitter, Reddit r/stories, Facebook)

**5-60 min**:

- [ ] Reply mọi comment với 🦋
- [ ] Heart comment hay nhất
- [ ] Never argue với haters — delete spam only
- [ ] Check CTR every 15 min

**60+ min**:

- [ ] Review Analytics: CTR, AVD, Traffic sources
- [ ] Nếu CTR < 3% → note để swap thumbnail tomorrow
- [ ] Nếu AVD < 4 min → analyze drop-off point

---

## Cross-post checklist (boost first 24h)

- [ ] **Reddit**: r/stories, r/BestofRedditorUpdates, r/AITA (nếu allowed)
- [ ] **Twitter/X**: Thread teaser (3 tweets) + link
- [ ] **TikTok**: 30s clip teaser (C11 betrayal reveal) + link bio
- [ ] **Facebook**: Personal story post + link

---

## Episode complete checklist

- [ ] Video live + scheduled ✅
- [ ] Pinned comment posted ✅
- [ ] First hour replies done ✅
- [ ] Cross-posted ✅
- [ ] Analytics tracked at 24h ✅
- [ ] Files archived in `media/` ✅

---

## Folder structure khi xong

```
prompts/EP01-NEW-the-baby-registry/
├── media/
│   ├── images/     (F01-F34 PNG + S01-S15 PNG = 49 files)
│   ├── videos/     (C01-C34 MP4 = 34 files)
│   ├── voice/      (chunk1.mp3, chunk2.mp3, chunk3.mp3)
│   ├── thumbnails/ (v1.png, v2.png, v3.png)
│   └── final/
│       └── EP01-NEW-baby-registry-final.mp4
```

---

## Next episode

EP01 done → tạo folder `EP02-{title}/` với cùng structure:
`00-README` · `02-characters` · `03-images` · `04-videos` · `04b-videos-full-prompts` · `05-voice` · `06-thumbnail` · `07-title-description` · `08-upload` · `GEN-CHECKLIST`

Cadence: Next upload **Thứ 6 21:00 EST**.
