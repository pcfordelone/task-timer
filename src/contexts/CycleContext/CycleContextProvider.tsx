import completeSound from '../../assets/timer-complete.mp3'

import { ReactNode, useEffect, useReducer, useState } from 'react'
import { Cycle, NewCycleData } from './interfaces'
import useSound from 'use-sound'
import { CycleContext } from '.'
import { CycleActionType, useCycleReducer } from './CycleReducer'

interface CycleProviderProps {
  children: ReactNode
}

export const CycleProvider = ({ children }: CycleProviderProps) => {
  const [cyclesState, dispatch] = useReducer(
    useCycleReducer,
    {
      cycles: [],
      activeCycleId: null,
      amountSecondsPassed: 0,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        '@ignite-timer:cycles-1.0.0',
      )

      if (storedStateAsJSON && storedStateAsJSON !== '[]') {
        const parsedJSON = JSON.parse(storedStateAsJSON)
        return parsedJSON
      }

      return {
        cycles: [],
        activeCycleId: null,
        amountSecondsPassed: 0,
      }
    },
  )

  const { cycles, activeCycleId, amountSecondsPassed } = cyclesState

  const [withSoundOnFinish, setWithSoundOnFinish] = useState(false)
  const [completedCycleSound] = useSound(completeSound, { volume: 0.25 })

  const activeCycle = cyclesState.cycles.find(
    (cycle) => cycle.id === cyclesState.activeCycleId,
  )

  const toggleSound = () => {
    setWithSoundOnFinish((state) => !state)
  }

  const createNewCycle = (data: NewCycleData) => {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({ type: CycleActionType.CREATE_NEW_CYCLE, payload: newCycle })
  }

  const setSecondsPassed = (differenceSeconds: number) => {
    dispatch({
      type: CycleActionType.UPDATE_SECONDS_PASSED,
      payload: differenceSeconds,
    })
  }

  const interruptCycle = () => {
    dispatch({
      type: CycleActionType.INTERRUPT_CYCLE,
    })
  }

  const completeCycle = () => {
    if (withSoundOnFinish) completedCycleSound()

    dispatch({
      type: CycleActionType.COMPLETE_CYCLE,
    })
  }

  const deleteCycle = (id: string) => {
    dispatch({
      type: CycleActionType.DELETE_CYCLE,
      payload: id,
    })
  }

  useEffect(() => {
    localStorage.setItem(
      '@ignite-timer:cycles-1.0.0',
      JSON.stringify(cyclesState),
    )
  }, [cyclesState])

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycleId,
        activeCycle,
        amountSecondsPassed,
        withSoundOnFinish,
        setSecondsPassed,
        createNewCycle,
        interruptCycle,
        completeCycle,
        deleteCycle,
        toggleSound,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
