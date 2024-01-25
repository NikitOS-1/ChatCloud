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

export const ChatContendStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderContentStyled = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutralColors[150]};
`;

export const MainContentStyled = styled.div``;

export const FooterContentStyled = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};

  input {
    width: 100%;
    border-radius: 10px;
    padding: 16px 24px;
    border: none;
    font-family: ${({ theme }) => theme.fonts.CeraProRegular};
    font-size: ${({ theme }) => theme.fontSizes.Medium16};
    color: ${({ theme }) => theme.colors.neutralColors[500]};

    &:focus-visible {
      outline: ${({ theme }) => theme.colors.primary.primaryYellow} auto 1px;
    }
  }
`;

export const ButtonSendStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: inherit;
  border: none;
  width: 50px;
  height: 50px;
  margin: 17px;

  :hover {
    cursor: pointer;
  }
`;
