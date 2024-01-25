import { Link } from 'react-router-dom';

import { WelcomePageStyled } from './styled';
// import { TabItem } from "../TabItem";

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
      {/* <TabItem name="General" members={32} /> */}
    </>
  );
};
