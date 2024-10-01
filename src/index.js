import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { LanguageProvider } from "./LanguageContext"; // Adjust the path as needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ParallaxProvider>
    </ThemeProvider>
  </BrowserRouter>
);
