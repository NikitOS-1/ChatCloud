import { useRoutes } from "react-router-dom";
import routes from "../../routes";

const Main = () => {
  const allPages = useRoutes(routes);

  return (
    <main>
      <Container maxWidth="lg">{allPages}</Container>
    </main>
  );
};

export default Main;
