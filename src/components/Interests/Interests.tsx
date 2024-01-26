import { LoadingScreen } from '../LoadingScreen';

import { InterestItem, InterestsContainer } from './styled';
import { InterestsProps } from './types';

export const Interests = ({
  options,
  onChange,
  value,
  isLoading = true,
  interestError = false,
}: InterestsProps) => {
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
      {interestError ? 'Error: Items not found 404 ' : ''}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {options.map(({ id, topic }) => (
            <InterestItem
              key={id}
              label={topic}
              selected={value.includes(topic)}
              onClick={() => updateSelected(topic)}
            />
          ))}
        </>
      )}
    </InterestsContainer>
  );
};
