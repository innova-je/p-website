import { Box, ImageListItem, Typography, styled, ThemeProvider } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import Logo from '../images/logos/logos-03.png';

import noiseImage from '../images/other/Noise.png';
import top1Image from '../images/other/In.Nova_III JE Portugal-224.jpg';
import top2Image from '../images/other/top2.jpg';
import bottom1Image from '../images/other/IMG_0908 (1).jpg';
import bottom2Image from '../images/other/bottom2.jpg';
import bottom3Image from '../images/other/bottom3.jpg';

import useMediaQuery from '@mui/material/useMediaQuery';


const Maintenance = () => {
  const isScreenHeightLessThan400px = useMediaQuery('(max-height: 400px)');
  return (
      <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#052533",
        display: "flex",
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

<Box
  sx={{
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "95%",
    height: "100vh",
    overflow: "hidden",
    display: {
      xs: "none",
      lg: "block",
    },
  }}
>

  {/* Barras de cima, da esquerda para a direita */}

<div id='topBar1' style={{
    position: "relative",
    top: "20%",
    left: "-47%",
    transform: "rotate(60deg)",
  }}>
    <div style={{
      width: "90vw",
      height: "8vw",
      backgroundColor: "#732043",
      flexShrink: "0",
      borderRadius: "0 10vw 10vw 0",
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

  <div id='topBar2' style={{
    position: "relative",
    top: "-5%",
    left: "-25%",
    transform: "rotate(60deg)",
  }}>
    <div style={{
      width: "80%",
      height: "8vw",
      backgroundColor: "#732043",
      flexShrink: "0",
      borderRadius: "0 10vw 10vw 0",
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
          transform: "rotate(-60deg) translateY(-5%) translateX(40%) scale(1)",
        }} />
      </div>
    </div>
  </div>
  

  {/* Barras de baixo, da esquerda para a direita */}

  <div id='bottomBar1' style={{
    position: "relative",
    bottom: "-30%",
    left: "-47%",
    transform: "rotate(-120deg)",
  }}>
    <div style={{
      width: "50%",
      height: "8vw",
      backgroundColor: "#732043",
      flexShrink: "0",
      borderRadius: "0 10vw 10vw 0",
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
          transform: "rotate(120deg) translateY(-11%) translateX(-67%) scale(1)",
        }} />
      </div>
    </div>
  </div>

  <div id='bottomBar2' style={{
    position: "relative",
    bottom: "-18%",
    left: "-21%",
    transform: "rotate(-120deg)"
  }}>
    <div style={{
      width: "60vw",
      height: "8vw",
      backgroundColor: "#732043",
      flexShrink: "0",
      borderRadius: "0 10vw 10vw 0",
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
          transform: "rotate(120deg) translateY(-10%) translateX(-68%) scale(1)",
        }} />
      </div>
    </div>
  </div>

  <div id='bottomBar3' style={{
    position: "relative",
    bottom: "0%",
    left: "3%",
    transform: "rotate(-120deg)",
  }}>
    <div style={{
      width: "75%",
      height: "8vw",
      backgroundColor: "#732043",
      flexShrink: "0",
      borderRadius: "0 10vw 10vw 0",
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
          transform: "rotate(120deg) translateY(5%) translateX(-42%) scale(1.2)",
        }} />
      </div>
    </div>
  </div>
</Box>


<Box sx={{//Versão mobile
  display: {
    xs: "flex",
    lg:"none"
  },
  flexDirection: "column",
  width: "100vw",
  height: "100vh",
  position: "absolute",
  overflow: "hidden"
}}>

<Typography
  variant='h3'
  color="white"
  sx={{
    textAlign: "center",
    fontSize: "65px",
    color: '#D2D2D2',  
    fontWeight: '600', 
    wordWrap: 'break-word',
    position: "absolute",
    top: "20%",
    width: '100%',
    zIndex:"2"
  }}>
        Oops!
    </Typography>
    
    <Typography variant='h2' color="white" sx={{
        position: "absolute",
        top: "37%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontSize: "35px",
        fontFamily: 'Exo 2, sans-serif',
        color: '#D2D2D2',  
        fontWeight: '500', 
        wordWrap: 'break-word',
        width: "90%",
        zIndex: "2"
    }}>
        This website is currently under construction!
    </Typography>

    <ImageListItem
  sx={{
    position: "absolute",
    bottom: "-23vh",
    right: "-15vw",
    zIndex: "1"
  }}
>
  <img
    src={Logo}
    alt="Logo"
    style={{
      maxWidth: "600px",
      width: "145vw",
      height: "auto",
    }}
  />
</ImageListItem>

<Box
  sx={{
    position: "absolute",
    bottom: "42%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: isScreenHeightLessThan400px ? 'none' : 'flex', //Nao esta a funcionar
    flexDirection: "row",
    gap: "15px",
    zIndex: "2"
  }}
>
  <InstagramIcon
    sx={{
      color: "white",
      width: "27px",
      height: "auto",
    }}
  />
  <Typography
    color="white"
    sx={{
      color: 'white',
      fontSize: "21px",
      fontWeight: '200',
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
    bottom: "37%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    zIndex: "2"
  }}
>
  <EmailIcon
    sx={{
      color: "white",
      width: "27px",
      height: "auto",
    }}
  />
  <Typography
    color="white"
    sx={{
      color: 'white',
      fontSize: "21px",
      fontWeight: '200',
      wordWrap: 'break-word',
      alignItems: 'center',
    }}
  >
    geral@innova.pt
  </Typography>
</Box>



</Box>


<Box sx={{//Versão Desktop
  display: {
    xs: "none",
    lg:"flex"
  },
  justifyContent: "right",
  position: "relative",
  height: "100vh",
  width: "50%",
  margin: "0 5% 0 0"
}}>

<Typography variant='h3' color="white" sx={{
        display:{
          xs: "none",
          lg: "flex"
        },
        width:'42vw',
        height: "22vh",
        position: "absolute",
        top: "35%",
        textAlign: 'right', 
        color: '#D2D2D2', 
        fontSize: "60px", 
        fontWeight: '600', 
        wordWrap: 'break-word'
    }}>
        Oops! This website is currently under construction!
    </Typography>
    
  <ImageListItem sx={{
    width: "10%",
    position: "absolute",
    overflow: "hidden",
    margin: "8% -1.5% 0 0"
  }}>
  <img src={Logo} alt="Logo" style={{ width: "100%", height: "auto"}} />
</ImageListItem>


<Box
  sx={{
    position: "absolute",
    bottom: "14%",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    zIndex: "999",
  }}
>
  <InstagramIcon
    sx={{
      color: "white",
      width: {
        xs: "33px",
        lg: "43px",
      },
      height: "auto",
    }}
  />
  <Typography
    color="white"
    sx={{
      height: {
        xs: "33px",
        lg: "43px",
      },
      color: 'white',
      fontSize: {
        xs: "22px",
        lg: "24px",
      },
      fontWeight: '200',
      wordWrap: 'break-word'
    }}
  >
    @in.nova.pt
  </Typography>
</Box>


<Box
  sx={{
    position: "absolute",
    bottom: "20%",
    display: "flex",
    flexDirection: "row",
    gap: "15px",
    zIndex: "999",
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
      fontWeight: '200',
      wordWrap: 'break-word',
    }}>
    geral@innova.pt
  </Typography>
</Box>
</Box>

</Box>


  );
};

export default Maintenance;
