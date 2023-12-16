import * as React from 'react';
import Box from '@mui/material/Box';

import { Icon } from '../Icon';

import { TabsStyled, TabStyled } from './styled';

interface TabsProps {
  children: React.ReactNode;
}

export const Tabs = ({ children }: TabsProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box>{children}</Box>
      <Box>
        <TabsStyled
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          <TabStyled icon={<Icon name="circle" />} />
          <TabStyled icon={<Icon name="circle" />} />
        </TabsStyled>
      </Box>
      {value === 1 ? (
        <p>
          By proceeding you agree to our Privacy Policy and Terms of Service
        </p>
      ) : null}
    </Box>
  );
};
