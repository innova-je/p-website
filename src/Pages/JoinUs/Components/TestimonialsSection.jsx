import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Carousel from "./CarouselReviews";
import { useMediaQuery } from "react-responsive";

function TestimonialsSection() {
  const theme = useTheme();
  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });

  const gradientPercentage = mobile ? "10%" : smallMobile ? "10%" : "0%";

  return (
    <div style={{width: "100%"}}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: mobile
            ? "center"
            : smallMobile
            ? "center"
            : "flex-start",
          width: "100%", // check this
          backgroundImage: `linear-gradient(to bottom, ${theme.palette.primary.main} ${gradientPercentage}, rgba(240,240,240,1))`,
        }}
      >
        <div
          style={{
            width: mobile || smallMobile ? "90%" : "auto",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "5%",
            }}
          >
            {smallMobile || mobile ? (
              <div
                style={{
                  padding: "5% 0 0 0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: mobile ? "6dvw" : smallMobile ? "6dvw" : "4dvw",
                    color: "#F0F0F0",
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "Bold",
                  }}
                >
                  Our members
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: mobile ? "7dvw" : smallMobile ? "7dvw" : "4dvw",
                    color: "#F0F0F0",
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "Bold",
                  }}
                >
                  love being here,
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: mobile ? "8dvw" : smallMobile ? "9dvw" : "4dvw",
                    color: "#F0F0F0",
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "Bold",
                  }}
                >
                  and so will you!
                </Typography>
              </div>
            ) : (
              <Typography
                variant="h3"
                sx={{
                  position: "relative",
                  zIndex: "1",
                  fontSize: "3.5dvw",
                  color: "#F0F0F0",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 500,
                }}
              >
                Our members love being here,
                <br />
                and so will you!
              </Typography>
            )}
          </div>
          <Carousel />
        </div>

        
      </Box>
    </div>
  );
}

export default TestimonialsSection;
