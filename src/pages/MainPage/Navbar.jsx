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
  Collapse,
  Paper,
  Grid,
  Stack
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
  const topLinks = ['Partner', 'Company', 'Managed Services', 'Industries', 'Careers', 'Contact Us'];
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

  const open = Boolean(anchorEl);

  const menuContents = {
    'Managed Services': {
      left: {
        title: 'Procurement Outsourcing ',
        items: [
          'Strategic Sourcing',
          'Tail-Spend Management',
          'Category Management',
          'Supply Chain Outsourcing',
          'Supply Chain Planning & Forecasting',
          'Inventory Management Logistics Management'
        ]
      },
      right: {
        title: 'Supply Chain Outsourcing',
        items: [
          'Inventory Management',
          'Logistics Management',
          'Supply Risk Management',
        ]
      }
    },
    'Careers': {
      left: {
        items: [
          'Investing in People',
          'Explore Career Paths',
          'Join Us',
        ]
      },
    },
    'Company': {
      left: {
        items: [
          'Mission & Vision',
          'Diversity',
          'Culture',
          '1IGS Cares',
          'Cor Values'
        ]
      },
    },
    'Industries': {
      left: {
        items: [
          'Banking',
          'Healthcare',
          'Retail',
          'Manufacturing',
          'Technology',
          'Energy'
        ]
      },
    },
    'Contact Us': {
      left: {
        items: [
          'Ask Us',
          'Request for Proposal',
          'Schedule a Consultation',
          'Share Feedback',
        ]
      },
    },
    'Partner': {
      left: {
        items: ['Become a Partner', 'Partner Portal', 'Partner Resources']
      },
    }
  };

  const renderMenu = (menuKey) => {
    const menuContent = menuContents[menuKey];
    if (!menuContent) return null;

    const hasRightColumn = menuContent.right && menuContent.right.items.length > 0;

    return (
      <Menu
        anchorEl={anchorEl}
        open={open && activeMenu === menuKey}
        onClose={handleClose}
        MenuListProps={{
          sx: {
            display: 'flex',
            flexDirection: 'column',
            p: 0,
            width: hasRightColumn ? 700 : 250
          }
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#040a15'
          }
        }}
      >

        {/* Content Container */}
        <Box sx={{
          display: 'flex',
          p: 2,
          gap: 4
        }}>
          {/* Left Column - Always present */}
          <Box sx={{ width: hasRightColumn ? '50%' : '100%' }}>
            {menuContent.left.title && (
              <>
                <Typography variant="subtitle1" sx={{
                  fontWeight: 'bold',
                  mb: 1,
                  color: '#fff'
                }}>
                  {menuContent.left.title}
                </Typography>
              </>
            )}
            {menuContent.left.items.map((item) => (
              <MenuItem
                key={item}
                onClick={handleClose}
                sx={{
                  p: 1,
                  borderRadius: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(193, 172, 165, 0.1)',
                  }
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    variant: 'body2',
                    sx: {
                      fontWeight: 500,
                      color: '#fff'
                    }
                  }}
                />
              </MenuItem>
            ))}
          </Box>

          {/* Right Column - Conditionally rendered */}
          {hasRightColumn && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  mx: 2,
                  borderColor: '#506BA4',
                }}
              />              <Box sx={{ width: '50%' }}>

                {menuContent.right.title && (

                  <>
                    <Typography variant="subtitle1" sx={{
                      fontWeight: 'bold',
                      mb: 1,
                      color: '#fff'
                    }}>
                      {menuContent.right.title}
                    </Typography>
                  </>
                )}

                {menuContent.right.items.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={handleClose}
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: 'rgba(193, 172, 165, 0.1)',
                      }
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          fontWeight: 500,
                          color: '#fff'
                        }
                      }}
                    />
                  </MenuItem>
                ))}
              </Box>
            </>
          )}
        </Box>
      </Menu>
    );
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
              <React.Fragment key={link}>
                <Button
                  aria-controls={open ? `${link}-menu` : undefined}
                  aria-haspopup="true"
                  onClick={(e) => handleClick(e, link)}
                  sx={{
                    color: 'white',
                    fontSize: '0.8rem',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }}
                  endIcon={<ArrowDropDownIcon />}
                >
                  {link}
                </Button>
                {menuContents[link] && renderMenu(link)}
              </React.Fragment>
            ))}
            {/* Rightmost Menu Icon */}
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
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
            const suffix = rest.join(' ');

            return (
              <Button
                key={link}
                endIcon={<ArrowDropDownIcon sx={{ color: '#fff' }} />}
                sx={{
                  textTransform: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
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
};



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
