import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroImage from '../images/other/Join_us_image.webp';
import joinus_oof from '../images/other/joinus-outofoffice.png'; // change this image 
import joinus_elements from '../images/other/joinus-elements.png';
import guiadocandidato from '../images/other/GuiaDoCandidato.png';
import Technologies from '../components/Technologies';
import HowToApply from '../components/HowToApply';
import MemberReview from '../components/MemberReview';
import Testimonials from '../Testimonials.json'
import CountDownRecruitment from '../components/CountDownRecruitment';


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


    return (
        <>
            {/* // Hero Box */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
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
                        fontSize: '5rem',
                        position: 'absolute',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        zIndex: '1',
                        top: "30%",
                    }}
                >
                    Want to become one of us?
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        marginTop: '20px',
                        zIndex: '3', // problem with the button
                        borderRadius: '20px',
                        py: '10px',
                        px: '70px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        top: "78%",
                        opacity: '0.9',
                    }}
                >
                    Apply Now!
                </Button>
                <CountDownRecruitment/>

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
                    padding: '20px', // Added padding to ensure space for the circles
                    height: '70vh',
                    overflow: 'hidden',
                    marginBottom: '30px',
                    marginTop: '30px',
                }}
            >
                {/* Circles */}
                <Technologies />

                {/* Texts */}
                <Typography variant="h4"
                    sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Semi-Bold',
                        marginTop: '30px',
                    }}>
                    You will
                </Typography>
                <Typography variant="h2"
                    sx={{
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
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

                    }}>
                    These are some technologies we use.<br />
                    If you have something new to teach us, join the team!
                </Typography>


                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        borderRadius: '10px',
                        py: '5px',
                        px: '20px',
                        fontSize: '0.8rem',
                        textTransform: 'none',
                        marginBottom: '40px',
                    }}
                >
                    See our Portfolio
                </Button>
            </Box>

            {/* 3rd Section */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        left: '5rem',
                        top: '28%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                    }}
                >
                    We don’t just work here,
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        left: '15rem',
                        top: '38%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'regular',
                    }}
                >
                    we also have
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        left: '13rem',
                        top: '47%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                    }}
                >
                    a lot of fun!
                </Typography>
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                        position: 'absolute',
                        left: '17rem',
                        top: '60%',
                        borderRadius: '10px',
                        py: '10px',
                        px: '25px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        marginTop: '20px',
                    }}
                >
                    Out of Office
                </Button>
                <div style={{ position: 'relative', maxWidth: '65%', maxHeight: '100%' }}>
                    <img
                        src={joinus_oof}
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
                    }}
                />
            </Box>

            {/* 4th Section */}
            <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    height: '120vh',
                    backgroundImage: `linear-gradient(to top, ${theme.palette.primary.main}, rgba(255,255,255,0))`,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        zIndex: '1',
                        left: '6rem',
                        top: '10%',
                        color: "#FFFFFF",
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 500,
                    }}
                >
                    Our members love being here,<br />
                    and so will you!
                </Typography>
                
                <Box
                    sx={{
                        display: 'inline-flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2.5rem',
                        position: 'relative',
                        top: '30%',
                        width: '100%',
                        height: '38vh',
                        overflow: 'visible',

                    }}> 
                    {/* <Carousel reviews={reviews1} duration='30s' direction='left' /> */}
                    {Testimonials.testimonials.map((testimonial, index) => (
                    <MemberReview
                        image={testimonial.image}
                        name={testimonial.name}
                        department={testimonial.department}
                        text={testimonial.quote}
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                />
                ))}
                </Box>
            </Box>

            {/* 5th Section */}
            <Box
                // ref={sectionRef}
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '120vh',

                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        position: 'absolute',
                        top: '4rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                    }}
                >
                    How to apply?
                </Typography>

                {/* progress * 6.5 */}
                <HowToApply progress={190} />

            </Box>

            {/* 6th Section */}
            <Box
                bgcolor="white"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '120vh',
                    overflow: 'visible',

                }}>
                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        top: '4rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Light',
                    }}
                >
                    One important rule...
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        position: 'absolute',
                        top: '7rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                    }}
                >
                    Always be prepared!
                </Typography>
                <img src={guiadocandidato} alt='guiadocandidato' style={{
                    position: 'absolute',
                    maxWidth: '55%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    top: '14rem',
                    left: '10rem',
                }} />

                <Typography
                    variant="h2"
                    sx={{
                        position: 'absolute',
                        right: '13rem',
                        top: '21rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Regular',
                        textAlign: 'center'
                    }}
                >
                    Read the<br />
                    candidate guide
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        position: 'absolute',
                        right: '19rem',
                        top: '31rem',
                        borderRadius: '10px',
                        py: '10px',
                        px: '75px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        marginTop: '20px',
                    }}
                >
                    Download
                </Button>
                <Typography
                    variant="body1"
                    sx={{
                        position: 'absolute',
                        bottom: '6rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Light',
                        fontSize: 24,
                    }}
                >
                    And if you have any further questions,
                </Typography>

                <Link href="mailto:geral@innova.pt" variant="body1" sx={{
                    position: 'absolute',
                    bottom: '3.5rem',
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 'Light',
                    fontSize: 24,
                }}>
                    send us an-email
                </Link>

            </Box>
        </>



    );
};

export default JoinUs