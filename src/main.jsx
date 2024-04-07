import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "./utils/constants.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { BrowserRouter } from "react-router-dom";
import isPropValid from "@emotion/is-prop-valid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) => {
        return typeof elementToBeRendered === "string"
          ? isPropValid(propName)
          : true;
      }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles></GlobalStyles>
        <BrowserRouter>
          <App />
          <ToastContainer></ToastContainer>
        </BrowserRouter>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
