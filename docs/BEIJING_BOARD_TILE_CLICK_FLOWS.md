# 北京《中轴入局》棋盘按钮点击流程与 PNG 场景图清单

版本：V0.1 / 技术接入用配置草案  
范围：基于当前首页棋盘，从“起局 / 前门入城”开始，按顺时针为每个按钮设计一个简单小玩法或小任务。  
原则：41 张卡牌已在仓库中，本文件只补充每个棋盘按钮点击后的玩法流程、奖励逻辑和建议 PNG 场景图。

## 1. 接入建议

每个棋盘按钮点击后打开一个轻量 `SceneModal` 或独立场景页。场景结构统一：

```text
按钮标题
-> 场景 PNG 背景
-> 1 句剧情说明
-> 1 个主任务 + 1 个兜底按钮
-> 完成反馈
-> 解锁/预览 1-3 张卡
-> 返回棋盘
```

建议图片目录：

```text
time-chess-react/public/assets/beijing/tile-scenes/
```

建议数据字段：

```ts
{
  id: string
  label: string
  kind: 'start' | 'echo' | 'fate' | 'dice' | 'create' | 'sound' | 'photo' | 'landmark' | 'branch' | 'finale'
  sceneImage: string
  taskTitle: string
  taskGoal: string
  primaryAction: string
  fallbackAction: string
  successText: string
  rewardCardIds: string[]
}
```

## 2. 顺时针按钮流程总表

| 顺序 | 棋盘按钮 | 小玩法 / 小任务 | 建议 PNG |
| ---: | --- | --- | --- |
| 01 | 起局 / 前门入城 | 领取入城身份，选择本局观察视角 | `tile-01-start-qianmen-entry.png` |
| 02 | 回声格 | 写下第一句给北京的开局回声 | `tile-02-echo-first-line.png` |
| 03 | 命运格 | 翻一张命运牌，决定本轮顺风/绕路/加速 | `tile-03-fate-first-turn.png` |
| 04 | 时空骰 | 掷骰抽事件：时辰、风物、来信、市声、转折、回声 | `tile-04-dice-first-event.png` |
| 05 | 共创格 | 选择 3 个元素生成一枚“城市印章” | `tile-05-cocreate-city-seal.png` |
| 06 | 市声任务 | 录 10 秒街声或手选听见的声音 | `tile-06-sound-street.png` |
| 07 | 旧城回声 | 读取一段旧城短笺，选择回应语气 | `tile-07-old-city-echo.png` |
| 08 | 时空骰 | 第二次掷骰，改变下一处景点的剧场氛围 | `tile-08-dice-mood-shift.png` |
| 09 | 拍照任务 | 拍“从旧城走向中轴”的过渡构图 | `tile-09-photo-transition.png` |
| 10 | 登高观城 | 选择近景/中景/远景，拼成城市三层画面 | `tile-10-landmark-jingshan.png` |
| 11 | 回声格 | 给刚刚看到的城市层次写一句注释 | `tile-11-echo-overlook-note.png` |
| 12 | 时空游记 | 中段小结，生成本局临时路线札记 | `tile-12-travelogue-midpoint.png` |
| 13 | 命运格 | 抽现实约束：天气、体力、拥挤、安全 | `tile-13-fate-reality-check.png` |
| 14 | 共创格 | 用已获卡牌合成一张“本局路线贴纸” | `tile-14-cocreate-route-sticker.png` |
| 15 | 隐藏支线 | 发现一封没走到的来信，选择是否收下 | `tile-15-hidden-missed-letter.png` |
| 16 | 宫城水影 | 拍/选屋檐、水面、倒影，进入画师剧场 | `tile-16-landmark-corner-tower.png` |
| 17 | 回声卡 | 翻开回声事件卡，把一句话存入终局 | `tile-17-echo-card-unlock.png` |
| 18 | 命运格 | 遇到转折，选择继续、回溯或安全路线 | `tile-18-fate-route-choice.png` |
| 19 | 市声任务 | 听见钟声/车铃/脚步，生成声音线索 | `tile-19-sound-bell-footsteps.png` |
| 20 | 时空骰 | 最后一次事件骰，决定终局游记的语气 | `tile-20-dice-finale-tone.png` |
| 21 | 中轴取景 | 拍一张对称构图或选择中轴线索 | `tile-21-landmark-axis-view.png` |
| 22 | 拍照任务 | 拍城门/招牌/人流，生成观察卡 | `tile-22-photo-gate-market.png` |
| 23 | 城门开市 | 遇见清末掌柜，完成城门三问并领奖励 | `tile-23-landmark-gate-market.png` |

