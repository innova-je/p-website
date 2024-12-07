import React from "react";
import TechnologyConsultants from "./Components/TechnologyConsultants";
import StatsSection from "./Components/StatsSection";
import OurServices from "./Components/OurServices";
import AccomplishmentSlider from "./Components/AccomplishmentSlider";
import ClientsCarousel from "./Components/ClientsCarousel";
import OurPartners from "./Components/OurPartners";
import VideoSection from "./Components/VideoSection";
import { useLanguage } from "../../LanguageContext";

const Home = () => {
  const language  = useLanguage();

  return (
    <main
      style={{
        backgroundColor: "#F0F0F0",
        overflow: "hidden",
      }}
    >
      <VideoSection language={language} />
      <TechnologyConsultants language={language} />
      <StatsSection language={language} />
      <section
        style={{
          background:
            "linear-gradient(to bottom, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0))",
          marginTop: "5%",
        }}
      >
        <OurServices language={language} />
        <AccomplishmentSlider language={language} />
      </section>
      <ClientsCarousel language={language} />
      <OurPartners language={language} />
    </main>
  );
};

export default Home;
