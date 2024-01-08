import {
  AvatarContainerStyled,
  AvatarStyled,
  CountryBadgeStyled,
  OnlineBadgeStyled,
  UserNameStyled,
} from './styled';
import { AvatarPropsInterface } from '.';

export const AvatarUser = ({
  isOnline = false,
  countryCode = '',
  avatarSrc = 'src/assets/icons/Avatar/NoPhoto.svg',
  userName = '',
}: AvatarPropsInterface) => {
  return (
    <AvatarContainerStyled>
      <AvatarStyled src={avatarSrc} alt="It's your avatar" />
      {countryCode && (
        <CountryBadgeStyled
          src={`https://flagcdn.com/${countryCode.toLowerCase()}.svg`}
          alt={countryCode}
        />
      )}
      {isOnline && <OnlineBadgeStyled />}
      {userName && <UserNameStyled>{userName}</UserNameStyled>}
    </AvatarContainerStyled>
  );
};
