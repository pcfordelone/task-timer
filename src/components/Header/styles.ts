import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;

      h2 {
        font-weight: 700;
        font-size: 1.5rem;
      }
    }

    img {
      height: 4rem;
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a,
    button {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &:active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
