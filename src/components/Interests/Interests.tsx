import { InterestItem, InterestsContainer } from './styled';
import { InterestsProps } from './types';

export const Interests = ({ options, onChange, value }: InterestsProps) => {
  const updateSelected = (category: string) => {
    const isIdInArray = value.some((item) => item === category);

    if (isIdInArray) {
      const updatedValue = value.filter((item) => item !== category);
      onChange(updatedValue);
    } else {
      const updatedValue = [...value, category];
      onChange(updatedValue);
    }
  };

  return (
    <InterestsContainer>
      {options.map(({ id, category }) => (
        <InterestItem
          key={id}
          label={category}
          selected={value.includes(category)}
          onClick={() => updateSelected(category)}
        />
      ))}
    </InterestsContainer>
  );
};
