import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';

const CustomComponent = ({ name, description, testimony, image }) => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const [dynamicImage, setDynamicImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: dynamicImage } = await import(`../../../../images/MemberImages/${image}`);
        setDynamicImage(dynamicImage);
      } catch (error) {
        console.error('Error loading image:', error);
      }
    };

    loadImage();
  }, [image]);

  const containerStyle = {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    width: (desktop ? "18vw" : (tablet ? "25vw" : "40vw")),
    height: (desktop ? "22vw" : (tablet ? "32vw" : "50vw")),
    overflow: 'visible',
    borderRadius: "5%",
    marginBottom: 35,
    zIndex: "2"
  };

  const imageContainerStyle = {
    width: '100%',
    paddingBottom: '100%',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: isHovered ? 0 : 1,
    transition: 'opacity 0.4s ease-in-out',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: isHovered ? '90%' : '50%',
    backgroundColor: 'white',
    padding: '5px',
    margin: 'auto',
    borderRadius: desktop ? 15 : 8,
    overflow: 'hidden',
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: 'height 0.3s ease-in-out',    
    boxShadow: "5px 5px 5px 5px #06253321"
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: (desktop ? "1.4vw" : (tablet ? "1.8vw" : "3vw")),
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: "100",
    position: "absolute",
    top: "-30%",
    opacity: isHovered ? 0 : 1,
    transition: 'opacity 0.3s ease-in-out',
  };

  const otherNameStyle = {
    fontWeight: 'bold',
    fontSize: (desktop ? "1.4vw" : (tablet ? "1.8vw" : "3vw")),
    color: "white",
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: "100",
    position: "absolute",
    top: desktop ? "-36%" : (tablet ? "-36%" : "-30%"),
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };
  

  const descriptionStyle = {
    fontSize: (desktop ? "1.2vw" : (tablet ? "1.7vw" : "2.5vw")),
    color: "#062533",
    fontFamily: theme.typography.fontFamily,
    width: "80%",
    position: "absolute",
    bottom: "0",
    height: isHovered ? '90%' : '65%',
    opacity: isHovered ? 0 : 1,
    transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out', 
    wordWrap: "break-word",
    overflowWrap: 'break-word',
  };

  const testimonyStyle = {
    fontSize: (desktop ? "1vw" : (tablet ? "1.5vw" : "2.6vw")),
    color: "#062533",
    fontFamily: theme.typography.fontFamily,
    width: "80%",
    position: "absolute",
    bottom: "0",
    height: isHovered ? '95%' : '65%',
    opacity: isHovered ? 1 : 0,    
    transition: 'height 0.3s ease-in-out, opacity 0.3s ease-in-out',
    textJustify: "auto",
    textAlign: "justify",
    lineHeight: "130%"
  };

  const handleClick = () => {
    if (mobile || tablet) {
      setIsHovered(!isHovered);
    }
  };  

  return (
    <ThemeProvider theme={theme}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        
        <div style={imageContainerStyle}>
          <img src={dynamicImage} alt="imagem de perfil" style={imageStyle} />
          <Typography
            align="center"
            noWrap
            style={otherNameStyle}
          >
            {name}
          </Typography>
        </div>
        <div style={overlayStyle}>
          <Typography
            align="center"
            noWrap
            style={nameStyle}
          >
            {name}
          </Typography>
          <Typography
            align="center"
            style={descriptionStyle}
          >
            {description}
          </Typography>

          <Typography
            align="center"
            style={testimonyStyle}
          >
            {testimony}
          </Typography>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CustomComponent;
