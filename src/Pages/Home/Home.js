import React from "react";
import TechnologyConsultants from "./Components/TechnologyConsultants";
import StatsSection from "./Components/StatsSection";
import OurServices from "./Components/OurServices";
import AccomplishmentSlider from "./Components/AccomplishmentSlider";
import ClientsCarousel from "./Components/ClientsCarousel";
import OurPartners from "./Components/OurPartners";
import VideoSection from "./Components/VideoSection";
import { useLanguage } from "../../LanguageContext";
import HeroSectionV2 from "./Components/HeroSectionV2";
import logo from "../../Assets/Images/OurLogos/logos-10.png";

const Home = () => {
  const language = useLanguage();

  return (
    <main
      style={{
        backgroundColor: "#F0F0F0",
        overflow: "hidden",
      }}
    >
      {/* <VideoSection language={language} /> */}

      <div style={{ position: "relative" }}>
        <HeroSectionV2 />
        <div style={{ position: "relative", zIndex: 3 }}> 
          <TechnologyConsultants language={language} />
        </div>

        <div
          style={{
            position: "absolute",
            right: "4rem",
            top: "-6%",
            width: "800px",
            zIndex: 2
          }}
        >
          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            style={{
              width: "150%",
              height: "100%",
              objectFit: "contain",
              opacity: 0.25,
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
            }}
          />
        </div>

        <div
          style={{
            background:
              "radial-gradient(20% 20% at 0% 0%, #300418 0%, #732043 100%)",
            filter: "blur(250px)",
            position: "absolute",
            right: "-15rem",
            top: "5%",
            zIndex: 1,
            height: "800px",
            width: "800px",
            transform: "rotate(-9.022deg)",
            borderRadius: "400px",
          }}
        />
      </div>

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
