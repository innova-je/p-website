import React, { useEffect, useState } from "react";

import Mandates from "../../../Assets/data/Mandates.json";
// Import Mandate component
import Mandate from "./Mandate";
import { useMediaQuery } from "react-responsive";
import { Typography, useTheme } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MandatesSection = () => {
  const mandates = Mandates.mandates;
  const [image, setImages] = useState([]);
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  useEffect(() => {
    const importImages = async () => {
      const importedImages = [];
      for (let mandate of mandates) {
        const { default: image } = await import(
          `../../../Assets/Images/Mandates/${mandate.image}`
        );
        importedImages.push(image);
      }
      setImages(importedImages);
    };
    importImages();
  }, [mandates]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 15000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div
      
    >
      <Typography
        variant="h4"
        style={{
          position: "relative",
          textAlign: "center",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          fontWeight: "Bold",
          zIndex: "3",
          mt: "4rem",
        }}
      >
        In-Nova
      </Typography>
      <Typography
        variant="h2"
        style={{
          position: "relative",
          textAlign: "center",
          color: theme.palette.primary.main,
          fontFamily: theme.typography.fontFamily,
          fontWeight: "Bold",
          zIndex: "3",
          fontSize: tablet
            ? "6.5dvw"
            : mobile
            ? "6dvw"
            : smallMobile
            ? "6dvw"
            : "3.2dvw",
        }}
      >
        Throughout the years
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 4,
        }}
      >
        <Slider
          {...settings}
          style={{ width: "100dvw", padding: "0 0 2rem 0", background: "none" }}
        >
          {Mandates.mandates.map((mandate, index) => (
            <div key={index}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Mandate
                  title={mandate.title}
                  year={mandate.year}
                  mainAccomplishments={mandate.mainAccomplishments}
                  image={mandate.image}
                  currentImageIndex={mandate.currentImageIndex}
                  index={index}
                  isDesktop={false}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MandatesSection;
