# Publish Guide — Mittens Day 47 (Episode 1)

## 🎯 Goal
Upload Episode 1 lên YouTube + cross-post Instagram Reels + TikTok + Facebook trong 30 phút.

---

## 📋 Pre-publish checklist

- [ ] Final video tại `final.mp4` (1080×1920, 50s, no watermark)
- [ ] Thumbnail tại `thumbnail-v1.png` (custom Ideogram 3)
- [ ] Title + description từ `title.md`
- [ ] Tags 12 từ `title.md`
- [ ] Pinned comment ready
- [ ] Reply templates ready cho first hour

---

## 1️⃣ YouTube Upload (15 phút)

### Step 1: YouTube Studio
- URL: https://studio.youtube.com/
- Click **Create** → **Upload videos**
- Drag `final.mp4`

### Step 2: Details
**Title** (copy từ title.md):
```
Day 47 in the Human Prison 😾 #shorts
```

**Description** (full block từ title.md):
```
Mittens has been planning her morning attack for 47 days.
Today is the day. Or so she thought...

🐾 Inside the Pet Mind — daily inner monologues from 5 unique pets:
• Mittens 🐱 — The grumpy British cat
• Biscuit 🐶 — The optimistic golden
• Whiskers 🐱 — The philosophical Maine Coon
• Pixel 🐱 — The chaotic kitten
• Tank 🐶 — The lazy pug

🔔 Subscribe for more — new episode every day at 9am EST

💬 Comment below: Does YOUR cat do this too?

#cat #catshorts #catlife #catlover #funnycats #cathumor #grumpycat #britishshorthair #aianimation #petlife #petlovers #shortsfeed
```

**Thumbnail**: Upload `thumbnail-v1.png`

**Audience**: ❌ NOT made for kids

**Age restriction**: None

### Step 3: Video elements
- **Subtitles**: Add English (auto-generate hoặc upload manual)
- **Vietnamese CC**: Upload manual từ `youtube-pets/scripts/01-mittens-monday-blues.md` Vietnamese block
- **End screen**: Add Subscribe button (last 5 seconds)
- **Cards**: None (Shorts limit)

### Step 4: Checks
- **Copyright**: Wait check pass
- **Add to playlist**:
  - "Inside the Pet Mind — Daily Episodes" (main)
  - "Mittens Series — Day in the Prison" (character)

### Step 5: Visibility
**Option A — Post now**:
- Visibility: **Public**
- Click **Publish**

**Option B — Schedule**:
- Visibility: **Schedule**
- Date: Tomorrow
- Time: **18:00 EST** (06:00 sáng VN ngày hôm sau)
- Click **Schedule**

### Step 6: Save URL
- Copy YouTube URL → save vào `published.md`

---

## 2️⃣ Pin first comment (1 phút)

Sau khi video live, navigate về video page:

```
🐾 New character every day:
Mon — Mittens (this episode)
Tue — Biscuit 🐶
Wed — Whiskers 🐱
Thu — Pixel 🐈
Fri — Tank 🐶

I will be watching to see who subscribes. 👁️
— Mittens
```

Click 3-dot trên comment → **Pin**

---

## 3️⃣ Cross-post Instagram Reels (5 phút)

### Setup
- Mở Instagram trên Chrome (đã login)
- URL: https://www.instagram.com/

### Upload
- Click **Create** → **Reel**
- Upload `final.mp4`
- Cover: Custom upload `thumbnail-v1.png` hoặc auto từ video frame
- **Caption** (Instagram allow nhiều hashtag hơn YouTube):
```
Day 47 in the human prison 😾

Mittens has been planning her morning attack. Today is the day...

🐾 Daily inner monologues from 5 pets
🔔 Follow for more
💬 Does YOUR cat do this?

#cat #cats #catsofinstagram #catlovers #catstagram #catlife #catshorts #funnycats #cathumor #grumpycat #britishshorthair #aicat #aianimation #catreels #catpov #catsoftiktok #petsofinstagram #petlovers #petlife #catmemes #catlady #ilovemycat #caturday #instacat #cutecat
```

### Settings
- Allow remixing: ON
- Allow downloads: OFF
- Share to Facebook: ON (auto cross-post)
- Add to story 24h: ON
- **Share**

---

## 4️⃣ Cross-post TikTok (5 phút)

### Setup
- Mở TikTok web: https://www.tiktok.com/upload
- (Đã login)

