import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <Button variant="outlined">
        <Link to={"/login"}>Lets start</Link>
      </Button>
    </div>
  );
};
export default HomePage;
