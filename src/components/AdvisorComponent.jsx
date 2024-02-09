import React, { useState } from 'react';
import { Typography, IconButton } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import {Email, LinkedIn } from '@mui/icons-material';


const CustomComponent = ({ name, description, image }) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    backgroundColor: theme.palette.primary.main,
    position: 'relative',
    width: '20vw',
    height: '55vh',
    overflow: 'visible',
    borderRadius: 15,
    marginBottom: 35,
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
    filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
    transition: 'filter 0.4s ease-in-out',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: isHovered ? '40%' : '30%',  // Conditionally set the height based on hover state
    backgroundColor: 'white',
    padding: '5px',
    margin: 'auto',
    borderRadius: 15,
    overflow: 'hidden',
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: 'height 0.3s ease-in-out',
  };

  const iconsContainerStyle = {
    position: 'absolute',
    top: 0,
    right: 10,
    display: "flex",
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.4s ease-in-out',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px',
    zIndex: 3,
  };

  const nameStyle = {
    fontWeight: 'bold',
    fontSize: '1.4rem',
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
    fontSize: '1.1rem',
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
          <LinkedIn sx={{color:'#0077B5'}}></LinkedIn>
        </div>
        <div style={imageContainerStyle}>
          <img src={image} alt="imagem de perfil" style={imageStyle} />
        </div>
        <div style={overlayStyle}>
          <Typography
            variant="body2"
            align="center"
            noWrap
            style={nameStyle}
          >
            {name}
          </Typography>
          <Typography
            variant="body2"
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

export default CustomComponent;
