import Autocomplete from '@mui/material/Autocomplete';

import { BoxStyled, TextFieldStyled } from './styled';
import { SelectInterface } from './types';

export const Select = ({
  options,
  label,
  onChange,
  ...props
}: SelectInterface) => {
  return (
    <Autocomplete
      {...props}
      //@ts-expect-error iserror
      onChange={(_, selected) => onChange(selected)}
      isOptionEqualToValue={(option, value) => option.code === value.code}
      options={options}
      clearIcon={false}
      open
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <BoxStyled component="li" {...props}>
          <img
            width="32"
            src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
            alt={option.label}
          />
          {option.label}
        </BoxStyled>
      )}
      renderInput={(params) => (
        <TextFieldStyled
          {...params}
          label={label}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};