## 3. 每个按钮的详细流程

### 01. 起局 / 前门入城

- `id`: `start-qianmen-entry`
- 类型：起局格
- 场景图：`tile-01-start-qianmen-entry.png`
- 玩法任务：领取入城身份。
- 剧情说明：城门还没打开，玩家先决定这一局用什么眼光进入北京。
- 玩家操作：
  1. 从“建筑观察者 / 街声收集者 / 故事追问者”中选一个身份。
  2. 系统把该身份作为后续任务语气。
- 兜底按钮：随机给我一个身份。
- 完成反馈：棋子获得入城印章，第一格点亮。
- 推荐奖励：`gate`、`hint`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for board tile click
Primary request: Qianmen entry starting tile scene for a Beijing central-axis cultural board game.
Scene/backdrop: old city gate threshold, unopened route map, pawn token, three blank identity seals, warm paper-theater light.
Subject: the moment before entering the city, with a blank central choice panel.
Style: ancient-theater collectible card style, modern guofeng, hand-painted scroll texture, refined tabletop game UI.
Composition: 16:9, gate in background, three seal choices in foreground, right side blank for UI text.
Avoid: no readable long text, no logos, no tourist poster realism.
```

### 02. 回声格

- `id`: `echo-first-line`
- 类型：回声格
- 场景图：`tile-02-echo-first-line.png`
- 玩法任务：写下第一句给北京的开局回声。
- 剧情说明：还没有真正进城，城市先向玩家要一句话。
- 玩家操作：
  1. 输入 10-30 字短句。
  2. 或选择模板：“我想听见一座城的旧声音。”
- 兜底按钮：使用默认回声。
- 完成反馈：短句存入终局游记。
- 推荐奖励：`echo-event`，终局追加 `echo`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for echo tile
Primary request: A blank echo note scene for a Beijing cultural board game.
Scene/backdrop: folded letter paper, faint city gate silhouette, ink sound-wave lines, small route pawn.
Subject: empty note card waiting for the player's first line.
Style: ancient theater card UI, rice paper, cinnabar seal, ink teal linework.
Composition: 16:9, large blank note center, decorative card and map fragments around edges.
Avoid: no readable text, no watermark, no modern messaging app style.
```

### 03. 命运格

- `id`: `fate-first-turn`
- 类型：命运格
- 场景图：`tile-03-fate-first-turn.png`
- 玩法任务：翻一张命运牌。
- 剧情说明：刚入局时，路线会给玩家一个小变化。
- 玩家操作：
  1. 点击翻开命运牌。
  2. 随机结果：顺风、绕路、加速、停留。
- 兜底按钮：使用安全路线。
- 完成反馈：获得一个临时状态。
- 推荐奖励：`time-boost`、`safety`、`stamina-supply` 随机预览。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for fate tile
Primary request: A fate card flip scene for a Beijing route board game.
Scene/backdrop: tabletop map, compass, four face-down fate cards, route marker at a fork.
Subject: one card being turned over, subtle cinnabar glow.
Style: premium ancient-theater card style, modern guofeng board game component art.
Composition: 16:9, card fan center, blank result panel on right.
Avoid: no poker-card look, no casino style, no readable text.
```

### 04. 时空骰

- `id`: `dice-first-event`
- 类型：时空骰
- 场景图：`tile-04-dice-first-event.png`
- 玩法任务：掷骰抽事件。
- 剧情说明：骰子不决定去哪，只决定这一格用什么语气发生。
- 玩家操作：
  1. 点击掷骰。
  2. 六面结果：时辰、风物、来信、市声、转折、回声。
- 兜底按钮：直接抽一张事件卡。
- 完成反馈：当前事件绑定到下一次景点剧场。
- 推荐奖励：`time-event`、`object-event`、`letter-event`、`sound-event`、`turn-event`、`echo-event`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for time dice tile
Primary request: A time-space dice roll scene for a Beijing central-axis board game.
Scene/backdrop: old map board, six-sided dice with symbolic faces, event cards around it, route token.
Subject: dice rolling across paper map, six event icons represented without text.
Style: modern guofeng, ancient collectible card surface, polished tabletop game UI.
Composition: 16:9, dice center, six event-card slots in arc, blank area for result text.
Avoid: no numbers-only casino dice, no readable long text, no fantasy magic explosion.
```

