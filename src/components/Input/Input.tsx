import { useMemo } from 'react';

import { InputLabel, InputStyled } from './styled';
import { InputProps } from '.';

export const Input = ({
  isError = false,
  value,
  onChange,
  label,
  placeholder,
}: InputProps) => {
  const handleChangeValue = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const renderedLabel = useMemo(
    () => (label ? <InputLabel>{label}</InputLabel> : null),
    [label],
  );

  return (
    <>
      {renderedLabel}
      <InputStyled
        $isError={isError}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </>
  );
};
