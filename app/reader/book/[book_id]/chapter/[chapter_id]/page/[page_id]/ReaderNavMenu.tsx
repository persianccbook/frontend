import { List, Settings } from "@mui/icons-material";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import useReaderStore from "../../../../../../../../store/readerStore";

const IconButton = styled(Button)({
  color: "inherit",
  variant: "text",
  p: 0,
  mx: 0,
  maxWidth: 25,
  minHeight: 0,
  minWidth: 0,
  bgcolor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

const ReaderNavMenu = () => {
  const { setActiveMenu } = useReaderStore();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  if (isSmUp) return <Box></Box>;

  return (
    <Box
      sx={{
        display: "flex",
        borderRadius: "25px",
        width: "max-content",
        height: 50,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        p: 7,
        m: 5,
      }}
    >
      <IconButton
        disableRipple
        onClick={() => {
          setActiveMenu("settings");
        }}
      >
        <Settings />
      </IconButton>
      <IconButton
        disableRipple
        onClick={() => {
          setActiveMenu("contents");
        }}
      >
        <List />
      </IconButton>
    </Box>
  );
};

export default ReaderNavMenu;
