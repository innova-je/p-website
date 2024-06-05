import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, styled  } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoImage from '../images/OurLogos/logos-02.png';
import { useMediaQuery } from 'react-responsive';
import BgMenu from './BgMenu';


const JoinUsButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  fontSize: '1rem',
  borderRadius: "20px",
  border: "none",
  maxHeight: "40px",
  height: "40px",
  width: "150px",
  transition: 'transform 0.3s ease-in-out', 
  textDecoration: "none",

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transform: 'scale(1.05)', 
    cursor: "pointer"
  },
}));


const Navbar = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

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
        style={{ color: '#732043', fontWeight: 'bold', textTransform: 'none', fontSize: '18px'}}
        disableScrollLock={true} 
      >
        {label} <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={dropdown === 'dropdown1' ? anchorElDropdown1 : anchorElDropdown2}
        open={Boolean(dropdown === 'dropdown1' ? anchorElDropdown1 : anchorElDropdown2)}
        onClose={() => handleMenuClose(dropdown)}
        disableScrollLock={true} 
      >
        {subPages.map((subPage) => (
          <MenuItem
            key={subPage.path}
            onClick={() => handleMenuClose(dropdown)}
            component={Link}
            to={subPage.path}
            style={{ color: '#732043', fontSize: '18px', textAlign: "left"}}
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

  function isIOS() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

    return (
    <AppBar position="absolute" style={{left: "0",  background: '#FFFFFF10', boxShadow: 'none', height: '70px'}}>
      
    <Toolbar style={{ height: '100%', justifyContent: 'space-between'}}>
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
          <img src={LogoImage} style={{ height: "100%", width: isIOS ? "auto" :  "100%", maxWidth: "100%", marginLeft: desktop || tablet ? "15%" : "10%"}} />
        </Link>

      </div>

        <div style={{ display: desktop ? "flex" : "none", justifyContent: 'center', alignItems: 'center', flexGrow: 1, zIndex: 1}}>
          <NavLink to="about-us" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={linkStyles}>About Us</Button>
          </NavLink>
          <NavLink to="/services" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={linkStyles}>Services</Button>
          </NavLink>

          {renderDropdownButton("Our People", [
            { label: "Our Team", path: "/our-people/our-team" },
            { label: "Our Advisors", path: "/our-people/our-advisors" },
          ], 'dropdown1')}

          
          {renderDropdownButton("Events", [
            { label: "Innovation Week", path: "/events/innovation-week" },
            { label: "Innovation Valley", path: "/events/innovation-valley" },
          ], 'dropdown2')}

          <NavLink to="/out-of-office" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={linkStyles}>Out of Office</Button>
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
        
        <NavLink to="/join-us" onClick={() => handleNavLinkClick()} style={{
            position: "relative",
            display: tablet || desktop ? "flex" : "none",
            marginRight: desktop ? "7%" : "15%",
            textDecoration: "none",
            zIndex: 2
          }}>
            <JoinUsButton>Join Us</JoinUsButton>
          </NavLink>
          
        </div>
        <div style={{display: desktop ? "none" : "flex"}}>
          <BgMenu></BgMenu>
        </div>

        </div>
        
      </Toolbar>
      
    </AppBar>
  );

};

export default Navbar;