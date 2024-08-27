import React from 'react';
import backgroundImage from '../../../../Assets/Images/other/IW-png.png';
import IW_Hero from '../../../../Assets/Images/other/IW_Hero.png';

function HeroSection() {
  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <img
        src={backgroundImage}
        alt="Innovation Week 2023"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundImage: 'linear-gradient(to top, rgba(5, 37, 51, 1), rgba(5, 37, 51, 0))',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          zIndex: 3,
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <img
          src={IW_Hero}
          alt="Innovation Week 2023"
          style={{ width: "100%", maxWidth: "90%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
