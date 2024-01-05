import { ChangeEvent } from 'react';

export interface InputProps<T = string> {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  name?: string;
  value: T;
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}
