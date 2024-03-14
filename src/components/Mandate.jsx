import React, {useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Mandate = ({title, year, mainAccomplishments, image, currentImageIndex, index}) => {
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

    
    return (<>
        <img
            src={dynamicImage}
            alt={`Image ${currentImageIndex + index - 1}`}
            style={{
                width: index === 1 ? '400px' : '340px',
                height: index === 1 ? '300px' : '260px',
                opacity: index === 1 ? 1 : 0.6,
                borderRadius: '25px',
                transition: 'opacity 0.3s ease-in-out',
            }}
        />
        {index === 1 && (
            <div>
                <Typography variant="h3" color="white" style={{ fontWeight: 'bold', marginTop: "40px", marginBottom: "25px" }}>
                    {title}
                </Typography>
                <Typography variant="h5" color="secondary" style={{ fontWeight: 'bold', marginTop: "30px", marginBottom: "25px" }}>
                    {year}
                </Typography>
                <Typography variant="h5" color="white" style={{ fontWeight: 'light', marginTop: "30px", marginBottom: "25px" }}>
                    {mainAccomplishments.map((accomplishment, index) => (
                            <><li key={index}>{accomplishment}</li></>                                         
                    ))}
                </Typography>
            </div>
        )}
    </>
    );
};

export default Mandate;
