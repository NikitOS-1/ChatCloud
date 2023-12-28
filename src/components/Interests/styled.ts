import { Chip } from '@mui/material';
import styled from 'styled-components';

export const InterestsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 495px;

  @media (max-width: 800px) {
    gap: 16px;
    width: 311px;
  }
`;

export const InterestItem = styled(Chip)<{ selected: boolean }>`
  width: max-content;
  height: max-content;
  border-radius: ${({ theme }) => theme.radius.text};
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

  &.MuiChip-root:hover {
    background-color: ${(props) =>
      props.selected
        ? ({ theme }) => theme.colors.hover.blue
        : ({ theme }) => theme.colors.neutralColors[150]};
  }

  .MuiChip-label {
    padding: 16px;
  }

  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium16};

    .MuiChip-label {
      padding: 10px;
    }
  }
`;
