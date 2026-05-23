import type { CSSProperties } from 'react'
import { LockKeyhole, Sparkles } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { CardHand } from '../components/CardHand'
import { GameCardArt } from '../components/GameCardArt'
import {
  cardCategoryMeta,
  defaultSelectedCardId,
  gameCards,
  getGameCard,
  getGameCardsByCategory,
  playableCardCategories,
} from '../data/gameCards'
import { playUiSound } from '../utils/sound'

export function CardAlbumScreen({
  collectedCardIds,
  selectedCardId,
  onSelectCard,
}: {
  collectedCardIds: string[]
  selectedCardId: string
  onSelectCard: (cardId: string) => void
}) {
  const selectedCard = getGameCard(selectedCardId) ?? getGameCard(defaultSelectedCardId) ?? gameCards[0]
  const earned = collectedCardIds.includes(selectedCard.id)
  const selectedMeta = cardCategoryMeta[selectedCard.category]

  return (
    <section className="screen event-screen album-screen">
      <AssetSlot assetKey="cardAlbumTable" accent="#28665b" className="screen-backdrop" />

      <div className="album-board">
        <div className="screen-title">
          <p className="eyebrow">文化卡牌册</p>
          <h1>41 张牌组成一局北京故事</h1>
          <p>文化、事件、成就、线索、功能与角色六类卡共同驱动路线、剧场、任务和终局牌阵。</p>
        </div>

        <div className="album-sections">
          {playableCardCategories.map((category) => {
            const meta = cardCategoryMeta[category]
            return (
              <section className="album-category" key={category} style={{ '--card-color': meta.color } as CSSProperties}>
                <div className="album-category-heading">
                  <strong>{meta.label}</strong>
                  <span>{getGameCardsByCategory(category).length} 张</span>
                </div>
                <div className="album-category-grid">
                  {getGameCardsByCategory(category).map((card) => {
                    const cardEarned = collectedCardIds.includes(card.id)
                    return (
                      <button
                        className={`${selectedCard.id === card.id ? 'selected' : ''} ${cardEarned ? 'earned' : ''}`}
                        key={card.id}
                        type="button"
                        onClick={() => {
                          playUiSound(cardEarned ? 'cardFlip' : 'locked')
                          onSelectCard(card.id)
                        }}
                        style={{ '--card-color': card.color } as CSSProperties}
                      >
                        <GameCardArt card={card}>
                          {!cardEarned && (
                            <span className="mini-lock">
                              <LockKeyhole size={13} aria-hidden="true" />
                            </span>
                          )}
                        </GameCardArt>
                        <strong>{card.name}</strong>
                        <span>{cardEarned ? '已获得' : cardCategoryMeta[card.category].shortLabel}</span>
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      <aside className="card-detail" style={{ '--card-color': selectedCard.color } as CSSProperties}>
        <GameCardArt card={selectedCard} className="detail-card-art">
          {!earned && (
            <span className="detail-lock">
              <LockKeyhole size={15} aria-hidden="true" />
              未获得
            </span>
          )}
        </GameCardArt>
        <p className="eyebrow">{earned ? '已获得' : '尚未获得'}</p>
        <h2>{selectedCard.name}</h2>
        <strong>{selectedMeta.label} / {selectedCard.theme}</strong>
        <p>{selectedCard.description}</p>
        <p className="unlock-rule">{selectedCard.unlockRule}</p>
        <CardHand collectedCardIds={collectedCardIds} compact onSelect={onSelectCard} />
        <div className="detail-note">
          <Sparkles size={17} aria-hidden="true" />
          <span>{selectedCard.effect ?? selectedMeta.description}</span>
        </div>
      </aside>
    </section>
  )
}
