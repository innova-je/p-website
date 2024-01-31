import { Box, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import HeroImage from '../images/other/TOMADA DE POSSE.png';
import PlaceHolder from '../images/other/placeholder.png';
import elements from '../images/other/Elements.png';
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
    const sales_images = [{ PlaceHolder }, { PlaceHolder }, { PlaceHolder }, { PlaceHolder }, { PlaceHolder }, { PlaceHolder }, { PlaceHolder }];

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
                            'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))',
                    }}
                />
            </Box>


            <Box marginTop={15} marginBottom={4} textAlign="center" position="relative" sx={{}}>
                <CustomTitle title="Our Board" subtitle="our problem-solvers" theme={theme} />
            </Box>

            <Box position="relative" sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5 }} >
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

        </>
    );
};

export default OurTeam;