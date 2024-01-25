import styled from 'styled-components';

export const WelcomePageStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.CarroisGothicSCRegular};
    font-size: ${({ theme }) => theme.fontSizes.Regular32};
    margin: 25px 0px 15px 0px;

    @media (max-width: 900px) {
      font-size: ${({ theme }) => theme.fontSizes.Regular24};
    }
  }

  p,
  a {
    color: ${({ theme }) => theme.colors.neutralColors[500]};
    font-family: ${({ theme }) => theme.fonts.CeraProRegular};
    font-size: ${({ theme }) => theme.fontSizes.Medium18};
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media (max-width: 900px) {
      font-size: ${({ theme }) => theme.fontSizes.Medium14};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.primaryYellow};

    &:hover {
      color: ${({ theme }) => theme.colors.pressed.yellow};
    }
    :visited {
      text-decoration: none;
    }
  }

  img {
    width: 65%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
