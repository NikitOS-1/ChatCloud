import styled from 'styled-components';

export const LoginPageStyled = styled.div`
  display: flex;
  height: 100%;
`;

export const SliderContainerStyled = styled.div`
  display: flex;
  flex: 16 16;
  background-color: ${({ theme }) => theme.colors.primary.blue10};

  @media (max-width: 800px) {
    display: none;
  }
`;

export const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 12 12;
  padding: 50px 90px;
`;
