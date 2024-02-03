import { AppBar, Box, Button, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import { Instagram, Email, LinkedIn, ArrowForward } from '@mui/icons-material';

import InNovaLogo from '../images/OurLogos/logos-10.png'

const Footer = () => {

    const FooterBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: "#F0F0F0",
        position: "absolute",
        width: "100%",
        height: "32%",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }));

    const Logo = styled(ImageListItem)(({ theme }) => ({
        position: "absolute",
        bottom: "0px",
        width: "17%",
        height: "17%",
        margin: "6vh"
      }));

      const Pages = styled(Box)(({ theme }) => ({
        position: "relative",
        top: "45%",
        height: "auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "2fr 2fr",
        rowGap: "2px",
        columnGap: "20%"
    }));   
    

const LetsTalkButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    overflow: "hidden",
    top: "10%",
    backgroundColor: "#052533",
    color: 'white',
    width: "10vw",
    height: "6vh",
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    border: "1px solid white",
    borderRadius: '25px',
    display: "flex",
    flexDirection: "row",
    gap: "10%",
    transition: 'transform 0.3s ease-in-out',
  
    '&:hover': {
      backgroundColor: "white",
      color: '#052533',
      border: "1px solid #052533",
      transform: 'scale(1.05)',
    },  
    
  }));

      const SocialMedia = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        position: "relative",
        top: "3vh",
      }));

      const PagesLinkStyle = {
        fontSize: "1vw",
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
                    borderRadius: "20px 0 0 0",
                }}>
                <Box sx={{
                    height: "100%",
                    width: "35%",
                    margin: "0 0 0 6vw",
                }}>
                    <Typography sx={{
                    position: "absolute",
                    top: "5%",
                    fontSize: "1.9vw",
                    fontWeight: 200,
                    lineHeight: "40px",
                    letterSpacing: "-0.02em",
                    textAlign: "left",         
                 }}>Let's discuss and <br/> bring your vision to life.</Typography>

                <Pages>{/*TODO: Adicionar os links para as páginas */}
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
                    <Typography sx={{fontSize: "1vw"}}>Let's Talk</Typography>
                    <ArrowForward sx={{height: "50%"}}></ArrowForward>
                </LetsTalkButton>

                <SocialMedia>
                    <Link href="mailto:geral@innova.pt">
                    <Email sx={{
                        width: "4vw",
                        height: "5vh",
                        color: "white"
                    }}></Email>
                    </Link>
                    <Link href='https://www.instagram.com/in.nova.pt'>
                        <Instagram sx={{
                        width: "4vw",
                        height: "5vh",
                        color: "white"
                    }}></Instagram>
                    </Link>
                    <Link href='https://www.linkedin.com/company/innova-consultoria-junior'>
                    <LinkedIn sx={{
                        width: "4vw",
                        height: "5vh",
                        color: "white"
                    }}></LinkedIn>
                    </Link>
                </SocialMedia>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: "100",
                    lineHeight: "25px",
                    display: "flex",
                    textAlign: "center",
                    flexDirection: "column",
                    position: "relative",
                    top: "12%"
                }}>Faculdade de Ciências e Tecnologia
                <br/>Universidade Nova de Lisboa</Typography>
                <Typography sx={{
                    fontSize: "1rem",
                    fontWeight: "100",
                    display: "flex",
                    textAlign: "center",
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
                backgroundColor: "#732043",// TODO: mudar para theme.pallete.primary.main
                zIndex: "1000"
            }}>
                <Box sx={{
                    width: "100%",
                    height: "34%",
                    backgroundColor: "#F0F0F0",
                    borderRadius: "0 0px 20px 0"
                }}>
                </Box>                
               <Logo>
                    <img alt='In-Nova Logo' src={InNovaLogo}/>
                </Logo>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    height: "6%",
                    width: "100%",
                    position: "absolute",
                    bottom: "0px",
                    margin: "3vh 4vw",
                }}>
                <Typography sx={{fontWeight: "300", fontSize: "80%"}}>
                &#9426; 2024 In-Nova. All rights reserved.
                </Typography>
            </Box>     
            </Box>            
            
        </FooterBar>      

    )
}

export default Footer