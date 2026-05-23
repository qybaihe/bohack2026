# 北京《中轴入局》24 格交互玩法与 Image2 场景素材设计

版本：V0.2 / 横屏棋盘 24 格同步版  
用途：同步新版棋盘格名称、24 张已生成 PNG 场景图，以及每格点击后的轻量玩法。  
原则：不推翻现有路线和美术方向；沿用已生成配图，只把新格子名称、任务入口、奖励逻辑和 `tile-scenes-24` 素材路径对应清楚。

## 1. 新版棋盘结构

新版首页是“外圈 24 格 + 中心地图 + 右侧当前回合 + 底部卡册”的横屏棋盘版：

- 外圈共有 24 格，其中 5 个地点格、19 个任务格。
- 中心地图仍然承接北京中轴路线：前门入城、城门开市、中轴取景、宫城水影、登高观城、旧城回声。
- 右侧回合面板显示当前格的地点、角色、预计时间和任务触发。
- 底部卡册显示本局可解锁的文化卡、角色卡、事件卡和回声卡。
- 点击任何格子后，进入一张“城市事件牌 / 纸上剧场 / 旧城档案”式二级场景。

统一二级页面结构：

1. 背景使用对应 16:9 PNG 场景图。
2. 左侧或中部展示剧情卡、现场线索和角色。
3. 右侧提供 2-3 个行动按钮。
4. 完成后翻开奖励卡，并把结果写入本局游记。
5. 返回棋盘后，该格加盖完成印章。

## 2. 全局 Image2 风格基准

24 张图已生成，后续若补图或重生图，继续沿用这个基准：

```text
Use case: stylized-concept
Asset type: 16:9 scene background for a Beijing central-axis cultural board game
Primary request: A scene illustration for an AI + cultural travel board game named "此地有回声：北京中轴入局".
Style: premium ancient-theater collectible cards, modern guofeng, hand-painted scroll texture, old city archive, theatrical paper stage, historical map fragments, refined tabletop game component art.
Mood: warm, mysterious, elegant, playable, not heavy museum display.
Palette: rice paper cream, cinnabar red, ink teal, grey roof tile, muted gold, pale blue green, light ink black.
Composition: leave clean blank spaces for HTML UI overlays, buttons, card rewards, and dialogue text. Do not paint long readable text into the image.
Constraints: no real brand logos, no QR codes, no watermarks, no modern tourist advertising poster style, no Monopoly-like branding.
```

## 3. 24 格总表

素材目录：

```text
time-chess-react/public/assets/beijing/tile-scenes-24/
```

