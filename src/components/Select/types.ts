export interface SelectInterface<T = string> {
  label?: string;
  disabled?: boolean;
  options: OptionInterface<T>[];
  onChange: (value: T) => void;
}

export interface OptionInterface<T> {
  code: T;
  label: T;
  phone?: T;
  suggested?: boolean;
}
