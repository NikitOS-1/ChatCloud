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
