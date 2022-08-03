import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-800']};

  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    max-width: 100%;
    height: 100vh;
    margin: 0rem auto;
  }
`
