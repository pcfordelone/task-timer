import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-weight: bold;
  flex-wrap: wrap;

  button {
    display: flex;
    align-items: center;
    position: relative;

    background: transparent;
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 8px;
    padding: 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    cursor: pointer;

    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme['gray-300']};
    }
    span {
      position: absolute;
      top: -2.5rem;
      right: -3.5rem;
      width: 150px;
      background: #000;
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &:placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
