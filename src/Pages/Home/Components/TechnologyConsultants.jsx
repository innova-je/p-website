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

  const InfoCard = ({ color, borderColor, textColor, gradient, message }) => (
    <div style={{ position: "relative", right: "-5%", width: "95%", height: "50px", backgroundColor: color, borderRadius: "15px 0 0 15px", border: `4px solid ${borderColor}`, display: "flex", textAlign: "center", alignItems: "center", zIndex: 3 }}>
      <div style={{ width: "4px", height: "60%", background: `linear-gradient(${gradient}, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`, marginLeft: "5%", borderRadius: "5px" }}></div>
      <Typography style={{ marginLeft: "4%", textAlign: "left", color: textColor, fontSize: "2vw", fontWeight: 300 }}>
        {message}
      </Typography>
    </div>
  );

  return (
    <div style={{ padding: desktop ? "3% 0 3% 8%" : "10% 0 0 8%" }}>
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

      <div style={{ position: "relative", height: desktop ? "auto" : tablet ? "70vh" : "50vh", marginTop: "3%", overflow: "hidden" }}>
        <div style={{ width: "100%", height: desktop ? "auto" : tablet ? "90%" : "70%", background: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))", borderRadius: "30px 0 0 30px", zIndex: 10 }}>
          <img src={HomePageImg} style={{ borderRadius: "20px 0 0 20px", marginLeft: "auto", height: "65vh", width: "100%", objectFit: "cover", right: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", position: "absolute", width: "100%", bottom: 0, gap: "20%", height: desktop ? "auto" : "40%" }}>
            <InfoCard color="#052533" borderColor="#F0F0F0" textColor="white" gradient="to top" message="We work to inspire people & businesses" />
            <InfoCard color="white" borderColor="#F0F0F0" textColor="#052533" gradient="to bottom" message="And we also take pride in what we do and aim to go beyond" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyConsultants;
