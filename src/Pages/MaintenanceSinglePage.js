import { Box, Typography, Link } from '@mui/material';
import React from 'react';
import bgImage from '../images/other/maintenance_single_page.png';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';


const SocialMedia = ({ theme }) => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "right",
      gap: 5
    }}>
      <Link href='https://www.instagram.com/in.nova.pt' sx={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        textDecoration: "none"
      }}>
        <InstagramIcon
          sx={{
            color: "#D2D2D2",
            width: "7vh",
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
            color: "#D2D2D2",
            width: "7vh",
            height: "auto",
          }} />
      </Link>
    </Box>);
}

const MaintenanceSinglePage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          opacity: 0.6, // apply opacity to the outer Box component
          height: '100vh',
          width: '100%',
          position: 'relative', // change position to relative
          overflow: 'hidden', // hide any overflow
        }}
      >
        <Box
          sx={{
            position: 'absolute', // keep position as absolute
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'center -200px', // move the background image up by 50 pixels
            zIndex: -1,
            backgroundBlendMode: 'darken',
          }}
        />
        <Grid container spacing={8} flexDirection={'column'}>
          <Grid item xs={8}>
            <Typography variant='h3' sx={{
              display: "flex",
              textAlign: 'left',
              marginLeft: 10,
              marginTop: 20,
              color: "#D2D2D2",
              fontSize: "4.5dvw",
              fontWeight: '600',
              opacity: 1
            }}>
              Not so fast! <br />
              This is currently under construction, but we will be quick.
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px"

            }}>
              <Typography variant='h3' sx={{
                textAlign: 'left',
                color: "#D2D2D2",
                fontSize: '1.5dvw',
                fontWeight: '300',
                opacity: 1
              }}>
                While you wait, why not check out our social media?
              </Typography>
              {SocialMedia({ theme: theme })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
};

export default MaintenanceSinglePage;