# yt-full — YouTube Pet Channel Full Pipeline Orchestrator

## Input
$ARGUMENTS (empty = today's video / hoặc slug cụ thể)

## 🎯 Triết lý
End-to-end pipeline cho 1 video YouTube Shorts pet inner monologue. ~45 phút từ ideation → published.

## Pipeline 9 bước

### 1. `/yt-ideate` (5 phút)
Pick character + idea từ 8 sources. Save backlog.

### 2. `/yt-script {slug}` (10 phút)
Write 50s script với 14-beat retention engineering.
**File**: `youtube-pets/scripts/{slug}.md`

### 3. `/yt-prompts {slug}` (10 phút)
Image + video prompts multi-model (Flux + Veo 3 + Kling 2.5).
**Files**: `youtube-pets/prompts/{slug}/images.md` + `videos.md`

### 4. `/yt-voice {slug}` (3 phút)
ElevenLabs voice script với character voice locked.
**File**: `youtube-pets/prompts/{slug}/voice.md`

### 5. ⏸️ USER GEN MEDIA (15-30 phút)
- Freepik gen images (Flux 1.1 Pro Ultra + Nano Banana 2)
- Freepik gen videos (Veo 3 talking + Kling 2.5 action)
- ElevenLabs gen voice MP3
- Save tất cả vào `youtube-pets/prompts/{slug}/media/`

### 6. `/yt-edit {slug}` (10-15 phút)
CapCut assembly. Burned subs. Beat sync. Animated text.
**Output**: `final.mp4`

### 7. `/yt-thumbnail {slug}` (5 phút)
Custom thumbnail Ideogram 3. 2-3 word hook + pet face.
**Output**: `thumbnail.png`

### 8. `/yt-title {slug}` (3 phút)
Title 60 chars + description + tags + hashtags SEO.
**File**: `prompts/{slug}/title.md`

### 9. `/yt-publish {slug}` (5 phút)
Upload YouTube + cross-post Instagram, TikTok, Facebook.
**Engagement**: Reply 60 phút first hour.

---

## 🎯 Total: ~50-60 phút per video

## Daily cadence
- **Morning 9-10h**: Steps 1-4 (script + prompts + voice script)
- **10-11h**: Step 5 user gen media Freepik
- **11-12h**: Steps 6-7 (edit + thumbnail)
- **12h**: Steps 8-9 (publish + cross-post)

## Sunday batch (4h)
- Gen 7 videos cùng lúc
- Schedule cả tuần
- Free 6 days for engagement only

## Files generated mỗi video
```
youtube-pets/
├── _ideas/backlog.md (idea từ ideate)
├── scripts/{slug}.md (script)
├── prompts/{slug}/
│   ├── images.md
│   ├── videos.md
│   ├── voice.md
│   ├── thumbnail.md (Ideogram prompt)
│   ├── title.md (SEO)
│   └── media/ (gen results from Freepik)
└── published/{slug}.md (post log + metrics)
```

## KPI per video
- Views 24h: 5-50k (target 10k)
- Avg view duration: ≥35s (70% on 50s)
- Subs gained: 5-50
- Likes/views: ≥5%
- Comments: ≥10

## Weekly review
Saturday: `/yt-analytics week-{N}` → identify scale/kill patterns.

## Skills list
- `yt-ideate` — daily idea generation
- `yt-script` — 14-beat retention script
- `yt-prompts` — image+video multi-model
- `yt-voice` — ElevenLabs character locked
- `yt-thumbnail` — custom thumbnail design
- `yt-title` — SEO title + description
- `yt-edit` — CapCut workflow
- `yt-publish` — upload + cross-post
- `yt-analytics` — weekly review
- `yt-full` — orchestrator (this file)

## Documentation
- `youtube-pets/CHANNEL-STRATEGY.md` — strategy + 10 self-questions
- `youtube-pets/CONTENT-SYSTEM.md` — character bibles
- `youtube-pets/RETENTION-PLAYBOOK.md` — keep viewers watching
- `youtube-pets/IDEATION-SYSTEM.md` — never run out of ideas
