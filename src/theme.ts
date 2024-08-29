import { createTheme } from "@mui/material";
import { coral, teal } from "./colors";

const baseTheme = createTheme({
  direction: "rtl",
  spacing: 2,
});

export const lighttheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main:teal[500],
    },
    secondary:{
        main: coral[500],
    }
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main:teal[400],
    },
    secondary:{
        main: coral[400],
    }
  },
});
