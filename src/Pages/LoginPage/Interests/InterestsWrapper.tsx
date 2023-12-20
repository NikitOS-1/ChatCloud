import { useState } from 'react';

import { Interests } from '../../../components/Interests';

import { categories } from './categories';
import { Container } from './styled';

export const InterestsWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  console.log(selectedCategory);

  return (
    <Container>
      <h1>Choose your interests</h1>
      <p>Pick up your favourite topics to set up your feeds</p>
      <Interests
        options={categories}
        value={selectedCategory}
        onChange={setSelectedCategory}
      />
    </Container>
  );
};
