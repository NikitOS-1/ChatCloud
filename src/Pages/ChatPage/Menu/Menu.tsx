import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

interface MenuProps {
  countryCode: string;
  isOnline: boolean;
  margintop: string;
  avatarSrc?: string;
}
export const Menu = ({ ...props }: MenuProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('message');
  }, [navigate]);

  return (
    <>
      <MenuStyled>
        <ContainerStyled>
          <AvatarUser {...props} />

          <OptionStyled>
            <ButtonStyled>
              <Link to={'message'}>
                <BadgeStyled badgeContent="2">
                  <ChatOutlinedIcon />
                </BadgeStyled>
                <p>Chat</p>
              </Link>
            </ButtonStyled>
            <ButtonStyled>
              <Link to={'search'}>
                <SearchOutlinedIcon />
                <p>Search</p>
              </Link>
            </ButtonStyled>
          </OptionStyled>
        </ContainerStyled>

        <ButtonStyled>
          <Link to={'/'}>
            <LogoutOutlinedIcon />
            <p>Logout</p>
          </Link>
        </ButtonStyled>
      </MenuStyled>

      {/* // ------------mobile menu ------------- */}
      <MobileMenuStyled>
        <ButtonStyled>
          <Link to={'message'}>
            <BadgeStyled badgeContent="2">
              <ChatOutlinedIcon />
            </BadgeStyled>
            <p>Chat</p>
          </Link>
        </ButtonStyled>
        <ButtonStyled>
          <Link to={'search'}>
            <SearchOutlinedIcon />
            <p>Search</p>
          </Link>
        </ButtonStyled>
        <ButtonStyled>
          <Link to={'/'}>
            <LogoutOutlinedIcon />
            <p>Logout</p>
          </Link>
        </ButtonStyled>
      </MobileMenuStyled>
    </>
  );
};
