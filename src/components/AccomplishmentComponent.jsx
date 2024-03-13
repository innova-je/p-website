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
    width: isSelected ? "60vw" : (desktop ? "25dvw" : (tablet ? "40dvw" : "55dvw")),
    height: (desktop ? "30dvw" : (tablet ? "50dvw" : "70dvw")),
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
    height: isSelected ? "70vh" : (mobile ? "50vh" : (tablet ? "30vh" : "60vh")),
    zIndex:"9",
    overflow:"hidden",
    display: "flex",
    justifyContent: "center"
  }));

  const Circle = styled(Box)(() => ({
    position: "relative",
    left: "60%",
    width: mobile ? "10vw" : (tablet ? "8vw" : "6vw"),
    width: mobile ? "10vw" : (tablet ? "8vw" : "6vw"),
    borderRadius: "100%",
    backgroundColor: "white",
    boxShadow: "5px 5px 40px #00000040",
    zIndex: "999",
    display: isSelected ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  const NewsText = styled(Box)(() => ({
    position:"absolute",
    bottom: "5%",
    zIndex:"2",
    overflow:"hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "80%",
    height: "75%",
    background: "red"
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
    fontSize: (mobile ? "3.4vw" : (tablet ? "2.2vw" : "1.2vw")),
    fontWeight: mobile || tablet ? "500" : "400",
    textAlign: "justify",
    textJustify: "center",
    marginTop: mobile ? "10%" : (tablet ? "15%" : "10%"),
    lineHeight: "100%"
  };

  const dateStyle = {
    fontSize: (mobile ? "2.5vw" : (tablet ? "1.8vw" : "1rem")),
    fontWeight: "600",
    textAlign: "right",
    textJustify: "center",
    marginTop: mobile ? "5%" : "3%"
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
          <div style={{display: "flex"}}>
            <img src={image} style={newsImageStyle} />
          </div>

          <div style={{background: "white", width: "150%", marginLeft: "-20%", rotate: "-10deg", height: "20%", zIndex: 100, display: "flex", alignItems: "center"}}>
            <Circle>
              <img src={randomLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
            </Circle>
          </div>        
          
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