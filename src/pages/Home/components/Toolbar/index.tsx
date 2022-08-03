import { Timer } from 'phosphor-react'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'
import { ToolbarContainer } from './styles'

export const ToolBar = () => {
  const { activeCycleId, createNewCycle } = useCycle()

  const handleNewCycle = (type: string, minutes: number) => {
    createNewCycle({
      task: type,
      minutesAmount: minutes,
    })
  }

  return (
    <ToolbarContainer>
      <button
        disabled={!!activeCycleId}
        onClick={() => handleNewCycle('Break', 5)}
      >
        <Timer />
        Take a break
      </button>
      <button
        disabled={!!activeCycleId}
        onClick={() => handleNewCycle('Big break', 15)}
      >
        <Timer />
        Take a big break
      </button>
      <button
        disabled={!!activeCycleId}
        onClick={() => handleNewCycle('Generic Task', 25)}
      >
        <Timer />
        25 minutes generic task
      </button>
    </ToolbarContainer>
  )
}
