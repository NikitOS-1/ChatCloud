import styled from "styled-components";
import { theme } from "theme/theme";

export const CategoryChatContainer = styled.div`
  width: 0px;
  opacity: 0;
  padding: 0px;
  height: 0px;
  background-color: ${theme.colors.neutralColors.bgWhite};
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 101;
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  &.visible {
    opacity: 1;
    width: 599px;
    padding: 40px;
    height: 944px;
  }
`;
export const Navigations = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const ButtonArrowLeft = styled.div`
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
export const ButtonSkip = styled.div`
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
export const Category = styled.div`
  width: 80%;
  height: max-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CategoryContainer = styled.div`
  margin-top: 100px;
  width: 100%;
  height: 350px;
  display: flex;
  flex-wrap: wrap;
`;
export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.$isSelected
      ? theme.colors.primary.primaryBlue
      : theme.colors.neutralColors[100]};
  color: ${(props) =>
    props.$isSelected
      ? theme.colors.neutralColors.bgWhite
      : theme.colors.neutralColors.black900};
  font-size: ${theme.fontSizes.Medium20};
  padding: 10px 15px;
  margin-right: 25px;
  width: max-content;
  height: max-content;
  border-radius: 20px;
  cursor: pointer;
`;
export const Footer = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const PaginationPage = styled.div`
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
export const ButtonContinue = styled.button`
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
export const PrivacyPolicyandTerms = styled.div`
  margin-top: 60px;
  span {
    color: ${theme.colors.primary.primaryYellow};
    &:hover {
      cursor: pointer;
      color: ${theme.colors.hover.yellow};
    }
  }
`;
