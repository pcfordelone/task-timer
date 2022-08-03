import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 1rem 2.5rem;

  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 900px) {
    height: 98vh;
    max-width: 95%;
    margin: 0.5rem auto;
    padding: 1rem;
  }
`
