// import { useState } from "react";
import { AvatarSelect } from '../../../components/AvatarSelect';
import { Input } from '../../../components/Input';

import { avatars } from './avatars';
import { Container, H1, P } from './styled';

export const FormWrapper = () => {
  // const [selectedAvatar, setSelectedAvatar] = useState("");
  // const [userName, setUserName] = useState("");
  //   const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <Container>
      <H1>let's create your account</H1>
      <P>Choose your username and photo to personalize your account</P>
      <AvatarSelect options={avatars} onSelect={() => null} />
      <div>
        <Input label="Username*" value={'foo'} onChange={() => null} />
      </div>
    </Container>
  );
};
