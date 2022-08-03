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
  withSoundOnFinish: boolean
  createNewCycle: (data: NewCycleData) => void
  interruptCycle: () => void
  completeCycle: () => void
  deleteCycle: (id: string) => void
  toggleSound: () => void
  setSecondsPassed: (differenceSeconds: number) => void
}
