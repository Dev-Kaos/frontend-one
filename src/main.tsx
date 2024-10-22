import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssVarsProvider, ThemeProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import theme from "./shared/utils/themeOne.ts";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssVarsProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CssBaseline />
            <App />
            <ReactQueryDevtools initialIsOpen={true} />
          </BrowserRouter>
        </QueryClientProvider>
      </CssVarsProvider>
    </ThemeProvider>
  </StrictMode>
);
