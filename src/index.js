import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {theme} from './theme';
import { BrowserRouter } from 'react-router-dom';
import Maintenance from './Pages/Maintenance';
import { ParallaxProvider } from 'react-scroll-parallax';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <App />        
      </ParallaxProvider>      
      {/* <Maintenance/> */}
    </ThemeProvider>
  </BrowserRouter>
);