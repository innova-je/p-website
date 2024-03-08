import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PlaceHolder from '../images/other/placeholder.png';
import elements from '../images/other/Elements.png';
import AdvisorComponent from '../components/AdvisorComponent';
import AlumniComponent from '../components/AlumniComponent';
import { useMediaQuery } from 'react-responsive';

import Advisors from '../Advisors.json'

const CustomTitle = ({ title, theme }) => { 

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

    return (
        <>
            <Typography
                align="center"
                sx={{
                    fontWeight: '500',
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                    backgroundColor: "#F0F0F0",
                    height: "15vh",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: (desktop ? "3dvw" : (tablet ? "4dvw" : "6dvw")),
                }}
            >
                {title}
            </Typography>
        </>
    );
}; 
  

const advisoryBoardData = Advisors.advisoryBoard[0]?.advisors;
const alumniBoardData = Advisors.alumniBoard[0]?.alumnis;


const OurAdvisors = () => {

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

    const theme = useTheme();
    
    return (
        <>
        <Box sx={{ position: "relative", top: "60px", height: "20vh" }}>
                <img
                    style={{ width: '100%', height: 'auto', position: 'absolute', top: "10%"}}
                    src={elements}
                    alt='elements'
                />
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: (desktop ? "5dvw" : (tablet ? "6dvw" : "8dvw")),
                        fontWeight: 'Regular',
                        position: 'relative',
                        top: '50%',
                        zIndex: 1,
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                    }}>
                    We are not alone
                </Typography>             
                
            </Box>           

            <Box sx={{
                marginTop: (desktop ? 15 : (tablet ? 6 : 0)),
                marginBottom: 4,
                textAlign: "center",
                position: "relative"
            }}>
                <CustomTitle title="Advisory Board"  theme={theme} />
            </Box>
            
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginTop: "5%",
            }}>
                <Box position="relative" sx={{ 
                    display: (desktop ? "grid" : (tablet ? "grid" : "grid")),
                    flexDirection:"column",
                    justifyContent: 'center', 
                    columnGap: mobile ? "10%" : "5%", 
                    rowGap: mobile ? "5%" : "10%", 
                    gridTemplateColumns: (desktop ? "repeat(3, 1fr)" : (tablet ? "repeat(3, 1fr)" : "repeat(2, 1fr)")),                    
                    gridTemplateRows: "repeat(2, 1fr)" 
                    }}>
            {advisoryBoardData.map((advisor, index) => (
                <AdvisorComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.imgDirectory}
                />
            ))}
            </Box>
            </Box>
            
            <Box sx={{
                height: mobile ? "100%" : "160vh",
            }}>
              <Box sx={{
                marginTop: (desktop ? 20 : (tablet ? 6 : 6)),
                marginBottom: (desktop ? 4 : (tablet ? 2 : 0)),
                textAlign: "center",
                position: "relative"
            }}>
                <CustomTitle title="Alumni Board"  theme={theme} />
            </Box>

            <Box sx={{
                display: "grid",
                rowGap: "10%",
                justifyContent: "center",
                position: "relative",
                marginTop: "5%",
            }}>

            <Box sx={{ 
                display: 'grid', 
                justifyContent: 'center', 
                columnGap: "5%", 
                rowGap: "10%",
                gridTemplateColumns: (desktop ? "repeat(3, 1fr)" : (tablet ? "repeat(3, 1fr)" : "repeat(2, 1fr)")),
                }} >
            {alumniBoardData.slice(0,3).map((alumni, index) => (
                <AlumniComponent
                key={index}
                name={alumni.name}
                description={alumni.description}
                testimony={alumni.testimony}
                image={alumni.imgDirectory}
                />
            ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: "5%"}} >
            {alumniBoardData.slice(3,5).map((alumni, index) => (
                <AlumniComponent
                key={index}
                name={alumni.name}
                description={alumni.description}
                testimony={alumni.testimony}
                image={alumni.imgDirectory}
                />
            ))}
            </Box>
                
            </Box>  
            
            </Box>
            

        </>
    );
};

export default OurAdvisors;