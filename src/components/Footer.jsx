import { AppBar, Box, Button, styled, ImageListItem, Typography, Link } from '@mui/material';
import React from 'react'

import { Instagram, Email, LinkedIn, ArrowForward } from '@mui/icons-material';

import InNovaLogo1 from '../images/OurLogos/logos-10.png'
import InNovaLogo2 from '../images/OurLogos/logos-08.png'
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
        width: "45%",
        height: "50%",
        background: "green",
        marginLeft: "10%",
      }));

    const Pages = styled(Box)(() => ({
        position: "relative",
        width: "100%",        
        display: "grid",
        flexDirection: "column",
        gridTemplateColumns: "repeat(3, 3fr)",
        marginTop: "3%"
    }));   

    const SocialMedia = styled(Box)(() => ({
        display: "flex",
        flexDirection: "row",
        position: "relative",
        top: "3vh",
        height: "none",
        alignItems: "center",
        justifyContent: "center"
      }));

    const PagesLinkStyle = {
        fontSize: mobile ? "3vw" : (tablet ? "2vw" : "1.25vw" ),
        color: "white",
        fontWeight: "400"
      };

      const linkStyles = {
        textDecoration: 'none',
        color: '#732043',
        fontWeight: 'bold',
        fontSize: '18px',
        transition: 'font-weight 0.3s ease',
        textTransform: 'none',
      };
    

        const handleNavLinkClick = () => {
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
                        overflow:"hidden"
                    }}>

                    <Box sx={{
                        position: "relative",
                        height: "100%",
                        width: "100%",
                        margin: "0 0 0 6vw",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                    <div style={{
                        height: "35%", 
                        width: "70%", 
                        display: "flex",
                        alignItems: "center"
                        }}>
                      <Typography sx={{
                        position: "relative",
                        fontSize: "1.9vw",
                        fontWeight: 200,
                        lineHeight: "40px",
                        textAlign: "left"
                     }}>Let's discuss and bring your vision to life.</Typography>  
                    </div>                    
    
                    <div style={{
                        width: "70%",
                        height: "65%"
                    }}>
                    <Pages>
                        <NavLink to="about-us" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>About Us</Typography>
                        </NavLink>
                        <NavLink to="/events" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Events</Typography>
                        </NavLink> 
                        <NavLink to="/services" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Services</Typography>
                        </NavLink>
                        <NavLink to="/out-of-office" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Out of Office</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-team" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Our Team</Typography>
                        </NavLink>
                        <NavLink to="/join-us" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Join Us</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-advisors" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Our Advisors</Typography>    
                        </NavLink>                             
                    </Pages>
                    </div>
                    
                    </Box>
                    
                <div style={{
                    position: "absolute",
                    right: "0%",
                    width: "30%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <div style={{
                        position: "relative",
                        top: "10%",
                        display: "flex",
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
                    </div>
                    
                    <div style={{
                        height: "100%",
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
                    flexDirection: "row",
                    overflow: "hidden"
                }}>
                    <Box sx={{
                        width: "100%",
                        height: "34%",
                        backgroundColor: isJoinUsPage ? "#FFFFFF" : "#F0F0F0",
                        borderRadius: "0 0px 20px 0"
                    }}>
                    </Box>

                    <NavLink to="/">
                        <img alt='In-Nova Logo' src={InNovaLogo2} style={{height: "100%", position: "relative", bottom: "20%", left: "10%"}}/>
                    </NavLink>       
                   
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
        }else if(mobile || tablet){
            return(
               <footer style={{
                background: "#732043",
                position: "relative",
                bottom: 0,
                width: "100dvw",
                height: mobile ? "30dvw" : "20dvw",
                display: "flex",
                flexDirection: "row"
                }}>
                <div style={{ width: "25%", display: "flex", flexDirection:"column", alignItems:"center", justifyContent: "center"}}>                    
                    <NavLink to="/" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img src={InNovaLogo1} style={{ width: mobile ? "70%" : "50%" }}/>
                    </NavLink>
                    
                </div>

                <div style={{ width: "55%",  display: "flex", alignItems: "center"}}>
                    <div style={{ height: "55%", width: mobile ? "100%" : "80%", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", columnGap: mobile ? "5%" : "15%", marginLeft: "10%"}}>
                        <NavLink to="about-us" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>About Us</Typography>
                        </NavLink>
                        <NavLink to="/events" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Events</Typography>
                        </NavLink> 
                        <NavLink to="/services" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Services</Typography>
                        </NavLink>
                        <NavLink to="/out-of-office" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Out of Office</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-team" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Our Team</Typography>
                        </NavLink>
                        <NavLink to="/join-us" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Join Us</Typography>
                        </NavLink>
                        <NavLink to="/our-people/our-advisors" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Our Advisors</Typography>    
                        </NavLink>    
                        <NavLink to="/our-people/our-advisors" style={linkStyles} onClick={handleNavLinkClick}>
                            <Typography style={PagesLinkStyle}>Our Advisors</Typography>    
                        </NavLink>     
                    </div>
                    
                    
                </div>

                <div style={{width: mobile ? "20%" : "40%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>                    
                <div style={{gap: "3%", width: mobile ? "40%" : "100%", display: "flex", flexDirection: mobile ? "column" : "row", columnGap: mobile ? "none" : "5%", alignItems: "center", justifyContent: "center"}}>
                    <Link href="mailto:geral@innova.pt">
                        <Email sx={{
                            color: "white",
                            width: mobile ? "6dvw" : "5dvw",
                            height: mobile ? "6dvw" : "5dvw",
                        }}></Email>
                        </Link>
                        <Link href='https://www.instagram.com/in.nova.pt'>
                            <Instagram sx={{
                            color: "white",
                            width: mobile ? "6dvw" : "5dvw",
                            height: mobile ? "6dvw" : "5dvw",
                        }}></Instagram>
                        </Link>
                        <Link href='https://www.linkedin.com/company/innova-consultoria-junior'>
                        <LinkedIn sx={{
                            color: "white",
                            width: mobile ? "6dvw" : "5dvw",
                            height: mobile ? "6dvw" : "5dvw",
                        }}></LinkedIn>
                        </Link>
                </div>
                {tablet && (
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", top: "5%"}}>
                        <Typography sx={{
                        fontSize: "1.4dvw",
                        fontWeight: "100",
                        lineHeight: "17px",
                        display: "flex",
                        textAlign: "center",
                        position: "relative",
                        color: "white"
                    }}>Faculdade de Ciências e Tecnologia
                    <br/>Universidade Nova de Lisboa</Typography>
                    <Typography sx={{
                        fontSize: "1.4dvw",
                        fontWeight: "100",
                        display: "flex",
                        textAlign: "center",
                        flexDirection: "column",
                        color: "white"
                    }}>Quinta da Torre, Caparica</Typography>
                    </div>
                    

                )}
                </div>
                
            </footer> 
            )
            
        }
        
    }

export default Footer