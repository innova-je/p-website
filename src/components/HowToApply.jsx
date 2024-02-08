import React from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../theme'

import { ReactComponent as WriteIcon } from '../SVGs/write-icon.svg';
import { ReactComponent as CameraIcon } from '../SVGs/camera-icon.svg';
import { ReactComponent as GroupIcon } from '../SVGs/group-icon.svg';
import { ReactComponent as ChatIcon } from '../SVGs/chat-icon.svg';
import { ReactComponent as InnovaIcon } from '../SVGs/innova-icon.svg';

import fill from '../images/other/fill-img.png';
import record from '../images/other/record-img.png';
import group from '../images/other/group-img.png';
import congrats from '../images/other/congrats-img.png';
import interview from '../images/other/interview-img.jpg';



const CustomCircle = ({ icon: IconComponent, posTop, bgcolor, fill }) => {

    return (
        <>
            <Box
                sx={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: bgcolor, // F0F0F0
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: posTop,
                    zIndex: '1',
                    transition: 'background-color 0.8s, fill 0.5s'
                }}
            >
                {IconComponent && <IconComponent height={35} style={{ fill: fill }} />}

            </Box>
        </>
    );
};


const MiddleBox = ({ barheight }) => {
    let cameraBG = barheight >= 130 ? theme.palette.primary.main : '#F0F0F0';
    let groupBG = barheight >= 260 ? theme.palette.primary.main : '#F0F0F0';
    let chatBG = barheight >= 390 ? theme.palette.primary.main : '#F0F0F0';
    let innovaBG = barheight >= 520 ? theme.palette.primary.main : '#F0F0F0';

    let cameraFill = barheight >= 130 ? 'white' : theme.palette.primary.main;
    let groupFill = barheight >= 260 ? 'white' : theme.palette.primary.main;
    let chatFill = barheight >= 390 ? 'white' : theme.palette.primary.main;
    let innovaFill = barheight >= 520 ? 'white' : theme.palette.primary.main;

    let bgImg = fill;
    
    if (barheight < 130) {
        bgImg = fill;
    } else if (barheight >= 130 && barheight < 260) {
        bgImg = record;
    } else if (barheight >= 260 && barheight < 390) {
        bgImg = group ;
    } else if (barheight >= 390 && barheight < 520) {
        bgImg = interview;
    } else {
        bgImg = congrats;
    }

    // Use console.log to check the value of bgImg
    console.log(bgImg);

    return (
        console.log('asdasda', barheight),
        <>
            {/* First Box */}
            <Box
                sx={{
                    width: '14%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#F0F0F0',
                        height: '100%',
                        width: '15px',
                        marginTop: 10,
                        position: 'absolute',
                    }}
                >
                </Box>

                <Box
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        height: barheight,
                        width: '15px',
                        top: 0,
                        marginTop: 5,
                        position: 'absolute',
                        transition: 'height 0.5s ease-out', // Add transition property
                    }}
                />



                <CustomCircle icon={WriteIcon} posTop="12px" bgcolor={theme.palette.primary.main} fill="white" />
                <CustomCircle icon={CameraIcon} posTop="150px" bgcolor={cameraBG} fill={cameraFill} />
                <CustomCircle icon={GroupIcon} posTop="288px" bgcolor={groupBG} fill={groupFill} />
                <CustomCircle icon={ChatIcon} posTop="426px" bgcolor={chatBG} fill={chatFill} />
                <CustomCircle icon={InnovaIcon} posTop="564px" bgcolor={innovaBG} fill={innovaFill} />

            </Box>

            {/* Second Box */}
            <Box
                sx={{
                    width: '65%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    position: 'relative',

                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: 10,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            marginTop: 0.5,
                            fontSize: "30px",
                        }}
                    >
                        Fill out the Application Form
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            marginTop: 0.5,
                            fontSize: "15px",
                        }}
                    >
                        We really want to know you!
                    </Typography>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                            position: 'relative',
                            borderRadius: '10px',
                            py: '3px',
                            px: '25px',
                            fontSize: '15px',
                            fontWeight: 'Light',
                            textTransform: 'none',
                            marginTop: '20px',
                            marginLeft: '15px',
                        }}
                    >
                        Apply here
                    </Button>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: 25,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            marginTop: 0.5,
                            fontSize: "30px",
                        }}
                    >
                        Record yourself & tell us about you
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            marginTop: 0.5,
                            fontSize: "15px",
                        }}
                    >
                        It is now the time to tell us more about yourself, your hobbies, your dreams... <br />
                        Be creative!
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: 25,
                        marginTop: 6,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            marginTop: 0.5,
                            fontSize: "30px",
                        }}
                    >
                        Attend the Group Dynamics
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            marginTop: 0.5,
                            fontSize: "15px",
                        }}
                    >
                        ... and have fun! Halfway there!
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: 10,
                        marginTop: 9.5,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            marginTop: 0.5,
                            fontSize: "30px",
                        }}
                    >
                        Do an 1:1 Interview
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            marginTop: 0.5,
                            fontSize: "15px",
                        }}
                    >
                        Now we can focus on your chosen department!
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: 10,
                        marginTop: 9.5,
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            marginTop: -0.5,
                            fontSize: "30px",
                        }}
                    >
                        Congrats!
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            marginTop: 0.5,
                            fontSize: "15px",
                        }}
                    >
                        You are finally one of us!
                    </Typography>
                </Box>
            </Box>

            {/* Third Box */}
            <Box
                sx={{
                    width: '21%',
                    height: '100%',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    backgroundImage: `linear-gradient(to top, rgba(115,32,67,0.9), rgba(115,32,67,0)), url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.5',
                    // make the transtion of the bgImg smoother
                    transition: 'background-image 0.3s ease-in-out',
                }}
            >
            </Box>
        </>
    );
};



const HowToApply = ({ progress }) => {
    const theme = useTheme();
    return (

        <Box
            sx={{
                position: 'absolute',
                top: '13rem',
                width: '60%',
                height: '63%',
                backgroundColor: 'white',
                borderRadius: '20px',
                display: 'flex',
            }}
        >

            <MiddleBox barheight={progress} />


        </Box>
    );
};

export default HowToApply;
