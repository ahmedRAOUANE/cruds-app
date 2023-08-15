import React from "react";
import { Link } from "react-router-dom";

import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar component="nav" position="relative">
      <Container>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CRUDS
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {["home", "products", "categories"].map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link
                  to={item}
                  style={{
                    textDecoration: "none",
                    textTransform: "capitalize",
                    color: "#fff",
                  }}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
