import { Box, Typography, Card, CardMedia } from '@mui/material';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import HeroImage from './TOMADA DE POSSE.png'; // Change to a better res image?

const Feed = () => {
    return (
        <ThemeProvider theme={useTheme}>
            <Box>
                <Typography variant="h3" align="center" gutterBottom>
                    We are made of people
                </Typography>
                <div className="image" style={{ maxWidth: '100%', overflow: 'hidden' }}>
                    <img
                        className="TOMADA-DE-POSSE" alt="Innova Tomada De Posse" src={HeroImage} style={{ width: '100%', height: 'auto' }} />
                </div>
            </Box>
        </ThemeProvider>
    );
};


export default Feed;
