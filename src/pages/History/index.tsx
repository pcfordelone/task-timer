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
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {cycles &&
              cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount}</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.interruptionDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {cycle.completionDate && (
                      <Status statusColor="green">Finalizado</Status>
                    )}
                    {!cycle.completionDate && !cycle.interruptionDate && (
                      <Status statusColor="yellow">Em andamento</Status>
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