| 顺序 | 新格子名称 | 副标题 | 场景图 | 点击后的玩法 |
| ---: | --- | --- | --- | --- |
| 01 | 起局 | 身份 | `tile-01-qianmen-entry-identity.png` | 领取入城身份，确定本局观察视角 |
| 02 | 城门开市 | 掌柜 | `tile-02-gate-market-shopkeeper-theater.png` | 遇见清末掌柜，完成城门三问 |
| 03 | 拍照任务 | 街面 | `tile-03-photo-qianmen-evidence.png` | 拍城门、招牌、人流，生成前门观察证据 |
| 04 | 中轴取景 | 对称 | `tile-04-axis-symmetry-photo.png` | 拍对称构图或选择中轴线索 |
| 05 | 时空骰 | 事件 | `tile-05-dice-first-event-draw.png` | 掷骰抽事件：时辰、风物、来信、市声、转折、回声 |
| 06 | 市声任务 | 街声 | `tile-06-sound-street-collect.png` | 录 10 秒街声或手选听见的声音 |
| 07 | 命运格 | 借过 | `tile-07-fate-route-reality-check.png` | 抽现实约束：天气、体力、拥挤、安全 |
| 08 | 回声卡 | 存句 | `tile-08-echo-card-message.png` | 翻开回声卡，把一句话存入终局 |
| 09 | 宫城水影 | 画师 | `tile-09-corner-tower-reflection-painter.png` | 拍/选屋檐、水面、倒影，进入画师剧场 |
| 10 | 隐藏支线 | 来信 | `tile-10-hidden-missed-letter.png` | 发现一封没走到的来信 |
| 11 | 共创格 | 印章 | `tile-11-cocreate-city-route-seal.png` | 选择城市元素，生成本局路线印章 |
| 12 | 命运格 | 转场 | `tile-12-fate-transfer-choice.png` | 在继续、回溯、安全路线之间选择 |
| 13 | 时空游记 | 终局 | `tile-13-travelogue-draft.png` | 生成中段游记草稿和标题方向 |
| 14 | 回声格 | 记录 | `tile-14-echo-city-layer-note.png` | 给城市层次写一句注释 |
| 15 | 登高观城 | 三层 | `tile-15-jingshan-three-layer-view.png` | 选择近景/中景/远景，拼成三层画面 |
| 16 | 拍照任务 | 构图 | `tile-16-photo-oldcity-axis-transition.png` | 拍“从旧城走向中轴”的过渡构图 |
| 17 | 时空骰 | 来信 | `tile-17-dice-letter-mood-event.png` | 抽一封角色来信，改变下一段剧场语气 |
| 18 | 旧城短笺 | 回应 | `tile-18-old-city-echo-landmark-theater.png` | 读取旧城短笺，选择回应语气 |
| 19 | 旧城回声 | 收束 | `tile-19-old-city-echo-finale-note.png` | 把前半局获得的线索收束成旧城旁白 |
| 20 | 钟鼓定更 | 报时 | `tile-20-sound-bell-footsteps.png` | 听见钟声、车铃、脚步，生成声音线索 |
| 21 | 共创格 | 卡牌 | `tile-21-cocreate-card-route-sticker.png` | 用已获卡牌合成本局路线贴纸 |
| 22 | 时空骰 | 选择 | `tile-22-dice-finale-tone.png` | 掷最后一次骰，决定终局游记语气 |
| 23 | 命运格 | 错过 | `tile-23-fate-missed-rewind-safe-route.png` | 承认错过，选择回溯、补叙或安全完成 |
| 24 | 回声格 | 返场 | `tile-24-echo-return-to-finale-array.png` | 回到终局牌阵，写下最后一句回声 |

## 4. 每格点击玩法

### 01. 起局

- 场景图：`tile-01-qianmen-entry-identity.png`
- 剧情说明：城门还没打开，玩家先决定这一局用什么眼光进入北京。
- 玩家操作：
  1. 从“建筑观察者 / 街声收集者 / 故事追问者”中选一个身份。
  2. 身份影响后续任务文案和推荐行动。
- 兜底按钮：随机给我一个身份。
- 完成反馈：入城印章点亮。
- 推荐奖励：`gate`、`hint`。

### 02. 城门开市

- 场景图：`tile-02-gate-market-shopkeeper-theater.png`
- 剧情说明：城门看的是规矩，街面看的是日子。
- 玩家操作：
  1. 选择一个问题问清末掌柜：城门为何要开合、买卖为何聚在门外、今天的人还怎样进城。
  2. 选择现场证据：门楼、招牌、铺面、人群。
  3. 掌柜给出一句回应。
- 兜底按钮：让掌柜直接讲一段。
- 完成反馈：前门牌组进入奖励预览。
- 推荐奖励：`trade`、`qing-merchant`、`gate-questions`、`human-life`，条件满足追加 `gate`。

### 03. 拍照任务

- 场景图：`tile-03-photo-qianmen-evidence.png`
- 剧情说明：前门的热闹不是背景，而是城市交换消息的方式。
- 玩家操作：
  1. 上传照片或选择元素：城门、招牌、人流、老字号、铺面。
  2. 系统模拟识别“前门证据”。
  3. 生成观察线索卡。
- 兜底按钮：不拍照，手动选择元素。
- 完成反馈：观察卡进入当前回合。
- 推荐奖励：`photographer-eye`、`trade`、`human-life`。

### 04. 中轴取景

- 场景图：`tile-04-axis-symmetry-photo.png`
- 剧情说明：把线拍直并不难，难的是看见线如何安排城市。
- 玩家操作：
  1. 上传对称照片或选择线索：道路中线、左右平衡、远处城楼、开阔天空。
  2. 进入营城匠师问答。
- 兜底按钮：选择最明显的中轴元素。
- 完成反馈：生成中轴观察结论。
- 推荐奖励：`axis`、`city-craftsman`、`symmetry`、`axis-scroll`。

