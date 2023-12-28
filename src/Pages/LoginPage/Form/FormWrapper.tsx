import { useState } from 'react';

import { AvatarSelect } from '../../../components/AvatarSelect';
import { Input } from '../../../components/Input';

import { countries } from './SelectCountries/countries';
import { avatars } from './avatars';
import { SelectCountries } from './SelectCountries';
import { Container, H1, P } from './styled';

export const FormWrapper = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  return (
    <Container>
      {selectedAvatar}
      <H1>let's create your account</H1>
      <P>Choose your username and photo to personalize your account</P>
      <div style={{ marginBottom: '48px' }}>
        <AvatarSelect options={avatars} onSelect={setSelectedAvatar} />
      </div>
      <div style={{ marginBottom: '32px' }}>
        <Input label="Username*" value={userName} onChange={setUserName} />
      </div>
      <div style={{ marginBottom: '88px' }}>
        <SelectCountries
          options={countries}
          value={selectedCountry}
          onChange={setSelectedCountry}
        />
      </div>
    </Container>
  );
};
