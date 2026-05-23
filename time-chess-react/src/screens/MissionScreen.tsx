import type { LucideIcon } from 'lucide-react'
import { CheckCircle2, ChevronLeft, ImageUp, MessageSquareText, Mic2 } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { RewardCards } from '../components/CardHand'
import type { RouteNode } from '../data/beijingGame'

export function MissionScreen({
  node,
  memoryLine,
  onBack,
  onMemoryChange,
  onComplete,
}: {
  node: RouteNode
  memoryLine: string
  onBack: () => void
  onMemoryChange: (value: string) => void
  onComplete: () => void
}) {
  return (
    <section className="screen event-screen mission-screen">
      <AssetSlot assetKey="missionTable" accent={node.accent} className="screen-backdrop" />

      <div className="mission-card">
        <button className="back-button" type="button" onClick={onBack} aria-label="返回剧场">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <p className="eyebrow">现实任务 / {node.title}</p>
        <h1>{node.mission}</h1>

        <div className="task-slots">
          <TaskSlot icon={ImageUp} title="拍照观察" text={node.photoPrompt} />
          <TaskSlot icon={Mic2} title="市声记录" text="可用 10 秒城市声音替代照片任务。" />
          <TaskSlot icon={MessageSquareText} title="留下回声" text="把今天想交给北京的一句话写下来。" />
        </div>

        <label className="memory-box" htmlFor="memoryLine">
          <span>留给北京的一句话</span>
          <textarea
            id="memoryLine"
            value={memoryLine}
            rows={4}
            onChange={(event) => onMemoryChange(event.target.value)}
          />
        </label>

        <button className="primary-action" type="button" onClick={onComplete}>
          <CheckCircle2 size={18} aria-hidden="true" />
          提交任务并领取卡牌
        </button>
      </div>

      <aside className="reward-panel">
        <p className="eyebrow">奖励预览</p>
        <h2>本格牌组</h2>
        <RewardCards cardIds={node.rewardCardIds} />
      </aside>
    </section>
  )
}

function TaskSlot({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <article className="task-slot">
      <Icon size={19} aria-hidden="true" />
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  )
}
