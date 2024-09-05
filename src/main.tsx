import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssVarsProvider, ThemeProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import theme from "./utils/themeOne.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssVarsProvider theme={theme}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </CssVarsProvider>
    </ThemeProvider>
  </StrictMode>
);
