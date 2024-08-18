import React from "react";

import TechnologyConsultants from "./Components/TechnologyConsultants";
import StatsSection from "./Components/StatsSection";
import OurServices from "./Components/OurServices";
import AccomplishmentSlider from "./Components/AccomplishmentSlider";
import ClientsCarousel from "./Components/ClientsCarousel";
import OurPartners from "./Components/OurPartners";
import VideoSection from "./Components/VideoSection";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#F0F0F0",
        overflow: "hidden",
      }}
    >
      <VideoSection />
      <TechnologyConsultants />
      <StatsSection />

      <div
        style={{
          background:
            "linear-gradient(to bottom, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0))",
          marginTop: "5%",
        }}
      >
        <OurServices />
        <div style={{ marginTop: "12%" }}>
          <AccomplishmentSlider />
        </div>
      </div>

      <ClientsCarousel />
      <OurPartners />
    </div>
  );
};

export default Home;
