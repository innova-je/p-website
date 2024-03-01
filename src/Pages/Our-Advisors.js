import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PlaceHolder from '../images/other/placeholder.png';
import elements from '../images/other/Elements.png';
import AdvisorComponent from '../components/AdvisorComponent';
import AlumniComponent from '../components/AlumniComponent';
import { useMediaQuery } from 'react-responsive';

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
            {advisorsBoardData.map((advisor, index) => (
                <AdvisorComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
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
            {alumniBoardData.slice(0,3).map((advisor, index) => (
                <AlumniComponent
                key={index}
                name={advisor.name}
                description={advisor.description}
                image={advisor.image}
                />
            ))}
            </Box>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', columnGap: "5%"}} >
            {alumniBoardData.slice(3,5).map((advisor, index) => (
                <AlumniComponent
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