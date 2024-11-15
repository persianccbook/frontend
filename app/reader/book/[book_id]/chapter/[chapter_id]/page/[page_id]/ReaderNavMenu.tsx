import { AutoStories, Menu, MenuOpen } from "@mui/icons-material";
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
  const { isMobileMenuOpen, toggleMobileMenuState } = useReaderStore();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  if (isSmUp) return <Box></Box>;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "rgba(255,255,255,.3)",
        display: "flex",
        borderRadius: "25px",
        width: "max-content",
        height: 35,
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        py: 3,
        m: 5,
      }}
    >
      <IconButton
        sx={{
          width: "100%",
          borderRadius: "50%",
          minHeight: 35,
          minWidth: 35,
          aspectRatio: 1,
          bgcolor: isMobileMenuOpen
            ? "rgba(255,255,255,.5)!important"
            : "inherit",
        }}
        disableRipple
        onClick={() => {
          toggleMobileMenuState();
        }}
      >
        {isMobileMenuOpen ? <MenuOpen /> : <Menu />}
      </IconButton>
      <IconButton
        sx={{
          width: "100%",
          borderRadius: "50%",
          minHeight: 35,
          minWidth: 35,
          aspectRatio: 1,
          bgcolor: isMobileMenuOpen
            ? "inherit"
            : "rgba(255,255,255,.5)!important",
        }}
        disableRipple
        onClick={() => {
          toggleMobileMenuState();
        }}
      >
        <AutoStories />
      </IconButton>
    </Box>
  );
};

export default ReaderNavMenu;
