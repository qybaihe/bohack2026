# 此地有回声：北京《中轴入局》

这是《此地有回声：AI 城市时空棋局》的北京篇横屏桌游式 React 原型，当前只开放《中轴入局》。

## 已实现

- 16:9 横屏 GameShell：顶部导航、进度条、固定舞台比例
- 入口页：北京章节开放，天津章节锁定，桌游盒主视觉占位
- 入局问答页：游玩时间、同行类型、兴趣主题、体力状态
- 主棋盘页：外圈走格子、中央地图、当前棋子、右侧回合面板、底部手牌
- 拍照触发页：地点事件卡、上传框、现场元素手动兜底、时空骰入口
- AI 剧场页：角色立绘槽、骰面结果、玩家选择卡、本地 mock 回复
- 现实任务页：任务槽位、回声留言、地点牌组奖励预览
- 卡牌册页：41 张卡牌按文化、事件、成就、线索、功能、角色分组展示
- 终局游记页：故事书、路线时间线、分享海报预览
- 顶栏 BGM：项目内原创合成古琴氛围循环，可手动开关
- 真实交互音效：导航、选择、掷骰、抽牌、翻牌、奖励、锁定、剧场、任务完成、终局等短音效
- 完整卡牌底座：41 张透明 PNG 卡牌已接入 `public/assets/beijing/deck/`
- 卡牌数据模型：`src/data/gameCards.ts` 已定义 6 类牌组、解锁规则、效果与地点关联

## 本地运行

```bash
npm install
npm run dev -- --host 127.0.0.1
```

访问：

```text
http://127.0.0.1:5173/
```

## 关键文件

- `src/App.tsx`：页面流程和交互状态
- `src/App.css`：横屏桌游视觉样式
- `src/components/`：GameShell、棋盘、回合面板、手牌、资产槽位
- `src/screens/`：8 个静态/半静态页面
- `src/data/beijingGame.ts`：北京地点、角色、任务、骰面和奖励规则
- `src/data/gameCards.ts`：41 张游戏卡牌的数据模型、分类、解锁规则和效果
- `src/data/beijingAssets.ts`：资产槽位到项目路径的映射
- `src/components/GameCardArt.tsx`：透明 PNG 卡牌渲染
- `public/assets/beijing/ASSET_SLOTS.md`：ImageGen 素材槽位表
- `public/assets/beijing/deck/`：41 张正式游戏卡牌
- `../docs/BEIJING_IMAGEGEN_PROMPTS.md`：可直接使用的 ImageGen prompts
- `../docs/BEIJING_MVP_HANDOFF.md`：产品、内容、技术交接文档
- `../docs/BEIJING_CARD_SYSTEM_NEXT_THREAD_PROMPT.md`：下一阶段体验升级提示词
- `public/audio/beijing-axis-bgm.wav`：本地原创合成 BGM
- `public/audio/sfx/`：商用可用 CC0 交互音效与许可证说明

## 下一步

1. 棋盘页增加事件牌堆、当前事件牌、角色牌和本回合奖励牌组。
2. 把“掷时空骰”升级为抽事件牌/翻事件牌体验。
3. 拍照页升级为“生成线索卡”，让照片、录音或手选元素直接产出观察线索牌。
4. 剧场页用“角色卡 + 事件卡 + 线索卡”共同驱动对话。
5. 任务页加入翻牌、发牌和奖励入手动效，让现有音效与动画更紧密同步。
6. 终局页做成本局牌阵，并根据玩家获得的牌生成游记。
7. 接入真实定位、拍照预览、天气和后端 AI 对话接口。
8. 北京跑通后，复制内容结构扩展天津篇。
