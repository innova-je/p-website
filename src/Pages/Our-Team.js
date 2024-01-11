import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from '../public/images/logos/other/TOMADA DE POSSE.png';
import PlaceHolder from '../public/images/logos/other/placeholder.png';


const CustomComponent = ({ title, text, image }) => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box
                borderRadius={5}
                bgcolor="#FFFFFF"
                position="relative"
                overflow="show" // Change overflow to "hidden"
                width={350}
                height={350}
            >
                
                {/* Image */}
                <Box
                    position="absolute"
                    zIndex={1}
                    width="100%"
                    height="100%"
                    borderRadius={5}
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-end', // Align items to the bottom
                    }}
                    >
                    <img
                        src={image}
                        alt="Informação sobre membro da In-Nova"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </Box>


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
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize:"85px",
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
                        variant="h3"
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
                        variant="h4"
                        align="center"
                        sx={{
                            fontWeight: 'Regular',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                        }}>
                        our problem-solvers
                    </Typography>                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5, border: 1 }} >
                <CustomComponent title='President' text='Inês Costa' image={PlaceHolder} />
                <CustomComponent title='External Affairs Vice-President' text='Leonor Almeida' image={PlaceHolder} />
                <CustomComponent title='Internal Affairs Vice-President' text='Carolina Maurício' image={PlaceHolder} />
                <CustomComponent title='Financial Manager' text='Nuno Alves' image={PlaceHolder} />
            </Box>

        </ThemeProvider>
    );
};

export default OurTeam;
