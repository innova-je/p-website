import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroImage from '../images/other/Join_us_image.webp';
import joinus_oof from '../images/other/joinus-outofoffice.png';
import joinus_oof2 from '../images/other/joinus-outofoffice2.png';
import joinus_elements from '../images/other/joinus-elements.png';
import guiadocandidato from '../images/other/GuiaDoCandidato.png';
import Technologies from '../components/Technologies';
import HowToApply from '../components/HowToApply';
import Carousel from '../components/CarouselReviews';
import MemberReview from '../components/MemberReview';
import Testimonials from '../Testimonials.json'
import CountDownRecruitment from '../components/CountDownRecruitment';
import { useMediaQuery } from 'react-responsive';


const JoinUs = () => {
    const theme = useTheme();

    // const [isScrollingDisabled, setScrollingDisabled] = useState(false);
    // const [progress, setProgress] = useState(0);
    // const [animationCompleted, setAnimationCompleted] = useState(false);
    // const sectionRef = useRef(null);

    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         if (!animationCompleted) {
    //             if (isScrollingDisabled) {
    //                 event.preventDefault();

    //                 // Update the progress while scrolling is disabled
    //                 setProgress((prevProgress) => {
    //                     const newProgress = Math.min(prevProgress + 10, 100);
    //                     console.log(`Progress: ${newProgress}%`);
    //                     return newProgress;
    //                 });

    //                 // Log the message indicating the user is trying to scroll
    //                 console.log('User is trying to scroll.');

    //                 // Check if progress has reached 100% and enable scrolling
    //                 if (progress === 100) {
    //                     setScrollingDisabled(false);
    //                     document.body.style.overflow = 'auto';

    //                     // Set animationCompleted to true when the animation is completed
    //                     setAnimationCompleted(true);
    //                 }
    //             } else {
    //                 // Check if the middle of the section is in the viewport
    //                 const sectionRect = sectionRef.current.getBoundingClientRect();
    //                 const sectionMiddle = (sectionRect.top + sectionRect.bottom) / 2;

    //                 if (sectionMiddle <= window.innerHeight / 2 && sectionMiddle >= -window.innerHeight / 2) {
    //                     setScrollingDisabled(true);
    //                     document.body.style.overflow = 'hidden';
    //                     console.log('Section reached. Scrolling disabled.');
    //                 }
    //             }
    //         }
    //     };

    //     // Add event listener when scrolling is disabled
    //     window.addEventListener('wheel', handleScroll, { passive: false });

    //     return () => {
    //         // Remove event listener when component unmounts or scrolling is re-enabled
    //         window.removeEventListener('wheel', handleScroll);
    //     };
    // }, [isScrollingDisabled, progress, animationCompleted]);

    const smallMobile = useMediaQuery({ maxWidth: 550 });
    const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })

    const gradientPercentage = mobile ? '55%' : smallMobile ? '55%' : '0%';

    return (
        <>
            {/* // Hero Box */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: tablet ? "60dvw" : mobile ? "80dvw" : smallMobile ? '90dvw' : "50dvw",
                    width: '100%',
                    backgroundImage: `url(${HeroImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    zIndex: '0',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(255,255,255,0.6)',
                        zIndex: '0',

                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: '600',
                        fontSize: tablet ? "6dvw" : mobile ? "6dvw" : smallMobile ? '6dvw' : '5dvw',
                        position: 'relative',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        zIndex: '1',
                        top: "32%",
                    }}
                >
                    Want to become one of us?
                </Typography>

                <Button
                    variant="contained"
                    href='https://forms.gle/NP4Eo4RUftMv4LFq7'
                    sx={{
                        marginTop: '20px',
                        zIndex: '3',
                        borderRadius: '20px',
                        py: '1dvw',
                        px: '5dvw',
                        fontSize: tablet ? "3dvw" : mobile ? "3dvw" : smallMobile ? '3dvw' : '1.5dvw',
                        textTransform: 'none',
                        top: smallMobile ? "75%" : "65%",
                        opacity: '0.9',
                    }}
                >
                    Apply Now!
                </Button>
                <CountDownRecruitment />

                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: '2',
                        bottom: -1,
                        width: '100%',
                        height: '70%',
                        backgroundImage:
                            'linear-gradient(to top, rgba(240,240,240,1), rgba(240,240,240,0))',
                    }}
                />
            </Box>

            {/* 2nd Section*/}
            <Box
                sx={{
                    position: 'relative', // Make the box a positioning context for absolute positioning inside
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: smallDesktop ? '25dvw' : tablet ? '35dvw' : mobile ? '40dvw' : smallMobile ? '45dvw' : '31dvw',
                    overflow: 'hidden',
                }}
            >
                {/* Circles */}
                {smallMobile || mobile || tablet || smallDesktop ? (
                    <>
                    </>
                ) : (
                    <Technologies />
                )}

                {/* Texts */}
                <Typography variant="h4"
                    sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Semi-Bold',
                        fontSize: smallDesktop ? '4dvw' : tablet ? '4.5dvw' : mobile ? '5dvw' : smallMobile ? '5.7dvw' : '2.5dvw',
                        marginTop: tablet ? undefined : mobile ? undefined : smallMobile ? undefined : '30px',
                    }}>
                    You will
                </Typography>
                <Typography variant="h2"
                    sx={{
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                        fontSize: smallDesktop ? '5.5dvw' : tablet ? '6dvw' : mobile ? '6.5dvw' : smallMobile ? '7dvw' : '4.5dvw',
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
                        fontSize: smallDesktop ? '4.5dvw' : tablet ? '5dvw' : mobile ? '5.5dvw' : smallMobile ? '6dvw' : '3.5dvw',
                    }}>
                    every.single.day
                </Typography>
                <Typography variant="body1"
                    sx={{
                        marginBottom: '20px',
                        textAlign: 'center',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        opacity: '0.7',
                        fontSize: smallDesktop ? '1.3dvw' : tablet ? '1.8dvw' : mobile ? '2.2dvw' : smallMobile ? '3dvw' : '1.2dvw',

                    }}>
                    These are some technologies we use.<br />
                    If you have something new to teach us, join the team!
                </Typography>


                {/* <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        borderRadius: '10px',
                        // py: '5px',
                        px: '20px',
                        fontSize:  tablet ? '1.8dvw' : mobile ? '2.2dvw' : smallMobile ? '3dvw' : '1.2dvw',
                        textTransform: 'none',
                        marginBottom: '40px',
                    }}
                >
                    See our Portfolio
                </Button> */}
            </Box>

            {/* 3rd Section */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    height: mobile ? '110dvw' : smallMobile ? '110dvw' : undefined,
                    justifyContent: mobile ? 'center' : smallMobile ? 'center' : 'flex-end',
                    alignItems: mobile ? 'flex-start' : smallMobile ? 'flex-start' : 'flex-end',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        left: mobile ? undefined : smallMobile ? undefined : '5dvw',
                        top: mobile ? '60%' : smallMobile ? '57%' : '28%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                        fontSize: mobile ? '7dvw' : smallMobile ? '7dvw' : '3.5dvw',
                    }}
                >
                    We don’t just work here,
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        left: mobile ? undefined : smallMobile ? undefined : '15dvw',
                        top: mobile ? '67%' : smallMobile ? '65%' : '38%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'regular',
                        fontSize: mobile ? '7dvw' : smallMobile ? '6dvw' : '2.5dvw',
                    }}
                >
                    we also have
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        left: mobile ? undefined : smallMobile ? undefined : '13dvw',
                        top: mobile ? '75%' : smallMobile ? '71%' : '47%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                        fontSize: mobile ? '7dvw' : smallMobile ? '7.5dvw' : '3.5dvw',
                    }}
                >
                    a lot of fun!
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        position: 'absolute',
                        left: mobile ? undefined : smallMobile ? undefined : '17dvw',
                        top: mobile ? '83%' : smallMobile ? '79%' : '60%',
                        borderRadius: '10px',
                        py: '10px',
                        px: '25px',
                        fontSize: mobile ? '3dvw' : smallMobile ? '3dvw' : '1dvw',
                        textTransform: 'none',
                        marginTop: '20px',
                    }}
                >
                    Out of Office
                </Button>
                <div style={{ position: 'relative', maxWidth: (mobile ? '100%' : smallMobile ? '100%' : '65%'), maxHeight: '100%' }}>
                    <img
                        src={mobile ? joinus_oof2 : smallMobile ? joinus_oof2 : joinus_oof}
                        alt='joinus_oof'
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '35%',
                            backgroundImage: 'linear-gradient(to top, rgba(240,240,240,1), rgba(240,240,240,0))',
                        }}
                    />
                </div>

                <img
                    src={joinus_elements}
                    alt='joinus_elements'
                    style={{
                        border: 4,
                        position: 'absolute',
                        left: '2rem',
                        top: '10%',
                        maxWidth: '100%',
                        maxHeight: '50%',
                        objectFit: 'cover',
                        opacity: mobile ? 0 : smallMobile ? 0 : 1,
                    }}
                />
            </Box>

            <div style={{ display: "flex", flexDirection: "column" }}>
                {/* 4th Section */}
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: mobile ? 'center' : smallMobile ? 'center' : 'flex-start',
                        alignItems: 'flex-start',
                        height: mobile ? '80vh' : smallMobile ? '80vh' : '170vh',
                        overflow: 'hidden',
                        backgroundImage: `linear-gradient(to top, ${theme.palette.primary.main} ${gradientPercentage}, rgba(255,255,255,0))`,

                    }}
                >
                    {smallMobile || mobile ? (
                        <>
                            <Typography
                                variant="h3"
                                sx={{
                                    position: 'absolute',
                                    zIndex: '1',
                                    left: '29dvw',
                                    top: '5dvw',
                                    fontSize: mobile ? '6dvw' : smallMobile ? '6dvw' : '4dvw',
                                    color: "#FFFFFF",
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 'Bold',
                                }}
                            >
                                Our members
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    position: 'absolute',
                                    zIndex: '1',
                                    left: '23dvw',
                                    top: '13dvw',
                                    fontSize: mobile ? '7dvw' : smallMobile ? '7dvw' : '4dvw',
                                    color: "#FFFFFF",
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 'Bold',
                                }}
                            >
                                love being here,
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    position: 'absolute',
                                    zIndex: '1',
                                    left: '17dvw',
                                    top: '24dvw',
                                    fontSize: mobile ? '8dvw' : smallMobile ? '9dvw' : '4dvw',
                                    color: "#FFFFFF",
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 'Bold',
                                }}
                            >
                                and so will you!
                            </Typography>
                        </>
                    ) : (
                        <Typography
                            variant="h3"
                            sx={{
                                position: 'relative',
                                zIndex: '1',
                                left: '6dvw',
                                top: '5dvw',
                                fontSize: '3.5dvw',
                                color: "#FFFFFF",
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 500,
                            }}
                        >
                            Our members love being here,<br />
                            and so will you!
                        </Typography>
                    )}

                    <Carousel></Carousel>

                </Box>

                {/* 5th Section */}
                <Box
                    // ref={sectionRef}
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: tablet ? '100dvh' : mobile ? '110vh' : smallMobile ? '80vh' : '70dvw',

                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            position: 'absolute',
                            top: tablet ? "5dvw" : mobile ? "8vw" : smallMobile ? '12dvw' : '3dvw',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Bold',
                            fontSize: tablet ? "7dvw" : mobile ? "10dvw" : smallMobile ? '12dvw' : '5.5dvw',
                        }}
                    >
                        How to apply?
                    </Typography>

                    {/* progress * 6.5 */}
                    <HowToApply progress={0} />

                </Box>
            </div>

            {/* 6th Section */}
            <Box
                bgcolor="white"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: tablet ? "65dvw" : mobile ? "70dvw" : smallMobile ? '69dvw' : '60dvw',
                    overflow: 'visible',

                }}>
                <Typography
                    variant="h4"
                    sx={{
                        position: 'relative',
                        top: '5dvw',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Light',
                        fontSize: tablet ? "3.5dvw" : mobile ? "6dvw" : smallMobile ? '6dvw' : '2.5dvw',
                    }}
                >
                    One important rule...
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        position: 'relative',
                        top: '6dvw',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                        fontSize: tablet ? "5.5dvw" : mobile ? "7dvw" : smallMobile ? '7dvw' : '4dvw',
                    }}
                >
                    Always be prepared!
                </Typography>
                <img src={guiadocandidato} alt='guiadocandidato' style={{
                    position: 'relative',
                    maxWidth: '55%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    top: tablet ? "8dvw" : mobile ? "9dvw" : smallMobile ? '10dvw' : '10dvw',
                    left: tablet ? "-9dvw" : mobile ? "-9dvw" : smallMobile ? '-15dvw' : '-9dvw',
                }} />

                <Typography
                    variant="h2"
                    sx={{
                        position: 'absolute',
                        right: '13dvw',
                        top: tablet ? "24dvw" : mobile ? "28dvw" : smallMobile ? '30dvw' : '22dvw',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Regular',
                        fontSize: tablet ? "4dvw" : mobile ? "4dvw" : smallMobile ? '4dvw' : '4dvw',
                        textAlign: 'center'
                    }}
                >
                    Read the<br />
                    candidate guide
                </Typography>
                <a href="https://drive.google.com/file/d/1lbokKLp2KkgnjYC9C2w44hUzAumKWFRi/view">
                    <Button
                        variant="contained"
                        sx={{
                            position: 'absolute',
                            right: tablet ? "20dvw" : mobile ? "19dvw" : smallMobile ? '17dvw' : '21dvw',
                            top: tablet ? "35dvw" : mobile ? "40dvw" : smallMobile ? '42dvw' : '33dvw',
                            borderRadius: '10px',
                            py: tablet ? "1.3dvw" : mobile ? "1.5dvw" : smallMobile ? '1.5dvw' : '1dvw',
                            px: tablet ? "4dvw" : mobile ? "4dvw" : smallMobile ? '4dvw' : '4dvw',
                            fontSize: tablet ? "1.3dvw" : mobile ? "1.5dvw" : smallMobile ? '2.5dvw' : '1.2dvw',
                            textTransform: 'none',
                        }}
                    >
                        Download
                    </Button>
                </a>

                <Typography
                    variant="body1"
                    sx={{
                        position: 'absolute',
                        bottom: '6dvw',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Light',
                        fontSize: '3dvw',
                    }}
                >
                    And if you have any further questions,
                </Typography>

                <Link href="mailto:geral@innova.pt" variant="body1" sx={{
                    position: 'absolute',
                    bottom: '2.5dvw',
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 'Light',
                    fontSize: '3dvw',
                }}>
                    send us an-email
                </Link>

            </Box>
        </>



    );
};

export default JoinUs