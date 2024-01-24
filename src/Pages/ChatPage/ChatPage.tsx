import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { H1, P } from '../../components/Typography';

import { Menu } from './Menu';
import { ChatPageStyled } from './style';

const MainStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: max-content;
    height: max-content;
  }
`;

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
      <div style={{ width: '400px' }}>
        <Outlet />
      </div>
      <MainStyled>
        <img
          src="/icons/Illustrations/chat-illustration-1.svg"
          alt="illustration-Chat"
        />
        <H1>It’s nice to talk with someone</H1>
        <P>Pick a chat from left menu or start </P>
        <Link to={'/chat/search'}>searching for new friends</Link>
      </MainStyled>
    </ChatPageStyled>
  );
};
