import React from "react";
import MandatesSection from "./Components/MandatesSection";
import HeroSection from "./Components/HeroSection";
import ValuesSection from "./Components/ValuesSection";
import JESection from "./Components/JESection";
import { useLanguage } from "../../LanguageContext";

const AboutUs = () => {
  const language  = useLanguage();

  return (
    <main>
      <HeroSection language={language}/>

      <section
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(115,32,67,1), rgba(115,32,67,0))",
          
        }}
      >
        <ValuesSection language={language}/>
        
        <MandatesSection language={language}/>
        
      </section>

      <JESection language={language}/>
    </main>
  );
};

export default AboutUs;
