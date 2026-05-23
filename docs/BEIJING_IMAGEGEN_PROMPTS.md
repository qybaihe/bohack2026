# 北京横屏棋盘版 ImageGen 提示词

这些提示词对应 `time-chess-react/public/assets/beijing/ASSET_SLOTS.md`。默认输出不要包含长段文字、品牌标识、水印、二维码或真实商业 logo。页面文案全部由 React 渲染。

## 全局风格基准

```text
Use case: stylized-concept
Asset type: shared visual style for a digital board game UI
Primary request: Modern Chinese city notebook plus premium tabletop board game components for a Beijing central-axis cultural game.
Style: clean modern guofeng, light city sketchbook texture, polished board game production art, warm rice white paper, cinnabar red, ink teal, grey roof tile, muted warm gold, pale blue green, a little ink black.
Composition: crisp readable shapes, refined materials, no heavy historical drama mood, no fantasy game armor, no tourist-poster realism.
Text policy: no long readable text, no brand marks, no watermarks. Leave blank label areas for UI text rendered in code.
```

## backgrounds/

### `backgrounds/entry-board-box.webp`

```text
Use case: stylized-concept
Asset type: 16:9 landing background for a digital board game
Primary request: A tabletop scene showing an opened premium board game box for "a Beijing central-axis city memory board game", with a square route board preview, a few cards, dice, tokens, and warm desk light.
Scene/backdrop: clean modern desk, subtle Chinese paper texture, hints of Beijing roof tiles and central-axis map lines.
Composition: leave open space on the right for HTML chapter cards and a start button; main board box visible in the first viewport, not cropped too tightly.
Style: modern guofeng, city sketchbook, polished tabletop game product art, warm rice white, cinnabar red, ink teal, grey tile, warm gold.
Avoid: no readable long text, no real brand logos, no Monopoly-like branding, no mobile app screenshot, no dark heavy museum mood.
```

### `backgrounds/photo-trigger-table.webp`

```text
Use case: stylized-concept
Asset type: 16:9 event background
Primary request: A softened tabletop board game scene with the Beijing board in the background and a blank central event card area for a photo trigger.
Subject: square board game route, small pawn, dice, card stack, faint landmark sketches, blank elegant event card space in the center.
Composition: background board remains recognizable but subdued; center card area is clean enough for React overlay text and upload controls.
Style: modern Chinese city notebook, light paper grain, warm desk light, cinnabar red accents, ink teal details.
Avoid: no readable text, no phone UI drawn into the image, no heavy blur that hides the board completely.
```

### `backgrounds/theater-table.webp`

```text
Use case: stylized-concept
Asset type: 16:9 AI theater background
Primary request: A tabletop board game scene transformed into a small paper theater, with a dimmed Beijing board behind and a blank dialogue stage area in the middle.
Subject: layered paper stage frame, faint city map, pawn and dice at the edge, blank areas for character portrait and dialogue overlays.
Composition: theatrical but clean, center-left can hold a character portrait, center-right can hold dialogue cards.
Style: modern guofeng, refined board game materials, warm cream paper, cinnabar, ink teal, muted gold.
Avoid: no fantasy magic effects, no readable text, no excessive darkness.
```

### `backgrounds/finale-storybook.webp`

```text
Use case: stylized-concept
Asset type: 16:9 finale storybook background
Primary request: An open travel storybook on a tabletop, with a completed Beijing route board partially visible underneath, cards tucked around the pages, a route timeline, and blank poster area.
Composition: leave the open book center clean for HTML story text; show cards, dice, small seals, and route pins as surrounding props.
Style: modern Chinese city notebook, premium board game finish, warm rice paper, cinnabar red, ink teal, grey roof tile, warm gold.
Avoid: no readable long text, no tourist photo collage, no real logos.
```

### `backgrounds/card-album-table.webp`

```text
Use case: stylized-concept
Asset type: 16:9 card album background
Primary request: A tabletop card album opened to blank card slots, with a faint Beijing board and small route tokens behind it.
Composition: grid-like album pages with empty slots; right side can support a selected card detail overlay.
Style: clean modern guofeng, city sketchbook, paper and fabric textures, restrained warm light.
Avoid: no readable text, no ornate fantasy card UI, no cluttered small details.
```

### `backgrounds/mission-table.webp`

```text
Use case: stylized-concept
Asset type: 16:9 real-world mission background
Primary request: A tabletop mission board with blank checklist cards, photo clips, a small reward card preview, and Beijing route props.
Composition: central task card area, side photo frame, reward card area, all labels blank for UI overlay.
Style: modern Chinese notebook, premium board game components, warm cream, cinnabar, ink teal, muted gold.
Avoid: no readable text, no phone camera UI, no dark gritty look.
```

## board/

### `board/main-board-map.webp`

