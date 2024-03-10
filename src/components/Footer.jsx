import { AppBar, Box, Button, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import { Instagram, Email, LinkedIn, ArrowForward } from '@mui/icons-material';

import InNovaLogo from '../images/OurLogos/logos-08.png'
import CustomButton from './CustomButton';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';


const Footer = () => {

    const location = useLocation();
    const isJoinUsPage = location.pathname === '/join-us';

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

    const FooterBar = styled(AppBar)(() => ({
        backgroundColor: isJoinUsPage ? "#FFFFFF" : "#F0F0F0",
        position: "absolute",
        width: "100%",
        height: mobile ? "45vh" : "32%",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "none",
      }));

    const Logo = styled(ImageListItem)(() => ({
        position: "relative",
        width: mobile ? "50%" : "17%",
        height: mobile ? "50%" : "17%",
        marginLeft: mobile ? "10%" : "10%",
        marginTop: mobile ? "" : "6%",
        backgroundColor: "blue"
      }));

    const Pages = styled(Box)(() => ({
        position: "relative",
        top: mobile ? "none" : "45%",
        width: "100%",
        display: mobile ? "flex" : "grid",
        flexDirection: "column",
        gridTemplateColumns: "2fr 2fr",
        rowGap: "2px",
        columnGap: mobile ? "5%" : "20%",
        backgroundColor: "green",
        marginLeft: "10%"
    }));   

    const SocialMedia = styled(Box)(() => ({
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        columnGap: mobile ? "10%" : "none",
        position: "relative",
        top: mobile ? "none" : "3vh",
        height: mobile ? "100%" : "none",
        alignItems: "center",
        justifyContent: "center"
      }));

    const PagesLinkStyle = {
        fontSize: mobile ? "3.5vw" : "1vw",
        color: "white",
        fontWeight: "400"
      };


    const NavLinkStyle = {
        textDecoration : "none",
      };

      const linkStyles = {
        textDecoration: 'none',
        color: '#732043',
        fontWeight: 'bold',
        fontSize: '18px',
        transition: 'font-weight 0.3s ease',
        textTransform: 'none'
      };
    
      const activeLinkStyles = {
        fontWeight: 'normal',
      };


    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        navigate.push(path);
        window.scrollTo(0, 0);
      };

        return (
            <FooterBar position='bottom-center'>            
                <Box sx={{
                        position: "absolute",
                        display: "flex",
                        flexDirection: "row",
                        gap: mobile ? "none" : "50px",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        top: "0",
                        right: "0",
                        width: mobile ? "100%" : "70%",
                        height: "100%",
                        backgroundColor: "#732043",
                        borderRadius: mobile ? "none" : "20px 0 0 0",
                    }}>

                <div style={{
                    position: "absolute",
                    top: mobile ? "0" : "",
                    left: 0,
                    height: "30%",
                    width: mobile ? "100%" : "30%",
                    display: mobile ? "flex" : "none",
                    alignItems: mobile ? "" : "center",
                }}>
                   <Logo>
                    <img alt='In-Nova Logo' src={InNovaLogo} />
                    </Logo> 
                </div>

                    <Box sx={{
                        position: "relative",
                        height: "100%",
                        width: mobile ? "50%" : "35%",
                        margin: mobile ? "none" : "0 0 0 6vw",
                        display: "flex",
                        alignItems: "center"
                    }}>

                    <Typography sx={{
                        position: "absolute",
                        top: "5%",
                        fontSize: "1.9vw",
                        fontWeight: 200,
                        lineHeight: "40px",
                        letterSpacing: "-0.02em",
                        textAlign: "left",
                        display: mobile ? "none" : ""  
                     }}>Let's discuss and <br/> bring your vision to life.</Typography>
    
                    <div style={{
                        width: "100%",
                        height: mobile ? "50%" : "100%",
                        display: mobile ? "flex" : "",
                        alignItems: mobile ? "center" : "",
                        justifyContent: mobile ? "center" : "",
                        //backgroundColor: "green",
                        //marginLeft: "10%"
                    }}>
                    <Pages>
                    <NavLink to="about-us" activeClassName="activeLink" style={linkStyles} activeStyle={activeLinkStyles}>
                        <Button color="inherit" style={linkStyles}>About Us</Button>
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
                    </div>
                    
                    </Box>
                    
                <div style={{
                    position: "absolute",
                    right: mobile ? "0%" : "5%",
                    width: "20%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center"           
                }}>
                    <div style={{
                        position: "relative",
                        top: "10%",
                        display: mobile ? "none" : "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <CustomButton customBackgroundColor = "#052533" sx={{
                    }}>
                        <Typography sx={{fontSize: "1vw", zIndex: "2"}}>Let's Talk</Typography>
                        <ArrowForward sx={{height: "50%", zIndex: "2"}}></ArrowForward>
                    </CustomButton>
                    </div>

                    <div style={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
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
                    </div>
                    
                    <div style={{
                        height: "100%",
                        display: mobile ? "none" : ""
                    }}>
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
                    </div>
                    
                </div> 
                    
                </Box>
    
                <Box sx={{
                    height: "100%",
                    width: "30%",
                    position: "absolute",
                    bottom: "0px",
                    left: "0px",
                    backgroundColor: "#732043",
                    zIndex: "1000",
                    display: mobile ? "none" : "",
                    flexDirection: "row"
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "34%",
                        backgroundColor: isJoinUsPage ? "#FFFFFF" : "#F0F0F0",
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
    }

export default Footer