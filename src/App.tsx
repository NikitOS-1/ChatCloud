import Input from './components/Input/Input';
import { StyledLayout } from './components/Layout';

function App() {
  return (
    <StyledLayout>
      <p>input</p>
      <Input />
      <p>input error</p>
      <Input isError />
    </StyledLayout>
  );
}

export default App;
