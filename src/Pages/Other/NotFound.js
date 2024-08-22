import { Box, Typography, Button, Grid } from '@mui/material';
import React from 'react';
import bgImage from '../../Assets/Images/other/404.png';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from 'react-responsive';

const NotFound = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const isDesktop = useMediaQuery({ minWidth: 1081 });

  const getFontSize = () => {
    if (isDesktop) return '6dvw';
    if (isTablet) return '5vw';
    return '10vw';
  };

  const getButtonFontSize = () => {
    if (isTablet || isMobile) return '4dvw';
    return '1.2dvw';
  };

  return (
    <Box
      sx={{
        height: '100vh',
        overflow: 'hidden',
        background: "rgba(115, 32, 67, 0.2)",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: isDesktop ? "auto" : "contain",
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ zIndex: 1 }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant='h3'
            sx={{
              color: '#FFFFFF',
              fontSize: getFontSize(),
              fontWeight: '600',
              mb: 2,
            }}
          >
            PAGE NOT FOUND
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: '#732043',
              fontSize: isDesktop ? '1.5dvw' : (isTablet ? '5vw' : '4vw'),
              fontWeight: '300',
              mb: 3,
            }}
          >
            We looked everywhere for this page. <br />
            Are you sure this URL is correct?
          </Typography>
          <Button
            variant="contained"
            href='/'
            sx={{
              backgroundColor: theme.palette.primary.main,
              opacity: 0.9,
              fontFamily: theme.typography.fontFamily,
              fontWeight: 'light',
              fontSize: getButtonFontSize(),
              textTransform: 'none',
              padding: '10px 20px',
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
      </Grid>
    </Box>
  );
};

export default NotFound;
