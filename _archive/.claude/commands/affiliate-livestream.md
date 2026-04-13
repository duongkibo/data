# affiliate-livestream — AI Livestream Strategy

## Input
$ARGUMENTS (date + product list)

## 🎯 Triết lý
78% GMV TikTok Shop VN từ livestream. Đây là engine tăng trưởng chính.
**Key insight**: V3 dùng AI livestream (virtual avatar Linh) → không cần face thật 24/7.

## Workflow livestream AI

### Setup (1 lần)
1. Gen **Linh avatar** (Nano Banana 2)
2. Gen **bedroom background loop** (Kling 2.5, 30s loop)
3. Gen **product intro clips** (6-10 sản phẩm × 30s mỗi = 3-5 phút B-roll)
4. Chuẩn bị **voice TTS real-time** hoặc **pre-recorded scripts**

### Schedule chuẩn
- **Thứ 3, Thứ 6** 21:00-22:30
- Sunday bonus 20:00-21:30 nếu có sản phẩm hot
- Mỗi phiên 1.5h

### Script framework

```
0-10 phút: WARM UP
- AI avatar chào
- Giới thiệu tối nay có 10-15 sản phẩm
- Flash deal đầu tiên sẽ xuất hiện phút thứ 10
- Comment request: "Để lại 'hello' để mình biết"

10-20 phút: FLASH DEAL 1 (time-limited 10 min)
- Sản phẩm hot nhất trong list
- Giảm 30-50%
- Link pin sẵn
- Countdown timer trên màn hình

20-50 phút: DEEP DIVE 5 SẢN PHẨM
- Mỗi sản phẩm 5-6 phút
- Intro clip (pre-gen Kling)
- Benefits + USP
- Live demo (nếu có)
- Link

50-60 phút: FLASH DEAL 2
- Sản phẩm thứ 2 hot
- Giảm mạnh

60-80 phút: DEEP DIVE 5 SẢN PHẨM NỮA

80-90 phút: FINAL FLASH + CTA CUỐI
- Bundle deal
- Save link
- Follow reminder
```

### Pre-live teaser (critical)
6-12h trước livestream post short video:
```
"TỐI NAY 21H LIVESTREAM UNBOX 15 SẢN PHẨM HYDRATION! 🔥
Flash deal giảm 50% trong 10 phút đầu
Pin lịch để không bỏ lỡ nha bồ!"
```

→ Dùng Veo 3 talking head hype up

## Output

Lưu `output/livestreams/live-{date}.md`:

```markdown
# Livestream — {Date} 21:00-22:30

## Niche focus
Hydration + Barrier Skincare Gen Z VN

## Product list (15 sản phẩm)

### Tier 1: Hero flash (giảm sâu)
1. Torriden DIVE-IN — giảm 40%
2. Biodance Mask — mua 1 tặng 1

### Tier 2: Deep dive (5 phút/sản phẩm)
3. Cocoon Bí Đao Toner — giảm 20%
4. Anessa Perfect UV — giảm 15%
5. ...
6. ...
7. ...
8. ...

### Tier 3: Quick mention (2 phút)
9-15. ...

## Script timeline

### 0:00-10:00 Warm up
- AI avatar Linh chào
- "Chào bồ! Tối nay mình có 15 sản phẩm hydration giảm siêu sâu!"
- Flash deal 1 trong 10 phút nữa
- CTA: "Gõ HELLO để nhận voucher 50k"

### 10:00-20:00 Flash deal Torriden
- Intro pre-gen Kling clip
- Benefits talk
- Price reveal
- Link pin
- Countdown timer

### 20:00-25:00 Deep dive Biodance
...

## Asset prep
- [ ] Avatar Linh 3 outfit variants (Nano Banana 2)
- [ ] Background bedroom loop 30s (Kling 2.5)
- [ ] Product intro clips × 15 (Kling 2.5, 30s each)
- [ ] Voice script per product (Freepik ElevenLabs pre-gen)
- [ ] Flash deal countdown graphics (Ideogram 3)

## KPI target
- Concurrent viewers: 500-2000
- Total unique viewers: 5000+
- GMV target: 50-150tr
- New followers: 500+

## Post-live
- Export livestream replay → cut short video teasers
- Thank you comment trong 1h sau live
- Next live teaser in bio
```

## AI Livestream Tech Stack

### Tool cần
1. **Freepik Pikaso** — gen avatar + background + product clips
2. **OBS Studio** — compile layers (avatar + B-roll + text overlay)
3. **TikTok Live Studio** — stream
4. **Auto-moderator plugin** — reply comments tự động

### Layout OBS
```
Layer 1 (background): Bedroom loop Kling
Layer 2 (avatar): Linh talking head Veo 3 pre-recorded
Layer 3 (product showcase): Pre-gen Kling clips
Layer 4 (text overlay): Title + price + countdown
Layer 5 (comment feed): TikTok chat
```

### Pre-recorded approach (safer than real-time)
Vì AI real-time chưa stable, approach 100% AI dùng:
1. Pre-record 10-15 clip 5-10 phút mỗi cái
2. Stream như live bằng cách phát clip theo schedule
3. Real-time chỉ comment reply (text)
4. Viewer không phân biệt được nếu setup đúng

⚠️ **Rủi ro**: TikTok có thể detect pre-recorded. Accept risk hoặc dùng hybrid (real voice over pre-gen visual).

## Alternative: Hybrid livestream
Nếu 100% AI livestream quá rủi ro ban:
- Voice live (real person) + visual AI
- Hoặc hand-cam live + AI overlay

## Sau khi xong
Post-live → chạy `/affiliate-analytics` để review performance + optimize.
