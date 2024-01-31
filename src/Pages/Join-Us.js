import React from 'react';
import { Box, Button, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HeroImage from '../images/other/joinus_img.png';
import joinus_oof from '../images/other/joinus-outofoffice.png'; // change this image 
import joinus_elements from '../images/other/joinus-elements.png';
import CustomReview from '../components/CustomReview';
import guiadocandidato from '../images/other/GuiaDoCandidato.png';
import Technologies from '../components/Technologies';



const JoinUs = () => {
    const theme = useTheme();

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
                        backgroundColor: 'rgba(255,255,255,0.4)',
                        zIndex: '-1',

                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'Regular',
                        position: 'absolute',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        zIndex: '1',
                        top: "67%",
                    }}
                >
                    Want to become one of us?
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        marginTop: '20px',
                        zIndex: '1',
                        borderRadius: '20px',
                        py: '10px',
                        px: '70px',
                        fontSize: '1rem',
                        textTransform: 'none',
                        top: "78%",
                    }}
                >
                    Apply Now!
                </Button>

                <Box
                    sx={{
                        position: 'absolute',
                        zIndex: '2',
                        bottom: -1,
                        width: '100%',
                        height: '28%',
                        backgroundImage:
                            'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
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
                    height: '50vh',
                    overflow: 'hidden',
                    marginBottom: '30px',
                    marginTop: '30px', 
                  }}
            >
                {/* Circles */}
                <Technologies />

                {/* Texts */}
                <Typography variant="h5"
                    sx={{
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'Semi-Bold',
                        marginTop: '30px',
                    }}>
                    You will
                </Typography>
                <Typography variant="h3"
                    sx={{
                        color: theme.palette.primary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: '500',
                    }}>
                    learn something
                </Typography>
                <Typography variant="h4"
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
                        top: '37%',
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
                        left: '15rem',
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
                <img
                    src={joinus_oof}
                    alt='joinus_oof'
                    style={{
                        maxWidth: '65%',
                        maxHeight: '100%',
                        objectFit: 'cover',

                    }}
                />
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
                    height: '150vh',
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

                {/* First row of reviews */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2.5rem',
                        position: 'absolute',
                        top: '16rem',
                        width: '100%',
                        height: 'auto', // ver melhor

                    }}>
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                </Box>

                {/* First second of reviews */}
                <Box
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2.5rem',
                        position: 'absolute',
                        top: '38rem',
                        width: '100%',
                    }}>
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit  consectetur adipiscing elit Lorem ipsum dolor"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                    <CustomReview
                        image={HeroImage}
                        name="John Doe"
                        department="Human Resources"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                        sx={{ position: "absolute", left: "50%", zIndex: 2 }}
                    />
                </Box>
            </Box>

            {/* 5th Section */}
            {/* <Box
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh',

                }}>

            </Box> */}

            {/* 6th Section */}
            <Box
                bgcolor="white"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '115vh',
                    overflow: 'visible',

                }}>
                <Typography
                    variant="h4"
                    sx={{
                        position: 'absolute',
                        top: '5rem',
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
                        top: '8rem',
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'bold',
                    }}
                >
                    Always be prepared!
                </Typography>
                <img src={guiadocandidato} alt='guiadocandidato' style={{
                    position: 'absolute',
                    maxWidth: '50%',
                    maxHeight: '100%',
                    objectFit: 'cover',
                    top: '15rem',
                    left: '15rem',
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
                        bottom: '5rem',
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
                    bottom: '2.5rem',
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: 'Light',
                    fontSize: 24,
                }}>
                    send us an-email
                </Link>
                {/* <Box
                    sx={{
                        position: 'absolute',
                        bottom: '-6rem',
                        width: '100%',
                        height: '20%',
                        backgroundColor: 'white',

                    }} /> */}


            </Box>
        </>



    );
};

export default JoinUs