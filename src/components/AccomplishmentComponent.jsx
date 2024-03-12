import { styled, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import randomLogo from '../images/OurLogos/logos-03.png'
import { useMediaQuery } from 'react-responsive';

const Accomplishments = ({ image, description, date }) => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const AccomplishmentBox = styled(Box)(({ isSelected }) => ({
    display: "flex",
    flexDirection: isSelected ? "row" : "column",
    width: isSelected ? "60vw" : (desktop ? "25dvw" : (tablet ? "30dvw" : "60dvw")),
    height: (desktop ? "30dvw" : (tablet ? "40dvw" : "70dvw")),
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "10px 10px 40px #73204340",
    transition: "width 0.3s ease-in-out, transform 0.3s linear",
    cursor: isSelected ? "auto" : "pointer",
    '&:hover': {
      transform: 'scale(1.03)', 
      transition: "width 0.3s ease-in-out, transform 0.3s linear",
    },
  }));


  const TextBox = styled(Box)(() => ({
    backgroundColor: "white",
    position:"relative",
    width: isSelected ? "150vw" : "100%",
    height: isSelected ? "70vh" : "60vh",
    zIndex:"9",
    overflow:"hidden",
    display: "flex",
    justifyContent: "center",
    clipPath: isSelected ? "" : "polygon(0 18%, 100% 0%, 100% 100%, 0% 100%)",
  }));

  const Circle = styled(Box)(() => ({
    position: "relative",
    top: "10%",
    left: "70%",
    width: "6vw",
    height: "6vw",
    borderRadius: "100%",
    backgroundColor: "white",
    boxShadow: "5px 5px 40px #00000040",
    zIndex: "999",
    display: isSelected ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  const NewsText = styled(Box)(() => ({
    position:"relative",
    zIndex:"2",
    overflow:"hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%"
  }));

  const newsImageStyle = {
    width: "100%", 
    transform: isSelected ? "scale(1)" : "scale(2)", 
    position: "relative",
    top: isSelected ? "0%" : "15%",
    overflow: "hidden", 
    objectFit: "cover", 
    transition: "filter 0.3s ease-in-out",
    '&:hover': {
      filter: 'grayscale(0%)', 
    },
  };

  const newsTextStyle = {
    fontSize: "1.2vw",
    fontWeight: "400",
    textAlign: "justify",
    textJustify: "center",
    marginTop: "10%"
  };

  const dateStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    textAlign: "justify",
    textJustify: "center",
    marginTop: "3%"
  };

  const handleBoxClick = () => {
    setIsSelected(!isSelected);
    setIsHovered(!isHovered)
  };

  console.log(isSelected)

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsSelected(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); 


  return (
    <Box onClick={handleBoxClick}>
        {!isSelected && (
        <AccomplishmentBox onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={handleBoxClick}>
          <img src={image} style={newsImageStyle} />
          <Circle>
            <img src={randomLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
          </Circle>
          <TextBox>
            <NewsText>
              <Typography style={newsTextStyle}>{description}</Typography>
              <Typography style={dateStyle}>{date}</Typography>
            </NewsText>
          </TextBox>
        </AccomplishmentBox>
      )}

      {isSelected && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            backdropFilter: "blur(5px)",
          }}
        >
          <AccomplishmentBox isSelected={isSelected} onClick={handleBoxClick}>
          <img src={image} style={newsImageStyle} />
          <Circle>
            <img src={randomLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
          </Circle>
          <TextBox>
            <NewsText>
              <Typography style={newsTextStyle}>{description}</Typography>
              <Typography style={dateStyle}>{date}</Typography>
            </NewsText>
          </TextBox>
          </AccomplishmentBox>
        </Box>
      )}
    </Box>        
  )
}

export default Accomplishments