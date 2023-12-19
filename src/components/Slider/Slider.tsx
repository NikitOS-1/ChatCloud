import { useCallback,useEffect, useState } from 'react';

import { Icon } from '../Icon';

import {
  NextButton,
  PrevButton,
  Slide,
  SliderContainer,
  SliderWrapper,
} from './styled';
import { SliderProps } from './types';

export const Slider = ({ slides, autoPlay, autoPlaySec = 5 }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides]);

  useEffect(() => {
    if (autoPlay) {
      const intervalId = setInterval(() => {
        nextSlide();
      }, autoPlaySec * 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [currentSlide, autoPlay, autoPlaySec, nextSlide]);

  return (
    <SliderContainer>
      <SliderWrapper translateValue={-currentSlide * 100}>
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
      </SliderWrapper>
      <PrevButton onClick={prevSlide}>
        <Icon name="arrowLeft" />
      </PrevButton>
      <NextButton onClick={nextSlide}>
        <Icon name="arrowRight" />
      </NextButton>
    </SliderContainer>
  );
};
