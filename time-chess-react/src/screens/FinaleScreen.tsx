import { useMemo, useState } from 'react'
import { Download, RotateCcw, Share2 } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { CardHand } from '../components/CardHand'
import { preferenceQuestions, routeNodes } from '../data/beijingGame'
import { getGameCards } from '../data/gameCards'
import type { Preferences } from '../types'

export function FinaleScreen({
  title,
  memoryLine,
  preferences,
  collectedCardIds,
  completedNodeIds,
  onReset,
}: {
  title: string
  memoryLine: string
  preferences: Preferences
  collectedCardIds: string[]
  completedNodeIds: string[]
  onReset: () => void
}) {
  const [shareStatus, setShareStatus] = useState('')
  const earnedCards = getGameCards(collectedCardIds)
  const completedNodes = routeNodes.filter((node) => completedNodeIds.includes(node.id))
  const storyText = useMemo(() => {
    const routeText = completedNodes.map((node) => node.title).join('、') || '中轴线'
    const cardText = earnedCards.map((card) => card?.name).join('、') || '尚未点亮的卡牌'
    return [
      `《${title}》`,
      '',
      `路线：${routeText}`,
      `卡牌：${cardText}`,
      `回声：${memoryLine}`,
      '',
      '这一次，北京不是被听完的，而是被一步步走出来的。',
    ].join('\n')
  }, [completedNodes, earnedCards, memoryLine, title])

  const saveStory = () => {
    const blob = new Blob([storyText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${title}.txt`
    link.click()
    URL.revokeObjectURL(url)
    setShareStatus('游记已保存')
  }

  const shareStory = async () => {
    if (navigator.share) {
      await navigator.share({ title: `此地有回声：${title}`, text: storyText })
      setShareStatus('已打开分享面板')
      return
    }

    await navigator.clipboard?.writeText(storyText)
    setShareStatus('游记文案已复制')
  }

  return (
    <section className="screen event-screen finale-screen">
      <AssetSlot assetKey="finaleStorybook" accent="#96342e" className="screen-backdrop" />

      <div className="storybook">
        <div className="story-page left">
          <p className="eyebrow">我的北京时空游记</p>
          <h1>《{title}》</h1>
          <p>
            你以{getPreferenceLabel('duration', preferences.duration)}的节奏入局，沿着
            {completedNodes.map((node) => node.title).join('、') || '中轴线'}行走，把北京的秩序、光影和日常声响放进同一张棋盘。
          </p>
          <blockquote>{memoryLine}</blockquote>
          <div className="story-timeline">
            {routeNodes.map((node) => (
              <span className={completedNodeIds.includes(node.id) ? 'done' : ''} key={node.id}>
                <i>{node.order}</i>
                {node.title}
              </span>
            ))}
          </div>
        </div>

        <div className="story-page right">
          <p className="eyebrow">分享海报预览</p>
          <AssetSlot assetKey="posterTemplateA" accent="#96342e" className="poster-preview">
            <AssetSlot assetKey="completionStamp" accent="#b77924" className="stamp-preview" />
            <div className="poster-copy">
              <strong>{title}</strong>
              <span>{memoryLine}</span>
            </div>
          </AssetSlot>
          <h2>{earnedCards.map((card) => card?.name).join(' / ') || '等待卡牌点亮'}</h2>
          <CardHand collectedCardIds={collectedCardIds} compact />
          <div className="finale-actions">
            <button className="secondary-action" type="button" onClick={saveStory}>
              <Download size={18} aria-hidden="true" />
              保存
            </button>
            <button className="secondary-action" type="button" onClick={shareStory}>
              <Share2 size={18} aria-hidden="true" />
              分享
            </button>
            <button className="primary-action" type="button" onClick={onReset}>
              <RotateCcw size={18} aria-hidden="true" />
              再走一局
            </button>
          </div>
          {shareStatus && <p className="share-status">{shareStatus}</p>}
        </div>
      </div>
    </section>
  )
}

function getPreferenceLabel(key: keyof Preferences, value: string) {
  return preferenceQuestions
    .find((question) => question.key === key)
    ?.options.find((option) => option.value === value)?.label
}
