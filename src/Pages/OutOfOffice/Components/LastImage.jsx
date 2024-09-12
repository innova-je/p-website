import React from "react";
import bgImage from "../../../Assets/Images/other/maintenance_single_page.png";
import { Box } from "@mui/material";

const LastImage = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Box
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.6,
            zIndex: 0,
          }}
        />
      </div>
    </>
  );
};

export default LastImage;
