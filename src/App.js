import Header from "./container/Header/Header";
import Main from "./container/Main/Main";
import Footer from "./container/Footer/Footer";
import GlobalStyles from "style/GlobalStyles";
import Normalize from "style/Normalize";
import ResetStyles from "style/ResetStyles";

function App() {
  return (
    <>
      <ResetStyles />
      <Normalize />
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
