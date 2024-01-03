import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 0px;
    width: 100%;
  }
`;
