"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Palette } from "../../components/Palette";
import { CssBaseline } from "@mui/material";
import { OpenAPI } from "../../openapi/index";

const App = dynamic(() => import("../../App"), { ssr: true });
OpenAPI.BASE = "http://localhost:8000";


export function ClientOnly() {
  return (
    <Palette>
      <CssBaseline />
      <App />
    </Palette>
  );
}
