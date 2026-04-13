# story-analytics — Weekly Performance Review

## Input
$ARGUMENTS (week number)

## Mục đích
Data loop weekly. Identify winning patterns → scale. Kill losers.

## Chạy mỗi Sunday (45 phút)

## Quy trình

### 1. Export YouTube Studio CSV
- Navigate Studio → Analytics → Content → Last 7 days
- Export CSV
- Save: `youtube-stories/analytics/week-{N}/data.csv`

### 2. Tag mỗi episode posted

| Date | Slug | Sub-niche | Hook style | Length | Views | AVD | CTR | Subs | Revenue |
|---|---|---|---|---|---|---|---|---|---|

### 3. Identify patterns

#### Top winners
- Sub-niche performing best?
- Hook style cao CTR nhất?
- Length sweet spot (10 vs 12 vs 15 min)?
- Time post tốt nhất?

#### Bottom losers
- Sub-niche flop?
- Hook fail?
- Length issues?

### 4. Insights → action items

#### Scale (double down)
- Sub-niche winner → produce 2x more
- Hook formula winner → reuse template
- Time slot winner → lock cadence

#### Kill (stop)
- Failed sub-niche → pause 1 month
- Bad hook → drop pattern

### 5. Update playbooks
- `STORY-FORMULA.md` — add winning beat patterns
- `IDEATION-BANK.md` — refresh with winning themes
- `VOICE-VISUAL-GUIDE.md` — note effective styles

## Output

Save `youtube-stories/analytics/week-{N}/review.md`:

```markdown
# Week {N} Review — {date range}

## 📊 Overall
- Episodes posted:
- Total views:
- Total revenue:
- Subs gained:
- Avg AVD: %
- Best episode: {slug} ({views} views, ${revenue})
- Worst: {slug}

## 🏆 Winners
### Episode 1: {slug}
- Sub-niche:
- Hook:
- Why won:
- Pattern to scale:

## 💀 Losers
### Episode N: {slug}
- Why lost:
- Pattern to kill:

## 📈 Insights
- Sub-niche ranking
- Hook ranking
- Time post winner
- AVD insights

## ✅ Next week actions
- Scale:
- Kill:
- Test:

## 💰 Revenue trajectory
| Week | Videos | Views | Revenue |
|---|---|---|---|
| 1 | 2 | ... | $... |
| 2 | 4 | ... | $... |

## YPP progress
- Subs current: {N} / 1000
- Watch hours: {N} / 4000
- Eligible: yes/no
```

## KPI checkpoints

### Week 4 (Month 1)
- Target: 8 videos, 1k subs, 100k views, $0
- Action if miss: Review hook formulas

### Week 12 (Month 3)
- Target: 24 videos, 10k subs, 1M views, YPP qualified, $200-1500/tháng
- Action if miss: Strategy review

### Week 26 (Month 6)
- Target: 48 videos, 60-150k subs, 8-15M views, $15-40k/tháng
- Action if miss: Channel pivot consideration

## Sources cross-reference
- TubeBuddy / vidIQ for SEO insights
- Social Blade for benchmarking
- Reddit r/NewTubers for tactics
