import { Box, Typography, styled, Button} from '@mui/material'
import React from 'react'

import SoftwareSolutions from '../images/HomePageImages/SoftwareSolutions.png'

const CoreBusiness = () => {

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
    
  return (
    <Box className="Our Services" sx={{
        display: "flex",
        width: "95%",
        height: "100vh",
        borderRadius: "0 30px 30px 0",
        background: "linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))",
    }}>
        <Box sx={{
            position: "absolute",
            left: "0",
            width: "95%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "right"
        }}>
            <img src={SoftwareSolutions}/>
        </Box>
        
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
  )
}

export default CoreBusiness