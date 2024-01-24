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
const usersData = [
  {
    id: 1,
    name: 'Lola',
    avatar: '/icons/Avatar/Group10.svg',
    country: 'UA',
    isOnline: true,
  },
  {
    id: 1,
    name: 'Blala',
    avatar: '/icons/Avatar/Group13.svg',
    country: 'UA',
    isOnline: true,
  },
];
const groupsData = [
  {
    id: 10,
    name: 'General',
    members: 10,
    messeges: 2,
  },
  {
    id: 11,
    name: 'Sport',
    members: 7,
    messeges: 4,
  },
];

export const ChatTabs = () => {
  const [tabId, setTabId] = useState<string>('All');

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
      {tabId === 'All' && (
        <TabsWrapper>
          {usersData.map(({ id, name, avatar, country, isOnline }) => (
            <TabItem
              key={id}
              isPeople={!!avatar}
              name={name}
              avatar={avatar}
              country={country}
              isOnline={isOnline}
            />
          ))}

          {groupsData.map(({ id, name, members, messeges }) => (
            <TabItem
              key={id}
              name={name}
              members={members}
              messeges={messeges}
            />
          ))}
        </TabsWrapper>
      )}
      {tabId === 'People' && (
        <TabsWrapper>
          {usersData.map(({ id, name, avatar, country, isOnline }) => (
            <TabItem
              key={id}
              isPeople={!!avatar}
              name={name}
              avatar={avatar}
              country={country}
              isOnline={isOnline}
            />
          ))}
        </TabsWrapper>
      )}
      {tabId === 'Groups' && (
        <TabsWrapper>
          {groupsData.map(({ id, name, members, messeges }) => (
            <TabItem
              key={id}
              name={name}
              members={members}
              messeges={messeges}
            />
          ))}
        </TabsWrapper>
      )}
    </TabsItemsContainer>
  );
};
