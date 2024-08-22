import React from "react";
import { useMediaQuery } from "react-responsive";

import HeroSection from "./Components/HeroSection";
import Technologies from "./Components/Technologies";
import HowToApply from "./Components/HowToApply";
import OutOfOfficeSection from "./Components/OutOfOfficeSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import CandidateGuideSection from "./Components/CandidateGuideSection";

const JoinUs = () => {
  const isSmallMobile = useMediaQuery({ maxWidth: 550 });
  const isMobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  const marginTop = isSmallMobile || isMobile || isTablet ? "10%" : "0";

  return (
    <div
      style={{
        background: "#F0F0F0",
        overflow: "hidden",
        position: "relative",
        zIndex: 0,
      }}
    >
      <HeroSection />
      <Technologies />
      <OutOfOfficeSection />
      <TestimonialsSection />
      <section style={{ marginTop }}>
        <HowToApply progress={0} />
      </section>
      <CandidateGuideSection />
    </div>
  );
};

export default JoinUs;
