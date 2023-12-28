import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1440px;
  height: 1024px;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    height: 820px;
  }
`;

export const SliderContainer = styled.div`
  max-width: 760px;

  @media (max-width: 800px) {
    max-width: none;
    width: 100%;
  }
`;

export const FormContainer = styled.div`
  max-width: 680px;

  @media (max-width: 800px) {
    max-width: none;
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    margin-top: 48px;
    color: ${({ theme }) => theme.colors.neutralColors[300]};
    font-family: ${({ theme }) => theme.fonts.CeraProMedium};
    font-size: ${({ theme }) => theme.fontSizes.Medium16};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.primaryYellow};
  }

  @media (max-width: 800px) {
    margin-bottom: 10px;

    p {
      margin-top: 32px;
      padding: 16px;
      font-size: ${({ theme }) => theme.fontSizes.Medium12};
    }
  }
`;
