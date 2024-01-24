import { useState } from 'react';
import styled from 'styled-components';

import { Tabs } from '../../../../components/Tabs';

import { TabsItemsContainer } from './styled';
import { TabItem } from './TabItem';

const TabsWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;

  @media (max-width: 800px) {
    height: 80%;
  }
`;

export const ChatTabs = () => {
  const [tabId, setTabId] = useState<string>('All');

  const renderedTabContent = () => {
    if (tabId === 'All') {
      return (
        <TabsWrapper>
          <TabItem />
          <TabItem />
          <TabItem />
          <TabItem />
          <TabItem isPeople />
          <TabItem isPeople />
          <TabItem isPeople />
          <TabItem isPeople />
        </TabsWrapper>
      );
    }
    if (tabId === 'People') {
      return <TabItem isPeople />;
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
