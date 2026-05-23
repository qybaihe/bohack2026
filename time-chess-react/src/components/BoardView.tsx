import type { CSSProperties } from 'react'
import { Camera, CheckCircle2, Dice6, Footprints, MessageCircle, Mic2, PenLine, Sparkles } from 'lucide-react'
import { nodeLandmarkAssets, type AssetKey } from '../data/beijingAssets'
import { routeNodes, type RouteNode } from '../data/beijingGame'
import { AssetSlot } from './AssetSlot'

type TrackCell =
  | {
      kind: 'node'
      nodeId: string
      column: string
      row: string
    }
  | {
      kind: 'event'
      label: string
      helper: string
      column: string
      row: string
      tone: 'start' | 'dice' | 'photo' | 'sound' | 'fate' | 'echo' | 'create' | 'finale'
      assetKey?: AssetKey
    }

const eventIcons = {
  start: Footprints,
  dice: Dice6,
  photo: Camera,
  sound: Mic2,
  fate: Sparkles,
  echo: MessageCircle,
  create: PenLine,
  finale: CheckCircle2,
}

const trackCells: TrackCell[] = [
  { kind: 'event', label: '前门入城', helper: '起局', column: '1', row: '7', tone: 'start', assetKey: 'eventFinale' },
  { kind: 'node', nodeId: 'qianmen', column: '2', row: '7' },
  { kind: 'event', label: '拍照任务', helper: '取证', column: '3', row: '7', tone: 'photo', assetKey: 'eventPhoto' },
  { kind: 'node', nodeId: 'axis', column: '4', row: '7' },
  { kind: 'event', label: '时空骰', helper: '掷骰', column: '5', row: '7', tone: 'dice', assetKey: 'eventDice' },
  { kind: 'event', label: '市声任务', helper: '听见', column: '6', row: '7', tone: 'sound', assetKey: 'eventSound' },
  { kind: 'event', label: '命运格', helper: '转折', column: '7', row: '7', tone: 'fate', assetKey: 'eventFate' },
  { kind: 'event', label: '回声卡', helper: '留言', column: '7', row: '6', tone: 'echo', assetKey: 'eventEcho' },
  { kind: 'node', nodeId: 'corner-tower', column: '7', row: '5' },
  { kind: 'event', label: '隐藏支线', helper: '发现', column: '7', row: '4', tone: 'fate', assetKey: 'eventHidden' },
  { kind: 'event', label: '共创格', helper: '生成', column: '7', row: '3', tone: 'create', assetKey: 'eventCreate' },
  { kind: 'event', label: '命运格', helper: '转场', column: '7', row: '2', tone: 'fate', assetKey: 'eventFate' },
  { kind: 'event', label: '时空游记', helper: '终局', column: '7', row: '1', tone: 'finale', assetKey: 'eventFinale' },
  { kind: 'event', label: '回声格', helper: '记录', column: '6', row: '1', tone: 'echo', assetKey: 'eventEcho' },
  { kind: 'node', nodeId: 'jingshan', column: '5', row: '1' },
  { kind: 'event', label: '拍照任务', helper: '构图', column: '4', row: '1', tone: 'photo', assetKey: 'eventPhoto' },
  { kind: 'event', label: '时空骰', helper: '来信', column: '3', row: '1', tone: 'dice', assetKey: 'eventDice' },
  { kind: 'node', nodeId: 'shichahai', column: '2', row: '1' },
  { kind: 'event', label: '旧城回声', helper: '收束', column: '1', row: '1', tone: 'finale', assetKey: 'eventFinale' },
  { kind: 'event', label: '市声任务', helper: '街声', column: '1', row: '2', tone: 'sound', assetKey: 'eventSound' },
  { kind: 'event', label: '共创格', helper: '卡牌', column: '1', row: '3', tone: 'create', assetKey: 'eventCreate' },
  { kind: 'event', label: '时空骰', helper: '选择', column: '1', row: '4', tone: 'dice', assetKey: 'eventDice' },
  { kind: 'event', label: '命运格', helper: '错过', column: '1', row: '5', tone: 'fate', assetKey: 'eventFate' },
  { kind: 'event', label: '回声格', helper: '返场', column: '1', row: '6', tone: 'echo', assetKey: 'eventEcho' },
]

export function BoardView({
  currentNode,
  completedNodeIds,
  onOpenNode,
}: {
  currentNode: RouteNode
  completedNodeIds: string[]
  onOpenNode: () => void
}) {
  return (
    <div className="board-view" aria-label="北京中轴入局棋盘">
      <div className="board-map-panel">
        <AssetSlot assetKey="axisCenterMap" accent="#96342e" className="board-map-art">
          <div className="axis-map-placeholder" aria-hidden="true">
            <span className="axis-spine" />
            <span className="map-node node-1" />
            <span className="map-node node-2" />
            <span className="map-node node-3" />
            <span className="map-node node-4" />
            <span className="map-node node-5" />
            <span className="water-shape" />
          </div>
          <div className="board-map-copy">
            <p className="eyebrow">北京中轴线</p>
            <h2>从城门到旧城回声</h2>
            <p>外圈走格，中心地图承接五站路线。景点、任务、骰面和回声共同组成这一局。</p>
          </div>
        </AssetSlot>
      </div>

      {trackCells.map((cell, index) => {
        if (cell.kind === 'node') {
          const node = routeNodes.find((item) => item.id === cell.nodeId)
          if (!node) return null
          const active = node.id === currentNode.id
          const completed = completedNodeIds.includes(node.id)
          return (
            <button
              className={`board-cell node-cell ${active ? 'active' : ''} ${completed ? 'completed' : ''}`}
              key={node.id}
              type="button"
              onClick={active ? onOpenNode : undefined}
              style={{ gridColumn: cell.column, gridRow: cell.row, '--accent': node.accent } as CSSProperties}
            >
              <AssetSlot assetKey={nodeLandmarkAssets[node.id]} accent={node.accent} className="tile-art" />
              <span className="tile-kicker">{node.subtitle}</span>
              <strong>{node.title}</strong>
              {active && <span className="player-token" aria-label="当前棋子" />}
              {completed && <CheckCircle2 className="tile-check" size={17} aria-hidden="true" />}
            </button>
          )
        }

        const Icon = eventIcons[cell.tone]
        return (
          <div
            className={`board-cell event-cell ${cell.tone}`}
            key={`${cell.label}-${index}`}
            style={{ gridColumn: cell.column, gridRow: cell.row } as CSSProperties}
          >
            {cell.assetKey && <AssetSlot assetKey={cell.assetKey} accent="#b77924" className="event-art" />}
            <Icon size={18} aria-hidden="true" />
            <strong>{cell.label}</strong>
            <span>{cell.helper}</span>
          </div>
        )
      })}
    </div>
  )
}
