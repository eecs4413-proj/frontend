import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Badge
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

import logo from "./assets/logo192.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar >
          <Box sx={{ flexGrow: 1, display: 'flex'}}>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{ mr: 2, display: 'flex' }}
            >
              <img
                src={logo}
                alt="Convenience Store"
                className="logo"
                height="50px"
              />
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {location.pathname !== "/" ? (
              <div>
                <Box sx={{ flexGrow: 1 }}>
                <IconButton
                      component={Link}
                      to="/cart"
                      aria-label="Show items in my cart"
                      color="secondary"
                    >
                      <Badge><ShoppingCartIcon /></Badge>
                    </IconButton>

                    <IconButton
                      component={Link}
                      to="/"
                      aria-label="Logout"
                      color="secondary"
                    >
                      <Badge><LogoutIcon /></Badge>
                    </IconButton>
                </Box>
              </div>
              ) : 
              <div>
                <IconButton
                  component={Link}
                  to="/catalog"
                  aria-label="Login"
                  color="secondary"
                >
                  <Badge><LoginIcon /></Badge></IconButton>
              </div>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
