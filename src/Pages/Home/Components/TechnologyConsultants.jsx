import { Typography } from "@mui/material";
import React from "react";
import HomePageImg from "../../../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function TechnologyConsultants() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const InfoCard = ({
    color,
    borderColor,
    textColor,
    gradient,
    message,
    index,
  }) => (
    <div
      style={{
        position: "relative",
        width: "95%",
        height: "50px",
        backgroundColor: color,
        borderRadius: "15px 0 0 15px",
        border: `4px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        zIndex: 3,
        marginBottom: "10px",
        right: index=="0" ? "-15%" : "-25%"
      }}
    >
      <div
        style={{
          width: "4px",
          height: "60%",
          background:
            index == "0"
              ? `linear-gradient(${gradient}, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`
              : `linear-gradient(${gradient}, rgba(5, 37, 51, 1), rgba(5, 37, 51, 0))`,
          marginLeft: "5%",
          borderRadius: "5px",
        }}
      ></div>
      <Typography
        style={{
          marginLeft: "4%",
          color: textColor,
          fontSize: "2vw",
          fontWeight: 300,
        }}
      >
        {message}
      </Typography>
    </div>
  );

  return (
    <div style={{ padding: desktop ? "3% 0 10% 8%" : "10% 0 0 8%", height: "auto", background: "red" }}>
      <div style={{ display: "flex", flexDirection: desktop ? "row" : "column" }}>
        <div style={{ display: "flex", flexDirection: "column", width: desktop ? "75%" : "100%" }}>
          <Typography style={{ color: "#052533", fontSize: desktop ? "3dvw" : tablet ? "3.5dvw" : "6.5dvw", fontWeight: 600 }}>
            Your Go-To
          </Typography>
          <Typography style={{ marginTop: "-2%", color: "#732043", fontSize: desktop ? "4.5dvw" : tablet ? "5.5dvw" : "7.5dvw", fontWeight: 700 }}>
            Technology Consultants
          </Typography>
        </div>
        <div style={{ width: desktop ? "25%" : "100%", display: "flex", justifyContent: desktop ? "center" : "left", alignItems: "end" }}>
          <NavLink to="/about-us" style={{ textDecoration: "none" }} onClick={handleNavLinkClick}>
            <Typography style={{ color: "#732043", fontSize: desktop ? "1.8vw" : tablet ? "2.5vw" : "", fontWeight: 400, marginBottom: "8%" }}>
              Find more about us &rarr;
            </Typography>
          </NavLink>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          height: desktop ? "65vh" : tablet ? "70vh" : "50vh",
          marginTop: "3%",
          padding: "20px 0",
          borderRadius: "30px 0 0 30px",
        }}
      >
        <img
          src={HomePageImg}
          style={{
            borderRadius: "20px 0 0 20px",
            width: "100%",
            height: "65vh",
            objectFit: "cover",
            position: "absolute",
            right: 0,
            top: 0
          }}
        />
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-12%", 
            flexDirection: "column",
            width: "100%",
            padding: "10px 0"
          }}
        >
          <InfoCard
            index="0"
            color="#052533"
            borderColor="#F0F0F0"
            textColor="white"
            gradient="to top"
            message="We work to inspire people & businesses"
          />
          <InfoCard
            index="1"
            color="white"
            borderColor="#F0F0F0"
            textColor="#052533"
            gradient="to bottom"
            message="And we also take pride in what we do and aim to go beyond"
          />
        </div>
      </div>
    </div>
  );
}

export default TechnologyConsultants;
