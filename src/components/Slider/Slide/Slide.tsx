import styled from 'styled-components';

interface SlideInterface<T = string> {
  src?: T;
  title?: T;
  description?: T;
}

const Image = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.primary.primaryBlueText};
  font-family: ${({ theme }) => theme.fonts.CarroisGothicSCRegular};
  font-size: ${({ theme }) => theme.fontSizes.Regular32};
  margin-top: 80px;
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium20};
    margin-top: 30px;
  }
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.neutralColors[500]};
  font-family: ${({ theme }) => theme.fonts.CeraProRegular};
  font-size: ${({ theme }) => theme.fontSizes.Medium16};
  margin: 10px 0px 120px 0px;
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSizes.Medium12};
    margin: 5px 0px 60px 0px;
  }
`;

const Slide = ({ src, title, description }: SlideInterface) => {
  return (
    <>
      <Image src={src} alt={title} />
      <H1>{title}</H1>
      <P>{description}</P>
    </>
  );
};
export default Slide;
