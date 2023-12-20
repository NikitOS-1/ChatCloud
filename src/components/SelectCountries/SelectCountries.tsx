import { Select } from '../Select';
import { BoxStyled } from '../Select/styled';

import { SelectCountriesInterface } from './types';

export const SelectCountries = ({
  options,
  onChange,
  value,
}: SelectCountriesInterface) => {
  return (
    <div>
      <Select
        open
        label="Choose a country"
        options={options}
        value={value}
        onChange={(_, option) => {
          if (option && typeof option !== 'string' && 'label' in option) {
            onChange(option.label);
          }
        }}
        isOptionEqualToValue={(option) => option.label === value}
        renderOption={(props, option) =>
          option && (
            <BoxStyled component="li" {...props}>
              <img
                src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
                alt={option.label}
              />
              {option.label}
            </BoxStyled>
          )
        }
      />
    </div>
  );
};
