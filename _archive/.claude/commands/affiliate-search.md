# affiliate-search — Multi-Channel Product Research (5 batch)

## Input
$ARGUMENTS (empty = auto tìm 5 sản phẩm trending / hoặc list tên ngăn cách dấu phẩy)

## 🎯 Triết lý V2.2
- **BATCH 5 sản phẩm/lần chạy** (không phải 1)
- **Diversity**: 5 sản phẩm phải thuộc **nhiều category/giá/angle khác nhau** để tránh cannibalize
- **Real-time first**: Data ≤7 ngày
- **Multi-channel cross-verify**: Mỗi sản phẩm phải hot trên ≥3 kênh
- **TikTok Shop verification bắt buộc** cho cả 5
- **NO CONFIRM** — tự động chạy, không hỏi user
- **Parallel search**: Chạy nhiều WebFetch/WebSearch trong 1 message

## 🎯 Quy tắc Diversity (5 sản phẩm khác nhau)

Khi chọn 5 sản phẩm, phải đa dạng ít nhất **3 trong 5 chiều sau**:

| Chiều | Ví dụ |
|---|---|
| **Category** | Serum / Moisturiser / Sunscreen / Mask / Cleanser / Toner |
| **Giá** | Budget <200k / Mid 200-400k / Premium 400-700k |
| **Ingredient angle** | HA / Centella / PDRN / Retinol / Vitamin C / Niacinamide |
| **Target pain** | Da khô / Mụn / Lão hóa / Nhạy cảm / Dầu mụn |
| **Brand origin** | K-beauty / J-beauty / VN-made / Indie / Derm |

Ví dụ 5 sản phẩm đa dạng tốt:
1. **Torriden DIVE-IN** (K-beauty, HA, da khô, 300k, serum)
2. **Medicube PDRN Pink Peptide** (K-beauty, PDRN, lão hóa, 500k, serum)
3. **Cocoon Centella** (VN-made, centella, da mụn, 180k, toner)
4. **Anessa Perfect UV** (J-beauty, sunscreen, bảo vệ, 450k, kem chống nắng)
5. **Biodance Bio-Collagen Mask** (K-beauty, collagen, nâng tone, 120k, mask)

## 📡 10 KÊNH THÔNG TIN (cross-reference)

### Tier 1: Nguồn CHÍNH thức TikTok (ưu tiên cao nhất)

#### 1️⃣ TikTok Creative Center — Top Products VN
```
https://ads.tiktok.com/business/creativecenter/top-products/pc/en
```
- Filter: **Region: Vietnam** | Category: **Beauty & Personal Care → Skincare**
- Time range: **Last 7 days** (không dùng 30 days — quá cũ)
- Metrics ưu tiên: CVR ≥6%, CPA thấp, Popularity trending up
- Click vào category hot nhất → xem sản phẩm cụ thể

#### 2️⃣ TikTok Creative Center — Top Ads VN
```
https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en
```
- Filter: **Vietnam** + **Beauty & Personal Care**
- Last 7 days
- **Extract 5 hook angles** từ top ads đang chạy
- Note sản phẩm xuất hiện trong ≥3 ads viral → signal mạnh

#### 3️⃣ TikTok Shop Vietnam (trực tiếp)
- Mở TikTok app hoặc https://shop.tiktok.com/
- Tab **"Flash Sale"** + **"Bán chạy"** → Beauty & Personal Care
- Filter: Bán chạy nhất tuần
- Xem sản phẩm có:
  - ✅ Shop chính hãng tick xanh
  - ✅ Đã bán ≥1000 trong tuần
  - ✅ Rating ≥4.5
  - ✅ Hoa hồng affiliate ≥10%

### Tier 2: Third-party Analytics

#### 4️⃣ Kalodata (https://www.kalodata.com/)
- Phân tích TikTok Shop data real-time
- Free tier: xem top products VN trong 7 ngày
- Metric quan trọng: **GMV growth, unique creators pushing product**

#### 5️⃣ Shoplus (https://shoplus.net/)
- Spy TikTok Shop creators + products
- Filter Vietnam → Beauty
- Xem creator nào đang push sản phẩm gì, view mỗi creator

