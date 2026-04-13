# 08 — Edit + Upload Guide (CapCut + YouTube Studio)

> Follow top-to-bottom. Each phase depends on the previous.

---

## CapCut Project Setup

- **Project name**: `EP05-best-man-speech`
- **Resolution**: 1920×1080
- **Frame rate**: 30fps
- **Color space**: SDR / Rec.709

---

## Track Layout

```
Track 1 (Video — A-clips):     C01A → C02A → ... → C34A  [hard cut, no transition]
Track 2 (Video — B-clips):     C01B → C02B → ... → C34B  [hard cut, layered or alt take]
Track 3 (Video — C-clips):     C01C → C02C → ... → C34C  [hard cut, detail/reaction]
Track 4 (Video — Ken Burns):   S01 → S02 → ... → S15     [Ken Burns stills, crossfade 0.3s]
Track 5 (Audio — Voice):       chunk1.mp3 + chunk2.mp3 + chunk3.mp3  [merged, no gap]
Track 6 (Audio — BGM):         Ambient/Cinematic track    [-18dB, loop if needed]
Track 7 (Text — Subtitles):    Auto-generated, reviewed
```

> **Assembly logic**: Per scene, use A-clip on Track 1 as primary. Cut to B (Track 2) for medium shot. Cut to C (Track 3) for detail/reaction/close. Hard cut A→B→C within each scene. 3s each → 9s/scene dynamic.

---

## Audio Assembly

