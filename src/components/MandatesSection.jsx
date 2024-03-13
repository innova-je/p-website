import React, {useState, useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, Typography } from '@mui/material';
import Mandates from '../Mandates.json';
import Mandate from './Mandate';

const MandatesSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const mandates = Mandates.mandates;

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + mandates.length) % mandates.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mandates.length);
    };

    let visibleMandates;
    if (mandates.length === 2) {
        visibleMandates = [null, mandates[currentImageIndex], mandates[(currentImageIndex + 1) % mandates.length]];
    } else {
        visibleMandates = [
            mandates[(currentImageIndex - 1 + mandates.length) % mandates.length],
            mandates[currentImageIndex],
            mandates[(currentImageIndex + 1) % mandates.length],
        ];
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {visibleMandates.map((mandate, index) => (
                    <div key={index} style={{ textAlign: 'center', height: '250px', margin: '0 70px' }}>
                        {mandate ? (
                            <Mandate title={mandate.title} year={mandate.year} mainAccomplishments={mandate.mainAccomplishments} image={mandate.image} currentImageIndex={mandate.currentImageIndex} index={index}/>
                        ) : (
                            <div style={{ width: '300px', height: '200px' }} />
                        )}
                    </div>
                ))}
            </div>

            <IconButton
                variant="contained"
                onClick={handlePrevClick}
                sx={{
                    position: "absolute",
                    left: 450,
                    top: 133,
                    color: 'primary.main',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            >
                <ArrowBackIosIcon sx={{ fontSize: '2.5rem' }}/>
            </IconButton>
            <IconButton
                variant="contained"
                onClick={handleNextClick}
                sx={{
                    position: "absolute",
                    right: 445,
                    top: 133,
                    color: 'primary.main',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            >
                <ArrowForwardIosIcon sx={{ fontSize: '2.5rem' }}/>
            </IconButton>
        </>
    );
};

export default MandatesSection;