#### 6️⃣ PiPi Ads (https://pipiads.com/)
- Spy TikTok ads đang chạy
- Filter VN + Beauty
- Xem creative nào CVR cao

### Tier 3: Organic signals (validate trend)

#### 7️⃣ Google Trends Vietnam
```
https://trends.google.com/trends/?geo=VN
```
- Search tên sản phẩm + "review"
- Time range: **Past 7 days**
- Trend đang lên (xanh) = signal tích cực
- So sánh với sản phẩm cạnh tranh

#### 8️⃣ Shopee Vietnam — Bán chạy
- https://shopee.vn/ → Skincare → Bán chạy
- Cross-check sản phẩm có viral cả Shopee không
- Nếu top 20 Shopee Beauty + top TikTok Shop → signal siêu mạnh

#### 9️⃣ Facebook Ads Library VN
```
https://www.facebook.com/ads/library/?country=VN&q=skincare
```
- Xem brand nào đang chạy ads Beauty nhiều nhất
- Brands thường cross-platform (FB + TikTok)

#### 🔟 Cộng đồng Việt Nam
- **Webtretho** beauty forum
- **Lamchame** skincare section
- **Reddit**: r/AsianBeauty, r/VietnameseBeauty (có thể)
- **TikTok hashtag**: #skincareviet, #reviewlamdep, #reviewskincare
- Search Instagram hashtags: `#skincarevietnam` + xem post 7 ngày gần nhất

## 🔍 QUY TRÌNH 4 BƯỚC (BATCH mode)

### Bước 1: Parallel research (1 message, nhiều tool calls)

**Chạy ĐỒNG THỜI trong 1 message:**

```
- WebFetch TikTok Creative Center Top Products VN Skincare 7d
- WebFetch TikTok Creative Center Top Ads VN Beauty 7d
- WebSearch "TikTok Shop Vietnam skincare bán chạy tháng [hiện tại]"
- WebSearch "top skincare viral TikTok Vietnam [tuần hiện tại]"
- WebSearch "Shopee Vietnam skincare bán chạy tuần này"
- WebSearch "Kalodata Vietnam beauty top products"
- WebSearch "K-beauty viral [quý hiện tại] Vietnam"
- WebSearch "new skincare product launch Vietnam [tháng hiện tại]"
```

⚠️ **Luôn thêm time-range** vào query để tránh kết quả cũ.

### Bước 2: Shortlist 8-10 candidates → pick 5 diverse

Tạo bảng so sánh:

| Sản phẩm | TikTok CC Popularity | CVR | CPA | Shopee bán chạy? | Google Trends | Giá VN | Commission | Point |
|---|---|---|---|---|---|---|---|---|
| A | 9K | 7% | $3 | ✅ Top 10 | 📈 +45% | 350k | 15% | 9/10 |
| B | 5K | 9% | $2 | ❌ | 📊 flat | 280k | 18% | 7/10 |

Điểm: ưu tiên sản phẩm có dữ liệu ở ≥3 kênh.

### Bước 3: Verify trên TikTok Shop VN (BẮT BUỘC)

Với top 1 candidate:
1. Search tên sản phẩm trên TikTok Shop VN
2. Check:
   - [ ] Có shop chính hãng tick xanh
   - [ ] Đã bán ≥500 trong tuần
   - [ ] Rating ≥4.5
   - [ ] Còn hàng (in stock)
   - [ ] Hoa hồng affiliate rõ ràng
3. Nếu KHÔNG đạt → chuyển sang candidate #2

### Bước 4: Extract 5 Hook Angles

Xem 5-10 top ads đang chạy cho sản phẩm này trên TikTok Creative Center. Phân loại hook:

| # | Hook type | Ví dụ từ ads thực tế |
|---|---|---|
| 1 | **Pain point** | "Da đỏ kích ứng xài gì cũng..." |
| 2 | **Curiosity gap** | "300k mà chất như triệu bạc?" |
| 3 | **Before/After** | "Da mình 2 tuần trước vs bây giờ" |
| 4 | **Social proof** | "Cháy hàng 3 lần trên TikTok Shop" |
| 5 | **Contrarian** | "STOP bôi serum kiểu này" |

