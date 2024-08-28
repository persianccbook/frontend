import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
  spacing: 2,
});

export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      light: red[200],
      main: red[500],
      dark: red[900],
    },
  },
  spacing: 2,
});
