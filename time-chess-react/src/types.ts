import type { PreferenceKey } from './data/beijingGame'

export type Screen =
  | 'entry'
  | 'setup'
  | 'board'
  | 'photo'
  | 'theater'
  | 'mission'
  | 'album'
  | 'finale'

export type Preferences = Record<PreferenceKey, string>
export type ElementMap = Record<string, string[]>
export type PhotoMap = Record<string, string>

