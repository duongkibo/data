# 04 — Video Clips (40 Kling 2.5 Turbo)

> **Precondition**: 40 start frames F01-F40 đã gen xong (file 03)
> **Constraint**: Kling 2.5 max **10s/clip**
> **Total**: 40 × 10s + 15 Ken Burns × ~19s avg = 690s = **11:30** ✅

---

## ⚙️ Setup Freepik Kling 2.5 Turbo

- Model: **Kling 2.5 Turbo**
- Ratio: **16:9**
- Duration: **10s** (max)
- Resolution: **1080p**
- Unlimited credits ✅
- **Save**: `media/videos/C01.mp4` → `C40.mp4`

## 🎯 Workflow mỗi clip

1. Mở Kling 2.5 Turbo
2. **Upload start frame** `F{NN}.png` làm start image
3. **Paste motion prompt** bên dưới (1 action only)
4. Duration **10s**
5. Generate → save `C{NN}.mp4`
6. Nếu drift/fail → regen (unlimited)

## ⚠️ Rules (quan trọng)

- **1 action per clip** — KHÔNG multi-shot, KHÔNG chuyển cảnh. Kling drift nếu prompt phức tạp.
- Camera motion rõ: "slow dolly in", "gentle walking forward", "hand closing slowly"
- Giữ 10 seconds continuous — không có cut
- Giữ character proportions khớp start frame

---

## 📋 40 Motion Prompts

| Clip | Start | Motion prompt (10s) |
|---|---|---|
| C01 | F01 | Slow dolly in toward the ring over 10 seconds, warm light shifting subtly across surface, dust particles floating in beam |
| C02 | F02 | Character walks forward naturally down hospital corridor, gentle stride, clipboard slight sway in hand |
| C03 | F03 | Hands carefully place sandwich into brown lunch bag, slow loving motion, morning light steady from window |
| C04 | F04 | Male character opens ring box revealing ring, female character from reference covers mouth in gentle surprise, golden sunset light holding |
| C05 | F05 | Thumb scrolls phone screen upward through wedding dress thumbnails, natural relaxed motion, lamp light steady |
| C06 | F06 | Extreme macro slow pull focus from sweater fabric onto the loose diamond prong, slow discovery reveal |
| C07 | F07 | Character slowly turns ring hand examining it, subtle worried brow forming |
| C08 | F08 | Jeweler slowly turns ring under magnifying loupe, careful concerned examination, vintage shop still |
| C09 | F09 | Character face slowly registers shock, hand rising toward mouth, eyes widening in disbelief |
| C10 | F10 | Camera slowly pushes in toward character frozen in car, she stares ahead motionless, overcast stillness |
| C11 | F11 | Hands slowly open laptop on dark table, screen glow rising illuminating hands, single lamp steady |
| C12 | F12 | Cursor scrolls down through voxel email inbox slowly, suspicious subject lines passing, suspenseful stillness |
| C13 | F13 | Slow zoom into the email subject line text on laptop screen, cool blue glow intensifying |
| C14 | F14 | Character expression slowly morphs from blank to horrified, mouth opens slightly, single voxel tear forming at eye |
| C15 | F15 | Slow pan across wedding photo on laptop screen, zooming toward Daniel smiling face |
| C16 | F16 | Character slowly closes laptop with both hands, lowers head down onto it, shoulders tremble softly in grief |
| C17 | F17 | Character lies still staring upward, faint breathing, partner rolls slightly in sleep beside unaware |
| C18 | F18 | Character walks slowly through hospital corridor, hollow gait, blur of staff passing in background |
| C19 | F19 | Character slowly looks up at mirror reflection, the reflection stares back hollow |
| C20 | F20 | Sunrise light gradually warms the parking lot scene, sky gradient shifting cool blue to warm gold |
| C21 | F21 | Character lifts phone to ear slowly, expression hardening from soft to resolved |
| C22 | F22 | Patricia listens attentively with slight nod, Sarah visible from behind, warm office stillness |
| C23 | F23 | Hand writes purposefully across notebook page, pen moving deliberately, coffee steam rising |
| C24 | F24 | Character folds clothes into suitcase with calm finality, morning light steady from window |
| C25 | F25 | Hand slowly places ring beside folded note on table, hand withdraws out of frame, morning light holds |
| C26 | F26 | Clouds drift past airplane window slowly, sky gradient shifting bright blue to gold |
| C27 | F27 | Daniel hands tremble slightly reading note, face drops into realization of consequence |
| C28 | F28 | Daniel hands grip steering wheel tighter, panicked glance forward, dashboard lights steady |
| C29 | F29 | Rachel stands still on porch arms crossed, slight wind moving her hair, stern unwavering expression |
| C30 | F30 | Daniel steps out of car slowly, stops seeing suitcases on lawn, face falls |
| C31 | F31 | Slow top-down pan across divorce documents and calculator, pages subtly shifting in light |
| C32 | F32 | Daniel walks forward escorted, defeated head down, security guard hand guiding his back |
| C33 | F33 | Daniel scans an item at hardware store register tiredly, fluorescent flicker above, blank expression |
| C34 | F34 | Elderly mother hand writes letter slowly, wiping eye with other hand, lamp glow steady |
| C35 | F35 | Phone screen email notification pulses gently, soft morning light reflected on screen |
| C36 | F36 | Hand on trackpad slowly drags email notification into "Closed Cases" folder, slow deliberate decisive motion |
| C37 | F37 | Daniel sits on motel bed edge head in hands, single overhead bulb swaying slightly |
| C38 | F38 | Character sips coffee by window, morning golden light warming scene, gentle breathing |
| C39 | F39 | Character and James laugh together while cooking, gentle stirring motion, warm domestic joy |
| C40 | F40 | Hourglass golden sand falls steadily, butterflies flutter around slowly, logo brand reveal |

