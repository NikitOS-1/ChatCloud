import Header from "./container/Header/Header";
import Main from "./container/Main/Main";
import Footer from "./container/Footer/Footer";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { appTheme } from "./theme";

function App() {
  const appsTheme = appTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appsTheme}>
        <CssBaseline />
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
