import Button from './components/Button/Button';
import { StyledLayout } from './components/Layout';

function App() {
  return (
    <StyledLayout>
      <p>container</p>
      <Button>Button</Button>
      <p>disabled</p>
      <Button isDisabled>Button</Button>
      <p>loading</p>
      <Button isLoading>Button</Button>
      <p>icon</p>
      <Button endIcon={<img src="./" />}>Button</Button>
      <Button startIcon={<img src="./" />}>Button</Button>
      <p>outlined</p>
      <Button variant="outlined">Button</Button>
      <p>outlined disabled</p>
      <Button variant="outlined" isDisabled>
        Button
      </Button>
      <p>outlined loading</p>
      <Button variant="outlined" isLoading>
        Button
      </Button>
      <p>outlined with icon</p>
      <Button variant="outlined" endIcon={<img src="./" />}>
        Button
      </Button>
      <Button variant="outlined" startIcon={<img src="./" />}>
        Button
      </Button>
    </StyledLayout>
  );
}

export default App;
