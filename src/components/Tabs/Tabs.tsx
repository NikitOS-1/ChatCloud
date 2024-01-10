import { Icon } from '../Icon';

import { BoxStyled, TabsStyled, TabStyled } from './styled';
import { POINTER_TABS, TabsInterface } from './types';

export const Tabs = ({
  items,
  value,
  onChange,
  variants = POINTER_TABS,
}: TabsInterface) => {
  const renderTabsPanel = items.map((id) => (
    <TabStyled
      $variants={variants}
      $withpointer={!!onChange}
      value={id}
      key={id}
      label={variants === 'pointer' ? '' : id}
      icon={variants === 'line' ? '' : <Icon name="circle" />}
    />
  ));

  return (
    <BoxStyled>
      <TabsStyled
        $variants={variants}
        value={value}
        onChange={(_, value) => onChange && onChange(value)}
        TabIndicatorProps={{
          style: { display: `${variants === 'pointer' ? 'none' : ''}` },
        }}
      >
        {renderTabsPanel}
      </TabsStyled>
    </BoxStyled>
  );
};
