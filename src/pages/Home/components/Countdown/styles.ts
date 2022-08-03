import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 0.7rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 700px) {
    font-size: 3rem;
    line-height: 1rem;

    span {
      padding: 2rem 0.7rem;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 1rem;
  color: ${(props) => props.theme['green-500']};

  width: 0.5rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    padding: 2rem 0;
  }
`
