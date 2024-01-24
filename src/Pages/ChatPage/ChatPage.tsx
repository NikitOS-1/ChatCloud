import { Outlet } from 'react-router-dom';

import { Content } from './components/Content';
import { Menu } from './components/Menu';
import { ChatPageStyled, TabsStyled } from './styled';

export const ChatPage = () => {
  return (
    <ChatPageStyled>
      <Menu
        countryCode="UA"
        isOnline
        $margintop="24px"
        $marginbottom="56px"
        avatarSrc="/icons/Avatar/Group11.svg"
        userName="Nikita"
      />
      <TabsStyled>
        <Outlet />
      </TabsStyled>
      <Content />
    </ChatPageStyled>
  );
};
