export interface InputProps<T = string> {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  value: T;
  onChange: (value: T) => void;
}
