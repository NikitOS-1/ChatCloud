import { Avatar, Menu, MenuList } from '@mui/material';
import { styled } from 'styled-components';

export const MainAvatar = styled(Avatar)`
  width: 148px;
  height: 148px;
`;

export const MainButtonWrapper = styled('div')`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const MenuStyled = styled(Menu)`
  .MuiPaper-root {
    width: 532px;
    height: 556px;
    padding: 16px 24px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
    border-radius: ${({ theme }) => theme.radius.button};
  }
`;

export const MenuListStyled = styled(MenuList)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  justify-content: center;
  width: 100%;
  height: 457px;
  overflow: auto;
  border: none;

  &:focus-visible {
    outline: none;
  }

  .MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 106px;
    height: 106px;
    border-radius: 50%;

    &.Mui-selected {
      background-color: ${({ theme }) => theme.colors.primary.primaryBlueText};
    }
  }

  .MuiAvatar-root {
    width: 100px;
    height: 100px;
  }
`;

export const MenuButtonStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
`;
