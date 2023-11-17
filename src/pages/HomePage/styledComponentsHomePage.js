import styled from "styled-components";
import { theme } from "theme/theme";

export const ContainerHomePage = styled.div`
  max-width: ${theme.breakpoints.xxl};
  margin: 0 auto;
  display: flex;

  max-height: ${theme.breakpoints.height};

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
export const ContainerSlider = styled.div`
  max-width: 761px;

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    max-width: 661px;
  }
`;
export const ContainerForm = styled.div`
  width: 679px;

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    max-width: 579px;
  }
`;
