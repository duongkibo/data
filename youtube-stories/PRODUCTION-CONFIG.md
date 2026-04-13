# 🔧 PRODUCTION CONFIG — Single Source of Truth

> **Tất cả settings tập trung ở đây.** Các file khác REFERENCE file này, không duplicate.
> **Updated**: 2026-04-08 (post simplify review)

---

## ⚙️ ELEVENLABS VOICE (locked)

```yaml
Model: ElevenLabs v3 (Alpha)
Voice: Charlotte
Voice ID: XB0fDUnXU5powFXDhCwa
Accent: British female mature
Style: Expressive
Speed: 0.92x
Stability: 55%
Similarity boost: 80%
Style exaggeration: 30%
```

**Backup voices** (nếu Charlotte không khả dụng):
- Lily (`pFZP5JQG7iQjIQuC4Bku`) — BR alternative
- Sarah (`EXAVITQu4vr4xnSDxMaL`) — younger BR
- Alice (`Xb7hH8MSUJpSbSDYk0k2`) — confident BR

**Emotion tags map per beat**:
| Beat | Tag |
|---|---|
| 1 Hook | `[knowing]` |
| 2 Intro | `[warm]` |
| 3 Crack | `[foreboding]` |
| 4 Betrayal | `[whispers]` |
| 5 Fall | `[heavy]` |
| 6 Pivot | `[hopeful]` |
| 7 Karma | `[satisfied]` |
| 8 Downfall | `[final]` |
| Epilogue | `[warm]` |
| CTA | `[inviting]` |

---

## 🎨 FREEPIK MODEL STACK (Premium Unlimited)

### Image models
| Model | Use case | Priority |
|---|---|---|
| **Flux 2 Pro** ⭐ | Hero emotional shots (Beats 1, 4, 6, Epilogue) | Primary |
| **Seedream 4.5** | Environment + B-roll (Beats 3, 5, 7) | Secondary |
| **Google Nano Banana 2** | Character consistency (upload persona ref) | Character lock |
| **Ideogram 3** | Thumbnail + text overlays | Text accuracy |

### Video model
| Model | Use case |
|---|---|
| **Kling 2.5 Turbo** | ALL video clips (10s each, 16:9, 1080p) |

### ❌ NOT using (archived approach)
- ~~Flux 1.1 Pro Ultra~~ (replaced by Flux 2 Pro)
- ~~Mystic~~ (Seedream 4.5 thay thế)
- ~~Veo 3~~ (overkill cho voxel, save credits)
- ~~Hailuo~~ (Kling unlimited rồi)

---

## 🎬 EPISODE PRODUCTION SPEC

```yaml
Duration: 11:30 (target strict)
Ratio: 16:9 horizontal
Resolution: 1920×1080 (1440×2560 nếu 4K)
Frame rate: 24fps (cinematic)
Word count script: 2,000-2,100 từ (~11:30 @ 0.92x Charlotte)

Media breakdown:
  Character base refs: 5 (1 lần, reuse forever)
  Start frames: 40 (cho animated clips)
  Ken Burns stills: 15 (cho CapCut zoom pan)
  Total images: 55 per episode + 5 character refs
  Animated clips: 40 × 10s = 400s
  Ken Burns duration: 15 × ~19s = 285s
  Transitions/overlaps: ~5s
  Total: ~690s = 11:30 ✅

Cost per episode (Unlimited Freepik Premium):
  Images: $0 (unlimited)
  Videos: $0 (unlimited)
  Voice ElevenLabs: ~$0.20
  Music CapCut: $0
  TOTAL: $0.20/episode
```

---

## 🎨 COLOR PALETTE (locked)

### Primary dark (mood)
```
Deep Navy:      #0B1426
Charcoal:       #1F2937
Plum:           #4C1D95
```

### Accent (single per scene)
```
Warm Gold:      #D4A547
Sunset Orange:  #F59E0B
Burgundy:       #8B1E2F
Sage Green:     #6B7F5A
Cream:          #F3E9D2
```

