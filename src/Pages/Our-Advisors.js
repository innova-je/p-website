import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import PlaceHolder from '../images/other/placeholder.png';
import elements from '../images/other/Elements.png';
import CustomComponent from '../components/AdvisorComponent';




const CustomTitle = ({ title, theme }) => {

    return (
        <>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    fontWeight: '500',
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                    marginBottom: 1,
                    marginTop: "5%"
                }}
            >
                {title}
            </Typography>
        </>
    );
};


const backgroundTextStyle = {
    fontSize: '14.5rem',
    width: "100%",
    WebkitTextFillColor: 'transparent',
    WebkitTextStroke: '2px #73204340',
    position: "absolute",
    marginTop: "35%",
    zIndex: "0",
    textAlign: "center"
  };
  

const advisorsBoardData = [
  { name: 'Cláudia Quaresma', description: "Assistant Professor at NOVA SST Coordinator of 3D Printing Center for Health Researcher at LIBPhys" , image: PlaceHolder},
  { name: 'André Carvalho', description: "Assistant Professor at NOVA SST Researcher at 2Ai IPCA Researcher at Centro ALGORITMI" , image: PlaceHolder},
  { name: 'Rui Gonçalves', description: "PhD Student of Mechanical Engineering In-Nova Alumni" , image: PlaceHolder},
  { name: 'João Leitão', description: "Associate Professor at NOVA SST Researcher at NOVA LINCS - NOVA Laboratory for Computer Science and Informatics" , image: PlaceHolder},
  { name: 'Ana Rodrigo Gonçalves', description: "Head of Partnerships and Engagement at NOVA SST Senior Consultant at MACGROUP" , image: PlaceHolder},
  { name: 'Daniel Aelenei', description: "Associate Professor at NOVA SST" , image: PlaceHolder},
];

const alumniBoardData = [
    { name: 'Vasco Matos', description: "Associate Professor at NOVA SST Researcher at NOVA LINCS - NOVA Laboratory for Computer Science and Informatics" , image: PlaceHolder},
    { name: 'Ema Paulo', description: "Assistant Professor at NOVA SST Researcher at 2Ai IPCA Researcher at Centro ALGORITMI" , image: PlaceHolder},
    { name: 'Pedro Mirão', description: "PhD Student of Mechanical Engineering In-Nova Alumni" , image: PlaceHolder},
    { name: 'Guilherme Salvador', description: "Associate Professor at NOVA SST Researcher at NOVA LINCS - NOVA Laboratory for Computer Science and Informatics" , image: PlaceHolder},
    { name: 'Ana Rita Rebelo', description: "Head of Partnerships and Engagement at NOVA SST Senior Consultant at MACGROUP" , image: PlaceHolder},
  ];

const VascoMatosDescription = "Associate Professor at NOVA SST Researcher at NOVA LINCS - NOVA Laboratory for Computer Science and Informatics"

const OurAdvisors = () => {
    const theme = useTheme();
    
    return (
        <>
        <Box sx={{ position: "relative", top: "60px", height: "20vh" }}>
                <img
                    style={{ width: '100%', height: 'auto', position: 'relative' }}
                    src={elements}
                    alt='elements'
                />
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: "85px",
                        fontWeight: 'Regular',
                        position: 'absolute',
                        top: '5rem',
                        zIndex: 1,
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                    }}>
                    We are not alone
                </Typography>             
                
            </Box>

            <Typography style={backgroundTextStyle} noWrap>ADVISORY BOARD</Typography>


            <Box marginTop={15} marginBottom={4} textAlign="center" position="relative">
                <CustomTitle title="Advisory Board"  theme={theme} />
            </Box>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginTop: "5%",
            }}>
                <Box position="relative" sx={{ display: 'grid', justifyContent: 'center', columnGap: "5%", rowGap: "10%", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)" }}>
            {advisorsBoardData.map((advisor, index) => (
                <CustomComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
                />
            ))}
            </Box>
            </Box>
            
            <Box sx={{
                height: "160vh",
            }}>
              <Box marginTop={25} marginBottom={4} textAlign="center" position="relative">
                <CustomTitle title="Alumni Board"  theme={theme} />
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginTop: "5%",
            }}>
                <Box position="relative" sx={{ display: 'grid', justifyContent: 'center', columnGap: "5%", rowGap: "10%", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 1fr)" }}>
            {alumniBoardData.map((advisor, index) => (
                <CustomComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
                />
            ))}
            </Box>
            </Box>  
            </Box>
            

        </>
    );
};

export default OurAdvisors;