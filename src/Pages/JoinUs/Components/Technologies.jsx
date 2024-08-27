import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';

// images
import android from '../../../Assets/Images/Icons/android-icon.png';
import apple from '../../../Assets/Images/Icons/apple-icon.png';
import arduino from '../../../Assets/Images/Icons/arduino-icon.png';
import canva from '../../../Assets/Images/Icons/canva-icon.png';
import excel from '../../../Assets/Images/Icons/excel-icon.png';
import figma from '../../../Assets/Images/Icons/figma-icon.png';
import github from '../../../Assets/Images/Icons/github-icon.png';
import illustrator from '../../../Assets/Images/Icons/illustrator-icon.png';
import java from '../../../Assets/Images/Icons/java-icon.png';
import javascript from '../../../Assets/Images/Icons/javascript-icon.png';
import linkedin from '../../../Assets/Images/Icons/linkedin-icon.png';
import notion from '../../../Assets/Images/Icons/notion-icon.png';
import photoshop from '../../../Assets/Images/Icons/photoshop-icon.png';
import premier from '../../../Assets/Images/Icons/premier-icon.png';
import raspberrypi from '../../../Assets/Images/Icons/raspberrypi-icon.png';
import react from '../../../Assets/Images/Icons/react-icon.png';
import wordpress from '../../../Assets/Images/Icons/wordpress-icon.png';
import html from '../../../Assets/Images/Icons/html-icon.png';
import css from '../../../Assets/Images/Icons/css-icon.png';
import c from '../../../Assets/Images/Icons/c-icon.png';
import googlefirebase from '../../../Assets/Images/Icons/googlefirebase-icon.png';
import teams from '../../../Assets/Images/Icons/teams-icon.png';
import postman from '../../../Assets/Images/Icons/postman-icon.png';
import solidworks from '../../../Assets/Images/Icons/solidworks-icon.png';
import { useMediaQuery } from 'react-responsive';


const GrayScaleImage = ({ src, width, x, y, height }) => {
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const imageStyle = {
        filter: hovered ? 'none' : 'grayscale(100%)',
        transition: 'filter 0.3s  ease-in-out',
        transform: hovered ? 'scale(1.01)' : 'scale(1)',
        transition: 'transform 0.2s  ease-in-out',
    };

    return (
        <image
            href={src}
            width={width}
            x={x}
            y={y}
            height={height}
            style={imageStyle

            }
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

        />
    );
};


