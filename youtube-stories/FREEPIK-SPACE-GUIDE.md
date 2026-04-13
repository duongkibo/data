# 🧩 Freepik Space — Auto-run Setup Guide

> **Mục đích**: Convert mỗi tập thành paste-ready content cho Freepik Space (infinite canvas nodes). Setup 1 lần → copy-paste 5 tập → run batch.

---

## 📐 Space architecture (5 panels per episode)

```
┌─────────────────────────────────────────────────┐
│  PANEL 1 — Characters (5 text nodes)           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐      │
│  │Sarah│ │Daniel│ │Rachel│ │James│ │Patr.│     │
│  └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘ └──┬──┘      │
│     │       │       │       │       │          │
│  PANEL 2 — Scene Images (4-5 batch nodes)      │
│  ┌─────────────┐ ┌─────────────┐               │
│  │NanoBanana+  │ │NanoBanana+  │  ... 40 imgs │
│  │Sarah ref    │ │Daniel ref   │               │
│  │(14 prompts) │ │(5 prompts)  │               │
│  └──────┬──────┘ └──────┬──────┘               │
│         │               │                       │
│  PANEL 3 — Videos (1 batch node Kling 2.5)     │
│  ┌─────────────────────────────┐               │
│  │Kling 2.5 (40 motion prompts)│               │
│  │start frames ← Panel 2 outputs│               │
│  └──────┬──────────────────────┘               │
│         │                                       │
│  PANEL 4 — Audio (2 nodes)                     │
│  ┌──────────┐  ┌─────────────┐                │
│  │Text→Audio│  │Add Audio to │                │
│  │(BGM)     │  │Video        │                │
│  └──────┬───┘  └──────┬──────┘                │
│         │              │                        │
│  PANEL 5 — Concatenation (1 node)              │
│  ┌─────────────────────────────┐               │
│  │Video Concat (40 clips)       │               │
│  └──────────────────────────────┘              │
└─────────────────────────────────────────────────┘
```

---

## 🛠️ One-time setup (làm 1 lần cho cả channel)

### Step 1: Tạo base Space template
1. Mở Freepik → Pikaso → Spaces → New Space
2. Đặt tên: `Karma Caught Up — Base Template`
3. Tạo **Panel 1: Characters**
4. Drop 5 "Image Generator" nodes (Flux 2 Pro model)
5. Paste từng prompt character từ `space-paste.md` Panel 1 của Ep1
6. Run all 5 → Save outputs
7. **Ghi lại UUID** của mỗi output node (hover node → copy ID)

### Step 2: Lưu UUID vào clipboard file

Tạo file `freepik-uuids.txt` ở local:
```
SARAH_REF_UUID=<paste UUID Sarah output>
DANIEL_REF_UUID=<...>
RACHEL_REF_UUID=<...>
JAMES_REF_UUID=<...>
PATRICIA_REF_UUID=<...>
```

Các tập sau sẽ reference những UUID này.

### Step 3: Duplicate template per episode
- Right-click Space → Duplicate → Rename `Karma — Ep02 Phone Bill`
- Panel 1 Characters đã có sẵn từ template → skip
- Paste Panel 2+3+4+5 từ `space-paste.md` của tập tương ứng

---

## 📋 Node types trong format paste

| Node type | Cách tạo | Input |
|---|---|---|
| **Image Generator** (text→image) | + node → Image → chọn model | Text prompt |
| **Image Generator + Character Reference** | Node settings → Character Reference → upload ref | Text prompt + ref image |
| **Text to Video** | + node → Video → Kling 2.5 | Start frame + motion prompt |
| **Text to Audio** | + node → Audio | Text prompt (describe music) |
| **Add Audio to Video** | + node → Audio → Merge | Video + Audio inputs |
| **Video Concatenation** | + node → Video → Concat | Multiple video inputs |

## 🔗 Reference syntax
- Trong prompt của node B, paste `@[uuid:NodeName:output]` để ref output node A
- Freepik tự expand ref image vào character-reference slot của node B
- Nếu không dùng UUID, có thể drag connection manually trên canvas

---

## 🎯 Batch prompts format (quan trọng)

Freepik cho phép numbered list trong 1 text node → gen nhiều images/videos trong 1 lần run:

```
1. Prompt cho frame đầu tiên...
2. Prompt cho frame thứ hai...
3. ...
40. Prompt cho frame cuối
```

→ Node sẽ gen 40 outputs. Tất cả nằm trong cùng 1 node, dùng chung model + settings.

**Rule**: Mỗi numbered list = 1 model + 1 character ref. Nếu scenes cần model khác hoặc ref khác → tách node khác.

---

## 📦 File per episode

Mỗi tập có `prompts/0X-*/space-paste.md` chứa:
1. Panel 1 Characters (5 text nodes — chỉ Ep1 cần tạo; các tập sau reference UUID)
2. Panel 2 Images (4-5 batch nodes grouped by model/ref)
3. Panel 3 Videos (1 batch node Kling motion prompts)
4. Panel 4 Audio (BGM prompt)
5. Panel 5 Concatenation (output path)

---

## ⚠️ Known constraints

1. **ElevenLabs voice KHÔNG có trong Freepik Space** — voiceover vẫn generate riêng ở ElevenLabs, merge CapCut sau
2. **Kling 2.5 = 10s max/clip** — mỗi numbered video prompt = 1 clip 10s
3. **Character consistency**: luôn dùng `Nano Banana 2` + Character Reference slot cho scenes có nhân vật
4. **Batch limit Freepik**: ~20-50 prompts/node tuỳ model. Nếu fail → split thành 2 nodes

---

## 🚀 Workflow chạy 1 tập

1. Duplicate template → rename
2. Open `prompts/0X-{slug}/space-paste.md`
3. **Panel 2**: Copy từng section "Batch A/B/C/D" → tạo node tương ứng → paste prompt
4. **Panel 3**: Copy video batch → tạo Kling 2.5 node → paste → link start frames từ Panel 2
5. **Panel 4**: Copy BGM prompt → Text-to-Audio node
6. **Panel 5**: Copy concatenation instructions → tạo Concat node
7. Run All
8. Download video final → CapCut merge với ElevenLabs voiceover
9. Upload YouTube (theo `08-upload.md`)

**Thời gian ước**: ~15-30 phút setup + ~60-90 phút Freepik render (background).

---

## ✅ Tiếp theo

Tôi sẽ tạo `space-paste.md` cho Ep1-6 theo format này. Mỗi file sẽ chứa nội dung compile từ `03-images.md` + `04-videos.md` ready-to-paste.
