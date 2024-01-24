import styled from 'styled-components';

export const TabItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralColors[150]};
  }
`;
export const TabItemGroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralColors[150]};
  }
`;

export const TitleStyle = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const NameStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  font-size: ${({ theme }) => theme.fontSizes.Medium16};
  color: ${({ theme }) => theme.colors.neutralColors[900]};
`;

export const DescriptionStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium16};
  color: ${({ theme }) => theme.colors.neutralColors[500]};
`;

export const LogoGroup = styled.div`
  width: 56px;
  height: 56px;
  background-color: #c7b1f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.neutralColors[900]};
`;
