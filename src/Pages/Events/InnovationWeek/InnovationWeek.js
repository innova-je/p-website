import React from "react";
import IW_Images from "./Components/IW_Images";
import Speakers from "./Components/Speakers";
import HeroSection from "./Components/HeroSection";
import EventDescription from "./Components/EventDescription";
import CompaniesAndPartners from "./Components/CompaniesAndPartners";

const InnovationWeek = () => {
  return (
    <main>
      <HeroSection />

      <EventDescription />

      <Speakers />

      <IW_Images />

      <CompaniesAndPartners />
    </main>
  );
};

export default InnovationWeek;
