import NotFound from "pages/ErrorPage/ErrorPage";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import React, { Suspense, lazy, useEffect, useState } from "react";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const HomePage = Loadable(lazy(() => import("./pages/HomePage/HomePage")));
const ErrorPage = Loadable(lazy(() => import("./pages/ErrorPage/ErrorPage")));

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default routes;
