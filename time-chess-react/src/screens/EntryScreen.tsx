import { ArrowRight, Dice6, Map, MapPinned, Sparkles } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { chapter } from '../data/beijingGame'

export function EntryScreen({ onStart }: { onStart: () => void }) {
  return (
    <section className="screen entry-screen">
      <AssetSlot assetKey="entryBoardBox" accent="#96342e" className="entry-visual">
        <div className="table-props" aria-hidden="true">
          <span className="prop pawn" />
          <span className="prop dice">
            <Dice6 size={28} />
          </span>
          <span className="prop coin" />
        </div>
      </AssetSlot>

      <div className="entry-copy">
        <p className="eyebrow">京津双城时空季 / 首发内测</p>
        <h1>
          此地有回声
          <span>北京《{chapter.title}》</span>
        </h1>
        <p>{chapter.positioning}</p>
      </div>

      <div className="chapter-cards" aria-label="城市章节">
        <button className="chapter-card active" type="button">
          <MapPinned size={20} aria-hidden="true" />
          <span>
            <strong>北京《中轴入局》</strong>
            <small>从前门走到旧城回声</small>
          </span>
        </button>
        <button className="chapter-card locked" type="button" disabled>
          <Map size={20} aria-hidden="true" />
          <span>
            <strong>天津《海河来信》</strong>
            <small>下一章锁定</small>
          </span>
        </button>
      </div>

      <div className="entry-actions">
        <button className="primary-action" type="button" onClick={onStart}>
          <Sparkles size={18} aria-hidden="true" />
          开始入局
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}
