import { ArrowRight, Dice6, Footprints, MapPinned, Trophy } from 'lucide-react'
import { type RouteNode, diceFaces } from '../data/beijingGame'
import { gameCardCount } from '../data/gameCards'

export function CurrentTurnPanel({
  currentNode,
  completedNodeIds,
  collectedCardIds,
  onOpenNode,
  onFinale,
}: {
  currentNode: RouteNode
  completedNodeIds: string[]
  collectedCardIds: string[]
  onOpenNode: () => void
  onFinale: () => void
}) {
  return (
    <aside className="turn-panel">
      <div>
        <p className="eyebrow">当前回合</p>
        <h2>{currentNode.title}</h2>
        <p>{currentNode.place}</p>
      </div>

      <div className="turn-stats">
        <Stat label="棋格" value={`${completedNodeIds.length}/${5}`} />
        <Stat label="卡牌" value={`${collectedCardIds.length}/${gameCardCount}`} />
        <Stat label="预计" value={currentNode.estimatedMinutes} />
      </div>

      <div className="turn-card">
        <MapPinned size={18} aria-hidden="true" />
        <span>剧场角色</span>
        <strong>{currentNode.roleName}</strong>
        <small>{currentNode.roleTitle}</small>
      </div>

      <div className="dice-strip">
        {diceFaces.map((face) => {
          const Icon = face.icon
          return (
            <span key={face.id} title={face.name}>
              <Icon size={15} aria-hidden="true" />
            </span>
          )
        })}
      </div>

      {completedNodeIds.length === 5 ? (
        <button className="primary-action" type="button" onClick={onFinale}>
          <Trophy size={18} aria-hidden="true" />
          查看终局游记
        </button>
      ) : (
        <button className="primary-action" type="button" onClick={onOpenNode}>
          <Footprints size={18} aria-hidden="true" />
          进入「{currentNode.title}」
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      )}

      <div className="turn-note">
        <Dice6 size={16} aria-hidden="true" />
        <span>路线固定，骰面只改变本地点的剧情事件。</span>
      </div>
    </aside>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="turn-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}
