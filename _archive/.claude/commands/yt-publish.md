# yt-publish — Upload + Cross-Post Workflow

## Input
$ARGUMENTS (slug)

## Mục đích
Publish video ra YouTube + cross-post Instagram + TikTok + Facebook để max reach.

## YouTube Shorts upload protocol

### 1. YouTube Studio upload
- File: 1080×1920 MP4
- **Title**: từ `prompts/{slug}/title.md` (60 chars + emoji + #shorts)
- **Description**: full template (story + cast + tags hashtag)
- **Tags**: 8-12 từ title.md
- **Thumbnail**: custom from `prompts/{slug}/thumbnail.png`
- **Visibility**: Schedule (post time below) hoặc Public ngay
- **Made for kids**: NO
- **Category**: Pets & Animals
- **Language**: English (Auto translate captions enabled)
- **Captions**: English burned + Vietnamese CC track upload

### 2. Post time optimal
- **US prime**: 18:00 EST = 06:00 VN (post night before scheduled)
- **EU prime**: 19:00 CET = 01:00 VN (auto schedule)
- **Globally consistent**: Same time daily build habit

### 3. Pin first comment
> {Pinned comment from title.md}

Example for Mittens:
> "I will be watching to see who subscribes. 👁️ — Mittens"

### 4. Add to playlist
- Main playlist: "Inside the Pet Mind — Daily Episodes"
- Character playlist: "Mittens — Day in the Prison Series"

### 5. Add to community tab (after 1k subs)
Post: "New episode of {character} — link in shorts feed!"

## Cross-post stack

### Instagram Reels
- Same MP4 file
- Caption: shorter version (Instagram limit)
- Hashtag stack: 15-20 (Instagram allows more)
- Add to story 24h
- Tag relevant pet accounts

### TikTok
- Same MP4 file
- Caption: 100 chars
- Hashtag: #cat #dog #catshorts #fyp (3-5 max)
- Sound: same background music if copyright OK

### Facebook Reels
- Same MP4 file
- Auto cross-post from Instagram

### Pinterest Idea Pins
- Convert vertical to 1000×1500
- Title same
- Board: "Inside the Pet Mind"
- Tags: cat, dog, ai pets

### Twitter/X (optional)
- 1 tweet with video clip 30s
- Tag pet accounts

## Tools để batch upload
- **Buffer** ($15/month) — schedule cả 4 platforms
- **Repurpose.io** ($25/month) — auto cross-post
- **Hootsuite** — enterprise option

## Manual fallback (free)
- Sunday batch: schedule cả tuần manually trong 1 session
- Mỗi platform 5 phút × 5 platforms × 7 days = 175 phút (3h)

## Engagement protocol (60 phút sau publish)
1. Reply ALL comments
2. Heart positive comments
3. Pin best comment (or own pinned)
4. Share to story (Instagram)
5. Cross-promote in community tab

## Output

Save vào `youtube-pets/published/{slug}.md`:

```markdown
# Published Log — {slug}

## URLs
- YouTube: {url}
- Instagram: {url}
- TikTok: {url}
- Facebook: {url}
- Pinterest: {url}

## Post time
{ISO timestamp}

## Initial metrics (24h)
- Views:
- Likes:
- Comments:
- Subs gained:
- Avg view duration:
- CTR thumbnail:

## Notes
{any special observations}
```

## Sau 24h
Update metrics → run `/yt-analytics` weekly.
