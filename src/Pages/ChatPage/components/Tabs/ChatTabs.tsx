import { useState } from 'react';

import { Tabs } from '../../../../components/Tabs';
import { TabItem } from '../TabItem';

import { TabsItemsContainer, TabsWrapper } from './styled';

const usersData = [
  {
    id: 1,
    name: 'Lola',
    avatar: '/icons/Avatar/Group10.svg',
    country: 'UA',
    isOnline: true,
    action: true,
  },
  {
    id: 2,
    name: 'SolGoodMan',
    avatar: '/icons/Avatar/Group13.svg',
    country: 'US',
    isOnline: true,
    action: false,
  },
  {
    id: 4,
    name: 'Nik',
    avatar: '/icons/Avatar/Group4.svg',
    country: 'UA',
    isOnline: false,
    action: true,
  },
  {
    id: 44,
    name: 'Alex',
    avatar: '/icons/Avatar/Group8.svg',
    country: 'FR',
    isOnline: true,
    action: false,
  },
  {
    id: 6,
    name: 'Djon',
    avatar: '/icons/Avatar/Group1.svg',
    country: 'ML',
    isOnline: false,
    action: false,
  },
  {
    id: 7,
    name: 'Brain',
    avatar: '/icons/Avatar/Group2.svg',
    country: 'ER',
    isOnline: false,
    action: false,
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
    messeges: 0,
  },
  {
    id: 12,
    name: 'Cars',
    members: 32,
    messeges: 7,
  },
];

export const ChatTabs = () => {
  const [tabId, setTabId] = useState<string>('All');
  const totalMessage = 9;
  return (
    <TabsItemsContainer>
      <Tabs
        items={[
          { item: 'All', badge: 0 },
          { item: 'People', badge: 0 },
          { item: 'Groups', badge: totalMessage },
        ]}
        value={tabId}
        variants="line"
        onChange={setTabId}
      />
      {tabId === 'All' && (
        <TabsWrapper>
          {groupsData.map(({ id, name, members, messeges }) => (
            <TabItem
              key={id}
              name={name}
              members={members}
              messeges={messeges}
            />
          ))}
          {usersData.map(({ id, name, avatar, country, isOnline, action }) => (
            <TabItem
              key={id}
              isPeople={!!avatar}
              name={name}
              avatar={avatar}
              country={country}
              isOnline={isOnline}
              action={action}
            />
          ))}
        </TabsWrapper>
      )}
      {tabId === 'People' && (
        <TabsWrapper>
          {usersData.map(({ id, name, avatar, country, isOnline, action }) => (
            <TabItem
              key={id}
              isPeople={!!avatar}
              name={name}
              avatar={avatar}
              country={country}
              isOnline={isOnline}
              action={action}
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