### 05. 共创格

- `id`: `cocreate-city-seal`
- 类型：共创格
- 场景图：`tile-05-cocreate-city-seal.png`
- 玩法任务：选择 3 个元素生成城市印章。
- 剧情说明：玩家把这一局看到的东西盖成一枚自己的路线章。
- 玩家操作：
  1. 从“城门、招牌、轴线、水面、钟声、胡同”中选 3 个。
  2. 系统生成一枚组合印章。
- 兜底按钮：使用当前地点自动组合。
- 完成反馈：印章进入终局明信片。
- 推荐奖励：`photographer-eye`、`axis-scroll`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for co-creation tile
Primary request: A city seal co-creation scene for a Beijing cultural board game.
Scene/backdrop: blank seal stone, ink pad, small icon tiles for gate, signboard, axis, water, bell, hutong.
Subject: player assembling a personalized route seal, no hands required.
Style: ancient theater card UI, modern guofeng notebook, premium board game props.
Composition: 16:9, seal-making table center, six blank element tiles around it, lower area for confirm button.
Avoid: no readable text, no real official seal, no logo.
```

### 06. 市声任务

- `id`: `sound-street`
- 类型：市声任务
- 场景图：`tile-06-sound-street.png`
- 玩法任务：录 10 秒街声或手选听见的声音。
- 剧情说明：北京不只在画面里，也在脚步、人声和风里。
- 玩家操作：
  1. 点击录音按钮，模拟录 10 秒。
  2. 或选择声音标签：人声、车铃、脚步、风声。
- 兜底按钮：我现在不方便录音。
- 完成反馈：生成声音线索。
- 推荐奖励：`sound-event`、`bell`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for sound task tile
Primary request: A city sound recording task scene for a Beijing board game.
Scene/backdrop: old street corner, sound waves as ink ribbons, small microphone token, paper task card.
Subject: audio collection interface as tabletop card, with blank waveform area.
Style: ancient-theater card style, modern guofeng, warm city notebook texture.
Composition: 16:9, waveform ribbon across center, task card lower right.
Avoid: no modern app screenshot, no brand logos, no readable text.
```

### 07. 旧城回声

- `id`: `old-city-echo`
- 类型：旧城回声格
- 场景图：`tile-07-old-city-echo.png`
- 玩法任务：读取一段旧城短笺并选择回应语气。
- 剧情说明：旧城给玩家递来一段没有署名的声音。
- 玩家操作：
  1. 翻开短笺。
  2. 选择回应语气：好奇、怀念、追问。
- 兜底按钮：让 AI 替我回应。
- 完成反馈：生成一句角色旁白。
- 推荐奖励：`echo-event`、`missed-letter`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for old city echo tile
Primary request: An old city echo letter scene for a Beijing cultural board game.
Scene/backdrop: aged paper letter, hutong shadow, faint gate and lake fragments, sound-wave seal.
Subject: unopened city note with three blank response choices.
Style: old archive, ancient theater card, modern guofeng, warm paper and ink teal.
Composition: 16:9, letter center, response-card slots at bottom.
Avoid: no readable written paragraphs, no horror mood, no modern email UI.
```

### 08. 时空骰

- `id`: `dice-mood-shift`
- 类型：时空骰
- 场景图：`tile-08-dice-mood-shift.png`
- 玩法任务：第二次掷骰，改变下一处景点氛围。
- 剧情说明：同一地点在晨、午、暮、夜会说不同的话。
- 玩家操作：
  1. 掷骰。
  2. 得到氛围：晨光、正午、暮色、夜声、雨痕、风起。
- 兜底按钮：使用当前时间。
- 完成反馈：下一场景背景文案换一种语气。
- 推荐奖励：`time-event`、`weather-backup`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for mood dice tile
Primary request: A time mood dice scene showing morning, noon, dusk, night, rain, and wind as six card moods.
Scene/backdrop: Beijing route map split into subtle time-of-day color panels.
Subject: dice and six mood cards, blank result plaque.
Style: modern guofeng board game, ancient card texture, refined scroll illustration.
Composition: 16:9, six small mood panels around a central dice.
Avoid: no readable labels, no neon colors, no fantasy storm.
```

