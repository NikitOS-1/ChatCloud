import { useState } from 'react';

import { InterestItem, InterestsContainer } from './styled';
import { InterestsProps } from './types';

export const Interests = ({ interests }: InterestsProps) => {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);

  const handleInterestClick = (interestId: number) => {
    if (selectedInterests.includes(interestId)) {
      setSelectedInterests((prevSelected) =>
        prevSelected.filter((id) => id !== interestId),
      );
    } else {
      setSelectedInterests((prevSelected) => [...prevSelected, interestId]);
    }
  };

  return (
    <InterestsContainer>
      {interests.map((interest) => (
        <InterestItem
          key={interest.id}
          selected={selectedInterests.includes(interest.id)}
          onClick={() => handleInterestClick(interest.id)}
        >
          {interest.name}
        </InterestItem>
      ))}
    </InterestsContainer>
  );
};
