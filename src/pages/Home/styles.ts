import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 70rem;
  margin: 0 auto;

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    padding: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  a.buyMeACoffee {
    background: transparent;
    border: 3px solid ${(props) => props.theme['gray-600']};
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    color: ${(props) => props.theme['gray-300']};
    margin-top: 1rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: border-color 0.3s;

    &:hover {
      border-color: ${(props) => props.theme['green-500']};
    }
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-weight: bold;
  cursor: pointer;

  background: ${(props) => props.theme['green-500']};
  color: #fff;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['green-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
