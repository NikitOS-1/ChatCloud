import styled from 'styled-components';

export const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  max-width: 520px;
`;

export const InterestItem = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.radius.button};
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  font-size: ${({ theme }) => theme.fontSizes.Medium20};

  background-color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.colors.primary.primaryBlue
      : ({ theme }) => theme.colors.neutralColors[100]};

  color: ${(props) =>
    props.selected
      ? ({ theme }) => theme.colors.neutralColors.bgWhite
      : ({ theme }) => theme.colors.neutralColors.black900};
`;
