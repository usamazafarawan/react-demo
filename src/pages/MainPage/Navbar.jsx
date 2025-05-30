import React, { useState,useEffect  } from 'react';
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
  Close as CloseIcon
} from '@mui/icons-material';
import Header from "./Header";


// Reusable Navbar component
const TopNavbar = ({ handleDrawerToggle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleCapabilitiesClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const handleCapabilitiesClick2 = (event) => {
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);

  return (
    <AppBar position="sticky" sx={{
      backgroundColor: 'white', 
      boxShadow: 1, 
      borderBottom: '1px solid #E0E0E0'
    }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT SECTION */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
          )}
          
          <Typography variant="h6" sx={{ color: 'black', fontWeight: 600 }}>
            IBM
          </Typography>

          {!isMobile && (
            <>
              <Divider orientation="vertical" flexItem sx={{ mx: 2, borderColor: 'grey.400', height: 40 }} />

              <Box sx={{ display: 'flex', gap: 3 }}>
                <Button 
                  sx={{ color: '#525252', fontSize: '16px' }}
                  onClick={handleCapabilitiesClick2}
                  endIcon={open2 ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  AI
                </Button>
                <Button
                  sx={{ color: '#525252', fontSize: '16px' }}
                  onClick={handleCapabilitiesClick}
                  endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  Hybrid Cloud
                </Button>
                <Button 
                  sx={{ color: '#525252', fontSize: '16px' }}
                  onClick={handleCapabilitiesClick}
                  endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  Products
                </Button>
                <Button sx={{ color: '#525252', fontSize: '16px' }}>
                  Consulting
                </Button>
                <Button 
                  sx={{ color: '#525252', fontSize: '16px' }}
                  onClick={handleCapabilitiesClick}
                  endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                >
                  Support
                </Button>
                <Button sx={{ color: '#525252', fontSize: '16px' }}>
                  Think
                </Button>
              </Box>
            </>
          )}
        </Box>

        {/* RIGHT SECTION */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton>
              <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton>
              <MailOutlineIcon sx={{ color: 'black' }} />
            </IconButton>
            <IconButton>
              <AccountCircleIcon sx={{ color: 'black' }} />
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Desktop Menus */}
      {!isMobile && (
        <>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{ sx: { display: 'flex', p: 2, gap: 4, width: 700 } }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
              sx: {
                mt: 1,
                boxShadow: 3,
                borderRadius: 2,
                p: 2
              }
            }}
          >
            {/* Services Column */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Services
              </Typography>
              {[
                'Application services',
                'Artificial intelligence',
                'Automation',
                'Business strategy',
                'Cloud',
                'Customer experience',
                'Cybersecurity',
                'Finance',
                'HR and talent'
              ].map((service) => (
                <MenuItem key={service}>{service}</MenuItem>
              ))}
            </Box>

            <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

            {/* Signature Experiences Column */}
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                Signature Experiences
              </Typography>
              <Box sx={{ fontSize: 14 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Consulting Advantage:</strong><br />
                  First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong>Garage:</strong><br />
                  Collaborative engagement model for accelerating AI and digital transformation.
                </Typography>
                <Typography variant="body2">
                  <strong>X-Force:</strong><br />
                  Build a comprehensive, integrated security program to protect your organization from global threats.
                </Typography>
              </Box>
            </Box>
          </Menu>

          <Menu
            anchorEl={anchorEl2}
            open={open2}
            onClose={() => setAnchorEl2(null)}
            MenuListProps={{
              sx: {
                display: 'flex',
                p: 2,
                gap: 4,
                width: '100%',
              },
            }}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            PaperProps={{
              sx: {
                mt: 1,
                boxShadow: 3,
                borderRadius: 2,
                p: 2,
                width: '100vw',
                maxWidth: 'none',
              },
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 8,
                width: '100%',
                maxWidth: '1500px',
                px: 2,
              }}
            >
              {[
                'Overview',
                'watsonx',
                'Granite models',
                'Agents',
                'Consulting',
                'Research',
                'Ethics and governance',
              ].map((item) => (
                <Box
                  key={item}
                  sx={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}
                >
                  <Typography variant="body1" sx={{
                    color: '#525252  !important',
                    fontSize: '16px  !important',
                  }}>
                    {item}
                  </Typography>
                  <ArrowForwardIcon fontSize="medium" sx={{ ml: 1 }} />
                </Box>
              ))}
            </Box>
          </Menu>
        </>
      )}
    </AppBar>
  );
};

const BottomNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCapabilitiesClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  if (isMobile) return null; // Hide bottom navbar on mobile

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          <Button
            sx={{
              color: '#525252',
              fontSize: '14px',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: -6,
                height: '4px',
                backgroundColor: '#0f62fe',
                borderRadius: '2px 2px 0 0',
              },
            }}
          >
            Consulting
          </Button>

          <Button
            sx={{ color: '#525252', fontSize: '14px' }}
            onClick={handleCapabilitiesClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Capabilities
          </Button>

          <Button
            sx={{ color: '#525252', fontSize: '14px' }}
            onClick={handleCapabilitiesClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Industries
          </Button>
          <Button
            sx={{ color: '#525252', fontSize: '14px' }}
            onClick={handleCapabilitiesClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Strategic Partners
          </Button>
          <Button
            sx={{ color: '#525252', fontSize: '14px' }}
            onClick={handleCapabilitiesClick}
            endIcon={open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            Insights
          </Button>
          <Button sx={{ color: '#525252', fontSize: '14px' }}>
            Careers
          </Button>
        </Box>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0f62fe',
            color: 'white',
            borderRadius: 0,
            height: '100%',
            textTransform: 'none',
            fontWeight: 500,
            px: 3,
            '&:hover': {
              backgroundColor: '#0053c1',
            },
          }}
        >
          Contact IBM Consulting
        </Button>
      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        MenuListProps={{ sx: { display: 'flex', p: 2, gap: 4, width: 700 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            mt: 1,
            boxShadow: 3,
            borderRadius: 2,
            p: 2
          }
        }}
      >
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Services
          </Typography>
          {[
            'Application services',
            'Artificial intelligence',
            'Automation',
            'Business strategy',
            'Cloud',
            'Customer experience',
            'Cybersecurity',
            'Finance',
            'HR and talent'
          ].map((service) => (
            <MenuItem key={service}>{service}</MenuItem>
          ))}
        </Box>

        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
            Signature Experiences
          </Typography>
          <Box sx={{ fontSize: 14 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Consulting Advantage:</strong><br />
              First-of-its-kind AI-powered platform to supercharge client delivery faster, at scale.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              <strong>Garage:</strong><br />
              Collaborative engagement model for accelerating AI and digital transformation.
            </Typography>
            <Typography variant="body2">
              <strong>X-Force:</strong><br />
              Build a comprehensive, integrated security program to protect your organization from global threats.
            </Typography>
          </Box>
        </Box>
      </Menu>
    </AppBar>
  );
};

const MobileDrawer = ({ mobileOpen, handleDrawerToggle }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);
  
  const handleSubMenuClick = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuItems = [
    { 
      name: 'AI', 
      subItems: [
        'Overview',
        'watsonx',
        'Granite models',
        'Agents',
        'Consulting',
        'Research',
        'Ethics and governance'
      ] 
    },
    { 
      name: 'Hybrid Cloud', 
      subItems: [
        'Application services',
        'Artificial intelligence',
        'Automation',
        'Business strategy',
        'Cloud',
        'Customer experience'
      ] 
    },
    { 
      name: 'Products', 
      subItems: [
        'All products',
        'Software',
        'Hardware',
        'Services'
      ] 
    },
    { name: 'Consulting' },
    { 
      name: 'Support', 
      subItems: [
        'Support portal',
        'Knowledge center',
        'Downloads'
      ] 
    },
    { name: 'Think' }
  ];

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        '& .MuiDrawer-paper': {
          width: '80%',
          maxWidth: '400px',
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2,
          borderBottom: '1px solid #E0E0E0'
        }}
      >
        <Typography variant="h6">IBM</Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        {menuItems.map((item) => (
          <React.Fragment key={item.name}>
            <ListItem 
              button 
              onClick={() => item.subItems ? handleSubMenuClick(item.name) : null}
            >
              <ListItemText primary={item.name} />
              {item.subItems && (
                openSubMenu === item.name ? <ExpandLessIcon /> : <ExpandMoreIcon />
              )}
            </ListItem>
            
            {item.subItems && (
              <Collapse in={openSubMenu === item.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.subItems.map((subItem) => (
                    <ListItem button key={subItem} sx={{ pl: 4 }}>
                      <ListItemText primary={subItem} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
      
      <Box sx={{ p: 2, mt: 'auto', borderTop: '1px solid #E0E0E0' }}>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#0f62fe',
            color: 'white',
            borderRadius: 0,
            textTransform: 'none',
            fontWeight: 500,
            py: 1.5,
            '&:hover': {
              backgroundColor: '#0053c1',
            },
          }}
        >
          Contact IBM Consulting
        </Button>
      </Box>
    </Drawer>
  );
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


    useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <TopNavbar handleDrawerToggle={handleDrawerToggle} />
      <BottomNavbar />
      
      {isMobile && (
        <MobileDrawer 
          mobileOpen={mobileOpen} 
          handleDrawerToggle={handleDrawerToggle} 
        />
      )}
            <Header />

    </>
  );
};

export default Navbar;