### Upload
- Drag `final.mp4`
- **Caption** (TikTok limit 2200 chars but best 100-150):
```
Day 47 in the human prison 😾 Mittens plans her morning attack... but plot twist 🐾

#cat #catshorts #funnycats #grumpycat #fyp
```

### Settings
- Cover: Choose frame at 0:46s (Mittens glare)
- Allow comments: ON
- Allow duet: ON
- Allow stitch: ON
- Allow downloads: OFF
- Privacy: Public
- **Post**

---

## 5️⃣ Pinterest Idea Pin (3 phút, optional)

- URL: https://www.pinterest.com/
- Click **Create** → **Idea Pin**
- Upload video
- Title: "Day 47 in the Human Prison — Cat POV"
- Tags: cat, cathumor, funnycats, aianimation, petlovers
- Board: "Inside the Pet Mind"
- **Publish**

---

## 6️⃣ First Hour Engagement Protocol (60 phút sau publish)

### Set timer
```
mcp__scheduled-tasks__create_scheduled_task(
  taskId: "engage-mittens-ep1-60min",
  fireAt: "+60 minutes from publish",
  prompt: "Open YouTube + Instagram + TikTok video links for Mittens Episode 1.
  Reply ALL comments in character voice (sardonic British cat tone).
  Heart positive comments. Share to story Instagram."
)
```

### Manual checklist (15 phút)
- [ ] Reply mọi comment trong 60 phút (signal algo)
- [ ] Heart positive comments
- [ ] Share to Instagram story 24h
- [ ] DM 5 friends "check this out"
- [ ] Cross-promote in Community tab (sau 1k subs)

### Reply templates (đã có trong title.md)
- "This is exactly my cat 😂" → "Mittens approves of your cat. Welcome to the prison. 🐾"
- "Is this AI?" → "Mittens is 100% AI but her judgment is real."
- "More please!" → "Tomorrow at 9am EST. Set your alarm. The slave's alarm. 😾"

---

## 7️⃣ Save publish log

Tạo `youtube-pets/published/01-mittens-monday-blues.md`:

```markdown
# Published — Mittens Day 47 (Episode 1)

## URLs
- YouTube: {paste url}
- Instagram: {paste url}
- TikTok: {paste url}
- Facebook: (auto cross-post from Instagram)
- Pinterest: {paste url if used}

## Post time
2026-04-08 06:00 VN (18:00 EST 04-07)

## Initial 24h metrics (update sau)
- YouTube views:
- YouTube avg view duration:
- YouTube subs gained:
- YouTube CTR thumbnail:
- Instagram views:
- TikTok views:
- Total cross-platform:

## Comments insights
{copy 3-5 best comments + sentiment}

## Notes
{any observations về performance, what worked/failed}
```

---

## 8️⃣ Schedule analytics review

```
mcp__scheduled-tasks__create_scheduled_task(
  taskId: "review-mittens-ep1-24h",
  fireAt: "+24 hours from publish",
  prompt: "Open YouTube Studio analytics for Mittens Episode 1.
  Export CSV. Update published.md với 24h metrics.
  Note hook retention rate, midpoint retention, drop-off points."
)
```

---

## 🎯 Success criteria 24h

| Metric | Conservative | Stretch |
|---|---|---|
| YouTube views | 500 | 5,000 |
| YouTube subs | 5 | 50 |
| Avg view duration | 25s (50%) | 35s (70%) |
| CTR thumbnail | 4% | 8% |
| Comments | 5 | 30 |
| Instagram views | 200 | 2,000 |
| TikTok views | 1,000 | 10,000 |

## 🔄 Sau 24h
- Run analytics review (auto từ scheduled task)
- Update `published.md`
- Note insights vào `youtube-pets/analytics/week-1/`
- Plan Episode 2 (Biscuit) post tomorrow same time

---

## 🚨 Emergency

### Nếu video không upload được
1. Check size < 256MB
2. Check format MP4 H.264
3. Try re-export CapCut

### Nếu Copyright claim
1. Check music — phải free từ YT Library hoặc Suno commercial
2. Replace music
3. Re-upload

### Nếu Shorts không hiện
1. Check duration < 60s ✅ (50s OK)
2. Check aspect 9:16 ✅
3. Check #shorts trong title hoặc description ✅

### Nếu views = 0 sau 1h
1. Check thumbnail không bị reject
2. Check title không vi phạm guideline
3. Engage manually (DM friends, share story)
