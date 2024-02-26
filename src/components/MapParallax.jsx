import React from 'react';
import HeroImage1 from '../images/other/map1.png';
import HeroImage2 from '../images/other/map2.png';
import HeroImage3 from '../images/other/map3.png';

import { ParallaxLayer, Parallax } from '@react-spring/parallax';

const parallaxStyle = {
    overflowY: 'scroll',
    // border: '1px solid red',
    scrollbarWidth: 'none',  // For Firefox
    '&::-webkit-scrollbar': {
        display: 'none',  // For Chrome, Safari, and Edge
    },
};

const ParallaxComponent = () => {
    return (
        <Parallax pages={3} style={parallaxStyle}>
            <ParallaxLayer offset={0} speed={0} style={{ zIndex: 2 }}>
                <img src={HeroImage1} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={0} style={{ zIndex: 2 }}>
                <img src={HeroImage2} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0} style={{ zIndex: 2 }}>
                <img src={HeroImage3} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
            </ParallaxLayer>
        </Parallax>
    );
};

export default ParallaxComponent;
