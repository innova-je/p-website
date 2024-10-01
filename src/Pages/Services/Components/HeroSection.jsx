import React from "react";
import FigmaWorkshop from "../../../Assets/Images/other/Formação_Figma-removebg-preview 1.png";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";

function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 600 }); // Check if the screen width is 600px or less

  const sectionStyles = {
    height: "100vh",
    display: "flex",
    margin: "4rem auto 0",
    position: "relative",
    overflow: "hidden",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyles = {
    fontSize: isMobile ? "3.5rem" : "5rem",
    fontWeight: "bolder",
    textAlign: "left",
  };

  const highlightTextStyles = {
    ...textStyles,
    color: theme.palette.primary.main,
  };

  const buttonStyles = {
    width: "30%",
    height: "3rem",
    background: theme.palette.secondary.main,
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginTop: "2rem",
    fontWeight: "bolder",
    fontSize: "0.9rem",
    cursor: "pointer"
  };

  const leftColumnStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: isMobile ? "0" : "5rem",
    width: "100%",
    alignItems:"flex-start",
  };

  const rightColumnStyles = {
    background: theme.palette.primary.main,
    width: "35%",
    height: "100%",
    borderRadius: "100px 0 0 0",
    position: "absolute",
    right: 0,
    overflow: "hidden",
    display: isMobile ? "none" : "block",
  };

  return (
    <div style={sectionStyles}>
      <div style={leftColumnStyles}>
          <span style={textStyles}>We provide the <br /></span>
          <span style={highlightTextStyles}>best solutions <br /></span>
          <span style={textStyles}>for your business</span> 
        <button style={buttonStyles}>Download Our Portfolio</button>
      </div>
      <div style={rightColumnStyles}>
        <img src={FigmaWorkshop} alt="Figma Workshop" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
}

export default HeroSection;
