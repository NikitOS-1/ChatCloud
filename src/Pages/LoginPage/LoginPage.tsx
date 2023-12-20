import { Slider } from '../../components/Slider';
import Slide from '../../components/Slider/Slide/Slide';

import { Container, FormContainer, SliderContainer } from './styled';

export const LoginPage = () => {
  const slides = [
    <Slide
      src="src/assets/icons/Illustrations/signin-illustration-1.svg"
      title="Share your hobbies with others"
      description="Chat with people based on common interests"
    />,
    <Slide
      src="src/assets/icons/Illustrations/signin-illustration-2.svg"
      title="Find new friends around the world"
      description="Add new people to your friend list"
    />,
    <Slide
      src="src/assets/icons/Illustrations/signin-illustration-3.svg"
      title="Group Chats"
      description="Add new people to your friend list"
    />,
  ];

  return (
    <Container>
      <SliderContainer>
        <Slider slides={slides} />
      </SliderContainer>
      <FormContainer>
        {
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            architecto tenetur cupiditate laborum laboriosam hic esse harum,
            dolorum iste voluptates, odit nobis quae ex accusamus quam minima
            illum fugiat molestiae.
          </div>
        }
      </FormContainer>
    </Container>
  );
};
