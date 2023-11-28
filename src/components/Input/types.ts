export interface InputProps<T = string> {
  label?: string;
  isError?: boolean;
  placeholder?: string;
  value: T;
  onChange: (value: T) => void;
}
