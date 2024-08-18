import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import HeroImage from "../../../Assets/Images/other/Join_us_image.webp";
import CountDownRecruitment from "./CountDownRecruitment";
import { useMediaQuery } from "react-responsive";

function HeroSection() {
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        style={{
          height: "100%",
          zIndex: 2,
          background:
            "linear-gradient(to top, rgba(240,240,240,1), rgba(240,240,240,0.5))",
        }}
      >
        <div
          style={{
            height: "100vh",
            width: "100vw",
            overflow: "hidden",
            zIndex: -1,
            position: "absolute",
          }}
        >
          <img
            src={HeroImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: "600",
                fontSize: tablet
                  ? "5.5dvw"
                  : mobile
                  ? "6dvw"
                  : smallMobile
                  ? "8dvw"
                  : "5dvw",
                position: "relative",
                color: theme.palette.secondary.main,
                fontFamily: theme.typography.fontFamily,
                zIndex: "1",
                textAlign: "center",
                padding: "5rem 0 3rem 0",
              }}
            >
              Want to {smallMobile && <br />} become one of us?
            </Typography>

            <CountDownRecruitment />

            <div style={{ padding: "5rem 0 0 0" }}>
              <Button
                variant="contained"
                href="https://forms.gle/NP4Eo4RUftMv4LFq7"
                sx={{
                  zIndex: "3",
                  borderRadius: "20px",
                  py: mobile ? "2dvw" : smallMobile ? "3dvw" : "1dvw",
                  px: mobile ? "8dvw" : smallMobile ? "10dvw" : "5dvw",
                  fontSize: tablet
                    ? "3dvw"
                    : mobile
                    ? "3dvw"
                    : smallMobile
                    ? "3dvw"
                    : "1.5dvw",
                  textTransform: "none",
                }}
              >
                Apply Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
