import { useState } from "react";
import {
  FormContainer,
  Title,
  FormItem,
  Ava,
  InputContainer,
  InputUserNameError,
  InputUserName,
  ButtonNext,
  PaginationPage,
} from "./styledComponentsForm";
import CountrySelector from "./CountrySelector";
import ChangePhoto from "./ChangePhoto";
import { useSelector } from "react-redux";
import { selectSelectedAvatar } from "redux/avatarSlice";
import CategoryChat from "./CategotyChat/CategoryChat";

const Form = () => {
  const avaNoPhotoSVG = "/static/Ava/NoPhoto.svg";
  const myAva = useSelector(selectSelectedAvatar);

  const [errorMessage, setErrorMessage] = useState(false);
  const [error, setError] = useState(false);
  const [userName, setUserName] = useState("");
  const [cheked, setCheked] = useState(false);
  const [next, setNext] = useState(false);

  const handleInputChangeUserName = (e) => {
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
  const isCheked = () => {
    setCheked(!cheked);
  };
  const nextButton = () => {
    setNext(!next);
  };

  return (
    <FormContainer>
      <Title>
        <h2>let's create your account</h2>
        <p>Choose your username and photo to personalize your account</p>
      </Title>
      <FormItem>
        <Ava>
          <img src={myAva ? myAva : avaNoPhotoSVG} alt="It your's Avatar" />
          <p onClick={isCheked}>Change Photo</p>
          {cheked ? <ChangePhoto isCheked={isCheked} /> : ""}
        </Ava>
        <InputContainer>
          <InputUserName $errors={error}>
            <p>Username</p>
            <input
              type="text"
              value={userName}
              onChange={handleInputChangeUserName}
            />
            <InputUserNameError>{errorMessage}</InputUserNameError>
          </InputUserName>
          <CountrySelector />
          <PaginationPage>
            <div></div>
            <div></div>
          </PaginationPage>
          <ButtonNext $errors={error} onClick={nextButton}>
            Next
          </ButtonNext>
          {next ? (
            <CategoryChat next={next} nextButton={nextButton} />
          ) : (
            <CategoryChat next={next} nextButton={nextButton} />
          )}
        </InputContainer>
      </FormItem>
    </FormContainer>
  );
};
export default Form;
