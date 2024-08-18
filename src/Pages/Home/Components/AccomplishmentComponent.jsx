import { styled, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const Accomplishments = ({ image, logo, description, date, link, scale }) => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const [dynamicImage, setDynamicImage] = useState(null);
  const [dynamicLogo, setDynamicLogo] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: dynamicImage } = await import(`../../../Assets/Images/HomePageImages/${image}`);
        setDynamicImage(dynamicImage);
        
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image]);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: dynamicLogo } = await import(`../../../Assets/Images/HomePageImages/${logo}`);
        setDynamicLogo(dynamicLogo);
        
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image]);


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
      transform: desktop ? 'scale(1.05)' : "none", 
      transition: "width 0.3s ease-in-out, transform 0.3s linear",
    },
  }));


  const TextBox = styled(Box)(() => ({
    position:"relative",
    width: isSelected ? "150vw" : "100%",
    height: isSelected ? "70vh" : "100%",
    zIndex:10,
    overflow:"hidden",
    display: "flex",
    justifyContent: "center",
    background: "white",
    marginTop: "-15%"
  }));

  const Circle = styled(Box)(() => ({
    position: "relative",
    rotate: "7deg",
    top: "-50%",
    left: "60%",
    overflow: "hidden",
    width: mobile ? "12vw" : (tablet ? "9vw" : "6vw"),
    height: mobile ? "12vw" : (tablet ? "9vw" : "6vw"),
    borderRadius: "100%",
    backgroundColor: "#f7f7f7",
    //boxShadow: "5px 5px 40px #00000040",
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
    overflow: "hidden", 
    objectFit: "cover", 
    transition: "filter 0.3s ease-in-out",
    transform: "scale(1.2)"//criar scale no json e neviar para o component
  };

  const newsTextStyle = {
    fontSize: (mobile ? "3.5vw" : (tablet ? "1.5vw" : "1.2vw")),
    fontWeight: mobile || tablet ? "500" : "400",
    textAlign: "justify",
    textJustify: "center",
    color: "#052533",
    marginTop: "0%",
    lineHeight: desktop ? "100%" : (tablet ? "100%" : "100%"),
    textOverflow: "ellipsis"
  };

  const dateStyle = {
    fontSize: (mobile ? "3vw" : (tablet ? "1.8vw" : "0.9vw")),
    fontWeight: "700",
    textAlign: "right",
    textJustify: "center",
  };

  return (
    <Box>
      <a href={link} style={{textDecoration: "none", color: "#052533"}}>
        {!isSelected && (
        <AccomplishmentBox >
          <div style={{display: "flex", width: "100%", height: "50%"}}>
            <img src={dynamicImage} style={newsImageStyle} />
          </div>

          <div style={{height: "50%", zIndex: 10, display: "flex", flexDirection: "column", gap: "-10%"}}>
            <div style={{background: "white", width: "150%", height: "50%", marginLeft: "-20%", rotate: "-7deg", zIndex: -1, display: "flex", alignItems: "center"}}>
              <Circle>
                <img src={dynamicLogo} style={{ width: "100%", transform: `scale(${scale})`, overflow: "hidden", objectFit: "cover", display: "flex", alignItems:"center", justifyContent: "center" }} />
              </Circle>            
            </div>        
          
          <TextBox>
          <NewsText>
              <div style={{ height: "100%"}}>
                <Typography style={newsTextStyle}>{description}</Typography>
              </div>
              {/**
               * 
               * <div style={{ position: "absolute", bottom: 2}}>
                <Typography style={dateStyle}>{date}</Typography>
              </div>    
               */}            
                        
            </NewsText>
          </TextBox>
          </div>

          
        </AccomplishmentBox>
      )}
      </a>
        

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
            <img src={dynamicLogo} style={{ width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover" }} />
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