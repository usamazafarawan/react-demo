import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Menu,
  MenuItem,
  Typography,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Search as SearchIcon,
  MailOutline as MailOutlineIcon,
  AccountCircle as AccountCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon
} from '@mui/icons-material';
import Header from "./Header";
import igsLogo from '../../assets/images/igs-logo-procurement.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const menuItems = [
  'IIGS STRATEGY',
  'IIGS iPROCURE',
  'IIGS iSUPPLY',
  'IIGS MANAGED SERVICES',
];

const TopHeaderBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2D53A4',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 2,
        py: 1,
      }}
    >
      {/* Left Icons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" sx={{ color: 'white' }}>
          <SearchIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: 'white' }}>
          <PhoneIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: 'white' }}>
          <LanguageIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* Right Icons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" sx={{ color: '#F36434' }}>
          <ChatBubbleOutlineIcon sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton size="small" sx={{ color: '#F36434' }}>
          <AccountCircleIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>
    </Box>
  );
};


const DualNavbar = () => {
  const topLinks = ['Partner', 'Company', 'Managed Services', 'Industries', 'Careers'];
  const bottomLinks = [
    'IIGS STRATEGY',
    'IIGS iPROCURE',
    'IIGS iSUPPLY',
    'IIGS MANAGED SERVICES',
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);

  const handleClick = (event, label) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  return (
    <Box>
      {/* Top Section */}
      <AppBar position="static" sx={{ backgroundColor: '#000', paddingX: 2, marginTop: 0.5 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Logo and Text */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={igsLogo}
              alt="Logo"
              style={{ height: 40 }}
            />

            {/* Vertical Divider */}
            <Box
              sx={{
                width: '1px',
                height: 50,
                backgroundColor: 'white',
                marginX: 2,
              }}
            />

            <Box sx={{ lineHeight: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              >
                RESHAPING
              </Typography><br />
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              >
                PROCUREMENT
              </Typography><br />
              <Typography
                variant="caption"
                sx={{
                  color: 'white',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 'bold',
                  fontSize: '13px',
                }}
              >
                THROUGH INNOVATION
              </Typography>
            </Box>

          </Box>

          {/* Right Top Menu Items + Menu Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {topLinks.map(link => (
              <Button
                key={link}
                sx={{ color: 'white', fontSize: '0.8rem', textTransform: 'none' }}
                endIcon={<ArrowDropDownIcon />}
              >
                {link}
              </Button>
            ))}
            {/* Rightmost Menu Icon */}
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Bottom Section */}
      <AppBar position="static" sx={{ backgroundColor: '#0a0a0a', paddingX: 2, boxShadow: 'none' }}>
        <Toolbar sx={{ gap: 2 }}>
          {bottomLinks.map((link) => {
            const [prefix, ...rest] = link.split(' ');
            const suffix = rest.join(' '); // handles multi-word suffixes

            return (
              <Button
                key={link}
                endIcon={<ArrowDropDownIcon sx={{ color: '#fff' }} />}
                sx={{ textTransform: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}
              >
                <Typography component="span" sx={{ color: '#F36434', marginRight: 0.5 }}>
                  {prefix}
                </Typography>
                <Typography component="span" sx={{ color: '#506BA4' }}>
                  {suffix}
                </Typography>
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
}



const Navbar = () => {


  return (
    <>
      <TopHeaderBar />
      <DualNavbar />
      <Header />
    </>
  );
};

export default Navbar;
