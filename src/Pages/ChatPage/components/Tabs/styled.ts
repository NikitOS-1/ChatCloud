import styled from 'styled-components';

export const TabsItemsContainer = styled.div`
  width: inherit;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};
`;

export const TabsWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;

  @media (max-width: 800px) {
    height: 80%;
  }
`;
