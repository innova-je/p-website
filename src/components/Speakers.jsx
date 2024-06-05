import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import img1 from '../images/other/IW-png.png';
import img2 from '../images/other/404.png';
import img3 from '../images/other/ThirstPortugal.png';
import img4 from '../images/other/GuiaDoCandidato.png';

import { Typography, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useTheme } from '@emotion/react';

// Example speaker data
const speakerData = {
    edition1: [
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
    ],
    edition2: [
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
    ],
    edition3: [
        { name: 'Paulo Ferreira', title: 'Manager Adsales & Partnership', company: 'The Walt Disney Company', image: img2 },
        { name: 'Maria Saraiva', title: 'Strategy and Operations', company: 'Google EMEA', image: img3 },
        { name: 'Katarina Larsson', title: 'Factory Logistics Manager', company: 'Philip Morris International', image: img1 },
        { name: 'Neuza Teixeira', title: 'Country Medical Manager', company: 'GSK', image: img4 },
    ],
};

const SpeakerContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
    marginTop: '16px',
    width: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    borderRadius: '8px',
});

const SpeakerCarousel = styled(Box)({
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    width: '100%',
});

const SpeakerCard = styled(Box)({
    textAlign: 'center',
    color: 'white',
    width: '25%', // To fit 4 speakers within the container
    position: 'relative',
    flexShrink: 0,
});

const SpeakerImage = styled('img')({
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
});

const SpeakerInfo = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
    boxSizing: 'border-box',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
});

const EditionButton = styled(Button)(({ active }) => ({
    margin: '8px',
    padding: '8px 16px',
    backgroundColor: active ? '#3B9DFF' : '#FFFFFF',
    color: active ? '#FFFFFF' : '#3B9DFF',
    '&:hover': {
        backgroundColor: active ? '#3B9DFF' : '#E0E0E0',
    },
    borderRadius: '20px',
    boxShadow: active ? '0px 4px 12px rgba(59, 157, 255, 0.4)' : 'none',
}));

const InnovationWeek = () => {
    const theme = useTheme();
    const [currentEdition, setCurrentEdition] = useState('edition1');
    const [startIndex, setStartIndex] = useState(0);

    const speakers = speakerData[currentEdition];
    const speakersPerPage = 4;

    const handleEditionChange = (edition) => {
        setCurrentEdition(edition);
        setStartIndex(0);
    };

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + speakersPerPage) % speakers.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) => (prevIndex - speakersPerPage + speakers.length) % speakers.length);
    };

    const visibleSpeakers = () => {
        const endIndex = startIndex + speakersPerPage;
        if (endIndex <= speakers.length) {
            return speakers.slice(startIndex, endIndex);
        } else {
            return [...speakers.slice(startIndex), ...speakers.slice(0, endIndex % speakers.length)];
        }
    };

    return (
        <Box sx={{backgroundColor: theme.palette.secondary.main}}>
            <Box display="flex" justifyContent="center" >
                <EditionButton
                    active={currentEdition === 'edition1'}
                    onClick={() => handleEditionChange('edition1')}
                >
                    1st Edition
                </EditionButton>
                <EditionButton
                    active={currentEdition === 'edition2'}
                    onClick={() => handleEditionChange('edition2')}
                >
                    2nd Edition
                </EditionButton>
                <EditionButton
                    active={currentEdition === 'edition3'}
                    onClick={() => handleEditionChange('edition3')}
                >
                    3rd Edition
                </EditionButton>
            </Box>

            <Typography variant="h4" align="center" marginTop="16px" color="#FFFFFF">
                SPEAKERS
            </Typography>

            <SpeakerContainer>
                <IconButton onClick={handlePrev} disabled={speakers.length <= speakersPerPage}>
                    <ArrowBackIosIcon style={{ color: '#FFFFFF' }} />
                </IconButton>

                <SpeakerCarousel>
                    {visibleSpeakers().map((speaker, index) => (
                        <SpeakerCard key={index}>
                            <SpeakerImage src={speaker.image} alt={speaker.name} />
                            <SpeakerInfo>
                                <Typography variant="h6">{speaker.name}</Typography>
                                <Typography variant="body1">{speaker.title}</Typography>
                                <Typography variant="body2">{speaker.company}</Typography>
                            </SpeakerInfo>
                        </SpeakerCard>
                    ))}
                </SpeakerCarousel>

                <IconButton onClick={handleNext} disabled={speakers.length <= speakersPerPage}>
                    <ArrowForwardIosIcon style={{ color: '#FFFFFF' }} />
                </IconButton>
            </SpeakerContainer>
        </Box>
    );
};

export default InnovationWeek;
