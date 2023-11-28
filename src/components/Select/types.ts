export interface SelectInterface<T = string> {
  label?: string;
  placeholder?: string;
  options: OptionInterface<T>[];
  value: T;
  onChange: (value: T) => void;
}

export interface OptionInterface<T> {
  label: string;
  value: T;
  icon?: React.ReactNode;
}
