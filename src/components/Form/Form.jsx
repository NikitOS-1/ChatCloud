import { avaNoPhoto } from "assets/ava/svgAva";
import { useState } from "react";
import styled from "styled-components";
import { theme } from "theme/theme";
import {
  FormContainer,
  Title,
  FormItem,
  Ava,
  InputContainer,
  InputUserName,
  InputUserNameError,
  InputCountry,
} from "./styledComponentsForm";
const Form = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, seterror] = useState(false);

  return (
    <FormContainer>
      <Title>
        <h2>let's create your account</h2>
        <p>Choose your username and photo to personalize your account</p>
      </Title>
      <FormItem>
        <Ava>
          <img src={avaNoPhoto} alt="No photo" />
          <p>Change Photo</p>
        </Ava>
        <InputContainer>
          <InputUserName>
            <p>Username</p>
            <input type="" />
            <InputUserNameError>{errorMessage}</InputUserNameError>
          </InputUserName>
          <InputCountry>
            <p>Country:</p>
            <input type="" />
          </InputCountry>
        </InputContainer>
      </FormItem>
    </FormContainer>
  );
};
export default Form;
