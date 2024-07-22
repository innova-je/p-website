import React from "react";
import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

import TechnologyConsultants from "./Home/Components/TechnologyConsultants";
import StatsSection from "./Home/Components/StatsSection";
import OurServices from "../components/OurServices";
import AccomplishmentSlider from "../components/AccomplishmentSlider";
import ClientsCarousel from "../components/ClientsCarousel";
import OurPartners from "../components/OurPartners";
import VideoSection from "./Home/Components/VideoSection";

const Home = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <Box sx={{ backgroundColor: "#F0F0F0", overflow: "hidden" }}>
      <VideoSection />
      <TechnologyConsultants />
      <StatsSection />

      <div
        style={{
          background: "linear-gradient(to bottom, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0))",
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
