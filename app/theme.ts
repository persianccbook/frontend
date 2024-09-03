"use client";
import { createTheme } from "@mui/material";
import { coral, teal } from "./colors";
import { grey } from "@mui/material/colors";

const baseTheme = createTheme({
  direction: "rtl",
  spacing: 2,
  typography: {
    fontFamily: "VazirMatn",
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
      contrastText: teal[900],
    },
    secondary: {
      main: coral[500],
      contrastText: teal[50],
    },
    background: {
      default: teal[50],
      paper: teal[50],
    },
    text: {
      primary: teal[900],
      secondary: coral[900],
    },
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: teal[400],
      contrastText: teal[900],
    },
    secondary: {
      main: coral[400],
      contrastText: teal[50],
    },
    background: {
      default: teal[900],
      paper: teal[900],
    },
    text: {
      primary: teal[50],
      secondary: coral[50],
    },
  },
});