### Voice track (Track 5)
1. Import `chunk1.mp3`, `chunk2.mp3`, `chunk3.mp3`
2. Place sequentially — no gap between chunks (Charlotte's natural ending/opening handles the join)
3. Normalize to **-16 LUFS** using CapCut audio → Volume → Normalize
4. Do NOT apply any EQ or reverb — Charlotte's studio voice is clean

### BGM track (Track 6)
- **Recommended CapCut tracks** (in priority order):
  1. Beat 1–2 (wedding setup): "Cinematic Romantic" or "Warm Orchestral" — no vocals, strings preferred
  2. Beat 3–4 (ceremony → confession): Transition to "Tension Building" — sparser, darker
  3. Beat 4 confession moment: Drop BGM to near-silence (or silent) for maximum impact on "I can't do this."
  4. Beat 5 (stone steps): "Cold Ambient" — minimal, low frequency
  5. Beat 6–7 (pivot/karma): "Quiet Resolution" instrumental
  6. Epilogue/CTA: Return to "Warm Ambient" — soft, settled
- Set volume: **-18dB** (voice always dominant)
- **Beat 4 BGM dip**: At the "I can't do this" line, manually lower BGM to -28dB or mute for ~8 seconds. Restore after the confession lands.
- Fade in: 2s at start
- Fade out: 3s at end (starting 3s before final word)
- Loop seamlessly if track < video duration

---

## Beat-Accurate Clip Timestamps

> All timestamps approximate — lock to voice track, not fixed time.

| Clips | Beat | Approx. start | Notes |
|---|---|---|---|
| C01–C04 | Beat 1 Hook | 00:00 | Dark cold opening → string lights warm |
| C05–C10 | Beat 2 Intro | 00:18 | Marcus + Jade + Derek establishment |
| C11–C16 | Beat 3 Ceremony | 01:05 | Riverside Gardens, amber light, ceremony warm |
| C17–C19 | Beat 4 Speech begins | 02:30 | Derek stands, note cards |
| C20 | Beat 4 "I can't do this" | 03:45 | ⭐ BGM dip here |
| C21–C22 | Beat 4 Confession lands | 04:05 | "For fourteen months" — COLD cuts |
| C23–C24 | Beat 4 Marcus still | 04:40 | "He went very still" — deliver as near-static |
| C25–C27 | Beat 5 Exit + Monday | 05:30 | Marcus walks out → apartment → phone calls |
| C28–C30 | Beat 6 Pivot/Blueprints | 06:15 | Recreation center project, desk, blueprints |
| C31–C33 | Beat 7 Karma | 08:00 | Derek+Jade public → courthouse → relapse → LinkedIn |
| C34 | Epilogue/CTA | 10:30 | Recreation center opens → chili → butterfly |

---

## Color Grade Per Beat

Apply color correction per section using CapCut **Adjustment** layer:

| Beat | Clips | Warmth | Cool | Highlights | Shadows | Notes |
|---|---|---|---|---|---|---|
| Beat 1 Hook | C01–C04 | -5 | +10 | 0 | +5 | Cold dark open — dread before warmth |
| Beat 2 Intro | C05–C10 | +8 | -8 | +10 | -5 | Warm amber — Marcus happy, engaged |
| Beat 3 Ceremony | C11–C16 | +10 | -10 | +12 | -5 | Full warm wedding gold #D4A547 |
| Beat 4 Speech | C17–C19 | +5 | 0 | +5 | 0 | Warm fading — something wrong entering |
| Beat 4 Confession | C20–C24 | -15 | +20 | 0 | +10 | SNAP COLD — #0B1426 navy dark |
| Beat 5 Fall | C25–C27 | -8 | +12 | 0 | +8 | Dark grey — stone steps, apartment |
| Beat 6 Pivot | C28–C30 | -3 | +5 | +5 | 0 | Grey-blue dawn — desk, blueprints |
| Beat 7 Karma | C31–C33 | -5 | +8 | 0 | +5 | Cold gray #1F2937 — Instagram, relapse |
| Epilogue | C34 | +12 | -15 | +8 | -8 | Full warm #D4A547 + sage #6B7F5A |

> **Color arc**: Dread → Warm trust → Wedding gold → SNAP COLD betrayal → Dark grey → Grey-blue → Cold karma → Full warm resolution
> This mirrors the MEMORY.md color arc BẮT BUỘC rule.

---

## Subtitle Workflow

1. CapCut → **Text** → **Auto Caption** → Language: English
2. Wait for generation (~2 min for 11:30 video)
3. **Manual review — fix these specific words** (CapCut commonly mishears):
   - Marcus → Marcus (not "Markus" or "Marcos")
   - Derek → Derek (not "Derrick" or "Deric")
   - Jade → Jade (not "Jed" or "Jay'd")
   - Asheville → Asheville (not "Ashville" or "Ash ville")
   - Balsam → Balsam (not "Balsom" or "Bolsom")
   - seismic → seismic (not "cyzymic" or "sysmic")
   - Riverside Gardens → Riverside Gardens (not "River Side")
   - Lexington → Lexington (not "Lexingdon")
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
| **Output filename** | `EP05-best-man-speech-final.mp4` |

---

## YouTube Studio Upload Checklist

### Step 1 — Upload
- [ ] Go to YouTube Studio → Create → Upload video
- [ ] Select file: `EP05-best-man-speech-final.mp4`
- [ ] Wait for processing (do not close tab)

### Step 2 — Details
- [ ] **Title**: `The Best Man Gave a Speech. It Destroyed the Wedding. | Karma Caught Up`
- [ ] **Description**: paste from `07-title-description.md` (full block)
- [ ] **Thumbnail**: Upload `media/thumbnails/v1.png` (primary)
- [ ] **Playlist**: Add to "Karma Caught Up Stories"
- [ ] **Tags**: paste 15 tags from `07-title-description.md`

### Step 3 — Video elements
- [ ] **End screen** at `[total duration - 20s]`:
  - Card 1: Subscribe button
  - Card 2: "Best for viewer" next video recommendation
- [ ] **Card** at 50% mark (~5:45): Subscribe prompt link

### Step 4 — Subtitles
- [ ] Upload → Subtitles → Add → Upload file → select `EP05-best-man-speech.srt`
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
  - Title suggestion: `"The best man stood at the microphone and confessed to the groom in front of 74 people. This is what the groom did next. [Karma Caught Up EP05]"`
- [ ] **Cross-post — Twitter/X**:
  - Thread format:
    - Tweet 1: "The best man's speech lasted 30 seconds. It ended the wedding."
    - Tweet 2: "74 people. Not one sound. Marcus went very still — 'the way a structure does right before it reassigns its load.'"
    - Tweet 3: "Full story →" + link + thumbnail v1 image
- [ ] **Cross-post — TikTok**:
  - Clip: Beat 4 confession moment ("I can't do this" through Marcus going still — approximately 03:45–04:50 timestamp)
  - Duration: 60s max for TikTok
  - Add TikTok captions + trending audio underneath voice (keep Charlotte's voice audible — don't bury under audio)
  - Caption: "the best man confessed at the wedding. in front of everyone. #KarmaCaughtUp #bestman #weddingbetrayal #storytime"

---

## Known issues / watch

- Video total target: **11:30** — verify export duration before upload
- If total < 10:00, mid-roll ads won't trigger — check CapCut timeline before export
- If BGM track ends before video, loop it — do not leave silence in last 30s
- **Beat 4 BGM dip**: Verify in export that the manual BGM dip at "I can't do this" is audible — the silence should feel deliberate, not like a technical error
- **Beat-to-beat color grade snap**: The warm → COLD transition at C20 (confession) should be a hard cut color change, not a gradual fade. Verify adjustment layer boundaries are sharp.
