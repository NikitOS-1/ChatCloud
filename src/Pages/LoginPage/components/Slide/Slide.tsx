import styled from 'styled-components';

import { H1, P } from '../../../../components/Typography';

interface SlideInterface<T = string> {
  src?: T;
  title?: T;
  description?: T;
}

const Image = styled.img`
  margin-top: 40px;
  width: 70%;
  height: auto;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Slide = ({ src, title, description }: SlideInterface) => {
  return (
    <>
      <Image src={src} alt={title} />
      <H1 style={{ margin: '40px 0px 20px 0px' }}>{title}</H1>
      <P>{description}</P>
    </>
  );
};
