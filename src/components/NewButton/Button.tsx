import React from 'react';

import { StyledButton } from './styled';
import { ButtonVariantType } from './types';

export interface ButtonInterface {
  label?: string;
  variant?: ButtonVariantType;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = 'contained',
  isDisabled,
  onClick,
}: ButtonInterface) => (
  <StyledButton
    className="button"
    variant={variant}
    disabled={isDisabled}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);
