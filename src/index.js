import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from './theme';
import { BrowserRouter } from 'react-router-dom';
import Maintenance from './Pages/Maintenance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      {/*<App />*/}
      <Maintenance/>
    </ThemeProvider>
  </BrowserRouter>
);

