import styled from 'styled-components'

export const ToolbarContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    @media only screen and (max-width: 900px) {
      flex-direction: column;
    }

    background: transparent;
    color: ${(props) => props.theme['gray-100']};
    border: 2px solid ${(props) => props.theme['gray-400']};
    border-radius: 8px;
    padding: 0.3rem 0.7rem;
    cursor: pointer;

    transition: border 0.3s;

    &:hover {
      border: 2px solid ${(props) => props.theme['green-500']};
    }

    &:disabled {
      border: 2px solid ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-500']};
      cursor: not-allowed;
    }
  }
`
