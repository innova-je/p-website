import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import test from '../images/other/about-us.png';
import test2 from '../images/other/joinus-outofoffice.png';
import test3 from '../images/other/joinus_img.png';
import { IconButton, Typography } from '@mui/material';
import { useMediaQuery } from 'react-responsive';

const images = [test, test2, test3];

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const imageContent = [
        { title: 'Mandato I', year: "2019-2020", points: ['Bullet 1', 'Bullet 2'] },
        { title: 'Mandato II', year: "2020-2021", points: ['Bullet 1', 'Bullet 2'] },
        { title: 'Mandato III', year: "2021-2022", points: ['Bullet 1', 'Bullet 2'] },
    ];

    let visibleImages;
    if (images.length === 2) {
        visibleImages = [null, images[currentImageIndex], images[(currentImageIndex + 1) % images.length]];
    } else {
        visibleImages = [
            images[(currentImageIndex - 1 + images.length) % images.length],
            images[currentImageIndex],
            images[(currentImageIndex + 1) % images.length],
        ];
    }

    const mobile = useMediaQuery({ maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
    const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
    const largeDesktop = useMediaQuery({ minWidth: 1400 })

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border:"2px solid red"}}>
                {visibleImages.map((image, index) => (
                    <div key={index} style={{ textAlign: 'center', height: '18dvw', margin: '0 4dvw', border:"2px solid blue" }}>
                        {image ? (
                            <>
                                <img
                                    src={image}
                                    alt={`Image ${currentImageIndex + index - 1}`}
                                    style={{
                                        width: index === 1 ? (tablet ? '35dvw' : mobile ? '35dvw' : '30dvw') : "22dvw",
                                        height: index === 1 ? (tablet ? '23dvw' : mobile ? '23dvw' : '18dvw') : '18dvw',
                                        opacity: index === 1 ? 1 : 0.6,
                                        borderRadius: '1dvw',
                                        transition: 'opacity 0.3s ease-in-out',
                                    }}
                                />
                                {index === 1 && (
                                    <div style={{border:"2px solid red", marginTop: "3dvw"}}>
                                        <Typography variant="h3" color="white" style={{ fontWeight: 'bold', marginTop: "20px", marginBottom: "25px" }}>
                                            {imageContent[currentImageIndex].title}
                                        </Typography>
                                        <Typography variant="h5" color="secondary" style={{ fontWeight: 'bold', marginTop: "30px", marginBottom: "25px" }}>
                                            {imageContent[currentImageIndex].year}
                                        </Typography>
                                        <Typography variant="h5" color="white" style={{ fontWeight: 'light', marginTop: "30px", marginBottom: "25px" }}>
                                            - {imageContent[currentImageIndex].points[0]}<br />
                                            - {imageContent[currentImageIndex].points[1]}
                                        </Typography>
                                    </div>
                                )}
                            </>
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
                    position: "relative",
                    left: "27dvw",
                    top: '-11dvw',
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
                    position: "relative",
                    right:"-60dvw",
                    top: '-11dvw',
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

export default ImageCarousel;
