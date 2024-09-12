import React from "react";
import { useTheme } from "@mui/material";
import PhotosSection from "./PhotosSection";
import { useMediaQuery } from "react-responsive";

const HeaderStyle = {
  fontSize: "4rem",
  fontStyle: "italic",
};

function HeroSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 750 });

  const nada = {
    display: "none",
  }
  
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(to top, rgba(115,32,67,0.8), rgba(240,240,240,1))",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "40%",
          display: "flex",
          color: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ padding: "0 0 0 5rem" }}>
          <h2 style={HeaderStyle}>Work Hard</h2>
          <h2 style={HeaderStyle}>Have Fun</h2>
          <h2 style={HeaderStyle}>Make History</h2>

          <p
            style={
              isMobile ? nada : { padding: "2.5rem 0 0 0", fontSize: "1.5rem" }
            }
          >
            Work isn't just about building a career. It's about creating a
            community that embraces growth, impact, and the sheer joy of having
            fun at every turn.
          </p>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          flex: 1,
          display: "flex",
          color: "white",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PhotosSection />
      </div>
    </div>
  );
}

export default HeroSection;
