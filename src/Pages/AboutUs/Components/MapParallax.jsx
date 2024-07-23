import React from 'react';
import Map1 from '../../../images/other/map1.png';
import Map2 from '../../../images/other/map2.png';
import Map3 from '../../../images/other/map3.png';
import { Box, Typography } from '@mui/material';
import { theme } from '../../../theme';
import { useMediaQuery } from 'react-responsive';

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

    const mobile = useMediaQuery({ maxWidth: 767 });
    const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

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

        <Box sx={{
            width: tablet ? '100%': mobile ? '100%' : '70dvw', position: "relative"
        }}
        >
            <img src={Map1} alt="map1" style={{objectFit: "fit", width: "100%"}} />
            <Box sx={{
                position: 'absolute',
                top: "27%",
                left: "48%",
                width: tablet ? '35%' : mobile ? '33%' : "27%",
                padding: tablet ? '2dvw': mobile ? '2dvw' :"1dvw",
                paddingLeft: tablet ? '2.5dvw': mobile ? '2.5dvw' :"2dvw",
                borderRadius: '2dvw',
                backgroundColor: 'white',
            }}>

                <Typography variant="h5" sx={{ color: theme.palette.primary.main, fontWeight: "Medium", fontSize: (tablet ? '3.5dvw': mobile ? '4dvw' :"2dvw") }}>
                    Portugal
                </Typography>

                <Typography variant="body1" sx={{ color: theme.palette.secondary.main, fontWeight: "300", fontSize: (tablet ? '2.5dvw': mobile ? '2.5dvw' :"1.5dvw"), lineHeight: tablet || mobile ? '5dvw' : "2.5dvw",marginTop:'0.7rem' }}>
                    +1100 Junior Entrepreneurs <br />
                    24 Junior Enterprises <br />
                    421k € Volume of Business <br />
                    242 Completed Products
                </Typography>
            </Box>
        </Box>


    );
};

export default ParallaxComponent;