### Per-beat color mapping
| Beat | Palette | Lighting |
|---|---|---|
| 1 Hook | Navy + gold accent | Single beam |
| 2 Intro | Warm cream + brown | Morning window |
| 3 Crack | Cool blue growing | Subtle shadows |
| 4 Betrayal | Cool blue + cold gray | Harsh screen glow |
| 5 Fall | Desaturated navy + black | Dim lamp |
| 6 Pivot | **Cool → Warm transition** | Sunrise pink-gold |
| 7 Karma | Neutral + warm spots | Restored |
| 8 Downfall | Cold gray + faded | Fluorescent |
| Epilogue | **Warm peach + cream + sage** | Golden hour |
| CTA | Gold + dark navy brand | Logo glow |

---

## 🎵 MUSIC (CapCut Library — FREE)

### Search keywords per beat
| Beat | CapCut search |
|---|---|
| 1-3 Setup | `soft piano ambient melancholy` |
| 4-5 Betrayal + Fall | `dark cinematic strings dramatic` |
| 6 Pivot | `hopeful piano sunrise emotional` |
| 7-8 Karma + Downfall | `cinematic suspense building epic` |
| Epilogue + CTA | `warm piano peaceful` |

### Volume mix
- Voice: 100%
- Music bed: **15-18%** (auto-duck ON)
- SFX: 25-40%

---

## 📐 8-BEAT FORMULA (reference only)

Full doc: [`STORY-FORMULA.md`](./STORY-FORMULA.md)

```
Beat 1 HOOK         0:00-0:15   25-40 words
Beat 2 INTRO        0:15-1:00   100-150 words
Beat 3 CRACK        1:00-2:30   200-280 words
Beat 4 BETRAYAL ⭐  2:30-4:00   200-280 words (25% mark)
Beat 5 FALL         4:00-5:30   180-240 words
Beat 6 PIVOT ⭐     5:30-7:00   250-320 words (50% mark PASSIVE)
Beat 7 KARMA ⭐     7:00-9:30   350-450 words (65% mark)
Beat 8 DOWNFALL     9:30-10:30  150-200 words
Epilogue            10:30-11:30 130-180 words
CTA                 11:30-12:00 80-100 words
TOTAL                           ~2,000-2,100 words | 11:30
```

---

## 🎭 CHARACTER BIBLE REFERENCE

Full bible: [`VOXEL-STYLE-GUIDE.md`](./VOXEL-STYLE-GUIDE.md) → Character section

**Core cast (Episode 1+ reuse)**:
1. **Sarah** — protagonist, cream + brown
2. **Daniel/Dan** — antagonist, charcoal + dark brown
3. **Rachel** — real wife, navy + cream
4. **James** — epilogue boyfriend, sage + warm
5. **Patricia** — lawyer, navy + silver

**Base refs location**: `youtube-stories/assets/characters/{name}-voxel-base.png`

---

## 🎯 QUALITY GATES (pre-publish)

Mọi episode PHẢI pass 5 gates:

1. **Character consistency** — 5/5 characters look same across frames
2. **Voxel style** — Astroneer feel, NOT raw Minecraft
3. **Story beats** — 8 beats đúng % marks (25% / 50% / 65%)
4. **Technical** — 11:30 duration, no watermark, music ≤18%
5. **Compliance** — no real names, disclaimer, passive karma only

---

## 🛠️ TECH STACK (monthly cost)

```yaml
Freepik Premium+: $30/mo  # Unlimited Flux 2 Pro + Kling 2.5 + Nano Banana 2 + Seedream 4.5
ElevenLabs Creator: $22/mo  # Charlotte voice ~30k chars/mo
CapCut Pro: $8/mo  # Long-form edit + music library
TOTAL: $60/month
```

**Break-even**: ~Tháng 3-4 (sau YPP qualify + first income)

---

## 📝 Changelog

- **2026-04-08**: Consolidated from 5 scattered docs (VOICE-VISUAL-GUIDE, CHANNEL-STRATEGY, VOXEL-STYLE-GUIDE, story-voice.md, README) into single source of truth
- Upgraded: Flux 1.1 Pro Ultra → **Flux 2 Pro**, added Seedream 4.5
- Locked: 40 animated + 15 stills = 55 total images per episode
- Locked: Duration 11:30 strict
- Locked: $0.20/episode cost (Unlimited Premium)
