import { category } from "data/categotyChatList";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  removeCategory,
  selectSelectedCategories,
} from "redux/slices/categorySlice";
import {
  ButtonArrowLeft,
  ButtonContinue,
  ButtonSkip,
  Category,
  CategoryChatContainer,
  CategoryContainer,
  CategoryItem,
  Footer,
  Navigations,
  PrivacyPolicyandTerms,
} from "./styledCompCategoryChat";
import { PaginationPage } from "../styledComponentsForm";

const arrowLeft = "/static/other/arrowLeft.svg";

const CategoryChat = ({ next, nextButton }) => {
  let classes = `container ${next ? "visible" : ""}`;

  const selectedCategories = useSelector(selectSelectedCategories);
  const dispatch = useDispatch();

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      dispatch(removeCategory(category));
    } else {
      dispatch(addCategory(category));
    }
  };

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
        <CategoryContainer>
          {category.map((category) => (
            <CategoryItem
              key={category}
              onClick={() => toggleCategory(category)}
              $isSelected={
                selectedCategories.includes(category) ? true : false
              }>
              {category}
            </CategoryItem>
          ))}
        </CategoryContainer>
      </Category>
      <Footer>
        <PaginationPage>
          <div></div>
          <div></div>
        </PaginationPage>
        <ButtonContinue onClick={() => nextButton()}>Continue</ButtonContinue>
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