### 09. 拍照任务

- `id`: `photo-transition`
- 类型：拍照任务
- 场景图：`tile-09-photo-transition.png`
- 玩法任务：拍“从旧城走向中轴”的过渡构图。
- 剧情说明：拍一张能看出方向变化的照片。
- 玩家操作：
  1. 上传照片或选择“路口、门洞、远处建筑、行人方向”。
  2. 系统生成观察线索。
- 兜底按钮：手动选择现场元素。
- 完成反馈：生成一张观察卡预览。
- 推荐奖励：`photographer-eye`、`symmetry`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for photo task tile
Primary request: A photo composition task scene about moving from old city streets toward the central axis.
Scene/backdrop: alley opening toward a distant axis line, photo frame, route arrow, camera token.
Subject: blank upload frame with example composition silhouettes.
Style: ancient theater card UI, modern guofeng city notebook, paper map texture.
Composition: 16:9, upload frame left, example composition cards right.
Avoid: no real camera app interface, no readable text, no modern ad signs.
```

### 10. 登高观城

- `id`: `landmark-jingshan`
- 类型：景点格
- 场景图：`tile-10-landmark-jingshan.png`
- 玩法任务：拼出城市三层画面。
- 剧情说明：站高一点，城市就变成一张长卷。
- 玩家操作：
  1. 从近景、中景、远景各选一个元素。
  2. 系统拼成“城市三层”小结。
- 兜底按钮：想象登高。
- 完成反馈：路线回看解锁。
- 推荐奖励：`overlook`、`city-historian`、`axis-scroll`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for Jingshan landmark tile
Primary request: Jingshan overlook task scene for a Beijing central-axis board game.
Scene/backdrop: hilltop view, layered roofs, trees, distant central axis, route scroll.
Subject: three selectable layers: foreground, middle city, far sky, represented as blank cards.
Style: modern guofeng, ancient collectible card, hand-painted scroll.
Composition: 16:9, overlook view center, three layer cards along bottom.
Avoid: no photoreal skyline, no dense modern city clutter, no readable text.
```

### 11. 回声格

- `id`: `echo-overlook-note`
- 类型：回声格
- 场景图：`tile-11-echo-overlook-note.png`
- 玩法任务：给城市层次写一句注释。
- 剧情说明：高处看到的不是答案，而是更多可被记住的层次。
- 玩家操作：
  1. 在“秩序 / 缝隙 / 人的脚步”中选一个词。
  2. 写一句或使用模板。
- 兜底按钮：生成一句默认注释。
- 完成反馈：注释进入终局游记中段。
- 推荐奖励：`echo`、`axis-scroll`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for overlook echo tile
Primary request: A high-place city echo note scene after overlooking Beijing.
Scene/backdrop: route scroll over a soft city panorama, blank annotation note, small seal.
Subject: player leaving a short note about city layers.
Style: ancient theater card UI, rice paper, ink teal map line, muted gold.
Composition: 16:9, panorama top, blank note center, collected-card slots at edge.
Avoid: no readable text, no photoreal skyline, no social media UI.
```

### 12. 时空游记

- `id`: `travelogue-midpoint`
- 类型：时空游记
- 场景图：`tile-12-travelogue-midpoint.png`
- 玩法任务：生成本局临时路线札记。
- 剧情说明：走到中段，系统把已完成格子整理成一页游记草稿。
- 玩家操作：
  1. 点击生成游记。
  2. 选择标题方向：城门、轴线、水影、旧城。
- 兜底按钮：自动生成。
- 完成反馈：终局游记标题候选出现。
- 推荐奖励：`axis-scroll`、`time-traveler`。
- Image2 prompt：

```text
Use case: ui-mockup
Asset type: PNG scene background for midpoint travelogue tile
Primary request: A midpoint travelogue draft page for a Beijing route board game.
Scene/backdrop: open notebook, small route timeline, collected card corners, map fragments.
Subject: blank story draft page with title-choice cards.
Style: modern Chinese city notebook, ancient card archive, tabletop game UI.
Composition: 16:9, open notebook center, route timeline left, title cards right.
Avoid: no readable paragraph text, no tourist brochure layout, no logos.
```

### 13. 命运格

- `id`: `fate-reality-check`
- 类型：命运格
- 场景图：`tile-13-fate-reality-check.png`
- 玩法任务：抽现实约束。
- 剧情说明：真实城市里，天气、体力、拥挤和安全也是棋局的一部分。
- 玩家操作：
  1. 翻开现实命运牌。
  2. 结果：天气、体力、人流、安全、时间。
- 兜底按钮：启用安全卡。
- 完成反馈：任务自动变成可完成版本。
- 推荐奖励：`weather-backup`、`stamina-supply`、`safety`、`time-boost`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for reality fate tile
Primary request: A reality-check fate card scene for a real-world Beijing travel game.
Scene/backdrop: route map with small weather cloud, crowd marker, water bottle, safety seal, clock token.
Subject: four practical constraint cards face-down on a tabletop.
Style: modern guofeng, premium board game UI, old archive paper texture.
Composition: 16:9, practical constraint cards center, blank effect panel right.
Avoid: no alarmist warning design, no readable text, no hospital or danger imagery.
```

