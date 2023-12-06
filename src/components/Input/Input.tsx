import { TextFieldStyled } from './styled';
import { InputProps } from '.';

export const Input = ({
  label,
  isError = false,
  disabled = false,
  errorMessage,
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
        helperText={errorMessage}
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
