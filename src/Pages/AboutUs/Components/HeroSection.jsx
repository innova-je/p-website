import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import HeroImage from "../../../images/other/about-us.png";

import { useMediaQuery } from "react-responsive";

function HeroSection() {
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
  const largeDesktop = useMediaQuery({ minWidth: 1400 });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          overflowX: "clip",
        }}
      >
        {/* Blurred Image */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${HeroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(12px)",
            opacity: "0.7",
          }}
        />

        {/* White Box */}
        <Box
          sx={{
            position: "relative",
            width: "80dvw"
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              borderRadius: smallMobile ? "3dvw" : "15px",
              position: "absolute",
              top: smallDesktop
                ? "-4dvw"
                : tablet
                ? "-4.5dvw"
                : mobile
                ? "-5.5dvw"
                : smallMobile
                ? "-5.5dvw"
                : "-2dvw",
              left: "-17dvw",
              width: "60%",
              height: "7%",
              padding: "1dvw",
              zIndex: "1",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              fontWeight: "400",
              fontSize: tablet || smallMobile ? "3dvw" : "2dvw",
            }}
          >
            About Us
          </Box>

          <div
            style={{
              backgroundColor: "white",
              padding: "60px",
              borderRadius: "30px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: "45vh"
              }}
            >
              <div>
                <div>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: "700",
                      fontSize: mobile
                        ? "3.9dvw"
                        : smallMobile
                        ? "3.9dvw"
                        : "2.7dvw",
                    }}
                  >
                    We are
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: theme.palette.primary.main,
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: "600",
                      fontSize: mobile
                        ? "3.9dvw"
                        : smallMobile
                        ? "3.9dvw"
                        : "2.7dvw",
                    }}
                  >
                    Junior Enterpreneurs.
                  </Typography>
                </div>

                <div style={{ margin: "1rem 0rem 0rem 2rem" }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontFamily: theme.typography.fontFamily,
                      fontWeight: "Light",
                      fontSize: smallDesktop
                        ? "2.5dvw"
                        : tablet
                        ? "2.5dvw"
                        : mobile
                        ? "3dvw"
                        : smallMobile
                        ? "3.3dvw"
                        : "1.8dvw",
                      lineHeight: smallMobile ? "2rem" : "3rem",
                    }}
                  >
                    Engineering Students <br />
                    Problem Solvers <br />
                    Creative Minds <br />
                    Next-Gen Leaders
                  </Typography>
                </div>
              </div>

              <img
                src={HeroImage}
                alt="Hero Image"
                style={{
                  width: smallDesktop
                    ? "48%"
                    : tablet
                    ? "45%"
                    : mobile || smallMobile
                    ? "40%"
                    : "53%",
                  borderRadius: "30px",
                  objectFit: "cover",
                  height: "85%",
                  zIndex: "1",
                  opacity: "0.75"
                }}
              />
            </div>
          </div>

          <Box
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: "white",
              borderRadius: "15px",
              position: "absolute",
              bottom: smallDesktop
                ? "-4.5dvw"
                : tablet
                ? "-6dvw"
                : mobile
                ? "-10dvw"
                : smallMobile
                ? "-39dvw"
                : "-4dvw",
              left: "10dvw",
              width: "80%",
              zIndex: "1",
              p: "1.5rem",
              pr: "20dvw",
              justifyContent: "center",
              textAlign: "justify",
              fontWeight: "light",
              fontSize: smallDesktop
                ? "1.5dvw"
                : tablet
                ? "1.8dvw"
                : mobile
                ? "2dvw"
                : smallMobile
                ? "3.5dvw"
                : "1.2dvw",
              display: "flex",
              alignItems: "center",
            }}
          >
            In-Nova is the Junior Enterprise of NOVA School of Science and
            Technology, founded with the aim of promoting the capabilities of
            its students by integrating them into real projects. In-Nova is
            focused on creating a limitless workspace, in the most varied areas
            of knowledge. Specialized in robotics, full stack development,
            electronics, and prototyping.
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HeroSection;
