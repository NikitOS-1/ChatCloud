import styled from 'styled-components';

import { AvatarUser } from '../../../../../components/AvatarUser';

interface TabItemProps {
  people?: boolean;
  group?: boolean;
}

const TabItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background-color: ${({ theme }) => theme.colors.neutralColors[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutralColors[150]};
  }
`;
const TitleStyle = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
`;

export const TabItem = ({ people = false }: TabItemProps) => {
  const userName = 'Nikita';
  const groupName = 'General';

  if (!people) {
    return (
      <TabItemStyled>
        <AvatarUser isOnline countryCode="UA" />
        <TitleStyle>
          <p>{userName}</p>
          <p>{userName + ' is typing...'}</p>
        </TitleStyle>
      </TabItemStyled>
    );
  } else {
    return (
      <TabItemStyled>
        <div>{groupName[0]}</div>
        {groupName}
      </TabItemStyled>
    );
  }
};
