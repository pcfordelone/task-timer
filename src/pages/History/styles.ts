import styled from 'styled-components'

export const HistoryContainer = styled.main`
  width: 70rem;
  margin: 0 auto;

  flex: 1;
  padding: 3rem 5rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;

        @media only screen and (max-width: 700px) {
          width: auto;
        }
      }

      &:last-child {
        padding-right: 1.5rem;
      }

      button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;

        transition: filter 0.3s;

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`
const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};
    border-radius: 50%;
  }
`
