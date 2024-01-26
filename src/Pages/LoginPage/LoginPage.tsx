import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import { AvatarSelect } from '../../components/AvatarSelect';
import { Button } from '../../components/Button';
import { Icon } from '../../components/Icon';
import { Input } from '../../components/Input';
import { Interests } from '../../components/Interests';
import ModalWindow from '../../components/Modal/Modal';
import { Select } from '../../components/Select';
import { BoxStyled } from '../../components/Select/styled';
import { Slider } from '../../components/Slider';
import { Tabs } from '../../components/Tabs';
import { H1, P } from '../../components/Typography';
import { useCountries } from '../../hooks/countries/useCountries';
import { useInterests } from '../../hooks/interests/useInterests';
import { useLogin } from '../../hooks/login/login';

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
import { validationSchema } from './validationConfig';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [tabId, setTabId] = useState<string>('user');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(avatars[0].src);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { data: countries, isLoading: loadingCounties } = useCountries();
  const {
    data: interests,
    isLoading: loadingInterests,
    error: interestError,
  } = useInterests();
  const { mutate } = useLogin();

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
              name="userName"
              label="Username*"
              value={formik.values.userName}
              onChange={formik.handleChange}
              required={formik.values.userName ? false : true}
              error={formik.errors.userName}
            />
            <Select
              name="country"
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
                ) {
                  setSelectedCountry(option.country);
                }
              }}
              isOptionEqualToValue={(option) =>
                option.country === selectedCountry
              }
              renderOption={(props, option) =>
                option && (
                  <BoxStyled component="li" key={option.code} {...props}>
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
          <div
            onClick={() => setTabId('user')}
            style={{ width: '100%', cursor: 'pointer' }}
          >
            <div>
              <Icon name="arrowBack" />
            </div>
          </div>
          <H1>Choose your interests</H1>
          <P>Pick up your favourite topics to set up your feeds</P>
        </HeaderStyled>
        <UserInfoStyled>
          <Interests
            interestError={!!interestError}
            isLoading={loadingInterests}
            options={interests?.topics === undefined ? [] : interests?.topics}
            value={selectedInterests}
            onChange={setSelectedInterests}
          />
        </UserInfoStyled>
      </>
    );
  };

  const handleContinueClick = (event: React.MouseEvent) => {
    if (tabId === 'user') {
      event.preventDefault();
      setTabId('interests');
      setIsModalOpen(false);
    }
    if (tabId === 'interests') {
      if (selectedInterests.length === 0) {
        event.preventDefault();
        setIsModalOpen(true);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      userName: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => handleSubmit(),
  });

  const handleSubmit = () => {
    mutate({
      username: formik.values.userName,
      profile_picture: selectedAvatar,
      country: selectedCountry,
      topics: selectedInterests,
    });
    navigate('/chat/message');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LoginPageStyled>
      <ModalWindow
        isOpen={isModalOpen}
        onClose={closeModal}
        onSkip={handleSubmit}
      />
      <SliderContainerStyled>
        <Slider slides={slides} autoPlay />
      </SliderContainerStyled>
      <FormContainerStyled onSubmit={formik.handleSubmit}>
        {renderedTabContent()}
        <FooterContainerStyled>
          <Tabs
            items={[{ item: 'user' }, { item: 'interests' }]}
            value={tabId}
          />
          <Button
            isDisabled={!formik.dirty || !formik.isValid}
            type="submit"
            label="Continue"
            onClick={handleContinueClick}
          />
          <P>
            By proceeding you agree to our <a href="#">Privacy Policy</a> and{' '}
            <a href="#">Terms of Service</a>
          </P>
        </FooterContainerStyled>
      </FormContainerStyled>
    </LoginPageStyled>
  );
};
