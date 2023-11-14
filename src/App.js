import Header from "./container/Header/Header";
import Main from "./container/Main/Main";
import Footer from "./container/Footer/Footer";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { appTheme } from "theme";

function App() {
  const appThemes = appTheme({ theme: "light" });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appThemes}>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
