// import { LoadingScreen } from "./components/LoadingScreen";
import { AuthGuard } from './hooks/AuthGuard/AuthGuard';
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
        element: (
          <div style={{ border: '1px solid black', width: 'inherit' }}>
            Search...
          </div>
        ),
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
