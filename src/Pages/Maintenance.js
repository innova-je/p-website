import { Box, ImageListItem, Typography, styled } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import Logo from '../images/logos/logos-03.png';

import noiseImage from '../images/other/Noise.png';
import top1Image from '../images/other/In.Nova_III JE Portugal-224.jpg';
import top2Image from '../images/other/top2.jpg';
import bottom1Image from '../images/other/bottom1.jpg';
import bottom2Image from '../images/other/bottom2.jpg';
import bottom3Image from '../images/other/bottom3.jpg';


const Maintenance = () => {
  return (
      <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#052533",
        display: {
          lg: "flex"
        },
        alignItems: "center",
        justifyContent: {
          xs: "center",
          sm: "center",
          lg: "flex-end"
        },
        backgroundImage: `url(${noiseImage})`,
        overflow:"hidden"
      }}
    >


<Box sx={{
  position: "absolute",
  left: "0px",
  height: "100vh",
  overflow: "hidden",
  display:{
    xs: "none",
    lg: "block"
  }
}}>
 {/*Elementos de cima, da esquerda para a direita */}

 <div style={{
  width: "auto",
  position: "relative",
  top: "53%",
  left: "-39%",
  transform: "rotate(60deg)"
}}>
  <div style={{
    width: "70%",
    height: "8vw",
    backgroundColor: "#732043",
    flexShrink: "0",    
    borderRadius: "0 10vw 10vw 0",
    position: "relative",
    overflow: "hidden"
  }}>
    <div style={{
      backgroundColor: "#732043",
      opacity: "0.85",
    }}>
      <img src={top1Image} style={{
        opacity: "0.7",  
        width: "100%",
        height: "auto",
        borderRadius: "0 10vw 10vw 0",
        objectFit: "cover",
        transform: "rotate(-60deg) translateY(10%) translateX(45%) scale(1.65)",
      }} />
    </div>
  </div>
</div>

<div style={{
    position: "relative",
    top: "8%",
    left: "-23%",
    transform: "rotate(60deg)"
}}>
<div style={{
  width: "65%",
  height: "8vw",
  backgroundColor: "#732043",
  flexShrink: "0",    
  borderRadius: "0 10vw 10vw 0",
  position: "relative",
  overflow: "hidden"
}}>
  <div style={{
    backgroundColor: "#732043",
    opacity: "0.85",
  }}>
    <img src={top2Image} style={{
      opacity: "0.7",  
      width: "100%",
      height: "auto",
      borderRadius: "0 10vw 10vw 0",
      objectFit: "cover",
      transform: "rotate(-60deg) translateY(-15%) translateX(40%) scale(1.45)",
    }} />
  </div>
</div>
</div>

{/*Elementos de baixo, da esquerda para a direita */}

<div id='bottomBar1' style={{
    position: "relative",
    bottom: "25%",
    left: "-62%",
    transform: "rotate(-120deg)"
  }}>
  <div style={{
    width: "20%",
    height: "8vw",
    backgroundColor: "#732043",
    flexShrink: "0",    
    borderRadius: "0 10vw 10vw 0",
    position: "relative",
    overflow: "hidden"
  }}>
    <div style={{
      backgroundColor: "#732043",
      opacity: "0.85",
    }}>
      <img src={bottom1Image} style={{
        opacity: "0.7",  
        width: "100%",
        height: "auto",
        borderRadius: "0 10vw 10vw 0",
        objectFit: "cover",
        transform: "rotate(120deg) translateY(0%) translateX(15%) scale(1.25)",
      }} />
    </div>
  </div>
</div>

<div id='bottomBar2' style={{
    position: "relative",
    bottom: "10%",
    left: "-30%",
    transform: "rotate(-120deg)"
  }}>
  <div style={{
    width: "47%",
    height: "8vw",
    backgroundColor: "#732043",
    flexShrink: "0",    
    borderRadius: "0 10vw 10vw 0",
    position: "relative",
    overflow: "hidden"
  }}>
    <div style={{
      backgroundColor: "#732043",
      opacity: "0.85",
    }}>
      <img src={bottom2Image} style={{
        opacity: "0.7",  
        width: "100%",
        height: "auto",
        borderRadius: "0 10vw 10vw 0",
        objectFit: "cover",
        transform: "rotate(120deg) translateY(0%) translateX(-70%) scale(1)",
      }} />
    </div>
  </div>
</div>

