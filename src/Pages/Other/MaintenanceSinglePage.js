import { Box, Typography, Link, Grid } from '@mui/material';
import React from 'react';
import bgImage from '../../Assets/Images/other/maintenance_single_page.png';
import { useTheme } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import { useMediaQuery } from 'react-responsive';

const SocialMedia = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });

  return (
    <div style={{ display: "flex", justifyContent: mobile ? "center" : "flex-start", gap: "15px", width: "100%" }}>
      <Link href='https://www.instagram.com/in.nova.pt' style={{ textDecoration: "none" }}>
        <InstagramIcon style={{ color: "#052533", width: mobile ? "5vh" : "7vh" }} />
      </Link>
      <Link href='https://www.linkedin.com/company/innova-consultoria-junior' style={{ textDecoration: "none" }}>
        <LinkedinIcon style={{ color: "#052533", width: mobile ? "5vh" : "7vh" }} />
      </Link>
    </div>
  );
}

const MaintenanceSinglePage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      {/* Background Image */}
      <Box
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          zIndex: -1,
        }}
      />

      {/* Content */}
      <Grid container direction="column" justifyContent={'center'} alignItems="center" style={{ height: '100%' }}>
        <Grid item style={{ width: '80%' }}>
          <Typography
            variant='h3'
            style={{
              textAlign: mobile || tablet ? 'center' : 'left',
              color: theme.palette.primary.main,
              fontSize: desktop ? "4.5dvw" : tablet ? "5vw" : "7.5vw",
              fontWeight: '600'
            }}
          >
            Not so fast! <br />
            This is currently under construction, but we will be quick.
          </Typography>

          <Typography
            variant='h3'
            style={{
              textAlign: mobile || tablet ? 'center' : 'left',
              color: theme.palette.secondary.main,
              fontSize: desktop ? '2dvw' : tablet ? "3vw" : "5vw",
              fontWeight: '400',
              padding: "1rem 0"
            }}
          >
            While you wait, why not check out our social media?
          </Typography>

          <SocialMedia />
        </Grid>
      </Grid>
    </div>
  );
};

export default MaintenanceSinglePage;
