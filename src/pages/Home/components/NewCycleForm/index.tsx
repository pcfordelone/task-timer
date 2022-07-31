import { useForm } from 'react-hook-form'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'
import * as zod from 'zod'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { Countdown } from '../Countdown'
import { zodResolver } from '@hookform/resolvers/zod'
import { StartCountdownButton, StopCountdownButton } from '../Countdown/styles'
import { HandPalm, Play, SpeakerHigh, SpeakerNone } from 'phosphor-react'
import { useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo deve ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo deve ser de no máximo 60 minutos.'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const NewCycleForm = () => {
  const {
    activeCycleId,
    activeCycle,
    withSoundOnFinish,
    handleInterruptCycle,
    handleCreateNewCycle,
    toggleSound,
  } = useCycle()

  const [isSoundAltVisible, setIsSoundAltVisible] = useState(false)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const interruptCycle = () => {
    reset()
    handleInterruptCycle()
  }

  const handleToogleSound = () => {
    toggleSound()
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <form onSubmit={handleSubmit(handleCreateNewCycle)}>
      <FormContainer>
        <label htmlFor="task">Vou trabalhar em:</label>
        <TaskInput
          id="task"
          type="text"
          list="task-suggestions"
          placeholder="Nome do seu projeto"
          {...register('task')}
          disabled={!!activeCycleId}
        />

        <datalist id="task-suggestions">
          <option value="Projeto 1"></option>
          <option value="Projeto 2"></option>
          <option value="Projeto 3"></option>
          <option value="Projeto 4"></option>
        </datalist>

        <label htmlFor="minutesAmount">Durante</label>
        <MinutesAmountInput
          id="minutesAmount"
          type="number"
          placeholder="00"
          min={1}
          max={60}
          {...register('minutesAmount', { valueAsNumber: true })}
          disabled={!!activeCycleId}
        />

        <span>minutos.</span>

        <button
          type="button"
          onClick={handleToogleSound}
          onMouseOver={() => setIsSoundAltVisible(true)}
          onMouseOut={() => setIsSoundAltVisible(false)}
        >
          {withSoundOnFinish ? (
            <SpeakerHigh size={24} />
          ) : (
            <SpeakerNone size={24} />
          )}
          {}
          {isSoundAltVisible && (
            <span>
              {withSoundOnFinish ? 'Alarme ligado' : 'Alarme desligado'}
            </span>
          )}
        </button>
      </FormContainer>
      <Countdown />

      {activeCycle ? (
        <StopCountdownButton type="button" onClick={interruptCycle}>
          <HandPalm size={24} /> Interromper
        </StopCountdownButton>
      ) : (
        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play size={24} /> Começar
        </StartCountdownButton>
      )}
    </form>
  )
}
