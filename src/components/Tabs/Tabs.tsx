import * as React from 'react';
import Box from '@mui/material/Box';

import { Icon } from '../Icon';

import { TabsStyled,TabStyled } from './styled';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '500px' }}>
      <CustomTabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla,
        repellendus dolorum, eveniet fuga possimus velit aspernatur cumque animi
        dicta molestiae veniam expedita voluptates explicabo omnis facere odio
        quia corrupti!
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
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
    </Box>
  );
};
