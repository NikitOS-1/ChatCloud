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
    { id: 1, component: <div>terms and conditions</div> },
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
