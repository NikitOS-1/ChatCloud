import { useState } from 'react';

import { AvatarSelect } from '../../../components/AvatarSelect';
import { Input } from '../../../components/Input';

import { avatars } from './avatars';

export const FormWrapper = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [userName, setUserName] = useState('');
  //   const [selectedCountry, setSelectedCountry] = useState("");
  console.log(selectedAvatar);

  return (
    <div>
      <h1>let's create your account</h1>
      <p>Choose your username and photo to personalize your account</p>
      <AvatarSelect options={avatars} onSelect={setSelectedAvatar} />
      <Input label="Username*" value={userName} onChange={setUserName} />
    </div>
  );
};
