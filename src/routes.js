import NotFound from "pages/NotFound/NotFound";
import LoadingScreen from "./components/LoadingScreen";
import { Suspense, lazy } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage/HomePage")));
const NotFoundPage = Loadable(lazy(() => import("./pages/NotFound/NotFound")));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
