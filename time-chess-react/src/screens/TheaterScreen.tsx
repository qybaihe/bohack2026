import type { CSSProperties } from 'react'
import { ArrowRight, ChevronLeft, Dice6, Sparkles } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { nodeRoleAssets } from '../data/beijingAssets'
import type { DialogueChoice, DiceFace, RouteNode } from '../data/beijingGame'

export function TheaterScreen({
  node,
  diceFace,
  selectedElements,
  activeChoice,
  onBack,
  onChoice,
  onMission,
}: {
  node: RouteNode
  diceFace: DiceFace
  selectedElements: string[]
  activeChoice: DialogueChoice | null
  onBack: () => void
  onChoice: (choice: DialogueChoice) => void
  onMission: () => void
}) {
  const elementText = selectedElements.length > 0 ? selectedElements.join('、') : node.photoTags.slice(0, 3).join('、')
  const DiceIcon = diceFace.icon

  return (
    <section className="screen event-screen theater-screen">
      <AssetSlot assetKey="theaterTable" accent={node.accent} className="screen-backdrop" />

      <div className="theater-card" style={{ '--accent': node.accent } as CSSProperties}>
        <button className="back-button" type="button" onClick={onBack} aria-label="返回拍照触发">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>

        <AssetSlot assetKey={nodeRoleAssets[node.id]} accent={node.accent} className="role-portrait">
          <span>{node.roleName}</span>
        </AssetSlot>

        <div className="dialogue-panel">
          <p className="eyebrow">AI 剧场 / {diceFace.name}</p>
          <h1>{node.roleName}</h1>
          <small>{node.roleTitle}</small>
          <blockquote>{node.stageLine}</blockquote>
          <p>
            我从现场看见了 <strong>{elementText}</strong>。这次骰面是
            <strong>「{diceFace.name}」</strong>，{diceFace.meaning}
          </p>
        </div>

        <div className="dice-result">
          <Dice6 size={18} aria-hidden="true" />
          <DiceIcon size={34} aria-hidden="true" />
          <strong>{diceFace.name}</strong>
        </div>
      </div>

      <aside className="choice-panel">
        <p className="eyebrow">玩家选择卡</p>
        {node.choices.map((choice) => (
          <button
            className={activeChoice?.prompt === choice.prompt ? 'choice-card selected' : 'choice-card'}
            key={choice.prompt}
            type="button"
            onClick={() => onChoice(choice)}
          >
            <span>{choice.prompt}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        ))}
        <div className="reply-card">
          <Sparkles size={18} aria-hidden="true" />
          <p>{activeChoice ? activeChoice.reply : '选择一句追问后，角色会把这一格的回声接住。'}</p>
        </div>
        <button className="primary-action" type="button" onClick={onMission}>
          接受现实任务
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </aside>
    </section>
  )
}

