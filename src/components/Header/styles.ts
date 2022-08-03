import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem 2rem;
  border-bottom: 3px solid ${(props) => props.theme['green-500']};

  div.wrapper {
    width: 70rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
      flex-wrap: wrap;
      width: 100%;
    }

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
          font-size: 1.8rem;
          color: ${(props) => props.theme['green-500']};
        }
      }

      img {
        height: 4rem;
      }

      @media only screen and (max-width: 700px) {
        div {
          gap: 0.1rem;

          h2 {
            font-weight: 700;
            font-size: 1.25rem;
          }
          p {
            font-size: 0.75rem;
          }
        }

        img {
          height: 4rem;
        }
      }
    }

    nav {
      display: flex;
      gap: 0.5rem;

      @media only screen and (max-width: 900px) {
        gap: 0.8rem;
      }

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

        @media only screen and (max-width: 900px) {
          width: 1.5rem;
          height: 1.5rem;
        }

        &:hover {
          border-bottom: 3px solid ${(props) => props.theme['green-500']};
        }

        &.active {
          color: ${(props) => props.theme['green-500']};
        }
      }
    }
  }
`
