import React from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import BgVideo from "../../../Assets/videos/HomePageVideo.mp4";

function VideoSection() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });

  const fontSize = isMobile ? "2.8rem" : isTablet ? "10vw" : "6rem";
  const smallFontSize = isMobile ? "1.3rem" : isTablet ? "3.5vw" : "4vw";
  const letterSpacing = isMobile ? "0.3rem" : isTablet ? "1.5vw" : "1rem";
  const lineHeight = isMobile ? "110%" : isTablet ? "100%" : "120%";

  return (
    <div
      style={{
        height: isMobile ? "60vh" : "100vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: "0px 0px 30px 30px"
      }}
    >
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: "cover",
          opacity: "50%",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />

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
            alignItems: isMobile ? "flex-start" : "flex-start",
            marginTop: "15%",
            zIndex: 1,
          }}
        >
          <div>
            <Typography
              style={{
                fontWeight: 853,
                fontSize,
                lineHeight,
                letterSpacing,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                textAlign: "left",
                color: "transparent",
                backgroundImage: "radial-gradient(circle, #052533, #631436)",
              }}
            >
              INNOVATING
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: isMobile ? "1rem" : "3rem",
              alignItems: "center",
              marginLeft: isMobile ? "1rem" : "3rem"
            }}
          >
              <Typography
                style={{
                  fontWeight: 500,
                  fontSize: smallFontSize,
                  letterSpacing,
                  color: "#052533",
                }}
              >
                with
              </Typography>
              <Typography
                style={{
                  fontWeight: 853,
                  fontSize,
                  letterSpacing,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  backgroundImage: "radial-gradient(circle, #052533, #631436)",
                }}
              >
                NO LIMITS
              </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
