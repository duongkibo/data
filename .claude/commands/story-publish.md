# story-publish — YouTube Long-form Upload + Cross-post

## Input
$ARGUMENTS (slug)

## Mục đích
Upload final.mp4 lên YouTube long-form + cross-post (optional).

## YouTube Studio upload

### Step 1: Navigate
- URL: https://studio.youtube.com/
- Click **Create** → **Upload videos**
- Drag `final.mp4`

### Step 2: Title (60 chars max)
**Title formula**:
> "[Hook statement] | Karma Caught Up Story"

**Examples**:
- "She Found Out Her Engagement Ring Was a Lie | Karma Caught Up"
- "He Cheated for 7 Years. Then The Universe Did THIS"
- "She Walked Away. The Karma Was Brutal"

### Step 3: Description

```
{Hook statement repeated}

{1-2 sentence summary intriguing but no spoilers}

In this episode of Karma Caught Up:
- {Beat 1 teaser}
- {Beat 4 teaser without reveal}
- {Beat 7 teaser of karma}

🦋 If you've ever walked away from someone who hurt you, leave a butterfly in the comments.

🔔 Subscribe for more stories where karma caught up.

⚖️ DISCLAIMER: This story is fictional, dramatized for entertainment. Any resemblance to real persons is coincidental.

#karmastories #betrayal #karmacaughtup #lifelessons #revengestories #relationshipstories #cheatingstories #karmaisreal
```

### Step 4: Thumbnail
Upload `thumbnail-v1.png` từ prompts folder.

### Step 5: Settings
- **Audience**: NOT made for kids
- **Age restriction**: None
- **Category**: People & Blogs (or Entertainment)
- **Language**: English
- **Captions**: English burned + auto CC

### Step 6: Tags (15)
```
karma stories, karma caught up, betrayal stories, relationship stories,
cheating stories, revenge stories, life lessons, reddit stories,
true betrayal, karma is real, story time, narrated stories,
karma justice, walk away, peaceful revenge
```

### Step 7: Cards + End screen
- Card at 50%: Link to similar episode
- End screen: Subscribe + Latest video
- Last 20s of video reserve for end screen

### Step 8: Visibility
**Schedule**:
- T3 (Tuesday) 21:00 EST = 8:00 sáng VN T4
- T6 (Friday) 21:00 EST = 8:00 sáng VN T7

Hoặc Public ngay nếu test.

### Step 9: Pin first comment

```
🦋 If this story moved you, leave a butterfly below.

Every butterfly is someone who chose peace over revenge.

Subscribe for more stories where karma caught up.

⚖️ Story is fictional, dramatized for entertainment.
```

### Step 10: Add to playlist
- "Karma Caught Up — All Episodes"
- "Betrayal Stories" (sub-playlist)
- "Wedding Drama" (sub-playlist nếu fit)

## Cross-post (optional)

### Spotify Podcast (audio version)
- Upload voice.mp3 only
- Title: same
- Description: same
- Build podcast spinoff

### TikTok teaser
- Cut 60s teaser of Beat 4 betrayal moment
- Hook viewer: "Full story on YouTube — link in bio"
- Drive traffic to YouTube

### Instagram Reels teaser
- Same 60s teaser
- Caption with curiosity gap
- Link to YouTube in bio

## Engagement protocol (60 phút sau publish)

```
mcp__scheduled-tasks__create_scheduled_task(
  taskId: "engage-{slug}-60min",
  fireAt: "+60 minutes",
  prompt: "Reply all comments on Karma Caught Up episode {slug}.
  Heart 🦋 butterfly comments. Pin best supportive story comment.
  Reply in narrator voice (calm, knowing)."
)
```

## Output

Save vào `youtube-stories/published/{slug}.md`:

```markdown
# Published — {slug}

## URLs
- YouTube: {url}
- Spotify (optional): {url}
- TikTok teaser: {url}

## Post time
{ISO timestamp}

## 24h metrics (update sau)
- Views:
- Avg view duration:
- CTR thumbnail:
- Subs gained:
- Likes:
- Comments:

## Insights
{observations}
```

## Time
- Upload + setup: ~15 phút
- Cross-post: ~15 phút
- Engagement first hour: ~60 phút manual
