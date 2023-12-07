import { TextFieldStyled } from './styled';
import { InputProps } from './types';

export const Input = ({
  label,
  isError = false,
  disabled = false,
  alert,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  const handleChangeValue = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <TextFieldStyled
        className="input"
        variant="outlined"
        fullWidth
        helperText={alert}
        label={label}
        error={isError}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChangeValue(e.target.value)}
      />
    </>
  );
};
