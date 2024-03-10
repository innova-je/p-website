import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import { useTheme } from '@mui/material/styles';
import HeroImage from '../images/other/TOMADA DE POSSE.png';
import PlaceHolder from '../images/other/placeholder.png';
import elements from '../images/other/Elements.png';
import CustomComponent from '../components/MemberComponents';
import CustomDepartment from '../components/CustomDepartment';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import laso from '../Animations/laso-animation.json';

import Members from '../Members.json'
import { useMediaQuery } from 'react-responsive';

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

const getMemberNames = (departmentName) => {
    const department = Members.departments.find((dept) => dept.name === departmentName);
    return department ? department.members.map((member) => member.name) : [];
};

const getMemberImages = (departmentName) => {
    const department = Members.departments.find((dept) => dept.name === departmentName);
    return department ? department.members.map((member) => member.imgDirectory) : [];
};


const OurTeam = () => {
    const theme = useTheme();

    const sales_members_names = getMemberNames('Comercial');
    const marketing_members_names = getMemberNames('Marketing');
    const projects_members_names = getMemberNames('Projetos');
    const quality_members_names = getMemberNames('Qualidade');
    const hr_members_names = getMemberNames('Recursos Humanos');

    const sales_members_images = getMemberImages('Comercial');
    const marketing_members_images = getMemberImages('Marketing');
    const projects_members_images = getMemberImages('Projetos');
    const quality_members_images = getMemberImages('Qualidade');
    const hr_members_images = getMemberImages('Recursos Humanos');

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
    const desktop = useMediaQuery({ minWidth: 1081 });

    const lasoRef = useRef < LottieRefCurrentProps > (null);


    return (
        <>
            <Box sx={{ position: "relative", top: "60px", minHeight: '135vh' }}>
                <img
                    style={{
                        width: '100%',
                        position: 'absolute',
                        top: desktop ? '3%' : tablet ? '4vw' : '6vw',
                    }}
                    src={elements}
                    alt='elements'
                />
                <Typography
                    align="center"
                    sx={{
                        fontSize:  desktop ? '120px' : tablet ? '4vw' : '6vw',
                        fontWeight: 'Medium',
                        position: 'absolute',
                        top:  desktop ? '14rem' : tablet ? '4vw' : '6vw',
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
                        left: '50%',
                        transform: 'translateX(calc(50% - 20px))', // Adjust the offset as needed
                        top: '60px',
                        width: '330px',
                        zIndex: 1,
                    }}
                    speed={2}
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
                <CustomComponent title='Sales Director' name={sales_members_names[0]} image={sales_members_images[0]} />
                <CustomComponent title='Marketing Director' name={marketing_members_names[0]} image={marketing_members_images[0]} />
                <CustomComponent title='Projects Director' name={projects_members_names[0]} image={projects_members_images[0]} />
                <CustomComponent title='Quality Director' name={quality_members_names[0]} image={quality_members_images[0]} />
                <CustomComponent title='Human Resources Director' name={hr_members_names[0]} image={hr_members_images[0]} />
            </Box>

            <Box marginTop={10} marginBottom={10} textAlign="center">
                <CustomTitle title="Our Departments" subtitle="who make the magic happen" theme={theme} />
            </Box>


            {/* SALES TEAM */}
            <CustomDepartment Department='Sales' names={sales_members_names} images={sales_members_images} />

            {/* MARKETING TEAM */}
            <CustomDepartment Department='Marketing' names={marketing_members_names} images={marketing_members_images} />

            {/* PROJECTS TEAM */}
            <CustomDepartment Department='Projects' names={projects_members_names} images={projects_members_images} />

            {/* QUALITY TEAM */}
            <CustomDepartment Department='Quality' names={quality_members_names} images={quality_members_images} />

            {/* HUMAN RESOURCES TEAM */}
            <CustomDepartment Department='Human Resources' names={hr_members_names} images={hr_members_images} />

        </>
    );
};

export default OurTeam;