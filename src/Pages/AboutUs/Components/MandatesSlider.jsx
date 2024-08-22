import React from "react";
import HeroImage from "../../../Assets/Images/other/about-us.png";

function MandatesSlider() {
  return (
    <div
      style={{
        height: "70vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <div style={{ position: "relative" }}>
        <img src={HeroImage} style={{ width: "100%" }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
            pointerEvents: "none"
          }}
        />
      </div>

      <div
        style={{
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "start",
          paddingLeft: "25px",
          gap: "20px"
        }}
      >
        <h1>Mandate V</h1>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "green" }}>
          <p>Tópico 1</p>
          <p>Tópico 1</p>
          <p>Tópico 1</p>
          <p>Tópico 1</p>
          <p>Tópico 1</p>
        </div>
      </div>
    </div>
  );
}

export default MandatesSlider;
