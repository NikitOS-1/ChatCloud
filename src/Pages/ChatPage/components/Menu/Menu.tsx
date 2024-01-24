import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { AvatarUser } from '../../../../components/AvatarUser';
import { MarginInterface } from '../../../../types/styles';

import {
  BadgeStyled,
  ButtonStyled,
  ContainerStyled,
  MenuStyled,
  MobileMenuStyled,
  OptionStyled,
} from './styled';

interface MenuProps extends MarginInterface {
  countryCode: string;
  isOnline: boolean;
  avatarSrc?: string;
  userName?: string;
}
export const Menu = ({ ...props }: MenuProps) => {
  const [isActive, setIsActive] = useState<string>('message');
  const totalMessage = 9;

  const renderButtonChat = (
    <ButtonStyled
      onClick={() => setIsActive('message')}
      $active={isActive === 'message'}
    >
      <Link to={'message'}>
        <BadgeStyled badgeContent={totalMessage}>
          <ChatOutlinedIcon />
        </BadgeStyled>
        <p>Chat</p>
      </Link>
    </ButtonStyled>
  );

  const renderButtonSearch = (
    <ButtonStyled
      onClick={() => setIsActive('search')}
      $active={isActive === 'search'}
    >
      <Link to={'search'}>
        <SearchOutlinedIcon />
        <p>Search</p>
      </Link>
    </ButtonStyled>
  );

  const renderButtonLogout = (
    <ButtonStyled>
      <Link to={'/'}>
        <LogoutOutlinedIcon />
        <p>Logout</p>
      </Link>
    </ButtonStyled>
  );

  return (
    <>
      <MenuStyled>
        <ContainerStyled>
          <AvatarUser {...props} />

          <OptionStyled>
            {renderButtonChat}
            {renderButtonSearch}
          </OptionStyled>
        </ContainerStyled>

        {renderButtonLogout}
      </MenuStyled>

      {/* // ------------mobile menu ------------- */}

      <MobileMenuStyled>
        {renderButtonChat}
        {renderButtonSearch}
        {renderButtonLogout}
      </MobileMenuStyled>
    </>
  );
};
