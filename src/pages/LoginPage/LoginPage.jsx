import { Box, Container, Grid, Paper } from "@mui/material";
import Form from "components/Form/Form";
import Slider from "components/Slider/Slider";

const LoginPage = () => {
  return (
    <Box>
      <Container maxWidth={"xl"}>
        <Grid container>
          <Grid item xs={12} md={8}>
            <Slider />
          </Grid>
          <Grid item xs={12} md={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default LoginPage;
