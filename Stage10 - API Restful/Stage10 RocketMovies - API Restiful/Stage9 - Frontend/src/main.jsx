import React from "react";
import ReactDOM from "react-dom/client";

//Estilo Global
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/global";

import { AuthProvider } from "./hooks/auth";

//Pages
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </ThemeProvider>
  </React.StrictMode>
);
