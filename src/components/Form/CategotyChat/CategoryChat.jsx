import styled from "styled-components";
import { theme } from "theme/theme";
const arrowLeft = "/static/other/arrowLeft.svg";
const CategoryChatContainer = styled.div`
  width: 0px;
  padding: 0px;
  height: 944px;
  background-color: ${theme.colors.neutralColors.bgWhite};
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 101;
  transition: 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  &.visible {
    width: 599px;
    padding: 40px;
    height: 944px;
  }
`;
const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonArrowLeft = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const ButtonSkip = styled.div`
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${theme.colors.primary.primaryYellow};
  font-size: ${theme.fontSizes.Medium20};
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
const Category = styled.div`
  width: 80%;
  height: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const CategoryContainer = styled.div`
  width: 100%;
`;
const CategoryItem = styled.div``;
const Footer = styled.div``;

const CategoryChat = ({ next, nextButton }) => {
  let classes = `container ${next ? "visible" : ""}`;
  return (
    <CategoryChatContainer className={classes}>
      <Navigations>
        <ButtonArrowLeft onClick={() => nextButton()}>
          <img src={arrowLeft} alt="Back" />
        </ButtonArrowLeft>
        <ButtonSkip onClick={() => nextButton()}>
          <div>Skip</div>
        </ButtonSkip>
      </Navigations>
      <Category>
        <h1>Choose your interests</h1>
        <p>Pick up your favourite topics to set up your feeds</p>
        <CategoryContainer></CategoryContainer>
      </Category>
      <Footer></Footer>
    </CategoryChatContainer>
  );
};
export default CategoryChat;
