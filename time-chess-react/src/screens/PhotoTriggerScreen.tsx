import { Camera, ChevronLeft, Dice6, ImageUp, MapPinned } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { nodeLandmarkAssets } from '../data/beijingAssets'
import type { RouteNode } from '../data/beijingGame'

export function PhotoTriggerScreen({
  node,
  selectedElements,
  photoName,
  onBack,
  onPhoto,
  onSelectElement,
  onRoll,
}: {
  node: RouteNode
  selectedElements: string[]
  photoName?: string
  onBack: () => void
  onPhoto: (fileName: string) => void
  onSelectElement: (element: string) => void
  onRoll: () => void
}) {
  return (
    <section className="screen event-screen photo-screen">
      <AssetSlot assetKey="photoTriggerTable" accent={node.accent} className="screen-backdrop" />

      <div className="event-card photo-event-card">
        <button className="back-button" type="button" onClick={onBack} aria-label="返回棋盘">
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <div className="event-copy">
          <p className="eyebrow">到达事件卡 / 第 {node.order} 格</p>
          <h1>{node.title}</h1>
          <p>{node.place}</p>
        </div>

        <AssetSlot assetKey={nodeLandmarkAssets[node.id]} accent={node.accent} className="landmark-preview">
          <span className="landmark-pin">
            <MapPinned size={18} aria-hidden="true" />
          </span>
        </AssetSlot>

        <label className="upload-panel">
          <ImageUp size={22} aria-hidden="true" />
          <span>{photoName || '拍摄或上传现场照片'}</span>
          <small>{node.photoPrompt}</small>
          <input
            type="file"
            accept="image/*"
            capture="environment"
            onChange={(event) => {
              const file = event.target.files?.[0]
              if (file) onPhoto(file.name)
            }}
          />
        </label>

        <div className="element-panel">
          <div>
            <Camera size={18} aria-hidden="true" />
            <strong>现场元素</strong>
          </div>
          <div className="tag-grid">
            {node.manualElements.map((element) => (
              <button
                className={selectedElements.includes(element) ? 'tag selected' : 'tag'}
                key={element}
                type="button"
                onClick={() => onSelectElement(element)}
              >
                {element}
              </button>
            ))}
          </div>
        </div>

        <button className="primary-action" type="button" onClick={onRoll}>
          <Dice6 size={18} aria-hidden="true" />
          掷时空骰
        </button>
      </div>

      <aside className="event-side-panel">
        <p className="eyebrow">兜底规则</p>
        <h2>不拍照也能继续</h2>
        <p>{node.fallback}</p>
        <div className="mini-card-stack">
          {node.photoTags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </aside>
    </section>
  )
}
