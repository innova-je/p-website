import React from "react";
import MandatesSection from "./Components/MandatesSection";
import HeroSection from "./Components/HeroSection";
import ValuesSection from "./Components/ValuesSection";
import JESection from "./Components/JESection";

const AboutUs = () => {
  return (
    <>
      <HeroSection />

      <div
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(115,32,67,1), rgba(115,32,67,0))",
        }}
      >
        <ValuesSection />
        <MandatesSection />
      </div>

      <JESection />
    </>
  );
};

export default AboutUs;
