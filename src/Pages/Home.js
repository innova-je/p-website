import { Box, Typography, styled } from '@mui/material'
import React from 'react'

import BgVideo from '../videos/HomePageVideo.mp4'
import HomePageImg from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'

import CoreBusiness from '../components/CoreBusiness'
import ClientsCarousel from '../components/ClientsCarousel'
import OurPartners from '../components/OurPartners'

const Home = () => {

    const StatsBox = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }));

    const statsStyle = {
        fontSize: "5.5rem",
        color: "#732043",
        fontWeight: "700"
    };

    const underStatsStyle = {
        fontSize: "2rem",
        color: "#732043",
        fontWeight: "500",
        marginTop: "-5%"
    };

    return (
        
        <Box sx={{
            backgroundColor: "#F0F0F0",

        }}>
            <Box sx={{
            width: "100%",//TODO: Este título não está bem
            position: "absolute",
            top: "65%",
            transform: "translateY(-50%)",
            zIndex: "1",
        }}>
            <Typography sx={{
                position: "relative",
                textAlign: "center",
                height: "100%",
                fontWeight: "853",
                fontSize: "180px",
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
                width: "90%"
            }}>
                <Typography sx={{
                    marginLeft: "17%",
                    fontWeight: "500",
                    fontSize: "80px",
                    letterSpacing: "0.16em",
                    color: "#052533",
                }}>with </Typography>
                <Typography sx={{
                    marginTop: "-3%",
                    fontWeight: "853",
                    fontSize: "180px",
                    letterSpacing: "0.16em",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    backgroundImage: "radial-gradient(circle, #052533, #631436)",
                }}>NO LIMITS </Typography>
            </Box>
        </Box>

            
        <video src={BgVideo} width='100%' autoPlay loop muted style={{
            borderRadius: "0 0 30px 30px",
            opacity: "50%",
        }}/>

        <Box sx={{
            position: "relative",
            margin: "3% 0 0 8%",
            height: "100%",
        }}>
            <Typography sx={{
                color: "#052533",
                fontSize: "3rem",
                fontWeight: "600"
            }}>Your Go-To</Typography>
            <Typography sx={{
                marginTop: "-2%",
                color: "#732043",
                fontSize: "4.5rem",
                fontWeight: "700"
            }}>Technology Consultants</Typography>   

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
                <Typography sx={{
                    marginLeft: "8%",
                    textAlign: "left",
                    color: "white",
                    fontSize: "40px",
                    fontWeight: "400"
                }}>We work to inspire people & businesses</Typography>
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
                <Typography sx={{
                    marginLeft: "8%",
                    textAlign: "left",
                    color: "#052533",
                    fontSize: "44px",
                    fontWeight: "400"
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

        <CoreBusiness></CoreBusiness>

        <Box sx={{backgroundColor: "#F0F0F0"}}>
            <ClientsCarousel></ClientsCarousel>
            <OurPartners></OurPartners> 
        </Box>
               

        </Box>
 
    )
}

export default Home