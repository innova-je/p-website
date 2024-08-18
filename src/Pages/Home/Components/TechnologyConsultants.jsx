import { Typography } from "@mui/material";
import React from "react";
import HomePageImg from "../../../Assets/Images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function TechnologyConsultants() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  const InfoCard = ({ color, borderColor, textColor, gradient, message, index }) => (
    <div
      style={{
        position: "relative",
        width: "95%",
        backgroundColor: color,
        borderRadius: "15px 0 0 15px",
        border: `4px solid ${borderColor}`,
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        zIndex: 3,
        marginBottom: "0%",
        padding: "10px 10px 10px 5px",
        right: index === "0" ? (mobile ? "-5%" : "-35%") : (mobile ? "-15%" : "-45%")
      }}
    >
      <div
        style={{
          width: "4px",
          height: "2rem",
          background: index === "0"
            ? `linear-gradient(${gradient}, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`
            : `linear-gradient(${gradient}, rgba(5, 37, 51, 1), rgba(5, 37, 51, 0))`,
          marginLeft: "5%",
          borderRadius: "5px",
        }}
      ></div>
      <Typography
        style={{
          marginLeft: mobile ? "4%" : "2%",
          color: textColor,
          fontSize: mobile ? "0.8rem" : "1.2rem",
          width: mobile ? "70%" : "100%",
          textAlign: "left",
          fontWeight: 300,
        }}
      >
        {message}
      </Typography>
    </div>
  );

  return (
    <div style={{ padding: desktop ? "3% 0 3% 8%" : mobile ? "10% 0 0 4%" : "10% 0 0 8%" }}>
      <div style={{ display: "flex", flexDirection: desktop ? "row" : "column" }}>
        <div style={{ display: "flex", flexDirection: "column", width: desktop ? "75%" : "100%" }}>
          <Typography style={{ color: "#052533", fontSize: desktop ? "3dvw" : tablet ? "3.5dvw" : "6.5dvw", fontWeight: 600 }}>
            Your Go-To
          </Typography>
          <Typography style={{ marginTop: "-2%", color: "#732043", fontSize: desktop ? "4.5dvw" : tablet ? "5.5dvw" : "7.5dvw", fontWeight: 700 }}>
            Technology Consultants
          </Typography>
        </div>
        <div style={{ width: desktop ? "25%" : "100%", display: "flex", justifyContent: desktop ? "center" : "flex-start", alignItems: "flex-end" }}>
          <NavLink to="/about-us" style={{ textDecoration: "none" }} onClick={handleNavLinkClick}>
            <Typography style={{ color: "#732043", fontSize: desktop ? "1.8vw" : tablet ? "2.5vw" : "4vw", fontWeight: 400, marginBottom: "8%" }}>
              Find more about us &rarr;
            </Typography>
          </NavLink>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "2%",
          borderRadius: "30px 0 0 30px",
        }}
      >
        <img
          alt="In-Nova"
          src={HomePageImg}
          style={{
            borderRadius: "20px 0 0 20px",
            width: "100%",
            height: (mobile) ? "40vh" : "63vh",
            objectFit: "cover",
            position: "relative",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: (mobile) ? "40vh" : "63vh",
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.5))",
            borderRadius: "20px 0 0 20px",
            zIndex: 1, // Make sure the overlay is above the image
          }}
        />
        <div
          style={{
            display: "flex",
            position: "relative",
            marginTop: mobile ? "-6%" : "-3%",
            flexDirection: "column",
            width: "100%",
            zIndex: 2, // Ensure the info cards are on top of the overlay
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
