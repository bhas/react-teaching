"use client"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from "react";
import { Button, Tooltip } from '@mui/material';


export default function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    const renderUserMenu = () => {
      return <>
      <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
            
            <Tooltip title={currentUser}>
              <AccountCircleIcon />
            </Tooltip>
          </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          >
          <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      
          </>
    };

    const renderLoginButton = () => {
      return <Button color="inherit">Login</Button>
    }
  
    const currentUser = null;// "Bjørn Vinther";
    return (
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" style={{ flexGrow: 1, textAlign: 'center' }}>
            Can I Have Icecream
          </Typography>

          { currentUser ? renderUserMenu() : renderLoginButton() }
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  }