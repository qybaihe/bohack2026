import { BoardView } from '../components/BoardView'
import { CardHand } from '../components/CardHand'
import { CurrentTurnPanel } from '../components/CurrentTurnPanel'
import { routeNodes, type RouteNode } from '../data/beijingGame'

export function BoardScreen({
  currentNode,
  completedNodeIds,
  collectedCardIds,
  onOpenNode,
  onFinale,
  onOpenCards,
}: {
  currentNode: RouteNode
  completedNodeIds: string[]
  collectedCardIds: string[]
  onOpenNode: () => void
  onFinale: () => void
  onOpenCards: (cardId: string) => void
}) {
  return (
    <section className="screen board-screen">
      <div className="board-title">
        <div>
          <p className="eyebrow">城市棋盘</p>
          <h1>北京《中轴入局》</h1>
        </div>
        <div className="route-timeline">
          {routeNodes.map((node) => (
            <span
              className={`${node.id === currentNode.id ? 'active' : ''} ${
                completedNodeIds.includes(node.id) ? 'completed' : ''
              }`}
              key={node.id}
            >
              {node.order}
            </span>
          ))}
        </div>
      </div>

      <BoardView currentNode={currentNode} completedNodeIds={completedNodeIds} onOpenNode={onOpenNode} />

      <CurrentTurnPanel
        currentNode={currentNode}
        completedNodeIds={completedNodeIds}
        collectedCardIds={collectedCardIds}
        onOpenNode={onOpenNode}
        onFinale={onFinale}
      />

      <CardHand collectedCardIds={collectedCardIds} onSelect={onOpenCards} />
    </section>
  )
}

