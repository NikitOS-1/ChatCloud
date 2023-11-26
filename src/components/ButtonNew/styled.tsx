import styled, { css } from 'styled-components';

import { ButtonType, PRIMARY_TYPE, SECONDARY_TYPE } from './types';

export const StyledButton = styled.button<{ variant: ButtonType }>`
  padding-right: 94px;
  padding-left: 94px;
  height: 58px;
  display: flex;
  align-items: center;
  border: 0;
  font-family: "CeraProMedium";
  font-size: 20px;
  cursor: pointer;

  ${({ variant }) => {
    if (variant === PRIMARY_TYPE) {
      return css`
        background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
        border-radius: ${({ theme }) => theme.radius.button};
        color: ${({ theme }) => theme.colors.neutralColors.white100};

        &:hover {
          background-color: ${({ theme }) => theme.colors.hover.yellow};
        }
        &:active {
          background-color: ${({ theme }) => theme.colors.pressed.yellow};
        }
        &:disabled {
          background-color: ${({ theme }) => theme.colors.neutralColors[200]};
        }
      `;
    }

    if (variant === SECONDARY_TYPE) {
      return css`
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        border-radius: ${({ theme }) => theme.radius.button};
        color: ${({ theme }) => theme.colors.primary.primaryYellow};
        border: 2px solid ${({ theme }) => theme.colors.primary.primaryYellow};

        &:hover {
          color: ${({ theme }) => theme.colors.hover.yellow};
          border-color: ${({ theme }) => theme.colors.hover.yellow};
        }
        &:active {
          color: ${({ theme }) => theme.colors.pressed.yellow};
          border-color: ${({ theme }) => theme.colors.pressed.yellow};
        }
        &:disabled {
          border-color: ${({ theme }) => theme.colors.neutralColors[200]};
          color: ${({ theme }) => theme.colors.neutralColors[200]};
        }
      `;
    }
  }}
`;

export const LabelWrapper = styled.span`
  margin-right: 8px;
`;
