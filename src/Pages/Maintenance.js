import { Box, ImageListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import logoImage from '../images/logos/logos-03.png';
import noiseImage from '../images/other/Noise.png';

const Maintenance = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#052533",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundImage: `url(${noiseImage})`
      }}
    >
    <div>
    <div style={{
        position: "absolute",
        top: "0px",
        left: "117px",
        rotate: "60deg",
        width: "606px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "absolute",
        top: "315px",
        left: "540px",
        rotate: "60deg",
        width: "121px",
        height: "121px",
        backgroundColor: "#732043",
        borderRadius: "0 100% 100% 0",
        opacity: "50%"
      }}></div>
    </div>
      
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
        fontSize: "60px", 
        fontFamily: 'Exo 2', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }}>
        Oops! This website is currently under construction!
    </Typography>

<Box
    sx={{
      position: "absolute",
      bottom: "129px",
      right: "100px",
      width: "auto",
      display: "flex",
      flexDirection: "row",
      gap: "20px",
      alignItems: "center"
    }}
  >
  <InstagramIcon
    sx={{
      color: "white",
      width: "43px",
      height: "43px",
    }}
  />
  <Typography
    color="white"
    sx={{
      height: "43px",
      color: 'white',
      fontSize: "24px",
      fontFamily: 'Exo 2',
      fontWeight: '400',
      wordWrap: 'break-word',
      display: 'flex',
      alignItems: 'center'
    }}
  >
    @in.nova.pt
  </Typography>
</Box>

<Box sx={{
  position: "absolute",
  bottom: "68px",
  right: "100px",
  width: "auto",
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  alignItems: "center"
}}>
  <EmailIcon sx={{
    color: "white",
    width: "43px",
    height: "43px"
  }}/>
  <Typography color="white" sx={{
        height: "43px",  
        color: 'white',
        fontSize: "24px",
        fontFamily: 'Exo 2',
        fontWeight: '400',
        wordWrap: 'break-word',
        alignItems: 'center'
    }}>
        @geral.innova.pt
    </Typography>
</Box>  


    </Box>
  );
};

export default Maintenance;
