import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const BgMenu = () => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const updateMenu = (state) => {
    if (!isMenuClicked) {
      document.body.style.overflow = 'hidden';
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setMenuButtonStyle({
        ...MenuButtonStyle,
        height: "400dvh",
        width: "100dvw",
        backgroundColor: "#732043",
        top: 0,
        right: 0,//efeito a vir da direita
        marginRight: 0,
        borderRadius: "0%",
        zIndex: 50,
        transition: "right 0.4s ease-in-out, marginRight 0.4s ease-in-out, height 0.5s ease-in-out, width 0.4s ease-in-out, border-radius 0.4s ease-in-out, backgroundColor 0.4s ease-in-out",
      });
    } else {
      document.body.style.overflow = 'auto';
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setMenuButtonStyle({
        ...MenuButtonStyle,
        height: "100dvh",        
        width: "0px",//faz o efeito a vir da direita
        //height: "0px",
        //width: "100dvw" faz o efeito a vir de cima
        position: "absolute",
        right: "0%",
        borderRadius: "0%",
        backgroundColor: "#732043"
      });
      setBgMenuStyle({
        ...BgMenuStyle,
        backgroundColor: "transparent",

      });
    }
    setIsMenuClicked(!isMenuClicked);
  };
  
  const [MenuButtonStyle, setMenuButtonStyle] = useState({
    color: 'white',
    height: "100dvh",
    width: "0px",
    aspectRatio: "1/1",
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    right: 0
  });

  const [BgMenuStyle, setBgMenuStyle] = useState({
    color: 'white',
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
    backgroundColor: isMenuClicked ? "white" : "#732043",
    transform: isMenuClicked ? "rotate(45deg) translate(0.2em, 0.5em)" : "none",
    transition: "transform ease-in-out 0.5s, backgroundColor ease-in-out 0.5s",
  };
  
  const BgBar2 = {
    width: "20px",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: isMenuClicked ? "white" : "#732043",
    opacity: isMenuClicked ? "0%" : "100%",
    transition: "opacity 0.3s ease-in-out",
  };

  const BgBar3 = {    
    width: isMenuClicked ? "25px" : "20px",
    height: "3px",
    borderRadius: "5px",
    backgroundColor: isMenuClicked ? "white" : "#732043",   
    transform: isMenuClicked ? "rotate(-45deg) translate(0.2em, -0.5em)" : "none",
    transition: "transform ease-in-out 0.5s, backgroundColor ease-in-out 0.5s",
  }

  const NavLinkStyle = {
    textDecoration : "none"
  };

  const PagesLinkStyle = {
    fontSize: "2rem",
    color: "white",
    fontWeight: "400"
  };

  const handleNavLinkClick = () => {
    //updateMenu();
    setIsMenuClicked(false)   
  };


  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", overflow: "hidden"}}>
          <div className="burger-menu" onClick={updateMenu} style={BgMenuStyle}>
            <div className={burger_class} style={BgBar1}></div>
            <div className={burger_class} style={BgBar2}></div>
            <div className={burger_class} style={BgBar3}></div>
          </div>

          <div style={{...MenuButtonStyle, overflow: "hidden"}}>

<div style={{
    width: "100%",
    height: "100%",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    opacity: isMenuClicked ? "100%" : "0%",
    transition: "opacity 0.4s ease-in-out",
    position: "fixed",
    bottom: 0
  }}>
    
      <NavLink to="/about-us" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>About Us</Typography>
      </NavLink> 
      <NavLink to="/services" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Services</Typography>
      </NavLink>
      <NavLink to="/our-people/our-team" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Our Team</Typography>
      </NavLink>
      <NavLink to="/our-people/our-advisors" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Our Advisors</Typography>
      </NavLink>
      <NavLink to="/join-us" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Events</Typography>
      </NavLink>
      <NavLink to="/out-of-office" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Out of Office</Typography>    
      </NavLink>
      {mobile && (
        <NavLink to="/join-us" style={NavLinkStyle} onClick={updateMenu}>
          <Typography style={PagesLinkStyle}>Join Us</Typography>
        </NavLink>
      )}            
    
  </div>

  </div>
        </div>
  )
}

export default BgMenu