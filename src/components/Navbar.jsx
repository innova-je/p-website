import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Button, Menu, MenuItem, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoImage from '../images/logos/logos-02.png';


const JoinUs = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  fontFamily: theme.typography.fontFamily,
  fontWeight: 'bold',
  marginRight: '70px',
  padding: '5px 30px',
  borderRadius: '25px',
  transition: 'transform 0.2s ease-in-out', // Add transition for smooth hover effect

  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transform: 'scale(1.1)', // Enlarge the button on hover
  },
}));



const Navbar = () => {
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
        style={{ color: '#732043', fontWeight: 'bold', textTransform: 'none' }}
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
            style={{ color: '#732043' }}
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
    transition: 'font-weight 0.3s ease', // Add transition for smoother effect
    textTransform: 'none'
  };

  const activeLinkStyles = {
    fontWeight: 'normal',
  };

  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar>
         <Link to="/">
            <img
              src={LogoImage}
              alt="Logo Innova"
              style={{ height: 60, marginLeft: 70, cursor: 'pointer' }}
            />
          </Link>

        <div style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <NavLink to="/about-us" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
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
            { label: "test", path: "/our-people/test1" },
            { label: "test2", path: "/our-people/test2" },
          ], 'dropdown2')}

          <NavLink to="/out-of-office" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
            <Button color="inherit" style={linkStyles}>Out of Office</Button>
          </NavLink>
        </div>

        <Link to="/join-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          <JoinUs>Join Us</JoinUs>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
