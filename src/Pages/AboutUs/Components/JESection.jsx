import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import MapParallax from "../../../components/MapParallax";
import { useMediaQuery } from "react-responsive";

function JESection() {
  const theme = useTheme();

  const isSmallMobile = useMediaQuery({ maxWidth: 650 });
  const isMobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const getResponsiveValue = (smallMobileValue, mobileValue, tabletValue, defaultValue) => {
    if (isSmallMobile) return smallMobileValue;
    if (isMobile) return mobileValue;
    if (isTablet) return tabletValue;
    return defaultValue;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: getResponsiveValue("150dvw", "150dvw", "150dvw", "80dvw"),
        width: "100%",
        background: "green",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "red",
          margin: "40px 0 0 40px",
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: "bold",
            fontSize: getResponsiveValue("4.5dvw", "4.5dvw", "4dvw", "2.0dvw"),
          }}
        >
          We're part of the
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bold",
            fontSize: getResponsiveValue("7.7dvw", "7.7dvw", "7.7dvw", "4dvw"),
          }}
        >
          Junior Enterprise Network
        </Typography>
      </div>

      <div>
        <Typography
        variant="h6"
        sx={{
          position: "absolute",
          top: "18%",
          color: theme.palette.secondary.main,
          fontWeight: "400",
          fontSize: getResponsiveValue("3.5dvw", "3.5dvw", "3.5dvw", "1.8dvw"),
          textAlign: "center",
        }}
      >
        “Europe’s future is in the hands of its young people.
        <br /> (…) Europe’s Junior Enterprises are leading the way.”
      </Typography>
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          top: "27%",
          right: getResponsiveValue("10dvw", "10dvw", "10dvw", "auto"),
          textAlign: getResponsiveValue("right", "right", "right", "center"),
          color: theme.palette.primary.main,
          fontWeight: "300",
          fontSize: getResponsiveValue("2.5dvw", "2.5dvw", "2.5dvw", "1.2dvw"),
        }}
      >
        Jean-Claude Juncker
        <br />
        European Commission, Former President
      </Typography>
      </div>
      

      <MapParallax />

      <Button
        variant="contained"
        href="https://jeportugal.pt/en/je-network/"
        sx={{
          bottom: getResponsiveValue("15dvw", "15dvw", "15dvw", "5dvw"),
          backgroundColor: theme.palette.primary.main,
          fontWeight: "600",
          fontSize: getResponsiveValue("4dvw", "4dvw", "4dvw", "1.5dvw"),
          textTransform: "none",
          padding: "5px 50px",
          borderRadius: "15px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}

export default JESection;
