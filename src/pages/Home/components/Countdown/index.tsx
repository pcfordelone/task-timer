import { CountdownContainer, Separator } from './styles'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'

export const Countdown = () => {
  const { minutes, seconds } = useCycle()

  return (
    <CountdownContainer>
      <span>{minutes ? minutes[0] : 0}</span>
      <span>{minutes ? minutes[1] : 0}</span>
      <Separator>:</Separator>
      <span>{seconds ? seconds[0] : 0}</span>
      <span>{seconds ? seconds[1] : 0}</span>
    </CountdownContainer>
  )
}
