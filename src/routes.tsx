// import { LoadingScreen } from "./components/LoadingScreen";
import { AuthGuard } from './hooks/AuthGuard/AuthGuard';
import { ChatPage } from './Pages/ChatPage';
import { Search } from './Pages/ChatPage/components/Search';
import { ChatTabs } from './Pages/ChatPage/components/Tabs';
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
    element: (
      <AuthGuard>
        <ChatPage />
      </AuthGuard>
    ),
    children: [
      {
        path: 'message',
        element: <ChatTabs />,
      },
      {
        path: 'search',
        element: <Search />,
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
