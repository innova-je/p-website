import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import img1 from "../../../../Assets/Images/other/IW-png.png";
import img2 from "../../../../Assets/Images/other/404.png";
import img3 from "../../../../Assets/Images/other/ThirstPortugal.png";
import img4 from "../../../../Assets/Images/other/GuiaDoCandidato.png";
import img5 from "../../../../Assets/Images/other/joinus-outofoffice.png";

// Import Slick Carousel
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const ImageCycle = () => {
  const images = [
    { id: 1, src: img1, alt: "Image 1" },
    { id: 2, src: img2, alt: "Image 2" },
    { id: 3, src: img3, alt: "Image 3" },
    { id: 4, src: img4, alt: "Image 4" },
    { id: 5, src: img5, alt: "Image 5" },
  ];

  const [currentImages, setCurrentImages] = useState(images);

  const cycleImages = () => {
    const newImages = [
      currentImages[1],
      currentImages[2],
      currentImages[3],
      currentImages[4],
      currentImages[0],
    ];
    setCurrentImages(newImages);
  };

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

  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1081 });

  const ImageBox = styled("div")({
    display: "flex",
    borderRadius: "20px",
    position: "relative",
    overflow: "hidden",
    width: "100%",
    height: isMobile ? "250px" : "400px",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%"
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(85, 159, 162, 0.47)",
    },
  });
  
  const OrangeBox = styled(ImageBox)({
    width: "500px",
    height: "375px",
    margin: "16px",
    borderRadius: "2dvw",
  });
  
  const BlueBox = styled(ImageBox)({
    width: "200px",
    height: "170px",
    margin: "16px",
    borderRadius: "1.5dvw",
  });
  
  const StyledButton = styled(Button)({
    borderRadius: "50%",
    width: "55px",
    height: "55px",
    position: "absolute",
    bottom: "16px",
    right: "16px",
    backgroundColor: "white",
    color: "black",
    minWidth: "40px",
    padding: 0,
    "&:hover": {
      backgroundColor: "white",
    },
  });

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        style={{
          color: theme.palette.secondary.main,
          textAlign: "center",
          marginTop: isMobile ? "8dvw" : "4dvw",
          fontSize: isMobile ? "1.5rem" : "2rem",
          width: isMobile ? "75%" : "auto",
          fontWeight: 600,
        }}
      >
        MOMENTS THAT DEFINE INNOVATION WEEK
      </Typography>
      {!isDesktopOrLaptop && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            gap: "50px",
            height: isMobile ? "350px" : "500px",
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <Slider {...settings} style={{ width: "100%" }}>
            {currentImages.map((image, index) => (
              <ImageBox key={index}>
                <img src={image.src} alt={image.alt} />
              </ImageBox>
            ))}
          </Slider>
        </div>
      )}

      {isDesktopOrLaptop && (
        <div style={{ display: "flex", margin: "2rem 0" }}>
          <OrangeBox>
            <img src={currentImages[0].src} alt={currentImages[0].alt} />
            <StyledButton onClick={cycleImages}>
              <ArrowForwardIosIcon />
            </StyledButton>
          </OrangeBox>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentImages.slice(1, 3).map((image, index) => (
              <BlueBox key={index}>
                <img src={image.src} alt={image.alt} />
              </BlueBox>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {currentImages.slice(3).map((image, index) => (
              <BlueBox key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                />
              </BlueBox>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default ImageCycle;