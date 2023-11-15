import { createGlobalStyle } from "styled-components";
import { theme } from "../theme/theme";

const GlobalStyles = createGlobalStyle`
  body {
    h1,h2{
      color:${theme.colors.primary.primaryBlue}
    }
    p{
      color:${theme.colors.neutralColors[300]}
    }
    font-family:${theme.fonts.main}
  }
`;

export default GlobalStyles;
