# 🎭 Characters Bible — Karma Caught Up

> **Single source of truth** cho mọi nhân vật. Dùng cho Episode 1+.
> **Consolidation**: Replaces character sections ở VOXEL-STYLE-GUIDE.md + prompts/01/README.md

---

## 🎯 Character design philosophy

### Principles
- **Cube-based voxel** nhưng proportional (NOT raw Minecraft 1:2)
- **Minimal facial features**: 2 dark dot eyes, simple line mouth
- **Signature color** — mỗi character 1 palette cố định
- **Recognizable silhouette** — distinct shape from distance
- **Astroneer + Crossy Road aesthetic**

### Base settings
```yaml
Gen model: Flux 2 Pro
Ratio: 1:1 (1024×1024 square — for reference lock)
Background: Clean white (for Character Reference upload)
Pose: Neutral standing facing camera
Purpose: Upload to Nano Banana 2 Character Reference across all episodes
```

---

## 👤 CORE CAST (5 characters — reuse forever)

### 1. Sarah Miller — Protagonist archetype
**Role**: Betrayed woman who walks away
**Age**: 31
**Occupation**: Pediatric nurse (Ep 1) — can vary per episode
**Personality**: Warm, careful, observant, quiet strength

```yaml
Signature colors: Cream #F3E9D2 + Soft brown
Hair: Brown rounded voxel shoulder-length
Eyes: 2 small dark dots
Mouth: Simple line (neutral → soft smile)
Outfit default: Cream cotton cardigan
Outfit nurse: Cream + soft blue voxel scrubs
```

**Gen prompt**:
```
Voxel art character of a young woman around 31 years old in cube-based 3D style,
brown rounded voxel hair shoulder-length, simple cube head with 2 small dark dot eyes
and small line mouth, wearing cream colored voxel cardigan,
proportional body NOT raw Minecraft 1:2 ratio,
warm cream and brown signature colors with subtle gradient shading,
smooth voxel cube edges with subtle highlights,
neutral standing pose facing camera,
clean white background for character reference,
Astroneer meets Crossy Road character style,
NOT raw Minecraft NOT realistic NOT cartoon NOT anime,
premium voxel art aesthetic, high quality 3D voxel render,
1024x1024, 2K
```

**Save**: `assets/characters/sarah-voxel-base.png`

---

### 2. Daniel "Dan" Matthews — Antagonist archetype
**Role**: Deceptive husband/boyfriend
**Age**: 32
**Occupation**: Contractor (Ep 1) — blue collar varies
**Personality**: Surface charming, deceptive, self-destructive

```yaml
Signature colors: Charcoal #1F2937 + Dark brown
Hair: Short brown voxel cap
Eyes: 2 dot eyes neutral
Mouth: Line neutral → later defeated
Outfit default: Dark gray work shirt + jeans
Build: Slightly larger torso
```

**Gen prompt**:
```
Voxel art male character cube-style design around 32 years old,
short brown voxel hair cap style,
simple cube head with 2 dot eyes and neutral mouth line,
wearing dark gray voxel work shirt and jeans,
slightly larger geometric body proportional,
charcoal gray and dark brown signature colors,
smooth voxel shading with edge highlights,
neutral standing pose facing camera,
clean white background for character reference,
Astroneer meets Crossy Road character style,
NOT raw Minecraft NOT realistic NOT cartoon,
premium voxel art aesthetic,
1024x1024, 2K
```

**Save**: `assets/characters/daniel-voxel-base.png`

---

### 3. Rachel Matthews — Third party (real wife)
**Role**: Betrayed by same man, becomes agent of karma
**Age**: 30
**Occupation**: Paralegal (Ep 1) — professional varies
**Personality**: Competent, decisive, no-nonsense

```yaml
Signature colors: Navy #1E3A8A + Cream
Hair: Blonde voxel shoulder-length
Eyes: 2 dot eyes determined
Mouth: Line firm
Outfit: Navy blazer + cream shirt business
```

**Gen prompt**:
```
Voxel art female character distinct from Sarah around 30 years old,
blonde voxel hair shoulder-length geometric shape,
simple cube head with 2 dot eyes small mouth line,
wearing navy voxel blazer over cream shirt business attire,
navy blue and cream signature colors,
neutral standing pose facing camera,
clean white background,
Astroneer voxel character style,
NOT raw Minecraft NOT realistic,
premium voxel art aesthetic,
1024x1024, 2K
```

**Save**: `assets/characters/rachel-voxel-base.png`

---

### 4. James Cooper — New love (epilogue)
**Role**: Genuine partner Sarah finds after
**Age**: 33
**Occupation**: Teacher (Ep 1) — trustworthy profession varies
**Personality**: Warm, transparent, present

```yaml
Signature colors: Sage green #6B7F5A + Warm cream
Hair: Dark brown voxel styled
Eyes: 2 dot eyes soft
Mouth: Line gentle smile
Outfit: Sage green cardigan + white shirt
```

**Gen prompt**:
```
Voxel art male character around 33 years old with friendly design,
dark brown voxel hair styled,
simple cube head with 2 dot eyes and soft smile line,
wearing sage green voxel cardigan over white shirt,
sage green and warm cream signature colors,
welcoming friendly pose,
clean white background,
Astroneer voxel character style,
NOT raw Minecraft,
premium voxel art aesthetic,
1024x1024, 2K
```

