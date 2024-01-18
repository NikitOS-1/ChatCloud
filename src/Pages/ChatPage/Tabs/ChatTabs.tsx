import { useState } from 'react';

import { Tabs } from '../../../components/Tabs';

export const ChatTabs = () => {
  const [tabId, setTabId] = useState<string>('All');
  const renderedTabContent = () => {
    if (tabId === 'All') {
      return <div>All</div>;
    }
    if (tabId === 'People') {
      return (
        <div style={{ width: 'inherit' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          exercitationem atque aliquid vitae nostrum temporibus delectus autem
          omnis deleniti, commodi voluptate nobis cumque mollitia distinctio ab
          nisi repudiandae eum dicta.
        </div>
      );
    }
    if (tabId === 'Groups') {
      return <div>Groups</div>;
    }
  };
  return (
    <div style={{ width: '300px' }}>
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
    </div>
  );
};
