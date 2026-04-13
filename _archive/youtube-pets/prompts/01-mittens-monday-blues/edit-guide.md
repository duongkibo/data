# CapCut Edit Guide — Mittens Day 47

> **Mục tiêu**: 50s short với 16 cuts, retention 60%+ midpoint, anti-CGI realism

## 📋 Setup Project
- **New Project** 9:16
- **Resolution**: 1080×1920 (1440×2560 nếu Pro)
- **Frame rate**: 30fps
- **Project name**: `mittens-ep01-day-47`

## 📦 Import assets

```
youtube-pets/prompts/01-mittens-monday-blues/media/
├── images/
│   ├── mittens-base.png
│   ├── shot-01-eye-open.png
│   ├── shot-02-wide-bedroom.png
│   ├── shot-03-pillow-alert.png
│   ├── shot-04-human-snore.png
│   ├── shot-05-calculating.png      ← Veo 3 source
│   ├── shot-06-walking.png
│   ├── shot-07-sitting-chest.png
│   ├── shot-08-extreme-stare.png    ← Veo 3 source
│   ├── shot-09-narrow-eyes.png
│   ├── shot-10-silent-beat.png
│   ├── shot-11-human-wakes.png
│   ├── shot-12-hand-reach.png
│   ├── shot-13-soften.png           ← Veo 3 source
│   ├── shot-14-content.png
│   └── shot-15-cta-glare.png        ← Veo 3 source
├── videos/
│   ├── clip-01.mp4 ... clip-15.mp4
│   ├── veo3-clip-05.mp4 (with voice native)
│   ├── veo3-clip-08.mp4 (with voice native)
│   ├── veo3-clip-13.mp4 (with voice native)
│   └── veo3-clip-15.mp4 (with voice native)
├── voice/
│   └── voice-narrator.mp3 (ElevenLabs Charlotte)
└── audio/
    ├── music-bed.mp3 (Suno or YT Library, BPM 75 lofi suspense)
    ├── sfx-alarm-clock.mp3
    ├── sfx-cat-meow.mp3
    ├── sfx-whoosh.mp3
    └── sfx-music-swell.mp3
```

---

## 🎬 TIMELINE BREAKDOWN (16 cuts / 50s)

### Track layout
```
T1 Video    [c1][c2][c3][c4][c5*][c6][c7][c8*][c9][c10][c11][c12][c13*][c14][c15*][c1 loop]
T2 Voice    ████ Veo3 ████ Veo3 ████████ Veo3 ████ Veo3
T3 Narrator ▒▒▒▒▒▒▒▒▒▒                    ▒▒▒▒▒▒▒▒▒▒        ▒▒▒
T4 Music    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
T5 SFX      ⏰    🐈            🌬          🎵swell
T6 Subs     [s1][s2][s3]...[s14]
0s   5s   10s  15s  20s  25s  30s  35s  40s  45s  50s

* = Veo 3 clips with native voice
```

### Detailed cut sheet

| # | Start | End | Dur | Source | Description | Voice |
|---|---|---|---|---|---|---|
| 1 | 0:00 | 0:01.5 | 1.5s | clip-01.mp4 | Eye open extreme close-up | (silence) |
| 2 | 0:01.5 | 0:03 | 1.5s | clip-02.mp4 | Wide bedroom push-in | Narrator: "Day forty-seven..." |
| 3 | 0:03 | 0:05 | 2s | clip-03.mp4 | Mittens alert pillow | Narrator continues |
| 4 | 0:05 | 0:08 | 3s | clip-04.mp4 | Human snoring | Narrator: "alarm has gone off again" |
| 5 ⭐ | 0:08 | 0:11 | 3s | **veo3-clip-05.mp4** | Calculating + Veo voice | Veo3: "I've calculated..." |
| 6 | 0:11 | 0:14 | 3s | clip-06.mp4 | Walking across body | Narrator: "Phase one..." |
| 7 | 0:14 | 0:17 | 3s | clip-07.mp4 | Sitting on chest | Narrator: "Phase two..." |
| 8 ⭐ | 0:17 | 0:20 | 3s | **veo3-clip-08.mp4** | Extreme stare + Veo voice | Veo3: "Phase three..." |
| 9 | 0:20 | 0:23 | 3s | clip-09.mp4 | Narrow eyes | (silence + music build) |
| 10 ⭐ | 0:23 | 0:27 | 4s | clip-10.mp4 | Silent pre-twist | (silence + music swell) |
| 11 | 0:27 | 0:32 | 5s | clip-11.mp4 | Human wakes | (gentle music) |
| 12 | 0:32 | 0:37 | 5s | clip-12.mp4 | Hand reaches | (music continues) |
| 13 ⭐ | 0:37 | 0:42 | 5s | **veo3-clip-13.mp4** | Soften + Veo voice | Veo3: "Wait... forbidden spot... damn it" |
| 14 | 0:42 | 0:46 | 4s | clip-14.mp4 | Content reluctant | Narrator: "I yield. Today only..." |
| 15 ⭐ | 0:46 | 0:49 | 3s | **veo3-clip-15.mp4** | CTA glare + Veo voice | Veo3: "Subscribe. Or I'll know." |
| 16 | 0:49 | 0:50 | 1s | clip-01.mp4 (reuse) | Loop-back eye | (silence) |

**Total: 50 seconds, 16 cuts, avg 3.1s/cut**

---

## ✨ ANIMATED SUBTITLES (burned-in)

### Settings
- **Font**: Anton hoặc Bebas Neue (display impact)
- **Size**: 95pt
- **Color**: Yellow #FFED00
- **Stroke**: Black 6px
- **Drop shadow**: 4px black 50% opacity
- **Position**: Bottom 25% (Y: 75%)
- **Animation IN**: Pop scale 0% → 110% → 100% (0.2s)