### 14. 共创格

- `id`: `cocreate-route-sticker`
- 类型：共创格
- 场景图：`tile-14-cocreate-route-sticker.png`
- 玩法任务：合成本局路线贴纸。
- 剧情说明：把已获得的卡牌变成一个可贴在游记上的小图章。
- 玩家操作：
  1. 选择最多 3 张已获得卡。
  2. 生成路线贴纸预览。
- 兜底按钮：自动选择最近三张。
- 完成反馈：贴纸进入终局明信片。
- 推荐奖励：`photographer-eye`、`axis-scroll`。
- Image2 prompt：

```text
Use case: ui-mockup
Asset type: PNG scene background for route sticker co-creation tile
Primary request: A route sticker crafting scene using collected cards from a Beijing board game.
Scene/backdrop: tabletop scrapbook, blank sticker sheet, three card slots, small scissors and seal props.
Subject: combining cards into one route sticker, with blank preview area.
Style: ancient theater card meets modern city notebook, warm paper, cinnabar, ink teal.
Composition: 16:9, card slots left, sticker preview center, confirm area bottom.
Avoid: no childish sticker style, no readable text, no brand marks.
```

### 15. 隐藏支线

- `id`: `hidden-missed-letter`
- 类型：隐藏支线
- 场景图：`tile-15-hidden-missed-letter.png`
- 玩法任务：发现一封没走到的来信。
- 剧情说明：没走到的地方，也可以用一封信进入故事。
- 玩家操作：
  1. 翻开隐藏信封。
  2. 选择“收下 / 稍后再读 / 换成安全路线”。
- 兜底按钮：收下错过的来信。
- 完成反馈：解锁错过也能成局的分支。
- 推荐奖励：`missed-letter`、`shadow`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for hidden branch tile
Primary request: A hidden branch missed-letter scene for a Beijing cultural board game.
Scene/backdrop: side alley on old map, sealed envelope, faint unvisited route, shadow card silhouette.
Subject: a hidden letter waiting at the edge of the board.
Style: old archive, ancient theater card, modern guofeng, quiet mysterious tone.
Composition: 16:9, envelope center-left, dim route line to the right, blank choice cards bottom.
Avoid: no horror, no readable letter text, no spy-thriller style.
```

### 16. 宫城水影

- `id`: `landmark-corner-tower`
- 类型：景点格
- 场景图：`tile-16-landmark-corner-tower.png`
- 玩法任务：拍/选屋檐、水面、倒影，进入画师剧场。
- 剧情说明：水替宫城收住倒影，屋檐替它收住天空。
- 玩家操作：
  1. 上传照片或选择元素：屋檐、水面、倒影、树影。
  2. 选择一个问题问宫廷画师。
- 兜底按钮：现场不便拍照，使用手选元素。
- 完成反馈：生成画师短独白。
- 推荐奖励：`palace`、`palace-painter`、`water-ripple`、`photographer-eye`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for corner tower landmark tile
Primary request: Forbidden City corner tower reflection task scene for a Beijing board game.
Scene/backdrop: corner tower, moat reflection, eaves, water ripple, painter's folded sketch.
Subject: photo clue area and painter theater card integrated into the scene.
Style: ancient-theater collectible card style, modern guofeng, hand-painted scroll, refined board game UI.
Composition: 16:9, tower upper left, water lower half, dialogue/card area right.
Avoid: no tourist crowd, no readable plaques, no photoreal postcard.
```

