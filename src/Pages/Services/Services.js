import React from "react";

import Industries from "./Components/Industries";
import HeroSection from "./Components/HeroSection";
import SegmentedButton from "./Components/SegmentedButtonSection";
import PortfolioSection from "./Components/PortfolioSection";

const Services = () => {
  return (
    <main
      style={{
        overflow: "hidden",
        background: "#F0F0F0",
      }}
    >
      <HeroSection />
      <SegmentedButton />
      <Industries />
      <PortfolioSection />
    </main>
  );
};

export default Services;
