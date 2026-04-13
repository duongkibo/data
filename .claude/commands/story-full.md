# story-full — Karma Caught Up Full Pipeline Orchestrator

## Input
$ARGUMENTS (empty = chạy weekly batch / hoặc slug specific)

## 🎯 Triết lý
End-to-end pipeline cho 1 episode Karma Caught Up. Long-form 10-12 min. ~6h từ ideation → published.

## Pipeline 8 bước

### 1. `/story-ideate` (10 phút)
Pick story từ 8 sources. Sketch 8-beat outline. Save backlog.

### 2. `/story-script {slug}` (60 phút)
Write full English script 1665-2240 words với 8-beat formula + emotion tags.

### 3. `/story-voice {slug}` (10 phút)
ElevenLabs Charlotte generate 12 min voiceover. Save MP3.

### 4. `/story-visuals {slug}` (30 phút)
Image + video prompts multi-model. ~36 frames + ~20 clips.

### 5. ⏸️ USER GEN MEDIA (60-90 phút)
- Freepik gen 36 images (Flux + Nano Banana 2 + Mystic)
- Freepik gen 20 video clips (Kling 2.5 + Hailuo + Veo 3)
- Suno gen 12 min music track
- Save tất cả vào `youtube-stories/prompts/{slug}/media/`

### 6. `/story-edit {slug}` (3-4h)
CapCut long-form assembly. Voice + visuals + music + subs + color grade.
**Output**: `final.mp4` (10-12 min)

### 7. `/story-thumbnail {slug}` (15 phút)
Ideogram 3 custom thumbnail 2 variants. A/B test ready.

### 8. `/story-publish {slug}` (30 phút)
YouTube long-form upload + title/description/tags + thumbnail.
Schedule T3/T6 21:00 EST.

---

## 🎯 Total: ~6 hours per episode

## Cadence
- **2 episodes/tuần**: T3 (Tuesday) + T6 (Friday)
- **Sunday batch session**: write 4-5 scripts ahead → 2 weeks runway
- **Production days**: T2 + T5 (gen media + edit cho T3/T6 publish)

## Daily breakdown
- **Mon (T2)**: Gen media + edit Episode T3
- **Tue (T3)**: Publish Episode 1 morning, start media gen for T6
- **Wed (T4)**: Edit T6 episode
- **Thu (T5)**: Polish + thumbnail T6
- **Fri (T6)**: Publish Episode 2 morning, start scripts T9
- **Sat (T7)**: Free / engagement
- **Sun (CN)**: Batch script writing 4-5 episodes ahead + analytics

## Files generated mỗi episode

```
youtube-stories/
├── _ideas/backlog.md (idea từ ideate)
├── scripts/{slug}.md (full English script)
├── prompts/{slug}/
│   ├── images.md
│   ├── videos.md
│   ├── voice.md
│   ├── thumbnail.md
│   ├── voice.mp3
│   ├── thumbnail-v1.png + v2.png
│   ├── media/ (gen results from Freepik + Suno)
│   └── final.mp4
└── published/{slug}.md (post log + metrics)
```

## KPI per episode
- Views 7 ngày: 5-100k
- AVD: ≥6 phút (50% of 12 min)
- CTR thumbnail: ≥4%
- Subs gained: 50-500
- Likes/views: ≥4%

## Weekly review
Sunday: `/story-analytics week-{N}` → identify scale/kill patterns.

## Skills list
- `story-ideate` — daily idea generation
- `story-script` — 8-beat full script
- `story-voice` — Charlotte ElevenLabs
- `story-visuals` — image+video prompts multi-model
- `story-edit` — CapCut long-form
- `story-thumbnail` — Ideogram custom thumbnail
- `story-publish` — YouTube + cross-post
- `story-analytics` — weekly review
- `story-full` — orchestrator (this file)

## Documentation
- `youtube-stories/CHANNEL-STRATEGY.md`
- `youtube-stories/STORY-FORMULA.md`
- `youtube-stories/VOICE-VISUAL-GUIDE.md`
- `youtube-stories/IDEATION-BANK.md`

## Cost per episode
- Freepik images: ~$1
- Freepik videos: ~$2-3
- ElevenLabs voice: ~$0.20
- Suno music: ~$0.50
- **Total: ~$4-5/episode**

## Monthly budget (8 episodes)
- ~$32-40 production
- Plus subscriptions: ~$90/tháng (Freepik Premium+ + ElevenLabs Creator + Suno)
- ROI: Tháng 4-6 break-even (post-YPP)
