import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { darkTheme, lightTheme } from "../theme";
import useThemeStore from "../store/themeStore";

interface PaletteProps {
  children: ReactNode;
}

const ColorModeSwitch = () => {
  const { mode, toggleMode } = useThemeStore();
  const theme = mode === "dark" ? darkTheme : lightTheme;
  // const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }

  // const toggleMode = () => {
  //   return mode === "dark" ? setMode("light") : setMode("dark");
  // }

  return (
    <Button onClick={toggleMode}>
      {mode !== "dark" ? (
        <DarkMode sx={{ color: theme.palette.text.primary }} />
      ) : (
        <LightMode sx={{ color: theme.palette.text.primary }} />
      )}
    </Button>
  );
};

export default ColorModeSwitch;
