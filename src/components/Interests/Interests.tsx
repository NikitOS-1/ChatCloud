import { CircularProgress } from '@mui/material';

import { InterestItem, InterestsContainer } from './styled';
import { InterestsProps } from './types';

export const Interests = ({
  options,
  onChange,
  value,
  isLoading = true,
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
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <CircularProgress />
        </div>
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
