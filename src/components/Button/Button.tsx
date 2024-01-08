import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styled';
import { ButtonInterface, CONTAINED_TYPE } from './types';

type ButtonInterfaceProps = ButtonInterface &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    color?:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'success'
      | 'error'
      | 'info'
      | 'warning';
  };

export const Button = ({
  label,
  variant = CONTAINED_TYPE,
  isDisabled,
  icon,
  ...restProps
}: ButtonInterfaceProps) => (
  <StyledButton
    {...restProps}
    variant={variant}
    disabled={isDisabled}
    startIcon={icon}
  >
    {label}
  </StyledButton>
);
