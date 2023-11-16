import styled from "styled-components";
import "./animation.css";

// const CategoryChatContainer = styled.div`
//   width: 0;
//   height: 500px;
//   background-color: #eee;
//   overflow: hidden;
//   position: fixed;
//   top: 0;
//   right: 1;
//   transition: 1s ease-in-out;
// `;

const CategoryChat = ({ next, nextButton }) => {
  let classes = `container ${next ? "visible" : ""}`;
  return (
    <div className={classes}>
      <div onClick={() => nextButton()}>X</div>
      <div>CategoryChat</div>
    </div>
  );
};
export default CategoryChat;
