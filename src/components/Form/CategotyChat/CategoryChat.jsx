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
  margin-bottom: 20px;
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
  margin-top: 100px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
`;
const CategoryItem = styled.div``;
const Footer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const PaginationPage = styled.div`
  margin-top: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 22px;

  div {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    border: none;

    background-color: ${theme.colors.neutralColors[200]};
  }

  :last-child {
    background-color: ${theme.colors.neutralColors[300]};
  }
`;
const ButtonContinue = styled.button`
  margin-top: 50px;
  border-radius: 13px;
  border: none;
  width: 230px;
  height: 55px;
  color: white;
  background-color: ${(props) =>
    !props.$errors
      ? theme.colors.primary.primaryYellow
      : theme.colors.neutralColors[300]};
  font-size: ${theme.fontSizes.Medium20};

  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      !props.$errors
        ? theme.colors.hover.yellow
        : theme.colors.neutralColors[300]};
  }
  &:focus-visible {
    outline: none;
  }
`;
const PrivacyPolicyandTerms = styled.div`
  margin-top: 60px;
  span {
    color: ${theme.colors.primary.primaryYellow};
  }
`;

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
      <Footer>
        <PaginationPage>
          <div></div>
          <div></div>
        </PaginationPage>
        <ButtonContinue>Continue</ButtonContinue>
        <PrivacyPolicyandTerms>
          <p>
            By clicking "Continue" you agree to our <span>Privacy Policy</span>{" "}
            and <span>Terms of Service</span>
          </p>
        </PrivacyPolicyandTerms>
      </Footer>
    </CategoryChatContainer>
  );
};
export default CategoryChat;
