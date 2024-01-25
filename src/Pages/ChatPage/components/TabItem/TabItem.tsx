import { AvatarUser } from '../../../../components/AvatarUser';
import { BadgeStyled } from '../Menu/styled';

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
  action?: boolean;
  $nohover?: boolean;
}

export const TabItem = ({
  isPeople = false,
  name,
  avatar,
  country,
  isOnline,
  members,
  messeges,
  action,
  $nohover = false,
}: TabItemProps) => {
  if (isPeople) {
    return (
      <TabItemStyled $nohover={$nohover}>
        <AvatarUser
          isOnline={isOnline}
          countryCode={country}
          avatarSrc={avatar}
        />
        <TitleStyle>
          <NameStyled>{name}</NameStyled>
          {action && (
            <DescriptionStyled>{name + ' is typing...'}</DescriptionStyled>
          )}
        </TitleStyle>
      </TabItemStyled>
    );
  } else {
    return (
      <TabItemGroupStyled $nohover={$nohover}>
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
