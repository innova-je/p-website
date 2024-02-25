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


const accomplishmentsData = [
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "janeiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "fevereiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "março 2024"},
  ];


const Home = () => {

    const StatsBox = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }));

    const statsStyle = {
        fontSize: "4.5vw",
        color: "#732043",
        fontWeight: "700"
    };

    const underStatsStyle = {
        fontSize: "1.5vw",
        color: "#732043",
        fontWeight: "500",
        marginTop: "-5%"
    };

    const navigate = useNavigate();

    const handleNavLinkClick = (path) => {
        navigate.push(path);
        window.scrollTo(0, 0);
      };


      const ourServicesRef = useRef();

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
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

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
        }}>
            <Typography sx={{
                position: "relative",
                textAlign: "center",
                height: "100%",
                fontWeight: "853",
                fontSize: "9vw",
                lineHeight: "200px",
                letterSpacing: "0.16em",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                backgroundImage: "radial-gradient(circle, #052533, #631436)",
            }}>INNOVATING </Typography>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                gap: "35px",
                width: "95%"
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
                    fontSize: "9vw",
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
            margin: "3% 0 0 8%",
            height: "100%",
        }}>
            <Typography sx={{
                color: "#052533",
                fontSize: "3vw",
                fontWeight: "600"
            }}>Your Go-To</Typography>
            <Typography sx={{
                marginTop: "-2%",
                color: "#732043",
                fontSize: "4.5vw",
                fontWeight: "700"
            }}>Technology Consultants</Typography>   

            <NavLink to="/about-us" style={{textDecoration: "none"}} onClick={() => handleNavLinkClick('/about-us')}>
                <Typography sx={{
                marginRight: "5%",
                display: "flex",
                justifyContent: "right",
                marginTop: "-2%",
                color: "#732043",
                fontSize: "1.2vw",
                fontWeight: "400",
            }}>Find more about us &rarr;</Typography>         
            </NavLink>     
            
        <Box sx={{
            position: "relative",
            height: "100vh",
            marginTop: "3%",
            overflow: "hidden"
        }}>
            <Box
            sx={{
                position: "absolute",
                width: "100%",
                height: "70%",
                background: "linear-gradient(to left, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))",
                borderRadius: "30px",
                zIndex: 1,
            }}
            />
            <img src={HomePageImg} style={{
                borderRadius: "30px",
                marginLeft: "auto",
                height: "70%",
                width: "100%",
                objectFit: "cover",
                position: "absolute",
                right: 0,
            }}/>

            <div style={{
                position: "relative",
                top: "65%",
                right: "-2%",
                width: "95%",
                height: "10%",
                backgroundColor: "#052533",
                borderRadius: "30px",
                border: "9px solid #F0F0F0",
                margin: "-1% 0 0 auto",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                zIndex: 3
            }}>
                <Box sx={{
                    width: "5px",
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
                    fontSize: "2vw",
                    fontWeight: "300",                    
                }}>We work to <i>inspire</i> people & businesses</Typography>
            </div>

            <div style={{
                position: "relative",
                top: "70%",
                right: "-2%",
                width: "85%",
                height: "10%",
                backgroundColor: "white",
                borderRadius: "30px",
                margin: "-1% 0 0 auto",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
            }}>
                <Box sx={{
                    width: "5px",
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
                    fontSize: "2vw",
                    fontWeight: "300", 
                }}>And we also take pride in what we do and aim to go beyond</Typography>
            </div>
            

        </Box>

        </Box>
             
        <Box sx={{
            width: "85%",
            height: "30vh",
            display: "flex",
            flexDirection: "row",
            gap: "10%",
            margin: "0 auto",
            marginTop: "-5%",
            marginBottom: "5%",
            alignItems: "center",
            justifyContent: "center",
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
        
        <section ref={ourServicesRef} style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always' }}>
            <OurServices></OurServices>
        </section>

        <Box sx={{marginTop: "5%"}}>   

            <Typography style={{
                width: "100%",
                textAlign: "center",
                justifyContent: "center",
                color: "#732043",
                fontWeight: "700",
                fontSize: "3.5vw",
            }}>Our Latest Accomplishments</Typography>
            <Box sx={{
                width: "100vw",
                height: "70vh",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "5%",
                marginTop: "3%"
            }}>
                
            {accomplishmentsData.map((accomplishment) => (
                <Accomplishment
                description={accomplishment.description}
                image={accomplishment.image}
                date={accomplishment.date}
                />
            ))}
            </Box>
            
        </Box>             

        <Box sx={{backgroundColor: "#F0F0F0", scrollSnapAlign: "start", scrollSnapStop: "always"}}>
            <ClientsCarousel></ClientsCarousel>
            <OurPartners></OurPartners> 
        </Box>
               

        </Box>
        </>
        
 
    )
}

export default Home