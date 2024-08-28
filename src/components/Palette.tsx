import { ReactNode } from "react";
import useThemeStore from "../store/themeStore";
import { darktheme, lighttheme } from "../theme";
import {ThemeProvider } from "@mui/material";

interface PaletteProps {
  children: ReactNode;
}

export function Palette({ children }: PaletteProps) {
  const { mode } = useThemeStore();

  const theme = mode === "dark" ? darktheme : lighttheme;

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}
