import { Outlet } from 'react-router-dom';

import { Menu } from './Menu';
import { ChatPageStyled } from './style';

export const ChatPage = () => {
  return (
    <ChatPageStyled>
      <Menu
        countryCode="UA"
        isOnline
        margintop="24px"
        avatarSrc="/icons/Avatar/Group11.svg"
      />
      <Outlet />
    </ChatPageStyled>
  );
};