### 17. 回声卡

- `id`: `echo-card-unlock`
- 类型：回声卡格
- 场景图：`tile-17-echo-card-unlock.png`
- 玩法任务：翻开回声事件卡。
- 剧情说明：城市把玩家刚才的观察，折成一张可带走的回声卡。
- 玩家操作：
  1. 点击翻牌。
  2. 输入或选择一句回声。
- 兜底按钮：使用上一句留言。
- 完成反馈：回声卡进入终局牌阵。
- 推荐奖励：`echo-event`、`echo`。
- Image2 prompt：

```text
Use case: ui-mockup
Asset type: PNG scene background for echo card unlock tile
Primary request: An echo card unlock scene for a Beijing cultural board game.
Scene/backdrop: dimmed board table, sound-wave ribbon, folded note, card glow.
Subject: one echo card flipping open, blank memory line beneath it.
Style: premium ancient-theater card UI, modern guofeng, warm paper, subtle cinnabar light.
Composition: 16:9, card center, note field bottom, collected-card rail faintly visible.
Avoid: no casino reward style, no excessive sparkles, no readable text.
```

### 18. 命运格

- `id`: `fate-route-choice`
- 类型：命运格
- 场景图：`tile-18-fate-route-choice.png`
- 玩法任务：遇到路线转折。
- 剧情说明：这一格不奖励玩家走得多，而奖励玩家会选择。
- 玩家操作：
  1. 三选一：继续前进、回溯重选、安全路线。
  2. 根据选择获得不同功能卡。
- 兜底按钮：安全路线。
- 完成反馈：路线状态更新。
- 推荐奖励：`rewind`、`safety`、`time-boost`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for route choice fate tile
Primary request: A route choice fate scene with continue, rewind, and safe-route options.
Scene/backdrop: Beijing map fork, pawn at a crossroads, rewind ribbon, safety seal, fast route marker.
Subject: three blank choice cards on a tabletop route map.
Style: modern guofeng board game art, ancient card texture, refined UI background.
Composition: 16:9, route fork center, three option cards along bottom.
Avoid: no traffic navigation app look, no readable labels, no warning-sign clutter.
```

### 19. 市声任务

- `id`: `sound-bell-footsteps`
- 类型：市声任务
- 场景图：`tile-19-sound-bell-footsteps.png`
- 玩法任务：听见钟声/车铃/脚步，生成声音线索。
- 剧情说明：声音能把玩家从景点带回真正的生活。
- 玩家操作：
  1. 选择听见的声音。
  2. 或模拟录音。
- 兜底按钮：选择“我听见了脚步声”。
- 完成反馈：生成声音线索卡。
- 推荐奖励：`bell`、`sound-event`、`old-city-evening`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for bell and footsteps sound tile
Primary request: A Beijing old-city sound clue scene with bell, bicycle, footsteps, and wind.
Scene/backdrop: drum tower shadow, hutong lane, bicycle bell, footsteps shown as ink marks.
Subject: selectable sound tokens around a blank waveform card.
Style: ancient theater card UI, modern guofeng, warm dusk, archive paper texture.
Composition: 16:9, waveform card center, sound tokens in a semicircle.
Avoid: no neon nightlife, no readable signs, no modern audio software UI.
```

### 20. 时空骰

- `id`: `dice-finale-tone`
- 类型：时空骰
- 场景图：`tile-20-dice-finale-tone.png`
- 玩法任务：最后一次事件骰，决定终局游记语气。
- 剧情说明：最后的骰子不改变路线，只决定故事如何落款。
- 玩家操作：
  1. 掷骰。
  2. 结果：温柔、追问、热闹、安静、转折、回声。
