import React, { useState, useMemo, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  styled,
  useTheme,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoImage from "../Assets/Images/OurLogos/logos-02.png";
import { useMediaQuery } from "react-responsive";
import BgMenu from "./BgMenu";

const JoinUsButton = styled(Button)(({ theme, isActive }) => ({
  backgroundColor: isActive
    ? theme.palette.secondary.main
    : theme.palette.primary.main,
  color: "white",
  fontFamily: theme.typography.fontFamily,
  fontWeight: "bold",
  fontSize: "1rem",
  borderRadius: "20px",
  maxHeight: "40px",
  height: "40px",
  width: "150px",
  transition: "transform 0.3s ease-in-out",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: isActive
      ? theme.palette.secondary.main
      : theme.palette.primary.main,
    transform: "scale(1.05)",
    cursor: "pointer",
  },
}));

const linkStyles = (theme, isInnovationWeek) => ({
  textDecoration: "none",
  color: isInnovationWeek ? theme.palette.secondary.main : theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "18px",
  transition: "font-weight 0.3s ease",
  textTransform: "none",
});

const activeLinkStyles = {
  fontWeight: "normal",
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const isDesktop = useMediaQuery({ minWidth: 1081 });
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState({});
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 250 && lastScrollTop < scrollTop) {
        setScrollDirection("down");
        console.log(scrollDirection)
      } else if(lastScrollTop > scrollTop) {
        setScrollDirection("up");
        //console.log(scrollDirection)
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const handleMenuClick = (event, dropdown) => {
    setAnchorEl((prev) => ({ ...prev, [dropdown]: event.currentTarget }));
  };

  const handleMenuClose = (dropdown) => {
    setAnchorEl((prev) => ({ ...prev, [dropdown]: null }));
  };

  const renderDropdownButton = (label, subPages, dropdown) => (
    <React.Fragment>
      <Button
        color="inherit"
        onClick={(event) => handleMenuClick(event, dropdown)}
        style={{
          color: isInnovationWeek ? theme.palette.secondary.main : theme.palette.primary.main,
          fontWeight: "bold",
          textTransform: "none",
          fontSize: "18px",
        }}
      >
        {label} <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl[dropdown]}
        open={Boolean(anchorEl[dropdown])}
        onClose={() => handleMenuClose(dropdown)}
      >
        {subPages.map((subPage) => (
          <MenuItem
            key={subPage.path}
            onClick={() => handleMenuClose(dropdown)}
            component={Link}
            to={subPage.path}
            style={{
              color: isInnovationWeek
                ? theme.palette.secondary.main
                : theme.palette.primary.main,
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            {subPage.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const isIOS = useMemo(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }, []);

  const isInnovationWeek = location.pathname.includes(
    "/events/innovation-week"
  );

  return (
    <AppBar
      style={{
        background: "#FFFFFF60",
        backdropFilter: "blur(10px)",
        boxShadow: "none",
        top: scrollDirection === "up" ? 0 : "-4rem",
        position: "fixed",
        transition: "top 0.4s ease-in-out",
        height: "4rem"
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", height: "100%" }}>
        <div
          style={{
            width: "20%",
            display: "flex",
            flexGrow: 1,
          }}
        >
          <Link to="/">
            <img
              src={LogoImage}
              style={{
                height: "100%",
                paddingLeft: (isMobile) ? "2rem" : "3rem",
              }}
            />
          </Link>
        </div>

        <div
          style={{
            display: isDesktop ? "flex" : "none",
            justifyContent: "center",
            alignItems: "center",
            flexGrow: 2,
          }}
        >
          <NavLink
            to="/about-us"
            activeClassName="activeLink"
            style={linkStyles(theme, isInnovationWeek)}
            activeStyle={activeLinkStyles}
          >
            <Button color="inherit" style={linkStyles(theme, isInnovationWeek)}>
              About Us
            </Button>
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="activeLink"
            style={linkStyles(theme, isInnovationWeek)}
            activeStyle={activeLinkStyles}
          >
            <Button color="inherit" style={linkStyles(theme, isInnovationWeek)}>
              Services
            </Button>
          </NavLink>

          {renderDropdownButton(
            "Our People",
            [
              { label: "Our Team", path: "/our-people/our-team" },
              { label: "Our Advisors", path: "/our-people/our-advisors" },
            ],
            "dropdown1"
          )}

          {renderDropdownButton(
            "Events",
            [
              { label: "Innovation Week", path: "/events/innovation-week" },
              { label: "Innovation Valley", path: "/events/innovation-valley" },
            ],
            "dropdown2"
          )}

          <NavLink
            to="/out-of-office"
            activeClassName="activeLink"
            style={linkStyles(theme, isInnovationWeek)}
            activeStyle={activeLinkStyles}
          >
            <Button color="inherit" style={linkStyles(theme, isInnovationWeek)}>
              Out of Office
            </Button>
          </NavLink>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 4rem",
            flexGrow: 1,
          }}
        >
          <NavLink
            to="/join-us"
            style={{
              position: "relative",
              display: isTablet || isDesktop ? "flex" : "none",
              textDecoration: "none",
              zIndex: 2,
            }}
          >
            <JoinUsButton isActive={isInnovationWeek}>Join Us</JoinUsButton>
          </NavLink>
          <div style={{ display: isDesktop ? "none" : "flex"}}>
            <BgMenu />
          </div>
        </div>
      </div>
    </AppBar>
  );
};

export default Navbar;
