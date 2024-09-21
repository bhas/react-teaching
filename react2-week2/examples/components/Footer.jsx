"use client"

import React from 'react';
import { Container, Typography, Link, Button, Box } from '@mui/material';

export default function Footer() {
  const userName = "Bjorn";
  return (
    <Box component="footer" sx={{ py: 2, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="sm">
        <Typography variant="body1">
          © 2024 The Icecream Mafia
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>About</Link>
            <Link href="#" color="inherit">Contact</Link>
          </Box>
          <Box>
            <Button variant="outlined" color="white" sx={{ mt: 1 }}>
              Reach out
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};