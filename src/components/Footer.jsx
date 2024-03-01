import { AppBar, Box, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import { Instagram, Email, LinkedIn, ArrowForward } from '@mui/icons-material';

import InNovaLogo from '../images/OurLogos/logos-10.png'
import CustomButton from './CustomButton';

import { NavLink, useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';


const Footer = () => {

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

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
        width: mobile ? "12%" : "17%",
        height: mobile ? "12%" : "17%",
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

    const SocialMedia = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        columnGap: mobile ? "10%" : "none",
        position: "relative",
        top: mobile ? "none" : "3vh",
        height: mobile ? "100%" : "none",
        alignItems: "center",
        justifyContent: "center"
      }));

    const PagesLinkStyle = {
        fontSize: "1vw",
        color: "white",
        fontWeight: "400"
      };


    const NavLinkStyle = {
        textDecoration : "none",
      };


    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        navigate.push(path);
        window.scrollTo(0, 0);
      };

    if(desktop){
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
    
                    <Pages>
                    <NavLink to="/about-us" style={NavLinkStyle} onClick={() => handleNavLinkClick('/about-us')}>
                        <Typography style={PagesLinkStyle}>About Us</Typography>
                    </NavLink>
                        <NavLink to="/events" style={NavLinkStyle} onClick={() => handleNavLinkClick('/events')}>
                            <Typography style={PagesLinkStyle}>Events</Typography>
                        </NavLink> 
                        <NavLink to="/services" style={NavLinkStyle} onClick={() => handleNavLinkClick('/services')}>
                            <Typography style={PagesLinkStyle}>Services</Typography>
                        </NavLink>
                        <NavLink to="/out-of-office" style={NavLinkStyle} onClick={() => handleNavLinkClick('/out-of-office')}>
                            <Typography style={PagesLinkStyle}>Out of Office</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-team" style={NavLinkStyle} onClick={() => handleNavLinkClick('/our-people/our-team')}>
                            <Typography style={PagesLinkStyle}>Our Team</Typography>
                        </NavLink>
                        <NavLink to="/join-us" style={NavLinkStyle} onClick={() => handleNavLinkClick('/join-us')}>{/* nao ha pagina de recrutamento*/}
                            <Typography style={PagesLinkStyle}>Recruitment</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-advisors" style={NavLinkStyle} onClick={() => handleNavLinkClick('/our-people/our-advisors')}>
                            <Typography style={PagesLinkStyle}>Our Advisors</Typography>    
                        </NavLink>                             
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
                    <CustomButton customBackgroundColor = "#052533" sx={{
                        position: "absolute",
                        top: "10%",
                    }}>
                        <Typography sx={{fontSize: "1vw", zIndex: "2"}}>Let's Talk</Typography>
                        <ArrowForward sx={{height: "50%", zIndex: "2"}}></ArrowForward>
                    </CustomButton>
    
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
                        fontSize: "0.8rem",
                        fontWeight: "100",
                        lineHeight: "17px",
                        display: "flex",
                        textAlign: "center",
                        flexDirection: "column",
                        position: "relative",
                        top: "12%"
                    }}>Faculdade de Ciências e Tecnologia
                    <br/>Universidade Nova de Lisboa</Typography>
                    <Typography sx={{
                        fontSize: "0.8rem",
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
                        borderRadius: "0 0px 20px 0",
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
    }else if(mobile){
        return(
            <FooterBar position='bottom-center'>
            <div style={{
                width: "100%",
                height: "20vh",
                backgroundColor: "#732043",
                position: "absolute",
                bottom: 0
            }}>
                <Logo>
                    <img alt='In-Nova Logo' src={InNovaLogo}/>
                </Logo>
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
    
                    <SocialMedia>
                        <Link href="mailto:geral@innova.pt">
                        <Email sx={{
                            width: mobile ? "7vw" : "4vw",
                            height: "5vh",
                            color: "white"
                        }}></Email>
                        </Link>
                        <Link href='https://www.instagram.com/in.nova.pt'>
                            <Instagram sx={{
                            width: mobile ? "7vw" : "4vw",
                            height: "5vh",
                            color: "white"
                        }}></Instagram>
                        </Link>
                        <Link href='https://www.linkedin.com/company/innova-consultoria-junior'>
                        <LinkedIn sx={{
                            width: mobile ? "7vw" : "4vw",
                            height: "5vh",
                            color: "white"
                        }}></LinkedIn>
                        </Link>
                    </SocialMedia>
    
                    </Box>
            </div>
        </FooterBar>
        )        
    }
    
}

export default Footer