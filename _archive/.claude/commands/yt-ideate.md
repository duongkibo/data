# yt-ideate — Daily Idea Generation cho YouTube Pet Channel

## Input
$ARGUMENTS (character name optional, hoặc empty = auto rotation)

## Mục đích
Generate 1 ý tưởng video pet inner monologue cho hôm nay. KHÔNG bao giờ block.

## Quy trình

### 1. Pick character (rotation)
| Day | Character |
|---|---|
| T2 | Mittens (sardonic cat) |
| T3 | Biscuit (optimistic dog) |
| T4 | Whiskers (philosophical cat) |
| T5 | Pixel (chaotic kitten) |
| T6 | Tank (lazy pug) |
| T7 | Crossover (2 characters) |
| CN | Best from week reposted hoặc community pick |

### 2. Pick idea source (8 sources)
Đọc `youtube-pets/IDEATION-SYSTEM.md` rotation:
1. Calendar events (holiday/season)
2. Reddit trends (r/cats, r/dogs)
3. Real human exp → pet version
4. Pop culture parody
5. Character signature scenarios
6. Viewer requests (sau 5k subs)
7. Seasonal relatable
8. Cross-character interaction

### 3. Generate 3 ideas → pick best 1
Brainstorm theo template:
```
Idea 1: {character} trong {situation} → {twist}
Idea 2: {character} reacts to {trigger} → {comedy beat}
Idea 3: {character} discovers {object/event} → {payoff}
```

### 4. Validate
- [ ] Có hook clear không?
- [ ] Có twist được không?
- [ ] Match character voice?
- [ ] AI có gen được visual?
- [ ] 50s feasible?

### 5. Add vào backlog
Save vào `youtube-pets/_ideas/backlog.md` với format:

```markdown
## {Date} — {Character} — {Title}

**Source**: {1 of 8}
**Hook**: {1 sentence}
**Twist**: {1 sentence}
**Status**: ✅ ready / ⚠️ needs work / 🚧 blocked
```

## Output

Return ý tưởng final với:
- Character + title
- Hook line (cho voiceover)
- Twist beat
- Recommended source
- Estimate retention probability

## Sau khi xong
Gợi ý chạy `/yt-script {character}-{title}` để write full script.
