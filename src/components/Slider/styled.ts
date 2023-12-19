import styled from 'styled-components';

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const SliderWrapper = styled.div<{ translateValue: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translateValue}%);
`;

export const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  outline: none;
  color: #333;
`;

export const PrevButton = styled(SliderButton)`
  left: 0;
`;

export const NextButton = styled(SliderButton)`
  right: 0;
`;
