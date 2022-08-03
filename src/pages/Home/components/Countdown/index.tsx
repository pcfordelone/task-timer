import { CountdownContainer, Separator } from './styles'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'
import { useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'

export const Countdown = () => {
  const { activeCycle, amountSecondsPassed, completeCycle, setSecondsPassed } =
    useCycle()

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
          new Date(activeCycle.startDate),
        )
        setSecondsPassed(differenceSeconds)

        if (differenceSeconds >= totalSeconds) {
          clearInterval(interval)
          completeCycle()
        }
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, completeCycle, setSecondsPassed])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds} - ${activeCycle.task}`
      return
    }

    document.title = `Task Timer`
  }, [minutes, seconds, activeCycle])

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
