import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <img
        src="/static/Illustaration/error-page.svg"
        width="100%"
        alt="Error 404"
      />

      <h1>Ooops... 404!</h1>
      <p>The page you requested could not be found.</p>
      <NavLink
        to="/"
        style={{
          display: "block",
          marginTop: "1.5rem",
          fontWeight: 600,
          textDecoration: "underline",
        }}>
        Back to Home Page
      </NavLink>
    </>
  );
};

export default ErrorPage;
