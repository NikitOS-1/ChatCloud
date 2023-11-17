import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "theme/theme";

const Container404 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
`;
const LinkNav = styled(NavLink)``;

const ErrorPage = () => {
  return (
    <Container404>
      <img
        src="/static/Illustaration/error-page.svg"
        width="30%"
        alt="Error 404"
      />

      <h1>Ooops... 404!</h1>
      <p>The page you requested could not be found.</p>
      <LinkNav
        to="/"
        style={{
          display: "block",
          marginTop: "1.5rem",
          fontWeight: 800,
          textDecoration: "underline",
        }}>
        Back to Home Page
      </LinkNav>
    </Container404>
  );
};

export default ErrorPage;
