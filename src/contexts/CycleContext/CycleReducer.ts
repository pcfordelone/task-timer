import { Reducer } from 'react'
import { Cycle } from './interfaces'

export interface CycleReducerState {
  cycles: Cycle[]
  activeCycleId: string | null
  amountSecondsPassed: number
}

export enum CycleActionType {
  CREATE_NEW_CYCLE,
  INTERRUPT_CYCLE,
  COMPLETE_CYCLE,
  UPDATE_SECONDS_PASSED,
}

export type CreateNewCycle = {
  type: CycleActionType.CREATE_NEW_CYCLE
  payload: Cycle
}
export type InterruptAndCompleteCycle = {
  type: CycleActionType.INTERRUPT_CYCLE | CycleActionType.COMPLETE_CYCLE
}
export type UpdateSecondsPassed = {
  type: CycleActionType.UPDATE_SECONDS_PASSED
  payload: number
}

export type ReducerAction =
  | CreateNewCycle
  | InterruptAndCompleteCycle
  | UpdateSecondsPassed

export const useCycleReducer: Reducer<CycleReducerState, ReducerAction> = (
  state: CycleReducerState,
  action: ReducerAction,
) => {
  switch (action.type) {
    case CycleActionType.CREATE_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload],
        activeCycleId: action.payload.id,
        amountSecondsPassed: 0,
      }
    }
    case CycleActionType.INTERRUPT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptionDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
        amountSecondsPassed: 0,
      }
    }
    case CycleActionType.COMPLETE_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, completionDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
      }
    }
    case CycleActionType.UPDATE_SECONDS_PASSED: {
      return {
        ...state,
        amountSecondsPassed: action.payload,
      }
    }
    default:
      return state
  }
}
