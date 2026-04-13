# affiliate-full — Full Pipeline Orchestrator V3

## Input
$ARGUMENTS (empty = chạy weekly plan / hoặc specific task)

## 🎯 Triết lý V3
- **Niche locked**: Hydration + Barrier Skincare Gen Z VN 18-25
- **100% AI** nhưng chân thực (multi-model Freepik + realism stack)
- **Full funnel**: 40% TOFU edu / 30% entertainment / 20% MOFU story / 10% BOFU sell
- **Livestream engine**: 78% GMV
- **Data loop**: Weekly review kill/scale
- **Compliance first**: Mọi content pass legal check trước post

## Pipeline V3 overview

```
Phase 0 (one-time): Niche lock + persona + asset library
Phase 1 (weekly): Content pillar plan
Phase 2 (daily): Content production
Phase 3 (weekly): Livestream + data review
```

## ⚡ BƯỚC 0 (one-time, skip nếu đã có)

### Check assets:
- [ ] `assets/personas/linh/persona-master.png` (Flux 1.1 Pro Ultra gen)
- [ ] `assets/personas/linh/persona-worried.png`
- [ ] `assets/personas/linh/persona-smile.png`
- [ ] `assets/personas/linh/persona-elegant.png`
- [ ] `assets/personas/linh/persona-student.png`
- [ ] `assets/linh-persona-bible.md` (identity lock)
- [ ] `assets/hook-swipe-file.md` (empty initially)
- [ ] `assets/product-database.md` (empty initially)

Nếu chưa có → guide user setup Phase 0 theo `WORKFLOW-V3.md`.

## 📅 WEEKLY CYCLE (Phase 1)

### Monday morning: `/affiliate-pillar`
- Plan 14-21 video cho tuần
- Ratio 40/30/20/10
- Schedule 7 ngày với time slots

### Daily production (Phase 2)
Mỗi ngày 2-3 video theo pillar plan:

#### TOFU Educational (4/week)
```
/affiliate-script tofu-edu "topic here"
→ Light outline (5-10 từ hook + 3 key points)
/affiliate-image-prompt → Ideogram 3 infographic + Nano Banana 2 narrator
/affiliate-video-prompt → Veo 3 (narrator) + Kling cheap B-roll
/affiliate-voice-prompt → ElevenLabs Nina Brooks educational tone
/affiliate-compliance ← check blacklist
/affiliate-edit → CapCut polish
/affiliate-post → caption + hashtag
```

#### TOFU Entertainment (3/week)
```
/affiliate-script tofu-ent "POV title"
→ Trend format + punchline
Models: Veo 3 talking head + Kling reaction
```

#### MOFU Personal Story (2/week)
```
/affiliate-script mofu "journey topic"
→ Story arc 30s
Models: Veo 3 narrative (heavy) + Kling B-roll timeline
/affiliate-compliance BẮT BUỘC (story hay có claim)
```

#### BOFU Hard Sell (1/week) ⭐
```
/affiliate-search → chọn product
/affiliate-script bofu {slug}
/affiliate-image-prompt → multi-model (Nano Banana 2 + Flux + Seedream)
/affiliate-video-prompt → multi-model (Veo 3 hook/CTA + Kling action + Flux macro)
/affiliate-voice-prompt → Freepik ElevenLabs
/affiliate-compliance ← critical
/affiliate-edit → full polish
/affiliate-post → caption + affiliate link
```

## 📺 LIVESTREAM (2-3/week)

```
/affiliate-livestream "date + products"
→ Plan schedule + asset prep
→ Pre-gen clips Kling
→ Pre-gen avatar Linh variants
→ Teaser short video 6-12h trước
```

## 📊 WEEKLY REVIEW (Saturday)

```
/affiliate-analytics "week-{N}"
→ Export CSV
→ Tag winners/losers
→ Update swipe file
→ Feed back next week plan
```

## 🎯 Multi-model Freepik rotation

### Images
| Use case | Model |
|---|---|
| Persona master (1 time) | **Flux 1.1 Pro Ultra** |
| Character cross-scene | **Nano Banana 2** |
| Hand macro money shot | **Flux 1.1 Pro Ultra** |
| Product label closeup | **Imagen 4** |
| Infographic text | **Ideogram 3** |
| Dreamy hero | Hi-Dream |
| Fast concept | Mystic |

### Videos
| Use case | Model |
|---|---|
| **Talking head có lời** | **Veo 3** ⭐ (native lip sync) |
| Body action | **Kling 2.5 Turbo** |
| Hero transformation | Kling 2.5 Start+End |
| Liquid physics | Seedance Pro / Kling 2.1 |
| Environment B-roll | Minimax Hailuo (cheap) |
| Dramatic cinematic | Runway Gen-4 |

## 🔥 Realism principles (MỌI content)

1. Hand-only shots cho 50-70% time
2. Veo 3 cho talking head (lip sync)
3. Imperfect skin/lighting prompts
4. Handheld phone filming feel
5. Micro-expression + breathing prompts
6. Pass 5-second stranger test before post

Xem chi tiết: `AI-REALISM-GUIDE.md`

## ⚖️ Compliance layer

Mỗi content PHẢI qua `/affiliate-compliance` trước post.
Blacklist check: trị, chữa, số 1, 100%, guarantee...
Whitelist: hỗ trợ, giúp, được yêu thích...

## 💰 Economics V3

### Cost per video (Freepik credits)
- BOFU Empire: ~80 credits
- BOFU Budget: ~43 credits
- MOFU Story: ~55 credits
- TOFU Edu: ~17 credits
- TOFU Entertainment: ~30 credits

### Weekly credit budget
- 4 TOFU edu × 17 = 68
- 3 TOFU ent × 30 = 90
- 2 MOFU × 55 = 110
- 1 BOFU × 80 = 80
- Livestream prep × 2 = 200
- **Total: ~548 credits/week**
- Monthly: ~2,200 credits
- Plan: Freepik Premium+ ($30-60/month) ✅ đủ

### GMV projection
| Week | Videos | GMV target |
|---|---|---|
| 1-4 | 14-16/week | 5-15tr |
| 5-8 | 16-21/week | 30-80tr |
| 9-12 | 21/week + 2 live | 150-300tr |
| Month 4-6 | 25+/week + 3 live | 500tr-1 tỷ |

## 📁 Output tree V3

```
agent/
├── WORKFLOW-V3.md              ← master doc
├── AI-REALISM-GUIDE.md         ← realism techniques
├── assets/
│   ├── personas/linh/
│   ├── linh-persona-bible.md
│   ├── freepik-model-matrix.md
│   ├── compliance-whitelist.md
│   ├── hook-swipe-file.md
│   └── product-database.md
├── output/
│   ├── {product-slug}/         ← per BOFU video
│   ├── pillar-plans/week-{N}.md
│   ├── livestreams/live-{date}.md
│   ├── analytics/week-{N}/
│   └── BATCH-REPORT-{date}.md
```

## Sau khi chạy
Pipeline V3 là continuous system. Không có "done" — chỉ có iteration tuần sau.

Tham khảo:
- `WORKFLOW-V3.md` — master strategy
- `AI-REALISM-GUIDE.md` — 100% AI realism techniques
- Mỗi skill `.claude/commands/affiliate-*.md` — tactical details