```text
Use case: stylized-concept
Asset type: square main board background
Primary request: A complete original square tabletop board game board inspired by Beijing central-axis walking route, with an outer loop of blank game tiles and a center illustrated map.
Subject: outer track tiles, corner tiles, center Beijing axis map, route pins, subtle hutong and roof-tile motifs.
Composition: perfectly square board, full board visible, clean central map space, tile borders readable; no direct imitation of any existing board game brand.
Style: modern guofeng city sketchbook, premium board game production art, warm rice white, cinnabar red, ink teal, grey tile, muted gold.
Avoid: no readable long text, no real brand logo, no Monopoly branding, no tiny illegible labels, no dark fantasy map.
```

### `board/axis-center-map.webp`

```text
Use case: stylized-concept
Asset type: illustrated map insert
Primary request: A horizontal illustrated map insert of Beijing's central-axis route from Qianmen to Drum Tower and Shichahai, stylized for a board game center panel.
Subject: axis line, Qianmen, central avenue, Forbidden City corner tower, Jingshan, Drum Tower, lake and hutong hints.
Composition: 14:9 map panel, readable landmarks as shapes, leave blank label plaques for React text.
Style: clean city sketchbook, ink teal map lines, pale blue-green water, cinnabar route markers, warm paper texture.
Avoid: no exact navigation map, no dense real street labels, no long readable text.
```

### `board/route-preview-strip.webp`

```text
Use case: stylized-concept
Asset type: setup page route preview
Primary request: A compact horizontal preview of five Beijing route stops as board-game tiles connected by a dotted path.
Subject: Qianmen gate, axis view, palace corner tower, Jingshan overlook, Drum Tower and Shichahai life.
Composition: 16:9, simple enough for small display, blank title areas.
Style: modern city notebook, warm paper, cinnabar markers, ink teal path.
Avoid: no readable text, no overly detailed map.
```

## landmarks/

### 6-up landmark sprite source

```text
Use case: stylized-concept
Asset type: green-screen sprite sheet for landmark board tiles
Primary request: Six separate square tile illustrations for a Beijing board game: Qianmen gate, central-axis direction line, Forbidden City corner tower with water reflection, Jingshan overlook, Drum Tower, Shichahai lake and hutong life.
Background: perfectly flat solid #00ff00 chroma-key background.
Composition: 2 rows by 3 columns, each component centered in its cell with generous padding; clear separation between components; no shadows, no floor plane.
Style: modern guofeng city sketchbook, board game tile art, warm rice white, cinnabar, ink teal, grey tile, muted gold. Do not use #00ff00 in any subject.
Avoid: no text, no watermark, no gradients or texture in the green background, no cast shadows, no contact shadows, no real logos.
```

### event tile sprite source

```text
Use case: stylized-concept
Asset type: green-screen sprite sheet for board event tiles
Primary request: Eight separate square event tile illustrations for a Beijing tabletop board game: time dice, camera task, fate turn, city sound task, co-creation, echo card, hidden branch, finale travelogue.
Background: perfectly flat solid #00ff00 chroma-key background.
Composition: 2 rows by 4 columns, each event icon centered in a small decorative board tile, generous padding, clear boundaries.
Style: modern Chinese notebook plus premium board game component, cinnabar red, ink teal, warm gold, grey tile, cream paper. Do not use #00ff00 in any subject.
Avoid: no readable text, no brand logo, no shadows, no green details in components.
```

## roles/

Use one prompt per role and keep composition consistent.

```text
Use case: historical-scene
Asset type: 3:4 character portrait for AI theater
Primary request: [ROLE_NAME], a believable "city memory NPC" for a Beijing central-axis cultural board game.
Character direction: [ROLE_DIRECTION]
Composition: waist-up portrait, facing slightly toward the dialogue area, clean silhouette, enough margin for cropping, subtle neutral paper backdrop or flat removable background.
Style: modern guofeng illustration, calm theatrical presence, city notebook texture, not overdesigned, not fantasy armor, not mobile RPG glamour.
Palette: warm rice white, cinnabar accents, ink teal shadows, grey roof tile neutrals, muted gold details.
Avoid: no readable text, no watermark, no exaggerated weaponry, no heavy ancient-drama costume.
```

Role directions:

| 文件名 | `[ROLE_NAME]` | `[ROLE_DIRECTION]` |
| --- | --- | --- |
| `roles/qing-merchant.webp` | 清末掌柜 | warm, sharp-eyed shopkeeper near Qianmen, cloth jacket, ledger and signboard hints |
| `roles/city-craftsman.webp` | 营城匠师 | calm city planner and builder, compass, ruler, axis-line motifs |
| `roles/palace-painter.webp` | 宫廷画师 | restrained painter, brush and folded sketch, eaves and water reflection motifs |
| `roles/city-historian.webp` | 观城史官 | quiet historian who reads the city from high places, long scroll and distant skyline motifs |
| `roles/hutong-resident.webp` | 胡同居民 | approachable old-city resident, everyday clothing, doorway, kettle, bicycle bell or lake breeze motifs |

## cards/

