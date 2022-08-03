import React from 'react'
import { useCycle } from '../../contexts/CycleContext/useCycleContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { HistoryContainer, HistoryList, Status } from './styles'
import { Trash } from 'phosphor-react'

export const History: React.FC = () => {
  const { cycles, deleteCycle } = useCycle()

  return (
    <HistoryContainer>
      <h1>My History</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start at</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cycles &&
              cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} min</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.interruptionDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}
                    {cycle.completionDate && (
                      <Status statusColor="green">Completed</Status>
                    )}
                    {!cycle.completionDate && !cycle.interruptionDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                  <td>
                    <button onClick={() => deleteCycle(cycle.id)}>
                      <Trash size={24} />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
