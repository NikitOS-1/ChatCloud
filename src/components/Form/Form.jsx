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
  InputUserNameError,
  InputUserName,
  InputCountry,
} from "./styledComponentsForm";

const Form = () => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");

  const handleInputChange = (e) => {
    const regex = /^[a-zA-Z0-9]*$/;
    setUserName(e.target.value);

    if (regex.test(e.target.value)) {
      setError(false);
      setErrorMessage(false);
    } else {
      setError(true);
      setErrorMessage("Please use only Latin letters and Arabic numerals");
    }
  };

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
          <InputUserName $errors={error}>
            <p>Username</p>
            <input type="text" value={userName} onChange={handleInputChange} />
            <InputUserNameError>{errorMessage}</InputUserNameError>
          </InputUserName>
          <InputCountry>
            <p>Country:</p>
            <input type="text" />
          </InputCountry>
        </InputContainer>
      </FormItem>
    </FormContainer>
  );
};
export default Form;
