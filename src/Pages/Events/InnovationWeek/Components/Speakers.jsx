import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';
import { useMediaQuery } from "react-responsive";

import KatarinaLarsson from '../../../../Assets/Images/InnovationWeek/Speakers/katarina_larsson.png';
import PauloFerreira from '../../../../Assets/Images/InnovationWeek/Speakers/paulo_ferreira.png';
import MariaSaraiva from '../../../../Assets/Images/InnovationWeek/Speakers/maria_saraiva.png';
import NeuzaTeixeira from '../../../../Assets/Images/InnovationWeek/Speakers/neuza_teixeira.png';

const speakersData = {
    '1st Edition': [
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: KatarinaLarsson },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: PauloFerreira },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: MariaSaraiva },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: NeuzaTeixeira },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: KatarinaLarsson },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: PauloFerreira },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: MariaSaraiva },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: NeuzaTeixeira }        
    ],
    '2nd Edition': [
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: NeuzaTeixeira },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: PauloFerreira },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: MariaSaraiva },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: KatarinaLarsson },
    ],
    '3rd Edition': [
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: PauloFerreira },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: MariaSaraiva },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: KatarinaLarsson },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: NeuzaTeixeira },
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

    const getDisplayedSpeakers = (numToShow) => {
        if (speakers.length <= numToShow) {
            return speakers;
        }
        return [
            ...speakers.slice(currentIndex, currentIndex + numToShow),
            ...speakers.slice(0, Math.max(0, (currentIndex + numToShow) - speakers.length))
        ];
    };

    const isMobile = useMediaQuery({ maxWidth: 600 });
    const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
    const isDesktop = useMediaQuery({ minWidth: 1081 });

    const speakersToShow = isMobile ? 1 : isTablet ? 2 : 4;

    return (
        <div style={{ textAlign: 'center', backgroundColor: theme.palette.secondary.main, overflow: "hidden", padding: '2rem 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2vw', marginBottom: '2rem' }}>
                {Object.keys(speakersData).map((edition) => (
                    <Button
                    key={edition}
                    variant={selectedEdition === edition ? 'contained' : 'outlined'}
                    onClick={() => setSelectedEdition(edition)}
                    style={{
                        borderRadius: isMobile ? "4dvw" : '2dvw',
                        padding: isMobile ? "1vw 4vw" : '1vw 4vw',
                        backgroundColor: selectedEdition === edition ? '#559FA2' : 'white',
                        color: selectedEdition === edition ? 'white' : theme.palette.secondary.main,
                        textTransform: 'none',
                        fontWeight:"Bold",
                        fontSize: isMobile ? "0.9rem" : "1.2dvw",
                        '&:hover': {
                            backgroundColor: '#559FA2',
                            color: 'white'
                        }
                    }}
                >
                    {edition}
                </Button>
                ))}
            </div>

            <Typography variant="h3" style={{ fontSize: isMobile ? "1.5rem" : isTablet ? "2.5rem" : "3rem", marginBottom: '2rem', color: 'white' }}>
                SPEAKERS
            </Typography>

            {speakers.length > 0 ? (
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowBackIosIcon
                        onClick={handlePrev}
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            left: isMobile ? 25 : 35,
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: isMobile ? "2rem" : "3rem"
                        }}
                    />
                    <div style={{ display: 'flex', gap:'1rem', justifyContent: 'center', maxWidth: isTablet ? "70vw" : '85vw', overflow: 'hidden' }}>
                        {getDisplayedSpeakers(speakersToShow).map((speaker, index) => (
                            <div key={index} style={{ position: 'relative', width: isMobile ? "70vw" : "50%", border: "1px solid white", 
                                borderRadius: '20px', }}>
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    style={{
                                        width: '100%',
                                        height:  "400px",
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(85, 159, 162, 0.5)',
                                    color: 'white',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    alignItems: 'flex-start',
                                    padding: '1rem',
                                    boxSizing: 'border-box',
                                    borderRadius: '20px',
                                }}>
                                    <Typography variant="h5" style={{ fontSize: isMobile ? "1.2rem" : "1.5rem", fontWeight: "bold" }}>{speaker.name}</Typography>
                                    <Typography variant="body1" style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}>{speaker.title}</Typography>
                                    <Typography variant="body1" style={{ fontSize: isMobile ? "0.8rem" : "1rem" }}>{speaker.company}</Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ArrowForwardIosIcon
                        onClick={handleNext}
                        style={{
                            position: "absolute",
                            zIndex: 1,
                            right: isMobile ? 25 : 35,
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: isMobile ? "2rem" : "3rem"
                        }}
                    />
                </div>
            ) : (
                <Typography variant="body1" style={{ color: 'white' }}>No speakers available for this edition.</Typography>
            )}
        </div>
    );
};

export default Speakers;
