import { Grid } from "@mui/material";
import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";

const HomePage = () => {
  return (
    <Grid container maxWidth={1440} maxHeight={1024} margin={"0 auto"}>
      <Grid item xs={12} sm={12} md={6}>
        <Slider />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Form />
      </Grid>
    </Grid>
  );
};
export default HomePage;
