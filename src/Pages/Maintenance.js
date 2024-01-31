import { Box, ImageListItem, Typography, Link } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import React from 'react';
import Logo from '../images/OurLogos/logos-03.png';
import noiseImage from '../images/MaintenancePageImages/Noise_1.webp';
import top1Image from '../images/MaintenancePageImages/top1.webp';
import top2Image from '../images/MaintenancePageImages/top2.webp';
import bottom1Image from '../images/MaintenancePageImages/bottom1.webp';
import bottom2Image from '../images/MaintenancePageImages/bottom2.webp';
import bottom3Image from '../images/MaintenancePageImages/bottom3.webp';

import { useMediaQuery } from 'react-responsive';

const InNovaLogo = () => {
  const mobile = useMediaQuery({ minHeight: 600, maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201 });
  if(mobile){
    return(
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
            maxWidth: "500px",
            width: "145vw",
            height: "auto",
          }}
        />
      </ImageListItem>
    )
  }
  else if(desktop) return(
    <ImageListItem sx={{
        width: "10%",
        position: "absolute",
        overflow: "hidden",
        margin: "8% -1.5% 0 0"
      }}>
      <img src={Logo} alt="Logo" style={{ width: "100%", height: "auto"}} />
    </ImageListItem>
  )
};

const MaintenanceText = () => {
  const mobile = useMediaQuery({ maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201 });
  if(desktop){
    return(
      <Typography variant='h3' sx={{
        display:"flex",
        width:'42vw',
        height: "22vh",
        position: "absolute",
        top: "35%",
        textAlign: 'right', 
        color: '#D2D2D2', 
        fontSize: "60px", 
        fontWeight: '600',
    }}>
        Oops! This website is currently under construction!
</Typography>
  )
  }else if(mobile){
    return(
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "15%"
      }}>
        <Typography
      variant='h3'
      sx={{
        textAlign: "center",
        fontSize: "65px",
        color: '#D2D2D2',  
        fontWeight: '600',
        position: "relative",
        top: "18%",
        width: '100%',
        zIndex:"2"
      }}>
            Oops!
        </Typography>
        
        <Typography variant='h2' sx={{
            position: "relative",
            top: "25%",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            fontSize: "35px",
            color: '#D2D2D2',  
            fontWeight: '500',
            width: "90%",
            zIndex: "2"
        }}>
            This website is currently under construction!
        </Typography>
      </Box>
    )
  }
};

const SocialMedia = () => {
  const mobile = useMediaQuery({ maxWidth: 1200 });
  const desktop = useMediaQuery({ minWidth: 1201, minHeight: 570 });
  if(desktop){
    return(
      <Box sx={{
          display: "flex",
          justifyContent: "right",
      }}>
        
        <Box
          sx={{
            position: "absolute",
            bottom:"14%",
            zIndex: "999",
          }}>
            <Link href='https://www.instagram.com/in.nova.pt' sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              textDecoration: "none"
            }}>
            <InstagramIcon
              sx={{
                color: "#D2D2D2",
                width: "43px",
                height: "auto",
              }}/>
            <Typography
              color="white"
              sx={{
                height: "43px",
                color: "#D2D2D2",
                fontSize: "24px",
                fontWeight: '200',
                wordWrap: 'break-word'
              }}>
              @in.nova.pt
            </Typography>
          </Link>
            
        </Box>
  
        <Box
          sx={{
            position: "absolute",
            bottom:"20%",
            zIndex: "999"
          }}>
        <Link href="mailto:geral@innova.pt" sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              textDecoration: "none",
            }}>
              <EmailIcon
            sx={{
              color: "#D2D2D2",
              width: "43px",
              height: "auto",
              zIndex: "999"
            }}/>
          <Typography
            color="white"
            sx={{
              height: "43px",
              color: "#D2D2D2",
              fontSize: "24px",
              fontWeight: '200',
              wordWrap: 'break-word',
            }}>
            geral@innova.pt
          </Typography>
        </Link>
          
        </Box>
      </Box>
    )
  }else if(mobile){
    return(
      <Box sx={{
        position: "relative",
        top: "30%"
      }}>
      <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        zIndex: "2",
      }}>
      <Link href="mailto:geral@innova.pt" sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none",
      }}>
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
      </Link>  
    </Box>
      <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        display: 'flex',
        flexDirection: "row",
        gap: "15px",
        zIndex: "2",
      }}
    >
      <Link href='https://www.instagram.com/in.nova.pt' sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <InstagramIcon
        sx={{
          color: "white",
          width: "27px",
          height: "auto",
        }}
      />
      <Typography
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
      </Link>
    </Box>
  </Box> 
  )
}
};

const Bars = () => {
    return(
      <Box sx={{
        position: "absolute",
        top: "0%",
        left: "0%",
        width: "95%",
        height: "100vh",
        overflow: "hidden",
        display:"block",
      }}>
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
            <img src={top1Image} alt='In-Nova Image 1' style={{
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
            <img src={top2Image} alt='In-Nova Image 2' style={{
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
            <img src={bottom1Image} alt='In-Nova Image 3' style={{
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
            <img src={bottom2Image} alt='In-Nova Image 4' style={{
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
            <img src={bottom3Image} alt='In-Nova Image 5' style={{
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
    )
};

const DesktopVersion = () => {
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
        overflow:"hidden"
      }}>
    <Bars></Bars>
    <Box sx={{
        display: "flex",
        justifyContent: "right",
        position: "relative",
        height: "100vh",
        width: "50%",
        margin: "0 5% 0 0"
    }}>      
      <MaintenanceText></MaintenanceText>    
      <InNovaLogo></InNovaLogo>
      <SocialMedia></SocialMedia>
    </Box>
  </Box>
  );
};

const MobileVersion = () => {
  return(
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      width: "100vw",
      height: "100vh",
      position: "absolute",
      overflow: "hidden"
    }}>    
      <MaintenanceText></MaintenanceText>
      <InNovaLogo></InNovaLogo>
      <SocialMedia></SocialMedia>
    </Box>
  )
};

const Maintenance = () => {
  return (
    <Box sx={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#052533",
      display: "flex",
      alignItems: "center",
      justifyContent: {
        xs: "center",
        lg: "flex-end"
      },
      backgroundImage: `url(${noiseImage})`,
      overflow:"hidden"
    }}>

      <Box sx={{display:{
          xs: "none",
          lg: "flex"
        }}}>
        <DesktopVersion></DesktopVersion>
      </Box>

      <Box sx={{display:{
          xs: "flex",
          lg: "none"
          },
          flexDirection: "column",
          width: "100vw",
          height: "100vh",
          position: "absolute",
          overflow: "hidden"
        }}>
        <MobileVersion></MobileVersion>
      </Box>

    </Box>
  )
};

export default Maintenance;