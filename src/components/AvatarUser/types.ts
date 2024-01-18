import { MarginInterface } from '../../types/styles';

export interface AvatarPropsInterface extends MarginInterface {
  isOnline?: boolean;
  countryCode?: string;
  avatarSrc?: string;
  userName?: string;
}
