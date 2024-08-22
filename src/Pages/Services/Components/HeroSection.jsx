import React from "react";
import FigmaWorkshop from "../../../Assets/Images/other/Formação_Figma-removebg-preview 1.png";

const sectionStyles = {
  height: "100vh",
  display: "flex",
  margin: "4rem auto 0",
  position: "relative",
  overflow: "hidden",
};

const textStyles = {
  fontSize: "5rem",
  fontWeight: "bolder",
};

const highlightTextStyles = {
  ...textStyles,
  color: "#732043",
};

const buttonStyles = {
  width: "30%",
  height: "3rem",
  background: "#052533",
  color: "white",
  border: "none",
  borderRadius: "8px",
  marginTop: "2rem",
  fontWeight: "bolder",
  fontSize: "0.9rem",
  cursor: "pointer",
};

const leftColumnStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: "5rem",
  width: "65%",
};

const rightColumnStyles = {
  background: "#732043",
  width: "35%",
  height: "100%",
  borderRadius: "100px 0 0 0",
  position: "absolute",
  right: 0,
  overflow: "hidden",
};

function HeroSection() {
  return (
    <div style={sectionStyles}>
      <div style={leftColumnStyles}>
        <p>
          <span style={textStyles}>We provide the <br /></span>
          <span style={highlightTextStyles}>best solutions <br /></span>
          <span style={textStyles}>for your business</span>
        </p>
        <button style={buttonStyles}>Download Our Portfolio</button>
      </div>
      <div style={rightColumnStyles}>
        <img src={FigmaWorkshop} alt="Figma Workshop" />
      </div>
    </div>
  );
}

export default HeroSection;
