import { useState } from 'react';

import { StyledLayout } from './components/Layout';
import { Select } from './components/Select';
import { BoxStyled } from './components/Select/styled';

interface OptionInterface {
  label: string;
  value: {
    code: string;
    SKU: number;
  };
}

const options: OptionInterface[] = [
  {
    label: 'Ukraine',
    value: {
      code: 'UA',
      SKU: 1,
    },
  },
  {
    label: 'Italy',
    value: {
      code: 'IT',
      SKU: 2,
    },
  },
  {
    label: 'Germany',
    value: {
      code: 'GM',
      SKU: 3,
    },
  },
];

function App() {
  const [state, setState] = useState<null | string>(null);
  console.log(state);

  return (
    <StyledLayout style={{ margin: '10px' }}>
      <Select
        label="Choose a country"
        options={options}
        value={state}
        onChange={(_, option) => {
          if (option !== null) {
            setState(
              typeof option !== 'string' && 'value' in option
                ? option.label
                : null,
            );
          }
        }}
        isOptionEqualToValue={(option) => option.label === state}
        renderOption={(props, option) => (
          <BoxStyled component="li" {...props}>
            <img
              width="32"
              src={`https://flagcdn.com/${option.value.code.toLowerCase()}.svg`}
              alt={option.label}
            />
            {option.label}
          </BoxStyled>
        )}
      />
    </StyledLayout>
  );
}

export default App;
