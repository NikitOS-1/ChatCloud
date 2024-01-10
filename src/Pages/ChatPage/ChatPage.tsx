import { useState } from 'react';
import styled from 'styled-components';

import { Tabs } from '../../components/Tabs';

const ChatPageStyled = styled.div``;

export const ChatPage = () => {
  const [tabId, setTabId] = useState<string>('Groups');

  const renderTabs = () => {
    if (tabId === 'All') {
      return <div>All</div>;
    }
    if (tabId === 'People') {
      return <div>People</div>;
    }
    return <div>Groups</div>;
  };
  return (
    <ChatPageStyled>
      <Tabs
        variants="line"
        value={tabId}
        onChange={setTabId}
        items={[
          { item: 'All', badge: 100 },
          { item: 'People', badge: 2 },
          { item: 'Groups', badge: 3 },
        ]}
      />
      {renderTabs()}
    </ChatPageStyled>
  );
};
