import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyles = createGlobalStyle`
  body {
    color: ${theme.primaryColors.primaryBlue}
  }
`;

export default GlobalStyles;
