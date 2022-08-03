import { createContext } from 'react'
import { CycleContextProps } from './interfaces'

export const CycleContext = createContext<CycleContextProps>(
  {} as CycleContextProps,
)
