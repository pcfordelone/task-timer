import completeSound from '../../assets/timer-complete.mp3'
import { differenceInSeconds } from 'date-fns'
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { Cycle, NewCycleData, CycleContextProps } from './interfaces'
import useSound from 'use-sound'

export const CycleContext = createContext<CycleContextProps>(
  {} as CycleContextProps,
)

interface CycleProviderProps {
  children: ReactNode
}

export const CycleProvider = ({ children }: CycleProviderProps) => {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)
  const [withSoundOnFinish, setWithSoundOnFinish] = useState(false)

  const [completedCycle] = useSound(completeSound, { volume: 0.25 })

  const toggleSound = () => {
    setWithSoundOnFinish((state) => !state)
  }

  const handleCreateNewCycle = (data: NewCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setActiveCycleId(id)
    setCycles((state) => [...state, newCycle])
    setAmountSecondsPassed(0)
  }

  const handleInterruptCycle = () => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptionDate: new Date() }
        }
        return cycle
      }),
    )
    setActiveCycleId(null)
    setAmountSecondsPassed(0)
  }

  const handleCompletedCycle = useCallback(() => {
    if (withSoundOnFinish) completedCycle()

    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, completionDate: new Date() }
        }
        return cycle
      }),
    )

    setActiveCycleId(null)
  }, [activeCycleId, completedCycle, withSoundOnFinish])

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        setAmountSecondsPassed(differenceSeconds)

        if (differenceSeconds >= totalSeconds) {
          clearInterval(interval)
          handleCompletedCycle()
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId, handleCompletedCycle])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`
      return
    }

    document.title = `Ignite Timer`
  }, [minutes, seconds, activeCycle])

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        amountSecondsPassed,
        minutes,
        seconds,
        withSoundOnFinish,
        handleCreateNewCycle,
        handleInterruptCycle,
        handleCompletedCycle,
        toggleSound,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
