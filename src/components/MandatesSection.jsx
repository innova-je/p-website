import React, { useEffect, useState } from 'react';
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
    const [images, setImages] = useState([]);

    useEffect(() => {
        const importImages = async () => {
            const importedImages = [];
            for (let mandate of mandates) {
                const { default: image } = await import(`../images/Mandates/${mandate.image}`);
                importedImages.push(image);
            }
            setImages(importedImages);
        };
        importImages();
    }, [mandates]);

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
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', }}>
                            {mandate ? (
                                <>
                                    <div style={{ marginLeft: index === 1 ? '5dvw' : '-20dvw', flex: '0 0 auto', width: index === 1 ? '50dvw' : '35dvw' }}>
                                        <img
                                            src={images[(currentImageIndex + index - 1 + mandates.length) % mandates.length]}
                                            alt={mandates[index].title}
                                            style={{
                                                maxWidth: index === 1 ? '100%' : '80%',
                                                maxHeight: index === 1 ? '100%' : '80%',
                                                borderRadius: index === 1 ? '10px' : '5px',
                                                boxShadow: index === 1 ? '0px 0px 20px rgba(0, 0, 0, 0.3)' : 'none',
                                                opacity: index === 1 ? 1 : 0.5,
                                            }}
                                        />
                                    </div>
                                    <div style={{ width: '40dvw', opacity: index === 1 ? 1 : 0.5, marginLeft: index === 1 ? "20px" : undefined }}>
                                        <Typography variant="subtitle1" style={{ fontSize: index === 1 ? '6dvw' : '3dvw', color: 'white' }}>
                                            {mandate.title}
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: index === 1 ? '3.5dvw' : '2dvw', color: 'white' }}>
                                            Year: {mandate.year}
                                        </Typography>
                                        <Typography variant="body2" style={{ fontSize: index === 1 ? '3.5dvw' : '1.8dvw', color: 'white' }}>
                                            {mandate.mainAccomplishments.map((accomplishment, index) => (
                                                <><li key={index}>{accomplishment}</li></>
                                            ))}
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
                            // disabled={currentImageIndex === 0}
                            sx={{ marginRight: '10px', color: 'white' }}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                        <IconButton
                            variant="contained"
                            onClick={handleNextClick}
                            // disabled={currentImageIndex === mandates.length - 1}
                            sx={{ color: 'white' }}
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
                                <div style={{ width: '30dvw', height: '20dvw' }} />
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
