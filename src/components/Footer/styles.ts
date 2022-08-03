import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100vmax;
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;

  .container {
    width: 70rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

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