- 兜底按钮：使用回声语气。
- 完成反馈：终局文案语气被记录。
- 推荐奖励：`echo`、`time-traveler`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for finale tone dice tile
Primary request: A final tone dice scene deciding the mood of a Beijing travelogue.
Scene/backdrop: open storybook, route map, dice, six tone cards, collected cards around edges.
Subject: dice landing near a blank finale title plaque.
Style: ancient-theater card, modern Chinese city notebook, premium tabletop game UI.
Composition: 16:9, storybook center, tone cards arc around dice, right side blank for result.
Avoid: no readable paragraphs, no fantasy magic, no casino dice style.
```

### 21. 中轴取景

- `id`: `landmark-axis-view`
- 类型：景点格
- 场景图：`tile-21-landmark-axis-view.png`
- 玩法任务：拍一张对称构图或选择中轴线索。
- 剧情说明：把线拍直并不难，难的是看见线如何安排城市。
- 玩家操作：
  1. 上传对称照片或选择：道路中线、左右平衡、远处城楼、开阔天空。
  2. 进入营城匠师问答。
- 兜底按钮：选择最明显的中轴元素。
- 完成反馈：生成中轴观察结论。
- 推荐奖励：`axis`、`city-craftsman`、`symmetry`、`axis-scroll`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for central-axis landmark tile
Primary request: Beijing central-axis photo composition task scene.
Scene/backdrop: broad axis perspective, symmetrical paving, distant gate silhouette, compass and ruler motifs.
Subject: central line, photo frame, four selectable visual clue cards.
Style: modern guofeng, ancient theater collectible card, hand-painted map-scroll texture.
Composition: 16:9, strong central vanishing line, blank task area on right.
Avoid: no political slogans, no readable signs, no photoreal news image.
```

### 22. 拍照任务

- `id`: `photo-gate-market`
- 类型：拍照任务
- 场景图：`tile-22-photo-gate-market.png`
- 玩法任务：拍城门/招牌/人流，生成观察卡。
- 剧情说明：前门的热闹不是背景，而是城市交换消息的方式。
- 玩家操作：
  1. 上传照片或选择元素：城门、招牌、人流、老字号、铺面。
  2. 系统模拟识别并生成线索。
