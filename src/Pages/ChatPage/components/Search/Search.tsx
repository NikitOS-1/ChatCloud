import styled from 'styled-components';

const SearchContainer = styled.div`
  width: inherit;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Search = () => {
  return <SearchContainer>Search Component...</SearchContainer>;
};