Use one prompt per card, replacing bracketed terms.

```text
Use case: stylized-concept
Asset type: 2:3 collectible culture card front
Primary request: A premium board-game culture card front for [CARD_NAME], theme [CARD_THEME].
Illustration subject: [CARD_SUBJECT]
Composition: vertical 2:3 card, upper illustration window, lower blank title and text plaques, decorative border, no long readable text.
Style: modern guofeng city notebook, premium tabletop card, warm rice paper, cinnabar, ink teal, grey tile, muted gold, clean edges.
Avoid: no readable paragraph text, no real logo, no QR code, no fantasy trading-card excess.
```

Card subjects:

| 文件名 | `[CARD_NAME]` | `[CARD_THEME]` | `[CARD_SUBJECT]` |
| --- | --- | --- | --- |
| `cards/card-gate.webp` | 城门卡 | boundary and entering the city | Qianmen gate, threshold, small route token crossing inward |
| `cards/card-trade.webp` | 商贸卡 | trade, storefronts, street life | ledger, shop sign silhouettes, crowd movement, warm storefront lights |
| `cards/card-axis.webp` | 秩序卡 | direction and spatial order | compass, straight axis line, balanced city blocks, ceremonial scale |
| `cards/card-palace.webp` | 宫城卡 | palace architecture and composition | corner tower eaves, water reflection, sky held by rooflines |
| `cards/card-overlook.webp` | 俯瞰卡 | overlook and city scroll | Jingshan view, layered rooftops, long scroll horizon |
| `cards/card-life.webp` | 烟火卡 | hutong life and city sound | lake water, bicycle bell, doorway, dinner light, ordinary footsteps |
| `cards/card-echo.webp` | 回声卡 | user's memory and message | folded letter, sound-wave line, route seal, blank handwritten note area |

## sprites/

### `sprites/sheet-board-events-source.webp`

```text
Use case: stylized-concept
Asset type: green-screen sprite sheet
Primary request: Sixteen separate board-game icons: camera, dice, dialogue bubble, task checklist, culture card, fate compass, co-creation pen, echo sound wave, city sound, hidden branch, finale book, location pin, route path, reward seal, skip arrow, complete check.
Background: perfectly flat solid #00ff00 chroma-key background.
Composition: 4 by 4 grid, one icon per cell, centered, generous padding, crisp edges, no overlap.
Style: modern guofeng tabletop component icons, thick readable silhouettes, cinnabar red, ink teal, warm gold, grey tile, cream fill. Do not use #00ff00 in icons.
Avoid: no text, no watermark, no shadows, no gradients or texture in the background, no contact shadows.
```

### `sprites/sheet-table-props-source.webp`

```text
Use case: stylized-concept
Asset type: green-screen sprite sheet
Primary request: Twelve separate tabletop board game props: main player pawn, second pawn, six-sided dice, card deck, collection stamp, route marker, gold-like culture token, photo clip, envelope, rolled scroll, map pin, progress bead.
Background: perfectly flat solid #00ff00 chroma-key background.
Composition: 3 by 4 grid, one object per cell, centered, generous padding, crisp full object, no overlap.
Style: polished board game components, modern Chinese city notebook palette, cinnabar, ink teal, warm gold, grey tile, cream paper. Do not use #00ff00 in objects.
Avoid: no readable text, no cast shadow, no reflection, no floor plane, no watermark.
```

### `sprites/sheet-ui-decor-source.webp`

```text
Use case: stylized-concept
Asset type: green-screen sprite sheet
Primary request: Sixteen small UI decoration components: blank tag frame, task check mark, earned stamp, locked silhouette, corner ribbon, divider plaque, progress node, echo bubble, storybook page corner, card highlight, route knot, tiny seal, blank label tab, photo corner, dialogue pointer, small folded note.
Background: perfectly flat solid #00ff00 chroma-key background.
Composition: 4 by 4 grid, one component per cell, centered, generous padding, crisp edges.
Style: modern guofeng board game UI ornaments, refined and light, cinnabar, ink teal, warm gold, grey, cream. Do not use #00ff00 in components.
Avoid: no readable text, no shadows, no textured green background, no watermark.
```

## 绿幕抠图建议命令

生成绿幕源图后，先复制到对应 `sprites/` 目录，再运行：

```bash
python "${CODEX_HOME:-$HOME/.codex}/skills/.system/imagegen/scripts/remove_chroma_key.py" \
  --input time-chess-react/public/assets/beijing/sprites/sheet-board-events-source.webp \
  --out time-chess-react/public/assets/beijing/sprites/sheet-board-events.png \
  --auto-key border \
  --soft-matte \
  --transparent-threshold 12 \
  --opaque-threshold 220 \
  --despill
```

若边缘有绿色残边，追加 `--edge-contract 1` 重跑一次。切分后的单个 PNG 继续放在同一目录，以 `icon-camera.png`、`prop-dice.png`、`decor-stamp.png` 等语义文件名保存。

