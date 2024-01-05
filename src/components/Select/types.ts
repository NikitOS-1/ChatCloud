import { ReactEventHandler } from 'react';
import { AutocompleteProps } from '@mui/material';

export interface SelectInterface<T>
  extends Omit<AutocompleteProps<T, boolean, boolean, boolean>, 'renderInput'> {
  label?: string;
  error?: ReactEventHandler<HTMLDivElement> | boolean;
  name?: string;
}
