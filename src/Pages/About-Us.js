import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import MandatesSection from "../components/MandatesSection";
import HeroSection from "./AboutUs/Components/HeroSection";
import ValuesSection from "./AboutUs/Components/ValuesSection";
import MandatesSlider from "./AboutUs/Components/MandatesSlider";
import JESection from "./AboutUs/Components/JESection";

const AboutUs = () => {
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
  const largeDesktop = useMediaQuery({ minWidth: 1400 });

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Expandable boxes */}
        <ValuesSection />

        <Typography
          variant="h4"
          sx={{
            position: "relative",
            textAlign: "center",
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "Bold",
            zIndex: "3",
            mt: "4rem",
          }}
        >
          In-Nova
        </Typography>
        <Typography
          variant="h2"
          sx={{
            position: "relative",
            textAlign: "center",
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "Bold",
            zIndex: "3",
            fontSize: tablet
              ? "6.5dvw"
              : mobile
              ? "6dvw"
              : smallMobile
              ? "6dvw"
              : "3.2dvw",
          }}
        >
          Throughout the years
        </Typography>

        <Box sx={{ position: "relative", padding: "50px 0 0 0", zIndex: 4, }}>
          <MandatesSlider />
        </Box>

        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            bottom: -1,
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to top, rgba(115,32,67,1), rgba(115,32,67,0))",
          }}
        />
      </div>

      <JESection />
    </>
  );
};

export default AboutUs;
