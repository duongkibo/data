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

### Beat-accurate timestamp reference

| Beat | Scenes | Timeline | Color grade |
|---|---|---|---|
| Beat 1 — Hook | C01-C02 | 0:00–0:18 | WARM cream gold |
| Beat 2 — Normal | C03-C07 | 0:18–1:45 | WARM cream gold |
| Beat 3 — Crack | C08-C10 | 1:45–3:10 | COOL SLATE transitioning |
| Beat 4 — Betrayal | C11-C14 | 3:10–5:15 | DARK COLD #0B1426 |
| Beat 5 — Fall | C15-C18 | 5:15–6:30 | DARK COLD (parking garage) |
| Beat 6 — Pivot | C19-C21 | 6:30–7:45 | TURNING WARM neutral |
| Beat 7 — Karma | C22-C29 | 7:45–10:15 | NEUTRAL → WARMING |
| Beat 8 — Downfall | C30-C31 | 10:15–10:45 | COOL GRAY (Marcus) |
| Epilogue | C32-C33 | 10:45–11:20 | FULL WARM + sage |
| CTA | C34 | 11:20–11:40 | FULL WARM |

### Step-by-step

1. **Import voice** — 3 chunks lên Track 1 Audio, merge sequential, no crossfade between chunks
2. **Import 34 video clips** (C01→C34) lên Track 1 Video, align theo beat timestamps above:
   - C01-C02: 0:00-0:18 (Hook — platform launch reveal)
   - C03-C07: 0:18-1:45 (Normal — Veltara, Nadia background, Orrin project start)
   - C08-C10: 1:45-3:10 (Crack — Marcus patterns, PM Thursday meetings)
   - C11-C14: 3:10-5:15 (Betrayal — presentation, footnote, HR, elimination)
   - C15-C18: 5:15-6:30 (Fall — parking garage, export, resignation)
   - C19-C21: 6:30-7:45 (Pivot — Crestline, standing desk, Dana's call)
   - C22-C29: 7:45-10:15 (Karma — $74k, Priya discovery, UXPA, Orrin exit)
   - C30-C31: 10:15-10:45 (Downfall — Marcus lateral move)
   - C32-C34: 10:45-11:40 (Epilogue + CTA — Crestline, trophy, butterfly)
3. **Insert 15 Ken Burns stills** vào gaps giữa clips:
   - Scale keyframe: 100% → 115% over duration
   - S01 (5s), S02-S05 (10-15s each), S06-S12 (15-20s), S13-S15 (20-40s)
4. **BGM** CapCut library:
   - Genre: Ambient electronic / Soft cinematic tension / Corporate minimal piano
   - Beat 1-5: Slightly colder, more minimal (understated tension)
   - Beat 6-8 + Epilogue: Warmer, lifting progression
   - Volume: **-18dB** (voice stays dominant at -6dB)
   - Fade in 3s at start, fade out 5s at end
5. **Color grade** (beat-accurate, mandatory):
   - Beat 1-2: Temp +2, Saturation +3 (warm cream gold — Nadia's good years)
   - Beat 3: Temp -1, Saturation -2 (cool slate — crack beginning)
   - Beat 4: Temp -4, Saturation -6 (dark cold — full betrayal, presentation, HR)
   - Beat 5: Temp -4, Saturation -7 (dark cold — parking garage, exports)
   - Beat 6: Temp 0, Saturation 0 (turning warm neutral — Crestline beginning)
   - Beat 7: Temp +1, Saturation +2 (neutral warming — Meridian, Priya, UXPA)
   - Beat 8: Temp -2, Saturation -3 (cool gray — Marcus lateral)
   - Epilogue: Temp +4, Saturation +5 (full warm sage — trophy, window, morning)
6. **Subtitles**: Auto-generate English → manual fix these names:
   - Nadia (not Nathia / Nadya / Naydah)
   - Veltara (not Valtara / Feltara)
   - Orrin (not Oren / Orin)
   - Gretchen (not Gretson / Gretchin)
   - Marcus (not Markus)
   - Meridian (not Meridiem / Meridean)
   - UXPA (not UXP / U-X-P-A — keep as UXPA in subtitles)
   - Figma (not Figma's / Figmah)
   - Crestline (not Crestlyn / Krestline)
   - artboard (not art board / artbored)
7. **Export**:
   - Resolution: 1920×1080
   - Frame rate: 30fps
   - Codec: H.264
   - Bitrate: 10 Mbps
   - Format: MP4

**Save**: `media/final/EP06-the-project-she-built-final.mp4`

---

## Final QC checklist (trước khi upload)

- [ ] Video total **11:30** (±15s)
- [ ] Voice clear, không cắt/glitch giữa 3 chunks
- [ ] "Her position eliminated. Effective in thirty days." — verify pause lands, Charlotte's register drops
- [ ] Camera movements visible trong Kling clips (không static bất thường)
- [ ] DUTCH moves ONLY in C09B/C, C10B/C, C12B — verify none appear in Epilogue
- [ ] Color arc visible: warm cream → cool slate → dark cold → turning warm → cool gray → full warm sage
- [ ] Background music KHÔNG át voice (test headphones)
- [ ] Subtitle fix confirmed: Nadia, Veltara, Orrin, UXPA, Figma, Crestline, Meridian, artboard
- [ ] Export 1080p 30fps confirmed

---

## YouTube Studio Upload Steps

### 1. Upload file

YouTube Studio → Create → Upload videos → chọn `EP06-the-project-she-built-final.mp4`

### 2. Details tab

- **Title**: paste từ `07-title-description.md` (V1 primary)
- **Description**: paste full từ `07-title-description.md`
- **Thumbnail**: upload `v1.png` (primary) — lưu v2, v3 cho A/B test sau 1k subs
- **Playlists**: "Karma Caught Up Stories" → add
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
  - 1 card at **6:30** (Pivot moment — Crestline begins) → link subscribe

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
- [ ] Share to personal accounts (Twitter/X, Reddit r/stories, Facebook)

**5-60 min**:

- [ ] Reply mọi comment với 🦋
- [ ] Heart comment hay nhất
- [ ] Start "I kept my files too" thread if someone mentions it — use Template 3
- [ ] Never argue với haters — delete spam only
- [ ] Check CTR every 15 min

**60+ min**:

- [ ] Review Analytics: CTR, AVD, Traffic sources
- [ ] Nếu CTR < 3% → note để swap thumbnail tomorrow (V1 → V2)
- [ ] Nếu AVD < 4 min → analyze drop-off point, check Beat 3-4 transition

---

## Cross-post checklist (boost first 24h)

- [ ] **Reddit**: r/stories, r/BestofRedditorUpdates, r/antiwork (workplace angle fits), r/AITA (nếu allowed)
- [ ] **Twitter/X**: Thread teaser (3 tweets):
  - Tweet 1: "She spent 9 months building a platform. 300 artboards. 14 user interviews."
  - Tweet 2: "Her project manager gave a 40-slide presentation. Her name was 4th in the footnote."
  - Tweet 3: "She had 30 days left. She used 12 of them to export everything. [link]"
- [ ] **TikTok**: 30s clip teaser (C11 betrayal reveal — "Her name appeared once") + link bio
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
prompts/EP06-the-project-she-built/
├── media/
│   ├── images/     (F01A-F34C + S01-S15 = 117 files)
│   ├── videos/     (C01A-C34C = 102 MP4)
│   ├── voice/      (chunk1.mp3, chunk2.mp3, chunk3.mp3)
│   ├── thumbnails/ (v1.png, v2.png, v3.png)
│   └── final/
│       └── EP06-the-project-she-built-final.mp4
```
