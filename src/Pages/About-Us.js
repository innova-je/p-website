import React, { useState } from 'react'
import { Box, Button, Link, Typography, useTheme, Container } from '@mui/material';
import HeroImage from '../images/other/about-us.png'

import Values from '../components/Values';
import Mandatos from '../components/Mandatos';
import MapParallax from '../components/MapParallax';



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


    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100%',
                    position: 'relative',
                    overflowX: 'clip',
                }}
            >
                {/* Blurred Image */}
                <Box
                    sx={{
                        position: 'relative',
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
                ></Box>


                {/* White Box */}
                <Box
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '25px',
                        position: 'absolute',
                        top: '55%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '75%',
                        height: '65%',
                        zIndex: '1',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            borderRadius: '25px',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            transform: 'translate(-40%, -50%)',
                            width: '60%',
                            height: '17%',
                            zIndex: '1',
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: '700',
                            fontSize: '2.5rem',
                        }}
                    > About Us </Box>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'left',
                            marginLeft: '5rem',
                            marginTop: '4.5rem',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '700',
                        }}
                    >
                        We are
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'left',
                            marginLeft: '5rem',
                            color: theme.palette.primary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: '600',
                            fontSize: '3.3rem',
                        }}
                    >
                        Junior Enterpreneurs.
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: 'left',
                            marginLeft: '7rem',
                            marginTop: '2rem',
                            mb: '5rem',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Light',
                            fontSize: '1.7rem',
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
                            top: '6rem',
                            right: '5rem',
                            width: '38%',
                            height: '55%',
                            borderRadius: '25px',
                            zIndex: '1'
                        }} />

                    <Box
                        sx={{
                            backgroundColor: theme.palette.secondary.main,
                            color: 'white',
                            borderRadius: '25px',
                            position: 'absolute',
                            bottom: '0',
                            right: '0',
                            transform: 'translate(25%, 50%)',
                            width: '80%',
                            height: '20%',
                            zIndex: '1',
                            pl: '5rem',
                            pt: '1rem',
                            pb: '0.5rem',
                            pr: '20rem',
                            justifyContent: 'center',
                            textAlign: 'justify',
                            fontWeight: 'light',
                            fontSize: '17px',
                        }}
                    >
                        In-Nova is the Junior Enterprise of NOVA School of Science and Technology, founded with the aim of promoting the capabilities of its students by integrating them into real projects. <br/>
                        In-Nova is focused on creating a limitless workspace, in the most varied areas of knowledge. Specialized in robotics, full stack development, electronics, and prototyping. 
                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '170vh',
                    width: '100%',
                    position: 'relative',
                }}
            >
                {/* Expandable boxes */}
                <Container maxWidth="160vh" sx={{ position: "absolute", top: 75, display: 'flex', justifyContent: 'center', zIndex: "3" }}>
                    <Box sx={{ display: 'flex', gap: 5 }}>
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
                </Container>

                <Typography
                    variant="h3"
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        textAlign: 'center',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                        zIndex: '3',
                    }}
                >
                    In-Nova
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        position: 'absolute',
                        top: '29%',
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Bold',
                        zIndex: '3',
                    }}
                >
                    Throughout the years
                </Typography>

                <Box sx={{ position: 'absolute', top: '40%', zIndex: 4 }}>
                    <Mandatos />
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
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    height: '200vh',
                    width: '100%',
                    position: 'relative',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '6%',
                        left: '5%',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            fontWeight: 'Bold',
                            fontSize: '2.3rem',
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
                        }}
                    >
                        Junior Enterprise Network
                    </Typography>
                </Box>
                <Typography
                    variant='h6'
                    sx={{
                        position: 'absolute',
                        top: '20%',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Medium',
                        fontSize: '1.5rem',
                    }}
                >
                    “Europe’s future is in the hands of its young people.<br /> (…) Europe’s Junior Enterprises are leading the way.”
                </Typography>
                <Typography
                    variant='body2'
                    sx={{
                        position: 'absolute',
                        top: '27%',
                        textAlign: 'center',
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Medium',
                        fontSize: '1rem',
                    }}
                >
                    Jean-Claude Juncker<br />European Comission, Former President
                </Typography>

                <MapParallax sx={{ }} />


                {/* add a Button */}
                <Button
                    variant="contained"
                    sx={{
                        position: 'absolute',
                        bottom: '10%',
                        backgroundColor: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                        fontSize: '2rem',
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
