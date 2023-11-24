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
      disabled={isDisabled || isLoading}
      isLoading={isLoading}
    >
      <Label>
        {startIcon && <StartIcon>{startIcon}</StartIcon>}
        {isLoading ? <Spiner /> : children}
        {endIcon && <EndIcon>{endIcon}</EndIcon>}
      </Label>
    </ButtonContainer>
  );
};

export default Button;