- 兜底按钮：不拍照，手动选择元素。
- 完成反馈：获得观察线索。
- 推荐奖励：`human-life`、`photographer-eye`、`trade`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for gate market photo task
Primary request: Qianmen market photo check-in scene for a Beijing cultural board game.
Scene/backdrop: city gate and old street market hints, blank camera frame, shopfront silhouettes without readable text.
Subject: photo upload panel, element tags for gate, signboard, crowd, storefront.
Style: ancient theater card UI, modern guofeng, warm paper, cinnabar and ink teal.
Composition: 16:9, camera frame center-left, clue-card preview right.
Avoid: no real shop logos, no readable signs, no camera app screenshot.
```

### 23. 城门开市

- `id`: `landmark-gate-market`
- 类型：景点格
- 场景图：`tile-23-landmark-gate-market.png`
- 玩法任务：遇见清末掌柜，完成城门三问。
- 剧情说明：城门看的是规矩，街面看的是日子。
- 玩家操作：
  1. 从三个问题中选择一个问掌柜。
  2. 选择一个现场证据：门楼、招牌、铺面、人群。
  3. 掌柜给出一句回应。
- 兜底按钮：让掌柜直接讲一段。
- 完成反馈：获得前门牌组奖励，推进下一格。
- 推荐奖励：`trade`、`qing-merchant`、`gate-questions`、`human-life`，条件满足追加 `gate`。
- Image2 prompt：

```text
Use case: stylized-concept
Asset type: PNG scene background for gate market landmark tile
Primary request: Qianmen gate market NPC theater scene with a Qing-era shopkeeper for a Beijing board game.
Scene/backdrop: Zhengyangmen outside, market street props, ledger, signboard silhouettes, tabletop event card frame.
Subject: shopkeeper role-card area, blank dialogue scroll, evidence cards for gate, signboard, storefront, crowd.
Style: ancient-theater collectible card style, modern guofeng, old city archive, premium board game scene.
Composition: 16:9, gate and street in background, character-card left, dialogue area center, evidence cards right.
Avoid: no readable brand names, no heavy costume drama, no photoreal tourist poster.
```

## 4. 可直接给技术同学的精简配置草案

```json
[
  {
    "id": "start-qianmen-entry",
    "label": "前门入城",
    "kind": "start",
    "sceneImage": "/assets/beijing/tile-scenes/tile-01-start-qianmen-entry.png",
    "taskTitle": "领取入城身份",
    "taskGoal": "选择建筑观察者、街声收集者或故事追问者，决定本局语气。",
    "primaryAction": "选择身份",
    "fallbackAction": "随机身份",
    "successText": "入城印章已点亮。",
    "rewardCardIds": ["gate", "hint"]
  },
  {
    "id": "echo-first-line",
    "label": "回声格",
    "kind": "echo",
    "sceneImage": "/assets/beijing/tile-scenes/tile-02-echo-first-line.png",
    "taskTitle": "写下第一句回声",
    "taskGoal": "输入一句 10-30 字的开局留言。",
    "primaryAction": "写一句话",
    "fallbackAction": "使用默认回声",
    "successText": "这句话会进入终局游记。",
    "rewardCardIds": ["echo-event"]
  },
  {
    "id": "fate-first-turn",
    "label": "命运格",
    "kind": "fate",
    "sceneImage": "/assets/beijing/tile-scenes/tile-03-fate-first-turn.png",
    "taskTitle": "翻开命运牌",
    "taskGoal": "随机得到顺风、绕路、加速或停留。",
    "primaryAction": "翻牌",
    "fallbackAction": "安全路线",
    "successText": "本轮状态已生效。",
    "rewardCardIds": ["time-boost", "safety", "stamina-supply"]
  },
  {
    "id": "dice-first-event",
    "label": "时空骰",
    "kind": "dice",
    "sceneImage": "/assets/beijing/tile-scenes/tile-04-dice-first-event.png",
    "taskTitle": "掷骰抽事件",
    "taskGoal": "从六类事件中抽取一个，绑定到下一次剧场。",
    "primaryAction": "掷骰",
    "fallbackAction": "抽事件卡",
    "successText": "事件已绑定。",
    "rewardCardIds": ["time-event", "object-event", "letter-event", "sound-event", "turn-event", "echo-event"]
  },
  {
    "id": "cocreate-city-seal",
    "label": "共创格",
    "kind": "create",
    "sceneImage": "/assets/beijing/tile-scenes/tile-05-cocreate-city-seal.png",
    "taskTitle": "生成城市印章",
    "taskGoal": "选择 3 个城市元素生成本局印章。",
    "primaryAction": "选择元素",
    "fallbackAction": "自动组合",
    "successText": "城市印章已加入终局明信片。",
    "rewardCardIds": ["photographer-eye", "axis-scroll"]
  }
]
```

上面 JSON 只放了前 5 个示例。技术接入时可按第 3 节继续扩展完整 23 个对象。

## 5. 还可以追加的玩法想法

### 5.1 卡牌连携

玩家如果同时拥有某些卡，可以触发额外文案：

- `axis` + `symmetry`：中轴构图加成，终局标题更偏“秩序”。
- `palace` + `water-ripple`：宫城水影加成，生成画师旁白。
- `life` + `bell`：旧城声音加成，生成胡同夜声段落。
- `trade` + `human-life`：市井烟火加成，前门段落更热闹。
- `echo` + `missed-letter`：错过也成局，终局承认未完成路线。

### 5.2 现实友好兜底

每个任务都应有“我现在不方便”的按钮：

- 不方便拍照：改成手选元素。
- 不方便录音：改成选择声音标签。
- 现场拥挤：启用安全卡。
- 时间不够：启用时光加成卡。
- 天气不好：启用天气兜底卡。

### 5.3 终局牌阵

终局不只列出卡牌，而是按 5 个栏目展示：

1. 我从哪里入城：城门 / 商贸。
2. 我怎样看见秩序：中轴 / 对称。
3. 我遇见谁：角色卡。
4. 我听见什么：市声 / 钟声 / 回声。
5. 我留下什么：玩家留言 / 明信片。

### 5.4 技术最小实现

不需要真实 AI 也可以先跑通：

1. 点击按钮打开对应 modal。
2. 显示 PNG 背景和任务文案。
3. 玩家点击“完成任务”。
4. 弹出奖励卡。
5. 将奖励 cardId 加入 collectedCardIds。
6. 回到棋盘，按钮变为完成态。