### 05. 时空骰

- 场景图：`tile-05-dice-first-event-draw.png`
- 剧情说明：骰子不决定去哪，只决定这一格用什么语气发生。
- 玩家操作：
  1. 点击掷骰。
  2. 六面结果：时辰、风物、来信、市声、转折、回声。
- 兜底按钮：直接抽一张事件卡。
- 完成反馈：事件绑定到下一次景点或任务。
- 推荐奖励：`time-event`、`object-event`、`letter-event`、`sound-event`、`turn-event`、`echo-event`。

### 06. 市声任务

- 场景图：`tile-06-sound-street-collect.png`
- 剧情说明：北京不只在画面里，也在脚步、人声和风里。
- 玩家操作：
  1. 模拟录 10 秒街声。
  2. 或选择声音标签：人声、车铃、脚步、风声。
- 兜底按钮：我现在不方便录音。
- 完成反馈：生成声音线索。
- 推荐奖励：`sound-event`、`bell`。

### 07. 命运格

- 场景图：`tile-07-fate-route-reality-check.png`
- 剧情说明：真实城市里，天气、体力、拥挤和安全也是棋局的一部分。
- 玩家操作：
  1. 翻开现实命运牌。
  2. 结果：天气、体力、人流、安全、时间。
  3. 根据结果把本格任务改成可完成版本。
- 兜底按钮：启用安全卡。
- 完成反馈：任务条件更新。
- 推荐奖励：`weather-backup`、`stamina-supply`、`safety`、`time-boost`。

### 08. 回声卡

- 场景图：`tile-08-echo-card-message.png`
- 剧情说明：城市把玩家刚才的观察，折成一张可带走的回声卡。
- 玩家操作：
  1. 点击翻牌。
  2. 输入或选择一句回声。
- 兜底按钮：使用上一句留言。
- 完成反馈：回声卡进入终局牌阵。
- 推荐奖励：`echo-event`、`echo`。

### 09. 宫城水影

- 场景图：`tile-09-corner-tower-reflection-painter.png`
- 剧情说明：水替宫城收住倒影，屋檐替它收住天空。
- 玩家操作：
  1. 上传照片或选择元素：屋檐、水面、倒影、树影。
  2. 选择一个问题问宫廷画师。
- 兜底按钮：现场不便拍照，使用手选元素。
- 完成反馈：生成画师短独白。
- 推荐奖励：`palace`、`palace-painter`、`water-ripple`、`photographer-eye`。

### 10. 隐藏支线

- 场景图：`tile-10-hidden-missed-letter.png`
- 剧情说明：没走到的地方，也可以用一封信进入故事。
- 玩家操作：
  1. 翻开隐藏信封。
  2. 选择“收下 / 稍后再读 / 换成安全路线”。
- 兜底按钮：收下错过的来信。
- 完成反馈：解锁错过也能成局的分支。
- 推荐奖励：`missed-letter`、`shadow`。

### 11. 共创格

- 场景图：`tile-11-cocreate-city-route-seal.png`
- 剧情说明：玩家把这一局看到的东西盖成一枚自己的路线章。
- 玩家操作：
  1. 从“城门、招牌、轴线、水面、钟声、胡同”中选 3 个。
  2. 系统生成组合印章。
- 兜底按钮：使用当前地点自动组合。
- 完成反馈：印章进入终局明信片。
- 推荐奖励：`photographer-eye`、`axis-scroll`。

### 12. 命运格

- 场景图：`tile-12-fate-transfer-choice.png`
- 剧情说明：这一格不奖励玩家走得多，而奖励玩家会选择。
- 玩家操作：
  1. 三选一：继续前进、回溯重选、安全路线。
  2. 根据选择获得不同功能卡。
- 兜底按钮：安全路线。
- 完成反馈：路线状态更新。
- 推荐奖励：`rewind`、`safety`、`time-boost`。

### 13. 时空游记

- 场景图：`tile-13-travelogue-draft.png`
- 剧情说明：走到中段，系统把已完成格子整理成一页游记草稿。
- 玩家操作：
  1. 点击生成游记。
  2. 选择标题方向：城门、轴线、水影、旧城。
- 兜底按钮：自动生成。
- 完成反馈：终局游记标题候选出现。
- 推荐奖励：`axis-scroll`、`time-traveler`。

