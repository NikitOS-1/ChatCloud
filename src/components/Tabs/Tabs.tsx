import * as React from 'react';
import Box from '@mui/material/Box';

import { Icon } from '../Icon';

import { TabsStyled, TabStyled } from './styled';
import { TabsInterface } from './types';

export const Tabs = ({ mainComponents, footerComponents }: TabsInterface) => {
  const [value, setValue] = React.useState(0);

  const renderMainComponents = mainComponents.map(({ id, component }) => (
    <Box key={id} hidden={value !== id}>
      {component}
    </Box>
  ));

  const renderTabsPanel = mainComponents.map(({ id }) => (
    <TabStyled key={id} icon={<Icon name="circle" />} />
  ));

  const renderFooterComponents = footerComponents.map(({ id, component }) => (
    <Box key={id} hidden={value !== id}>
      {component}
    </Box>
  ));

  return (
    <Box>
      {renderMainComponents}
      <TabsStyled
        value={value}
        onChange={(_, value) => setValue(value)}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {renderTabsPanel}
      </TabsStyled>
      {renderFooterComponents}
    </Box>
  );
};
