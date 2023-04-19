import * as React from "react";
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
import Logo from "../../assets/img/logoGreenGo.png";
import Link from "@mui/material/Link";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CommuteIcon from "@material-ui/icons/Commute";
import MessageIcon from "@material-ui/icons/Message";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { Chip } from "@mui/material";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem("GreenGoGigaToken")) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("GreenGoGigaToken");
    localStorage.removeItem("GreenGoGigaUsername");
    window.location.href = "/";
    setIsAuthenticated(false);
  };
  function handleNav(event, path) {
    event.preventDefault();
    window.location.href = path;
  }

  const pages = ["Proposer un trajet"];
  const settings = [
    {
      label: "Profil",
      icon: <AccountCircleIcon sx={{ backgroundColor: "white" }} />,
      component: Link,
      onClick: (event) => handleNav(event, "/profil"),
    },
    {
      label: "Trajet",
      icon: <CommuteIcon />,
      component: Link,
      onClick: (event) => handleNav(event, "/dashboard"),
    },
    {
      label: "Message",
      icon: <MessageIcon />,
      onClick: (event) => handleNav(event, "/discussion"),
    },
    { label: "Déconnexion", icon: <LogoutIcon />, onClick: handleLogout },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginButton = () => {
    window.location.href = "/connexion";
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton href="/" edge="start" color="inherit" aria-label="menu">
            <Link to="/">
              <img src={Logo} alt="Logo" style={{ height: 40 }} />
            </Link>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GreenGo
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
                  <Typography  textAlign="center">{page}</Typography>
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
            GreenGo
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, backgroundColor: "#022B3A" }}>
            {isAuthenticated ? (
              <>
                <Tooltip title="Paramètres">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "40px" }}
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
                  {settings.map((setting, index) => (
                    <MenuItem
                      key={setting.label}
                      component={Link}
                      to={setting.path}
                    >
                      <Chip
                        sx={{ width: "100%" }}
                        icon={setting.icon}
                        label={setting.label}
                        onClick={setting.onClick}
                        variant="outlined"
                      />
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                variant="outlined"
                onClick={handleLoginButton}
                sx={{ color: "#fff", borderColor: "#fff" }}
              >
                Connexion
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
