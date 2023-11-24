import React from 'react';

import { ButtonProps } from './types';
import { ButtonContainer, EndIcon, Label, Spiner, StartIcon } from '.';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'container',
  startIcon,
  endIcon,
  isDisabled = false,
  isLoading = false,
}) => {
  return (
    <ButtonContainer
      variant={variant}
      disabled={isDisabled}
      isLoading={isLoading}
    >
      {startIcon && <StartIcon>{startIcon}</StartIcon>}
      <Label>{isLoading ? <Spiner /> : children}</Label>
      {endIcon && <EndIcon>{endIcon}</EndIcon>}
    </ButtonContainer>
  );
};

export default Button;
