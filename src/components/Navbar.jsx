import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, styled, useTheme } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoImage from '../images/OurLogos/logos-02.png';
import { useMediaQuery } from 'react-responsive';
import BgMenu from './BgMenu';

const JoinUsButton = styled(Button)(({ theme, isActive }) => ({
  backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
  color: 'white',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: "20px",
  maxHeight: "40px",
  height: "40px",
  width: "150px",
  transition: 'transform 0.3s ease-in-out',
  textDecoration: "none",
  '&:hover': {
    backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.primary.main,
    transform: 'scale(1.05)',
    cursor: "pointer"
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const isDesktop = useMediaQuery({ minWidth: 1081 });
  const location = useLocation(); // Get the current path

  const [anchorElDropdown1, setAnchorElDropdown1] = React.useState(null);
  const [anchorElDropdown2, setAnchorElDropdown2] = React.useState(null);

  const handleMenuClick = (event, dropdown) => {
    if (dropdown === 'dropdown1') {
      setAnchorElDropdown1(event.currentTarget);
    } else if (dropdown === 'dropdown2') {
      setAnchorElDropdown2(event.currentTarget);
    }
  };

  const handleMenuClose = (dropdown) => {
    if (dropdown === 'dropdown1') {
      setAnchorElDropdown1(null);
    } else if (dropdown === 'dropdown2') {
      setAnchorElDropdown2(null);
    }
  };

  const renderDropdownButton = (label, subPages, dropdown) => (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={(event) => handleMenuClick(event, dropdown)}
        style={{ color: isInnovationWeek ? theme.palette.secondary.main : '#732043', fontWeight: 'bold', textTransform: 'none', fontSize: '18px' }}
      >
        {label} <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={dropdown === 'dropdown1' ? anchorElDropdown1 : anchorElDropdown2}
        open={Boolean(dropdown === 'dropdown1' ? anchorElDropdown1 : anchorElDropdown2)}
        onClose={() => handleMenuClose(dropdown)}
      >
        {subPages.map((subPage) => (
          <MenuItem
            key={subPage.path}
            onClick={() => handleMenuClose(dropdown)}
            component={Link}
            to={subPage.path}
            style={{ color: isInnovationWeek ? theme.palette.secondary.main : '#732043', fontSize: '18px', textAlign: "left" }}
          >
            {subPage.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const linkStyles = {
    textDecoration: 'none',
    color: '#732043',
    fontWeight: 'bold',
    fontSize: '18px',
    transition: 'font-weight 0.3s ease',
    textTransform: 'none'
  };

  const activeLinkStyles = {
    fontWeight: 'normal',
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const isIOS = React.useMemo(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }, []);

  // Check if the current path includes "/events/innovation-week"
  const isInnovationWeek = location.pathname.includes("/events/innovation-week");

  return (
    <AppBar position="absolute" style={{ left: "0", background: isInnovationWeek ? '#FFFFFF80' : '#FFFFFF10', boxShadow: 'none', height: '70px' }}>
      <Toolbar style={{ height: '100%', justifyContent: 'space-between' }}>
        <div style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          left: 0,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          overflow: "visible",
        }}>
          <Link to="/" style={{
            position: "relative",
            height: "100%",
            zIndex: 2
          }}>
            <img src={LogoImage} style={{ height: "100%", width: isIOS ? "auto" : "100%", maxWidth: "100%", marginLeft: isDesktop || isTablet ? "15%" : "10%" }} />
          </Link>
        </div>

        <div style={{ display: isDesktop ? "flex" : "none", justifyContent: 'center', alignItems: 'center', flexGrow: 1, zIndex: 1 }}>
          <NavLink to="/about-us" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={isInnovationWeek ? { ...linkStyles, color: theme.palette.secondary.main } : linkStyles}>About Us</Button>
          </NavLink>
          <NavLink to="/services" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={isInnovationWeek ? { ...linkStyles, color: theme.palette.secondary.main } : linkStyles}>Services</Button>
          </NavLink>

          {renderDropdownButton("Our People", [
            { label: "Our Team", path: "/our-people/our-team" },
            { label: "Our Advisors", path: "/our-people/our-advisors" },
          ], 'dropdown1')}

          {renderDropdownButton("Events", [
            { label: "Innovation Week", path: "/events/innovation-week" },
            { label: "test2", path: "/events/test2" },
          ], 'dropdown2')}

          <NavLink to="/out-of-office" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={isInnovationWeek ? { ...linkStyles, color: theme.palette.secondary.main } : linkStyles}>Out of Office</Button>
          </NavLink>
        </div>

        <div style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}>
          <div style={{
            width: "100%",
            position: "absolute",
            right: "0",
            display: "flex",
            justifyContent: "right"
          }}>
            <NavLink to="/join-us" onClick={handleNavLinkClick} style={{
              position: "relative",
              display: isTablet || isDesktop ? "flex" : "none",
              marginRight: isDesktop ? "7%" : "15%",
              textDecoration: "none",
              zIndex: 2
            }}>
              <JoinUsButton isActive={isInnovationWeek}>Join Us</JoinUsButton>
            </NavLink>
          </div>
          <div style={{ display: isDesktop ? "none" : "flex" }}>
            <BgMenu />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
