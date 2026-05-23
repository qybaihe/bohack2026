import { BookOpen, Layers3, MapPinned, RotateCcw, Sparkles, Volume2, VolumeX } from 'lucide-react'
import { useRef, useState, type ReactNode } from 'react'
import type { Screen } from '../types'
import { playUiSound } from '../utils/sound'

export function GameShell({
  screen,
  progress,
  children,
  onNavigate,
  onReset,
}: {
  screen: Screen
  progress: number
  children: ReactNode
  onNavigate: (screen: Screen) => void
  onReset: () => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [musicOn, setMusicOn] = useState(false)

  const toggleMusic = async () => {
    playUiSound('select')
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.28

    if (musicOn) {
      audio.pause()
      setMusicOn(false)
      return
    }

    try {
      await audio.play()
      setMusicOn(true)
    } catch {
      setMusicOn(false)
    }
  }

  return (
    <div className="game-shell">
      <audio ref={audioRef} src="/audio/beijing-axis-bgm.wav" loop preload="auto" />
      <header className="game-topbar">
        <button className="brand-button" type="button" onClick={() => onNavigate('entry')}>
          <span className="brand-mark" aria-hidden="true">
            <Sparkles size={18} />
          </span>
          <span>
            <strong>此地有回声</strong>
            <small>北京《中轴入局》横屏棋盘版</small>
          </span>
        </button>

        <nav className="top-nav" aria-label="原型页面">
          <button
            className={screen === 'board' ? 'top-nav-button active' : 'top-nav-button'}
            type="button"
            onClick={() => onNavigate('board')}
          >
            <MapPinned size={17} aria-hidden="true" />
            棋盘
          </button>
          <button
            className={screen === 'album' ? 'top-nav-button active' : 'top-nav-button'}
            type="button"
            onClick={() => onNavigate('album')}
          >
            <Layers3 size={17} aria-hidden="true" />
            卡册
          </button>
          <button
            className={screen === 'finale' ? 'top-nav-button active' : 'top-nav-button'}
            type="button"
            onClick={() => onNavigate('finale')}
          >
            <BookOpen size={17} aria-hidden="true" />
            游记
          </button>
          <button
            className={musicOn ? 'top-nav-button active' : 'top-nav-button'}
            type="button"
            onClick={toggleMusic}
          >
            {musicOn ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
            BGM
          </button>
          <button
            className="icon-button"
            type="button"
            onClick={onReset}
            aria-label="重新开局"
          >
            <RotateCcw size={18} aria-hidden="true" />
          </button>
        </nav>

        {screen !== 'entry' && (
          <div className="progress-rail" aria-label="当前路线进度">
            <span style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
        )}
      </header>
      <main className="game-stage">{children}</main>
    </div>
  )
}
