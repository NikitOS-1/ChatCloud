export interface InputProps<T = string> {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  isError?: boolean;
  alert?: string;
  value: T;
  onChange: (value: T) => void;
}
