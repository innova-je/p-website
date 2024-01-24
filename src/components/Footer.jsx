import { AppBar, Box, Button, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import InNovaLogo from '../images/logos/logos-10.png'

const Footer = () => {

    const FooterBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: "transparent",
        position: "absolute",
        bottom: "0px",
        width: "100%",
        height: "35%",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none"
      }));

    const Logo = styled(ImageListItem)(({ theme }) => ({
        position: "absolute",
        bottom: "0px",
        width: "20%",
        margin: "6vh"
      }));

      const Pages = styled(Box)(({ theme }) => ({
        position: "relative",
        top: "40%",
        height: "50%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "2fr 2fr",
        rowGap: "6px",
        columnGap: "20%"
    }));    


    const LetsTalkButton = styled(Button)(({ theme }) => ({
        position: "absolute",
        top: "10%",
        backgroundColor: "#052533",
        color: 'white',
        width: "10vw",
        height: "6vh",
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
        position: "relative",
        top: "3vh",
      }));

      const PagesLinkStyle = {
        fontSize: "20px",
        color: "white",
        fontWeight: "400"
      };


    return (
        <FooterBar position='bottom-center'>
            
            <Box sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    top: "0",
                    right: "0",
                    width: "70%",
                    height: "100%",
                    backgroundColor: "#732043",
                    borderRadius: "20px 0 0 0"
                }}>
                <Box sx={{
                    height: "100%",
                    width: "35%",
                    margin: "0 0 0 6vw",
                }}>
                    <Typography sx={{
                    position: "absolute",
                    top: "5%",
                    fontSize: "2.5rem",
                    fontWeight: 200,
                    lineHeight: "40px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",         
                 }}>Let's discuss and <br/> bring your vision to life.</Typography>

                <Pages>
                    <Typography style={PagesLinkStyle}>About Us</Typography>
                    <Typography style={PagesLinkStyle}>Events</Typography>
                    <Typography style={PagesLinkStyle}>Services</Typography>
                    <Typography style={PagesLinkStyle}>Out of Office</Typography>
                    <Typography style={PagesLinkStyle}>Our Team</Typography>
                    <Typography style={PagesLinkStyle}>Recruitment</Typography>
                    <Typography style={PagesLinkStyle}>Our Advisors</Typography>             
                </Pages>

                </Box>
                

                <Box sx={{
                    position: "absolute",
                    right: "5%",
                    width: "20vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    zIndex: "999",
                }}>
                <LetsTalkButton>
                    <Typography>Let's Talk</Typography>
                </LetsTalkButton>

                <SocialMedia>
                    <Link href="mailto:geral@innova.pt">
                    <EmailIcon sx={{
                        width: "4vw",
                        height: "6vh",
                        color: "white"
                    }}></EmailIcon>
                    </Link>
                    <Link href='https://www.instagram.com/in.nova.pt'>
                        <InstagramIcon sx={{
                        width: "4vw",
                        height: "6vh",
                        color: "white"
                    }}></InstagramIcon>
                    </Link>
                    <Link href='https://www.linkedin.com/company/innova-consultoria-junior'>
                    <LinkedInIcon sx={{
                        width: "4vw",
                        height: "6vh",
                        color: "white"
                    }}></LinkedInIcon>
                    </Link>
                </SocialMedia>
                <Typography sx={{
                    fontSize: "18px",
                    fontWeight: "100",
                    lineHeight: "25px",
                    display: "flex",
                    textAlign: "center",
                    width: "80%",
                    flexDirection: "column",
                    position: "relative",
                    top: "12%"
                }}>Faculdade de Ciências e Tecnologias
                Universidade Nova de Lisboa</Typography>
                <Typography sx={{
                    fontSize: "18px",
                    fontWeight: "100",
                    display: "flex",
                    textAlign: "center",
                    width: "80%",
                    flexDirection: "column",
                    position: "relative",
                    top: "17%"
                }}>Quinta da Torre, Caparica</Typography>

                </Box>
                
                </Box>

            <Box sx={{
                height: "100%",
                width: "30%",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                backgroundColor: "#732043",
                zIndex: "1000"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "34%",
                    backgroundColor: "white",
                    borderRadius: "0 0px 20px 0"
                }}>
                </Box>                
               <Logo>
                    <img src={InNovaLogo}/>
                </Logo>
                <Typography sx={{
                    position: "absolute",
                    bottom: "0px",
                    margin: "3vh 4vw",
                    fontWeight: "100"
                }}>2024 In-Nova. All rights reserved.</Typography>
            </Box>            
            
        </FooterBar>      

    )
}

export default Footer