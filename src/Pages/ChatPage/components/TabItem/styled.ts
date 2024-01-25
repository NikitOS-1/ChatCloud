import styled, { css } from 'styled-components';

export const TabItemStyled = styled.div<{ $nohover: boolean }>`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.fontSizes.Medium16};

  ${({ $nohover }) =>
    $nohover
      ? ''
      : css`
          &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.neutralColors[150]};
          }
        `}
`;

export const TabItemGroupStyled = styled.div<{ $nohover: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.fontSizes.Medium16};

  ${({ $nohover }) =>
    $nohover
      ? ''
      : css`
          &:hover {
            cursor: pointer;
            background-color: ${({ theme }) => theme.colors.neutralColors[150]};
          }
        `}
`;

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleStyle = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const NameStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  color: ${({ theme }) => theme.colors.neutralColors[900]};
`;

export const DescriptionStyled = styled.p`
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
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