### Subtitle blocks (sync với voice)

| Time | Text | Animation |
|---|---|---|
| 0:01.5-0:03 | **DAY 47.** | Pop in |
| 0:03-0:05 | The slave's alarm went off again. | Typewriter |
| 0:05-0:08 | (no sub — let visual breathe) | — |
| 0:08-0:11 | I've calculated the perfect moment. | Slide up |
| 0:11-0:14 | **PHASE 1: OCCUPY HIS AIRWAY.** | Pop emphasis |
| 0:14-0:17 | **PHASE 2: CLAIM THE WARM SPOT.** | Pop emphasis |
| 0:17-0:20 | **PHASE 3: EYE CONTACT.** | Pop emphasis red |
| 0:20-0:23 | Until he questions his life choices. | Slide |
| 0:23-0:27 | (silence) | — |
| 0:27-0:32 | Wait... | Slow fade in |
| 0:32-0:37 | He's rubbing the spot. | Slide |
| 0:37-0:42 | **THE FORBIDDEN SPOT. DAMN IT.** | Pop red emphasis |
| 0:42-0:46 | I yield. Today only. | Slide |
| 0:46-0:49 | **SUBSCRIBE. OR I'LL KNOW.** 👁️ | Pop emphasis |
| 0:49-0:50 | (loop ending) | — |

### KEY WORDS highlight (red #FF2D4D)
- "PRISON" (if added)
- "FORBIDDEN"
- "BETRAYED"
- "SUBSCRIBE"

---

## 🎵 AUDIO MIX

### Voice tracks
- **Veo 3 voice clips** (5, 8, 13, 15): native voice từ video, **không cần edit volume** (Veo 3 mix sẵn 100%)
- **Narrator track** (clip 1-4, 6-7, 9-12, 14): ElevenLabs Charlotte → vol **100%**

### Music
- File: `music-bed.mp3` (lofi suspense BPM 75)
- Volume: **18%** (auto-duck under voice)
- Fade in: 0.5s từ 0:01.5
- **Music swell** at 0:23-0:27 (pre-twist) → vol bumps to 30%
- Fade out: 1s từ 0:49

### SFX layers
| Time | SFX | Volume | Purpose |
|---|---|---|---|
| 0:00 | 🔔 Alarm clock distant | 35% | Hook audio cue |
| 0:01 | 🐈 Cat meow sharp | 40% | Pattern interrupt |
| 0:23 | 🥁 Drum hit | 50% | Pre-twist anchor |
| 0:27 | 🎵 Music swell | (handled in music) | Twist setup |
| 0:37 | ✨ Twinkle reveal | 30% | "Forbidden spot" moment |
| 0:46 | 🔔 Ding | 40% | CTA emphasis |

---

## 🎨 COLOR + EFFECTS

### Color grade per group
| Cuts | Time | Filter | Adjust |
|---|---|---|---|
| 1-4 (Hook+Setup) | 0-8s | Cool morning 25% | Saturation -5 (cold mood) |
| 5-9 (Plot) | 8-23s | Cool blue tint 15% | Contrast +10 |
| 10 (Pre-twist) | 23-27s | Desaturate 20% | Vignette 15% |
| 11-13 (Reveal) | 27-42s | Warm sunlight 30% | Saturation +10 |
| 14-16 (Outro) | 42-50s | K-beauty glow 25% | Highlights +10 |

### Effects
- **Slight zoom**: Keyframe scale 100% → 105% trên Cut 1, 5, 8, 13, 15 (Mittens close-ups)
- **Vignette**: 10% darken edges throughout
- **Film grain**: 5% (natural feel)
- **Slight handheld shake**: CapCut Camera Shake 8% trên Cut 10 (silent beat tension)

---

## 🎞️ TRANSITIONS (3 vị trí lớn)

| Vị trí | Transition | Duration |
|---|---|---|
| 0:23 (Plot → Pre-twist) | **Slow fade to black** | 0.3s |
| 0:27 (Pre-twist → Reveal) | **Light leak warm** | 0.4s |
| 0:46 (Outro → CTA) | **Quick zoom snap** | 0.2s |

⚠️ KHÔNG transition giữa các cut nhỏ — beat Kling/Veo 3 đã đủ smooth.

---

## 📤 EXPORT

### Settings
- **Resolution**: 1080×1920 (Premium: 1440×2560)
- **Frame rate**: 30fps (60fps nếu Premium)
- **Bitrate**: Higher
- **Format**: MP4 H.264
- **Audio**: AAC 256kbps
- **Watermark**: ⚠️ **OFF** (mandatory cho YouTube)

### Pre-export checklist
- [ ] 16 cuts đếm đúng
- [ ] Voice tracks sync (Veo 3 + Narrator)
- [ ] Music không đè voice (18% vol)
- [ ] All 14 subs sync đúng word
- [ ] Hook 1.5s đầu silent → cat meow → text pop
- [ ] Twist tại 30s mark (cut 10)
- [ ] Subscribe CTA cut 15
- [ ] Loop-back cut 16 (reuse cut 1)
- [ ] Total duration 50s ±0.5s
- [ ] Export 1080×1920 minimum
- [ ] OFF watermark

---

## ⏱️ Production time estimate
- Import + arrange: 5 phút
- Cut + trim: 10 phút
- Subs animate: 10 phút
- Audio mix: 5 phút
- Color + effects: 5 phút
- Export: 3 phút
- **Total: ~38 phút**

## 🚀 Sau khi export
File: `youtube-pets/prompts/01-mittens-monday-blues/final.mp4`

→ Tiếp `/yt-publish 01-mittens-monday-blues`