<div id='bottomBar3' style={{
    position: "relative",
    bottom: "40%",
    left: "-10%",
    transform: "rotate(-120deg)"
  }}>
  <div style={{
    width: "50%",
    height: "8vw",
    backgroundColor: "#732043",
    flexShrink: "0",    
    borderRadius: "0 10vw 10vw 0",
    position: "relative",
    overflow: "hidden"        
  }}>
    <div style={{
      backgroundColor: "#732043",
      opacity: "0.85",
    }}>
      <img src={bottom3Image} style={{
        opacity: "0.7",  
        width: "100%",
        height: "auto",
        borderRadius: "0 10vw 10vw 0",
        objectFit: "cover",
        transform: "rotate(120deg) translateY(15%) translateX(-40%) scale(1.8)",
      }} />
    </div>
  </div>
</div>
</Box>


<Box sx={{//Div para a versão mobile
  display: {
    xs: "flex",
    lg:"none"
  },
  width: "100%",
  position: "absolute",
  top: "15%",       // Vertically center
  left: "50%",      // Horizontally center
  transform: "translate(-50%, -50%)",  // Center both horizontally and vertically
  overflow: "hidden"
}}>
<Typography variant='h3' color="white" sx={{
        textAlign: "center",
        marginTop: "50%",
        fontSize: "60px",
        color: '#D2D2D2',  
        fontFamily: 'Exo 2', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }}>
        Oops!
    </Typography>
    <Typography variant='h2' color="white" sx={{
        textAlign: "center",
        margin: "5% auto",
        fontSize: "30px",
        color: '#D2D2D2',  
        fontFamily: 'Exo 2', 
        fontWeight: '400', 
        wordWrap: 'break-word',
        width: "80%"
    }}>
        This website is currently under construction!
    </Typography>

    <ImageListItem sx={{
  
    }}>
      <img src={Logo} alt="Logo" style={{ width: "100%", height: "auto"}} />
    </ImageListItem>

</Box>

<Box sx={{//Div para a versão Desktop
  display: {
    xs: "none",
    lg:"flex"
  },
  justifyContent: "right",
  position: "relative",
  height: "100vh",
  width: "50%",
  right: "5%"
}}>

<Typography variant='h3' color="white" sx={{
        display:{
          xs: "none",
          lg: "flex"
        },
        width:'642px',
        height: "216px",
        textAlign: 'right', 
        margin: "35% 0%",
        color: '#D2D2D2', 
        fontSize: "60px", 
        fontFamily: 'Exo 2', 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }}>
        Oops! This website is currently under construction!
    </Typography>
    
  <ImageListItem sx={{
    width: "89px",
    position: "absolute",
    height: "100vh",
    overflow: "hidden",
  }}>
  <img src={Logo} alt="Logo" style={{ width: "100%", height: "auto"}} />
</ImageListItem>

<Box
  sx={{
    position: "absolute",
    bottom: "20%",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
    zIndex: "999",
  }}
>
  <InstagramIcon
    sx={{
      color: "white",
      width: {
        xs: "33px",
        lg:"43px"
      },
      height: "auto"
    }}
  />
  <Typography
    color="white"
    sx={{
      height:{
        xs: "33px",
        lg: "43px"
      },
      color: 'white',
      fontSize: {
        xs: "22px",
        lg: "24px"
    },
      fontFamily: 'Exo 2',
      fontWeight: '400',
      wordWrap: 'break-word',
      display: 'flex',
      alignItems: 'center',
    }}
  >
    @in.nova.pt
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    bottom: {
      xs: "45%",
      lg: "68px",
    },
    left: {
      xs: "20.5%", // Nao pode ficar assim
      lg: "80vw",
    },
    width: "auto",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
    height:{
      xs: "33px",
      lg: "43px"
    }
  }}
>
  <EmailIcon
    sx={{
      color: "white",
      width: {
        xs: "33px",
        lg:"43px"
      },
      height: "auto"
    }}
  />
  <Typography
    color="white"
    sx={{
      height:{
        xs: "33px",
        lg: "43px"
      },
      color: 'white',
      fontSize: {
        xs: "22px",
        lg: "24px"
    },
      fontFamily: 'Exo 2',
      fontWeight: '400',
      wordWrap: 'break-word',
      alignItems: 'center',
    }}>
    geral@innova.pt
  </Typography>
</Box>

</Box>



</Box>
    
  );
};

export default Maintenance;
