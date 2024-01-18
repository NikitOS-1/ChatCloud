// import { LoadingScreen } from "./components/LoadingScreen";
import { ChatPage } from './Pages/ChatPage';
import { ChatTabs } from './Pages/ChatPage/Tabs';
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
    path: '/',
    element: <LoginPage />,
  },
  {
    path: 'chat',
    element: <ChatPage />,
    children: [
      {
        path: 'message',
        element: <ChatTabs />,
      },
      {
        path: 'search',
        element: <div>Search...</div>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Error Page...</div>,
  },
];
// protected route

export default routes;
