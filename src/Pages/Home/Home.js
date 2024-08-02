import React from "react";
import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import TechnologyConsultants from "./Components/TechnologyConsultants";
import StatsSection from "./Components/StatsSection";
import OurServices from "./Components/OurServices";
import AccomplishmentSlider from "./Components/AccomplishmentSlider";
import ClientsCarousel from "./Components/ClientsCarousel";
import OurPartners from "./Components/OurPartners";
import VideoSection from "./Components/VideoSection";

const Home = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });

  return (
    <Box
      sx={{
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
          marginTop: mobile ? "3%" : "5%",
        }}
      >
        <OurServices />
        <div style={{ marginTop: mobile ? "12%" : "15%" }}>
          <AccomplishmentSlider />
        </div>
      </div>

      <ClientsCarousel />
      <OurPartners />
    </Box>
  );
};

export default Home;
