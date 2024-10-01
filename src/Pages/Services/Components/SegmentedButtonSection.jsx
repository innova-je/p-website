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
    width: "20%",
    height: "3rem",
    color: "white",
    border: "none",
    fontSize: "1.2rem",
  };

  const itButtonStyles = {
    ...buttonStyles,
    background: selectedArea === "IT Development" ? theme.palette.primary.main : "#ccc",
    borderRadius: "10px 0 0 10px",
    transition: "background 0.5s",
  };

  const roboticsButtonStyles = {
    ...buttonStyles,
    background: selectedArea === "Robotics" ? theme.palette.secondary.main : "#ccc",
    borderRadius: "0 10px 10px 0",
    transition: "background 0.5s",
  };

  const contentContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.5s ease-in-out",
    opacity: selectedArea === "IT Development" ? 1 : 0,
    visibility: selectedArea === "IT Development" ? "visible" : "hidden",
    height: selectedArea === "IT Development" ? "auto" : 0,
    overflow: "hidden",
  };

  const roboticsContainerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "opacity 0.5s ease-in-out",
    opacity: selectedArea === "Robotics" ? 1 : 0,
    visibility: selectedArea === "Robotics" ? "visible" : "hidden",
    height: selectedArea === "Robotics" ? "auto" : 0,
    overflow: "hidden",
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

      <div style={contentContainerStyles}>
        {selectedArea === "IT Development" && (
          <div style={{display: "flex", flexDirection: "column"}}>
            <SoftwareSolutions />
            <MobileDevelopment />
          </div>
        )}
      </div>

      <div style={roboticsContainerStyles}>
        {selectedArea === "Robotics" && <Robotics />}
      </div>
    </div>
  );
}

export default SegmentedButton;
