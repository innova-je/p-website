import React from 'react';
import FillImage from '../../../images/other/maki_theatre.png';

function Industries() {
  return (
    <div
      style={{
        height: "auto",
        borderRadius: "0 0 20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        rowGap: "30px",
        padding: "60px 0px",
      }}
    >
      <div style={{ width: "80%", textAlign: "center" }}>
        <h1 style={{ fontWeight: "normal" }}>WE WORK FOR DIFFERENT</h1>
        <h1 style={{ fontSize: "4vw", color: "#732043" }}>INDUSTRIES & AUDIENCES</h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          width: "80%",
          padding: "50px 0px",
          justifyItems: "center",
          alignItems: "center",
          placeContent: "center",
          placeItems: "center",
          justifyContent: "center", // Center items horizontally
          alignContent: "center", // Center items vertically
          '@media (max-width: 600px)': {
            gridTemplateColumns: "repeat(2, 1fr)",
          }
        }}
      >
        {[
          "Theaters",
          "Educational Fairs",
          "Glass Industry",
          "Aviation Engineering",
          "Travel Agencies",
          "ONG's",
          "Events",
          "E-commerce Businesses",
        ].map((industry, index) => (
          <div
            key={index}
            style={{
              background: "white",
              width: "100%",
              maxWidth: "200px",
              height: "200px",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img src={FillImage} style={{ width: "50%" }} alt={industry} />
            <p style={{ color: "#732043", fontWeight: "bold", fontSize: "1.2rem", textAlign: "center" }}>
              {industry}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
