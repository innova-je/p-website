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
import interview from '../images/other/interview-img.png';
import { useMediaQuery } from 'react-responsive';



const CustomCircle = ({ icon: IconComponent, posTop, bgcolor, fill }) => {
    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    return (
        <>
            <Box
                sx={{
                    width: tablet ? '60px' : mobile ? '50px' : smallMobile ? '40px' : '60px',
                    height: tablet ? '60px' : mobile ? '50px' : smallMobile ? '40px' : '60px',
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
                {IconComponent && <IconComponent height={tablet ? 30 : mobile ? 25 : smallMobile ? 20 : 35} style={{ fill: fill }} />}

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
        bgImg = group;
    } else if (barheight >= 390 && barheight < 520) {
        bgImg = interview;
    } else {
        bgImg = congrats;
    }

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    const fontTitle = {
        fontSize: tablet ? '3dvw' : mobile ? '3.5dvw' : smallMobile ? '3.8dvw' : "2dvw",
    };

    const fontText = {
        fontSize: tablet ? '1.5dvw' : mobile ? '2dvw' : smallMobile ? '2.3dvw' : "1dvw",
    };

    return (
        // console.log('asdasda', barheight),
        <>
            {/* First Box */}
            <Box
                sx={{
                    width: tablet ? '25%' : mobile ? '25%' : smallMobile ? '25%' : '20%',
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
                        marginTop: tablet ? 5 : mobile ? 5 : smallMobile ? 5 : 15,
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


                {/* <CustomCircle icon={WriteIcon} posTop="12px" bgcolor={theme.palette.primary.main} fill="white" /> */}
                <CustomCircle icon={WriteIcon} posTop="2dvw" bgcolor={'#F0F0F0'} fill={theme.palette.primary.main} />
                <CustomCircle icon={CameraIcon} posTop={tablet ? '12dvw' : mobile ? '15dvw' : smallMobile ? '18dvw' : "9dvw"} bgcolor={cameraBG} fill={cameraFill} />
                <CustomCircle icon={GroupIcon} posTop={tablet ? '22dvw' : mobile ? '34dvw' : smallMobile ? '44dvw' : "17dvw"} bgcolor={groupBG} fill={groupFill} />
                <CustomCircle icon={ChatIcon} posTop={tablet ? '31dvw' : mobile ? '45dvw' : smallMobile ? '59dvw' : "25dvw"} bgcolor={chatBG} fill={chatFill} />
                <CustomCircle icon={InnovaIcon} posTop={tablet ? '40dvw' : mobile ? '55dvw' : smallMobile ? '74dvw' : "33dvw"} bgcolor={innovaBG} fill={innovaFill} />

            </Box>

            {/* Second Box */}
            <Box
                sx={{
                    width: tablet ? '70%' : mobile ? '70%' : smallMobile ? '70%' : '59%',
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
                        top: tablet ? '3%' : mobile ? '3%' : smallMobile ? '3%' : '5%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: fontTitle.fontSize,
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
                            fontSize: fontText.fontSize,
                        }}
                    >
                        We really want to know you!
                    </Typography>

                    {smallMobile || mobile || tablet ? (
                        <>
                        </>
                    ) : (
                        <Button
                            variant="contained"
                            href='https://forms.gle/NP4Eo4RUftMv4LFq7'
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                position: 'relative',
                                borderRadius: '10px',
                                py: '3px',
                                px: '25px',
                                fontSize: '15px',
                                fontWeight: 'Light',
                                textTransform: 'none',
                                marginTop: '1dvw',
                                marginLeft: '15px',
                            }}
                        >
                            Apply here
                        </Button>
                    )}

                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: tablet ? '10%' : mobile ? '10%' : smallMobile ? '10%' : '7%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: fontTitle.fontSize,
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
                            fontSize: fontText.fontSize,
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
                        top: tablet ? '16%' : mobile ? '15%' : smallMobile ? '18%' : '12%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: fontTitle.fontSize,
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
                            fontSize: fontText.fontSize,
                        }}
                    >
                        ... and have fun! Halfway there!
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: tablet ? '21%' : mobile ? '19%' : smallMobile ? '26%' : '18%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: fontTitle.fontSize,
                        }}
                    >
                        Do a 1:1 Interview
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Medium',
                            fontSize: fontText.fontSize,
                        }}
                    >
                        Now we can focus on your chosen department!
                    </Typography>
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        top: tablet ? '25%' : mobile ? '23%' : smallMobile ? '33%' : '25%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: "#101010",
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: fontTitle.fontSize,
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
                            fontSize: fontText.fontSize,
                        }}
                    >
                        You are finally one of us!
                    </Typography>
                </Box>
            </Box>

            {/* Third Box */}
            <Box
                sx={{
                    width: tablet ? '0%' : mobile ? '0%' : smallMobile ? '0%' : '21%',
                    height: '100%',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    backgroundImage: `linear-gradient(to top, rgba(115,32,67,0.9), rgba(115,32,67,0)), url(${bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.5',
                    transition: 'background-image 0.3s ease-in-out',
                }}
            >
            </Box>
        </>
    );
};



const HowToApply = ({ progress }) => {
    const theme = useTheme();

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })

    return (

        <Box
            sx={{
                position: 'relative',
                top: '4rem',
                width: tablet ? '75dvw' : mobile ? '75dvw' : smallMobile ? '75dvw' : '65dvw',
                height: tablet ? '50dvw' : mobile ? '65dvw' : smallMobile ? '85dvw' : '41dvw',
                backgroundColor: 'white',
                borderRadius: '20px',
                display: 'flex',
                marginBottom: '6rem',
            }}
        >

            <MiddleBox barheight={progress} />


        </Box>
    );
};

export default HowToApply;
