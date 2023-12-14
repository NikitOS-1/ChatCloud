import * as React from 'react';
import { Avatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { Button } from '../Button';
import { Icon } from '../Icon';

import {
  AvatarOptions,
  ButtonClose,
  MainAvatar,
  MainButtonWrapper,
  MenuButtonStyled,
  PopoverStyled,
} from './styled';
import { AvatarSelectProps } from './types';

export const AvatarSelect = ({ options }: AvatarSelectProps) => {
  const defaultAvatar = 'src/assets/icons/Avatar/NoPhoto.svg';

  const [selectedAvatar, setSelectedAvatar] =
    React.useState<string>(defaultAvatar);
  const [buffer, setBuffer] = React.useState<string>(selectedAvatar);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement> | undefined) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    }
  };

  const setAvatar = () => {
    setSelectedAvatar(buffer);
    setAnchorEl(null);
  };

  const renderedMainButton = (
    <div style={{ marginTop: 16 }}>
      <Button
        variant="text"
        label="Change Photo"
        // onClick={(event) => handleClick(event)}
      />
    </div>
  );

  return (
    <>
      <MainButtonWrapper style={{ marginLeft: '200px' }}>
        <MainAvatar
          alt="You avatar"
          src={selectedAvatar}
          onClick={(event) => handleClick(event)}
        />
        {renderedMainButton}
      </MainButtonWrapper>
      <PopoverStyled
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ButtonClose onClick={() => setAnchorEl(null)}>
          <Icon name="close" />
        </ButtonClose>
        <AvatarOptions>
          {options.map((option) => (
            <MenuItem
              key={option.id}
              selected={option.src === buffer}
              onClick={() => setBuffer(option.src)}
            >
              <Avatar alt="You avatar" src={option.src} />
            </MenuItem>
          ))}
        </AvatarOptions>
        <MenuButtonStyled>
          <Button
            variant="text"
            label="Cancel"
            onClick={() => setAnchorEl(null)}
          />
          <Button label="Save" onClick={setAvatar} />
        </MenuButtonStyled>
      </PopoverStyled>
    </>
  );
};
