import React, { useState } from 'react';
import { Typography, Link } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import {Email, LinkedIn } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive';

const AdvisorComponent = ({ name, description, image }) => {

  const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    width: '18vw',
    height: '22vw',
    overflow: 'visible',
    borderRadius: "8%",
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
    left: 0
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: isHovered ? '40%' : '30%',
    backgroundColor: 'white',
    padding: '5px',
    margin: 'auto',
    borderRadius: desktop ? 15 : 10,
    overflow: 'hidden',
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: 'height 0.3s ease-in-out',    
    boxShadow: "5px 5px 5px 5px #06253321"
  };

  const iconsContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 10,
    display: "flex",
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.6s ease-in-out',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    zIndex: 3,
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '1.4vw',
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    zIndex: "100",
    position: "absolute",
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'translateY(-30%)' : 'translateY(0)',
  };
  

  const descriptionStyle = {
    fontSize: '0.9vw',
    color: "#062533",
    fontFamily: theme.typography.fontFamily,
    width: "80%",
    position: "absolute",
    marginTop: "10%",
    wordWrap: "break-word",
    overflowWrap: 'break-word',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
  };


  return (
    <ThemeProvider theme={theme}>
      <div
        style={containerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={iconsContainerStyle}>
          <Email sx={{color:theme.palette.primary.main}}></Email>
          <Link>{/*TODO: adicionar os links do linkedin */}
            <LinkedIn sx={{color:'white', height: "5vh", width: "auto"}}></LinkedIn>
          </Link>          
        </div>
        <div style={imageContainerStyle}>
          <img src={image} alt="imagem de perfil" style={imageStyle} />
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
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AdvisorComponent;