### 14. 回声格

- 场景图：`tile-14-echo-city-layer-note.png`
- 剧情说明：高处看到的不是答案，而是更多可被记住的层次。
- 玩家操作：
  1. 在“秩序 / 缝隙 / 人的脚步”中选一个词。
  2. 写一句注释，或使用模板句。
- 兜底按钮：生成一句默认注释。
- 完成反馈：注释进入终局游记中段。
- 推荐奖励：`echo`、`axis-scroll`。

### 15. 登高观城

- 场景图：`tile-15-jingshan-three-layer-view.png`
- 剧情说明：站高一点，城市就变成一张长卷。
- 玩家操作：
  1. 从近景、中景、远景各选一个元素。
  2. 系统拼成“城市三层”小结。
  3. 可进入观城史官问答。
- 兜底按钮：想象登高。
- 完成反馈：路线回看解锁。
- 推荐奖励：`overlook`、`city-historian`、`axis-scroll`。

### 16. 拍照任务

- 场景图：`tile-16-photo-oldcity-axis-transition.png`
- 剧情说明：拍一张能看出方向变化的照片。
- 玩家操作：
  1. 上传照片或选择“路口、门洞、远处建筑、行人方向”。
  2. 系统生成观察线索。
- 兜底按钮：手动选择现场元素。
- 完成反馈：生成一张观察卡预览。
- 推荐奖励：`photographer-eye`、`symmetry`。

### 17. 时空骰

- 场景图：`tile-17-dice-letter-mood-event.png`
- 剧情说明：一封来信会改变下一段剧场的提问方式。
- 玩家操作：
  1. 掷骰或抽来信。
  2. 得到语气：追问、提醒、邀请、告别、转折、回声。
- 兜底按钮：使用当前角色默认来信。
- 完成反馈：下一格角色台词更新。
- 推荐奖励：`letter-event`、`time-event`、`echo-event`。

### 18. 旧城短笺

- 场景图：`tile-18-old-city-echo-landmark-theater.png`
- 剧情说明：旧城给玩家递来一段没有署名的声音。
- 玩家操作：
  1. 翻开短笺。
  2. 选择回应语气：好奇、怀念、追问。
- 兜底按钮：让 AI 替我回应。
- 完成反馈：生成一句角色旁白。
- 推荐奖励：`echo-event`、`missed-letter`。

### 19. 旧城回声

- 场景图：`tile-19-old-city-echo-finale-note.png`
- 剧情说明：走到这里，旧城把前面的线索轻轻收束。
- 玩家操作：
  1. 查看已获得的 3-5 张关键卡。
  2. 选择一个收束词：日常、秩序、声音、错过。
  3. 系统生成一段旧城旁白。
- 兜底按钮：自动收束。
- 完成反馈：旁白写入终局故事页。
- 推荐奖励：`life`、`echo`、`old-city-evening`。

### 20. 钟鼓定更

- 场景图：`tile-20-sound-bell-footsteps.png`
- 剧情说明：旧城的时间不是钟表，是一阵传下来的声音。
- 玩家操作：
  1. 选择听见的声音：钟声、车铃、脚步、人声、风声。
  2. 或模拟录音。
  3. 遇见更夫，获得一句报时旁白。
- 兜底按钮：选择“我听见了脚步声”。
- 完成反馈：生成声音线索卡。
- 推荐奖励：`bell`、`sound-event`、`old-city-evening`。

### 21. 共创格

- 场景图：`tile-21-cocreate-card-route-sticker.png`
- 剧情说明：把已获得的卡牌变成一个可贴在游记上的小图章。
- 玩家操作：
  1. 选择最多 3 张已获得卡。
  2. 生成路线贴纸预览。
- 兜底按钮：自动选择最近三张。
- 完成反馈：贴纸进入终局明信片。
- 推荐奖励：`photographer-eye`、`axis-scroll`。

### 22. 时空骰

- 场景图：`tile-22-dice-finale-tone.png`
- 剧情说明：最后的骰子不改变路线，只决定故事如何落款。
- 玩家操作：
  1. 掷骰。
  2. 结果：温柔、追问、热闹、安静、转折、回声。
