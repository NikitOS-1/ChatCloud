import { Outlet } from 'react-router-dom';

import { Content } from './Content';
import { Menu } from './Menu';
import { ChatPageStyled, TabsStyled } from './styled';

export const ChatPage = () => {
  return (
    <ChatPageStyled>
      <Menu
        countryCode="UA"
        isOnline
        margintop="24px"
        marginbottom="24px"
        avatarSrc="/icons/Avatar/Group11.svg"
      />
      <TabsStyled>
        <Outlet />
      </TabsStyled>
      <Content />
    </ChatPageStyled>
  );
};
