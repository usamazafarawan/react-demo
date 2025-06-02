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
import ibmLogo from '../../assets/images/ibm-logo.png';


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
  borderBottom: '1px solid #E0E0E0',
  height: '64px'
}}>
  <Toolbar sx={{ 
    justifyContent: 'space-between',
    height: '100%'
  }}>
    {/* LEFT SECTION */}
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      height: '100%',
      gap: 4 
    }}>
      {isMobile && (
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          '&:hover': { backgroundColor: '#f0f0f0' }
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
              color: 'black',
              '&:hover': { backgroundColor: 'transparent' }
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      
      <div className="flex justify-center">
          <img
            src={ibmLogo}
            alt="Earth held by robotic arms"
            className="w-full max-w-lg"
          />
        </div>

      {!isMobile && (
        <>
          <Divider 
            orientation="vertical" 
            flexItem 
            sx={{ 
              borderColor: 'grey.400', 
              height: '40px',
              my: 'auto' 
            }} 
          />

          <Box sx={{ 
            display: 'flex', 
            height: '100%'
          }}>
            {[
              { text: 'AI', hasMenu: true, open: open2, handler: handleCapabilitiesClick2 },
              { text: 'Hybrid Cloud', hasMenu: true, open: open, handler: handleCapabilitiesClick },
              { text: 'Products', hasMenu: true, open: open, handler: handleCapabilitiesClick },
              { text: 'Consulting', hasMenu: false },
              { text: 'Support', hasMenu: true, open: open, handler: handleCapabilitiesClick },
              { text: 'Think', hasMenu: false }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  px: 3,
                  '&:hover': { 
                    backgroundColor: '#f0f0f0',
                    cursor: 'pointer'
                  }
                }}
                onClick={item.handler}
              >
                <Typography sx={{ 
                  color: '#525252', 
                  fontSize: '16px'
                }}>
                  {item.text}
                </Typography>
                {item.hasMenu && (
                  item.open ? <ExpandLessIcon sx={{ color:'#525252' }} /> : <ExpandMoreIcon sx={{ color:'#525252' }} />
                )}
              </Box>
            ))}
          </Box>
        </>
      )}
    </Box>

    {/* RIGHT SECTION */}
    {!isMobile && (
      <Box sx={{ 
        display: 'flex', 
        height: '100%'
      }}>
        {[SearchIcon, MailOutlineIcon, AccountCircleIcon].map((Icon, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              px: 2,
              '&:hover': { 
                backgroundColor: '#f0f0f0',
                cursor: 'pointer'
              }
            }}
          >
            <Icon sx={{ 
              color: '#525252',
              fontSize: '24px'
            }} />
          </Box>
        ))}
      </Box>
    )}
  </Toolbar>

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
 <AppBar position="static" sx={{ 
  backgroundColor: 'white', 
  boxShadow: 1,
  height: '64px'
}}>
  <Toolbar sx={{ 
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
    padding: '0 !important', 
    minHeight: '64px !important' 
  }}>
    <Box sx={{
      display: 'flex',
      width: '100%',
      maxWidth: '100%',
      height: '100%'
    }}>
      <Box sx={{ 
        display: 'flex', 
        height: '100%',
        flex: 1 
      }}>
        {[
          { text: 'Consulting', active: true },
          { text: 'Capabilities', hasMenu: true, handler: handleCapabilitiesClick },
          { text: 'Industries', hasMenu: true, handler: handleCapabilitiesClick },
          { text: 'Strategic Partners', hasMenu: true, handler: handleCapabilitiesClick },
          { text: 'Insights', hasMenu: true, handler: handleCapabilitiesClick },
          { text: 'Careers', hasMenu: false }
        ].map((item, index) => (
          <Box
            key={index}
         sx={{
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  px: 3,
  position: 'relative',
  '&:hover': { 
    backgroundColor: '#f0f0f0',
    cursor: 'pointer'
  },
  ...(item.active && {
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '16px',  
      right: '16px', 
      bottom: 0,
      height: '4px',
      backgroundColor: '#0f62fe',
      borderRadius: '2px 2px 0 0',
    }
  })
}}
            onClick={item.handler}
          >
            <Typography sx={{ 
              color: '#525252', 
              fontSize: '16px',
              fontWeight: item.active ? 600 : 400
            }}>
              {item.text}
            </Typography>
            {item.hasMenu && (
              open ? 
                <ExpandLessIcon sx={{  color: '#525252' }} /> : 
                <ExpandMoreIcon sx={{  color: '#525252' }} />
            )}
          </Box>
        ))}
      </Box>

      <Box sx={{
        display: 'flex',
        height: '100%',
        marginLeft: 'auto',
        flexShrink: 0 
      }}>
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
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#0053c1',
            },
          }}
        >
          Contact IBM Consulting
        </Button>
      </Box>
    </Box>
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
           <div className="flex justify-center">
                  <img
                    src={ibmLogo}
                    alt="Earth held by robotic arms"
                    className="w-full max-w-lg"
                  />
                </div>
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
