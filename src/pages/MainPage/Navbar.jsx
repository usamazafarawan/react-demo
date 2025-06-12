
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
 const [activeMenu, setActiveMenu] = useState(null);
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

const renderMenu = (label) => {
  const content = menuContents[label];
  if (!content) return null;

  const isTwoColumn = content.right && content.right.items?.length > 0;

  return (
    <Box
      onMouseOver={() => setActiveMenu(label)}
      onMouseLeave={() => setActiveMenu(null)}
      sx={{
        position: 'absolute',
        top: '100%', // align just below the nav link
        right: 0, // align with right of the link (assuming you're right-aligning links)
        backgroundColor: '#000',
        boxShadow: 3,
        width: isTwoColumn ? 600 : 200,
        maxWidth: '90vw',
        zIndex: 1200,
        display: 'flex',
        p: 1,
        borderRadius: '0 0 8px 8px',
        border: '1px solid rgba(45, 83, 164, 0.3)',
        mt: 0, // ensure no spacing
      }}
    >
      <Grid container spacing={2} alignItems="flex-start" >
        {/* Left Column */}
        <Grid item xs={isTwoColumn ? 6 : 12}>
          {content.left?.title && (
            <Typography
              variant="h6"
              sx={{
                pb: 1,
                mb: 2,
                fontSize: '1rem',
                fontWeight: 600,
              }}
            >
              {content.left.title}
            </Typography>
          )}
          {content.left.items.map((item, i) => (
            <Box
              key={i}
              sx={{
                my: 1,
                '&:hover': {
                  backgroundColor: 'rgba(221, 207, 202, 0.1)',
                  borderRadius: 1,
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#fff',
                  px: 1,
                  py: 0.5,
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Grid>

        {/* Divider for 2-column layout */}
        {isTwoColumn && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: '#2D53A4', mx: 1 }}
          />
        )}

        {/* Right Column */}
        {isTwoColumn && (
          <Grid item xs={5}>
            {content.right?.title && (
              <Typography
                variant="h6"
                sx={{
                  pb: 1,
                  mb: 2,
                  fontSize: '1rem',
                  fontWeight: 600,
                }}
              >
                {content.right.title}
              </Typography>
            )}
            {content.right.items.map((item, i) => (
              <Box
                key={i}
                sx={{
                  my: 1,
                  '&:hover': {
                    backgroundColor: 'rgba(221, 207, 202, 0.1)',
                    borderRadius: 1,
                  },
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#fff',
                    px: 1,
                    py: 0.5,
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Grid>
        )}
      </Grid>
    </Box>
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
    <AppBar position="static" sx={{ backgroundColor: '#000', px: 4, py: 1 }}>
  <Toolbar sx={{ 
    display: 'flex', 
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '64px !important', // Ensures consistent height
  }}>
    {/* Left Logo and Text */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <img
        src={igsLogo}
        alt="Logo"
        style={{ height: 40 }}
      />

      {/* Vertical Divider */}
      <Divider 
        orientation="vertical" 
        flexItem 
        sx={{ 
          backgroundColor: 'rgba(255,255,255,0.3)', 
          height: 40,
          my: 'auto'
        }} 
      />

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        lineHeight: 1.2
      }}>
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.5px'
          }}
        >
          RESHAPING
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.5px'
          }}
        >
          PROCUREMENT
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '0.8125rem',
            letterSpacing: '0.5px'
          }}
        >
          THROUGH INNOVATION
        </Typography>
      </Box>
    </Box>

    {/* Right Top Menu Items + Menu Icon */}
  <Box sx={{ 
  display: 'flex', 
  alignItems: 'center',
  gap: 1,
  position: 'relative',
  marginLeft: 'auto' // This pushes the menu to the right
}}>
  {topLinks.map(link => (
    <Box
      key={link}
      onMouseOver={() => setActiveMenu(link)}
      onMouseLeave={() => setActiveMenu(null)} // Add small delay
      sx={{ 
        position: 'relative', 
        display: 'inline-block',
      }}
    >
      <Typography
        variant="body2" // Changed from button to body2 for smaller size
        sx={{
          color: activeMenu === link ? '#2D53A4' : '#fff',
          fontWeight: activeMenu === link ? 600 : 400,
          px: 1.5,
          py: 1,
          borderRadius: 1,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          backgroundColor: 'transparent',
          fontSize: '0.8125rem', // 13px equivalent
          '&:hover': {
            color: '#2D53A4',
            backgroundColor: 'rgba(255,255,255,0.05)'
          }
        }}
      >
        {link}
        <ArrowDropDownIcon fontSize="inherit" sx={{ fontSize: '0.9rem' }} />
      </Typography>

  {activeMenu === link && (
  <Box
    sx={{
      position: 'absolute',
      top: '100%', // Position directly below the link
      right: 0,
      zIndex: 1200,
      mt: 0, // No margin top
       mb: 0,
    }}
  >
    {renderMenu(link)}
  </Box>
)}
    </Box>
  ))}
      
      {/* Rightmost Menu Icon */}
      <IconButton
        color="inherit"
        sx={{
          ml: 1,
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
          {/* {renderBottomLinks()} */}
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
