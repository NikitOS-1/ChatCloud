import { Link } from 'react-router-dom';

import { TabItem } from '../TabItem';

import {
  ChatContendStyled,
  FooterContentStyled,
  HeaderContentStyled,
  MainContentStyled,
  WelcomePageStyled,
} from './styled';

export const Content = () => {
  const welcomeMessage = (
    <WelcomePageStyled>
      <img
        src="/icons/Illustrations/chat-illustration-1.svg"
        alt="illustration-Chat"
      />
      <h1>It’s nice to talk with someone</h1>
      <p>Pick a chat from left menu or start </p>
      <Link to={'/chat/search'}>searching for new friends</Link>
    </WelcomePageStyled>
  );

  return (
    <>
      {welcomeMessage}
      <ChatContendStyled>
        <HeaderContentStyled>
          <TabItem name="General" members={32} $nohover />
          <div style={{ marginRight: '30px', fontSize: '23px' }}>...</div>
        </HeaderContentStyled>
        <MainContentStyled>All messages...</MainContentStyled>
        <FooterContentStyled>Enter text...</FooterContentStyled>
      </ChatContendStyled>
    </>
  );
};
