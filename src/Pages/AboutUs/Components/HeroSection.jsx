import React, { useEffect, useState } from "react";
import { Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import HeroImage from "../../../Assets/Images/other/about-us.png";
import languages from "../../../Assets/data/languages.json";

function HeroSection({language}) {
  const theme = useTheme();
  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isTablet = useMediaQuery({ minWidth: 651, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getResponsiveValue = (mobileSize, tabletSize, defaultSize) => {
    if (isMobile) return mobileSize;
    if (isTablet) return tabletSize;
    return defaultSize;
  };

  const [selectedLanguage, setSelectedLanguage] = useState(languages.en);
  const [sectionData, setSectionData] = useState(languages.en.AboutUs.HeroSection);

  useEffect(() => {
    const newLanguage =
      language.language === "EN" ? languages.en : languages.pt;
    setSelectedLanguage(newLanguage);
    setSectionData(newLanguage.AboutUs.HeroSection);
  }, [language]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: getResponsiveValue("80vh", "100vh", "100vh"),
        justifyContent: "center",
        overflowX: "clip",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(12px)",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "relative",
          width: getResponsiveValue("90vw", "90vw", "80vw"),
        }}
      >
        <div
          style={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            borderRadius: "15px",
            position: "absolute",
            top: getResponsiveValue("-1.8rem", "-2rem", "-2rem"),
            left: "-17vw",
            width: "60%",
            height: "2rem",
            padding: "1vw",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 400,
            fontSize: getResponsiveValue("3vw", "2vw", "2vw"),
          }}
        >
          {sectionData.aboutUsTag}
        </div>

        <div
          style={{
            backgroundColor: "white",
            padding: getResponsiveValue("0rem", "0rem", "3.5rem"),
            borderRadius: "0px 30px 0px 30px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: getResponsiveValue("column", "column", "row"),
              justifyContent: getResponsiveValue(
                "center",
                "center",
                "space-between"
              ),
              alignItems: getResponsiveValue(
                "flex-start",
                "flex-start",
                "center"
              ),
              height: getResponsiveValue("auto", "auto", "45vh"),
            }}
          >
            {!isDesktop && (
              <img
                src={HeroImage}
                alt="Hero"
                style={{
                  width: getResponsiveValue("100%", "100%", "53%"),
                  borderRadius: "0px 30px 0px 0px",
                  objectFit: "cover",
                  height: getResponsiveValue("20vh", "30vh", "85%"),
                  zIndex: 1,
                  opacity: 0.75,
                }}
              />
            )}

            <div style={{ padding: "1.5rem 0rem 2.2rem 2rem" }}>
              <Typography
                variant="h4"
                style={{
                  color: theme.palette.secondary.main,
                  fontWeight: 500,
                  fontSize: getResponsiveValue("1.2rem", "1.5rem", "2.2rem"),
                }}
              >
                {sectionData.title}
              </Typography>
              <Typography
                variant="h3"
                style={{
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  fontSize: getResponsiveValue("1.2rem", "1.5rem", "2.2rem"),
                }}
              >
                {sectionData.subtitle}
              </Typography>
              <Typography
                variant="h4"
                style={{
                  color: theme.palette.secondary.main,
                  fontWeight: 300,
                  fontSize: getResponsiveValue("1rem", "1.1rem", "1.6rem"),
                  lineHeight: getResponsiveValue("1.5rem", "2.2rem", "3rem"),
                  marginTop: getResponsiveValue("0.6rem", "0.6rem", "1rem"),
                }}
              >
                {sectionData.description.map((item, index) => (
                  <React.Fragment key={index}>
                    {item} <br />
                  </React.Fragment>
                ))}
              </Typography>
            </div>

            {isDesktop && (
              <img
                src={HeroImage}
                alt="Hero"
                style={{
                  width: getResponsiveValue("40%", "40%", "53%"),
                  borderRadius: "30px",
                  objectFit: "cover",
                  height: "85%",
                  zIndex: 1,
                  opacity: 0.75,
                }}
              />
            )}
          </div>
        </div>

        <div
          style={{
            backgroundColor: theme.palette.secondary.main,
            color: "white",
            borderRadius: "15px",
            position: "absolute",
            bottom: getResponsiveValue("-9.5rem", "-9.5rem", "-5.5rem"),
            left: "13vw",
            width: "80%",
            padding: "1.5rem",
            paddingRight: "20rem",
            textAlign: "justify",
            fontWeight: 300,
            fontSize: getResponsiveValue("0.8rem", "1rem", "1.2rem"),
            display: "flex",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          {sectionData.bottomInfoBox}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
