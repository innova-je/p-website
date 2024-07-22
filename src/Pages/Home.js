import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react';

import BgVideo from '../videos/HomePageVideo.mp4'
import HomePageImg from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'
import newsImage from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'

import CoreBusiness, { MobileDevelopment, RoboticsPrototyping, SoftwareSolutions } from '../components/CoreBusiness'
import ClientsCarousel from '../components/ClientsCarousel'
import OurPartners from '../components/OurPartners'
import OurServices from '../components/OurServices'
import OurServicesAnimated from '../components/OurServicesAnimated';
import Accomplishment from '../components/AccomplishmentComponent';

import { NavLink, useNavigate } from 'react-router-dom';
import ServicesCarousel from '../components/ServicesCarousel';
import { useMediaQuery } from 'react-responsive';
import AccomplishmentSlider from '../components/AccomplishmentSlider';
import ServicesSlider from '../components/ServicesSlider';

const accomplishmentsData = [
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "janeiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "fevereiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "março 2024"},
  ];


const Home = () => {

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

    const StatsBox = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }));

    const statsStyle = {
        fontSize: mobile ? "9vw" : (tablet ? "5vw" : "5vw"),
        color: "#732043",
        fontWeight: "700"
    };

    const underStatsStyle = {
        fontSize: mobile ? "4vw" : (tablet ? "1.9vw" : "1.8vw"),
        color: "#732043",
        fontWeight: "500",
        marginTop: "-5%"
    };

    const handleNavLinkClick = () => {
        window.scrollTo(0, 0);
      };

    return (
        <>
        <Box sx={{
            backgroundColor: "#F0F0F0",
            overflow: "hidden",
        }}>
        
        <div style={{
            height: mobile ? "50vh" : "100dvh",
            width: "100dvw",
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 0 30px 30px"
        }}>
        <video 
            src={BgVideo} 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{
                objectFit: "cover",
                opacity: "50%",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0
        }}/>

        <Box sx={{
            width: "100%",//TODO: Este título não está bem
            position: "relative",
            top: "40%",
            display: "flex",
            flexDirection: "column",
            zIndex: "1",
            }}>
            <div style={{backgroundColor: "transparent", width: "100%"}}>
                <Typography sx={{
                position: "relative",
                textAlign: "center",
                width: mobile ? "95%" : (tablet ? "95%" : "95%"),
                height: "100%",
                fontWeight: "853",
                fontSize: (desktop ? "9dvw" : (tablet ? "10dvw" : "11dvw")),
                lineHeight: (desktop ? "130%" : (tablet ? "100%" : "110%")),
                letterSpacing: desktop ? "1.8vw" : (tablet ? "1.5vw" : "1vw"),
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundImage: "radial-gradient(circle, #052533, #631436)",
            }}>INNOVATING </Typography>
            </div>
            

            <Box sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Typography sx={{
                    marginLeft: desktop ? "17%" : (tablet ? "15%" : "9%"),
                    fontWeight: "500",
                    fontSize: (desktop ? "4dvw" : (tablet ? "3.5dvw" : "5dvw")),
                    letterSpacing: "0.16em",
                    color: "#052533",
                    paddingRight: mobile ? 1 : 2
                }}>with </Typography>
                <Typography sx={{
                    marginTop: "-3%",
                    width: "100%",
                    zIndex: 5,
                    fontWeight: "853",
                    fontSize: (desktop ? "9dvw" : (tablet ? "10dvw" : "11dvw")),
                    letterSpacing: "0.16em",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage: "radial-gradient(circle, #052533, #631436)",
                }}>NO LIMITS </Typography>
            </Box>
        </Box>

        </div>
        
            
        <Box sx={{
            position: "relative",
            margin: desktop ? "3% 0 0 8%" : "10% 0 0 8%",
        }}>

        <div style={{display: "flex", flexDirection: desktop ? "row" : "column"}}>
            <div style={{display: "flex", flexDirection: "column", width: desktop ? "75%" : "100%"}}>
                <Typography sx={{
                    color: "#052533",
                    fontSize: (desktop ? "3dvw" : (tablet ? "3.5dvw" : "6.5dvw")),
                    fontWeight: "600"
                }}>Your Go-To</Typography>
                <Typography sx={{
                    marginTop: "-2%",
                    color: "#732043",
                    fontSize: (desktop ? "4.5dvw" : (tablet ? "5.5dvw" : "7.5dvw")),
                    fontWeight: "700"
                }}>Technology Consultants</Typography>   
            </div>

            <div style={{width: desktop ? "25%" : "100%", display: "flex", justifyContent: desktop ? "center" : "left",  alignItems: "end"}}>
               <NavLink to="/about-us" style={{textDecoration: "none"}} onClick={() => handleNavLinkClick()}>
                <Typography sx={{
                display: "flex",
                color: "#732043",
                fontSize: desktop ? "1.8vw" : (tablet ? "2.5vw" : ""),
                fontWeight: "400",
                marginBottom: "8%"
            }}>Find more about us &rarr;</Typography>         
            </NavLink> 
            </div>         
   
        </div>
            
        <div>
           <Box sx={{
            position: "relative",
            height: desktop ? "85dvh" : (tablet ? "70dvh" : "50dvh"),
            marginTop: "3%",
            overflow: "hidden"
        }}>
            <div className='gradientLayer' 
            style={{
                position: "absolute",
                width: "100%",
                height: desktop ? "70%" : (tablet ? "90%" : "70%"),
                background: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
                borderRadius: "30px 0 0 30px",
                zIndex: 1,
            }}
            />
            <img className='homePageImg' src={HomePageImg} style={{
                borderRadius: "20px 0 0 20px",
                marginLeft: "auto",
                height: "70%",
                width: "100%",
                objectFit: "cover",
                position: "absolute",
                right: 0,
            }}/>

            <div style={{display: "flex", flexDirection: "column", position: "relative", top: "65%", height: desktop ? "30%" : (tablet ? "40%" : "40%" )}}>
               <div style={{
                position: "relative",
                right: "-5%",
                width: "95%",
                height: "30%",
                backgroundColor: "#052533",
                borderRadius: "20px 0 0 20px",
                border: desktop ? "9px solid #F0F0F0" : "6px solid #F0F0F0",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                zIndex: 3
            }}>
                <Box sx={{
                    width: desktop ? "5px" : "2px",
                    height: "60%",
                    background: "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))",
                    marginLeft: "5%",
                    borderRadius: "5px"
                }}>
                </Box>
                <Typography sx={{
                    marginLeft: "4%",
                    textAlign: "left",
                    color: "white",
                    fontSize: (desktop ? "2vw" : (tablet ? "2.5dvw" : "3dvw")),
                    fontWeight: "300",                    
                }}>We work to <i>inspire</i> people & businesses</Typography>
            </div>

            <div style={{
                position: "relative",
                right: "-10%",
                width: "95%",
                height: "30%",
                backgroundColor: "white",
                borderRadius: "20px 0 0 20px",
                border: desktop ? "9px solid #F0F0F0" : "6px solid #F0F0F0",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                zIndex: 3
            }}>
                <Box sx={{
                    width: desktop ? "5px" : "2px",
                    height: "60%",
                    background: "linear-gradient(to bottom, rgba(5, 37, 51, 1), rgba(5, 37, 51, 0))",
                    marginLeft: "5%",
                    borderRadius: "5px"
                }}>
                </Box>
                <Typography sx={{
                    marginLeft: "4%",
                    textAlign: "left",
                    color: "#052533",
                    fontSize: (desktop ? "2vw" : (tablet ? "2.5dvw" : "3dvw")),
                    fontWeight: "300", 
                    lineHeight: "12px"
                }}>And we also take pride in what we do and aim to go beyond</Typography>
            </div> 

            </div>            
            
        </Box> 
        </div>
        

        </Box>

        <div style={{marginTop: desktop ? "0%" : (tablet ? "0%" : "3%")}}>
             
        <Box sx={{
            width: mobile ? "77%" : "85%",
            height: "auto",
            display: mobile ? "grid" : (tablet ? "flex" : "flex"),
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: mobile ? "2%" : (tablet ? "10%" : "10%"),            
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <StatsBox>
                <Typography style={statsStyle}>3</Typography>
                <Typography style={underStatsStyle}>Years of In-Nova</Typography>
            </StatsBox>
            <StatsBox>
                <Typography style={statsStyle}>+25</Typography>
                <Typography style={underStatsStyle}>Projects Completed</Typography>
            </StatsBox>
            <StatsBox>
                <Typography style={statsStyle}>9.5/10</Typography>
                <Typography style={underStatsStyle}>Overall Satisfaction</Typography>
            </StatsBox>
            <StatsBox>
                <Typography style={statsStyle}>+60</Typography>
                <Typography style={underStatsStyle}>Members</Typography>
            </StatsBox>
        </Box>
        </div>

        <div style={{height: "auto", background:'linear-gradient(to bottom, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0))', marginTop: mobile ? "3%" : ""}}>
            <OurServicesAnimated></OurServicesAnimated>
            <div style={{ marginTop: mobile ? "12%" : (tablet ? "15%" : "15%")}}>
                <AccomplishmentSlider accomplishmentsData={accomplishmentsData}></AccomplishmentSlider>
            </div>        
        </div>

        <ClientsCarousel/>
        <OurPartners/> 
            
        </Box>
        </>
        
 
    )
}

export default Home