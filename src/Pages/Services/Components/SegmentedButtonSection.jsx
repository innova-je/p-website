import React, { useState } from "react";

import SoftwareSolutions from "./SoftwareSolutions";
import MobileDevelopment from "./MobileDevelopment";
import Robotics from "./Robotics";
import { useTheme } from "@mui/material";

function SegmentedButton() {
  const theme = useTheme();
  const [selectedArea, setSelectedArea] = useState("IT Development");

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const buttonStyles = {
    cursor: "pointer",
    width: "25%",
    height: "4rem",
    color: "white",
    border: "none",
    fontSize: "1.2rem",
  };

  const itButtonStyles = {
    ...buttonStyles,
    background: theme.palette.primary.main,
    borderRadius: "10px 0 0 10px",
  };

  const roboticsButtonStyles = {
    ...buttonStyles,
    background: "#E591AD",
    borderRadius: "0 10px 10px 0",
  };

  return (
    <div>
      <div style={containerStyles}>
        <button
          onClick={() => setSelectedArea("IT Development")}
          style={itButtonStyles}
        >
          IT Development
        </button>
        <button
          onClick={() => setSelectedArea("Robotics")}
          style={roboticsButtonStyles}
        >
          Robotics & Prototyping
        </button>
      </div>

      {selectedArea === "IT Development" && (
        <>
          <SoftwareSolutions />
          <MobileDevelopment />
        </>
      )}

      {selectedArea === "Robotics" && <Robotics />}
    </div>
  );
}

export default SegmentedButton;
