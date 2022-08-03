import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem 2rem;
  border-top: 3px solid ${(props) => props.theme['green-500']};

  .container {
    width: 70rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
      flex-wrap: wrap;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    p > strong {
      color: ${(props) => props.theme['green-500']};
    }

    div {
      display: flex;
      gap: 0.4rem;

      a {
        color: ${(props) => props.theme['gray-100']};

        transition: color 0.3s;

        :hover {
          color: ${(props) => props.theme['green-500']};
        }
      }
    }
  }
`
