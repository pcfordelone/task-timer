import { CountdownContainer, Separator } from './styles'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'

export const Countdown = () => {
  const { minutes, seconds } = useCycle()

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
