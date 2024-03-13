import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const ServiceBox = ({ imgSrc, title, textWidth, description, imageStyle}) => {  

  return (
    <div style={{display: "flex", flexDirection: "row", width: "120vw"}}>
      <Box  sx={{
        width: "60%",
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 0 0 7%',
        overflow: 'hidden',
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
        width: "35%",
        alignItems: 'center',
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
    imageStyle={{ width: '100%', marginRight: "-10%", transform: "scale(2)"}}
    textWidth="75%"
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
  imageStyle={{ width: '100%', marginRight: "0%", transform: "scale(1.2)"}}
  textWidth="80%"
  />);
}
  

const RoboticsPrototypingMobile = () => (
  <ServiceBox
    id="roboticsPrototyping"
    imgSrc={require('../images/HomePageImages/RoboticsPrototyping.png')}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping, In-Nova pioneers innovative solutions, blending expertise and creativity to push the boundaries of technology and bring futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: '100%', marginRight: "20%", transform: "scale(2.4)"}}
    textWidth="85%"
  />
);

export { SoftwareSolutionsMobile, MobileDevelopmentMobile, RoboticsPrototypingMobile };