## 🎯 Nếu user cung cấp sản phẩm cụ thể trong $ARGUMENTS

1. WebSearch tên sản phẩm + "TikTok Shop Vietnam review"
2. WebSearch + "Shopee Vietnam bán chạy"
3. WebFetch TikTok Creative Center xem có đang chạy ads không
4. Kiểm tra TikTok Shop VN có shop chính hãng không
5. Nếu không đủ data → đề xuất sản phẩm tương tự hot hơn

## Output V2.2

Tạo **5 folders** `output/{slug-1}/` → `output/{slug-5}/` mỗi folder có 2 files ban đầu.

**Parallel writes**: Dùng 10 Write tool calls trong 1 message (5 folders × 2 files).

### 1) `output/{slug}/00-product-info.md` (x5 sản phẩm)
(format giống V1 nhưng thêm multi-channel data)

```markdown
# {Tên sản phẩm}

## 📅 Data timestamp
- Lấy ngày: {YYYY-MM-DD}
- Time range research: Last 7 days

## 🔍 Multi-channel signals

| Kênh | Signal | Data |
|---|---|---|
| TikTok Creative Center | ⭐⭐⭐ | Popularity 9K, CVR 7%, CPA $3 |
| TikTok Shop VN direct | ⭐⭐⭐ | Bán chạy #3, shop tick xanh, rating 4.7 |
| Shopee VN bán chạy | ⭐⭐ | Top 15 Skincare |
| Google Trends | ⭐⭐ | +45% 7 ngày |
| Kalodata | ⭐⭐ | GMV growth +30% |
| Facebook Ads Library | ⭐ | 8 ads đang chạy |
| Cộng đồng VN | ⭐⭐ | 50+ review Webtretho 7 ngày |

**Cross-channel score**: 15/21 ✅ (threshold ≥10)

## Thông tin cơ bản
- **Tên**: ...
- **Thương hiệu**: ...
- **Giá VN (TikTok Shop)**: ...
- **Hoa hồng**: ...%
- **Shop chính hãng**: ✅/❌ tick xanh
- **Link sản phẩm**: ...

## Ads Intelligence (7 ngày)
(...như V1)

## USP + Target Audience + Pain points
(...)
```

### 2) `output/{slug}/09-batch-variants.md`
```markdown
# 5 Hook Angles - {Tên sản phẩm}

## Source ads (từ TikTok Creative Center 7 ngày gần nhất)
- Ad 1: [link/description]
- Ad 2: [link/description]

## 5 Hook angles (cho batch variants sau)

### Variant 1: Pain Point
- **Hook text**: "Da đỏ kích ứng xài gì cũng châm chích? 🦞"
- **Voice hook**: "Bồ ơi! Da mình đỏ quá..."
- **Visual**: Close-up mặt worried
- **Target**: Da nhạy cảm

### Variant 2: Curiosity Gap
- **Hook text**: "300K mà chất như triệu bạc 💸"
...

### Variant 3: Before/After
...

### Variant 4: Social Proof
...

### Variant 5: Contrarian
...

## Strategy
Post 5 variants cách nhau 6-12h → feed GMV Max auto A/B test.
```

## Checklist mỗi sản phẩm (phải pass tất cả 5)

- [ ] Data ≤7 ngày
- [ ] Cross-verified ≥3 kênh
- [ ] Có trên TikTok Shop VN tick xanh
- [ ] Hoa hồng ≥10%
- [ ] Giá 100k-700k
- [ ] CVR category ≥6%
- [ ] 5 hook angles đã extract
- [ ] Diversity: khác các sản phẩm khác trong batch ≥3 chiều

## Sau khi xong
⚠️ **KHÔNG confirm, tiếp thẳng sang `/affiliate-script` cho 5 slugs**:
```
/affiliate-script slug-1,slug-2,slug-3,slug-4,slug-5
```

Hoặc tự động nếu đang trong full pipeline.
