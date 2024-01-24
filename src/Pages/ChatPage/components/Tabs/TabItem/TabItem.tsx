import { AvatarUser } from '../../../../../components/AvatarUser';
import { BadgeStyled } from '../../Menu/styled';

import {
  ContainerStyled,
  DescriptionStyled,
  LogoGroup,
  NameStyled,
  TabItemGroupStyled,
  TabItemStyled,
  TitleStyle,
} from './styled';

interface TabItemProps {
  isPeople?: boolean;
}

export const TabItem = ({ isPeople = false }: TabItemProps) => {
  const userName = 'Nikita';
  const groupName = 'General';
  const isTyping = true;
  const members = 10;

  if (isPeople) {
    return (
      <TabItemStyled>
        <AvatarUser isOnline countryCode="UA" />
        <TitleStyle>
          <NameStyled>{userName}</NameStyled>
          {isTyping && (
            <DescriptionStyled>{userName + ' is typing...'}</DescriptionStyled>
          )}
        </TitleStyle>
      </TabItemStyled>
    );
  } else {
    return (
      <TabItemGroupStyled>
        <ContainerStyled>
          <LogoGroup>{groupName[0]}</LogoGroup>
          <TitleStyle>
            <NameStyled>{groupName}</NameStyled>
            <DescriptionStyled>{members + ' members'}</DescriptionStyled>
          </TitleStyle>
        </ContainerStyled>
        <BadgeStyled badgeContent="2"></BadgeStyled>
      </TabItemGroupStyled>
    );
  }
};
