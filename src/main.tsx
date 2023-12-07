import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';

import App from './App.tsx';
import { theme } from './theme';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* @todo: pass theme when it is defined */}
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
