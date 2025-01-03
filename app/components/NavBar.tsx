"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
// import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import MailIcon from "@mui/icons-material/Mail";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ColorModeSwitch from "./ColorModeSwitch";
import { darkTheme, lightTheme } from "../theme";
import useThemeStore from "../../store/themeStore";
import { usePathname, useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";
import { Login, Logout } from "@mui/icons-material";
import Logo from "./logo";
import Link from "next/link";
import ReaderNavMenu from "../reader/book/[book_id]/chapter/[chapter_id]/page/[page_id]/ReaderNavMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.background.default, 0.3),
  "&:hover": {
    backgroundColor: alpha(theme.palette.background.default, 0.5),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  left: 0,
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavBar = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuthStore();
  const pathName = usePathname();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const { mode } = useThemeStore();
  const theme = mode === "dark" ? darkTheme : lightTheme;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      {isAuthenticated && (
        <MenuItem
          onClick={() => {
            logout();
            handleMenuClose();
          }}
        >
          Logout
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem
        onClick={
          isAuthenticated
            ? handleProfileMenuOpen
            : () => router.push("/login")
        }
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
        >
          {isAuthenticated ? (
            <AccountCircle sx={{ color: theme.palette.text.primary }} />
          ) : (
            <Login sx={{ color: theme.palette.text.primary }} />
          )}
        </IconButton>
        {isAuthenticated ? <p>Profile</p> : <p>Login</p>}
      </MenuItem>
      {isAuthenticated && (
        <MenuItem
          onClick={() => {
            logout();
          }}
        >
          <IconButton
            size="large"
            // aria-label="account of current user"
            // aria-controls="primary-search-account-menu"
            // aria-haspopup="true"
          >
            <Logout sx={{ color: theme.palette.text.primary }} />
          </IconButton>
          <p>Logout</p>
        </MenuItem>
      )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Link href={"/"}>
            <Logo />
          </Link>

          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            
            
            کتابخانه آزاد پارسی
          </Typography> */}
          {false && pathName === "/" && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="جستجو..."
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {pathName.startsWith("/reader") && (
            <Box sx={{ flexGrow: 1 }}>
              <ReaderNavMenu />
            </Box>
          )}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ColorModeSwitch />
            {/* <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="secondary">
                <MailIcon sx={{ color: theme.palette.text.primary }} />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon sx={{ color: theme.palette.text.primary }} />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={
                isAuthenticated
                  ? handleProfileMenuOpen
                  : () => router.push("/login")
              }
            >
              {isAuthenticated ? (
                <AccountCircle sx={{ color: theme.palette.text.primary }} />
              ) : (
                <Login sx={{ color: theme.palette.text.primary }} />
              )}
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <ColorModeSwitch />
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default NavBar;
