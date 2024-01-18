// import { LoadingScreen } from "./components/LoadingScreen";
import { ChatPage } from './Pages/ChatPage';
import { LoginPage } from './Pages/LoginPage/LoginPage';

interface Route {
  path: string;
  element: JSX.Element | React.ReactNode;
  children?: Children[];
}
interface Children {
  path: string;
  element: JSX.Element | React.ReactNode;
}

const routes: Route[] = [
  {
    path: 'chat',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <ChatPage />,
    children: [
      {
        path: '/m',
        element: <div>jknfnkfkjnndfndfkdkmdfjkndfdfdfknkdfdfj</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Error Page</div>,
  },
];
// protected route

export default routes;
