import { SpeakerHigh, SpeakerNone } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useCycle } from '../../../../contexts/CycleContext/useCycleContext'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export const NewCycleForm = () => {
  const { activeCycleId, withSoundOnFinish, toggleSound } = useCycle()

  const [isSoundAltVisible, setIsSoundAltVisible] = useState(false)

  const { register } = useFormContext()

  const handleToogleSound = () => {
    toggleSound()
  }

  return (
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
  )
}
