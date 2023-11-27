import styled, { css } from 'styled-components';

import { ButtonVariantType, PRIMARY_TYPE, SECONDARY_TYPE } from './types';

export const StyledButton = styled.button<{ variant: ButtonVariantType }>`
  padding-right: 94px;
  padding-left: 94px;
  height: 58px;
  display: flex;
  align-items: center;
  border: 0;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  svg {
    margin-left: 10px;
  }
  ${(props) =>
    props.variant === PRIMARY_TYPE &&
    css`
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
    `}

    ${(props) =>
      props.variant === SECONDARY_TYPE &&
      css`
        padding-right: 32px;
        padding-left: 32px;
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
      `}
  }}
`;
