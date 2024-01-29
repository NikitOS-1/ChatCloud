import { useRoutes } from 'react-router-dom';

import { StyledLayout } from './components/Layout';
import { Toster } from './components/Toster';
import routes from './routes';

function App() {
  const allPages = useRoutes(routes);

  return (
    <StyledLayout>
      <Toster message="Toster works" />
      {allPages}
    </StyledLayout>
  );
}

export default App;
