import React from 'react';

import { StyledButton } from './styled';
import { ButtonVariantType, CONTAINED_TYPE } from './types';

export interface ButtonInterface {
  label?: string;
  variant?: ButtonVariantType;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = CONTAINED_TYPE,
  isDisabled,
  icon,
  onClick,
}: ButtonInterface) => (
  <StyledButton
    className="button"
    variant={variant}
    disabled={isDisabled}
    onClick={onClick}
    startIcon={icon}
  >
    {label}
  </StyledButton>
);
