import { Box, Typography, styled} from '@mui/material'
import React from 'react'
import Fidelidade from '../images/HomePageImages/PartnersLogos/FidelidadeLogo.png'
import Siemens from '../images/HomePageImages/PartnersLogos/SiemensLogo.png'
import Cisco from '../images/HomePageImages/PartnersLogos/CiscoLogo.png'
import Magma from '../images/HomePageImages/PartnersLogos/MagmaLogo.png'
import Meta from '../images/HomePageImages/PartnersLogos/MetaLogo.png'
import OpenBB from '../images/HomePageImages/PartnersLogos/OpenBBLogo.png'

import { useTheme } from '@mui/system';

const partnerData = {
  goldSponsors: [
    { name: 'Fidelidade', logoSrc: Fidelidade, width: '80%'}
  ],
  silverSponsors: [
    { name: 'Siemens Energy', logoSrc: Siemens, width: '80%', transform: 'scale(0.6)' },
    { name: 'Cisco Systems', logoSrc: Cisco, width: '80%', transform: 'scale(0.6)' }
  ],
  learningPartners: [
    { name: 'Magma Studios', logoSrc: Magma, width: '50%', transform: 'scale(0.8)' },
    { name: 'Meta Consultoria Júnior', logoSrc: Meta, width: '50%', transform: 'scale(0.7)' },
    { name: 'OpenBB', logoSrc: OpenBB, width: '60%', transform: 'scale(0.6)' }
  ],
};


const OurPartners = () => {
  const theme = useTheme();

  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: "3.5vw",
  };

      const PartnersBox = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "1%",
        width: "100%",
        backgroundColor: "#F0F0F0",
        [theme.breakpoints.down('sm')]: {
          height: "100%",
        },
        height: "90vh",
      }));

      const SponsorsBox = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "5%",
        width: "100%",
        display: "flex",
        [theme.breakpoints.down('sm')]: {
          flexDirection: "column",
          alignItems: "center"
        },
        [theme.breakpoints.up('md')]: {
          flexDirection: "row",
          alignItems: "flex-start",
        },
        justifyContent: "center",        
      }));

      const SponsorBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          width: "90%",
          marginTop: "15%"
        },
        [theme.breakpoints.up('md')]: {
          width: "25%",
        },        
        display: "flex",       
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 20px"
      }));

      const LearningPartners = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('sm')]: {
          width: "90%",
          margin: "15% 0"
        },
        [theme.breakpoints.up('md')]: {
          width: "35%",
        },
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
        fontSize: {
          xs: "4vw",
          sm: "2vw",
          md: "2vw",
          lg: "1.5vw"
      }}

      

  return (
    <PartnersBox>
                <Typography style={ClientsAndPartnersStyle}>Meet Our Partners</Typography>
                <Typography sx={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    color: "#052533",
                    [theme.breakpoints.down('sm')]: {
                      fontSize: "16px",
                      fontWeight: "400",
                      marginBottom: "-5%",
                    },
                    [theme.breakpoints.up('md')]: {
                      fontSize: "26px",
                      fontWeight: "200"
                    },
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
                        [theme.breakpoints.down('sm')]: {
                          flexDirection: "column",
                        },
                        [theme.breakpoints.up('md')]: {
                          flexDirection: "row",
                        },
                    }}>
                        <img src={Magma} alt='Magma Studios Logo' style={{width: "50%",  transform: "scale(0.8)"}}/>
                        <img src={Meta} alt='Meta Consultoria Júnior Logo' style={{width: "50%",  transform: "scale(0.7)"}}/>
                    </Box>
                    
                    <img src={OpenBB} alt='OpenBB Logo' style={{width: "60%", transform: "scale(0.6)"}}/>
                    </Box>                  
                    
                </LearningPartners>

                </SponsorsBox>   
                
            </PartnersBox>
  )
};

export default OurPartners