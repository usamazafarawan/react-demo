
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
  '1IGS STRATEGY',
  '1IGS iPROCURE',
  '1IGS iSUPPLY',
  '1IGS MANAGED SERVICES',
];

const TopHeaderBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#2D53A4',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 6,
        py: 1,
      }}
    >
      {/* Left Icons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" sx={{ color: 'white' }}>
          <SearchIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'white' }}>
          <PhoneIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: 'white' }}>
          <LanguageIcon />
        </IconButton>
      </Box>

      {/* Right Icons */}
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" sx={{ color: '#F36434' }}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: '#F36434' }}>
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const DualNavbar = () => {
  const topLinks = ['Partner', 'Company', 'Managed Services', 'Industries', 'Careers', 'Contact Us'];
  const bottomLinks = [
    '1IGS STRATEGY',
    '1IGS iPROCURE',
    '1IGS iSUPPLY',
    '1IGS MANAGED SERVICES',
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [activeMenu, setActiveMenu] = React.useState(null);
  const hoverTimeoutRef = React.useRef(null);

  const handleMenuOpen = (event, label) => {
    // Clear any pending timeouts
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setAnchorEl(event.currentTarget);
    setActiveMenu(label);
  };

 

  const handleMenuClose = () => {
    // Only set timeout if there's an open menu
    if (anchorEl) {
      hoverTimeoutRef.current = setTimeout(() => {
        setAnchorEl(null);
        setActiveMenu(null);
      }, 2000); // Adjust this delay as needed
    }
  };

   

  const cancelMenuClose = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
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
        onClose={() => setAnchorEl(null)} 
        MenuListProps={{
          onMouseEnter: cancelMenuClose,
          onMouseLeave: handleMenuClose, 
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
                onClick={() => setAnchorEl(null)}
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
              />              
              <Box sx={{ width: '50%' }}>
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
                    onClick={() => setAnchorEl(null)}
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

  // Bottom menu logic
  const [bottomAnchorEl, setBottomAnchorEl] = React.useState(null);
  const [activeBottomMenu, setActiveBottomMenu] = React.useState(null);
  const bottomHoverTimeoutRef = React.useRef(null);
  const [expandedItem, setExpandedItem] = useState(null);

  const handleBottomMenuOpen = (event, label) => {
    if (bottomHoverTimeoutRef.current) {
      clearTimeout(bottomHoverTimeoutRef.current);
      bottomHoverTimeoutRef.current = null;
    }
    setBottomAnchorEl(event.currentTarget);
    setActiveBottomMenu(label);
  };
  


  const handleBottomMenuClose = () => {
    if (bottomAnchorEl) {
      bottomHoverTimeoutRef.current = setTimeout(() => {
        setBottomAnchorEl(null);
        setActiveBottomMenu(null);
        setExpandedItem(null);
      }, 2000);
    }
  };


  const cancelBottomMenuClose = () => {
    if (bottomHoverTimeoutRef.current) {
      clearTimeout(bottomHoverTimeoutRef.current);
      bottomHoverTimeoutRef.current = null;
    }
  };

  const handleSubItemClick = (itemIndex) => {
    setExpandedItem(expandedItem === itemIndex ? null : itemIndex);
  };

  const bottomOpen = Boolean(bottomAnchorEl);

  const bottomMenuContents = {
    '1IGS STRATEGY': {
      items: [
        {
          title: 'PROCUREMENT CONSULTING',
          icon: <ArrowDropDownIcon />,
          subs: ['Business Process Outsourcing', 'Cost of Goods Sold Transformation', 'Supply Chain Risk Management', 'Operations Management',
            'Supplier Information Management', 'Contract Management', 'Invoice Management'
          ]
        },
        {
          title: 'PLAN',
          icon: <ArrowDropDownIcon />,
          subs: ['Digital Planning', 'S&OP', 'S&OE', 'Collaborative Planning']
        },
        {
          title: 'SUPPLY CHAIN CONSULTING',
          icon: <ArrowDropDownIcon />,
          subs: ['SUSTAINABILITY AND RESILIENCE', 'Environmental, Social, and Governance', 'Sustainability Consulting Services',
            'Socially Responsible Sourcing', 'Supply Chain Strategy', 'Supply Chain Diagnostics', 'Inventory Optimization', 'Network Optimization', '1IGS Total Inventory Management Solution'
          ]
        },
        {
          title: 'MAKE',
          icon: <ArrowDropDownIcon />,
          subs: ['Inventory Strategy & Management', '1IGS Total Inventory Management Solution', 'Operations & Manufacturing Excellence']
        },
        {
          title: 'PROCURE',
          icon: <ArrowDropDownIcon />,
          subs: ['Source To Contract', 'Procure To Pay']
        },
        {
          title: 'DELIVER',
          icon: <ArrowDropDownIcon />,
          subs: ['Network Strategy & Optimization', 'Warehousing & Transportation Management']
        }
      ]
    },
    '1IGS iPROCURE': {
      items: [
        'Direct Procurement',
        'Indirect Procurement',
        'Sourcing Support Services',
        'Unified Source-to-Pay',
        'Source-To-Contract',
        'Procure-to-Pay',
        'Midsize & High Growth Enterprises',
        'Category Management',
        'Contract Lifecycle Management',
        'Supplier Lifecycle Management',
        'Third-Party Risk Management',
        'Third-party Risk Management',
        'Solutions Intake Management & Orchestration',
        'Intelligent Category Management',
        'Tail Spend Management',
        'Expert on Demand'
      ]
    },
    '1IGS iSUPPLY': {
      items: [
        'Supply Chain Visibility and Execution',
        'Supply Chain Planning',
        'Supply Chain Collaboration',
        'Supply Chain Network Optimization',
        'Should Cost Modeling',
        'Inventory and Warehouse Management',
      ]
    },
    '1IGS MANAGED SERVICES': {
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
  };

  const renderBottomMenu = (menuKey) => {
    const menuContent = bottomMenuContents[menuKey];
    if (!menuContent) return null;

    if (menuContent.left && menuContent.right) {
      return (
        <Menu
          anchorEl={bottomAnchorEl}
          open={bottomOpen && activeBottomMenu === menuKey}
          onClose={() => setBottomAnchorEl(null)}
          MenuListProps={{
            onMouseEnter: cancelBottomMenuClose,
            onMouseLeave: handleBottomMenuClose, 

            sx: {
              p: 3,
              width: '100vw',
              maxWidth: '100%',
            },
          }}
          PaperProps={{
            sx: {
              mt: 0,
              left: '0 !important',
              right: '0 !important',
              width: '100vw',
              maxWidth: '100%',
              borderRadius: 0,
              boxShadow: 3,
              backgroundColor: '#000',
              borderTop: '1px solid #506BA4'
            }
          }}
        >
          <Box sx={{ display: 'flex', maxWidth: '1500px', mx: 'auto', gap: 3 }}>
            {/* Left Section */}
            <Box sx={{ width: '50%' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  color: '#F36434',
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                {menuContent.left.title}
              </Typography>
              <List dense>
                {menuContent.left.items.map((item, index) => (
                  <ListItem
                    key={`left-${index}`}
                    onClick={() => setBottomAnchorEl(null)}
                    sx={{
                      px: 0,
                      py: 0.5,
                      '&:hover': {
                        '& .MuiTypography-root': {
                          color: '#F36434',
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          color: '#fff',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Vertical Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                mx: 2,
                borderColor: '#506BA4',
              }}
            />

            {/* Right Section */}
            <Box sx={{ width: '50%' }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 'bold',
                  color: '#F36434',
                  mb: 2,
                  fontSize: '1.1rem',
                }}
              >
                {menuContent.right.title}
              </Typography>
              <List dense>
                {menuContent.right.items.map((item, index) => (
                  <ListItem
                    key={`right-${index}`}
                    onClick={() => setBottomAnchorEl(null)}
                    sx={{
                      px: 0,
                      py: 0.5,
                      '&:hover': {
                        '& .MuiTypography-root': {
                          color: '#F36434',
                        },
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          color: '#fff',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Menu>
      );
    }

    if (Array.isArray(menuContent.items) && menuContent.items.every(item => typeof item === 'string')) {
      return (
        <Menu
          anchorEl={bottomAnchorEl}
          open={bottomOpen && activeBottomMenu === menuKey}
          onClose={() => setBottomAnchorEl(null)} 
          MenuListProps={{
            onMouseEnter: cancelBottomMenuClose,
            onMouseLeave: handleBottomMenuClose, 
            sx: {
              p: 3,
              width: '100vw',
              maxWidth: '100%',
            },
          }}
          PaperProps={{
            sx: {
              mt: 0,
              left: '0 !important',
              right: '0 !important',
              width: '100vw',
              maxWidth: '100%',
              borderRadius: 0,
              boxShadow: 3,
              backgroundColor: '#000',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start',
              maxWidth: '1500px',
              mx: 'auto',
              px: 3,
            }}
          >
            {/* Left Column */}
            <Box sx={{ width: '50%' }}>
              <List dense>
                {menuContent.items.slice(0, Math.ceil(menuContent.items.length / 2)).map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => setBottomAnchorEl(null)}
                    sx={{
                      px: 0,
                      py: 0.5,
                      '&:hover .MuiTypography-root': {
                        color: '#F36434',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          color: '#fff',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Custom Vertical Divider */}
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                mx: 2,
                borderColor: '#506BA4',
              }}
            />

            {/* Right Column */}
            <Box sx={{ width: '50%' }}>
              <List dense>
                {menuContent.items.slice(Math.ceil(menuContent.items.length / 2)).map((item, index) => (
                  <ListItem
                    key={index}
                    onClick={() => setBottomAnchorEl(null)}
                    sx={{
                      px: 0,
                      py: 0.5,
                      '&:hover .MuiTypography-root': {
                        color: '#F36434',
                      },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        variant: 'body2',
                        sx: {
                          color: '#fff',
                          fontSize: '0.85rem',
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Box>
        </Menu>
      );
    }

    return (
      <Menu
        anchorEl={bottomAnchorEl}
        open={bottomOpen && activeBottomMenu === menuKey}
        onClose={() => setBottomAnchorEl(null)}
        MenuListProps={{
          onMouseEnter: cancelBottomMenuClose,
          onMouseLeave: handleBottomMenuClose, 
          sx: {
            p: 3,
            width: '100vw',
            maxWidth: '100%',
          }
        }}
        PaperProps={{
          sx: {
            mt: 0,
            left: '0 !important',
            right: '0 !important',
            width: '100vw',
            maxWidth: '100%',
            borderRadius: 0,
            boxShadow: 3,
            backgroundColor: '#000',
            borderTop: '1px solid #506BA4'
          }
        }}
      >
        <Grid container spacing={4} sx={{ maxWidth: '1500px', margin: '0 auto' }}>
          {menuContent.items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                onClick={() => handleSubItemClick(index)}
                sx={{
                  p: 2,
                  borderRadius: 1,
                  cursor: 'pointer',
                  backgroundColor: expandedItem === index ? 'rgba(56, 54, 54, 0.1)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(56, 54, 54, 0.1)'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ mr: 2, color: '#F36434' }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 'bold',
                      color: '#fff',
                      flexGrow: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  {expandedItem === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </Box>

                <Collapse in={expandedItem === index}>
                  <List dense sx={{ mt: 1, pl: 6 }}>
                    {item.subs.map((sub, subIndex) => (
                      <ListItem
                        key={subIndex}
                        onClick={() => setBottomAnchorEl(null)}
                        sx={{
                          px: 0,
                          py: 0.5,
                          '&:hover': {
                            '& .MuiTypography-root': {
                              color: '#F36434'
                            }
                          }
                        }}
                      >
                        <ListItemText
                          primary={sub}
                          primaryTypographyProps={{
                            variant: 'body2',
                            sx: {
                              color: '#fff',
                              fontSize: '0.85rem'
                            }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Menu>
    );
  };

  const renderBottomLinks = () => {
    return bottomLinks.map((link) => {
      const [prefix, ...rest] = link.split(' ');
      const suffix = rest.join(' ');

      return (
        <React.Fragment key={link}>
          <Button
            onMouseEnter={(e) => handleBottomMenuOpen(e, link)}
            onMouseLeave={handleBottomMenuClose} 
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
          {renderBottomMenu(link)}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Top Section */}
      <AppBar position="static" sx={{ backgroundColor: '#000', paddingX: 4, marginTop: 0.5 }}>
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
                  onMouseEnter={(e) => handleMenuOpen(e, link)}
                  onMouseLeave={handleMenuClose}
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
      <AppBar position="sticky" sx={{ backgroundColor: '#0a0a0a', paddingX: 4, boxShadow: 'none' }}>
        <Toolbar sx={{ gap: 2 }}>
          {renderBottomLinks()}
        </Toolbar>
      </AppBar>
    </>
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






// old code

// import React, { useState, useEffect } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Button,
//   Box,
//   Menu,
//   MenuItem,
//   Typography,
//   Divider,
//   IconButton,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
//   Collapse,
//   Paper,
//   Grid,
//   Stack
// } from '@mui/material';
// import {
//   ExpandMore as ExpandMoreIcon,
//   ExpandLess as ExpandLessIcon,
//   Search as SearchIcon,
//   MailOutline as MailOutlineIcon,
//   AccountCircle as AccountCircleIcon,
//   ArrowForward as ArrowForwardIcon,
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   Phone as PhoneIcon
// } from '@mui/icons-material';
// import Header from "./Header";
// import igsLogo from '../../assets/images/igs-logo-procurement.png';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import LanguageIcon from '@mui/icons-material/Language';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

// const menuItems = [
//   '1IGS STRATEGY',
//   '1IGS iPROCURE',
//   '1IGS iSUPPLY',
//   '1IGS MANAGED SERVICES',
// ];

// const TopHeaderBar = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: '#2D53A4',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         px: 6,
//         py: 1,
//       }}
//     >
//       {/* Left Icons */}
//       <Box sx={{ display: 'flex', gap: 1 }}>
//         <IconButton size="small" sx={{ color: 'white' }}>
//           <SearchIcon />
//         </IconButton>
//         <IconButton size="small" sx={{ color: 'white' }}>
//           <PhoneIcon />
//         </IconButton>
//         <IconButton size="small" sx={{ color: 'white' }}>
//           <LanguageIcon />
//         </IconButton>
//       </Box>

//       {/* Right Icons */}
//       <Box sx={{ display: 'flex', gap: 1 }}>
//         <IconButton size="small" sx={{ color: '#F36434' }}>
//           <ChatBubbleOutlineIcon />
//         </IconButton>
//         <IconButton size="small" sx={{ color: '#F36434' }}>
//           <AccountCircleIcon />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

// const DualNavbar = () => {
//   const topLinks = ['Partner', 'Company', 'Managed Services', 'Industries', 'Careers', 'Contact Us'];
//   const bottomLinks = [
//     '1IGS STRATEGY',
//     '1IGS iPROCURE',
//     '1IGS iSUPPLY',
//     '1IGS MANAGED SERVICES',
//   ];

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [activeMenu, setActiveMenu] = React.useState(null);

//   const handleClick = (event, label) => {
//     setAnchorEl(event.currentTarget);
//     setActiveMenu(label);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setActiveMenu(null);
//   };

//   const open = Boolean(anchorEl);

//   const menuContents = {
//     'Managed Services': {
//       left: {
//         title: 'Procurement Outsourcing ',
//         items: [
//           'Strategic Sourcing',
//           'Tail-Spend Management',
//           'Category Management',
//           'Supply Chain Outsourcing',
//           'Supply Chain Planning & Forecasting',
//           'Inventory Management Logistics Management'
//         ]
//       },
//       right: {
//         title: 'Supply Chain Outsourcing',
//         items: [
//           'Inventory Management',
//           'Logistics Management',
//           'Supply Risk Management',
//         ]
//       }
//     },
//     'Careers': {
//       left: {
//         items: [
//           'Investing in People',
//           'Explore Career Paths',
//           'Join Us',
//         ]
//       },
//     },
//     'Company': {
//       left: {
//         items: [
//           'Mission & Vision',
//           'Diversity',
//           'Culture',
//           '1IGS Cares',
//           'Cor Values'
//         ]
//       },
//     },
//     'Industries': {
//       left: {
//         items: [
//           'Banking',
//           'Healthcare',
//           'Retail',
//           'Manufacturing',
//           'Technology',
//           'Energy'
//         ]
//       },
//     },
//     'Contact Us': {
//       left: {
//         items: [
//           'Ask Us',
//           'Request for Proposal',
//           'Schedule a Consultation',
//           'Share Feedback',
//         ]
//       },
//     },
//     'Partner': {
//       left: {
//         items: ['Become a Partner', 'Partner Portal', 'Partner Resources']
//       },
//     }
//   };

//   const renderMenu = (menuKey) => {
//     const menuContent = menuContents[menuKey];
//     if (!menuContent) return null;

//     const hasRightColumn = menuContent.right && menuContent.right.items.length > 0;

//     return (
//       <Menu
//         anchorEl={anchorEl}
//         open={open && activeMenu === menuKey}
//         onClose={handleClose}
//         MenuListProps={{
//           sx: {
//             display: 'flex',
//             flexDirection: 'column',
//             p: 0,
//             width: hasRightColumn ? 700 : 250
//           }
//         }}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left'
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left'
//         }}
//         PaperProps={{
//           sx: {
//             mt: 1,
//             boxShadow: 3,
//             borderRadius: 2,
//             overflow: 'hidden',
//             backgroundColor: '#040a15'
//           }
//         }}
//       >

//         {/* Content Container */}
//         <Box sx={{
//           display: 'flex',
//           p: 2,
//           gap: 4
//         }}>
//           {/* Left Column - Always present */}
//           <Box sx={{ width: hasRightColumn ? '50%' : '100%' }}>
//             {menuContent.left.title && (
//               <>
//                 <Typography variant="subtitle1" sx={{
//                   fontWeight: 'bold',
//                   mb: 1,
//                   color: '#fff'
//                 }}>
//                   {menuContent.left.title}
//                 </Typography>
//               </>
//             )}
//             {menuContent.left.items.map((item) => (
//               <MenuItem
//                 key={item}
//                 onClick={handleClose}
//                 sx={{
//                   p: 1,
//                   borderRadius: 1,
//                   '&:hover': {
//                     backgroundColor: 'rgba(193, 172, 165, 0.1)',
//                   }
//                 }}
//               >
//                 <ListItemText
//                   primary={item}
//                   primaryTypographyProps={{
//                     variant: 'body2',
//                     sx: {
//                       fontWeight: 500,
//                       color: '#fff'
//                     }
//                   }}
//                 />
//               </MenuItem>
//             ))}
//           </Box>

//           {/* Right Column - Conditionally rendered */}
//           {hasRightColumn && (
//             <>
//               <Divider
//                 orientation="vertical"
//                 flexItem
//                 sx={{
//                   mx: 2,
//                   borderColor: '#506BA4',
//                 }}
//               />              <Box sx={{ width: '50%' }}>

//                 {menuContent.right.title && (

//                   <>
//                     <Typography variant="subtitle1" sx={{
//                       fontWeight: 'bold',
//                       mb: 1,
//                       color: '#fff'
//                     }}>
//                       {menuContent.right.title}
//                     </Typography>
//                   </>
//                 )}

//                 {menuContent.right.items.map((item) => (
//                   <MenuItem
//                     key={item}
//                     onClick={handleClose}
//                     sx={{
//                       p: 1,
//                       borderRadius: 1,
//                       '&:hover': {
//                         backgroundColor: 'rgba(193, 172, 165, 0.1)',
//                       }
//                     }}
//                   >
//                     <ListItemText
//                       primary={item}
//                       primaryTypographyProps={{
//                         variant: 'body2',
//                         sx: {
//                           fontWeight: 500,
//                           color: '#fff'
//                         }
//                       }}
//                     />
//                   </MenuItem>
//                 ))}
//               </Box>
//             </>
//           )}
//         </Box>
//       </Menu>
//     );
//   };






//   // for bottom

//   const [bottomAnchorEl, setBottomAnchorEl] = React.useState(null);
//   const [activeBottomMenu, setActiveBottomMenu] = React.useState(null);

//   const handleBottomClick = (event, label) => {
//     setBottomAnchorEl(event.currentTarget);
//     setActiveBottomMenu(label);
//   };

//   const handleBottomClose = () => {
//     setBottomAnchorEl(null);
//     setActiveBottomMenu(null);
//   };

//   // Add this to your component
//   const [expandedItem, setExpandedItem] = useState(null);

//   const handleSubItemClick = (itemIndex) => {
//     setExpandedItem(expandedItem === itemIndex ? null : itemIndex);
//   };


//   const bottomOpen = Boolean(bottomAnchorEl);

//   const bottomMenuContents = {
//     '1IGS STRATEGY': {
//       items: [
//         {
//           title: 'PROCUREMENT CONSULTING',
//           icon: <ArrowDropDownIcon />,
//           subs: ['Business Process Outsourcing', 'Cost of Goods Sold Transformation', 'Supply Chain Risk Management', 'Operations Management',
//             'Supplier Information Management', 'Contract Management', 'Invoice Management'
//           ]
//         },
//         {
//           title: 'PLAN',
//           icon: <ArrowDropDownIcon />,
//           subs: ['Digital Planning', 'S&OP', 'S&OE', 'Collaborative Planning']
//         },
//         {
//           title: 'SUPPLY CHAIN CONSULTING',
//           icon: <ArrowDropDownIcon />,
//           subs: ['SUSTAINABILITY AND RESILIENCE', 'Environmental, Social, and Governance', 'Sustainability Consulting Services',


//             'Socially Responsible Sourcing', 'Supply Chain Strategy', 'Supply Chain Diagnostics', 'Inventory Optimization', 'Network Optimization', '1IGS Total Inventory Management Solution'
//           ]
//         },
//         {
//           title: 'MAKE',
//           icon: <ArrowDropDownIcon />,
//           subs: ['Inventory Strategy & Management', '1IGS Total Inventory Management Solution', 'Operations & Manufacturing Excellence']
//         },

//         {
//           title: 'PROCURE',
//           icon: <ArrowDropDownIcon />,
//           subs: ['Source To Contract', 'Procure To Pay']
//         },
//         {
//           title: 'DELIVER',
//           icon: <ArrowDropDownIcon />,
//           subs: ['Network Strategy & Optimization', 'Warehousing & Transportation Management']
//         }
//       ]
//     },

//     '1IGS iPROCURE': {
//       items: [
//         'Direct Procurement',
//         'Indirect Procurement',
//         'Sourcing Support Services',
//         'Unified Source-to-Pay',
//         'Source-To-Contract',
//         'Procure-to-Pay',
//         'Midsize & High Growth Enterprises',
//         'Category Management',
//         'Contract Lifecycle Management',
//         'Supplier Lifecycle Management',
//         'Third-Party Risk Management',
//         'Third-Party Risk Management',
//         'Solutions Intake Management & Orchestration',
//         'Intelligent Category Management',
//         'Tail Spend Management',
//         'Expert on Demand'

//       ]
//     },

//     '1IGS iSUPPLY': {
//       items: [
//         'Supply Chain Visibility and Execution',
//         'Supply Chain Planning',
//         'Supply Chain Collaboration',
//         'Supply Chain Network Optimization',
//         'Should Cost Modeling',
//         'Inventory and Warehouse Management',
//       ]
//     },
//     '1IGS MANAGED SERVICES': {
//       left: {
//         title: 'Procurement Outsourcing ',
//         items: [
//           'Strategic Sourcing',
//           'Tail-Spend Management',
//           'Category Management',
//           'Supply Chain Outsourcing',
//           'Supply Chain Planning & Forecasting',
//           'Inventory Management Logistics Management'
//         ]
//       },
//       right: {
//         title: 'Supply Chain Outsourcing',
//         items: [
//           'Inventory Management',
//           'Logistics Management',
//           'Supply Risk Management',
//         ]
//       }
//     },
//     // Add similar structures for other menu items
//   };

//   const renderBottomMenu = (menuKey) => {
//     const menuContent = bottomMenuContents[menuKey];
//     if (!menuContent) return null;

//     // Check if the menu has left/right structure (IIGS MANAGED SERVICES)
//     if (menuContent.left && menuContent.right) {
//       return (
//        <Menu
//   anchorEl={bottomAnchorEl}
//   open={bottomOpen && activeBottomMenu === menuKey}
//   onClose={handleBottomClose}
//   MenuListProps={{
//     sx: {
//       p: 3,
//       width: '100vw',
//       maxWidth: '100%',
//     },
//   }}
//   PaperProps={{
//     sx: {
//       mt: 0,
//       left: '0 !important',
//       right: '0 !important',
//       width: '100vw',
//       maxWidth: '100%',
//       borderRadius: 0,
//       boxShadow: 3,
//       backgroundColor: '#000',
//       borderTop: '1px solid #506BA4',
//     },
//   }}
// >
//   <Box sx={{ display: 'flex', maxWidth: '1500px', mx: 'auto', gap: 3 }}>
//     {/* Left Section */}
//     <Box sx={{ width: '50%' }}>
//       <Typography
//         variant="subtitle1"
//         sx={{
//           fontWeight: 'bold',
//           color: '#F36434',
//           mb: 2,
//           fontSize: '1.1rem',
//         }}
//       >
//         {menuContent.left.title}
//       </Typography>
//       <List dense>
//         {menuContent.left.items.map((item, index) => (
//           <ListItem
//             key={`left-${index}`}
//             onClick={() => setBottomAnchorEl(null)}
//             sx={{
//               px: 0,
//               py: 0.5,
//               '&:hover': {
//                 '& .MuiTypography-root': {
//                   color: '#F36434',
//                 },
//               },
//             }}
//           >
//             <ListItemText
//               primary={item}
//               primaryTypographyProps={{
//                 variant: 'body2',
//                 sx: {
//                   color: '#fff',
//                   fontSize: '0.85rem',
//                 },
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>

//     {/* Vertical Divider */}
//     <Divider
//       orientation="vertical"
//       flexItem
//       sx={{
//         mx: 2,
//         borderColor: '#506BA4',
//       }}
//     />

//     {/* Right Section */}
//     <Box sx={{ width: '50%' }}>
//       <Typography
//         variant="subtitle1"
//         sx={{
//           fontWeight: 'bold',
//           color: '#F36434',
//           mb: 2,
//           fontSize: '1.1rem',
//         }}
//       >
//         {menuContent.right.title}
//       </Typography>
//       <List dense>
//         {menuContent.right.items.map((item, index) => (
//           <ListItem
//             key={`right-${index}`}
//             onClick={() => setBottomAnchorEl(null)}
//             sx={{
//               px: 0,
//               py: 0.5,
//               '&:hover': {
//                 '& .MuiTypography-root': {
//                   color: '#F36434',
//                 },
//               },
//             }}
//           >
//             <ListItemText
//               primary={item}
//               primaryTypographyProps={{
//                 variant: 'body2',
//                 sx: {
//                   color: '#fff',
//                   fontSize: '0.85rem',
//                 },
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   </Box>
// </Menu>

//       );
//     }

//     // Check if items is an array of strings (simple list)
// if (Array.isArray(menuContent.items) && menuContent.items.every(item => typeof item === 'string')) {
//   return (
//  <Menu
//   anchorEl={bottomAnchorEl}
//   open={bottomOpen && activeBottomMenu === menuKey}
//   onClose={handleBottomClose}
//   MenuListProps={{
//     sx: {
//       p: 3,
//       width: '100vw',
//       maxWidth: '100%',
//     },
//   }}
//   PaperProps={{
//     sx: {
//       mt: 0,
//       left: '0 !important',
//       right: '0 !important',
//       width: '100vw',
//       maxWidth: '100%',
//       borderRadius: 0,
//       boxShadow: 3,
//       backgroundColor: '#000',
//     },
//   }}
// >
//   <Box
//     sx={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'flex-start',
//       maxWidth: '1500px',
//       mx: 'auto',
//       px: 3,
//     }}
//   >
//     {/* Left Column */}
//     <Box sx={{ width: '50%' }}>
//       <List dense>
//         {menuContent.items.slice(0, Math.ceil(menuContent.items.length / 2)).map((item, index) => (
//           <ListItem
//             key={index}
//             onClick={() => setBottomAnchorEl(null)}
//             sx={{
//               px: 0,
//               py: 0.5,
//               '&:hover .MuiTypography-root': {
//                 color: '#F36434',
//               },
//             }}
//           >
//             <ListItemText
//               primary={item}
//               primaryTypographyProps={{
//                 variant: 'body2',
//                 sx: {
//                   color: '#fff',
//                   fontSize: '0.85rem',
//                 },
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>

//     {/* Custom Vertical Divider */}
//     <Divider
//       orientation="vertical"
//       flexItem
//       sx={{
//         mx: 2,
//         borderColor: '#506BA4',
//       }}
//     />

//     {/* Right Column */}
//     <Box sx={{ width: '50%' }}>
//       <List dense>
//         {menuContent.items.slice(Math.ceil(menuContent.items.length / 2)).map((item, index) => (
//           <ListItem
//             key={index}
//             onClick={() => setBottomAnchorEl(null)}
//             sx={{
//               px: 0,
//               py: 0.5,
//               '&:hover .MuiTypography-root': {
//                 color: '#F36434',
//               },
//             }}
//           >
//             <ListItemText
//               primary={item}
//               primaryTypographyProps={{
//                 variant: 'body2',
//                 sx: {
//                   color: '#fff',
//                   fontSize: '0.85rem',
//                 },
//               }}
//             />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   </Box>
// </Menu>
//   );
// }

//     // Default case (nested items with expandable sections)
//     return (
//       <Menu
//         anchorEl={bottomAnchorEl}
//         open={bottomOpen && activeBottomMenu === menuKey}
//         onClose={handleBottomClose}
//         MenuListProps={{
//           sx: {
//             p: 3,
//             width: '100vw',
//             maxWidth: '100%',
//           }
//         }}
//         PaperProps={{
//           sx: {
//             mt: 0,
//             left: '0 !important',
//             right: '0 !important',
//             width: '100vw',
//             maxWidth: '100%',
//             borderRadius: 0,
//             boxShadow: 3,
//             backgroundColor: '#000',
//             borderTop: '1px solid #506BA4'
//           }
//         }}
//       >
//         <Grid container spacing={4} sx={{ maxWidth: '1500px', margin: '0 auto' }}>
//           {menuContent.items.map((item, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 onClick={() => handleSubItemClick(index)}
//                 sx={{
//                   p: 2,
//                   borderRadius: 1,
//                   cursor: 'pointer',
//                   backgroundColor: expandedItem === index ? 'rgba(56, 54, 54, 0.1)' : 'transparent',
//                   '&:hover': {
//                     backgroundColor: 'rgba(56, 54, 54, 0.1)'
//                   }
//                 }}
//               >
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Box sx={{ mr: 2, color: '#F36434' }}>
//                     {item.icon}
//                   </Box>
//                   <Typography
//                     variant="subtitle1"
//                     sx={{
//                       fontWeight: 'bold',
//                       color: '#fff',
//                       flexGrow: 1
//                     }}
//                   >
//                     {item.title}
//                   </Typography>
//                   {expandedItem === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
//                 </Box>

//                 <Collapse in={expandedItem === index}>
//                   <List dense sx={{ mt: 1, pl: 6 }}>
//                     {item.subs.map((sub, subIndex) => (
//                       <ListItem
//                         key={subIndex}
//                         onClick={() => setBottomAnchorEl(null)}
//                         sx={{
//                           px: 0,
//                           py: 0.5,
//                           '&:hover': {
//                             '& .MuiTypography-root': {
//                               color: '#F36434'
//                             }
//                           }
//                         }}
//                       >
//                         <ListItemText
//                           primary={sub}
//                           primaryTypographyProps={{
//                             variant: 'body2',
//                             sx: {
//                               color: '#fff',
//                               fontSize: '0.85rem'
//                             }
//                           }}
//                         />
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Collapse>
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       </Menu>
//     );
//   };

//   const renderBottomLinks = () => {
//     return bottomLinks.map((link) => {
//       const [prefix, ...rest] = link.split(' ');
//       const suffix = rest.join(' ');

//       return (
//         <React.Fragment key={link}>
//           <Button
//             onClick={(e) => handleBottomClick(e, link)}
//             endIcon={<ArrowDropDownIcon sx={{ color: '#fff' }} />}
//             sx={{
//               textTransform: 'none',
//               fontWeight: 'bold',
//               fontSize: '0.8rem',
//               '&:hover': {
//                 backgroundColor: 'rgba(255, 255, 255, 0.1)'
//               }
//             }}
//           >
//             <Typography component="span" sx={{ color: '#F36434', marginRight: 0.5 }}>
//               {prefix}
//             </Typography>
//             <Typography component="span" sx={{ color: '#506BA4' }}>
//               {suffix}
//             </Typography>
//           </Button>
//           {renderBottomMenu(link)}
//         </React.Fragment>
//       );
//     });
//   };

//   return (
//     <Box>
//       {/* Top Section */}
//       <AppBar position="static" sx={{ backgroundColor: '#000', paddingX: 4, marginTop: 0.5 }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           {/* Left Logo and Text */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <img
//               src={igsLogo}
//               alt="Logo"
//               style={{ height: 40 }}
//             />

//             {/* Vertical Divider */}
//             <Box
//               sx={{
//                 width: '1px',
//                 height: 50,
//                 backgroundColor: 'white',
//                 marginX: 2,
//               }}
//             />

//             <Box sx={{ lineHeight: 1 }}>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   color: 'white',
//                   fontFamily: 'Poppins, sans-serif',
//                   fontWeight: 'bold',
//                   fontSize: '13px',
//                 }}
//               >
//                 RESHAPING
//               </Typography><br />
//               <Typography
//                 variant="caption"
//                 sx={{
//                   color: 'white',
//                   fontFamily: 'Poppins, sans-serif',
//                   fontWeight: 'bold',
//                   fontSize: '13px',
//                 }}
//               >
//                 PROCUREMENT
//               </Typography><br />
//               <Typography
//                 variant="caption"
//                 sx={{
//                   color: 'white',
//                   fontFamily: 'Poppins, sans-serif',
//                   fontWeight: 'bold',
//                   fontSize: '13px',
//                 }}
//               >
//                 THROUGH INNOVATION
//               </Typography>
//             </Box>
//           </Box>

//           {/* Right Top Menu Items + Menu Icon */}
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             {topLinks.map(link => (
//               <React.Fragment key={link}>
//                 <Button
//                   aria-controls={open ? `${link}-menu` : undefined}
//                   aria-haspopup="true"
//                   onClick={(e) => handleClick(e, link)}
//                   sx={{
//                     color: 'white',
//                     fontSize: '0.8rem',
//                     textTransform: 'none',
//                     '&:hover': {
//                       backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                     }
//                   }}
//                   endIcon={<ArrowDropDownIcon />}
//                 >
//                   {link}
//                 </Button>
//                 {menuContents[link] && renderMenu(link)}
//               </React.Fragment>
//             ))}
//             {/* Rightmost Menu Icon */}
//             <IconButton
//               color="inherit"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)'
//                 }
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Bottom Section */}
//       <AppBar position="static" sx={{ backgroundColor: '#0a0a0a', paddingX: 4, boxShadow: 'none' }}>
//         <Toolbar sx={{ gap: 2 }}>
//           {renderBottomLinks()}
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };



// const Navbar = () => {


//   return (
//     <>
//       <TopHeaderBar />
//       <DualNavbar />
//       <Header />
//     </>
//   );
// };

// export default Navbar;
