import { Icon } from '../Icon';

import { BadgeStyled, BoxStyled, TabsStyled, TabStyled } from './styled';
import { ItemsBadgeInterface, POINTER_TABS, TabsPropsInterface } from './types';

export const Tabs = ({
  items,
  value,
  onChange,
  variants = POINTER_TABS,
}: TabsPropsInterface) => {
  const renderTabsPanel = items.map(
    ({ item, badge }: ItemsBadgeInterface, index) => (
      <TabStyled
        $variants={variants}
        $withpointer={!!onChange}
        value={item}
        key={index}
        label={
          variants === 'pointer' ? (
            ''
          ) : (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item}
              <BadgeStyled badgeContent={badge} />
            </div>
          )
        }
        icon={variants === 'line' ? '' : <Icon name="circle" />}
      />
    ),
  );

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
