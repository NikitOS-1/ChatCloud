import { useRoutes } from "react-router-dom";
import routes from "../../routes";
import { Container } from "@mui/material";

const Main = () => {
  const allPages = useRoutes(routes);

  return (
    <main>
      <Container maxWidth="lg">{allPages}</Container>
    </main>
  );
};

export default Main;
