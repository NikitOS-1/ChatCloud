import Button from '@mui/material/Button';
import styled, { css } from 'styled-components';

import {
  ButtonVariantType,
  CONTAINED_TYPE,
  OUTLINED_TYPE,
  TEXT_TYPE,
} from './types';

export const StyledButton = styled(Button)<{ variant: ButtonVariantType }>`
  &.button {
    padding: 16px 32px;
    height: 58px;
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
    border-radius: ${({ theme }) => theme.radius.button};
    box-shadow: none;
    text-shadow: none;
    text-transform: none;

    ${(props) =>
      props.variant === CONTAINED_TYPE &&
      css`
        background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
        color: ${({ theme }) => theme.colors.neutralColors.white100};

        &:hover {
          background-color: ${({ theme }) => theme.colors.hover.yellow};
        }

        &:disabled {
          background-color: ${({ theme }) => theme.colors.neutralColors[200]};
          color: ${({ theme }) => theme.colors.neutralColors.white100};
        }
      `}

    ${(props) =>
      props.variant === OUTLINED_TYPE &&
      css`
        padding: 16px;
        border: 2px solid ${({ theme }) => theme.colors.primary.primaryYellow};
        border-radius: ${({ theme }) => theme.radius.button};
        color: ${({ theme }) => theme.colors.primary.primaryYellow};
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};

        &:hover {
          border: 2px solid ${({ theme }) => theme.colors.primary.primaryYellow};
          border-color: ${({ theme }) => theme.colors.hover.yellow};
          background-color: ${({ theme }) =>
            theme.colors.neutralColors.bgWhite};
          color: ${({ theme }) => theme.colors.hover.yellow};
        }

        &:disabled {
          border-color: ${({ theme }) => theme.colors.neutralColors[200]};
          color: ${({ theme }) => theme.colors.neutralColors[200]};
        }
      `}

  ${(props) =>
      props.variant === TEXT_TYPE &&
      css`
        padding: 16px;
        color: ${({ theme }) => theme.colors.primary.primaryYellow};

        &:hover {
          background-color: ${({ theme }) =>
            theme.colors.neutralColors.bgWhite};
          color: ${({ theme }) => theme.colors.hover.yellow};
        }
      `}
  }
`;
