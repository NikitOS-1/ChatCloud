import { useState } from 'react';

import { Tabs } from '../../../components/Tabs';

import { TabItem } from './components/TabItem';
import { TabsItemsContainer } from './styled';

export const ChatTabs = () => {
  const [tabId, setTabId] = useState<string>('All');

  const renderedTabContent = () => {
    if (tabId === 'All') {
      return <TabItem />;
    }
    if (tabId === 'People') {
      return <TabItem />;
    }
    if (tabId === 'Groups') {
      return <TabItem />;
    }
  };

  return (
    <TabsItemsContainer>
      <Tabs
        items={[
          { item: 'All', badge: 0 },
          { item: 'People', badge: 0 },
          { item: 'Groups', badge: 2 },
        ]}
        value={tabId}
        variants="line"
        onChange={setTabId}
      />
      {renderedTabContent()}
    </TabsItemsContainer>
  );
};
