import React from "react";
import { Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import HeroImage from "../../../Assets/Images/other/about-us.png";

function HeroSection() {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isTablet = useMediaQuery({ minWidth: 651, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getResponsiveValue = (mobileSize, tabletSize, defaultSize) => {
    if (isMobile) return mobileSize;
    if (isTablet) return tabletSize;
    return defaultSize;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: getResponsiveValue("80vh", "100vh", "100vh"),
        justifyContent: "center",
        overflowX: "clip",
        position: "relative",
      }}
    >
      {/* Blurred Background Image */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          opacity: 0.7,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          width: getResponsiveValue("90vw", "90vw", "80vw"),
        }}
      >
        {/* "About Us" Tag */}
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: "15px",
            position: "absolute",
            top:  getResponsiveValue("-1.8rem", "-2rem", "-2rem"),
            left: "-17vw",
            width: "60%",
            height: "2rem",
            padding: "1vw",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 400,
            fontSize: getResponsiveValue("3vw", "2vw", "2vw"),
          }}
        >
          About Us
        </div>

        {/* White Box with Content */}
        <div
          style={{
            backgroundColor: "white",
            padding: getResponsiveValue("0rem", "0rem", "3.5rem"),
            borderRadius: "0px 30px 0px 30px",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: getResponsiveValue("column", "column", "row"),
              justifyContent: getResponsiveValue("center", "center", "space-between"),
              alignItems: getResponsiveValue("flex-start", "flex-start", "center"),
              height: getResponsiveValue("auto", "auto", "45vh"),
            }}
          >
            {!isDesktop && (
              <img
                src={HeroImage}
                alt="Hero"
                style={{
                  width: getResponsiveValue("100%", "100%", "53%"),
                  borderRadius: "0px 30px 0px 0px",
                  objectFit: "cover",
                  height: getResponsiveValue("20vh", "30vh", "85%"),
                  zIndex: 1,
                  opacity: 0.75,
                }}
              />
            )}

            {/* Text Content */}
            <div style={{ padding: "1.5rem 0rem 2.2rem 2rem"}}>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  fontSize: getResponsiveValue("1.2rem", "1.5rem", "2.2rem"),
                }}
              >
                We are
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: getResponsiveValue("1.2rem", "1.5rem", "2.2rem"),
                }}
              >
                Junior Entrepreneurs
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: theme.palette.secondary.main,
                  fontWeight: 300,
                  fontSize: getResponsiveValue("1rem", "1.1rem", "1.6rem"),
                  lineHeight: getResponsiveValue("1.5rem", "2.2rem", "3rem"),
                  marginTop: getResponsiveValue("0.6rem", "0.6rem", "1rem"),
                }}
              >
                Engineering Students <br />
                Problem Solvers <br />
                Creative Minds <br />
                Next-Gen Leaders
              </Typography>
            </div>

            {/* Hero Image */}
            {isDesktop && (
              <img
                src={HeroImage}
                alt="Hero"
                style={{
                  width: getResponsiveValue("40%", "40%", "53%"),
                  borderRadius: "30px",
                  objectFit: "cover",
                  height: "85%",
                  zIndex: 1,
                  opacity: 0.75,
                }}
              />
            )}
          </div>
        </div>

        {/* Bottom Info Box */}
        <div
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            borderRadius: "15px",
            position: "absolute",
            bottom: getResponsiveValue("-9.5rem", "-9.5rem", "-5.5rem"),
            left: "13vw",
            width: "80%",
            padding: "1.5rem",
            paddingRight: "20rem",
            textAlign: "justify",
            fontWeight: 300,
            fontSize: getResponsiveValue("0.8rem", "1rem", "1.2rem"),
            display: "flex",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          In-Nova is the Junior Enterprise of NOVA School of Science and
          Technology, founded with the aim of promoting the capabilities of its
          students by integrating them into real projects. In-Nova is focused on
          creating a limitless workspace, in the most varied areas of knowledge.
          Specialized in robotics, full stack development, electronics, and
          prototyping.
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
