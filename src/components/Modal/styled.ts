import styled from 'styled-components';

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ModalContainerStyled = styled.div`
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
  background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
  border-radius: ${({ theme }) => theme.radius.text};
  max-width: 430px;
  max-height: 220px;
  min-width: 290px;
  min-height: 150px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-direction: column;
  padding: 24px 32px;
`;

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  span {
    cursor: pointer;
  }
`;

export const MainStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  H1 {
    margin-bottom: 10px;
  }
`;

export const FooterStyled = styled.div`
  display: flex;
  justify-content: flex-end;
`;
