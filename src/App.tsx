import { StyledLayout } from './components/Layout';
import { LoginPage } from './Pages/LoginPage';

function App() {
  fetch('https://api.github.com/users/alejandrogalaz')
    .then((data) => console.log(data))
    .then((res) => console.log(res));

  return (
    <StyledLayout>
      <LoginPage />
    </StyledLayout>
  );
}

export default App;
