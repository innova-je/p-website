import React, { useEffect, useState, useRef } from 'react';
import { Typography, useTheme } from '@mui/material';
import CustomButton from '../../../components/CustomButton';
import { Parallax } from 'react-scroll-parallax';
import CircleIcon from '@mui/icons-material/Circle';

const ServiceBox = ({ imgSrc, title, description, buttonLabel, imageStyle, textWidth, innerStyle, parallaxProps, circle1, circle2, circle3 }) => {
  const theme = useTheme();
  const boxRef = useRef(null);
  const [fontSize, setFontSize] = useState('1.5vw');

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
    <Parallax {...parallaxProps}>
      <div className="Our Services" id="canva" style={innerStyle} ref={boxRef}>
        <div>
          <div style={{
            position: 'absolute',
            left: '0',
            width: '100%',
            height: '100%',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'right',
          }}>
            <img src={imgSrc} style={imageStyle} alt="Service" />
          </div>
          <div style={{
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
            <CustomButton customBackgroundColor={theme.palette.primary.main} style={{ marginTop: '8%' }}>
              <Typography sx={{ zIndex: "2" }}>{buttonLabel}</Typography>
              <Typography sx={{ zIndex: "2" }}> &rarr;</Typography>
            </CustomButton>
            <div style={{
              margin: "5% 0 0 0"
            }}>
              <CircleIcon style={{ height: "40%", color: circle1 }} />
              <CircleIcon style={{ height: "40%", color: circle2 }} />
              <CircleIcon style={{ height: "40%", color: circle3 }} />
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

const SoftwareSolutions = () => (
  <ServiceBox
    id="softwareSolutions"
    imgSrc={require('../Assets/Images/HomePageImages/SoftwareSolutions.png')}
    title="Software Solutions"
    description="With tailored solutions and cutting-edge technologies, we craft impactful software that propels businesses forward."
    buttonLabel="Services"
    imageStyle={{ width: '70%', marginRight: '-20%' }}
    textWidth="40%"
    innerStyle={{
      display: 'flex',
      height: "100vh",
    }}
    parallaxProps={{
      translateY: [40, -40],
      translateX: [50, -50],
      scale: [0.5, 1.5],
      opacity: [5, 0],
    }}
    circle1="grey"
    circle2="white"
    circle3="white"
  />
);

const MobileDevelopment = () => (
  <ServiceBox
    id="mobileDevelopment"
    imgSrc={require('../Assets/Images/HomePageImages/MobileDevelopment.png')}
    title="Mobile Development"
    description="In-Nova creates intuitive apps that redefine user experiences and drive seamless interactions on various devices, empowering businesses in the digital realm."
    buttonLabel="Services"
    imageStyle={{ width: '35%', marginRight: '5%' }}
    textWidth="48%"
    innerStyle={{
      display: 'flex',
      height: "100vh",
    }}
    parallaxProps={{
      translateX: [-30, 40],
      translateY: [0, -40],
      scale: [0.5, 1.5],
      opacity: [5, 0],
    }}
    circle1="white"
    circle2="grey"
    circle3="white"
  />
);

const RoboticsPrototyping = () => (
  <ServiceBox
    id="roboticsPrototyping"
    imgSrc={require('../Assets/Images/HomePageImages/RoboticsPrototyping.png')}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping, In-Nova pioneers innovative solutions, blending expertise and creativity to push the boundaries of technology and bring futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: '60%', marginRight: '-5%' }}
    textWidth="55%"
    innerStyle={{
      display: 'flex',
      height: "100vh",
    }}
    parallaxProps={{
      translateX: [-30, 40],
      translateY: [0, -40],
      scale: [0.5, 1.5],
      opacity: [5, 0],
    }}
    circle1="white"
    circle2="white"
    circle3="grey"
  />
);

export { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping };
