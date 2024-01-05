import { useRoutes } from 'react-router-dom';

import { StyledLayout } from './components/Layout';
import routes from './routes';

function App() {
  const allPages = useRoutes(routes);

  return <StyledLayout>{allPages}</StyledLayout>;
}

export default App;
