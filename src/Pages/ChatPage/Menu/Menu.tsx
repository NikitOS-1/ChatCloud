import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { AvatarUser } from '../../../components/AvatarUser';

import {
  BadgeStyled,
  ButtonStyled,
  ContainerStyled,
  MenuStyled,
  MobileMenuStyled,
  OptionStyled,
} from './styled';

export const Menu = () => {
  return (
    <>
      <MenuStyled>
        <ContainerStyled>
          <AvatarUser countryCode="UA" isOnline margintop="24px" />

          <OptionStyled>
            <ButtonStyled>
              <BadgeStyled badgeContent="2">
                <ChatOutlinedIcon />
              </BadgeStyled>
              <p>Chat</p>
            </ButtonStyled>
            <ButtonStyled>
              <SearchOutlinedIcon />
              <p>Search</p>
            </ButtonStyled>
          </OptionStyled>
        </ContainerStyled>

        <ButtonStyled>
          <LogoutOutlinedIcon />
          <p>Logout</p>
        </ButtonStyled>
      </MenuStyled>
      {/* // ------------mobile menu ------------- */}
      <MobileMenuStyled>
        <ButtonStyled>
          <BadgeStyled badgeContent="2">
            <ChatOutlinedIcon />
          </BadgeStyled>
          <p>Chat</p>
        </ButtonStyled>
        <ButtonStyled>
          <SearchOutlinedIcon />
          <p>Search</p>
        </ButtonStyled>
        <ButtonStyled>
          <LogoutOutlinedIcon />
          <p>Logout</p>
        </ButtonStyled>
      </MobileMenuStyled>
    </>
  );
};
