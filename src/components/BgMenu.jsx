import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const BgMenu = () => {

  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = (state) => {
    if (!isMenuClicked) {
      document.body.style.overflow = "hidden";
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setMenuButtonStyle({
        ...MenuButtonStyle,
        height: "100dvh",
        width: "100dvw",
        backgroundColor: theme.palette.primary.main,
        top: 0,
        right: 0, //efeito a vir da direita
        marginRight: 0,
        borderRadius: "0%",
        zIndex: 50,
        transition:
          "right 0.6s ease-in-out, marginRight 0.6s ease-in-out, height 0.6s ease-in-out, width 0.6s ease-in-out, border-radius 0.6s ease-in-out, backgroundColor 0.6s ease-in-out",
      });
    } else {
      document.body.style.overflow = "auto";
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setMenuButtonStyle({
        ...MenuButtonStyle,
        height: "100dvh",
        width: "0px", //faz o efeito a vir da direita
        //height: "0px",
        //width: "100dvw" faz o efeito a vir de cima
        position: "absolute",
        right: "0%",
        borderRadius: "0%",
        backgroundColor: theme.palette.primary.main,
      });
      setBgMenuStyle({
        ...BgMenuStyle,
        backgroundColor: "transparent",
      });
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const [MenuButtonStyle, setMenuButtonStyle] = useState({
    color: "white",
    height: "100vh",
    width: "0px",
    aspectRatio: "1/1",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    right: 0,
  });

  const [BgMenuStyle, setBgMenuStyle] = useState({
    color: "white",
    height: "40px",
    width: "40px",
    aspectRatio: "1/1",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
    position: "absolute",
    right: "7%",
  });

  const BgBar1 = {
    width: isMenuClicked ? "25px" : "20px",
    height: "3px",
    borderRadius: "5px",
    background: isMenuClicked ? "white" : theme.palette.primary.main,
    transform: isMenuClicked ? "rotate(45deg) translate(0.2em, 0.5em)" : "none",
    transition: "transform ease-in-out 0.5s, background ease-in-out 0.3s",
  };

  const BgBar2 = {
    width: "20px",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: isMenuClicked ? "white" : theme.palette.primary.main,
    opacity: isMenuClicked ? "0%" : "100%",
    transition: "opacity 0.3s ease-in-out",
  };

  const BgBar3 = {
    width: isMenuClicked ? "25px" : "20px",
    height: "3px",
    borderRadius: "5px",
    background: isMenuClicked ? "white" : theme.palette.primary.main,
    transform: isMenuClicked
      ? "rotate(-45deg) translate(0.2em, -0.5em)"
      : "none",
    transition: "transform ease-in-out 0.5s, background ease-in-out 0.3s",
  };

  const NavLinkStyle = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10%",
  };

  const PagesLinkStyle = {
    fontSize: "2rem",
    color: "white",
    fontWeight: "400",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div className="burger-menu" onClick={updateMenu} style={BgMenuStyle}>
        <div className={burger_class} style={BgBar1} />
        <div className={burger_class} style={BgBar2} />
        <div className={burger_class} style={BgBar3} />
      </div>

      <div style={{ ...MenuButtonStyle, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            opacity: isMenuClicked ? "100%" : "0%",
            right: isMenuClicked ? "0%" : "-200%",
            transition: "opacity 0.2s ease-in-out, right 0.6s ease-in-out",
          }}
        >
          <NavLink to="/" style={NavLinkStyle} onClick={updateMenu}>
            <Typography sx={PagesLinkStyle}>Home</Typography>
          </NavLink>
          <NavLink to="/about-us" style={NavLinkStyle} onClick={updateMenu}>
            <Typography sx={PagesLinkStyle}>About Us</Typography>
          </NavLink>
          <NavLink to="/services" style={NavLinkStyle} onClick={updateMenu}>
            <Typography sx={PagesLinkStyle}>Services</Typography>
          </NavLink>
          <NavLink
            to="/our-people/our-team"
            style={NavLinkStyle}
            onClick={updateMenu}
          >
            <Typography sx={PagesLinkStyle}>Our Team</Typography>
          </NavLink>
          <NavLink
            to="/our-people/our-advisors"
            style={NavLinkStyle}
            onClick={updateMenu}
          >
            <Typography sx={PagesLinkStyle}>Our Advisors</Typography>
          </NavLink>
          {/* 
          <NavLink to="/events" style={NavLinkStyle} onClick={updateMenu}>
            <Typography sx={PagesLinkStyle}>Events</Typography>
          </NavLink>          
          */}
          
          <NavLink
            to="/out-of-office"
            style={NavLinkStyle}
            onClick={updateMenu}
          >
            <Typography sx={PagesLinkStyle}>Out of Office</Typography>
          </NavLink>
          {mobile && (
            <NavLink to="/join-us" style={NavLinkStyle} onClick={updateMenu}>
              <Typography sx={PagesLinkStyle}>Join Us</Typography>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default BgMenu;
