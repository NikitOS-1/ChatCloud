import { avatarList } from "data/avatarList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAvatar, selectSelectedAvatar } from "redux/avatarSlice";
import styled from "styled-components";
import { theme } from "theme/theme";

const closeSvg = "/static/other/Close.svg";

const ChangePhotoContainer = styled.div`
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
  background-color: ${theme.colors.neutralColors.bgWhite};
  width: 500px;
  height: 550px;
  position: absolute;
  top: 410px;
  border-radius: 20px;
  padding: 15px;
  z-index: 100;
`;
const ButtonClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    cursor: pointer;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.7;
  }
  div:hover {
    opacity: 1;
  }
`;
const SelectAvaContainer = styled.div`
  width: 100%;
  height: 465px;
  //   background-color: aqua;
`;
const ButtonSave = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border-radius: 13px;
    border: none;
    width: 230px;
    height: 55px;
    margin-top: 10px;
    color: white;
    background-color: ${theme.colors.primary.primaryYellow};
    font-size: ${theme.fontSizes.Medium20};

    &:hover {
      cursor: pointer;
      background-color: ${theme.colors.hover.yellow};
    }
    &:focus-visible {
      outline: none;
    }
  }
`;

const ChangePhoto = ({ isCheked }) => {
  const dispatch = useDispatch();
  const [selectAva, setSelectAva] = useState("");

  const saveAva = () => {
    dispatch(selectAvatar(selectAva));
    isCheked();
  };

  return (
    <ChangePhotoContainer>
      <div>
        <ButtonClose>
          <div onClick={() => isCheked()}>
            <img src={closeSvg} alt="Close" />
          </div>
        </ButtonClose>
        <SelectAvaContainer>
          {avatarList.map((avatar) => (
            <div key={avatar.id}>
              <img
                src={avatar.src}
                alt={`Avatar ${avatar.id}`}
                onClick={() => setSelectAva(avatar.src)}
                style={{
                  border: avatar.src === selectAva ? "2px solid blue" : "none",
                  borderRadius: "50%",
                }}
              />
            </div>
          ))}
        </SelectAvaContainer>
        <ButtonSave>
          <button onClick={saveAva}>Save</button>
        </ButtonSave>
      </div>
    </ChangePhotoContainer>
  );
};
export default ChangePhoto;
