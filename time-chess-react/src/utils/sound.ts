type SoundKind = 'nav' | 'select' | 'dice' | 'reward' | 'reset'

const soundMap: Record<SoundKind, { frequency: number; duration: number; type: OscillatorType }> = {
  nav: { frequency: 440, duration: 0.055, type: 'sine' },
  select: { frequency: 620, duration: 0.06, type: 'triangle' },
  dice: { frequency: 180, duration: 0.11, type: 'square' },
  reward: { frequency: 740, duration: 0.14, type: 'triangle' },
  reset: { frequency: 260, duration: 0.08, type: 'sine' },
}

let audioContext: AudioContext | null = null

export function playUiSound(kind: SoundKind) {
  if (typeof window === 'undefined') return

  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext
  if (!AudioContextConstructor) return

  audioContext ??= new AudioContextConstructor()
  const context = audioContext
  const { frequency, duration, type } = soundMap[kind]
  const oscillator = context.createOscillator()
  const gain = context.createGain()
  const now = context.currentTime

  oscillator.type = type
  oscillator.frequency.setValueAtTime(frequency, now)
  if (kind === 'reward') oscillator.frequency.exponentialRampToValueAtTime(frequency * 1.45, now + duration)
  if (kind === 'dice') oscillator.frequency.exponentialRampToValueAtTime(95, now + duration)

  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.055, now + 0.012)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

  oscillator.connect(gain)
  gain.connect(context.destination)
  oscillator.start(now)
  oscillator.stop(now + duration + 0.025)
}

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
}

