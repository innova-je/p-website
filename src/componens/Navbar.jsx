import React from 'react';
import { AppBar, Toolbar, Typography, Button, ListItemText, Menu, MenuItem, styled } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoImage from './innova.png'; // Change to a better res image?
import { useTheme } from '@mui/material/styles';



const StyledAppBar = styled(AppBar)({
  backgroundColor: 'white', // Change the background color
});

const JoinUs = styled('Box')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bold',
  padding: '2px 25px',
  borderRadius: '25px',
}));

const PageButton = styled(Button)(({ theme, selected }) => ({
  color: theme.palette.primary.main,
  display: 'flex',
  fontSize: '0.8rem !important', // Adjust the font size here for all pages
  alignItems: 'center',
  fontWeight: selected ? 'normal' : 'bold', // Change font weight based on selected
}));

const pageDropdowns = [
  {
    title: 'About Us',
    dropdownOptions: [],
  },
  {
    title: 'Services',
    dropdownOptions: [],
  },
  {
    title: 'Our People',
    dropdownOptions: ['Item X', 'Item Y', 'Item Z'],
  },
  {
    title: 'Events',
    dropdownOptions: ['Apple', 'Banana', 'Orange'],
  },
  {
    title: 'Out Of Office',
    dropdownOptions: [],
  },
];

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedPage, setSelectedPage] = React.useState(null);
  const currentTheme = useTheme();

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
        {/* Logo Image */}
        <img
          src={LogoImage}
          alt="Logo Innova"
          style={{ height: 25, marginRight: 10 }}
        />

        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          {/* Pages with Dropdown */}
          {pageDropdowns.map((page, index) => (
            <div key={index}>
              <PageButton
                color="inherit"
                selected={selectedPage === index} // Set selected state
                aria-haspopup={page.dropdownOptions.length > 0 ? 'true' : undefined}
                onClick={(event) => handleMenuOpen(event, index)}
                endIcon={
                  page.dropdownOptions.length > 0 ? <KeyboardArrowDownIcon /> : null
                }
              >
                {page.title}
              </PageButton>
              {page.dropdownOptions.length > 0 && (
                <Menu
                  anchorEl={anchorEl}
                  open={selectedPage === index && Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {page.dropdownOptions.map((option, i) => (
                    <MenuItem key={i} onClick={handleMenuClose}>
                      <ListItemText primary={option} />
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ))}
        </div>

        {/* Join Us Button */}
        <JoinUs>Join Us</JoinUs>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavBar;