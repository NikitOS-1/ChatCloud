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
`;
const ButtonClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    text-align: center;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SelectAva = styled.div``;
const ButtonSave = styled.div``;

const ChangePhoto = ({ isCheked }) => {
  return (
    <ChangePhotoContainer>
      <ButtonClose>
        <div onClick={() => isCheked()}>
          <img src={closeSvg} alt="Close" />
        </div>
      </ButtonClose>
      <SelectAva></SelectAva>
      <ButtonSave></ButtonSave>
    </ChangePhotoContainer>
  );
};
export default ChangePhoto;
