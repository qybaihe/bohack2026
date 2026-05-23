import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Clock3, Compass, Footprints, Layers3, MapPinned, UsersRound } from 'lucide-react'
import { AssetSlot } from '../components/AssetSlot'
import { preferenceQuestions, routeNodes, type PreferenceKey } from '../data/beijingGame'
import type { Preferences } from '../types'

const questionIcons = {
  duration: Clock3,
  companion: UsersRound,
  interest: Compass,
  energy: Footprints,
}

export function SetupScreen({
  preferences,
  onChange,
  onContinue,
}: {
  preferences: Preferences
  onChange: (key: PreferenceKey, value: string) => void
  onContinue: () => void
}) {
  return (
    <section className="screen setup-screen">
      <div className="screen-title setup-title">
        <p className="eyebrow">入局问答</p>
        <h1>先让北京知道你今天怎么走</h1>
        <p>固定路线、时空骰事件、拍照触发剧场和文化卡牌会根据这组选择调整节奏。</p>
      </div>

      <div className="route-preview-panel">
        <AssetSlot assetKey="routePreviewStrip" accent="#28665b" className="route-preview-art">
          <div className="mini-route">
            {routeNodes.map((node) => (
              <span key={node.id}>
                <i>{node.order}</i>
                {node.title}
              </span>
            ))}
          </div>
        </AssetSlot>
        <div className="rule-grid">
          <Rule icon={MapPinned} title="固定路线" text="五个北京棋格按顺序推进" />
          <Rule icon={Compass} title="时空骰" text="改变本地点剧情事件" />
          <Rule icon={Layers3} title="文化卡" text="任务完成后进入手牌" />
        </div>
      </div>

      <div className="preference-board">
        {preferenceQuestions.map((question) => {
          const Icon = questionIcons[question.key]
          return (
            <fieldset className="preference-group" key={question.key}>
              <legend>
                <Icon size={18} aria-hidden="true" />
                {question.title}
              </legend>
              <div className="segmented-options">
                {question.options.map((option) => (
                  <button
                    className={preferences[question.key] === option.value ? 'segment selected' : 'segment'}
                    key={option.value}
                    type="button"
                    onClick={() => onChange(question.key, option.value)}
                  >
                    <strong>{option.label}</strong>
                    <small>{option.helper}</small>
                  </button>
                ))}
              </div>
            </fieldset>
          )
        })}
      </div>

      <button className="primary-action setup-submit" type="button" onClick={onContinue}>
        生成北京时空棋盘
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </section>
  )
}

function Rule({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <article className="rule-card">
      <Icon size={18} aria-hidden="true" />
      <strong>{title}</strong>
      <span>{text}</span>
    </article>
  )
}
