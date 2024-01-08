import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from './TOMADA DE POSSE.png'; // Change to a better res image?

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
        </ThemeProvider>
    );
};

export default OurTeam;
