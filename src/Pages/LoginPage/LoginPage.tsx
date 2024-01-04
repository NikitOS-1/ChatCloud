import { useState } from 'react';

import { AvatarSelect } from '../../components/AvatarSelect';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Interests } from '../../components/Interests';
import { Select } from '../../components/Select';
import { BoxStyled } from '../../components/Select/styled';
import { Slider } from '../../components/Slider';
import { Tabs } from '../../components/Tabs';
import { H1, P } from '../../components/Typography';
import { useCountries } from '../../hooks/countries/useCountries';
import { useInterests } from '../../hooks/interests/useInterests';

import { slides } from './components/Slide/slides';
import { avatars } from './avatars';
import {
  FooterContainerStyled,
  FormContainerStyled,
  HeaderStyled,
  LoginPageStyled,
  SliderContainerStyled,
  UserInfoStyled,
} from './styled';

export const LoginPage = () => {
  const [tabId, setTabId] = useState<string>('user');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(avatars[0].src);
  const [userName, setUserName] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const { data: countries, isLoading: loadingCounties } = useCountries();
  const { data: interests, isLoading: loadingInterests } = useInterests();

  const renderedTabContent = () => {
    if (tabId === 'user') {
      return (
        <>
          <HeaderStyled>
            <H1>let's create your account</H1>
            <P>Choose your username and photo to personalize your account</P>
          </HeaderStyled>
          <UserInfoStyled>
            <AvatarSelect
              value={selectedAvatar}
              options={avatars}
              onSelect={setSelectedAvatar}
            />

            <Input
              placeholder="Username*"
              value={userName}
              onChange={setUserName}
              required={userName ? false : true}
            />

            <Select
              fullWidth
              loading={loadingCounties}
              label="Choose a country"
              options={
                countries?.countries === undefined ? [] : countries?.countries
              }
              value={selectedCountry}
              onChange={(_, option) => {
                if (
                  option !== null &&
                  typeof option === 'object' &&
                  'country' in option
                )
                  setSelectedCountry(option.country);
              }}
              isOptionEqualToValue={(option) =>
                option.country === selectedCountry
              }
              renderOption={(props, option) =>
                option && (
                  <BoxStyled component="li" {...props}>
                    <img
                      src={`https://flagcdn.com/${option.code.toLowerCase()}.svg`}
                      alt={option.country}
                    />
                    {option.country}
                  </BoxStyled>
                )
              }
            />
          </UserInfoStyled>
        </>
      );
    }

    return (
      <>
        <HeaderStyled>
          <div onClick={() => setTabId('user')} style={{ width: '100%' }}>
            <Icon name="arrowBack" />
          </div>
          <H1>Choose your interests</H1>
          <P>Pick up your favourite topics to set up your feeds</P>
        </HeaderStyled>
        <UserInfoStyled>
          <Interests
            isLoading={loadingInterests}
            options={interests?.topics === undefined ? [] : interests?.topics}
            value={selectedInterests}
            onChange={setSelectedInterests}
          />
        </UserInfoStyled>
      </>
    );
  };

  const handleContinueClick = () => {
    if (tabId === 'interests') {
      // @todo: make request
      return;
    }

    setTabId('interests');
  };

  return (
    <LoginPageStyled>
      <SliderContainerStyled>
        <Slider slides={slides} autoPlay />
      </SliderContainerStyled>
      <FormContainerStyled>
        {renderedTabContent()}
        <FooterContainerStyled>
          <Tabs items={['user', 'interests']} value={tabId} />
          <Button label="Continue" onClick={handleContinueClick} />
          <P>
            By proceeding you agree to our <a href="#">Privacy Policy</a> and{' '}
            <a href="#">Terms of Service</a>
          </P>
        </FooterContainerStyled>
      </FormContainerStyled>
    </LoginPageStyled>
  );
};
