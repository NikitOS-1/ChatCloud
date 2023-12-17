import { useState } from 'react';

import { InterestItem, InterestsContainer } from './styled';
import { InterestsProps } from './types';

export const Interests = ({ options }: InterestsProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const updateSelected = (category: string) => {
    const isIdInArray = selected.some((item) => item === category);

    if (isIdInArray) {
      setSelected((prev) => prev.filter((item) => item !== category));
    } else {
      setSelected((prev) => [...prev, category]);
    }
  };

  console.log(selected);
  return (
    <InterestsContainer>
      {options.map(({ id, category }) => (
        <InterestItem
          key={id}
          label={category}
          selected={selected.includes(category)}
          onClick={() => updateSelected(category)}
        />
      ))}
    </InterestsContainer>
  );
};
