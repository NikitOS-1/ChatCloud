import { useState } from 'react';

import { Interests } from '../../../components/Interests';

import { categories } from './categories';
import { Container, H1, P } from './styled';

export const InterestsWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  return (
    <Container>
      <div>button back</div>
      <H1>Choose your interests</H1>
      <P>Pick up your favourite topics to set up your feeds</P>
      <div
        style={{
          marginBottom: '66px',
        }}
      >
        <Interests
          options={categories}
          value={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>
    </Container>
  );
};
