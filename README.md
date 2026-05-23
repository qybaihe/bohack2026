# 此地有回声：AI 城市时空棋局

这是 BOHACK 2026 项目《此地有回声》的当前工程版本。项目以“真实城市路线 + 桌游棋盘 + AI 角色剧场 + 卡牌收集”为核心，首发章节是北京《中轴入局》。

当前仓库主要包含：

- `time-chess-react/`：React + TypeScript + Vite 横屏棋盘原型
- `time-chess-react/public/assets/beijing/`：北京篇视觉资产、棋盘资产、角色资产、UI 资产与完整 41 张游戏卡牌
- `time-chess-react/public/audio/`：北京篇本地 BGM
- `docs/`：资产规划、玩法交接、ImageGen prompt 与下一线程执行提示
- `design/reference-screens/`：产品与视觉参考图
- `outputs/`：阶段性游戏文档交付物

## 当前完成进度

北京篇已经从普通页面原型推进到可运行的横屏桌游式 Web 原型：

1. 完成 16:9 横屏 GameShell、顶部导航、进度条与 BGM 控制。
2. 完成入口页、偏好问答、主棋盘、拍照触发、AI 剧场、现实任务、卡牌册、终局游记 8 个主要界面。
3. 完成北京中轴路线的 5 个核心地点：前门、中轴视线点、故宫角楼、景山、鼓楼/什刹海。
4. 完成棋盘走格、现场元素手动兜底、时空骰事件、角色对话 mock、任务提交、终局游记等基础交互。
5. 已接入完整 41 张透明 PNG 游戏卡牌，位于 `time-chess-react/public/assets/beijing/deck/`。
6. 已新增 `src/data/gameCards.ts`，把卡牌拆成 6 类：文化核心卡、事件卡、旅程成就卡、观察线索卡、功能兜底卡、剧场角色卡。
7. 已把旧 7 张文化卡逻辑升级为完整卡牌系统，卡册支持 41 张分组展示，地点奖励也从单卡扩展成地点牌组。

## 本地启动

进入 React 项目目录：

```bash
cd time-chess-react
```

安装依赖：

```bash
npm install
```

启动本地开发服务：

```bash
npm run dev -- --host 127.0.0.1
```

打开：

```text
http://127.0.0.1:5173/
```

常用检查：

```bash
npm run build
npm run lint
```

## 关键文件

- `time-chess-react/src/App.tsx`：页面流程、状态与主交互
- `time-chess-react/src/App.css`：横屏桌游视觉样式
- `time-chess-react/src/data/beijingGame.ts`：北京路线、地点、任务、角色与奖励关系
- `time-chess-react/src/data/gameCards.ts`：41 张卡牌的数据模型与分类
- `time-chess-react/src/data/beijingAssets.ts`：资产路径映射
- `time-chess-react/src/components/GameCardArt.tsx`：透明 PNG 卡牌渲染组件
- `time-chess-react/src/components/CardHand.tsx`：手牌与奖励牌展示
- `time-chess-react/src/screens/CardAlbumScreen.tsx`：41 张卡牌册
- `docs/BEIJING_CARD_SYSTEM_NEXT_THREAD_PROMPT.md`：下一阶段体验升级交接提示词

## 下一步建议

下一阶段重点不是继续加静态页面，而是把 41 张卡真正变成“卡牌驱动城市棋局”：

1. 棋盘页增加事件牌堆、当前事件牌、当前角色牌和本回合将获得牌组。
2. 把“掷时空骰”改造成更有仪式感的抽事件牌/翻事件牌体验。
3. 拍照页升级为“生成线索卡”：照片、录音或手选元素应即时生成对称卡、水纹卡、钟声卡、人间烟火卡、来信卡等。
4. 剧场页用“角色卡 + 事件卡 + 线索卡”共同驱动对话，不再只是普通问答。
5. 任务页加入翻牌、发牌、发光与奖励入手反馈。
6. 终局页做成本局牌阵，读取玩家获得的文化卡、角色卡、线索卡和成就卡生成游记。
7. 接入真实拍照预览、定位、天气和后端 AI 对话接口。
8. 北京篇体验稳定后，再复用内容结构扩展天津《海河来信》章节。

## 当前验证状态

最近一次检查已通过：

```bash
npm run build
npm run lint
```
