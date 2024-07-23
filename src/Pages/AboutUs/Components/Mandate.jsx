import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Mandate = ({ title, year, mainAccomplishments, image, currentImageIndex, index, isDesktop }) => {
    const [dynamicImage, setDynamicImage] = useState(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const { default: dynamicImage } = await import(`../images/Mandates/${image}`);
                setDynamicImage(dynamicImage);
            } catch (error) {
                console.error('Error loading image:', error);
            }
        };

        loadImage();
    }, [image]);


    return (
        <>
            {isDesktop ? (
                <>
                    <img
                        src={dynamicImage}
                        alt={`Image ${currentImageIndex + index - 1}`}
                        style={{
                            width: index === 1 ? '400px' : '320px',
                            opacity: index === 1 ? 1 : 0.5,
                            borderRadius: '25px',
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                    {index === 1 && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h4" color="white" style={{ fontWeight: '600', marginTop: '20px' }}>
                                {title}
                            </Typography>
                            <Typography variant="h6" color="secondary" style={{ fontWeight: '600' }}>
                                {year}
                            </Typography>
                            <Typography color="white" style={{ fontWeight: '200', marginTop: '20px', textAlign: 'left' }}>
                                {mainAccomplishments.map((accomplishment, index) => (
                                    <li key={index}>{accomplishment}</li>
                                ))}
                            </Typography>
                        </div>
                    )}
                </>
            ) : (
                <div>
                    <img
                        src={dynamicImage}
                        alt={`Image ${currentImageIndex + index - 1}`}
                        style={{
                            width: '100%',
                            borderRadius: '25px',
                        }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Typography variant="h4" color="white" style={{ fontWeight: '600', marginTop: '20px' }}>
                            {title}
                        </Typography>
                        <Typography variant="h6" color="secondary" style={{ fontWeight: '600' }}>
                            {year}
                        </Typography>
                        <Typography color="white" style={{ fontWeight: '200', marginTop: '20px', textAlign: 'left' }}>
                            {mainAccomplishments.map((accomplishment, index) => (
                                <li key={index}>{accomplishment}</li>
                            ))}
                        </Typography>
                    </div>
                </div>
            )}
        </>
    );
};

export default Mandate;