**Save**: `assets/characters/james-voxel-base.png`

---

### 5. Patricia Reeves — Wise mentor
**Role**: Lawyer/advisor figure
**Age**: 55
**Occupation**: Attorney (Ep 1) — professional expertise varies
**Personality**: Authoritative, kind, efficient

```yaml
Signature colors: Navy #1E3A8A + Silver gray
Hair: Gray voxel bob cut
Eyes: 2 dot eyes wise
Mouth: Line professional
Outfit: Navy business suit
```

**Gen prompt**:
```
Voxel art older female character around 55 years old,
gray voxel bob cut hair,
simple cube head with 2 dot eyes and confident mouth line,
wearing navy voxel business suit with silver accents,
navy and silver signature colors,
authoritative kind pose,
clean white background,
Astroneer voxel character style,
NOT raw Minecraft,
premium voxel art aesthetic,
1024x1024, 2K
```

**Save**: `assets/characters/patricia-voxel-base.png`

---

## 🎭 ARCHETYPE EXPANSION (future episodes — reuse pattern)

Mỗi archetype có 1 character lock. Có thể thêm variants (Sarah v2 corporate, Sarah v3 college) nhưng giữ signature colors + proportions.

### Available archetypes cho Episodes 2-10
| Archetype | Role | Signature | Status |
|---|---|---|---|
| Sarah (protagonist) | Betrayed woman | Cream + brown | ✅ Locked |
| Daniel (antagonist) | Deceptive partner | Charcoal + brown | ✅ Locked |
| Rachel (third party) | Fellow betrayed | Navy + cream | ✅ Locked |
| James (new love) | Genuine partner | Sage + cream | ✅ Locked |
| Patricia (mentor) | Wise advisor | Navy + silver | ✅ Locked |
| **Margaret (mother)** | Supportive or antagonist MIL | Plum + cream | 🔴 Future |
| **David (brother)** | Family ally | Burgundy + gray | 🔴 Future |
| **Emily (friend)** | Best friend | Sunset orange + cream | 🔴 Future |
| **Jennifer (rival)** | Office rival | Teal + silver | 🔴 Future |
| **Mark (ex-boss)** | Workplace antagonist | Dark gray + red accent | 🔴 Future |

**Rule**: Tối đa 10 recurring characters → viewer nhớ + channel có "cast" feeling.

### ⚠️ Intentional name reuse across episodes
Tất cả 6 tập dùng cùng 5 tên: Sarah, Daniel, Rachel, James, Patricia. Đây là **design choice có chủ đích**:
- **Voxel art style** = viewer không phân biệt face giữa episodes → cùng tên + cùng visual = branding consistency
- **Faceless channel** = không có human face → character names = identity anchors
- **"Anthology with recurring cast"** = giống American Horror Story — mỗi season khác story nhưng actors quen
- **SEO**: "Sarah karma story" trở thành searchable brand term
- **Nếu viewer comment hỏi**: reply "Each episode is a different Sarah's story. Same universe, different lives." → tăng engagement

---

## 🎨 Character consistency workflow

### Per-episode gen process
1. **Upload base ref** (sarah-voxel-base.png) làm Character Reference in Freepik
2. **Model**: Nano Banana 2 (best character lock)
3. **Prompt**: Reference character từ ref + mô tả action/pose/setting
4. **Outfit adaptation**: Change outfit theo scene nhưng giữ face + hair + body proportions
5. **Validation**: Compare với base ref → 80% similarity minimum

### Example episode variation
```
Base ref: sarah-voxel-base.png (cream cardigan neutral)

Episode 1 Beat 2 (hospital):
"The voxel character from reference wearing cream and blue nurse scrubs,
holding clipboard, gentle smile, hospital corridor background..."

Episode 1 Beat 6 (packing):
"The voxel character from reference in casual cream tank top,
packing clothes into suitcase, determined expression..."

Episode 1 Epilogue (new life):
"The voxel character from reference in warm peach sweater,
laughing genuinely, cozy kitchen background..."
```

Face/hair/body stay same. Outfit + expression + setting change.

---

## 📁 File locations

```
youtube-stories/assets/characters/
├── sarah-voxel-base.png        (Flux 2 Pro, 1024×1024)
├── daniel-voxel-base.png
├── rachel-voxel-base.png
├── james-voxel-base.png
├── patricia-voxel-base.png
└── _future/                    (archetype expansions)
```

**Future episodes** reference từ đây, KHÔNG tạo mới characters bừa bãi.

---

## ✅ Quality gate

Mỗi character base ref phải pass:
- [ ] Voxel cube aesthetic clear (not raw Minecraft)
- [ ] Astroneer/Crossy Road feel
- [ ] Signature color palette visible
- [ ] Clean white background
- [ ] Neutral pose facing camera
- [ ] Face proportional (not Minecraft 1:2)
- [ ] 1024×1024 square
- [ ] Save with exact filename

→ 8/8 pass = usable as Character Reference forever.
