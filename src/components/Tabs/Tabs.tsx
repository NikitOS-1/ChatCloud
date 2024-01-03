import { Icon } from '../Icon';

import { BoxStyled, TabsStyled, TabStyled } from './styled';
import { TabsInterface } from './types';

export const Tabs = ({ items, value, onChange }: TabsInterface) => {
  const renderTabsPanel = items.map((id) => (
    <TabStyled
      $withpointer={!!onChange}
      value={id}
      key={id}
      icon={<Icon name="circle" />}
    />
  ));

  return (
    <BoxStyled>
      <TabsStyled
        value={value}
        onChange={(_, value) => onChange && onChange(value)}
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {renderTabsPanel}
      </TabsStyled>
    </BoxStyled>
  );
};
