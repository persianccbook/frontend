import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { darkTheme, lighttheme } from "../theme";
import useThemeStore from "../store/themeStore";

interface PaletteProps {
  children: ReactNode;
}

const ColorModeSwitch = () => {
  const { mode, toggleMode } = useThemeStore();
  // const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }

  // const toggleMode = () => {
  //   return mode === "dark" ? setMode("light") : setMode("dark");
  // }

  return (
    <Button onClick={toggleMode}>
      {mode !== "dark" ? <DarkMode /> : <LightMode />}
    </Button>
  );
};

export default ColorModeSwitch;

