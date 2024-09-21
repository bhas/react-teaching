"use client";

import React from "react";
import { Container, Typography, Link, Button, Box, Stack } from "@mui/material";
import { Roles } from "@/enums/Roles";

export default function Footer() {
  const currentUser = "Bjorn";
  const currentUseRole = Roles.guardian;
  const onDemandIcecream = () => {
    alert(
      "A strongly worded email has been sent to Hack Your Future that you demand icecream now!"
    );
  };

  return (
    <Stack
      component="footer"
      direction="row"
      justifyContent="space-between"
      sx={{
        py: 3,
        px: 10,
        mt: "auto",
        backgroundColor: "primary.main",
        color: "white",
      }}
    >
      <Stack direction="column">
        <Typography variant="body1">© 2024 The Icecream Mafia</Typography>
        <Link href="#" color="inherit" sx={{ mr: 2 }}>
          About
        </Link>
        <Link href="#" color="inherit">
          Contact
        </Link>
      </Stack>

      {currentUseRole === Roles.crawer && (
        <Button
          variant="contained"
          color="error"
          sx={{ mt: 1 }}
          onClick={onDemandIcecream}
        >
          I Demand Icecream!
        </Button>
      )}
    </Stack>
  );
}
