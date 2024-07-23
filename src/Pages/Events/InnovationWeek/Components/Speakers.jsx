import img1 from '../../../../images/other/IW-png.png';
import img2 from '../../../../images/other/404.png';
import img3 from '../../../../images/other/ThirstPortugal.png';
import img4 from '../../../../images/other/GuiaDoCandidato.png';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';

const speakersData = {
    '1st Edition': [
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
    ],
    '2nd Edition': [
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
    ],
    '3rd Edition': [
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
    ],
};

const Speakers = () => {
    const theme = useTheme();
    const [selectedEdition, setSelectedEdition] = useState('1st Edition');
    const [currentIndex, setCurrentIndex] = useState(0);

    const speakers = speakersData[selectedEdition] || [];

    useEffect(() => {
        setCurrentIndex(0); // Reset the index when edition changes
    }, [selectedEdition]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length);
    };

    const getDisplayedSpeakers = () => {
        if (speakers.length <= 4) {
            return speakers;
        }
        return [
            ...speakers.slice(currentIndex, currentIndex + 4),
            ...speakers.slice(0, Math.max(0, (currentIndex + 4) - speakers.length))
        ];
    };

    return (
        <Box sx={{ textAlign: 'center', backgroundColor: theme.palette.secondary.main, overflow: "hidden" }}>
            <Box sx={{display: 'flex', justifyContent: 'center', gap: '3vw', marginBottom: '4vw' }}>
                {Object.keys(speakersData).map((edition) => (
                    <Button
                        key={edition}
                        variant={selectedEdition === edition ? 'contained' : 'outlined'}
                        onClick={() => setSelectedEdition(edition)}
                        sx={{
                            borderRadius: '2dvw',
                            padding: '1vw 4vw',
                            backgroundColor: selectedEdition === edition ? '#559FA2' : 'white',
                            color: selectedEdition === edition ? 'white' : theme.palette.secondary.main,
                            textTransform: 'none',
                            fontWeight:"Bold",
                            fontSize:"1.2dvw",
                            '&:hover': {
                                backgroundColor: '#559FA2',
                                color: 'white'
                            }
                        }}
                    >
                        {edition}
                    </Button>
                ))}
            </Box>

            <Typography variant="h3" sx={{ marginBottom: '3vw', color: 'white' }}>SPEAKERS</Typography>

            {speakers.length > 0 ? (
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1vw', width: '100%' }}>
                    <ArrowBackIosIcon onClick={handlePrev} sx={{ position:"absolute", zIndex:1, left:30, cursor: 'pointer', color: 'white' }} />
                    <Box sx={{ display: 'flex', gap: '0.1vw', justifyContent: 'center' }}> 
                        {getDisplayedSpeakers().map((speaker, index) => (
                            <Box key={index} sx={{ textAlign: 'left', position: 'relative', minWidth: '200px' }}>
                                <img src={speaker.image} alt={speaker.name} style={{ width: '24.8dvw', height: '400px', objectFit: 'cover' }} />
                                <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(85, 159, 162, 0.24)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', padding: '20px', boxSizing: 'border-box' }}>
                                    <Typography variant="h5" sx={{ fontSize:"3dvw", fontWeight:"300", lineHeight:1, marginBottom:"0.5dvw"}}>{speaker.name}</Typography>
                                    <Typography variant="body1" sx={{ fontSize:"1dvw", fontWeight:"300" }}>{speaker.title}</Typography>
                                    <Typography variant="body1" sx={{ fontSize:"1dvw", fontWeight:"300"}}>{speaker.company}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <ArrowForwardIosIcon onClick={handleNext} sx={{position:"absolute", zIndex:1, right:30, cursor: 'pointer', color: 'white' }} />
                </Box>
            ) : (
                <Typography variant="body1" sx={{ color: 'white' }}>No speakers available for this edition.</Typography>
            )}
        </Box>
    );
};

export default Speakers;
