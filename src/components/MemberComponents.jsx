import React from 'react'
import {Typography } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';


const CustomComponent = ({ title, name, image }) => {
    const theme = useTheme();
  
    const containerStyle = {
      backgroundColor: 'white',
      position: 'relative',
      width: '250px',
      height: '100%',
      overflow: 'visible',
      borderRadius: 15,
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
    };
  
    const overlayStyle = {
        position: 'absolute',
        bottom: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: 'auto', 
        backgroundColor: "#C7B7BE",
        padding: "5px",
        margin: "auto", 
        borderRadius: 15,
        overflow: 'hidden',
        zIndex: 2,
      };
      
  
    return (
      <ThemeProvider theme={theme}>
        <div style={containerStyle}>
          <div style={imageContainerStyle}>
            <img src={image} alt="Custom Image" style={imageStyle} />
          </div>
          <div style={overlayStyle}>
            <Typography variant="body2" align="center" noWrap sx={{fontWeight: 'bold', fontSize:"13px"}}>
              {title}
            </Typography>
            <Typography variant="body2" align="center" noWrap sx={{
                                fontWeight: 'bold', fontSize:"13px",
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                            }} >
              {name}
            </Typography>
          </div>
        </div>
      </ThemeProvider>
    );
  };

export default CustomComponent