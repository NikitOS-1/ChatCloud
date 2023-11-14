import { useRoutes } from "react-router-dom";
import routes from "../../routes";

const Main = () => {
  const allPages = useRoutes(routes);

  return <main>{allPages}</main>;
};

export default Main;
