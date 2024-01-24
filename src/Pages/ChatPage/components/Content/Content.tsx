import { Link } from 'react-router-dom';

import { ContentStyled } from './styled';

export const Content = () => {
  return (
    <ContentStyled>
      <img
        src="/icons/Illustrations/chat-illustration-1.svg"
        alt="illustration-Chat"
      />
      <h1>It’s nice to talk with someone</h1>
      <p>Pick a chat from left menu or start </p>
      <Link to={'/chat/search'}>searching for new friends</Link>
    </ContentStyled>
  );
};
