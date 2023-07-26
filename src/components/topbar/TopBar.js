import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccountCircle from "@mui/icons-material/AccountCircle";

const TopBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CurrencyRupeeIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Expense Tracker App
          </Typography>

          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
              <Typography variant="body1" component="div" ml={1}>
                demo_user
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
