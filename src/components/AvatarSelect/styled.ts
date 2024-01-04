import { Avatar, Popover } from '@mui/material';
import { styled } from 'styled-components';

export const MainAvatar = styled(Avatar)`
  width: 122px;
  height: 122px;

  @media (max-width: 800px) {
    width: 102px;
    height: 102px;
  }
`;

export const MainButtonWrapper = styled('div')`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PopoverStyled = styled(Popover)`
  .MuiPaper-root {
    overflow: hidden;
    max-width: 449px;
    height: max-content;
    padding: 16px 24px 0px 24px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
    border-radius: ${({ theme }) => theme.radius.button};

    @media (max-width: 800px) {
      padding: 0px;
      width: 100%;
    }
  }
`;

export const ButtonClose = styled('div')`
  text-align: right;
  margin-bottom: 24px;
  cursor: pointer;

  :hover {
    fill: ${({ theme }) => theme.colors.hover.yellow};
  }
`;

export const AvatarOptions = styled('div')`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  justify-content: center;
  width: 100%;
  height: 340px;
  overflow: scroll;
  border: none;

  &:focus-visible {
    outline: none;
  }

  .MuiButtonBase-root {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 86px;
    height: 86px;
    border-radius: 50%;

    &.Mui-selected {
      background-color: ${({ theme }) => theme.colors.primary.primaryBlueText};
    }
  }

  .MuiAvatar-root {
    width: 80px;
    height: 80px;
  }

  @media (max-width: 800px) {
    gap: 14px;

    .MuiButtonBase-root {
      width: 90px;
      height: 90px;
    }

    .MuiAvatar-root {
      width: 84px;
      height: 84px;
    }
  }
`;

export const MenuButtonStyled = styled('div')`
  display: flex;
  justify-content: flex-end;
  padding: 16px 0;
`;
