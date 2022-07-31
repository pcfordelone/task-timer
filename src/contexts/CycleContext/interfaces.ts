export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptionDate?: Date
  completionDate?: Date
}

export interface NewCycleData {
  task: string
  minutesAmount: number
}

export interface CycleContextProps {
  cycles: Cycle[]
  activeCycleId: string | null
  activeCycle: Cycle | undefined
  amountSecondsPassed: number
  minutes: string
  seconds: string
  withSoundOnFinish: boolean
  handleCreateNewCycle: (data: NewCycleData) => void
  handleInterruptCycle: () => void
  handleCompletedCycle: () => void
  toggleSound: () => void
}
