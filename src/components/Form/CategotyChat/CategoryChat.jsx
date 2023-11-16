import styled from "styled-components";

const CategoryChatContainer = styled.div`
  width: 0px;
  height: 1024px;
  background-color: #eee;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 100;
  transition: 0.2s ease-in-out;

  &.visible {
    width: 679px;
  }
`;

const CategoryChat = ({ next, nextButton }) => {
  let classes = `container ${next ? "visible" : ""}`;
  return (
    <CategoryChatContainer className={classes}>
      <div onClick={() => nextButton()}>X</div>
      <div>CategoryChat</div>
    </CategoryChatContainer>
  );
};
export default CategoryChat;
