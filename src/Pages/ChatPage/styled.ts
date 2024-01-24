import styled from 'styled-components';

export const ChatPageStyled = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
`;

export const TabsStyled = styled.div`
  width: 350px;

  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
