import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import HeroImage from '../images/other/TOMADA DE POSSE.png';
import elements from '../images/other/Elements.png';
import CustomComponent from '../components/MemberComponents';
import CustomDepartment from '../components/CustomDepartment';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import laso from '../Animations/laso-animation.json';

import Members from '../Members.json'

const CustomTitle = ({ title, subtitle, theme }) => {

    return (
        <>
            <Typography
                variant="h3"
                align="center"
                sx={{
                    fontWeight: 'Medium',
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                    marginBottom: 1,
                }}
            >
                {title}
            </Typography>
            <Typography
                variant="h4"
                align="center"
                sx={{
                    fontWeight: 'Regular',
                    color: theme.palette.secondary.main,
                    fontFamily: theme.typography.fontFamily,
                }}
            >
                {subtitle}
            </Typography>
        </>
    );
};




const OurTeam = () => {
    const theme = useTheme();

    const cexDepartment = Members.departments.find((dept) => dept.name === "Conselho Executivo");
    const salesDepartment = Members.departments.find((dept) => dept.name === "Sales");
    const marketingDepartment = Members.departments.find((dept) => dept.name === "Marketing");
    const projectsDepartment = Members.departments.find((dept) => dept.name === "Projects");
    const qualityDepartment = Members.departments.find((dept) => dept.name === "Quality");
    const humanResourcesDepartment = Members.departments.find((dept) => dept.name === "Human Resources");

    const lasoRef = useRef<LottieRefCurrentProps>(null);

    return (
        <>
            <Box sx={{ position: "relative", top: "60px", height: "135vh" }}>
                <img
                    style={{ width: '100%', height: 'auto', position: 'absolute' }}
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
                    We are made of people
                </Typography>
                <img
                    style={{ width: '100%', height: 'auto', position: 'absolute', bottom: '0' }}
                    src={HeroImage}
                    alt="Innova Tomada De Posse"
                />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: "0",
                        width: '100%',
                        height: '40%',
                        backgroundImage:
                            'linear-gradient(to top, rgba(240,240,240,1), rgba(240,240,240,0))',
                    }}
                />
                
                <Lottie
                    lottieRef={lasoRef}
                    loop={false}
                    animationData={laso}
                    style={{
                        position: 'absolute',
                        right: '18rem',
                        top: '60px',
                        width: '330px',
                        zIndex: 1
                    }}
                    speed={2} // You can adjust the speed value as needed
                />

            </Box>


            <Box marginTop={15} marginBottom={4} textAlign="center" position="relative" sx={{}}>
                <CustomTitle title="Our Board" subtitle="our problem-solvers" theme={theme} />
            </Box>

            <Box position="relative" sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5 }} >
                <CustomComponent 
                    title={cexDepartment.president.title} 
                    name={cexDepartment.president.name} 
                    image={cexDepartment.president.imgDirectory} 
                />
                <CustomComponent 
                    title={cexDepartment.externalAffairsVicePresident.title} 
                    name={cexDepartment.externalAffairsVicePresident.name} 
                    image={cexDepartment.externalAffairsVicePresident.imgDirectory} 
                />
                <CustomComponent 
                    title={cexDepartment.internalAffairsVicePresident.title} 
                    name={cexDepartment.internalAffairsVicePresident.name} 
                    image={cexDepartment.internalAffairsVicePresident.imgDirectory} 
                />
                <CustomComponent 
                    title={cexDepartment.financialManager.title} 
                    name={cexDepartment.financialManager.name} 
                    image={cexDepartment.financialManager.imgDirectory} 
                />
                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 1 }} >
                <CustomComponent title={salesDepartment.director.title} name={salesDepartment.director.name} image={salesDepartment.director.imgDirectory} />
                <CustomComponent title={marketingDepartment.director.title} name={marketingDepartment.director.name} image={marketingDepartment.director.imgDirectory} />
                <CustomComponent title={projectsDepartment.director.title} name={projectsDepartment.director.name} image={projectsDepartment.director.imgDirectory} />
                <CustomComponent title={qualityDepartment.director.title} name={qualityDepartment.director.name} image={qualityDepartment.director.imgDirectory} />
                <CustomComponent title={humanResourcesDepartment.director.title} name={humanResourcesDepartment.director.name} image={humanResourcesDepartment.director.imgDirectory} />
            </Box>

            <Box marginTop={10} marginBottom={10} textAlign="center">
                <CustomTitle title="Our Departments" subtitle="who make the magic happen" theme={theme} />
            </Box>

            {/* SALES TEAM */}
            <CustomDepartment department={salesDepartment} /> {/*O department.name tem que estar no mesmo idioma que o site */}

            {/* MARKETING TEAM */}
            <CustomDepartment department={marketingDepartment}/>

            {/* PROJECTS TEAM */}
            <CustomDepartment department={projectsDepartment} />

            {/* QUALITY TEAM */}
            <CustomDepartment department={qualityDepartment} />

            {/* HUMAN RESOURCES TEAM */}
            <CustomDepartment department={humanResourcesDepartment} />

        </>
    );
};

export default OurTeam;