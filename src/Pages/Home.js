import { Box, Typography} from '@mui/material'
import React from 'react'

import BgVideo from '../videos/HomePageVideo.mp4'

const Home = () => {


    

    return (
        
            <Box sx={{
            width: "100%",
            height: "100vh",
            position: "relative",
            top: 0,
        }}>
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

        <Typography>Your go-to technology consultants</Typography>        
        
        </Box>
        
        
        

        
        
        
    )
}

export default Home