"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Badge, { BadgeProps } from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import adidas from "@/public/images/adidas.png";
import Image from "next/image";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme } from "@mui/material/styles";
import Link from "@mui/material/Link";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "40px",
  border: `2px solid ${theme.palette.secondary.main}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  marginLeft: 0,
  width: "100%",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "width 0.3s ease",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.secondary.main,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

function TopAppBar() {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"  // Change to 'sticky' for a fixed effect
      sx={{
        backgroundColor: "white", 
        backdropFilter: "blur(100px)",  // Apply blur on the bottom
        padding: 0,
      }}
    >
      <Container>
        <Toolbar disableGutters>
          <div className="w-full flex">
            <div className="hidden sm:flex items-center">

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", 
                  paddingRight: "1rem",
                  flexShrink: 0,
                }}
              >
                <Image src={adidas} alt="Logo" width={50} height={50} />
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  endIcon={<ArrowDropDownIcon />}
                  sx={{ color: theme.palette.secondary.main }}
                  onClick={handleClick}
                >
                  Categories
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link href="/page1">Option 1</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href="/page2">Option 2</Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link href="/page3">Option 3</Link>
                  </MenuItem>
                </Menu>
              </Box>
            </div>

            <div className="sm:hidden">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "60px",
                  width: "60px", 
                }}
              >
                <Image src={adidas} alt="Logo" width={60} height={60}/>
              </Box>
            </div>

            <div className="flex items-center justify-center grow w-full px-[4rem]">
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </div>

            <div className="hidden sm:flex gap-[1rem] py-[1rem]">
              <Tooltip title="Cart">
                <IconButton
                  aria-label="cart"
                  sx={{ padding: "auto", width: "auto" }}
                >
                  <Badge color="primary" variant="dot" invisible={false}>
                    <LocalMallIcon fontSize="small" />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ padding: "auto", width: "auto" }}
                >
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Link>{setting}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopAppBar;

