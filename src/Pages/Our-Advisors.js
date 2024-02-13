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
                align="center"
                sx={{
                    fontWeight: '500',
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                    backgroundColor: "#F0F0F0",
                    height: "15vh",
                    width: "30%",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3vw"
                }}
            >
                {title}
            </Typography>
        </>
    );
};


const backgroundTextStyle = {
    fontSize: '12vw',
    width: '100%',
    color: '#F0F0F0',
    textShadow: '1px 1px #73204340, -1px -1px #73204340, 1px -1px #73204340, -1px 1px #73204340',
    zIndex: '0',
    textAlign: 'center',
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


const OurAdvisors = () => {
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
                        fontSize: "5vw",
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

            

            <Typography style={backgroundTextStyle} sx={{
                position: "absolute",
                top: "95%"
            }} noWrap>ADVISORY BOARD</Typography>

            <Typography style={backgroundTextStyle} sx={{
                position: "absolute",
                top: "145%"
            }} noWrap>ADVISORY BOARD</Typography>



            <Box marginTop={15} marginBottom={4} textAlign="center" position="relative">
                <CustomTitle title="Advisory Board"  theme={theme} />
            </Box>

            <Typography style={backgroundTextStyle} sx={{
                position: "relative",
                top: "0%"
            }} noWrap>ADVISORY BOARD</Typography>

            <Box sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                marginTop: "-15%",
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
              <Box marginTop={30} marginBottom={4} textAlign="center" position="relative">
                <CustomTitle title="Alumni Board"  theme={theme} />
            </Box>
            <Typography style={backgroundTextStyle} sx={{
                position: "relative",
                top: "-5%"
            }} noWrap>ALUMNI BOARD</Typography> 

            <Box sx={{
                display: "grid",
                rowGap: "10%",
                justifyContent: "center",
                position: "relative",
                marginTop: "-15%",
            }}>

            <Box sx={{ display: 'grid', justifyContent: 'center', columnGap: "5%", gridTemplateColumns: "repeat(3, 1fr)"}} >
            {alumniBoardData.slice(0,3).map((advisor, index) => (
                <CustomComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
                />
            ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: "5%"}} >
            {alumniBoardData.slice(3,5).map((advisor, index) => (
                <CustomComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
                />
            ))}
            </Box>
                
            </Box>  

            <Typography style={backgroundTextStyle} sx={{
                position: "relative",
                top: "-40%",
                zIndex: "0"
            }} noWrap>ALUMNI BOARD</Typography>

            <Typography style={backgroundTextStyle} sx={{
                position: "relative",
                top: "-30%"
            }} noWrap>ALUMNI BOARD</Typography>
            


            </Box>
            

        </>
    );
};

export default OurAdvisors;