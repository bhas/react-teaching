"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import { Button, Snackbar, Stack, Tooltip } from "@mui/material";
import Image from "next/image";

export default function Header({onLogout}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = () => {
    handleMenuClose();
    setShowToast(true);
    onLogout();
  }

  const currentUser = "Bjørn";
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flex="1"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <Image src="/fatcat.webp" alt="Icecream" width="80" height="80" />
            <Typography variant="h5" spacing={2}>
              Can I Has Icecream?
            </Typography>
          </Stack>
        </Stack>

        {currentUser && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Typography fontSize="14" marginRight={1}>
                {currentUser}
              </Typography>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>My account</MenuItem>
              <MenuItem onClick={onLogoutClick}>Logout</MenuItem>
            </Menu>
          </>
        )}
        <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={showToast}
        autoHideDuration={3000}
        message="Successfully logged out"
      />
      </Toolbar>
    </AppBar>
  );
}
