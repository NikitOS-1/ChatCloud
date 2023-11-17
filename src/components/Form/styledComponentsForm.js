import { theme } from "theme/theme";
import styled from "styled-components";
const arrowBack = "/static/other/arrowDown.svg";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;

  h2 {
    text-transform: uppercase;

    font-size: ${theme.fontSizes.Regular24};
  }

  p {
    margin-top: 10px;

    font-size: ${theme.fontSizes.Medium16};
  }
`;
export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;
export const Ava = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-top: 15px;
    color: ${theme.colors.primary.primaryYellow};
    font-size: ${theme.fontSizes.Medium20};
  }
  p:hover {
    cursor: pointer;
    color: ${theme.colors.hover.yellow};
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  height: 100%;

  input,
  select {
    width: 495px;
    height: 65px;
    border: 2px solid ${theme.colors.primary.blue30};
    border-radius: 20px;
  }

  p {
    font-size: ${theme.fontSizes.Medium16};
    margin-bottom: 10px;
    font-weight: 400;
    line-height: normal;
  }
`;
export const InputUserName = styled.div`
  margin: 0px 0px 25px 0px;
  height: 120px;

  input {
    width: 464px;
    height: 59px;
    padding-left: 25px;
    border: 2px solid;

    border-color: ${(props) =>
      props.$errors
        ? theme.colors.supporting.error
        : theme.colors.primary.blue30};
  }
  input:hover {
    border-color: ${theme.colors.primary.blue50};
  }
  input:focus-visible {
    outline: none;

    border-color: ${(props) =>
      props.$errors
        ? theme.colors.supporting.error
        : theme.colors.primary.primaryBlue};
  }
`;
export const InputUserNameError = styled.p`
  height: 100%;
  margin: 10px 0px;

  color: ${theme.colors.supporting.error};
`;
export const InputCountry = styled.div`
  height: 120px;
  display: flex;
  flex-direction: column;

  select {
    appearance: none;
    background-image: url(${arrowBack});
    background-position: right center;
    background-repeat: no-repeat;
    padding: 0px 25px;
    border: 2px solid;
    border-color: ${(props) =>
      props.$errors
        ? theme.colors.supporting.error
        : theme.colors.primary.blue30};
  }

  select:hover {
    cursor: pointer;
    border-color: ${theme.colors.primary.blue50};
  }

  select:focus-visible {
    outline: none;
    border-color: ${(props) =>
      props.$errors
        ? theme.colors.supporting.error
        : theme.colors.primary.primaryBlue};
  }
`;
export const PaginationPage = styled.div`
  margin-top: 55px;
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

  :first-child {
    background-color: ${theme.colors.neutralColors[300]};
  }
`;
export const ButtonNext = styled.button`
  border-radius: 13px;
  border: none;
  width: 230px;
  height: 55px;
  margin-top: 50px;
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
