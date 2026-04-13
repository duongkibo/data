# 08 — CapCut Edit + Upload Protocol

> Final edit → QC → upload YouTube Studio → first-hour engagement

---

## CapCut Edit Workflow

### Track layout

```
Track 1 Audio  : chunk1.mp3 → chunk2.mp3 → chunk3.mp3 (merge, no gap)
Track 2 Audio  : BGM CapCut library (-18dB under voice)
Track 1 Video  : C01A→C34C animated clips aligned với voice beats
Track 2 Video  : S01-S15 Ken Burns stills in gaps
Track 3 Video  : Subtitles auto-generated
```

### Step-by-step

1. **Import voice** — 3 chunks lên Track 1 Audio, merge sequential, no crossfade between chunks
2. **Import 102 video clips** (C01A→C34C) lên Track 1 Video, align theo beat timestamps:
   - C01-C02: 0:00–0:25 (Hook — phone bill reveal)
   - C03-C06: 0:25–1:15 (Intro — Diane + Marcus, Richmond life)
   - C07-C10: 1:15–2:30 (Crack — gym, face-down phone, small signs)
   - C11-C14: 2:30–4:15 (Betrayal — itemized bill, 247 calls, she dials)
   - C15-C17: 4:15–5:30 (Fall — 4am audit, spare bedroom, the list)
   - C18-C21: 5:30–7:00 (Pivot — bank, lawyer, locksmith, the note, she leaves)
   - C22-C27: 7:00–9:30 (Karma — Patrick's call, 3 lost bids, $212, truck sold)
   - C28-C29: 9:30–10:15 (Downfall — house listing, "Closed Accounts" folder)
   - C30-C33: 10:15–11:15 (Epilogue — condo, accounting firm, tomatoes, new partner)
   - C34: 11:15–11:30 (CTA — butterfly logo)
3. **Insert 15 Ken Burns stills** vào gaps giữa clips:
   - Scale keyframe: 100% → 115% over full still duration
   - S01 (5s), S02-S03 (15s each), S04-S07 (10-15s each), S08-S11 (15-20s each), S12-S15 (20-30s each)
4. **BGM** CapCut library:
   - Genre: Emotional cinematic / Ambient piano / Soft orchestral (slightly colder than EP01)
   - Volume: **-18dB** (voice stays dominant at -6dB)
   - Fade in 3s at start, fade out 5s at end
   - Beat 3-5: switch to minor key variant if available
5. **Color grade** (per beat, warm→cold→warm arc):
   - Beat 1-2 (0:00-1:15): Temp +2 (warm — Diane's stable life)
   - Beat 3-5 (1:15-5:30): Temp -4, Saturation -8 (cold — discovery and audit)
   - Beat 6 Pivot (5:30-7:00): Temp -1 (neutral — precise and decisive)
   - Beat 7-8 (7:00-10:15): Temp -2 (cool justice — detached karma)
   - Epilogue (10:15-11:30): Temp +4, Saturation +5 (full warm — condo, tomatoes, new life)
6. **Subtitles**: Auto-generate English → manual fix:
   - Diane (not "Dianne" or "Di-Ann")
   - Marcus (not "Markus")
   - Serena (not "Sarena" or "Sierra")
   - Patrick (not "Patric")
   - Richmond (not "Richman")
   - Hendricks (not "Hendrix")
   - First National (not "First Nashional")
7. **Export**:
   - Resolution: 1920×1080
   - Frame rate: 30fps
   - Codec: H.264
   - Bitrate: 10 Mbps
   - Format: MP4

**Save**: `media/final/EP03-the-phone-bill-final.mp4`

---

## Final QC checklist (trước khi upload)

- [ ] Video total **11:30** (±15s)
- [ ] Voice clear, không cắt/glitch giữa 3 chunks
- [ ] Camera movements visible trong Kling clips (không static bất thường)
- [ ] Color arc visible: warm → cold → neutral → warm
- [ ] Beat 3 pacing: spreadsheet reveal beats land with pauses intact
- [ ] Background music KHÔNG át voice (test headphones + speaker)
- [ ] Subtitle đúng chính tả key names (Diane, Marcus, Serena, Patrick, Hendricks)
- [ ] Export 1080p 30fps confirmed

---

## YouTube Studio Upload Steps

### 1. Upload file

YouTube Studio → Create → Upload videos → chọn `EP03-the-phone-bill-final.mp4`

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
  - 1 card at **5:30** (Pivot moment — she leaves the note) → link subscribe

### 4. Checks tab

- Copyright scan: wait green ✅
- Ad suitability: target Green — nếu Yellow request manual review

### 5. Visibility tab

- **Schedule**: Tuesday 9:00 PM EST hoặc Friday 9:00 PM EST
- ✅ Set as Premiere (optional)
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
- [ ] Nếu CTR < 3% → note để swap thumbnail tomorrow (V1 → V4 "247 CALLS" text variant)
- [ ] Nếu AVD < 4 min → check drop-off point Beat 3 (spreadsheet reveal)

---

## Cross-post checklist (boost first 24h)

- [ ] **Reddit**: r/stories, r/BestofRedditorUpdates, r/AITA (nếu allowed)
- [ ] **Twitter/X**: Thread teaser — "She paid the phone bill for 8 years. The bank flagged an error. The bill was 43 pages. She started from the top." + link
- [ ] **TikTok**: 30s clip teaser (Beat 3 spreadsheet reveal — C11B/C) + link bio
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
prompts/EP03-the-phone-bill/
├── media/
│   ├── images/     F01A-F34C (102 PNG) + S01-S15 (15 PNG) = 117 files
│   ├── videos/     C01A-C34C (102 MP4)
│   ├── voice/      chunk1.mp3, chunk2.mp3, chunk3.mp3
│   ├── thumbnails/ v1.png, v2.png, v3.png
│   └── final/
│       └── EP03-the-phone-bill-final.mp4
```

---

## Next episode

EP03 done → tạo folder `EP04-{title}/` với cùng structure:
`00-README` · `02-characters` · `03-images` · `04-videos` · `04b-videos-full-prompts` · `05-voice` · `06-thumbnail` · `07-title-description` · `08-upload` · `GEN-CHECKLIST`

Cadence: Next upload **Thứ 3 hoặc Thứ 6 21:00 EST**.
