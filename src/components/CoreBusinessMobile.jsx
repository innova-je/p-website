import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ServiceBox = ({ imgSrc, title, textWidth, description, imageStyle, bgColor}) => {  

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "row", width: "120vw", columnGap: "20%"}}>
      <Box  sx={{
        width: "70%",
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 0 0 7%'
      }}>
        <Typography sx={{
          fontSize: '3.5vw',
          fontWeight: '300',
          color: '#FFFFFF6E',
          marginTop: '10%',
        }}>What we do</Typography>
        <Typography sx={{
          fontSize: '8vw',
          fontWeight: '700',
          color: 'white',
          lineHeight: "110%",
          marginTop: "3%",
          textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
        }}>{title}</Typography>
        <Typography sx={{
          fontSize: "3.5vw",
          fontWeight: '300',
          color: 'white',
          marginTop: '5%',
          lineHeight: "130%",
          width: textWidth
        }}>{description}</Typography>

      </Box>

      <Box sx={{
        position: 'relative',
        height: '100%',
        width: "40%",
        display: 'flex',
        justifyContent: 'right'
      }}>
        {<img src={imgSrc} style={imageStyle} />} 
      </Box>
         
    </div>      
    
  );
};

const SoftwareSolutionsMobile = () => (
  
  <ServiceBox
    id="softwareSolutions"
    imgSrc={require('../images/HomePageImages/SoftwareSolutions.png')}
    title="Software Solutions"
    description="With tailored solutions and cutting-edge technologies, we craft impactful software that propels businesses forward."
    buttonLabel="Services"
    imageStyle={{ width: '100%', marginRight: "10%", transform: "scale(2.5)"}}
    textWidth="90%"
    bgColor ="purple"
  />
);

const MobileDevelopmentMobile = () => {

  return (
  <ServiceBox
  id="MobileDevelopment"
  imgSrc={require('../images/HomePageImages/MobileDevelopment.png')}
  title="Mobile Development"
  description="In-Nova creates intuitive apps that redefine user experiences and drive seamless interactions on various devices, empowering businesses in the digital realm."
  buttonLabel="Services"
  imageStyle={{ width: '100%', marginRight: "40%", marginTop: "20%", transform: "scale(1.4)"}}
  textWidth="92%"
  bgColor ="green"
  />);
}
  

const RoboticsPrototypingMobile = () => (
  <ServiceBox
    id="roboticsPrototyping"
    imgSrc={require('../images/HomePageImages/RoboticsPrototyping.png')}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping. In-Nova pioneers innovative solutions, bringing futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: '100%', marginRight: "60%", marginTop: "30%", transform: "scale(2.5)"}}
    textWidth="97%"
    bgColor= "red"
  />
);

export { SoftwareSolutionsMobile, MobileDevelopmentMobile, RoboticsPrototypingMobile };