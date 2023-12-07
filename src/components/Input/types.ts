export interface InputProps<T = string> {
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  required?: boolean;
  value: T;
  onChange: (value: T) => void;
}
