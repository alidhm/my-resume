import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import LoginIcon from '@mui/icons-material/Login';

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, link: '/' },
    { text: 'About Me', icon: <InfoIcon />, link: '/About' },
    { text: 'Contact Me', icon: <ContactMailIcon />, link: '/contact' },
    { text: 'Login', icon: <LoginIcon />, link: '/login' },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(135deg, #007bff, #00c6ff)' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>

          {isMobile ? (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
              >
                <MenuIcon />
              </IconButton>

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ali.Dev
              </Typography>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                TransitionComponent={Fade}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.text}
                    onClick={handleMenuClose}
                    component={NavLink}
                    to={item.link}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Stack direction="row" spacing={4}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  component={NavLink}
                  to={item.link}
                  startIcon={item.icon}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '16px',
                    '&.active': {
                      color: '#ffd700',
                      borderBottom: '2px solid #ffd700',
                    },
                    '&:hover': {
                      color: '#ffd700',
                      borderBottom: '2px solid #ffd700',
                      transition: 'all 0.3s ease',
                    }
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Stack>
          )}

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
