import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useMediaQuery } from "react-responsive";
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

import img1 from "../../../../Assets/Images/other/IW-png.png";
import img2 from "../../../../Assets/Images/other/404.png";
import img3 from "../../../../Assets/Images/other/ThirstPortugal.png";
import img4 from "../../../../Assets/Images/other/GuiaDoCandidato.png";
import img5 from "../../../../Assets/Images/other/joinus-outofoffice.png";

// Import Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import Slider from "react-slick";

const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
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

const ImageCycle = () => {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 767 });
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
    arrows: false,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />;
    },
  };

  const theme = useTheme();

  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
    <Typography variant="h4" sx={{ color: theme.palette.secondary.main, textAlign: "center", marginTop: "6dvw" }}>MOMENTS THAT DEFINE INNOVATION WEEK</Typography>
      {!isDesktopOrLaptop && (
        <Box
          display="flex"
          alignItems="center"
          marginTop="2rem"
          marginBottom="2rem"
          width="80%"
        >
          <Slider {...settings} style={{ width: "100%", background: "none" }}>
            {currentImages.map((image, index) => (
              <ImageBox key={index}>
                <img src={image.src} alt={image.alt} />
              </ImageBox>
            ))}
          </Slider>
        </Box>
      )}

      {isDesktopOrLaptop && (
        <Box display="flex" marginTop="2rem" marginBottom="2rem">
          <OrangeBox>
            <img src={currentImages[0].src} alt={currentImages[0].alt} />
            <StyledButton onClick={cycleImages}>
              <ArrowForwardIosIcon />
            </StyledButton>
          </OrangeBox>
          <Box display="flex" flexDirection="column">
            {currentImages.slice(1, 3).map((image, index) => (
              <BlueBox key={index}>
                <img src={image.src} alt={image.alt} />
              </BlueBox>
            ))}
          </Box>
          <Box display="flex" flexDirection="column">
            {currentImages.slice(3).map((image, index) => (
              <BlueBox key={index}>
                <img src={image.src} alt={image.alt} />
              </BlueBox>
            ))}
          </Box>
        </Box>
      )}
    </main>
  );
};

export default ImageCycle;
