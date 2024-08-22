import React from "react";
import FillImage from "../../../Assets/Images/other/maki_theatre.png";
import styled from "styled-components";

const industryNameStyle = {
  color: "#732043",
  fontWeight: "bold",
  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
  textAlign: "center",
};

const containerStyle = {
  borderRadius: "0 0 20px 20px",
  background: "#F0F0F0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "30px",
  padding: "60px 0px",
};

const industries = [
  "Theaters",
  "Educational Fairs",
  "Glass Industry",
  "Aviation Engineering",
  "Travel Agencies",
  "ONG's",
  "Events",
  "E-commerce Businesses",
];

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 80%;
  padding: 3rem 0;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(150px, 1fr));
  }
`;

const GridElement = styled.div`
  background: white;
  width: 100%;
  max-width: 11rem;
  height: 11rem;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    max-width: 8rem;
    height: 8rem;
  }
`;

function Industries() {
  return (
    <div style={{ background: "#732043" }}>
      <div style={containerStyle}>
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontWeight: "normal", fontSize: "clamp(1rem, 2vw, 1.6rem)" }}>
            WE WORK FOR DIFFERENT
          </h1>
          <h1 style={{ fontSize: "clamp(1.2rem, 4rem, 2.5rem)", color: "#732043" }}>
            INDUSTRIES & AUDIENCES
          </h1>
        </div>

        <GridContainer>
          {industries.map((industry, index) => (
            <GridElement key={index}>
              <img src={FillImage} style={{ width: "50%" }} alt={industry} />
              <p style={industryNameStyle}>{industry}</p>
            </GridElement>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}

export default Industries;
