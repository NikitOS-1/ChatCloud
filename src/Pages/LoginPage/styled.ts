import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const SliderContainer = styled.div`
  flex: 16 16;
  background-color: red;
`;

export const FormContainer = styled.div`
  flex: 14 14;
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 48px;
    color: ${({ theme }) => theme.colors.neutralColors[300]};
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium16};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.primaryYellow};
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;

    p {
      margin-top: 32px;
      padding: 16px;
      font-size: ${({ theme }) => theme.fontSizes.Medium12};
    }
  }
`;

export const LoginPageStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const SliderContainerStyled = styled.div`
  display: flex;
  flex: 16 16;
  background-color: ${({ theme }) => theme.colors.primary.blue10};
`;

export const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 14 14;
  padding: 50px 90px;
`;
