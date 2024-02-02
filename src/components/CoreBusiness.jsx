import React from 'react';
import { Box, Typography, styled, Button } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#732043',
  color: 'white',
  width: '10vw',
  height: '6vh',
  marginTop: '8%',
  fontWeight: '400',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'row',
  gap: '10%',
  transition: 'transform 0.3s ease-in-out',

  '&:hover': {
    backgroundColor: 'white',
    color: '#732043',
    border: '1px solid #732043',
    transform: 'scale(1.05)',
  },
}));

const ServiceBox = ({ imgSrc, title, description, buttonLabel, imageStyle, textWidth }) => (
  <Box className="Our Services" sx={{
    display: 'flex',
    width: '95%',
    height: '101vh',
    borderRadius: '0 30px 30px 0',
    background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',
  }}>
    <Box sx={{
      position: 'absolute',
      left: '0',
      width: '95%',
      height: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'right',
    }}>
      <img src={imgSrc} style={imageStyle} />
    </Box>

    <Box sx={{
      width: textWidth,
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      margin: '0 0 0 7%',
    }}>
      <Typography sx={{
        fontSize: '2vw',//Not sure about this
        fontWeight: '300',
        color: '#FFFFFF6E',
        marginTop: '12%',
      }}>What we do</Typography>
      <Typography sx={{
        fontSize: '7vw',
        fontWeight: '700',
        color: 'white',
        lineHeight: '18vh',//Not sure about this
        textShadow: '4px 4px 4px rgba(0, 0, 0, 0.3)',
      }}>{title}</Typography>
      <Typography sx={{
        fontSize: '1.8vw',//Not sure about this
        fontWeight: '300',
        color: 'white',
        marginTop: '5%',
        width: '100%',
      }}>{description}</Typography>

      <StyledButton>
        <Typography>{buttonLabel}</Typography>
        <Typography> &rarr;</Typography>
      </StyledButton>
    </Box>
  </Box>
);

const SoftwareSolutions = () => (
  <ServiceBox
    imgSrc={require('../images/HomePageImages/SoftwareSolutions.png')}
    title="Software Solutions"
    description="With tailored solutions and cutting-edge technologies, we craft impactful software that propels businesses forward."
    buttonLabel="Services"
    imageStyle={{ width: '50%' }}
    textWidth="40%"
  />
);

const MobileDevelopment = () => (
  <ServiceBox
    imgSrc={require('../images/HomePageImages/MobileDevelopment.png')}
    title="Mobile Development"
    description="In-Nova creates intuitive apps that redefine user experiences and drive seamless interactions on various devices, empowering businesses in the digital realm."
    buttonLabel="Services"
    imageStyle={{ width: '35%', marginRight: '5%' }}
    textWidth="46%"
  />
);

const RoboticsPrototyping = () => (
  <ServiceBox
    imgSrc={require('../images/HomePageImages/RoboticsPrototyping.png')}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping, In-Nova pioneers innovative solutions, blending expertise and creativity to push the boundaries of technology and bring futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: '60%', marginRight: '-5%' }}
    textWidth="55%"
  />
);


export default SoftwareSolutions;