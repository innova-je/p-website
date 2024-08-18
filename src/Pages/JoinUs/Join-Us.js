import React from "react";
import { useMediaQuery } from "react-responsive";

import HeroSection from "./Components/HeroSection";
import Technologies from "./Components/Technologies";
import HowToApply from "./Components/HowToApply";
import OutOfOfficeSection from "./Components/OutOfOfficeSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import CandidateGuideSection from "./Components/CandidateGuideSection";

const JoinUs = () => {
  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          zIndex: "0",
          background: "#F0F0F0",
          overflow: "hidden",
        }}
      >
        <HeroSection />

        <Technologies />

        <OutOfOfficeSection />

        <TestimonialsSection />

        <div
          style={{
            marginTop: smallMobile || mobile || tablet ? "10%" : 0,
          }}
        >
          {/* progress * 6.5 */}
          <HowToApply progress={0} />
        </div>

        <CandidateGuideSection />
      </div>
  );
};

export default JoinUs;