# yt-analytics — Weekly Performance Review

## Input
$ARGUMENTS (week number, vd: "week-1")

## Mục đích
Data loop weekly. Identify winners → scale. Identify losers → kill.

## Chạy mỗi Saturday/Sunday (45 phút)

## Quy trình

### 1. Export YouTube Studio analytics (10 phút)
- Login YouTube Studio
- Analytics → Content → Last 7 days
- Export CSV
- Save: `youtube-pets/analytics/week-{N}/data.csv`

### 2. Tag mỗi video posted (10 phút)
| Date | Slug | Character | Idea source | Hook style | Views | Avg View Duration | Retention midpoint | CTR | Likes | Comments | Subs gained |
|---|---|---|---|---|---|---|---|---|---|---|---|

### 3. Identify top 3 + bottom 3 (10 phút)

#### Top 3 winners
**Pattern analysis**:
- Character nào perform best?
- Hook style nào engagement cao?
- Time post nào CTR tốt?
- Thumbnail style nào CTR cao?
- Retention curve drop ở đâu?

#### Bottom 3 losers
**Failure analysis**:
- Drop early (hook fail)?
- Drop midway (pacing fail)?
- Low CTR (thumbnail/title fail)?
- Low engagement (story not resonate)?

### 4. Insights → action items (10 phút)

#### Scale (double down)
- Character winner → produce 2x content
- Hook style winner → reuse formula
- Time post winner → lock cadence
- Thumbnail style winner → templatize

#### Kill (stop doing)
- Character flop → reduce frequency
- Hook style fail → drop pattern
- Failing thumbnail → redesign

#### Test (new experiments)
- New hook style untested?
- New character interaction?
- New post time?
- New thumbnail color?

### 5. Update playbooks (5 phút)
- `RETENTION-PLAYBOOK.md` — add winning tactic
- `IDEATION-SYSTEM.md` — add winning idea source
- Character bibles — strengthen winning traits

## Output

Save `youtube-pets/analytics/week-{N}/review.md`:

```markdown
# Week {N} Review — {date range}

## 📊 Overall metrics
- Videos posted:
- Total views:
- Total subs gained:
- Avg retention: %
- Avg CTR: %
- Best video: {slug} ({views} views)
- Worst video: {slug} ({views} views)

## 🏆 Top 3 winners

### Winner 1: {slug}
- Character:
- Views:
- Retention midpoint: %
- CTR: %
- Why won: {analysis}
- **Pattern to scale**: {actionable}

### Winner 2-3...

## 💀 Bottom 3 losers

### Loser 1: {slug}
- Why lost: {analysis}
- **Pattern to kill**: {actionable}

## 🎯 Pattern insights

### Character ranking
1. {character} — avg {metric}
2. ...

### Hook style ranking
1. {style} — avg {metric}
2. ...

### Time post winner
{best time slot}

## ✅ Next week action items
- [ ] Scale: {action}
- [ ] Kill: {action}
- [ ] Test: {experiment}

## 📈 Trajectory
- Subs: {current} (Week 1: 0)
- Views cumulative: {current}
- Time to YPP qualify (3M views): {estimate}
```

## Update tracking spreadsheet
`youtube-pets/analytics/master-tracker.xlsx`:
- All videos all weeks
- Pivot tables by character / hook / time
- Subscriber growth chart

## KPI checkpoints

### Week 4 (Month 1)
- Target: 1k subs, 100k views, 1 viral hit
- Action if miss: change strategy (niche/hook/character)

### Week 12 (Month 3)
- Target: 10k subs, 1M views, YPP qualified
- Action if miss: review whole system

### Week 26 (Month 6)
- Target: 50-100k subs, 5-15M views, $500-1500/mo
- Action if hit: scale (hire editor, batch 2/day)
