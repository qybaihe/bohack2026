import { useState } from 'react'
import './App.css'
import { GameShell } from './components/GameShell'
import {
  createStoryTitle,
  diceFaces,
  preferenceQuestions,
  routeNodes,
  type DialogueChoice,
  type PreferenceKey,
} from './data/beijingGame'
import { defaultSelectedCardId } from './data/gameCards'
import { BoardScreen } from './screens/BoardScreen'
import { CardAlbumScreen } from './screens/CardAlbumScreen'
import { EntryScreen } from './screens/EntryScreen'
import { FinaleScreen } from './screens/FinaleScreen'
import { MissionScreen } from './screens/MissionScreen'
import { PhotoTriggerScreen } from './screens/PhotoTriggerScreen'
import { SetupScreen } from './screens/SetupScreen'
import { TheaterScreen } from './screens/TheaterScreen'
import type { ElementMap, PhotoMap, Preferences, Screen } from './types'
import { playUiSound } from './utils/sound'

const defaultPreferences = preferenceQuestions.reduce((acc, question) => {
  acc[question.key] = question.options[0].value
  return acc
}, {} as Preferences)

function App() {
  const [screen, setScreen] = useState<Screen>('entry')
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences)
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0)
  const [completedNodeIds, setCompletedNodeIds] = useState<string[]>([])
  const [collectedCardIds, setCollectedCardIds] = useState<string[]>([])
  const [selectedElements, setSelectedElements] = useState<ElementMap>({})
  const [photoNames, setPhotoNames] = useState<PhotoMap>({})
  const [activeDiceId, setActiveDiceId] = useState(diceFaces[1].id)
  const [activeChoice, setActiveChoice] = useState<DialogueChoice | null>(null)
  const [selectedCardId, setSelectedCardId] = useState(defaultSelectedCardId)
  const [memoryLine, setMemoryLine] = useState('我把今天的脚步留在北京的轴线上。')

  const currentNode = routeNodes[currentNodeIndex]
  const activeDice = diceFaces.find((face) => face.id === activeDiceId) ?? diceFaces[1]
  const progress = screen === 'finale' ? 1 : completedNodeIds.length / routeNodes.length
  const storyTitle = createStoryTitle(collectedCardIds)

  const navigate = (nextScreen: Screen) => {
    playUiSound('nav')
    setScreen(nextScreen)
  }

  const setPreference = (key: PreferenceKey, value: string) => {
    playUiSound('select')
    setPreferences((current) => ({ ...current, [key]: value }))
  }

  const selectElement = (nodeId: string, element: string) => {
    playUiSound('select')
    setSelectedElements((current) => {
      const existing = current[nodeId] ?? []
      const next = existing.includes(element)
        ? existing.filter((item) => item !== element)
        : [...existing, element]
      return { ...current, [nodeId]: next }
    })
  }

  const rollDice = () => {
    playUiSound('dice')
    const next = diceFaces[Math.floor(Math.random() * diceFaces.length)]
    setActiveDiceId(next.id)
    setActiveChoice(null)
    setScreen('theater')
  }

  const completeMission = () => {
    playUiSound('reward')
    const nodeElements = selectedElements[currentNode.id] ?? []
    const rewardIds = [...currentNode.rewardCardIds]

    if (
      currentNode.optionalCardIds?.includes('gate') &&
      nodeElements.some((element) => ['门楼', '城门'].includes(element))
    ) {
      rewardIds.push('gate')
    }

    setCollectedCardIds((current) => Array.from(new Set([...current, ...rewardIds])))
    setCompletedNodeIds((current) => Array.from(new Set([...current, currentNode.id])))

    if (currentNodeIndex >= routeNodes.length - 1) {
      setScreen('finale')
      return
    }

    setCurrentNodeIndex((index) => index + 1)
    setScreen('board')
  }

  const openCardAlbum = (cardId: string) => {
    playUiSound('select')
    setSelectedCardId(cardId)
    setScreen('album')
  }

  const resetGame = () => {
    playUiSound('reset')
    setScreen('entry')
    setPreferences(defaultPreferences)
    setCurrentNodeIndex(0)
    setCompletedNodeIds([])
    setCollectedCardIds([])
    setSelectedElements({})
    setPhotoNames({})
    setActiveDiceId(diceFaces[1].id)
    setActiveChoice(null)
    setSelectedCardId(defaultSelectedCardId)
    setMemoryLine('我把今天的脚步留在北京的轴线上。')
  }

  return (
    <GameShell screen={screen} progress={progress} onNavigate={navigate} onReset={resetGame}>
      {screen === 'entry' && <EntryScreen onStart={() => navigate('setup')} />}
      {screen === 'setup' && (
        <SetupScreen preferences={preferences} onChange={setPreference} onContinue={() => navigate('board')} />
      )}
      {screen === 'board' && (
        <BoardScreen
          currentNode={currentNode}
          completedNodeIds={completedNodeIds}
          collectedCardIds={collectedCardIds}
          onOpenNode={() => navigate('photo')}
          onFinale={() => navigate('finale')}
          onOpenCards={openCardAlbum}
        />
      )}
      {screen === 'photo' && (
        <PhotoTriggerScreen
          node={currentNode}
          selectedElements={selectedElements[currentNode.id] ?? []}
          photoName={photoNames[currentNode.id]}
          onBack={() => navigate('board')}
          onPhoto={(fileName) =>
            setPhotoNames((current) => ({ ...current, [currentNode.id]: fileName }))
          }
          onSelectElement={(element) => selectElement(currentNode.id, element)}
          onRoll={rollDice}
        />
      )}
      {screen === 'theater' && (
        <TheaterScreen
          node={currentNode}
          diceFace={activeDice}
          selectedElements={selectedElements[currentNode.id] ?? []}
          activeChoice={activeChoice}
          onBack={() => navigate('photo')}
          onChoice={(choice) => {
            playUiSound('select')
            setActiveChoice(choice)
          }}
          onMission={() => navigate('mission')}
        />
      )}
      {screen === 'mission' && (
        <MissionScreen
          node={currentNode}
          memoryLine={memoryLine}
          onBack={() => navigate('theater')}
          onMemoryChange={setMemoryLine}
          onComplete={completeMission}
        />
      )}
      {screen === 'album' && (
        <CardAlbumScreen
          collectedCardIds={collectedCardIds}
          selectedCardId={selectedCardId}
          onSelectCard={setSelectedCardId}
        />
      )}
      {screen === 'finale' && (
        <FinaleScreen
          title={storyTitle}
          memoryLine={memoryLine}
          preferences={preferences}
          collectedCardIds={collectedCardIds}
          completedNodeIds={completedNodeIds}
          onReset={resetGame}
        />
      )}
    </GameShell>
  )
}

export default App
