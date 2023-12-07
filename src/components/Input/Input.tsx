import { useMemo } from 'react';

import { TextFieldStyled } from './styled';
import { InputProps } from './types';

export const Input = ({
  error,
  required = true,
  onChange,
  ...restProps
}: InputProps) => {
  const requiredLabel = useMemo(
    () => (required ? '*Required' : ''),
    [required],
  );

  return (
    <TextFieldStyled
      {...restProps}
      variant="outlined"
      fullWidth
      helperText={error || requiredLabel}
      error={!!error}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
