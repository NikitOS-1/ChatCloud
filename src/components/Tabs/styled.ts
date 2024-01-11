import { Badge, Box, Tab, Tabs } from '@mui/material';
import styled, { css } from 'styled-components';

import { LINE_TABS, POINTER_TABS } from './types';

export const BoxStyled = styled(Box)``;

export const TabsStyled = styled(Tabs)<{ $variants: string }>`
  ${(props) =>
    props.$variants === POINTER_TABS &&
    css`
      min-height: 15px;

      .MuiTabs-flexContainer {
        justify-content: center;
      }

      .MuiButtonBase-root {
        min-height: 15px;
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.neutralColors[200]};
      }

      .Mui-selected {
        color: ${({ theme }) => theme.colors.neutralColors[300]};
      }
    `}

  ${(props) =>
    props.$variants === LINE_TABS &&
    css`
      .MuiTabs-flexContainer {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .MuiButtonBase-root {
        padding: 25px 15px;
        text-transform: capitalize;
        color: ${({ theme }) => theme.colors.neutralColors[500]};
        font-family: ${({ theme }) => theme.fonts.CeraProMedium};
      }

      .Mui-selected {
        color: ${({ theme }) => theme.colors.neutralColors[900]};
      }

      .MuiTabs-indicator {
        background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
      }
    `}
`;

export const TabStyled = styled(Tab)<{
  $withpointer: boolean;
  $variants: string;
}>`
  ${(props) =>
    props.$variants === POINTER_TABS &&
    css`
      padding: 0px;
      min-width: 15px;
    `}

  ${(props) => props.$variants === LINE_TABS && css``}

  cursor: ${({ $withpointer }) => ($withpointer ? 'pointer' : 'default')};
`;

export const BadgeStyled = styled(Badge)`
  &.MuiBadge-root {
    display: block;
    margin-left: 20px;
  }

  & .MuiBadge-badge {
    color: ${({ theme }) => theme.colors.neutralColors[100]};
    background-color: ${({ theme }) => theme.colors.primary.primaryYellow};
  }
`;

export const ButtonTabsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
