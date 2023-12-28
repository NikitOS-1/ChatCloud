import { useState } from 'react';

import { Icon } from '../../../components/Icon';
import { Interests } from '../../../components/Interests';

import { categories } from './categories';
import { ButtonStyled, Container, H1, P } from './styled';

interface InterestsInterface {
  setTogglePage: (index: number) => void;
}

export const InterestsWrapper = ({ setTogglePage }: InterestsInterface) => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  return (
    <Container>
      <ButtonStyled onClick={() => setTogglePage(0)}>
        <Icon name="arrowBack" />
      </ButtonStyled>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <H1>Choose your interests</H1>
        <P>Pick up your favourite topics to set up your feeds</P>
      </div>
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
