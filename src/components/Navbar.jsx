import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoImage from '../public/images/logos/logos-02.png'; 
import { Link } from 'react-router-dom';



const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white', // Change the background color
});

const JoinUs = styled(Button)(({ theme }) => ({

  backgroundColor: theme.palette.primary.main,
  color: 'white', // Set text color to contrast with the background
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

const PageButton = styled(Button)(({ theme, selected }) => ({
  color: theme.palette.primary.main,
  fontFamily: theme.typography.fontFamily,
  display: 'flex',
  fontSize: '1rem !important',
  alignItems: 'center',
  fontWeight: selected ? 'normal' : 'bold', // Change font weight based on selected
}));


const pageDropdowns = [
  {
    title: 'About Us',
    route: '/about-us',
  },
  {
    title: 'Services',
    route: '/services',
  },
  {
    title: 'Our People',
    route: '/our-people',
    dropdownOptions: [
      { title: 'Our Team', route: '/our-team' },
      { title: 'Our Advisors', route: '/our-advisors' },
    ],
  },
  {
    title: 'Events',
    route: '/events',
    dropdownOptions: ['Apple', 'Banana', 'Orange'],
  },
  {
    title: 'Out Of Office',
    route: '/out-of-office',
  },
];



const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedPage(index); 
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedPage(null);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Link to="/">
          <img
            src={LogoImage}
            alt="Logo Innova"
            style={{ height: 60, marginLeft: 70, cursor: 'pointer' }}
          />
        </Link>

        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {/* Pages with Dropdown */}
          {pageDropdowns.map((page, index) => (
            <div key={index}>
              {page.dropdownOptions ? (
                <PageButton
                  color="inherit"
                  selected={selectedPage === index}
                  aria-haspopup={page.dropdownOptions ? 'true' : undefined}
                  onClick={(event) => handleMenuOpen(event, index)}
                  endIcon={page.dropdownOptions ? <KeyboardArrowDownIcon /> : null}
                >
                  {page.title}
                </PageButton>
              ) : (
                <Link to={page.route} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <PageButton color="inherit">{page.title}</PageButton>
                </Link>
              )}
              {page.dropdownOptions && page.dropdownOptions.length > 0 && (
                <Menu
                  anchorEl={anchorEl}
                  open={selectedPage === index && Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {page.dropdownOptions.map((option, i) => (
                    <MenuItem key={i} onClick={handleMenuClose}>
                      <Link to={`${page.route}${option.route}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                        {option.title}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </div>

        <Link to="/join-us" style={{ textDecoration: 'none', color: 'inherit' }}>
          <JoinUs>Join Us</JoinUs>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;