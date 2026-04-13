# 08 — Edit + Upload Guide (CapCut + YouTube Studio)

> Follow top-to-bottom. Each phase depends on the previous.

---

## CapCut Project Setup

- **Project name**: `EP02-christmas-card`
- **Resolution**: 1920×1080
- **Frame rate**: 30fps
- **Color space**: SDR / Rec.709

---

## Track Layout

```
Track 1 (Video — A-clips):     C01A → C02A → ... → C34A  [hard cut, no transition]
Track 2 (Video — B-clips):     C01B → C02B → ... → C34B  [hard cut, layered or alt take]
Track 3 (Video — Ken Burns):   S01 → S02 → ... → S15     [Ken Burns stills, crossfade 0.3s]
Track 4 (Audio — Voice):       chunk1.mp3 + chunk2.mp3 + chunk3.mp3  [merged, no gap]
Track 5 (Audio — BGM):         Ambient/Cinematic track    [-18dB, loop if needed]
Track 6 (Text — Subtitles):    Auto-generated, reviewed
```

---

## Audio Assembly

### Voice track (Track 4)
1. Import `chunk1.mp3`, `chunk2.mp3`, `chunk3.mp3`
2. Place sequentially — no gap between chunks (Charlotte's natural ending/opening handles the join)
3. Normalize to **-16 LUFS** using CapCut audio → Volume → Normalize
4. Do NOT apply any EQ or reverb — Charlotte's studio voice is clean

### BGM track (Track 5)
- **Recommended CapCut tracks** (in priority order):
  1. "Ambient Dramatic" category → search "tension" → pick instrumental, no vocals
  2. For Beats 1–5: "Cinematic Tension" mood
  3. For Beat 6–Epilogue: transition to "Peaceful" or "Soft Ambient"
- Set volume: **-18dB** (voice always dominant)
- Fade in: 2s at start
- Fade out: 3s at end (starting 3s before final word)
- Loop seamlessly if track < video duration — use CapCut loop function

---

## Video Clip Assembly

### A-clips + B-clips (Tracks 1–2)
- **34 A-clips** (C01A through C34A): primary scene clips, ~5s each, hard cut between all
- **34 B-clips** (C01B through C34B): alternate camera angle / secondary action, same scenes
- Layout: A-clip on Track 1, corresponding B-clip on Track 2 (use as cutaway or layer)
- **No transitions between A-clips** — hard cut only. Pace = narrative momentum.
- **Exception**: Beat 8 → Epilogue transition at C29/C30 border — add 0.5s crossfade only here

### Ken Burns stills (Track 3)
Layered over voice-only moments (no Kling clip needed):

| Still | Timestamp approx. | Duration | Ken Burns direction |
|---|---|---|---|
| S01 | 00:00 | 5s | Slow push in (100%→115%) |
| S02 | 00:18 | 15s | Slow pan right (100%→110%) |
| S03 | 01:05 | 12s | Push in center (100%→115%) |
| S04 | 02:00 | 8s | Pull back (110%→100%) |
| S05 | 02:45 | 10s | Push in center |
| S06 | 03:10 | 8s | Pan left |
| S07 | 04:10 | 12s | Very slow push in ⭐ (key reveal) |
| S08 | 05:00 | 8s | Static (no Ken Burns — let image land) |
| S09 | 05:50 | 10s | Slow pull back |
| S10 | 06:30 | 8s | Pan right |
| S11 | 07:20 | 12s | Push in center |
| S12 | 08:10 | 8s | Slow pan left |
| S13 | 09:00 | 10s | Push in |
| S14 | 10:00 | 12s | Slow pull back |
| S15 | 10:45 | 30s | Very slow push in — hold for Epilogue warmth |

**Ken Burns CapCut instructions (step by step):**
1. Select still image on timeline
2. Tap **Animation** → **Custom**
3. Add keyframe at 0:00 of clip — set Scale 100%
4. Scrub to end of clip — set Scale 115% (push) or 100% (pull)
5. For pan: set Position X start/end instead of scale
6. Add **crossfade 0.3s** when transitioning FROM a Ken Burns still TO a video clip
7. Do NOT add crossfade when transitioning from clip TO still — hard cut is intentional

---

## Color Grade Per Beat

Apply color correction per section using CapCut **Adjustment** layer:

| Beat | Clips | Warmth | Cool | Highlights | Shadows | Notes |
|---|---|---|---|---|---|---|
| Beat 1–2 | C01–C09 | +5 | -10 | +10 | 0 | Warm, domestic, safe |
| Beat 3–5 | C10–C16 | -10 | +15 | +5 | +5 | Cold, dread, revelation |
| Beat 6–7 | C17–C22 | 0 | 0 | 0 | 0 | Neutral — pivot / karma |
| Beat 8 | C23–C28 | +3 | -5 | +5 | 0 | Slight warm return |
| Epilogue | C29–C34 | +10 | -15 | +5 | -5 | Full warm, soft, resolved |

> **Color arc**: Warm (trust) → Cold (betrayal) → Neutral (reckoning) → Warm (resolution)
> This mirrors the MEMORY.md color arc BẮT BUỘC rule.

---

## Subtitle Workflow

1. CapCut → **Text** → **Auto Caption** → Language: English
2. Wait for generation (~2 min for 11:30 video)
3. **Manual review — fix these specific words** (CapCut commonly mishears):
   - Nina → Nina (not "Nena" or "Neena")
   - Daniel → Daniel (not "Danielle")
   - Sophie → Sophie (not "Sofie" or "Sophy")
   - Amber → Amber
   - Lucas → Lucas (not "Lukas")
   - Columbus → Columbus (not "Columbia")
   - Dayton → Dayton
4. **Font**: Montserrat Bold
5. **Color**: White `#FFFFFF`
6. **Size**: 5–6% screen height
7. **Position**: Bottom center, 8% up from bottom edge
8. **Style**: Slight drop shadow (2px offset, 30% opacity black)
9. Export subtitles as `.SRT` from CapCut for YouTube upload

---

## Export Settings

| Setting | Value |
|---|---|
| Resolution | 1920×1080 |
| Frame rate | 30fps |
| Codec | H.264 |
| Bitrate | 10 Mbps (or "High Quality" preset) |
| Format | MP4 |
| Audio | AAC 320kbps stereo |
| **Output filename** | `EP02-christmas-card-final.mp4` |

---

## YouTube Studio Upload Checklist

### Step 1 — Upload
- [ ] Go to YouTube Studio → Create → Upload video
- [ ] Select file: `EP02-christmas-card-final.mp4`
- [ ] Wait for processing (do not close tab)

### Step 2 — Details
- [ ] **Title**: `Their Family Christmas Card Had Four People. One Wasn't Theirs. | Karma Caught Up`
- [ ] **Description**: paste from `07-title-description.md` (full block)
- [ ] **Thumbnail**: Upload `media/thumbnails/v1.png` (primary)
- [ ] **Playlist**: Add to "Karma Caught Up Stories" (create if not exists)
- [ ] **Tags**: paste 15 tags from `07-title-description.md`

### Step 3 — Video elements
- [ ] **End screen** at `[total duration - 20s]`:
  - Card 1: Subscribe button
  - Card 2: "Best for viewer" next video recommendation
- [ ] **Card** at 50% mark (~5:45): Subscribe prompt link

### Step 4 — Subtitles
- [ ] Upload → Subtitles → Add → Upload file → select `EP02-christmas-card.srt`
- [ ] Language: English

### Step 5 — Monetization
- [ ] Monetization: ON (if channel eligible) — "All ad formats"
- [ ] Category: **Entertainment**
- [ ] Not made for kids: confirm

### Step 6 — Visibility + Schedule
- [ ] Set to **Scheduled**
- [ ] Schedule: **Tuesday or Friday at 9:00 PM EST**
- [ ] Confirm timezone is EST in Studio settings

### Step 7 — Publish
- [ ] Click **Schedule** (not Save)
- [ ] Confirm scheduled date/time is correct

---

## Hour-1 Engagement Protocol

> Run this immediately after the video goes live (not when scheduled — when published).

- [ ] **Post pinned comment** within 60 seconds of live (copy from `07-title-description.md`)
- [ ] **Pin** the comment (three dots → Pin)
- [ ] **Heart** the pinned comment
- [ ] Monitor comments for first 60 minutes — reply to every comment using reply templates or custom responses
- [ ] **Cross-post — Reddit**:
  - Post in r/AITA or r/BestofRedditorUpdates: short teaser (2 paragraphs, no spoiler of karma beat) + YouTube link
  - Title suggestion: `"Their Christmas card had four people in it. She didn't recognize one of them. [Karma Caught Up EP02]"`
- [ ] **Cross-post — Twitter/X**:
  - Thread: Hook (Beat 1 text) → "Watch the full story →" + link + thumbnail image
- [ ] **Cross-post — TikTok**:
  - Clip: Beat 4 reveal segment (Nina finds the folder — approximately 01:30–02:00 timestamp)
  - Duration: 60s max for TikTok
  - Add TikTok captions + trending audio underneath voice
  - Caption: "She found 117 photos. 6 years. 11 miles away. #KarmaCaughtUp #betrayal #storytime"

---

## Known issue / watch

- Video total target: **11:30** — verify export duration before upload
- If total < 10:00, mid-roll ads won't trigger — check CapCut timeline before export
- If BGM track ends before video, loop it — do not leave silence in last 30s
