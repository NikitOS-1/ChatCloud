import Autocomplete from '@mui/material/Autocomplete';

import { theme } from '../../theme';
import { Icon } from '../Icon';

import { BoxStyled, DropdownStyles, TextFieldStyled } from './styled';
import { SelectInterface } from './types';

export const Select = ({
  options,
  label,
  onChange,
  ...props
}: SelectInterface) => {
  return (
    <>
      <DropdownStyles />
      <Autocomplete
        {...props}
        onChange={(_, selected) => onChange(selected?.label || '')}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        options={options}
        clearIcon={false}
        popupIcon={
          <Icon name="expandMore" fill={theme.colors.primary.primaryYellow} />
        }
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
    </>
  );
};
