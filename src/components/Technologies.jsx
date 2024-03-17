import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';

// images
import android from '../images/Icons/android-icon.png';
import apple from '../images/Icons/apple-icon.png';
import arduino from '../images/Icons/arduino-icon.png';
import canva from '../images/Icons/canva-icon.png';
import excel from '../images/Icons/excel-icon.png';
import figma from '../images/Icons/figma-icon.png';
import github from '../images/Icons/github-icon.png';
import illustrator from '../images/Icons/illustrator-icon.png';
import instagram from '../images/Icons/instagram-icon.png';
import java from '../images/Icons/java-icon.png';
import javascript from '../images/Icons/javascript-icon.png';
import linkedin from '../images/Icons/linkedin-icon.png';
import notion from '../images/Icons/notion-icon.png';
import photoshop from '../images/Icons/photoshop-icon.png';
import premier from '../images/Icons/premier-icon.png';
import raspberrypi from '../images/Icons/raspberrypi-icon.png';
import react from '../images/Icons/react-icon.png';
import wordpress from '../images/Icons/wordpress-icon.png';
import html from '../images/Icons/html-icon.png';
import css from '../images/Icons/css-icon.png';
import c from '../images/Icons/c-icon.png';
import googlefirebase from '../images/Icons/googlefirebase-icon.png';
import teams from '../images/Icons/teams-icon.png';
import postman from '../images/Icons/postman-icon.png';
import solidworks from '../images/Icons/solidworks-icon.png';
import technologiesBg from '../images/other/technologies_background.webp'


import { useMediaQuery } from 'react-responsive';

const circleStyle = {
    borderRadius: '50%',
    border: '2px solid #818080',
    margin: '0 auto',
};

const imageStyle = {
    position: "absolute",
    width: '60px',
    height: '60px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    transition: 'transform 0.2s ease-in-out',
    filter: 'grayscale(100%)',
    zIndex: 1,
};

const Technologies = () => {
    const theme = useTheme();

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 });

    const distributeImages = (circleWidth, circleHeight, imageUrls, xwidth, xheight) => {
        const calcWidth = (circleWidth / window.innerWidth) * 100;
        const calcHeight = (circleHeight / window.innerHeight) * 100;

        const imagesArray = [];
        const numImages = imageUrls.length;
        const radiusX = circleWidth / 2;
        const radiusY = circleHeight / 2;

        for (let i = 0; i < numImages; i++) {
            const angle = (i / numImages) * 2 * Math.PI;
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);
            imagesArray.push(
                <div
                    key={i}
                    style={{
                        ...imageStyle,
                        //top: `calc(${calcHeight}vh + ${y}px)`,
                        //left: `calc(${calcWidth}vw + ${x}px)`,
                        backgroundImage: `url(${imageUrls[i % numImages]})`,
                        height: xheight,
                        width: xwidth
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.filter = 'grayscale(0)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                />
            );
        }
        return imagesArray;
    };

    const circle1Images = [
        html, wordpress, teams,postman , linkedin, illustrator, react, canva, excel, excel, excel  
    ];

    const circle2Images = [
        googlefirebase, photoshop, raspberrypi, javascript, javascript, excel, excel, java, notion, c, apple, excel, excel, excel, excel, excel, excel, excel, instagram,
    ];

    const circle3Images = [
        github, excel, solidworks, postman, postman, postman, postman, postman, arduino, premier, figma, css, postman, postman, postman, postman, postman, postman, postman, android
    ];

    return (         

            <div style={{
                background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8)),            
                url(${technologiesBg})`,
                overflow: "hidden",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: (mobile || smallMobile) ? "auto" : desktop || smallDesktop || tablet ? "30vmax" : largeDesktop ? "30vmax" : "40vw",
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                justifyContent: "center", 
                padding: largeDesktop ? "0% 0 0% 0" : smallMobile || mobile ? "5% 0 0 0" :  desktop || smallDesktop || tablet ? "0% 0 0 0" : 0
            }}>

            <div style={{
                background: mobile || smallMobile ? "none" : `linear-gradient(to bottom, rgba(255, 255, 255, 0.9), rgba(240, 240, 240, 0.8))`,
                height: "100%", position: "relative", padding: mobile || smallMobile ? "15% 0 0 0" : "12% 0 0 0", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start"}}>            
            <Typography variant="h4"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'Semi-Bold',
                                width: "100%",
                                textAlign: "center",
                                fontSize: smallDesktop ? '4dvw' : tablet ? '4.5dvw' : mobile ? '7dvw' : smallMobile ? '8dvw' : '2.5dvw',
                                marginTop: largeDesktop ? "-20%" : "-15%"
                            }}>
                            You will
                        </Typography>
                        <Typography variant="h2"
                            sx={{
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'Bold',
                                textAlign: "center",
                                fontSize: smallDesktop ? '5.5dvw' : tablet ? '6dvw' : mobile ? '9dvw' : smallMobile ? '10dvw' : '4.5dvw',
                            }}>
                            learn something
                        </Typography>
                        <Typography variant="h3"
                            sx={{
                                marginBottom: '20px',
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'bold',
                                opacity: '0.66',
                                textAlign: "center",
                                fontSize: smallDesktop ? '4.5dvw' : tablet ? '5dvw' : mobile ? '6.5dvw' : smallMobile ? '8.5dvw' : '3.5dvw',
                            }}>
                            every.single.day
                        </Typography>
                        <Typography variant="body1"
                            sx={{
                                textAlign: 'center',
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: "Medium",
                                textAlign: "center",
                                width: "80%",
                                paddingBottom: "10%",
                                fontSize: smallDesktop ? '1.3dvw' : tablet ? '1.8dvw' : mobile ? '3.5dvw' : smallMobile ? '4.6dvw' : '1.2dvw',

                            }}>
                            These are some technologies we use.<br />
                            If you have something new to teach us,  join the team!
                        </Typography>
            </div>

            </div>
     
    );
};

export default Technologies;