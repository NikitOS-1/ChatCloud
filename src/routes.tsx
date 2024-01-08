// import { LoadingScreen } from "./components/LoadingScreen";
import { ChatPage } from './Pages/ChatPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';

interface Route {
  path: string;
  element: JSX.Element | React.ReactNode;
}

const routes: Route[] = [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ChatPage />,
  },
];
// protected route

export default routes;
