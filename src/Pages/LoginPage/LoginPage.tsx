import { useMemo, useState } from 'react';

import { AvatarSelect } from '../../components/AvatarSelect';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Tabs } from '../../components/Tabs';

import { H1, P } from './Form/styled';
import {
  FormContainerStyled,
  LoginPageStyled,
  SliderContainerStyled,
} from './styled';

// interface CountriesInterface {
//   countries: CountryInterface[];
// }

// interface CountryInterface {
//   code: string;
//   country: string;
// }

export const LoginPage = () => {
  const [tabId, setTabId] = useState<string>('user');
  // const [dataCountries, setDataCountries] = useState<CountryInterface[]>([]);
  // const [selectedCountry, setSelectedCountry] = useState<string>('');

  const renderedTabContent = useMemo(() => {
    if (tabId === 'user') {
      return (
        <>
          <H1>let's create your account</H1>
          <P>Choose your username and photo to personalize your account</P>
          <AvatarSelect options={[]} onSelect={() => null} />
          <Input value={''} onChange={() => null} />
        </>
      );
    }

    return <div>Some other</div>;
  }, [tabId]);

  const handleContinueClick = () => {
    if (tabId === 'interests') {
      // @todo: make request
      return;
    }

    setTabId('interests');
  };

  return (
    <LoginPageStyled>
      <SliderContainerStyled>S</SliderContainerStyled>
      <FormContainerStyled>
        {renderedTabContent}
        <div>
          <Tabs items={['user', 'interests']} value={tabId} />
          <Button label="Continue" onClick={handleContinueClick} />
        </div>
      </FormContainerStyled>
    </LoginPageStyled>
  );
};
