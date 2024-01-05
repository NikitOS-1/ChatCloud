import Autocomplete from '@mui/material/Autocomplete';

import { theme } from '../../theme';
import { Icon } from '../Icon';

import { DropdownStyles, TextFieldStyled } from './styled';
import { SelectInterface } from './types';

export function Select<T>(props: SelectInterface<T>) {
  return (
    <Autocomplete
      {...props}
      clearIcon={false}
      popupIcon={
        <Icon name="expandMore" fill={theme.colors.primary.primaryYellow} />
      }
      //@ts-expect-error TS error = option.country is not string | T
      getOptionLabel={(option) => option.country ?? option}
      autoHighlight
      renderInput={(params) => (
        <>
          <TextFieldStyled
            {...params}
            label={props.label}
            error={props.error}
          />
          <DropdownStyles />
        </>
      )}
    />
  );
}
