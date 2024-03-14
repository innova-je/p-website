import React from 'react';
// images
import android from '../images/Icons/android-icon.png';
import apple from '../images/Icons/apple-icon.png';
import arduino from '../images/Icons/arduino-icon.png';
import canva from '../images/Icons/canva-icon.png';
import excel from '../images/Icons/excel-icon.png';
import figma from '../images/Icons/figma-icon.png';
import github from '../images/Icons/github-icon.png';
import illustrator from '../images/Icons/illustrator-icon.png';
import instagram from '../images/Icons/instagram-icon.png';
import java from '../images/Icons/java-icon.png';
import javascript from '../images/Icons/javascript-icon.png';
import linkedin from '../images/Icons/linkedin-icon.png';
import notion from '../images/Icons/notion-icon.png';
import photoshop from '../images/Icons/photoshop-icon.png';
import premier from '../images/Icons/premier-icon.png';
import raspberrypi from '../images/Icons/raspberrypi-icon.png';
import react from '../images/Icons/react-icon.png';
import wordpress from '../images/Icons/wordpress-icon.png';
import html from '../images/Icons/html-icon.png';
import css from '../images/Icons/css-icon.png';
import c from '../images/Icons/c-icon.png';
import googlefirebase from '../images/Icons/googlefirebase-icon.png';
import teams from '../images/Icons/teams-icon.png';
import postman from '../images/Icons/postman-icon.png';
import solidworks from '../images/Icons/solidworks-icon.png';

const circleStyle = {
    position: 'absolute',
    borderRadius: '50%',
    border: '2px solid #818080',
    margin: '0',
};

const imageStyle = {
    position: 'absolute',
    width: '60px',
    height: '60px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    // backgroundColor: 'white',
    transition: 'transform 0.2s ease-in-out',
    filter: 'grayscale(100%)',
    zIndex: 1,
};

const Technologies = () => {
    const distributeImages = (circleWidth, circleHeight, imageUrls) => {
        const imagesArray = [];
        const numImages = imageUrls.length;
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
                        backgroundImage: `url(${imageUrls[i % numImages]})`,
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.filter = 'grayscale(0)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'grayscale(100%)';
                    }}
                />
            );
        }
        return imagesArray;
    };

    const circle1Images = [
        html, wordpress, teams,postman , linkedin, illustrator, react, canva, excel, excel, excel  
    ];

    const circle2Images = [
        googlefirebase, photoshop, raspberrypi, javascript, javascript, excel, excel, java, notion, c, apple, excel, excel, excel, excel, excel, excel, excel, instagram,
    ];

    const circle3Images = [
        github, excel, solidworks, postman, postman, postman, postman, postman, arduino, premier, figma, css, postman, postman, postman, postman, postman, postman, postman, android
    ];

    return (
        <>
            <div
                style={{
                    ...circleStyle,
                    width: '45dvw',
                    height: '40dvw',
                    top: '-11dvw',
                }}
            >
                {distributeImages(700, 600, circle1Images)}
            </div>
            <div
                style={{
                    ...circleStyle,
                    width: '65dvw',
                    height: '50dvw',
                    top: '-15dvw',
                }}
            >
                {distributeImages(1000, 800, circle2Images)}
            </div>
            <div
                style={{
                    ...circleStyle,
                    width: '88dvw',
                    height: '58dvw',
                    top: '-17dvw',
                }}
            >
                {distributeImages(1350, 900, circle3Images)}
            </div>
        </>
    );
};

export default Technologies;
