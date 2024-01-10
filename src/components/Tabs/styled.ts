import { Box, Tab, Tabs } from '@mui/material';
import styled, { css } from 'styled-components';

import { LINE_TABS, POINTER_TABS } from './types';

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
        min-height: 15px;
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.neutralColors[200]};
      }

      .Mui-selected {
        color: ${({ theme }) => theme.colors.neutralColors[300]};
      }
    `}

  ${(props) => props.$variants === LINE_TABS && css``}
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

export const BoxStyled = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
