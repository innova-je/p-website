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

import technologiesBg from '../images/other/technologies_background.webp'
import { NavLink } from 'react-router-dom';

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
                    height: "auto",
                    width: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    zIndex: '0',
                }}
            >
                <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
                    <div style={{ width: "100%", height: "100%", zIndex: 2, background: "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5))" }}>
                        <div style={{ height: "100vh", width: "100vw", overflow: "hidden", zIndex: -1, position: "absolute" }}>
                            <img src={HeroImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>

                        <div style={{ height: "100%", width: "100%", display: "flex", zIndex: 1, justifyContent: "center" }}>

                            <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <div style={{ width: (mobile || smallMobile) ? "80%" : "100%", height: "100%", display: "flex", flexDirection: "column", gap: "5%", alignItems: "center", justifyContent: "center" }}>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: '600',
                                            fontSize: tablet ? "4.5dvw" : mobile ? "6dvw" : smallMobile ? '8dvw' : '4dvw',
                                            position: 'relative',
                                            color: theme.palette.primary.main,
                                            fontFamily: theme.typography.fontFamily,
                                            zIndex: '1',
                                            textAlign: "center"
                                        }}
                                    >
                                        Want to {(smallMobile) && (<br/>)} become one of us?
                                    </Typography>

                                    <CountDownRecruitment />
                                 
                                    <Button
                                        variant="contained"
                                        href='https://forms.gle/NP4Eo4RUftMv4LFq7'
                                        sx={{
                                            zIndex: '3',
                                            borderRadius: '20px',
                                            py: (mobile) ? "2dvw" : (smallMobile ? "3dvw" : "1dvw"),
                                            px: (mobile) ? "8dvw" : (smallMobile ? "10dvw" : "5dvw"),
                                            fontSize: tablet ? "3dvw" : mobile ? "3dvw" : smallMobile ? '3dvw' : '1.5dvw',
                                            textTransform: 'none',
                                        }}
                                    >
                                        Apply Now!
                                    </Button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>


                {/*----------------------------------------------------*/}

                <div style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    height: "auto",
                    marginBottom: "5%"
                }}>
                    {/* 2nd Section*/}
                    <Box
                        sx={{
                            position: 'relative', // Make the box a positioning context for absolute positioning inside
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',                            
                            //overflow: 'hidden',
                        }}
                    >
                        

                        {/* Circles */}
                       
                        <Technologies />

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

                </div>


                {/*----------------------------------------------------*/}


                <div style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: mobile || smallMobile ? 'column' : 'row',
                    width: "100dvw",
                    height: (smallMobile || mobile) ? "auto" : "70vh",
                    background: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
                }}>
                    {/* 3rd Section */}
                    <div style={{ background: `url(${joinus_elements})`, padding: "0 3rem", display: "flex", flexDirection: "column", width: "50%", height: (mobile || smallMobile) ? "auto" : "100%", justifyContent: "center", alignItems: "center"}}>
                        {(mobile || smallMobile ) && (
                            <div style={{ height: "100%", zIndex: "-1", bottom: 0, background: "linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))"}}>
                            <img
                                src={mobile ? joinus_oof2 : smallMobile ? joinus_oof2 : joinus_oof}
                                alt='joinus_oof'
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    zIndex: "-1"
                                }}
                            />
                        </div> 
                        )}
                        <div style={{ padding: "5% 0", width: "100%", display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center"}}>
                          <h3
                            style={{
                                width: "fit-content",
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'bold',
                                fontSize: mobile ? '7dvw' : smallMobile ? '7dvw' : tablet ? "4dvw" : '3.3dvw',
                                textAlign: "center",
                                whiteSpace: "nowrap",
                            }}
                        >
                            We don’t just work here,
                        </h3>
                        <Typography
                            variant="h4"
                            sx={{
                                position: 'relative',
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'regular',
                                fontSize: mobile ? '7dvw' : smallMobile ? '6dvw' : '2.5dvw',
                                textAlign: "center"
                            }}
                        >
                            we also have
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontFamily: theme.typography.fontFamily,
                                fontWeight: 'bold',
                                fontSize: mobile ? '7dvw' : smallMobile ? '7.5dvw' : '3.3dvw',
                            }}
                        >
                            a lot of fun!
                        </Typography>  
                        </div>
                        
                        <NavLink to="/out-of-office">
                            <Button

                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                borderRadius: '10px',
                                py: '10px',
                                px: '25px',
                                fontSize: mobile ? '3dvw' : smallMobile ? '3dvw' : '1dvw',
                                textTransform: 'none',
                                mt: '2rem',
                                mb: '2rem'
                            }}
                        >
                            Out of Office
                        </Button>
                        </NavLink>
                        
                    </div>

                    {!(mobile || smallMobile) && (
                        <div style={{ height: "100%", width: "auto", zIndex: "-1", display: "flex", background: "green", alignItems: "flex-end", justifyContent: "right"}}>
                            <img
                                src={mobile ? joinus_oof2 : smallMobile ? joinus_oof2 : joinus_oof}
                                alt='joinus_oof'
                                style={{
                                    width: "auto",
                                    height: "100%",
                                    position: "absolute",
                                    right: "-7%"
                                }}
                            />
                        </div> 
                    )}                   

                </div>


                {/*----------------------------------------------------*/}


                <div style={{ display: "flex", flexDirection: "column", width:"100%" }}>
                    {/* 4th Section */}
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: mobile ? 'center' : smallMobile ? 'center' : 'flex-start',
                            height: "auto",
                            width: "100%", // check this
                            backgroundImage: `linear-gradient(to top, ${theme.palette.primary.main} ${gradientPercentage}, rgba(255,255,255,1))`,

                        }}
                    >
                        <div style={{display: "flex", flexDirection: "column", marginTop: "5%", height: "auto", marginLeft: (smallMobile || mobile) ? "0%" : "5%"}}>
                        {smallMobile || mobile ? (
                            <div style={{height: "auto", padding: "5% 0 0 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: mobile ? '6dvw' : smallMobile ? '6dvw' : '4dvw',
                                        color: "#F0F0F0",
                                        fontFamily: theme.typography.fontFamily,
                                        fontWeight: 'Bold',
                                    }}
                                >
                                    Our members
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: mobile ? '7dvw' : smallMobile ? '7dvw' : '4dvw',
                                        color: "#F0F0F0",
                                        fontFamily: theme.typography.fontFamily,
                                        fontWeight: 'Bold',
                                    }}
                                >
                                    love being here,
                                </Typography>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: mobile ? '8dvw' : smallMobile ? '9dvw' : '4dvw',
                                        color: "#F0F0F0",
                                        fontFamily: theme.typography.fontFamily,
                                        fontWeight: 'Bold',
                                    }}
                                >
                                    and so will you!
                                </Typography>
                            </div>
                        ) : (
                            <Typography
                                variant="h3"
                                sx={{
                                    position: 'relative',
                                    zIndex: '1',
                                    fontSize: '3.5dvw',
                                    color: theme.palette.primary.main,
                                    fontFamily: theme.typography.fontFamily,
                                    fontWeight: 500,
                                }}
                            >
                                Our members love being here,<br />
                                and so will you!
                            </Typography>
                        )}

                        </div>
                        
                        <Carousel></Carousel>

                    </Box>
                </div>


                {/*----------------------------------------------------*/}


                <div style={{ height: "auto", width: "100vw" }}>
                    {/* 5th Section */}
                    <Box
                        sx={{
                            position: 'relative',
                            // background: "blue",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            height: '100% ',
                            //background: "blue",
                        }}
                    >                        

                        {/* progress * 6.5 */}
                        <HowToApply progress={0} />

                    </Box>
                </div>


                {/*----------------------------------------------------*/}


                <div>

                    {/* 6th Section */}
                    <div style={{ width: "100vw" }}>

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
                    </div>

                </div>

            </Box>

        </>


    );
};

export default JoinUs