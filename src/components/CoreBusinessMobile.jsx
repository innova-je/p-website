import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const ServiceBox = ({ imgSrc, title, textWidth, description, imageStyle, bgColor}) => {  

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div style={{display: "flex", alignItems: "center", flexDirection: "row", width: desktop ? "100vw" : "120vw", columnGap: "20%"}}>
      <Box  sx={{
        width: "70%",
        position: 'relative',
        height: "auto",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 0 0 6%'
      }}>
        <Typography sx={{
          fontSize: mobile ? '3.5vw' : (tablet ? "3.5vw" : "2vw"),
          fontWeight: '300',
          color: '#FFFFFF6E',
          marginTop: '10%',
        }}>What we do</Typography>
        <Typography sx={{
          fontSize: mobile ? '8vw' : (tablet ? "7vw" : "6vw"),
          fontWeight: '700',
          color: 'white',
          lineHeight: "110%",
          marginTop: "3%",
          textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
        }}>{title}</Typography>
        <Typography sx={{
          fontSize: mobile ? "4vw" : (tablet ? "3vw" : "2vw"),
          fontWeight: '300',
          color: 'white',
          marginTop: '5%',
          lineHeight: "130%",
          width: textWidth
        }}>{description}</Typography>

      </Box>

      <Box sx={{
        width: mobile ? "40%" : (tablet ? "40%" : "30%"),
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
    imageStyle={{ width: '100%', marginRight: "10%", marginTop: "15%", transform: "scale(2.6)"}}
    textWidth="90%"
  />
);

const MobileDevelopmentMobile = () => {

  return (
  <ServiceBox
  id="MobileDevelopment"
  imgSrc={require('../images/HomePageImages/MobileDevelopment.png')}
  title="Mobile Development"
  description="In-Nova creates intuitive apps that redefine user experiences and seamless interactions on various devices, empowering digital businesses."
  buttonLabel="Services"
  imageStyle={{ width: '100%', marginRight: "40%", marginTop: "25%", transform: "scale(1.5)"}}
  textWidth="93%"
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