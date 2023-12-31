import React from "react";
import Head from "next/head";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "@/assets/pb.png";
import bg from "@/assets/background.png";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
const pages = ["Home", "Rules", "About Us", "Whitelist"];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [selectedButton, setSelectedButton] = React.useState("Home");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleButtonClick = (page) => {
    setSelectedButton(page);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "transparent" }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
            color={"red"}
          >
            <Image src={logo} alt="" width={200} />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src={logo} alt="" width={200} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                borderBottom:
                  selectedButton === "Home" ? "1px solid red" : "none",
              }}
              onClick={() => handleButtonClick("Home")}
            >
              <Link href={"/"}>Home</Link>
            </Button>
            {pages.slice(1).map((page) => (<Link href={`/${page.toLowerCase().replace(/\s/g, "")}`} key={page}>
              <Button
                
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  borderBottom:
                    selectedButton === page ? "1px solid red" : "none",
                }}
                onClick={() => handleButtonClick(page)}
              >
                
                  {page}
                
              </Button></Link>
            ))}
          </Box>
          <Button variant="contained" color="secondary" sx={{ my: 2 }}>Login / Register</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
