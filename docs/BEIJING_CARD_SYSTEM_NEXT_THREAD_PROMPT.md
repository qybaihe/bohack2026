# 北京中轴卡牌系统下一线程交接提示词

你是 Codex，继续在 `/Users/baihe/Documents/bohack` 工作。请用简体中文沟通。当前项目是 `time-chess-react`，目标是把“北京《中轴入局》”从横屏棋盘原型迅速提升成视听体验更强、卡牌驱动更明确的可玩游戏。

## 当前已完成

1. 本地项目路径：`/Users/baihe/Documents/bohack/time-chess-react`
2. 本地预览地址：`http://127.0.0.1:5173/`
3. 已把 41 张透明 PNG 卡牌正式复制到：
   `/Users/baihe/Documents/bohack/time-chess-react/public/assets/beijing/deck/`
4. 41 张卡牌已统一成稳定英文文件名：`card-01-gate.png` 到 `card-41-hutong-resident.png`
5. 已新增完整卡牌数据模型：
   `/Users/baihe/Documents/bohack/time-chess-react/src/data/gameCards.ts`
6. 已把旧的 7 张 `cultureCards` 逻辑升级为完整卡牌系统：
   - 7 张文化核心卡
   - 6 张事件卡
   - 7 张旅程成就卡
   - 5 张观察线索卡
   - 9 张功能兜底卡
   - 7 张剧场角色卡
7. 卡牌册已经从旧 7 张展示改为 41 张分组展示。
8. 棋盘右侧统计已改为 `0/41` 卡牌总数。
9. 地点奖励已从单一文化卡扩展为地点牌组，例如前门会奖励商贸、掌柜、城门三问、人间烟火等。
10. 构建与检查已通过：
    - `npm run build`
    - `npm run lint`
11. 已用 Playwright 截图快速确认：
    - `/Users/baihe/Documents/bohack/time-chess-react/output/playwright/card-album-41.png`
    - `/Users/baihe/Documents/bohack/time-chess-react/output/playwright/board-hand-41.png`

## 关键文件

- `/Users/baihe/Documents/bohack/time-chess-react/src/data/gameCards.ts`
- `/Users/baihe/Documents/bohack/time-chess-react/src/data/beijingGame.ts`
- `/Users/baihe/Documents/bohack/time-chess-react/src/components/GameCardArt.tsx`
- `/Users/baihe/Documents/bohack/time-chess-react/src/components/CardHand.tsx`
- `/Users/baihe/Documents/bohack/time-chess-react/src/screens/CardAlbumScreen.tsx`
- `/Users/baihe/Documents/bohack/time-chess-react/src/screens/MissionScreen.tsx`
- `/Users/baihe/Documents/bohack/time-chess-react/src/App.css`

## 新卡牌系统设计意图

这 41 张牌不要只当“收藏奖励”，而要成为游戏形式本身：

1. 文化核心卡：终局评分、故事主题、路线记忆的核心。
2. 事件卡：替代抽象骰面，玩家落到地点后抽事件卡，改变剧场开场和任务方向。
3. 旅程成就卡：由偏好、路线表现、拍照方式、跳过/替代路线解锁。
4. 观察线索卡：由照片识别、声音记录、手动现场元素生成。
5. 功能兜底卡：处理真实游玩里的天气、体力、错过节点、安全、提示、加速、回溯。
6. 剧场角色卡：驱动 AI 剧场角色身份，不再依赖另一套零散角色资产。

推荐的新玩法循环：

1. 玩家在棋盘上进入一个真实地点。
2. 系统抽一张事件卡，决定本回合事件语气。
3. 玩家拍照、录音或手动选择现场元素，生成观察线索卡。
4. 当前地点绑定一张角色卡进入剧场。
5. 剧场由“地点主题卡 + 事件卡 + 线索卡 + 角色卡”共同生成。
6. 完成任务后翻牌获得文化卡、成就卡、线索卡或角色卡。
7. 终局展示本局关键牌阵，并生成玩家自己的北京时空游记。

## 下一线程最高优先级

请直接开始做，不要停在方案阶段。目标是“整体游玩体验迅速拉升”，优先按这个顺序推进：

1. 棋盘页体验重构
   - 增加可见的事件牌堆、当前事件牌、当前地点角色牌、将获得牌组。
   - 让“掷时空骰”视觉上变成抽事件牌或翻事件牌。
   - 底部手牌不要只是锁卡列表，应变成“本局牌区”：文化核心、已得线索、功能牌分层展示。

2. 拍照页体验重构
   - 从普通上传页升级为“生成线索卡”的仪式。
   - 手选元素后要即时预览可能生成的线索卡，例如对称卡、水纹卡、钟声卡、人间烟火卡、来信卡。
   - 未拍照时也能通过功能兜底卡继续。

3. 剧场页体验重构
   - 使用角色卡作为视觉主角，当前事件卡作为冲突/问题来源，线索卡作为玩家刚刚带来的证据。
   - 布局建议：左侧角色卡，中间对话舞台，右侧当前事件/线索牌。
   - 文案上避免说明书味道，要像玩家真的抽到牌、带着证据和历史角色对话。

4. 任务页体验重构
   - 提交任务后增加翻牌/发牌/发光动效。
   - 奖励预览要清楚展示每张牌属于哪一类。
   - 第一次完成前门后，至少能看到 4-5 张牌进入手牌，形成强反馈。

5. 终局页体验重构
   - 做“本局牌阵”，按路线顺序展示玩家获得的关键牌。
   - 游记标题和正文要读取文化卡、角色卡、线索卡、成就卡组合。
   - 终局不要只像报告，要像一本带牌阵的城市故事册。

6. 声音与动效
   - 现有 `/Users/baihe/Documents/bohack/time-chess-react/src/utils/sound.ts` 已有轻量 UI 音效。
   - 请扩展抽牌、翻牌、奖励、终局的声音反馈。
   - 动效要克制但明确：抽牌、翻牌、入手、锁卡点亮。

## 注意事项

- 遵循现有 React + TypeScript + Vite 结构。
- 不要重新做一套无关设计；沿用当前横屏棋盘、古地图、卡牌桌游方向。
- 卡牌图片是透明 PNG，推荐使用 `GameCardArt` 或扩展它，避免背景裁切。
- 前端布局必须在 16:9 桌面视口下稳定，不要让文字和卡面互相遮挡。
- 做完每一轮重要 UI 改动后运行：
  - `npm run build`
  - `npm run lint`
  - 用浏览器/Playwright 截图检查棋盘、卡册、拍照、剧场、任务、终局。

## 继续工作目标

请把现在的数据底座真正转化成可玩的“卡牌驱动城市棋局”。优先产出一版完整闭环：进入地点 -> 抽事件牌 -> 生成线索卡 -> 角色剧场 -> 任务翻奖励牌 -> 终局牌阵。不要只做静态展示，要让玩家感觉每张牌都在改变这一局。
