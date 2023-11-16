import { avatarList } from "data/avatarList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectAvatar } from "redux/slices/avatarSlice";
import { theme } from "theme/theme";
import {
  ButtonClose,
  ButtonSave,
  ChangePhotoContainer,
  SelectAvaContainer,
} from "./styledCompChangePhoto";

const closeSvg = "/static/other/Close.svg";

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
            <div
              key={avatar.id}
              style={{ margin: "5px", width: "150px", height: "150px" }}>
              <img
                src={avatar.src}
                alt={`Avatar ${avatar.id}`}
                onClick={() => setSelectAva(avatar.src)}
                style={{
                  border:
                    avatar.src === selectAva
                      ? `3px solid ${theme.colors.primary.primaryBlue}`
                      : "none",
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
