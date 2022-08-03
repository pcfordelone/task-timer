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
      <label htmlFor="task">I will work on:</label>
      <TaskInput
        id="task"
        type="text"
        list="task-suggestions"
        placeholder="Name of my project"
        {...register('task')}
        disabled={!!activeCycleId}
      />

      <datalist id="task-suggestions"></datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        id="minutesAmount"
        type="number"
        placeholder="00"
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
        disabled={!!activeCycleId}
      />

      <span>minutes.</span>

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
          <span>{withSoundOnFinish ? 'Alarm On' : 'Alarm Off'}</span>
        )}
      </button>
    </FormContainer>
  )
}
