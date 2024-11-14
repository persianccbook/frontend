import { DarkMode, LightMode } from "@mui/icons-material";
import { Button } from "@mui/material";
import { darkTheme, lightTheme } from "../theme";
import useThemeStore from "../../store/themeStore";

const ColorModeSwitch = () => {
  const { mode, toggleMode } = useThemeStore();
  const theme = mode === "dark" ? darkTheme : lightTheme;

  return (
    <Button
      onClick={toggleMode}
      sx={{ borderRadius: "50%", minHeight: 50, minWidth: 50, aspectRatio: 1 }}
    >
      {mode !== "dark" ? (
        <DarkMode sx={{ color: theme.palette.text.primary }} />
      ) : (
        <LightMode sx={{ color: theme.palette.text.primary }} />
      )}
    </Button>
  );
};

export default ColorModeSwitch;
