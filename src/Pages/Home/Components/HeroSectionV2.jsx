import React from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import logo from "../../../Assets/Images/OurLogos/logos-10.png";
import group from "../../../Assets/Images/Mandates/MandatoIV.webp";

function HeroSectionV2() {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });

  const fontSize = isMobile ? "2.8rem" : isTablet ? "10vw" : "6rem";
  const letterSpacing = isMobile ? "0.3rem" : isTablet ? "1.5vw" : "0.5rem";
  const lineHeight = isMobile ? "110%" : "100%";

  return (
    <div
      style={{
        height: isMobile ? "60vh" : "100vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0px 0px 30px 30px",
      }}
    >
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxHeight: "60%",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingLeft: "10%",
              textAlign: "left",
            }}
          >
            <div>
              <Typography
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #052533, #732043)",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                }}
              >
                Junior Consulting
              </Typography>
              <Typography
                style={{
                  fontWeight: 853,
                  fontSize,
                  lineHeight,
                  letterSpacing,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #052533, #732043)",
                }}
              >
                INNOVATING <br /> WITH NO <br />
                LIMITS
              </Typography>
              <Typography
                style={{
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(to right, #052533, #732043)",
                  fontWeight: 500,
                  fontSize: "2rem",
                }}
              >
                Since 2021
              </Typography>
            </div>
          </div>
        </div>

        

        
      </div>
    </div>
  );
}

export default HeroSectionV2;
