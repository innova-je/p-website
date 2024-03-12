import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react';

import BgVideo from '../videos/HomePageVideo.mp4'
import HomePageImg from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'
import newsImage from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'

import CoreBusiness from '../components/CoreBusiness'
import ClientsCarousel from '../components/ClientsCarousel'
import OurPartners from '../components/OurPartners'
import OurServices from '../components/OurServices'
import OurServicesAnimated from '../components/OurServicesAnimated';
import Accomplishment from '../components/AccomplishmentComponent';

import { NavLink, useNavigate } from 'react-router-dom';
import ServicesCarousel from '../components/ServicesCarousel';
import { useMediaQuery } from 'react-responsive';
import AccomplishmentSlider from '../components/AccomplishmentSlider';

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

    const handleNavLinkClick = (path) => {
        window.scrollTo(0, 0);
      };


      const ourServicesRef = useRef();

      /*
      useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
          const threshold = ourServicesRef.current.offsetTop + window.innerHeight/10;
    
          if (scrollPosition >= threshold && scrollPosition <= 2*threshold) {
            // Disable page scroll
            document.body.style.overflow = 'auto';
            //alert("chegaste")
          } else {
            // Enable page scroll
            document.body.style.overflow = 'auto';
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          // Cleanup the event listener on component unmount
          //window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      */

    return (
        <>
        <Box sx={{
            backgroundColor: "#F0F0F0",
            height: "100%",
            scrollSnapType: "y mandatory",
            overflow: "hidden",
        }}>
        
        <div style={{
            height: "100vh",
            width: "100vw",
            position: "relative",
            overflow: "hidden",
            borderRadius: "0 0 30px 30px"
        }}>
        <video 
            src={BgVideo} 
            autoPlay 
            loop 
            muted 
            style={{
                objectFit: "cover",
                opacity: "50%",
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0
        }}/>
        </div>
        
            <Box sx={{
            width: "100%",//TODO: Este título não está bem
            position: "absolute",
            top: "45%",
            zIndex: "1",
            //backgroundColor: "red"
        }}>
            <div style={{backgroundColor: "transparent", width: "100%"}}>
                <Typography sx={{
                position: "relative",
                textAlign: "center",
                height: "100%",
                fontWeight: "853",
                fontSize: (desktop ? "9dvw" : (tablet ? "9dvw" : "11dvw")),
                lineHeight: (desktop ? "200px" : (tablet ? "125px" : "50px")),
                letterSpacing: "0.16em",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundImage: "radial-gradient(circle, #052533, #631436)",
            }}>INNOVATING </Typography>
            </div>
            

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "35px"
            }}>
                <Typography sx={{
                    marginLeft: "17%",
                    fontWeight: "500",
                    fontSize: "4vw",
                    letterSpacing: "0.16em",
                    color: "#052533",
                }}>with </Typography>
                <Typography sx={{
                    marginTop: "-3%",
                    fontWeight: "853",
                    fontSize: (desktop ? "9dvw" : (tablet ? "9dvw" : "11dvw")),
                    letterSpacing: "0.16em",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage: "radial-gradient(circle, #052533, #631436)",
                }}>NO LIMITS </Typography>
            </Box>
        </Box>
        


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
            height: desktop ? "85vh" : "50vh",
            marginTop: "3%",
            overflow: "hidden"
        }}>
            <div className='gradientLayer' 
            style={{
                position: "absolute",
                width: "100%",
                height: "70%",
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

        <div style={{marginTop: desktop ? "-2%" : (tablet ? "0%" : "-2%")}}>
             
        <Box sx={{
            width: "85%",
            height: "30vh",
            display: mobile ? "grid" : (tablet ? "flex" : "flex"),
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: mobile ? "0%" : (tablet ? "10%" : "10%"),
            margin: "0 auto",
            marginBottom: "5%",
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
        
        
        <section ref={ourServicesRef} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
            <OurServices></OurServices>
        </section>

        <Box sx={{marginTop: mobile ? "15%" : "5%"}}>   

            <Typography style={{
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                color: "#732043",
                fontWeight: "700",
                fontSize: (desktop ? "3.5dvw" : (tablet ? "4dvw" : "6.5dvw")),
            }}>Our Latest Accomplishments</Typography>
            <AccomplishmentSlider accomplishmentsData={accomplishmentsData}></AccomplishmentSlider>
            
        </Box>             

        <Box sx={{backgroundColor: "#F0F0F0", scrollSnapAlign: "start", scrollSnapStop: "always"}}>
            <ClientsCarousel/>
            <OurPartners/>
        </Box>
            
        </Box>
        </>
        
 
    )
}

export default Home