const CirclesComponent = () => {
    const tablet = useMediaQuery({ maxWidth: 1023 });
    const theme = useTheme();
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 10;

    return (
        <>
            {tablet && (
                <div>
                    <div style={{ height: "35vw", display: "flex", alignItems: "center", flexDirection: "column", justifyContent: 'flex-start' }}>
                        <Typography variant="h4"
                            style={{
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'Semi-Bold',
                                textAlign: "center",
                                fontSize: '3.5dvw',
                                mt: "2dvw"
                            }}>
                            You will
                        </Typography>
                        <Typography variant="h2"
                            style={{
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'Bold',
                                textAlign: "center",
                                fontSize: '7dvw',
                            }}>
                            learn something
                        </Typography>
                        <Typography variant="h3"
                            style={{
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'bold',
                                opacity: '0.66',
                                textAlign: "center",
                                fontSize: '5.5dvw',
                            }}>
                            every.single.day
                        </Typography>
                        <Typography variant="body1"
                            style={{
                                textAlign: 'center',
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: "Medium",
                                textAlign: "center",
                                fontSize: '2.5dvw',
                                mt: "2.5dvw"

                            }}>
                            These are some technologies we use.<br />
                            If you have something new to teach us,  join the team!
                        </Typography>

                    </div>
                    <div style={{ height: "35vw" }}>
                        <svg width={screenWidth} height="100%">
                            {/* Circles */}
                            <circle cx={centerX} cy={'5vw'} r={"47vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                            <circle cx={centerX} cy={'5vw'} r={"38vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                            <circle cx={centerX} cy={'5.5vw'} r={"26vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                            {/* PNG images */}
                            <GrayScaleImage src={react} width="5dvw" x='22dvw' y="3dvw" height="5dvw" />
                            <GrayScaleImage src={canva} width="5dvw" x='24dvw' y="13dvw" height="5dvw" />
                            <GrayScaleImage src={illustrator} width="6dvw" x='31dvw' y="22dvw" height="6dvw" />
                            <GrayScaleImage src={linkedin} width="6dvw" x='42dvw' y="27.5dvw" height="6dvw" />
                            <GrayScaleImage src={postman} width="4dvw" x='58dvw' y="27dvw" height="4dvw" />
                            <GrayScaleImage src={teams} width="4dvw" x='67dvw' y="20dvw" height="4dvw" />
                            <GrayScaleImage src={wordpress} width="4dvw" x='72dvw' y="12dvw" height="4dvw" />
                            <GrayScaleImage src={html} width="5dvw" x='73dvw' y="3dvw" height="5dvw" />
                            <GrayScaleImage src={apple} width="7dvw" x='8.5dvw' y="3dvw" height="7dvw" />
                            <GrayScaleImage src={c} width="4dvw" x='11.5dvw' y="13dvw" height="4dvw" />
                            <GrayScaleImage src={notion} width="4dvw" x='15dvw' y="21dvw" height="4dvw" />
                            <GrayScaleImage src={java} width="5dvw" x='19dvw' y="26dvw" height="5dvw" />
                            <GrayScaleImage src={javascript} width="6dvw" x='76dvw' y="26dvw" height="6dvw" />
                            <GrayScaleImage src={raspberrypi} width="4dvw" x='81dvw' y="21dvw" height="4dvw" />
                            <GrayScaleImage src={photoshop} width="6dvw" x='83.5dvw' y="12dvw" height="6dvw" />
                            <GrayScaleImage src={googlefirebase} width="5dvw" x='85.5dvw' y="4dvw" height="5dvw" />
                            <GrayScaleImage src={css} width="4dvw" x='1dvw' y="3dvw" height="4dvw" />
                            <GrayScaleImage src={figma} width="4dvw" x='2dvw' y="12dvw" height="4dvw" />
                            <GrayScaleImage src={premier} width="4dvw" x='4dvw' y="19dvw" height="4dvw" />
                            <GrayScaleImage src={arduino} width="5dvw" x='7dvw' y="26dvw" height="5dvw" />
                            <GrayScaleImage src={solidworks} width="5dvw" x='88dvw' y="26dvw" height="5dvw" />
                            <GrayScaleImage src={excel} width="4dvw" x='91dvw' y="20dvw" height="4dvw" />
                            <GrayScaleImage src={github} width="4dvw" x='93.5dvw' y="13dvw" height="4dvw" />
                            <GrayScaleImage src={android} width="5dvw" x='94dvw' y="4dvw" height="5dvw" />

                            {/* Button */}
                            {/* Filter for shadow effect */}
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
                            </filter>
                            <a> {/* TODO: adicionar href para download do portfólio */}
                                <rect x='35dvw' y="10dvw" width="30dvw" height="5.5dvw" rx="2dvw" ry="2dvw" fill={theme.palette.primary.main} filter="url(#shadow)" />
                                <text x={centerX} y="14dvw" textAnchor="middle" fontSize="3dvw" fill="white" fontFamily={theme.typography.fontFamily}>
                                    See our Portfolio
                                </text>
                            </a>
                        </svg>
                    </div>
                </div>
            )}

            {!tablet && (
                <div style={{ height: "33vw", padding: "2rem 0 4rem 0" }}>
                    <svg width={screenWidth} height="100%">
                        {/* Circles */}
                        <circle cx={centerX} cy={centerY} r={"47vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                        <circle cx={centerX} cy={centerY} r={"38vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                        <circle cx={centerX} cy={centerY} r={"26vw"} fill="none" stroke="lightgrey" strokeWidth="1" />
                        {/* PNG images */}
                        <GrayScaleImage src={react} width="5dvw" x='22dvw' y="3dvw" height="5dvw" />
                        <GrayScaleImage src={canva} width="5dvw" x='24dvw' y="13dvw" height="5dvw" />
                        <GrayScaleImage src={illustrator} width="6dvw" x='31dvw' y="22dvw" height="6dvw" />
                        <GrayScaleImage src={linkedin} width="6dvw" x='42dvw' y="27.5dvw" height="6dvw" />
                        <GrayScaleImage src={postman} width="4dvw" x='58dvw' y="27dvw" height="4dvw" />
                        <GrayScaleImage src={teams} width="4dvw" x='67dvw' y="20dvw" height="4dvw" />
                        <GrayScaleImage src={wordpress} width="4dvw" x='72dvw' y="12dvw" height="4dvw" />
                        <GrayScaleImage src={html} width="5dvw" x='73dvw' y="3dvw" height="5dvw" />
                        <GrayScaleImage src={apple} width="7dvw" x='8.5dvw' y="3dvw" height="7dvw" />
                        <GrayScaleImage src={c} width="4dvw" x='11.5dvw' y="13dvw" height="4dvw" />
                        <GrayScaleImage src={notion} width="4dvw" x='15dvw' y="21dvw" height="4dvw" />
                        <GrayScaleImage src={java} width="5dvw" x='19dvw' y="26dvw" height="5dvw" />
                        <GrayScaleImage src={javascript} width="6dvw" x='76dvw' y="26dvw" height="6dvw" />
                        <GrayScaleImage src={raspberrypi} width="4dvw" x='81dvw' y="21dvw" height="4dvw" />
                        <GrayScaleImage src={photoshop} width="6dvw" x='83.5dvw' y="12dvw" height="6dvw" />
                        <GrayScaleImage src={googlefirebase} width="5dvw" x='85.5dvw' y="4dvw" height="5dvw" />
                        <GrayScaleImage src={css} width="4dvw" x='1dvw' y="3dvw" height="4dvw" />
                        <GrayScaleImage src={figma} width="4dvw" x='2dvw' y="12dvw" height="4dvw" />
                        <GrayScaleImage src={premier} width="4dvw" x='4dvw' y="19dvw" height="4dvw" />
                        <GrayScaleImage src={arduino} width="5dvw" x='7dvw' y="26dvw" height="5dvw" />
                        <GrayScaleImage src={solidworks} width="5dvw" x='88dvw' y="26dvw" height="5dvw" />
                        <GrayScaleImage src={excel} width="4dvw" x='91dvw' y="20dvw" height="4dvw" />
                        <GrayScaleImage src={github} width="4dvw" x='93.5dvw' y="13dvw" height="4dvw" />
                        <GrayScaleImage src={android} width="5dvw" x='94dvw' y="4dvw" height="5dvw" />

                        {/* Text */}
                        <text x={centerX} y="5dvw" textAnchor="middle"
                            fontSize="2.5dvw"
                            fontWeight="400"
                            fill={theme.palette.secondary.main}
                        >
                            You will
                        </text>
                        <text x={centerX} y="9dvw" textAnchor="middle"
                            fontSize="4.5dvw"
                            fontWeight="600"
                            fill={theme.palette.primary.main}
                        >
                            learn something
                        </text>
                        <text x={centerX} y="13dvw" textAnchor="middle"
                            fontSize="4dvw"
                            fontWeight="600"
                            fill={theme.palette.primary.main}
                            opacity="0.6"
                        >
                            every.single.day
                        </text>
                        <text x={centerX} y="14dvw" textAnchor="middle"
                            fontSize="1.5dvw"
                            fontWeight="600"
                            fill={theme.palette.secondary.main}
                        >
                            <tspan x={centerX} dy="1.2em">These are some technologies we use.</tspan>
                            <tspan x={centerX} dy="1.2em">If you have something new to teach us, join the team!</tspan>
                        </text>

                        {/* Button */}
                        {/* Filter for shadow effect */}
                        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.4" />
                        </filter>
                        <a target="_blank" rel="noopener noreferrer"> {/* TODO: adicionar href para download do portfólio */}
                            <rect x='41dvw' y="20.4dvw" width="18vw" height="3.5vw" rx="1dvw" ry="1dvw" fill={theme.palette.primary.main} filter="url(#shadow)" />
                            <text x={centerX} y="22.6dvw" textAnchor="middle" fontSize="1.5dvw" fill="white" fontFamily={theme.typography.fontFamily}>
                                See our Portfolio
                            </text>
                        </a>
                    </svg>
                </div>
            )}
        </>
    );
};

export default CirclesComponent;
