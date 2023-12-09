import { AutocompleteProps } from '@mui/material';

export interface SelectInterface<T>
  extends Omit<AutocompleteProps<T, boolean, boolean, boolean>, 'renderInput'> {
  label: string;
}
