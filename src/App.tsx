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
    label: 'label1',
    value: {
      code: 'code1',
      SKU: 1,
    },
  },
  {
    label: 'label2',
    value: {
      code: 'code2',
      SKU: 2,
    },
  },
  {
    label: 'label3',
    value: {
      code: 'code3',
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
                ? option.value.code
                : null,
            );
          }
        }}
        isOptionEqualToValue={(option) => option.value.code === state}
        renderOption={(props, option) => (
          <BoxStyled component="li" {...props}>
            {/* <img
              width="32"
              src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
              alt={option.label}
            /> */}
            {option.label}
          </BoxStyled>
        )}
      />
    </StyledLayout>
  );
}

export default App;
