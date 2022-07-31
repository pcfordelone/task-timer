import { useContext } from 'react'
import { CycleContext } from '.'

export const useCycle = () => {
  const context = useContext(CycleContext)

  return context
}
