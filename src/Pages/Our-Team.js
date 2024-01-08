import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from './TOMADA DE POSSE.png'; // Change to a better res image?
import PlaceHolder from './placeholder.png'; // Change to a better res image?


const CustomComponent = ({ title, text, image }) => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box
                borderRadius={5}
                bgcolor="white"
                p={0}
                position="relative"
                overflow="show" // Change overflow to "hidden"
                width={300}
                height={350}
            >
                {/* Second Rectangle */}
                <Box
                    position="absolute"
                    bottom={-30}
                    width="100%"
                    textAlign="center"
                    zIndex={2}
                    borderRadius={5}
                >
                    <Box
                        borderRadius={3}
                        bgcolor="#C7B7BE"
                        p="3px"
                        mx="auto"
                        my={2}
                        width="80%"
                    >
                        <Typography 
                            variant="body2"
                            align="center"
                            sx={{ 
                                fontWeight: 'bold',
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography 
                            variant="body2"
                            align="center"
                            sx={{
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                            }} 
                        >
                            {text}
                        </Typography>
                    </Box>
                </Box>

                {/* Image */}
                <Box position="absolute" bottom={0} zIndex={1} width="100%">
                    <img
                        src={image}
                        alt="Custom"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Box>
            </Box>
        </ThemeProvider>
    );
};





const OurTeam = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box position="relative">
                <img
                    src={HeroImage}
                    alt="Innova Tomada De Posse"
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography
                    variant="h3"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 'Regular',
                        position: 'absolute',
                        top: '15%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                        textAlign: 'center',
                    }}>
                    We are made of people
                </Typography>
            </Box>
            
            <Box marginTop={4} marginBottom={4} textAlign="center">
                <Typography
                        variant="h5"
                        align="center"
                        sx={{
                            fontWeight: 'Medium',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            marginBottom: 1, // Adding margin bottom between texts
                        }}>
                        Our Board
                    </Typography>
                    <Typography
                        align="center"
                        sx={{
                            fontWeight: 'Regular',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                        }}>
                        our problem-solvers
                    </Typography>                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '50px', p: 5, border: 1 }} >
                <CustomComponent title='President' text='Inês Costa' image={PlaceHolder} />
                <CustomComponent title='External Affairs Vice-President' text='Leonor Almeida' image={PlaceHolder} />
                <CustomComponent title='Internal Affairs Vice-President' text='Carolina Maurício' image={PlaceHolder} />
                <CustomComponent title='Financial Manager' text='Nuno Alves' image={PlaceHolder} />
            </Box>

        </ThemeProvider>
    );
};

export default OurTeam;
