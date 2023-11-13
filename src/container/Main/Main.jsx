import { useRoutes } from "react-router-dom";
import routes from "../../routes";

const Main = () => {
  const allPages = useRoutes(routes);

  return <main>main</main>;
};

export default Main;
