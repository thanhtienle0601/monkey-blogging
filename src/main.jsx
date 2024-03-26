import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/constants.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
