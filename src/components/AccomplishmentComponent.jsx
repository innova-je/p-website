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
    width: isSelected ? "60vw" : (desktop ? "22dvw" : (tablet ? "27dvw" : "65dvw")),
    height: (desktop ? "30dvw" : (tablet ? "40dvw" : "80dvw")),
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
    position:"relative",
    width: isSelected ? "150vw" : "100%",
    height: isSelected ? "70vh" : "100%",
    zIndex:1,
    overflow:"hidden",
    display: "flex",
    justifyContent: "center",
    marginTop: tablet ? "-20%" : "-16%",
    background: "white"
  }));

  const Circle = styled(Box)(() => ({
    position: "relative",
    top: "-50%",
    left: "60%",
    width: mobile ? "12vw" : (tablet ? "9vw" : "6vw"),
    height: mobile ? "12vw" : (tablet ? "9vw" : "6vw"),
    borderRadius: "100%",
    backgroundColor: "white",
    boxShadow: "5px 5px 40px #00000040",
    display: isSelected ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  const NewsText = styled(Box)(() => ({
    overflow:"hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "80%",
    height: "100%"
  }));

  const newsImageStyle = {
    width: "100%", 
    height: "60%",
    transform: isSelected ? "scale(1)" : "scale(2)", 
    position: "relative",
    top: isSelected ? "0%" : "15%",
    overflow: "hidden", 
    objectFit: "cover", 
    zIndex: 2,
    transition: "filter 0.3s ease-in-out",
    '&:hover': {
      filter: 'grayscale(0%)', 
    },
  };

  const newsTextStyle = {
    fontSize: (mobile ? "4vw" : (tablet ? "2.1vw" : "1.8vw")),
    fontWeight: mobile || tablet ? "500" : "400",
    textAlign: "justify",
    textJustify: "center",
    marginTop: "2%",
    lineHeight: "120%"
  };

  const dateStyle = {
    fontSize: (mobile ? "3vw" : (tablet ? "1.8vw" : "1rem")),
    fontWeight: "700",
    textAlign: "right",
    textJustify: "center",
  };

  return (
    <Box>
        {!isSelected && (
        <AccomplishmentBox onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div style={{display: "flex"}}>
            <img src={image} style={newsImageStyle} />
          </div>

          <div style={{height: "60%", marginTop: "-10%", zIndex: 10}}>
            <div style={{background: "white", width: "150%", height: "40%", marginLeft: "-20%", rotate: "-10deg", zIndex: -1, display: "flex", alignItems: "center"}}>
            <Circle>
              <img src={randomLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
            </Circle>
            
          </div>        
          
          <TextBox>
          <NewsText>
              <div style={{ height: "65%"}}>
                <Typography style={newsTextStyle}>{description}</Typography>
              </div>              
              <div style={{ position: "relative"}}>
                <Typography style={dateStyle}>{date}</Typography>
              </div>              
            </NewsText>
          </TextBox>
          </div>

          
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
          <AccomplishmentBox isSelected={isSelected}>
          <img src={image} style={newsImageStyle} />
          <Circle>
            <img src={randomLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
          </Circle>
          <TextBox>
            <NewsText>
              <div>
                <Typography style={newsTextStyle}>{description}</Typography>
              </div>              
              <div>
                <Typography style={dateStyle}>{date}</Typography>
              </div>              
            </NewsText>
          </TextBox>
          </AccomplishmentBox>
        </Box>
      )}
    </Box>        
  )
}

export default Accomplishments