import { Box, Typography, styled, keyframes} from '@mui/material'
import { useMediaQuery } from 'react-responsive';

import Futuralia from '../images/HomePageImages/ClientsLogos/FUTURALIA.webp'
import Sucees from '../images/HomePageImages/ClientsLogos/SUCEES.png'
import Orion from '../images/HomePageImages/ClientsLogos/ORION.webp'
import NovaSST from '../images/HomePageImages/ClientsLogos/NOVA_SST.webp'
import NovaID from '../images/HomePageImages/ClientsLogos/NOVA_ID.webp'
import FatiasDeCa from '../images/HomePageImages/ClientsLogos/FATIAS_DE_CA.webp'
import CardioLeather from '../images/HomePageImages/ClientsLogos/CARDIO_LEATHER.webp'

import Slider from 'react-infinite-logo-slider'
import React, { useEffect, useRef } from 'react';

const clientsData = [
  //Adicionar links para as páginas dos clientes
  { name: 'Futurália', logoSrc: Futuralia,  scale: 0.5 },
  { name: 'Sucees', logoSrc: Sucees,  scale: 1 },
  { name: 'Orion', logoSrc: Orion, scale: 0.7 },
  { name: 'NovaID', logoSrc: NovaID, width: '100%', scale: 1 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '100%', scale: 1 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '100%', scale: 3 },
  { name: 'Futurália', logoSrc: Futuralia,  scale: 0.5 },
  { name: 'Sucees', logoSrc: Sucees,  scale: 1 },
  { name: 'Orion', logoSrc: Orion, scale: 0.7 },
  { name: 'NovaID', logoSrc: NovaID, width: '100%', scale: 1 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '100%', scale: 1 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '100%', scale: 3 },
];


const ClientsCarousel = () => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const ClientsBox = styled(Box)(({ theme }) => ({
    position: "relative",
    marginTop: mobile ? "15%" : "5%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", 
    whiteSpace: "nowrap"
  }));

  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: (desktop ? "3.5dvw" : (tablet ? "4dvw" : "6.5dvw")),
  };

  return (
    /*
    <div style={{
      position: "relative",
      marginTop: mobile ? "15%" : "5%",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden", 
      whiteSpace: "nowrap"
    }}>
      <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
      <div style={{
      width: "100%", 
      display: "inline-flex", 
      flexWrap: "nowrap",
      overflow: "hidden",
      flexDirection: "row-reverse"      
      }}>
      <ul className='animate-infinite-scroll-left' style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "none"
      }}>
        {clientsData.map((client, index) => (
          <li key={index} style={{listStyle: "none"}}>
            <a>
              <img
            key={index}
            alt={`${client.name} Logo`}
            src={client.logoSrc}
            style={{width: client.width, transform: `scale(${client.scale})`}}
          />      
            </a>
          </li>               
        ))}        
      </ul>
    </div>
    </div>
    
*/
    
    <ClientsBox className='clients-box'>
      <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
      <Box sx={{marginTop: "5%", height: "20dvh", display: "flex", flexDirection: "row", width: "100%", alignItems: "center"}}>
        <Slider duration={10} pauseOnHover={true} blurBorder={true}>        
        {clientsData.map((client, index) => (
          <div style={{
            background: "green", 
            display: "flex", 
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            //margin: "0 2%"
            }}>
            <Slider.Slide>
            <img
            key={index}
            alt={`${client.name} Logo`}
            src={client.logoSrc}
            style={{width: client.width, transform: `scale(${client.scale})`}}
          />
          </Slider.Slide>       
          </div>
             
        ))}
      </Slider>
      </Box>
    </ClientsBox>

  );
};


export default ClientsCarousel;