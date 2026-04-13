# story-ideate — Story Idea Generation (Reddit + 8 sources)

## Input
$ARGUMENTS (sub-niche optional: cheating / wedding / workplace / family / mil)

## Mục đích
Generate story ideas cho Karma Caught Up channel. Mining Reddit + cộng đồng + creative AI.

## 8 idea sources
1. Reddit r/AITA top 24h
2. Reddit r/relationship_advice
3. Reddit r/pettyrevenge
4. Reddit r/MaliciousCompliance
5. Reddit r/bestofredditorupdates (long arc)
6. Quora "best revenge story"
7. Calendar trigger (Valentine, Christmas, anniversary)
8. AI-generated original (fictional from prompts)

## Quy trình

### 1. Pick source theo rotation hoặc trending
### 2. Browse 10 stories → filter 3 candidates
### 3. Validate each candidate
- [ ] Có Karma Caught Up positioning? (passive karma, không active revenge)
- [ ] Hook strong? (curiosity gap)
- [ ] Production gen được bằng AI? (no graphic violence)
- [ ] Compliance pass? (rewrite to fictional)
- [ ] Story arc complete? (8 beats fit)

### 4. Sketch 1 winner
```
- Title: 60 chars
- Hook (40 words)
- Protagonist (1 sentence)
- Betrayal (1 sentence)
- Pivot moment (1 sentence)
- Karma path (3 events)
- Epilogue (1 sentence)
```

### 5. Save vào backlog
File: `youtube-stories/_ideas/backlog.md`

```markdown
## {date} — {title}
- Source: {source}
- Sub-niche: {cheating/wedding/...}
- Hook: {40 words}
- Status: 🟢 ready / 🟡 research / 🔴 blocked
```

## Output
Return idea final với metadata. Gợi ý chạy `/story-script {slug}` tiếp.

## Sources reference
- `youtube-stories/IDEATION-BANK.md` — 50 starter ideas
- `youtube-stories/STORY-FORMULA.md` — 8-beat structure
