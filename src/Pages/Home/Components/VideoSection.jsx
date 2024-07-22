import React from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import BgVideo from "../../../videos/HomePageVideo.mp4";

function VideoSection() {
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });

  const fontSize = isMobile ? "21vw" : isTablet ? "10vw" : "9vw";
  const smallFontSize = isMobile ? "5vw" : isTablet ? "3.5vw" : "4vw";
  const letterSpacing = isMobile ? "1vw" : isTablet ? "1.5vw" : "1.8vw";
  const lineHeight = isMobile ? "110%" : isTablet ? "100%" : "130%";

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden"
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
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Typography
            style={{
              fontWeight: 500,
              fontSize: smallFontSize,
              letterSpacing: "0.16em",
              color: "#052533",
              paddingRight: 2,
            }}
          >
            with
          </Typography>
          <Typography
            style={{
              fontWeight: 853,
              fontSize,
              letterSpacing: "0.16em",
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
  );
}

export default VideoSection;
