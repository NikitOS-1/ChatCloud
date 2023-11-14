import NotFound from "pages/ErrorPage/ErrorPage";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage/HomePage")));
const LoginPage = Loadable(lazy(() => import("./pages/LoginPage/LoginPage")));
const ErrorPage = Loadable(lazy(() => import("./pages/ErrorPage/ErrorPage")));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
