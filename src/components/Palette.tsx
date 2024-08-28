import { ReactNode } from "react";
import useThemeStore from "../store/themeStore";
import { darkTheme, lighttheme } from "../theme";
import { ThemeProvider } from "@mui/material";

interface PaletteProps {
  children: ReactNode;
}

export function Palette({ children }: PaletteProps) {
  const { mode } = useThemeStore();

  const theme = mode === "dark" ? darkTheme : lighttheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
