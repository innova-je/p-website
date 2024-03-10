import React from 'react';
import Map1 from '../images/other/map1.png';
import Map2 from '../images/other/map2.png';
import Map3 from '../images/other/map3.png';
import { Box, Typography } from '@mui/material';
import { theme } from '../theme';

// import { ParallaxLayer, Parallax } from '@react-spring/parallax';

// const parallaxStyle = {
//     overflowY: 'scroll',
//     // border: '1px solid red',
//     scrollbarWidth: 'none',  // For Firefox
//     '&::-webkit-scrollbar': {
//         display: 'none',  // For Chrome, Safari, and Edge
//     },
// };

const ParallaxComponent = () => {
    return (
        // <Parallax pages={3} style={parallaxStyle}>
        //     <ParallaxLayer offset={0} speed={0} style={{ zIndex: 2 }}>
        //         <img src={HeroImage1} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
        //     </ParallaxLayer>
        //     <ParallaxLayer offset={1} speed={0} style={{ zIndex: 2 }}>
        //         <img src={HeroImage2} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
        //     </ParallaxLayer>
        //     <ParallaxLayer offset={2} speed={0} style={{ zIndex: 2 }}>
        //         <img src={HeroImage3} alt="hero" style={{ position: "absolute", width: '60%', left: "20%", top:"34%" }} />
        //     </ParallaxLayer>
        // </Parallax>

        <Box sx={{ width: '70%', height: '50%', position: 'absolute', top: "33%" }}>
            <img src={Map1} alt="map1" style={{ position: "absolute", width: '100%' }} />
            <Box sx={{
                position: 'absolute',
                top: '30%',
                left: '50%',
                width: '30%',
                padding: '10px',
                paddingLeft: '20px', 
                borderRadius: '25px', 
                backgroundColor: 'white',  
            }}>
               
                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight:"Medium" }}>
                    Portugal
                </Typography>

                <Typography variant="body1" sx={{  color: theme.palette.secondary.main, fontWeight:"Medium"}}>
                    + 1100 Junior Entrepreneurs <br />
                    24 Junior Enterprises <br />
                    421k € Volume of Business <br />
                    242 Completed Products
                </Typography>
            </Box>
        </Box>


    );
};

export default ParallaxComponent;
