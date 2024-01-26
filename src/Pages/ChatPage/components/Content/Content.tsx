import { Link } from 'react-router-dom';

// import { Icon } from "../../../../components/Icon";
// import { LoadingScreen } from "../../../../components/LoadingScreen";
// import { TabItem } from "../TabItem";
import {
  // ButtonSendStyled,
  // ChatContendStyled,
  // FooterContentStyled,
  // HeaderContentStyled,
  // MainContentStyled,
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
      <Link to={'search'}>searching for new friends</Link>
    </WelcomePageStyled>
  );

  // const chatMessages = (
  //   <ChatContendStyled>
  //     <HeaderContentStyled>
  //       <TabItem name="General" members={32} $nohover />
  //       <div style={{ marginRight: "30px", fontSize: "23px" }}>...</div>
  //     </HeaderContentStyled>
  //     <MainContentStyled>All messages...</MainContentStyled>
  //     <FooterContentStyled>
  //       <input type="text" placeholder="Write a message..." />
  //       <ButtonSendStyled>
  //         <Icon name="btnSend" />
  //       </ButtonSendStyled>
  //     </FooterContentStyled>
  //   </ChatContendStyled>
  // );

  return (
    <>
      {welcomeMessage}
      {/* {chatMessages}
      <LoadingScreen /> */}
    </>
  );
};
