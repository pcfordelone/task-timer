import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-800']};

  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    height: 98vh;
    max-width: 95%;
    margin: 0.5rem auto;
    padding: 1rem;
  }
`
