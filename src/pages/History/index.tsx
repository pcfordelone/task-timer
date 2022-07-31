import React from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'

export const History: React.FC = () => {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status>Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Conserto de débitos técnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 1 mês</td>
              <td>
                <Status>Em andamento</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
