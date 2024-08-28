import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const baseTheme = createTheme({
  direction: "rtl",
  spacing: 2,
});

export const lighttheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
});
