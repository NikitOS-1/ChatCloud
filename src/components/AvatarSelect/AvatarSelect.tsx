import * as React from 'react';
import { Avatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { Button } from '../Button';

import {
  MainAvatar,
  MainButtonWrapper,
  MenuButtonStyled,
  MenuListStyled,
  MenuStyled,
} from './styled';
import { AvatarSelectProps } from './types';

export const AvatarSelect = ({ options }: AvatarSelectProps) => {
  const defaultAvatar = 'src/assets/icons/Avatar/NoPhoto.svg';

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedAvatar, setSelectedAvatar] =
    React.useState<string>(defaultAvatar);
  const [buffer, setBuffer] = React.useState<string>(selectedAvatar);

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

  // not styled for my buttom
  const renderedMainButton = (
    <div style={{ marginTop: 16 }}>
      <Button
        variant="text"
        label="Change Photo"
        onClick={(event) => handleClick(event)}
      />
    </div>
  );

  return (
    <>
      <MainButtonWrapper>
        <MainAvatar alt="You avatar" src={selectedAvatar} />
        {renderedMainButton}
      </MainButtonWrapper>
      <MenuStyled
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuListStyled>
          {options.map((option) => (
            <MenuItem
              key={option.id}
              selected={option.src === buffer}
              onClick={() => setBuffer(option.src)}
            >
              <Avatar alt="You avatar" src={option.src} />
            </MenuItem>
          ))}
        </MenuListStyled>
        <MenuButtonStyled>
          <Button
            variant="text"
            label="Cancel"
            onClick={() => setAnchorEl(null)}
          />
          <Button label="Save" onClick={setAvatar} />
        </MenuButtonStyled>
      </MenuStyled>
    </>
  );
};
