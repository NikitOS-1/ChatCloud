export interface SelectCountriesInterface {
  options: OptionInterface[];
  onChange: (option: string | null) => void;
  value: string | null;
}

export interface OptionInterface {
  label: string;
  code: string;
}
