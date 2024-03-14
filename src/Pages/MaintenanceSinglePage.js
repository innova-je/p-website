import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import bgImage from '../images/other/maintenance_single_page.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';

import { useMediaQuery } from 'react-responsive';


const SocialMedia = ({ theme }) => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <Box sx={{
      display: "flex",
      justifyContent: desktop ? "left" : "center",
      gap: 2,
      width: "100%"
    }}>
      <Link href='https://www.instagram.com/in.nova.pt' sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <InstagramIcon
          sx={{
            color: "#052533",
            width: mobile ? "5vh" : "7vh",
            height: "auto",
          }} />
      </Link>
      <Link href='https://www.linkedin.com/company/innova-consultoria-junior' sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <LinkedinIcon
          sx={{
            color: "#052533",
            width: mobile ? "5vh" : "7vh",
            height: "auto",
          }} />
      </Link>
    </Box>);
}

const MaintenanceSinglePage = () => {
  const theme = useTheme();

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          opacity: 0.25, // apply opacity to the outer Box component
          height: '100vh',
          width: '100vw',
          position: 'relative', // change position to relative
          overflow: 'hidden', // hide any overflow
        }}
      >
        <Box
          sx={{
            position: 'relative', // keep position as absolute
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center -200px', // move the background image up by 50 pixels
            zIndex: -1,
            backgroundBlendMode: 'darken',
            overflow: "hidden"
          }}
        />
        
      </Box>

      <div style={{position: "absolute", widt: "auto", height: "100%", top: "0%", overflow: "hidden"}}>
        <Grid style={{display: "flex", flexDirection: "column", gap: mobile ? "5%" : "10%", justifyContent: desktop
       ? "left" : "center", alignItems: "center", overflow: "hidden", height: "100%"}}> 
          <div style={{width: "80%"}}>
            <Grid item xs={8}>
            <div style={{display: "flex", justifyContent: "center", zIndex: 10}}>
              <Typography variant='h3' sx={{
              display: "flex",
              justifyContent: desktop ? "left" : "center",
              textAlign: mobile || tablet ? "center" : 'left',
              marginTop: desktop ? 20 : 0,
              color: "#732043",
              width: "100%",
              fontSize: desktop ? "4.5dvw" : (tablet ? "5vw" : "7.5vw"),
              fontWeight: '600',
              opacity: 1,
              zIndex: 100
            }}>
              Not so fast! <br />
              This is currently under construction, but we will be quick.
            </Typography>
            </div>
            
          </Grid>
          <Grid item>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: desktop ? "left" : "center",
              alignItems: "center",
              marginTop: "5%",
              gap: "20px",
              width: desktop ? "auto" : "100%"
            }}>
              
              <Typography variant='h3' sx={{
                textAlign: mobile || tablet ? "center" : 'left',
                color: "#052533",
                fontSize: desktop ? '2dvw' : (tablet ? "3vw" : "5vw"),
                fontWeight: '400',
                opacity: 1,
                zIndex: 20,
                justifyContent: desktop ? "left" : "center",
                width: "100%"
              }}>
                While you wait, why not check out our social media?
              </Typography>
              
              {SocialMedia({ theme: theme })}
            </Box>
          </Grid>
          </div>
          
        </Grid>
      </div>

      

      
    </Box>
  )
};

export default MaintenanceSinglePage;