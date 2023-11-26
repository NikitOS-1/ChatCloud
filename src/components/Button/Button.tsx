import React from 'react';

import { IconWrapper, LabelWrapper, StyledButton } from './styled';
import { ButtonType } from '.';

export interface ButtonInterface {
  label?: string;
  variant?: ButtonType;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = 'primary',
  isDisabled,
  icon,
  onClick,
}: ButtonInterface) => {
  return (
    <StyledButton variant={variant} disabled={isDisabled} onClick={onClick}>
      <LabelWrapper>
        {label}
        <IconWrapper>{icon}</IconWrapper>
      </LabelWrapper>
    </StyledButton>
  );
};

export default Button;
