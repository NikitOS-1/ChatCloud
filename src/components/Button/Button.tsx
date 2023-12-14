import { StyledButton } from './styled';
import { ButtonInterface, CONTAINED_TYPE } from './types';

export const Button = ({
  label,
  variant = CONTAINED_TYPE,
  isDisabled,
  icon,
  ...restProps
}: ButtonInterface) => (
  <StyledButton
    {...restProps}
    variant={variant}
    disabled={isDisabled}
    startIcon={icon}
  >
    {label}
  </StyledButton>
);
