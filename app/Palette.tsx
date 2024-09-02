"use client";
import { ReactNode } from "react";
import { darkTheme, lightTheme } from "./theme";
import { ThemeProvider } from "@mui/material";
import useThemeStore from "../store/themeStore";

interface PaletteProps {
  children: ReactNode;
}

export function Palette({ children }: PaletteProps) {
  const { mode } = useThemeStore();

  const theme = mode === "dark" ? darkTheme : lightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
