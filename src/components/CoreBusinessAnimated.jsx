import React, { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from './CustomButton';

const ServiceBox = ({ title, description, buttonLabel, textWidth , innerStyle}) => {  


  const boxRef = useRef(null);
  const [fontSize, setFontSize] = useState('1.5vw'); // Default font size

  useEffect(() => {
    const handleResize = () => {
      const boxElement = boxRef.current;

      if (boxElement) {
        const boxWidth = boxElement.offsetWidth;

        const calculatedFontSize = `${(boxWidth / 100) * 2}vw`;

        setFontSize(calculatedFontSize);
      }
    };
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

      <Box  className="Our Services" id="canva" style={innerStyle}>

      <Box>
      <Box sx={{
        position: 'absolute',
        left: '0',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'right',
      }}>
        
      </Box>

      <Box  sx={{
        width: textWidth,
        height: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '0 0 0 7%',
        overflow: 'hidden',
      }}>
        <Typography sx={{
          fontSize: '2vw',
          fontWeight: '300',
          color: '#FFFFFF6E',
          marginTop: '12%',
        }}>What we do</Typography>
        <Typography sx={{
          fontSize: '7vw',
          fontWeight: '700',
          color: 'white',
          lineHeight: '18vh',
          textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
        }}>{title}</Typography>
        <Typography sx={{
          fontSize: fontSize,
          fontWeight: '300',
          color: 'white',
          marginTop: '5%',
          width: '100%',
        }}>{description}</Typography>

        <CustomButton customBackgroundColor="#732043" sx={{marginTop: '8%'}}>
          <Typography sx={{zIndex: "2"}}>{buttonLabel}</Typography>
          <Typography sx={{zIndex: "2"}}> &rarr;</Typography>
        </CustomButton>
      </Box>
      </Box>
      
    </Box>      
    
  );
};

const SoftwareSolutions = () => (
  <ServiceBox
    id="softwareSolutions"
    imgSrc={require('../images/HomePageImages/SoftwareSolutions.png')}
    title="Software Solutions"
    description="With tailored solutions and cutting-edge technologies, we craft impactful software that propels businesses forward."
    buttonLabel="Services"
    imageStyle={{ width: '70%', marginRight:" -20%"}}
    textWidth="40%"
    innerStyle={{
      height: "101vh",
      overflow: "hidden",
      background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',
      scrollSnapType: "y mandatory"
    }}
  />
);

const MobileDevelopment = () => (
  <ServiceBox
    id="mobileDevelopment"
    imgSrc={require('../images/HomePageImages/MobileDevelopment.png')}
    title="Mobile Development"
    description="In-Nova creates intuitive apps that redefine user experiences and drive seamless interactions on various devices, empowering businesses in the digital realm."
    buttonLabel="Services"
    imageStyle={{ width: '35%', marginRight: '5%' }}
    textWidth="48%"
    innerStyle={{
      display: 'flex',
      height: "101vh",
      overflow: "hidden",
      background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',
      scrollSnapType: "y mandatory"
    }}
  />
);

const RoboticsPrototyping = () => (
  <ServiceBox
    id="roboticsPrototyping"
    imgSrc={require('../images/HomePageImages/RoboticsPrototyping.png')}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping, In-Nova pioneers innovative solutions, blending expertise and creativity to push the boundaries of technology and bring futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: '60%', marginRight: '-5%' }}
    textWidth="55%"
    innerStyle={{
      display: 'flex',
      height: "101vh",
      overflow: "hidden",
      background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',
      scrollSnapType: "y mandatory"
    }}
  />
);

export { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping };