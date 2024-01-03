import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SliderWrapper = styled.div<{ $translateValue: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.$translateValue}%);
`;

export const Slide = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #333;
`;

export const PrevButton = styled(SliderButton)`
  left: 10px;
`;

export const NextButton = styled(SliderButton)`
  right: 10px;
`;
