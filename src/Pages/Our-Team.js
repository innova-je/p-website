import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from '../public/images/logos/other/TOMADA DE POSSE.png';
import PlaceHolder from '../public/images/logos/other/placeholder.png';
import elements from '../public/images/logos/other/Elements.png';
import CustomComponent from '../components/MemberComponents';
import CustomDepartment from '../components/CustomDepartment';

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
    const sales_names = ['Inês Mendes', 'Leonor Almeida', 'Carolina Maurício', 'Nuno Alves', 'Nuno Alves', 'Nuno Alves', 'Nuno Alves'];
    const sales_images = [{PlaceHolder},{PlaceHolder},{PlaceHolder},{PlaceHolder},{PlaceHolder},{PlaceHolder},{PlaceHolder}];

    return (
        <ThemeProvider theme={theme}>
           <Box position="relative" sx={{marginTop:"20px"}}>
                <img
                    src={elements}
                    alt='elements'
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: "85px",
                        fontWeight: 'Regular',
                        position: 'absolute',
                        top: '50%', // Adjusted to 50% to center vertically
                        left: '50%',
                        transform: 'translate(-50%, -50%)', 
                        zIndex: 2, 
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                        textAlign: 'center',
                    }}>
                    We are made of people
                </Typography>
            </Box>

            <Box position="relative" style={{ top: '-60px', zIndex: 1 }}>
                <img
                    src={HeroImage}
                    alt="Innova Tomada De Posse"
                    style={{ width: '100%', height: 'auto' }}
                    />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -1,
                        width: '100%',
                        height: '70%',
                        backgroundImage:
                            'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
                    }}
                />
            </Box>


            
            <Box marginTop={1} marginBottom={4} textAlign="center">
                <CustomTitle title="Our Board" subtitle="our problem-solvers" theme={theme} />                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5}} >
                <CustomComponent title='President' name='Inês Costa' image={PlaceHolder} />
                <CustomComponent title='External Affairs Vice-President' name='Leonor Almeida' image={PlaceHolder} />
                <CustomComponent title='Internal Affairs Vice-President' name='Carolina Maurício' image={PlaceHolder} />
                <CustomComponent title='Financial Manager' name='Nuno Alves' image={PlaceHolder} />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 1 }} >
                <CustomComponent title='Sales Director' name='Inês Mendes' image={PlaceHolder} />
                <CustomComponent title='Marketing Director' name='Matilde Azadinho' image={PlaceHolder} />
                <CustomComponent title='Projects Director' name='Vicente Rodriques dos Santos' image={PlaceHolder} />
                <CustomComponent title='Quality Director' name='Filipa Santos' image={PlaceHolder} />
                <CustomComponent title='Human Resources Director' name='Rodrigo Marques' image={PlaceHolder} />
            </Box>

            <Box marginTop={10} marginBottom={10} textAlign="center">
                <CustomTitle title="Our Departments" subtitle="who make the magic happen" theme={theme} />                
            </Box>

            
            {/* SALES TEAM */}
            <CustomDepartment Department='Sales Team' names={sales_names} images={sales_images} />

            {/* MARKETING TEAM */}
            <CustomDepartment Department='Marketing Team' names={sales_names} images={sales_images} />

            {/* PROJECTS TEAM */}  
            <CustomDepartment Department='Projects Team' names={sales_names} images={sales_images} />

            {/* QUALITY TEAM */}
            <CustomDepartment Department='Quality Team' names={sales_names} images={sales_images} />

            {/* HUMAN RESOURCES TEAM */}
            <CustomDepartment Department='Human Resources Team' names={sales_names} images={sales_images} />

        </ThemeProvider>
    );
};

export default OurTeam;