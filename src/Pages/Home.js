import { AppBar, Box, Typography, styled, Button, ImageList, ImageListItem} from '@mui/material'
import React from 'react'

import BgVideo from '../videos/HomePageVideo.mp4'
import HomePageImg from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'
import Logo from '../images/logos/logos-03.png'

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
    }

    const ServicesButton = styled(Button)(({ theme }) => ({
        backgroundColor: "#732043",
        color: 'white',
        width: "10vw",
        height: "6vh",
        marginTop: "8%",
        fontWeight: '400',
        borderRadius: '16px',
        display: "flex",
        flexDirection: "row",
        gap: "10%",
        transition: 'transform 0.3s ease-in-out',
      
        '&:hover': {
          backgroundColor: "white",
          color: '#732043',
          border: "1px solid #732043",
          transform: 'scale(1.05)',
        },
      }));

      const ClientsAndPartners = styled(Box)(({ theme }) => ({
        position: "relative",
        marginTop: "5%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }));

      const ClientsLogosCarrousel = styled(ImageList)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "2%"
        
      }));

      const ClientsLogos = styled(ImageListItem)(({ theme }) => ({
        width: "10%",
        height: "10%",
        margin: "0 50px"
      }));

      const ClientsAndPartnersStyle = {
        textAlign: "center",
        justifyContent: "center",
        color: "#732043",
        fontWeight: "700",
        fontSize: "70px"
      };

    return (
        
        <Box>
            <Box sx={{
            width: "100%",
            position: "absolute",
            top: "65%",
            transform: "translateY(-50%)",
            zIndex: "1"
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

        <Box className="Our Services" sx={{
            width: "95%",
            height: "100vh",
            borderRadius: "0 30px 30px 0",
            background: "linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))",
        }}>
            <Box sx={{
                width: "40%",
                height: "100%",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                margin: "3% 0 0 7%",
            }}>
            <Typography sx={{
                fontSize: "35px",
                fontWeight: "300",
                color: "#FFFFFF6E",
                marginTop: "15%"
            }}>What we do</Typography>
            <Typography sx={{
                fontSize: "125px",
                fontWeight: "700",
                color: "white",
                lineHeight: "150px",
                textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)"  // Adjust the values as needed
            }}>Software Solutions</Typography>
            <Typography sx={{
                fontSize: "30px",
                fontWeight: "300",
                color: "white",
                marginTop: "8%"
            }}>With tailored solutions and cutting-edge technologies, we craft impactful
            software that propels businesses forward.</Typography>

            <ServicesButton>
                <Typography>Services</Typography>
                <Typography> &rarr;</Typography>
            </ServicesButton>

            </Box>
            
        </Box>

        <Box className='Who Trusted Us and Meet Our Partners' sx={{
            width: "100%"
        }}>
            <ClientsAndPartners>
                <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
                <ClientsLogosCarrousel>
                    <ClientsLogos>
                        <img src={Logo}/>
                    </ClientsLogos>
                    <ClientsLogos>
                        <img src={Logo}/>
                    </ClientsLogos>
                    <ClientsLogos>
                        <img src={Logo}/>
                    </ClientsLogos>
                    <ClientsLogos>
                        <img src={Logo}/>
                    </ClientsLogos>
                    <ClientsLogos>
                        <img src={Logo}/>
                    </ClientsLogos>
                </ClientsLogosCarrousel>
            </ClientsAndPartners>
            
            <ClientsAndPartners> 
                <Typography style={ClientsAndPartnersStyle}>Meet Our Partners</Typography>
            </ClientsAndPartners>

        </Box>


        </Box>

        
        
        
        

        
        
        
    )
}

export default Home