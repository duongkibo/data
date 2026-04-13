# affiliate-pillar — Weekly Content Pillar Plan (40/30/20/10)

## Input
$ARGUMENTS (tuần cần plan, ví dụ "week-15" hoặc để trống = tuần hiện tại)

## 🎯 Mục đích
Plan content pillar cho 1 tuần (14-21 video) theo ratio 40/30/20/10.

## Ratio chuẩn (mỗi 10 video)
- **40% TOFU Educational** — 4 videos (không sell, build authority)
- **30% TOFU Entertainment** — 3 videos (trend, meme, POV, viral reach)
- **20% MOFU Personal** — 2 videos (story, journey, trust build)
- **10% BOFU Hard Sell** — 1 video (product + affiliate link)

## Tại sao ratio này
TikTok 2026 thuật toán penalize account có >20% hard sell. Balanced account được push 3-5x reach. Đồng thời full funnel → higher LTV.

## Quy trình

### 1. Lấy danh sách 5 sản phẩm hiện tại
Đọc folder `output/` — các slug đang active.

### 2. Map mỗi sản phẩm → 3 video types
Mỗi sản phẩm cần:
- **1 TOFU educational** (ingredient/routine education liên quan)
- **1 MOFU personal** (story dùng sản phẩm)
- **1 BOFU hard sell** (V2.2 style review)

### 3. Thêm entertainment generic (không cần product)
3 videos/tuần:
- POV skincare
- Meme trend
- Duet/reaction

### 4. Schedule 7 ngày

```
Mon: 2 TOFU edu + 1 TOFU entertainment
Tue: 1 MOFU + 1 TOFU edu + 1 BOFU
Wed: LIVESTREAM + 1 TOFU entertainment
Thu: 1 TOFU edu + 1 MOFU
Fri: 1 BOFU + 1 TOFU entertainment + LIVESTREAM teaser
Sat: LIVESTREAM + 1 TOFU edu
Sun: 1 MOFU + data review
```

## Output

Lưu `output/pillar-plans/week-{N}.md`:

```markdown
# Content Pillar Plan Week {N}

## Niche: Hydration + Barrier Skincare cho Gen Z VN 18-25

## Product focus tuần này
1. Torriden DIVE-IN Serum
2. Cocoon Bí Đao Toner
3. Anessa Perfect UV
4. Biodance Bio-Collagen Mask
5. (thêm product mới)

## 📅 Schedule 7 ngày

### Monday
**Video 1 (TOFU edu) — 12:00**
- Title: "5 LỖI DÙNG TONER AI CŨNG MẮC"
- Hook: "Bồ đang dùng toner sai cách không biết"
- Format: Ideogram 3 infographic + Veo 3 narration
- Product mention: ❌ (chỉ educational)
- Expected: High save rate

**Video 2 (TOFU edu) — 21:00**
- Title: "HYALURONIC ACID LÀ GÌ? GIẢI THÍCH 60S"
- Hook: "HA mà bồ đang dùng có thật không?"
- Format: Ideogram 3 + Nano Banana 2 + Veo 3
- Product mention: ❌

**Video 3 (Entertainment) — 18:00**
- Title: "POV: SINH VIÊN DÙNG SKINCARE 500K LẦN ĐẦU"
- Format: Veo 3 talking head + Kling reaction
- Product mention: subtle background

### Tuesday
**Video 1 (MOFU) — 12:00**
- Title: "HÀNH TRÌNH 3 THÁNG PHỤC HỒI DA MÌNH"
- Format: Veo 3 story-telling + Kling B-roll timeline
- Product mention: soft, 2-3 sản phẩm routine

**Video 2 (TOFU edu) — 18:00**
- Title: "THỨ TỰ LAYER 5 BƯỚC ĐÚNG"
- Format: Infographic + Ideogram 3

**Video 3 (BOFU Torriden) — 21:00**
- Title: Full BOFU review theo V2.2 template
- Product: Torriden DIVE-IN
- Affiliate link: ✅

### Wednesday
**LIVESTREAM 21:00-22:30**
- 10 sản phẩm hydration + barrier
- Flash deals

**Video 1 (TOFU entertainment) — 12:00**
- Title: "SKINCARE GIRL VS REALISTIC GIRL"
- Trend duet format

### Thursday
**Video 1 (TOFU edu) — 12:00**
- Title: "NIACINAMIDE CÓ NÊN XÀI CÙNG VITAMIN C?"

**Video 2 (MOFU) — 21:00**
- Title: "DA MÌNH TRƯỚC VÀ SAU 6 THÁNG"

### Friday
**Video 1 (BOFU Biodance) — 12:00**
**Video 2 (TOFU entertainment) — 18:00**
**LIVESTREAM TEASER (21:00)**: "Tối mai 21h livestream unbox 15 sản phẩm"

### Saturday
**LIVESTREAM 21:00**
**Video 1 (TOFU edu) — 12:00**

### Sunday
**Video 1 (MOFU) — 12:00**
**DATA REVIEW** — `/affiliate-analytics`

## Total tuần
- 14 videos + 2 livestream
- Ratio actual: 6 TOFU edu + 4 entertainment + 2 MOFU + 2 BOFU = 43%/28%/14%/14%
- (BOFU hơi cao 1 chút, OK cho launch week)
```

## Sau khi xong
Với mỗi BOFU video → chạy `/affiliate-full {slug}`
Với TOFU/MOFU → chạy `/affiliate-script {type} {topic}` (light mode)
