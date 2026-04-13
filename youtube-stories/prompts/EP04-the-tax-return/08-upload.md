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
   - C01-C02: 0:00–0:18 (Hook — Line 28 reveal, reading glasses, cold shock)
   - C03-C05: 0:18–1:10 (Intro — Vivian + Colin, gray stone house, joint return ritual)
   - C06-C09: 1:10–2:20 (Crack — manila envelope, Schedule C, lodging column stops her)
   - C10-C13: 2:20–3:30 (Discovery — 31 stays, calendar conflicts, hotel names)
   - C14-C16: 3:30–4:45 (Betrayal — forwarded Gmail itinerary, Dara Whitfield's name, spreadsheet title)
   - C17-C18: 4:45–5:30 (Attorney — calls Marcus, Form 8857 + 3949-A explained)
   - C19-C22: 5:30–7:00 (Action — Form 3949-A filed 4:47pm, Colin comes home at 6, confrontation, Pivot)
   - C23-C27: 7:00–9:15 (Karma — IRS audit opens, 8 years, $79,800 assessment, criminal referral, clients terminate)
   - C28-C29: 9:15–10:15 (Resolution — Form 8857 approved, liability zero, house sold below asking)
   - C30-C33: 10:15–11:15 (Epilogue — partner, new apartment, Pivot on couch, Paul W-2 only)
   - C34: 11:15–11:30 (CTA — butterfly logo)
3. **Insert 15 Ken Burns stills** vào gaps giữa clips:
   - Scale keyframe: 100% → 115% over full still duration
   - S01 (5s), S02-S03 (15s each), S04-S07 (10-15s each), S08-S11 (15-20s each), S12-S15 (20-30s each)
4. **BGM** CapCut library:
   - Genre: Cold cinematic / Ambient piano with tension undertone / Institutional documentary feel
   - Volume: **-18dB** (voice stays dominant at -6dB)
   - Fade in 3s at start, fade out 5s at end
   - Beat 3-5 (discovery → attorney): switch to minor key, more sparse, colder
   - Beat 7 (IRS audit section): coldest track — almost no melody, low drone
   - Epilogue: return to warm, minimal piano
5. **Color grade** (per beat, warm → cold → gray → zero → warm arc):
   - Beat 1-2 (0:00–1:10): Temp +2 (warm cream gold — their stable life, Sunday ritual)
   - Beat 3-5 (1:10–4:45): Temp -5, Saturation -10 (cold steel — discovery, calendar conflicts, Dara's name)
   - Beat 6 (4:45–5:30): Temp -1, Saturation -5 (turning warm — attorney, precision, clarity)
   - Beat 7 (5:30–9:15): Temp -3, Saturation -15, add slight gray lift (cold institutional — IRS audit, $79,800, criminal referral)
   - Epilogue (9:15–11:30): Temp +4, Saturation +6 (full warm sage — partner, new apartment, Pivot, Paul)
6. **Subtitles**: Auto-generate English → manual fix:
   - Vivian (not "Vivien" or "Vivienne")
   - Colin (not "Collin" or "Colon")
   - Dara (not "Darra" or "Darah")
   - Whitfield (not "Whitfeld" or "Whitfeeld")
   - Marcus (not "Markus")
   - Pivot (not "Pivit" or "Pivvet")
   - Dilworth (not "Dilwirth" or "Dillworth")
   - Schedule C (not "Shed jewel C" or any phonetic misparse)
   - Form 8857 (not "Form Eighty-Eight Fifty-Seven" — keep numerals)
   - Form 3949-A (not spelled out — keep numerals)
   - IRC Section 6662 (not spelled out — keep numerals)
   - IRS (all caps — not "Irs")
   - Harborview Suites (not "Harbor View Sweets")
   - Alderton Grand (not "Alderdon" or "Olderton")
   - Marquette Boutique (not "Marquet" or "Markette")
7. **Export**:
   - Resolution: 1920×1080
   - Frame rate: 30fps
   - Codec: H.264
   - Bitrate: 10 Mbps
   - Format: MP4

**Save**: `media/final/EP04-the-tax-return-final.mp4`

---

## Final QC checklist (trước khi upload)

- [ ] Video total **11:30** (±15s)
- [ ] Voice clear, không cắt/glitch giữa 3 chunks
- [ ] Camera movements visible trong Kling clips (không static bất thường)
- [ ] Color arc visible: warm cream → cold steel → turning warm → cold institutional gray → full warm
- [ ] Beat 3-5 pacing: lodging column + calendar conflict + Dara name pauses land with [pause 2s] intact
- [ ] "Fraudulent business deductions — preliminary." [pause 2s] both instances audible and properly timed
- [ ] Beat 7 IRS audit section: color is coldest point of entire video — institutional gray
- [ ] Background music KHÔNG át voice (test headphones + speaker)
- [ ] Subtitle đúng chính tả: Vivian, Colin, Dara, Whitfield, Pivot, Dilworth, IRS, Schedule C
- [ ] Export 1080p 30fps confirmed
- [ ] DUTCH angle only on C10B, C10C, C11B, C11C, C12B — verify no Dutch elsewhere

---

## YouTube Studio Upload Steps

### 1. Upload file

YouTube Studio → Create → Upload videos → chọn `EP04-the-tax-return-final.mp4`

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
  - 1 card at **5:30** (Form 3949-A filed — "she submitted the form at 4:47pm") → link subscribe

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
- [ ] Nếu CTR < 3% → note để swap thumbnail tomorrow (V1 → V2 "$61,400 spreadsheet" variant)
- [ ] Nếu AVD < 4 min → check drop-off point Beat 3 (lodging column stop moment)

---

## Cross-post checklist (boost first 24h)

- [ ] **Reddit**: r/stories, r/BestofRedditorUpdates, r/AITA (nếu allowed)
- [ ] **Twitter/X Thread teaser**:
  > She filed their joint return every February for 9 years.
  > This year she checked the lodging column.
  > 31 hotel stays. 37 months.
  > 11 dates she knew — with certainty — he was home.
  > She named the spreadsheet: "Fraudulent business deductions — preliminary."
  > Then she called her tax attorney.
  > [link]
- [ ] **TikTok**: 30s clip teaser (Beat 3 moment — C14 Dara Whitfield itinerary reveal, C15 spreadsheet title) + link bio
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
prompts/EP04-the-tax-return/
├── media/
│   ├── images/     F01A-F34C (102 PNG) + S01-S15 (15 PNG) = 117 files
│   ├── videos/     C01A-C34C (102 MP4)
│   ├── voice/      chunk1.mp3, chunk2.mp3, chunk3.mp3
│   ├── thumbnails/ v1.png, v2.png, v3.png
│   └── final/
│       └── EP04-the-tax-return-final.mp4
```

---

## Next episode

EP04 done → tạo folder `EP05-{title}/` với cùng structure:
`00-README` · `02-characters` · `03-images` · `04-videos` · `04b-videos-full-prompts` · `05-voice` · `06-thumbnail` · `07-title-description` · `08-upload` · `GEN-CHECKLIST`

Cadence: Next upload **Thứ 3 hoặc Thứ 6 21:00 EST**.
