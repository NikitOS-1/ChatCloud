import { LoadingScreen } from './components/LoadingScreen';
import LoginPage from './Pages/LoginPage/LoginPage';

interface Route {
  path: string;
  element: JSX.Element | React.ReactNode;
}

const routes: Route[] = [
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/chat',
    element: <LoadingScreen />,
  },
];
// protected route

export default routes;