---

## 📐 Timeline map (beat totals)

| Beat | Time | Clips | Ken Burns stills |
|---|---|---|---|
| 1 Hook | 0:00-0:15 | C01 (10s) | S01 (5s) |
| 2 Intro | 0:15-1:00 | C02-C04 (30s) | S02 (15s) |
| 3 Crack | 1:00-2:30 | C05-C10 (60s) | S03-S04 (30s) |
| 4 Betrayal ⭐ | 2:30-4:00 | C11-C16 (60s) | S05-S06 (30s) |
| 5 Fall | 4:00-5:30 | C17-C21 (50s) | S07-S08 (40s) |
| 6 Pivot ⭐ | 5:30-7:00 | C22-C26 (50s) | S09-S10 (40s) |
| 7 Karma ⭐ | 7:00-9:30 | C27-C34 (80s) | S11-S13 (70s) |
| 8 Downfall | 9:30-10:30 | C35-C37 (30s) | S14 (30s) |
| Epilogue | 10:30-11:30 | C38-C39 (20s) | S15 (40s) |
| CTA | 11:30-11:40 | C40 (10s) | — |
| **Total** | **11:40** | **40 × 10s = 400s** | **15 stills = 290s** |

---

## ✅ Quality gate mỗi clip

- [ ] Character consistent với start frame
- [ ] Motion smooth 10s không giật
- [ ] KHÔNG drift proportion ở cuối clip
- [ ] Color palette đúng beat
- [ ] Save đúng `C{NN}.mp4`

**Fail** → Regen (unlimited). Kling thỉnh thoảng face drift ở 8-10s cuối → gen lại.

---

## ➡️ Next
Xong 40 clips → next file: `05-voice.md`

**⚠️ Rule: MỌI clip = 10s max (Kling 2.5 constraint). Không có clip nào > 10s. Các con số (30s, 60s, 70s) trong bảng timeline là TỔNG nhiều clips × 10s.**
