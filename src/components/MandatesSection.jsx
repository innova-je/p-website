import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton, Typography } from '@mui/material';
import Mandates from '../Mandates.json';
// Import Mandate component
import Mandate from './Mandate';
import { useMediaQuery } from 'react-responsive';

const MandatesSection = () => {
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 767 });
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
            {!isDesktopOrLaptop && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {visibleMandates.map((mandate, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                            {mandate ? (
                                <>
                                    <div style={{ marginRight: '20px' }}>
                                        <img
                                            src={mandate.image}
                                            alt={mandate.title}
                                            style={{ maxWidth: '200px', maxHeight: '200px' }}
                                        />
                                    </div>
                                    <div>
                                        <Typography variant="subtitle1" gutterBottom>
                                            {mandate.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Year: {mandate.year}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Main Accomplishments: {mandate.mainAccomplishments}
                                        </Typography>
                                    </div>
                                </>
                            ) : (
                                <div style={{ width: '200px', height: '200px' }} />
                            )}
                        </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <IconButton
                            variant="contained"
                            onClick={handlePrevClick}
                            disabled={currentImageIndex === 0}
                            sx={{ marginRight: '10px' }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton
                            variant="contained"
                            onClick={handleNextClick}
                            disabled={currentImageIndex === mandates.length - 1}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>
            )}

            {isDesktopOrLaptop && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {visibleMandates.map((mandate, index) => (
                        <div key={index} style={{ textAlign: 'center', height: '100vh', margin: '0 70px' }}>
                            {mandate ? (
                                <Mandate
                                    title={mandate.title}
                                    year={mandate.year}
                                    mainAccomplishments={mandate.mainAccomplishments}
                                    image={mandate.image}
                                    currentImageIndex={mandate.currentImageIndex}
                                    index={index}
                                />
                            ) : (
                                <div style={{ width: '300px', height: '200px' }} />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {isDesktopOrLaptop && (
                <>
                    <IconButton
                        variant="contained"
                        onClick={handlePrevClick}
                        sx={{
                            position: 'absolute',
                            left: 450,
                            top: 133,
                            color: 'primary.main',
                            '&:hover': {
                                color: 'white',
                            },
                        }}
                    >
                        <ArrowBackIosIcon sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                    <IconButton
                        variant="contained"
                        onClick={handleNextClick}
                        sx={{
                            position: 'absolute',
                            right: 445,
                            top: 133,
                            color: 'primary.main',
                            '&:hover': {
                                color: 'white',
                            },
                        }}
                    >
                        <ArrowForwardIosIcon sx={{ fontSize: '2.5rem' }} />
                    </IconButton>
                </>
            )}
        </>
    );
};

export default MandatesSection;
