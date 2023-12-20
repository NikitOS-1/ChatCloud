import { useState } from 'react';

import { Interests } from '../../../components/Interests';

import { categories } from './categories';

export const InterestsWrapper = () => {
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  console.log(selectedCategory);

  return (
    <div>
      <Interests
        options={categories}
        value={selectedCategory}
        onChange={setSelectedCategory}
      />
    </div>
  );
};
