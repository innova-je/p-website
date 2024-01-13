import { Box, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import HeroImage from '../public/images/logos/other/TOMADA DE POSSE.png';
import PlaceHolder from '../public/images/logos/other/placeholder.png';


const CustomComponent = ({ title, name, image }) => {
    const theme = useTheme();
  
    const containerStyle = {
      backgroundColor: 'white',
      position: 'relative',
      width: '250px',
      height: '100%',
      overflow: 'visible',
      borderRadius: 15,
    };
  
    const imageContainerStyle = {
      width: '100%',
      paddingBottom: '100%',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 1,
    };
  
    const imageStyle = {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
    };
  
    const overlayStyle = {
        position: 'absolute',
        bottom: -20,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80%',
        height: 'auto', 
        backgroundColor: "#C7B7BE",
        padding: "5px",
        margin: "auto", 
        borderRadius: 15,
        overflow: 'hidden',
        zIndex: 2,
      };
      
  
    return (
      <ThemeProvider theme={theme}>
        <div style={containerStyle}>
          <div style={imageContainerStyle}>
            <img src={image} alt="Custom Image" style={imageStyle} />
          </div>
          <div style={overlayStyle}>
            <Typography variant="body2" align="center" noWrap sx={{fontWeight: 'bold', fontSize:"13px"}}>
              {title}
            </Typography>
            <Typography variant="body2" align="center" noWrap sx={{
                                fontWeight: 'bold', fontSize:"13px",
                                color: theme.palette.primary.main,
                                fontFamily: theme.typography.fontFamily,
                            }} >
              {name}
            </Typography>
          </div>
        </div>
      </ThemeProvider>
    );
  };
  


const OurTeam = () => {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <Box position="relative">
                <img
                    src={HeroImage}
                    alt="Innova Tomada De Posse"
                    style={{ width: '100%', height: 'auto' }}
                />
                <Typography
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize:"85px",
                        fontWeight: 'Regular',
                        position: 'absolute',
                        top: '15%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 1,
                        color: theme.palette.secondary.main,
                        fontFamily: theme.typography.fontFamily,
                        width: '100%',
                        textAlign: 'center',
                    }}>
                    We are made of people
                </Typography>
            </Box>
            
            <Box marginTop={4} marginBottom={4} textAlign="center">
                <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 'Medium',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                            marginBottom: 1, // Adding margin bottom between texts
                        }}>
                        Our Board
                    </Typography>
                    <Typography
                        variant="h4"
                        align="center"
                        sx={{
                            fontWeight: 'Regular',
                            color: theme.palette.secondary.main,
                            fontFamily: theme.typography.fontFamily,
                        }}>
                        our problem-solvers
                    </Typography>                
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: '30px', p: 5, border: 1 }} >
                <CustomComponent title='President' name='Inês Costa' image={PlaceHolder} />
                <CustomComponent title='External Affairs Vice-President' name='Leonor Almeida' image={PlaceHolder} />
                <CustomComponent title='Internal Affairs Vice-President' name='Carolina Maurício' image={PlaceHolder} />
                <CustomComponent title='Financial Manager' name='Nuno Alves' image={PlaceHolder} />
            </Box>

        </ThemeProvider>
    );
};

export default OurTeam;