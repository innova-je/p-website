import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import logoImage from '../public/images/logos/logos-03.png';
import noiseImage from '../public/images/logos/other/Noise.png';

const Maintenance = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        backgroundColor: "#052533",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundImage: `url(${noiseImage})`,  // Set the background image
      }}
    >
        <ImageListItem sx={{
            width: "89px",
            position: "absolute",
            top: "44px",
            right: "77px"
        }}>
            <img src={logoImage} alt="Logo"/>
        </ImageListItem>

    <Typography variant='h3' color="white" sx={{
        width: '642px',
        height: "216px",
         textAlign: 'right', 
         margin: "195px 77px",
         color: '#D2D2D2', 
         fontSize: 60, 
         fontFamily: 'Exo 2', 
         fontWeight: '600', 
         wordWrap: 'break-word'
    }}>
        Oops! This website is currently under construction!
    </Typography>

        

      
    </Box>
  );
};

export default Maintenance;
