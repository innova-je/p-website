import { AppBar, Box, Button, Menu, MenuItem, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import InNovaLogo from '../images/logos/logos-10.png'

const Footer = () => {

    const FooterBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        bottom: "0px",
        width: "100%",
        height: "32%",
        justifyContent: "center",
        alignItems: "center",
      }));

    const Logo = styled(ImageListItem)(({ theme }) => ({
        position: "absolute",
        bottom: "0px",
        width: "25%",
        height: "25%",
        margin: "6vh 3vw"
      }));

      const Pages = styled(Box)(({ theme }) => ({
        position: "absolute",
        bottom: "20%",
        height: "35%",
        width: "20%",
        display: "grid",
        gridTemplateColumns: "2fr 2fr",
    }));    


    const LetsTalkButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#052533",
        color: 'white',
        width: "8vw",
        position: "absolute",
        top: "3vh",
        fontFamily: theme.typography.fontFamily,
        fontWeight: 'bold',
        borderRadius: '25px',
        transition: 'transform 0.2s ease-in-out',
      
        '&:hover': {
          backgroundColor: "white",
          color: 'black',
        },
      }));

      const SocialMedia = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        top: "10vh",
        gap: "5px"
      }));

    

    return (
        <FooterBar position='bottom-center'>
            
            <Box sx={{
                height: "100%",
                width: "25%",
                position: "absolute",
                bottom: "0px",
                left: "0px",
            }}>
                <Box sx={{
                    width: "100%",
                    height: "30%",
                    backgroundColor: "white",
                    borderRadius: "0 20px 20px 0"
                }}>
                    test
                </Box>
               <Logo>
                    <img src={InNovaLogo}/>
                </Logo>
                <Typography sx={{
                    position: "absolute",
                    bottom: "0px",
                    margin: "3vh 3vw"
                }}>2024 In-Nova. All rights reserved.</Typography>
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "flex-start",
                width: "40%",
                height: "100%"
            }}>
            <Typography sx={{
                position: "absolute",
                top: "5%",
                fontSize: "2rem",
                fontWeight: 200,
                lineHeight: "52px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                
            }}>Let's discuss and bring your vision to life.</Typography>
            <Pages>
                <Typography>About Us</Typography>
                <Typography>Events</Typography>
                <Typography>Services</Typography>
                <Typography>Out of Office</Typography>
                <Typography>Our Team</Typography>
                <Typography>Recruitment</Typography>
                <Typography>Our Advisors</Typography>             
            </Pages>
            </Box>
            
            <Box sx={{
                position: "absolute",
                right: "0px",
                display: "flex",
                flexDirection: "column",
                width: "20vw",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <LetsTalkButton>Let's Talk
                </LetsTalkButton>
                <SocialMedia>
                    <Link href="mailto:geral@innova.pt">
                    <EmailIcon sx={{
                        width: "3vw",
                        height: "6vh",
                        color: "white"
                    }}></EmailIcon>
                    </Link>
                    <Link href='https://www.instagram.com/in.nova.pt'>
                        <InstagramIcon sx={{
                        width: "3vw",
                        height: "6vh",
                        color: "white"
                    }}></InstagramIcon>
                    </Link>
                    <Link href='https://www.linkedin.com/company/innova-consultoria-junior'>
                    <LinkedInIcon sx={{
                        width: "3vw",
                        height: "6vh",
                        color: "white"
                    }}></LinkedInIcon>
                    </Link>
            </SocialMedia>
            <Typography sx={{
                fontSize: "15px",
                display: "flex",
                textAlign: "center",
                width: "80%",
                flexDirection: "column",
                position: "relative",
                top: "20%"
            }}>Faculdade de Ciências e Tecnologias
            Universidade Nova de Lisboa</Typography>
            <Typography sx={{
                fontSize: "15px",
                display: "flex",
                textAlign: "center",
                width: "80%",
                flexDirection: "column",
                position: "relative",
                top: "25%"
            }}>Quinta da Torre, Caparica</Typography>
            </Box>
            
        </FooterBar>      

    )
}

export default Footer