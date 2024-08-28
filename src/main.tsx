import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OpenAPI } from "./openapi/index.ts";
import { CssBaseline } from "@mui/material";
// import { theme, colorMode } from "./theme.ts";
import { Palette } from "./components/ColorModeSwitch.tsx";

OpenAPI.BASE = "http://localhost:8000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Palette>
      <CssBaseline />
      <App />
    </Palette>
  </StrictMode>
);
