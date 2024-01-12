import { Box, ImageListItem, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import logoImage from '../images/logos/logos-03.png';
import noiseImage from '../images/other/Noise.png';
import element1Image from '../images/other/_DSC2852.jpeg';

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
        backgroundImage: `url(${noiseImage})`,
        overflow: "hidden"
      }}
    >

    {/*Elementos de cima, da esquerda para a direita */}

    <div style={{
        position: "fixed",
        top: "0px",
        left: "-650px"
    }}>
    <div style={{
        rotate: "60deg",
        width: "1206px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "fixed",
        top: "575px",
        left: "225px",
        rotate: "60deg",
        width: "121px",
        height: "121px",
        backgroundColor: "#732043",
        borderRadius: "0 100% 100% 0",
        opacity: "50%"
      }}></div>
    </div>

    <div style={{
        position: "fixed",
        top: "100px",
        left: "-90px"
    }}>
    <div style={{
        position: "fixed",
        rotate: "60deg",
        width: "906px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "fixed",
        top: "545px",
        left: "560px",
        rotate: "60deg",
        width: "121px",
        height: "121px",
        backgroundColor: "#732043",
        borderRadius: "0 100% 100% 0",
        opacity: "50%"
      }}></div>
    </div>


{/*Elementos de baixo, da esquerda para a direita */}
    
    <div style={{
        position: "fixed",
        bottom: "-100px",
        left: "825px",
        rotate: "180deg",
        backgroundImage: `url(${element1Image})`
    }}>
    <div style={{
        position: "fixed",
        rotate: "60deg",
        width: "606px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "fixed",
        top: "315px",
        left: "424px",
        rotate: "60deg",
        width: "121px",
        height: "121px",
        backgroundColor: "#732043",
        borderRadius: "0 100% 100% 0",
        opacity: "50%"
      }}></div>
    </div>

    <div style={{
        position: "fixed",
        bottom: "-250px",
        left: "550px",
        rotate: "180deg"
    }}>
    <div style={{
        position: "fixed",
        rotate: "60deg",
        width: "606px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "fixed",
        top: "315px",
        left: "424px",
        rotate: "60deg",
        width: "121px",
        height: "121px",
        backgroundColor: "#732043",
        borderRadius: "0 100% 100% 0",
        opacity: "50%"
      }}></div>
    </div>

    <div style={{
        position: "fixed",
        bottom: "50px",
        left: "1090px",
        rotate: "180deg"
    }}>
    <div style={{
        position: "fixed",
        rotate: "60deg",
        width: "606px",
        height: "121px",
        backgroundColor: "#732043",
        opacity: "50%",
      }}></div>

      <div style={{
        position: "fixed",
        top: "315px",
        left: "424px",
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
        geral@innova.pt
    </Typography>
</Box>  


    </Box>
  );
};

export default Maintenance;
