import { Button } from '../../components/Button';
import { Slider } from '../../components/Slider';
import { Tabs } from '../../components/Tabs';

import { slides } from './Slide/slides';
import { FormWrapper } from './Form';
import { InterestsWrapper } from './Interests';
import { Container, FormContainer, SliderContainer } from './styled';

export const LoginPage = () => {
  const mainComponents = [
    { id: 0, component: <FormWrapper /> },
    { id: 1, component: <InterestsWrapper /> },
  ];

  const footerComponents = [
    {
      id: 0,
      component: (
        <div style={{ marginTop: '40px' }}>
          <Button label="Continue" onClick={() => null} />
        </div>
      ),
    },
    {
      id: 1,
      component: (
        <div style={{ marginTop: '40px' }}>
          <Button label="Continue" onClick={() => null} />
          <p>terms and conditions</p>
        </div>
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
