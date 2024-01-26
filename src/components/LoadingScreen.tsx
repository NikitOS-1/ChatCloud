import { Box, CircularProgress } from '@mui/material';

export const LoadingScreen = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          color: '#FFBA55',
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    </>
  );
};
