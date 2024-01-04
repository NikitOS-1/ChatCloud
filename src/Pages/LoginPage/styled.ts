import styled from 'styled-components';

export const LoginPageStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const SliderContainerStyled = styled.div`
  display: flex;
  flex: 18 18;
  background-color: ${({ theme }) => theme.colors.primary.blue10};

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 12 12;
  padding: 50px 90px;

  @media screen and (max-width: 800px) {
    padding: 10px;
  }

  @media screen and (max-width: 1054px) {
    padding: 15px;
  }
`;

export const HeaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  P {
    margin: 1rem 0px;
  }
`;

export const UserInfoStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const FooterContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  Button {
    margin: 20px 0px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.primaryYellow};

    :hover {
      color: ${({ theme }) => theme.colors.hover.yellow};
    }
  }
`;
