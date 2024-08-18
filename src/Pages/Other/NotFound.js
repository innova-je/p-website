import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import bgImage from '../../Assets/Images/other/404.png';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

import { useMediaQuery } from 'react-responsive';


const NotFound = () => {
  const theme = useTheme();

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'relative', // change position to relative
          overflow: 'hidden', // hide any overflow
          background: "rgba(115, 32, 67, 0.2)",
        }}
      >
        <Box
          sx={{
            position: 'relative', // keep position as absolute
            left: 0,
            width: '100%',
            height: '100%',
            backgroundPosition: 'center', // move the background image up by 50 pixels
            backgroundImage: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: desktop ? "auto" : "contain",
            zIndex: 1,
            overflow: "hidden"
          }}
        >
          <div style={{ height: "100%", top: "0%", overflow: "hidden"}}>
        <Grid style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", overflow: "hidden", height: "100%"}}> 
            <div style={{display: "flex", flexDirection:"column",justifyContent: "center", zIndex: 10}}>
              <Typography variant='h3' sx={{
              display: "flex",
              justifyContent:"center",
              textAlign:"center",
              color: "#FFFFFF",
              width: "100%",
              fontSize: desktop ? "6dvw" : (tablet ? "5vw" : "10vw"),
              fontWeight: '600',
              opacity: 1,
              zIndex: 100
            }}>
              PAGE NOT FOUND
              </Typography>

              <Typography variant='h3' sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#732043",
              width: "100%",
              fontSize: desktop ? "1.5dvw" : (tablet ? "5vw" : "4vw"),
              fontWeight: '300',
              opacity: 1,
              zIndex: 100
            }}>
              We looked everywhere for this page. <br />
              Are you sure this URL is correct? 
              </Typography>
            </div>
            <Button
                    variant="contained"
                    href='/'
                    sx={{
                        top: "5vh",
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.9,
                        fontFamily: theme.typography.fontFamily,
                        fontWeight: 'light',
                        fontSize: tablet ? '4dvw' : mobile ? '4dvw' : "1.2dvw",
                        textTransform: 'none',
                        paddingLeft: 3,
                        paddingRight: 3,
                        borderRadius: '15px',
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.1)',
                        },
                    }}
                >
                    Back to Homepage
                </Button>
        </Grid>
      </div>
          </Box>
        
      </Box>

      
    </Box>
  )
};

export default NotFound;