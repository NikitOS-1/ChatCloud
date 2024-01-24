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
  name: string;
  isPeople?: boolean;
  avatar?: string;
  country?: string;
  isOnline?: boolean;
  members?: number;
  messeges?: number;
}

export const TabItem = ({
  isPeople = false,
  name,
  avatar,
  country,
  isOnline,
  members,
  messeges,
}: TabItemProps) => {
  const isTyping = true;

  if (isPeople) {
    return (
      <TabItemStyled>
        <AvatarUser
          isOnline={isOnline}
          countryCode={country}
          avatarSrc={avatar}
        />
        <TitleStyle>
          <NameStyled>{name}</NameStyled>
          {isTyping && (
            <DescriptionStyled>{name + ' is typing...'}</DescriptionStyled>
          )}
        </TitleStyle>
      </TabItemStyled>
    );
  } else {
    return (
      <TabItemGroupStyled>
        <ContainerStyled>
          <LogoGroup>{name[0]}</LogoGroup>
          <TitleStyle>
            <NameStyled>{name}</NameStyled>
            <DescriptionStyled>{members + ' members'}</DescriptionStyled>
          </TitleStyle>
        </ContainerStyled>
        <BadgeStyled badgeContent={messeges}></BadgeStyled>
      </TabItemGroupStyled>
    );
  }
};
