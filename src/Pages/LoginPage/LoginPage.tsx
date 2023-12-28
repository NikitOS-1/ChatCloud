import { Button } from '../../components/Button';
import { Slider } from '../../components/Slider';
import { Tabs } from '../../components/Tabs';

import { slides } from './Slide/slides';
import { FormWrapper } from './Form';
import { InterestsWrapper } from './Interests';
import {
  ButtonContainer,
  Container,
  FormContainer,
  SliderContainer,
} from './styled';

export const LoginPage = () => {
  const mainComponents = [
    { id: 0, component: <FormWrapper /> },
    { id: 1, component: <InterestsWrapper /> },
  ];

  const footerComponents = [
    {
      id: 0,
      component: (
        <ButtonContainer>
          <Button label="Continue" onClick={() => null} />
        </ButtonContainer>
      ),
    },
    {
      id: 1,
      component: (
        <ButtonContainer>
          <Button label="Continue" onClick={() => null} />
          <p>
            By proceeding you agree to our <a href="#">Privacy Policy</a> and{' '}
            <a href="#">Terms of Service</a>
          </p>
        </ButtonContainer>
      ),
    },
  ];

  return (
    <Container>
      <SliderContainer>
        <Slider slides={slides} />
      </SliderContainer>
      <FormContainer>
        <Tabs
          mainComponents={mainComponents}
          footerComponents={footerComponents}
        />
      </FormContainer>
    </Container>
  );
};