- 兜底按钮：使用回声语气。
- 完成反馈：终局文案语气被记录。
- 推荐奖励：`echo`、`time-traveler`。

### 23. 命运格

- 场景图：`tile-23-fate-missed-rewind-safe-route.png`
- 剧情说明：真实路线里，没走到也可以成为故事的一部分。
- 玩家操作：
  1. 三选一：回溯补走、承认错过、安全完成。
  2. 系统根据选择改写终局叙事。
- 兜底按钮：安全完成。
- 完成反馈：错过被记录为支线，而不是失败。
- 推荐奖励：`missed-letter`、`rewind`、`safety`。

### 24. 回声格

- 场景图：`tile-24-echo-return-to-finale-array.png`
- 剧情说明：棋子回到牌阵前，玩家把最后一句话留给北京。
- 玩家操作：
  1. 查看本局牌阵。
  2. 写下最后一句回声。
  3. 生成终局明信片与短游记。
- 兜底按钮：使用系统生成回声。
- 完成反馈：本局完成，进入游记页。
- 推荐奖励：`echo`、`axis-scroll`、`human-life`。

## 5. 技术接入配置草案

下面是可直接转成前端数据的精简结构：

```ts
type BoardTileScene = {
  order: number
  label: string
  subtitle: string
  kind:
    | 'start'
    | 'landmark'
    | 'photo'
    | 'dice'
    | 'sound'
    | 'fate'
    | 'echo'
    | 'create'
    | 'branch'
    | 'travelogue'
  sceneImage: string
  taskTitle: string
  taskGoal: string
  primaryAction: string
  fallbackAction: string
  rewardCardIds: string[]
}
```

首批配置示例：

```json
[
  {
    "order": 1,
    "label": "起局",
    "subtitle": "身份",
    "kind": "start",
    "sceneImage": "/assets/beijing/tile-scenes-24/tile-01-qianmen-entry-identity.png",
    "taskTitle": "领取入城身份",
    "taskGoal": "选择建筑观察者、街声收集者或故事追问者，决定本局语气。",
    "primaryAction": "选择身份",
    "fallbackAction": "随机身份",
    "rewardCardIds": ["gate", "hint"]
  },
  {
    "order": 2,
    "label": "城门开市",
    "subtitle": "掌柜",
    "kind": "landmark",
    "sceneImage": "/assets/beijing/tile-scenes-24/tile-02-gate-market-shopkeeper-theater.png",
    "taskTitle": "完成城门三问",
    "taskGoal": "向清末掌柜提问，并选择一项现场证据。",
    "primaryAction": "问掌柜",
    "fallbackAction": "听掌柜讲一段",
    "rewardCardIds": ["trade", "qing-merchant", "gate-questions", "human-life"]
  },
  {
    "order": 24,
    "label": "回声格",
    "subtitle": "返场",
    "kind": "echo",
    "sceneImage": "/assets/beijing/tile-scenes-24/tile-24-echo-return-to-finale-array.png",
    "taskTitle": "留下最后一句回声",
    "taskGoal": "查看本局牌阵，生成终局明信片与短游记。",
    "primaryAction": "写一句话",
    "fallbackAction": "生成回声",
    "rewardCardIds": ["echo", "axis-scroll", "human-life"]
  }
]
```

## 6. Demo 最小闭环

推荐演示时只跑 6 个关键节点，但保留 24 格视觉完整度：

1. 起局：选择身份，进入北京。
2. 城门开市：问掌柜，获得商贸线索。
3. 中轴取景：拍/选对称构图，获得中轴线索。
4. 宫城水影：选倒影与屋檐，进入画师剧场。
5. 钟鼓定更：听见声音，获得旧城声音线索。
6. 回声格返场：展示牌阵，生成终局游记。

## 7. 展示叙事

```text
这不是一个单纯的文旅地图，也不是普通卡牌收藏。
玩家在真实北京中轴线上移动，每一步都落到一个棋格。
棋格会打开一张城市事件牌：拍照、听声、收信、遇见角色。
AI 把玩家的现场照片、声音和选择变成线索卡。
线索卡再驱动角色剧场，最后生成一份只属于这一次行走的北京游记。
所以 41 张卡不是装饰，而是一套把现实地点、AI 内容和游戏规则连接起来的语言。
```
