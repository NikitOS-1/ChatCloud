import { Tab, Tabs } from '@mui/material';
import styled from 'styled-components';

export const TabsStyled = styled(Tabs)`
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
`;

export const TabStyled = styled(Tab)`
  min-width: 15px;
  padding: 0px;
`;
