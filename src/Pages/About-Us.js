import React, { useState } from 'react'
import { Box, Button, Link, Typography, useTheme, Container } from '@mui/material';
import HeroImage from '../images/other/about-us.png'

import Values from '../components/Values';
import MapParallax from '../components/MapParallax';
import { useMediaQuery } from 'react-responsive';
import { tab } from '@testing-library/user-event/dist/tab';
import MandatesSection from '../components/MandatesSection';



const AboutUs = () => {
    const theme = useTheme()

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (title, currentState) => {
        if (currentState === 'expanded') {
            setSelectedButton(null);
        } else {
            setSelectedButton(title);
        }
    };


    const smallMobile = useMediaQuery({ maxWidth: 650 });
    const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })



    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    width: '100%',
                    position: 'relative',
                    overflowX: 'clip',
                }}
            >
                {/* Blurred Image */}
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${HeroImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(12px)',
                        opacity: '0.7',
                        zIndex: '0',
                    }}
                />


                {/* White Box */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '2dvw',
                        position: 'relative',
                        // top: largeDesktop ? '14dvw' : desktop ? '15dvw' : smallDesktop ? '17dvw' : tablet ? '20dvw' : '25dvw',
                        // top: '2rem',
                        marginBottom: mobile ? '10rem' : smallMobile ? '8rem' : '8rem',
                        mt: '8rem',
                        width: '80dvw',
                        height: 'auto',
                        zIndex: '1',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            borderRadius: '2.5dvw',
                            position: 'absolute',
                            top: smallDesktop ? "-4dvw" : tablet ? "-4.5dvw" : mobile ? "-5.5dvw" : smallMobile ? '-5.5dvw' : '-3.4dvw',
                            left: '-15dvw',
                            width: '60%',
                            height: '17%',
                            padding: '1dvw',
                            zIndex: '1',
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: '700',
                            fontSize: tablet || smallMobile ? "3dvw" : '2.5dvw',
                        }}
                    > About Us
                    </Box>
                    <Typography
                        variant="h4"
                        sx={{
                            position: "relative",
                            // top: mobile ? "8dvw" : smallMobile ? '8dvw' : "6dvw",
                            left: "4dvw",
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '700',
                            fontSize: mobile ? "3.5dvw" : smallMobile ? '5dvw' : '2.7dvw',
                            marginTop: smallMobile ? '2rem' : '4rem',
                        }}
                    >
                        We are
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            position: "relative",
                            // top: mobile ? "12dvw" : smallMobile ? '12dvw' : "10dvw",
                            left: "4dvw",
                            color: theme.palette.primary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: mobile ? "3.9dvw" : smallMobile ? '3.9dvw' : '3.3dvw',
                        }}
                    >
                        Junior Enterpreneurs.
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            position: "relative",
                            // top: mobile ? "17.5dvw" : smallMobile ? '17.5dvw' : "15dvw",
                            left: "6dvw",
                            mt: '1rem',
                            mb: '5rem',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Light',
                            fontSize: mobile ? "3dvw" : smallMobile ? '3.3dvw' : '2dvw',
                        }}
                    >
                        Engineering Students <br />
                        Problem Solvers <br />
                        Creative Minds <br />
                        Next-Gen Leaders
                    </Typography>
                    <img src={HeroImage} alt="Hero Image"
                        style={{
                            position: 'absolute',
                            top: '6dvw',
                            right: '5dvw',
                            width: '38%',
                            height: '55%',
                            borderRadius: '2dvw',
                            zIndex: '1'
                        }} />

                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            borderRadius: '1.5rem',
                            position: 'absolute',
                            bottom: smallDesktop ? '-4.5dvw' : tablet ? "-6dvw" : mobile ? "-14dvw" : smallMobile ? '-37dvw' : '-3.5dvw',
                            left: '10dvw',
                            width: '80%',
                            height: tablet ? "30%" : mobile ? "35%" : smallMobile ? '60%' : '20%',
                            zIndex: '1',
                            pl: '1.5rem',
                            pt: mobile ? "3dvw" : smallMobile ? '1.5rem' : '1dvw',
                            pb: smallDesktop ? '2dvw' : mobile ? "3dvw" : smallMobile ? '2rem' : '1dvw',
                            pr: '20dvw',
                            justifyContent: 'center',
                            textAlign: 'justify',
                            fontWeight: 'light',
                            fontSize: smallDesktop ? '1.5dvw' : tablet ? '1.7dvw' : mobile ? "2dvw" : smallMobile ? "3.3dvw" : '1.2dvw',
                        }}
                    >
                        In-Nova is the Junior Enterprise of NOVA School of Science and Technology, founded with the aim of promoting the capabilities of its students by integrating them into real projects.
                        In-Nova is focused on creating a limitless workspace, in the most varied areas of knowledge. Specialized in robotics, full stack development, electronics, and prototyping.
                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 'auto',
                    width: '100%',
                    position: 'relative',
                }}
            >
                {/* Expandable boxes */}
                <Box
                    sx={{
                        display: 'flex',
                        mt: '5rem',
                        flexDirection: tablet ? 'column' : mobile ? "column" : smallMobile ? 'column' : 'row',
                        gap: tablet ? 7 : mobile ? 5 : smallMobile ? 5 : 6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '2',
                    }}
                >
                    <Values
                        title="Mission"
                        subtitle="What impact do we <br>want to create?"
                        content="Promote the interaction of students in the business environment, training them in the latest scientific and technological techniques that enable them to develop creative and innovative solutions applied to real problems."
                        currentState={selectedButton === 'Mission' ? 'expanded' : selectedButton ? 'collapsed' : 'normal'}
                        onButtonClick={handleButtonClick}
                    />
                    <Values
                        title="Vision"
                        subtitle="What impact do we <br>want to create?"
                        content="In-Nova aims to involve the academic and technology communities, highlighting the quality and excellence that characterize NOVA SST and ultimately making university students more competent, entrepreneurial and critical."
                        currentState={selectedButton === 'Vision' ? 'expanded' : selectedButton ? 'collapsed' : 'normal'}
                        onButtonClick={handleButtonClick}
                    />
                    <Values
                        title="Values"
                        subtitle="What impact do we <br>want to create?"
                        content="Empowering the entrepreneurial spirit, giving priority to creativity, prioritizing critical thinking and encouraging proactivity and teamwork."
                        currentState={selectedButton === 'Values' ? 'expanded' : selectedButton ? 'collapsed' : 'normal'}
                        onButtonClick={handleButtonClick}
                    />
                </Box>


                <Typography
                    variant="h3"
                    sx={{
                        position: 'relative',
                        textAlign: 'center',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                        zIndex: '3',
                        mt: '4rem',
                    }}
                >
                    In-Nova
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        position: 'relative',
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                        zIndex: '3',
                        fontSize: tablet ? "6.5dvw" : mobile ? "8.5dvw" : smallMobile ? '8.5dvw' : "4.5dvw",
                    }}
                >
                    Throughout the years
                </Typography>

                <Box sx={{ position: 'relative',mt:'4rem', zIndex: 4 }}>
                    <MandatesSection />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: '2',
                        bottom: -1,
                        width: '100%',
                        height: '80%',
                        backgroundImage:
                            'linear-gradient(to top, rgba(115,32,67,1), rgba(115,32,67,0))',
                    }}
                />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: tablet ? '150dvw' : mobile ? '150dvw' : smallMobile ? '150dvw' : '80dvw',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        top: '4dvw',
                        left: tablet ? '0dvw' : mobile ? '0dvw' : smallMobile ? '0dvw' : '-17dvw',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            position: tablet ? 'relative' : mobile ? 'relative' : smallMobile ? 'relative' : undefined,
                            left: tablet ? '28dvw' : mobile ? '28dvw' : smallMobile ? '28dvw' : undefined,
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Bold',
                            fontSize: tablet ? '4dvw' : mobile ? '4.5dvw' : smallMobile ? '4,5dvw' : '2.3dvw',
                        }}
                    >
                        We're part of the
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{
                            color: theme.palette.primary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Bold',
                            fontSize: tablet ? '7.7dvw' : mobile ? '7.7dvw' : smallMobile ? '7.7dvw' : '4.7dvw',
                        }}
                    >
                        Junior Enterprise Network
                    </Typography>
                </Box>
                <Typography
                    variant='h6'
                    sx={{
                        position: 'absolute',
                        top: '18%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Medium',
                        fontSize: tablet ? '3.5dvw' : mobile ? '3.5dvw' : smallMobile ? '3.5dvw' : '2.5dvw',
                    }}
                >
                    “Europe’s future is in the hands of its young people.<br /> (…) Europe’s Junior Enterprises are leading the way.”
                </Typography>
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        top: tablet ? '27%' : mobile ? '27%' : smallMobile ? '27%' : '28%',
                        right: tablet ? '10dvw' : mobile ? '10dvw' : smallMobile ? '10dvw' : undefined,
                        textAlign: tablet ? 'right' : mobile ? 'right' : smallMobile ? 'right' : 'center',
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Medium',
                        fontSize: tablet ? '2.5dvw' : mobile ? '2.5dvw' : smallMobile ? '2.5dvw' : '1.5dvw',
                    }}
                >
                    Jean-Claude Juncker<br />European Comission, Former President
                </Typography>

                <MapParallax sx={{}} />


                {/* add a Button */}

                <Button
                    variant="contained"
                    href='https://jeportugal.pt/en/je-network/'
                    sx={{
                        position: 'absolute',
                        bottom: '5dvw',
                        backgroundColor: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                        fontSize: tablet ? '4dvw' : mobile ? '4dvw' : smallMobile ? '4dvw' : "2dvw",
                        textTransform: 'none',
                        padding: '5px 50px',
                        borderRadius: '15px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    Learn More
                </Button>
            </Box>


        </>
    )
}

export default AboutUs
