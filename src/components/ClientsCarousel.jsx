import { Box, Typography, styled, ImageList} from '@mui/material'
import React from 'react'

import Futuralia from '../images/HomePageImages/ClientsLogos/FUTURALIA.webp'
import Sucees from '../images/HomePageImages/ClientsLogos/SUCEES.png'
import Orion from '../images/HomePageImages/ClientsLogos/ORION.webp' //Inverter cores do logo
import NovaSST from '../images/HomePageImages/ClientsLogos/NOVA_SST.webp'
import NovaID from '../images/HomePageImages/ClientsLogos/NOVA_ID.webp'
import FatiasDeCa from '../images/HomePageImages/ClientsLogos/FATIAS_DE_CA.webp'
import CardioLeather from '../images/HomePageImages/ClientsLogos/CARDIO_LEATHER.webp'

const ClientsCarousel = () => {

    const ClientsBox = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "5%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }));

      const ClientsLogosCarrousel = styled(ImageList)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "2%", 
        margin: "0 70px",
        overflow: "hidden",
        whiteSpace: "nowrap"   
      }));

      const ClientsAndPartnersStyle = {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        color: "#732043",
        fontWeight: "700",
        fontSize: "70px"
      };


  return (
    <ClientsBox>
                <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
                <ClientsLogosCarrousel>                    
                    <img alt='Futurália Logo' src={Futuralia} style={{width: "20%", transform: "scale(1)"}}/>
                    <img alt='Sucees Logo' src={Sucees} style={{width: "20%", height: "20%", transform: "scale(1)"}}/>
                    <img alt='Orion Logo' src={Orion} style={{width: "30%", transform: "scale(0.6)"}}/>
                    <img alt='NovaID Logo' src={NovaID} style={{width: "20%", height: "20%", transform: "scale(0.7)"}}/>
                    <img alt='Fatias de Cá Logo' src={FatiasDeCa} style={{width: "20%", transform: "scale(0.6)"}}/>
                    <img alt='Nova School of Science and Technology Logo' src={NovaSST} style={{width: "20%", height: "20%", transform: "scale(0.6)"}}/>
                    <img alt='CardioLeather Logo' src={CardioLeather} style={{width: "20%", transform: "scale(1.5)"}}/>
                </ClientsLogosCarrousel>
            </ClientsBox>
  )
}

export default ClientsCarousel