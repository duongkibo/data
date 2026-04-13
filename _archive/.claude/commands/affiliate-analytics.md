# affiliate-analytics — Weekly Performance Review

## Input
$ARGUMENTS (week number hoặc date range)

## 🎯 Mục đích
Data loop weekly — kill loser, scale winner. Đế chế không guess, đế chế measure.

## Chạy mỗi Thứ 7 (60 phút)

## Quy trình

### 1. Export data (user làm — 10 phút)
User tải về:
- **TikTok Analytics CSV** (Creator Center → Analytics → Export)
  - Views, shares, comments, saves, watch time, follower gained
- **TikTok Shop Commission Report** (Shop → Commissions → Export)
  - Commission per video, CVR, GMV
- Lưu vào `output/analytics/week-{N}/`

### 2. Claude phân tích data

Đọc CSV, tag mỗi video:

| Video ID | Date | Pillar | Hook type | Product | Model image | Model video | Views | CTR | CVR | GMV | Winner? |
|---|---|---|---|---|---|---|---|---|---|---|---|

### 3. Identify patterns

#### Top 20% scale
- Hook type nào có completion rate cao nhất?
- Product nào có CVR cao nhất?
- Pillar nào drive followers nhất?
- Time-of-day nào winning?

#### Bottom 20% kill
- Hook type nào flop?
- Product nào không convert?
- Pattern nào cần loại bỏ?

### 4. Generate next week strategy
Feed insights vào:
- `/affiliate-pillar` — điều chỉnh ratio
- `/affiliate-search` — thêm/bớt product
- Hook swipe file update

## Output

Lưu `output/analytics/week-{N}/review.md`:

```markdown
# Weekly Review — Week {N} ({date range})

## 📊 Overall performance
- Videos posted: 14 + 2 livestream
- Total views: X
- Avg completion rate: X% (target ≥70%)
- Total GMV: X VND
- New followers: X

## 🏆 Top 3 winners

### Winner 1: Video X
- Pillar: MOFU
- Hook: "Hành trình 3 tháng..."
- CVR: 7.2%
- GMV: X VND
- **Pattern to scale**: Story-telling hook + Veo 3 narrative + Torriden

### Winner 2: ...
### Winner 3: ...

## 💀 Bottom 3 losers

### Loser 1: Video Y
- Pillar: BOFU
- Hook: "Contrarian STOP dùng HA..."
- CVR: 0.3%
- **Issue**: Hook too aggressive, turned viewer off
- **Kill pattern**: Contrarian hook cho BOFU

## 📈 Insights

### Hook pattern ranking (by CVR)
1. Personal story (MOFU) — avg CVR 5.8%
2. Before/After (BOFU) — 4.2%
3. Educational (TOFU edu) — 2.1% (but high saves)
4. POV entertainment — 1.5% (high views, low CVR)
5. Contrarian — 0.8% ⚠️ deprioritize

### Product ranking (by GMV)
1. Torriden DIVE-IN — 15tr
2. Biodance Mask — 8tr
3. Cocoon Toner — 5tr
4. Anessa — 3tr
5. Medicube — 1tr ⚠️ consider dropping (niche mismatch)

### Time-of-day winner
- 21:00-22:00 — highest CVR
- 12:00-13:00 — highest views, low CVR

### Model performance
- Veo 3 clips: 35% higher completion rate than Kling 2.5 talking head
- Flux 1.1 Pro hand shots: 20% higher save rate than Nano Banana 2

## 🎯 Next week action items

### Scale (double down)
- [ ] Post 2x more MOFU personal story content
- [ ] Use Veo 3 for all talking head moments
- [ ] Focus Torriden + Biodance as primary products
- [ ] Post prime time 21:00-22:00

### Kill (stop doing)
- [ ] Contrarian hook pattern
- [ ] Medicube PDRN (niche mismatch confirmed)
- [ ] Kling 2.5 for pure talking head → always Veo 3

### Test (new experiments)
- [ ] Try new hook type: "Science explanation" (TOFU)
- [ ] Test new product: Biodance Collagen Serum variant
- [ ] Experiment: 45s video length (current 30s)

## 💰 GMV progression

| Week | Videos | Views | GMV | Growth |
|---|---|---|---|---|
| Week 1 | 10 | 50k | 3tr | — |
| Week 2 | 14 | 150k | 8tr | +167% |
| Week 3 | 16 | 400k | 22tr | +175% |
| Week 4 | 16 | 850k | 45tr | +105% |

**Trajectory**: On track cho 250tr-1 tỷ/tháng trong 3 tháng tới.
```

## Auto-update swipe files
Sau review, auto update:
- `assets/hook-swipe-file.md` — thêm winner patterns
- `assets/product-database.md` — tag status (scaling/dropping)
- `assets/model-performance.md` — CVR per model
