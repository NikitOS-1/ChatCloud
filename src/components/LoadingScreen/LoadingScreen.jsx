import { Box, CircularProgress } from "@mui/material";
import nProgress from "nprogress";
import { useEffect } from "react";

const LoadingScreen = () => {
  nProgress.configure({
    showSpinner: { easing: "ease", speed: 700, minimum: 0.1 },
  });

  useEffect(() => {
    nProgress.start();
    return () => {
      nProgress.done();
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}>
        <CircularProgress />
      </Box>
    </>
  );
};
export default LoadingScreen;
