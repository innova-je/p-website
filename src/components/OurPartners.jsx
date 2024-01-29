import { Box, Typography, styled} from '@mui/material'
import React from 'react'

import Fidelidade from '../images/HomePageImages/PartnersLogos/FidelidadeLogo.png'
import Siemens from '../images/HomePageImages/PartnersLogos/SiemensLogo.png'
import Cisco from '../images/HomePageImages/PartnersLogos/CiscoLogo.png'
import Magma from '../images/HomePageImages/PartnersLogos/MagmaLogo.png'
import Meta from '../images/HomePageImages/PartnersLogos/MetaLogo.png'
import OpenBB from '../images/HomePageImages/PartnersLogos/OpenBBLogo.png'

const OurPartners = () => {

    const ClientsAndPartnersStyle = {
        width: "100%",
        textAlign: "center",
        justifyContent: "center",
        color: "#732043",
        fontWeight: "700",
        fontSize: "70px"
      };

      const PartnersBox = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "3%",
        marginBottom: "10%",
        width: "100%",
        backgroundColor: "#F0F0F0"
        
      }));

      const SponsorBox = styled(Box)(({ theme }) => ({
        width: "25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 20px"
      }));

      const LearningPartners = styled(Box)(({ theme }) => ({
        width: "35%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }));

      const SponsorBoxTitle = styled(Box)(({ theme }) => ({
        width: "80%",
        height: "7vh",
        borderRadius: "50px",
        backgroundColor: "white",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }));

      const SponsorTitleStyle = {
        color: "#052533",
        fontWeight: "600",
        fontSize: "26px"
      };

      const SponsorsBox = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
      }));

  return (
    <PartnersBox>
                <Typography style={ClientsAndPartnersStyle}>Meet Our Partners</Typography>
                <Typography sx={{
                    textAlign: "center",
                    color: "#052533",
                    fontWeight: "200",
                    fontSize: "26px"
                }}>Alone, we go fast. Together, we go further.</Typography>
                <SponsorsBox>
                <SponsorBox className='Gold Sponsors'>
                    <SponsorBoxTitle>
                      <Typography sx={SponsorTitleStyle}>Gold Sponsor</Typography>  
                    </SponsorBoxTitle>                    
                    <Box sx={{
                        width: "80%",
                        height: "20vh",
                        marginTop: "5%",
                        borderRadius: "30px",
                        backgroundColor: "#FFFFFF29",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={Fidelidade} alt='Fidelidade Logo' style={{width: "80%"}}/>
                    </Box>
                </SponsorBox>
                <SponsorBox className='Silver Sponsors'>
                    <SponsorBoxTitle>
                        <Typography sx={SponsorTitleStyle}>Silver Sponsor</Typography>
                    </SponsorBoxTitle>
                    <Box sx={{
                        width: "80%",
                        height: "35vh",
                        marginTop: "5%",
                        borderRadius: "30px",
                        backgroundColor: "#FFFFFF29",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <img src={Siemens} alt='Siemens Energy Logo' style={{width: "80%", transform: "scale(0.6)"}}/>
                    <img src={Cisco} alt='Cisco Systems Logo' style={{width: "80%", transform: "scale(0.6)"}}/>
                    </Box>                  
                    
                </SponsorBox>
                <LearningPartners className='Learning Partners'>
                    <SponsorBoxTitle>
                      <Typography sx={SponsorTitleStyle}>Learning Partners</Typography>  
                    </SponsorBoxTitle>
                    <Box sx={{
                        width: "80%",
                        height: "35vh",
                        marginTop: "5%",
                        borderRadius: "30px",
                        backgroundColor: "#FFFFFF29",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                    }}>
                        <img src={Magma} alt='Magma Studios Logo' style={{width: "50%", height: "auto", transform: "scale(0.8)"}}/>
                        <img src={Meta} alt='Meta Consultoria Júnior Logo' style={{width: "50%", height: "auto", transform: "scale(0.7)"}}/>
                    </Box>
                    
                    <img src={OpenBB} alt='OpenBB Logo' style={{width: "60%", transform: "scale(0.6)"}}/>
                    </Box>                  
                    
                </LearningPartners>

                </SponsorsBox>   
                
            </PartnersBox>
  )
}

export default OurPartners