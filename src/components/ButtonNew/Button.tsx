import React from 'react';

import { LabelWrapper, StyledButton } from './styled';
import { ButtonType } from './types';

export interface ButtonInterface {
  label?: string;
  variant?: ButtonType;
  isDisabled?: boolean;
  icon?: React.ReactNode;
  onClick(): void;
}

export const Button = ({
  label,
  variant = 'primary',
  isDisabled,
  icon,
  onClick,
}: ButtonInterface) => {
  const renderedLabel = <LabelWrapper>{label}</LabelWrapper>;

  return (
    <StyledButton variant={variant} disabled={isDisabled} onClick={onClick}>
      {renderedLabel}
      {icon}
    </StyledButton>
  );
};
