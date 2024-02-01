import React from 'react';
import linkedin from "../images/Icons/linkedin-icon.png";

const circleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    border: '2px solid #818080',
    margin: '0',
};

const imageStyle = {
    position: 'absolute',
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundSize: 'cover',
    transition: 'transform 0.2s ease-in-out', 
    filter: 'grayscale(100%)',
    zIndex: 1,
};

const Technologies = () => {
    const images = [
        linkedin, linkedin, linkedin, linkedin, linkedin,
        linkedin, linkedin, linkedin, linkedin, linkedin,
    ];

    const distributeImages = (circleWidth, circleHeight, numImages) => {
        const imagesArray = [];
        const radiusX = circleWidth / 2;
        const radiusY = circleHeight / 2;

        for (let i = 0; i < numImages; i++) {
            const angle = (i / numImages) * 2 * Math.PI;
            const x = radiusX * Math.cos(angle);
            const y = radiusY * Math.sin(angle);
            imagesArray.push(
                <div
                    key={i}
                    style={{
                        ...imageStyle,
                        top: `calc(50% - 25px + ${y}px)`,
                        left: `calc(50% - 25px + ${x}px)`,
                        backgroundImage: `url(${images[i % images.length]})`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.filter = 'grayscale(0)'; // Remove grayscale on hover
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'grayscale(100%)'; // Add grayscale on mouse leave
                    }}
                />
            );
        }
        return imagesArray;
    };

    return (
        <>
            <div
                style={{
                    ...circleStyle,
                    width: '700px',
                    height: '600px',
                    top: '-11rem',
                }}
            >
                {distributeImages(700, 600, 12)}
            </div>
            <div
                style={{
                    ...circleStyle,
                    width: '1000px',
                    height: '800px',
                    top: '-15rem',
                }}
            >
                {distributeImages(1000, 800, 15)}
            </div>
            <div
                style={{
                    ...circleStyle,
                    width: '1350px',
                    height: '900px',
                    top: '-16rem',
                }}
            >
                {distributeImages(1350, 900, 20)}
            </div>
        </>
    );
};

export default Technologies;
