import Button from "@mui/material/Button";
import styled, { css } from "styled-components";

import { MarginInterface } from "../../types/styles";

import {
  ButtonVariantType,
  CONTAINED_TYPE,
  OUTLINED_TYPE,
  TEXT_TYPE,
} from "./types";

interface StyledButtonInterface extends MarginInterface {
  variant: ButtonVariantType;
}

export const StyledButton = styled(Button)<StyledButtonInterface>`
  padding: 16px 32px;
  height: 58px;
  font-family: ${({ theme }) => theme.fonts.CeraProMedium};
  font-size: ${({ theme }) => theme.fontSizes.Medium20};
  border-radius: ${({ theme }) => theme.radius.button};
  text-transform: none;
  box-shadow: none;
  margin-top: ${({ margintop }) => margintop};
  margin-bottom: ${({ marginbottom }) => marginbottom};
  margin-left: ${({ marginleft }) => marginleft};
  margin-right: ${({ marginright }) => marginright};

  &:hover {
    box-shadow: none;
  }

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
      border: 2px solid ${({ theme }) => theme.colors.primary.primaryYellow};
      color: ${({ theme }) => theme.colors.primary.primaryYellow};
      background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};

      &:hover {
        border-color: ${({ theme }) => theme.colors.hover.yellow};
        color: ${({ theme }) => theme.colors.hover.yellow};
      }

      &:disabled {
        color: ${({ theme }) => theme.colors.neutralColors[200]};
        border-width: 2px;
        border-color: currentColor;
      }
    `}

  ${(props) =>
    props.variant === TEXT_TYPE &&
    css`
      color: ${({ theme }) => theme.colors.primary.primaryYellow};

      &:hover {
        background-color: ${({ theme }) => theme.colors.neutralColors.bgWhite};
        color: ${({ theme }) => theme.colors.hover.yellow};
      }
    `}
`;
