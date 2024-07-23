import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import backgroundImage from '../../../images/other/IW-png.png';
import IW_Hero from '../../../images/other/IW_Hero.png';
import IW_Images from './Components/IW_Images';
import Speakers from './Components/Speakers';

const Overlay = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  color: 'white',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
});

const RedBox = styled(Box)({
  // border: '2px solid red',
  padding: '16px',
  margin: '6dvw 0 6dvw 9dvw',
  textAlign: 'flex-start',
});

const noneBox = styled(Box)({
  // border: '2px solid none',
  padding: '16px',
  margin: '6dvw 8dvw 6dvw 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '2dvw',
});

const BlueBox = styled(Box)({
  // border: '2px solid blue',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  gap: '2dvw',
  width: '42dvw'
});

const ImageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2dvw',
});

const CompanyLogos = ({ images }) => (
  <ImageContainer marginBottom="2dvw" marginTop="2dvw">
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Company logo ${index}`} style={{ width: '12dvw', height: '6dvw' }} />
    ))}
  </ImageContainer>
);

const InnovationWeek = () => {
  const theme = useTheme();
  const secondBlue = '#559FA2';
  const companyLogos = [backgroundImage, backgroundImage, backgroundImage, backgroundImage, backgroundImage]; // Replace with actual image paths

  return (
    <>
      <Box position="relative">
        <div style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))', zIndex: 2 }}>
          <div>
            <img src={backgroundImage} alt="Innovation Week 2023" width='100%' />
            <Box
              sx={{
                position: 'absolute',
                bottom: "0",
                width: '100%',
                height: '120%',
                backgroundImage:
                  'linear-gradient(to top, rgba(5,37,51,1), rgba(5,37,51,0))',
              }}
            />
          </div>
          <Overlay>
            <img src={IW_Hero} alt="Innovation Week 2023" style={{ width: "100%", height: "100%" }} />
          </Overlay>
        </div>
      </Box>

      <div style={{
        background: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <RedBox>
          <Typography variant="h4" sx={{ color: "white", marginBottom: "0.5dvw" }}>THE BIGGEST</Typography>
          <Typography variant="h4" sx={{ color: secondBlue, textShadow: '0 0 16px #559FA2', marginBottom: "0.5dvw" }}>INNOVATION</Typography>
          <Typography variant="h4" sx={{ color: "white", marginBottom: "0.5dvw" }}>EVENT OF NOVA SST</Typography>
        </RedBox>
        <noneBox>
          <BlueBox>
            <img src={backgroundImage} alt="Innovation Week 2023" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <Box>
              <Typography variant="h5" sx={{ color: "white" }}>ENTERPRENEURSHIP</Typography>
              <Typography variant="body2" sx={{ color: "white", fontWeight: 100 }}>Challenge your entrepreneurial spirit with inspirational talks, immersive workshops and create connections with business experts</Typography>
            </Box>
          </BlueBox>

          <BlueBox>
            <img src={backgroundImage} alt="Innovation Week 2023" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <Box>
              <Typography variant="h5" sx={{ color: "white" }}>INNOVATION</Typography>
              <Typography variant="body2" sx={{ color: "white", fontWeight: 100 }}>Explore the concept of innovation with renowned personalities, top-tier companies, and pioneering projects showcased in the event</Typography>
            </Box>
          </BlueBox>

          <BlueBox>
            <img src={backgroundImage} alt="Innovation Week 2023" style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <Box>
              <Typography variant="h5" sx={{ color: "white" }}>NETWORKING</Typography>
              <Typography variant="body2" sx={{ color: "white", fontWeight: 100 }}>Expand your network, forge connections, explore career opportunities, and spark collaborations that drive technological and business advancements</Typography>
            </Box>
          </BlueBox>
        </noneBox>
      </div>
      <div>
        <Speakers />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ color: theme.palette.secondary.main, textAlign: "center", marginTop: "6dvw" }}>MOMENTS THAT DEFINE INNOVATION WEEK</Typography>
        <IW_Images />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ color: theme.palette.secondary.main, textAlign: "center", marginTop: "3dvw" }}>COMPANIES</Typography>
        <Box sx={{ backgroundColor: 'none', width: '100%', marginBottom:"2dvw" }}>
          <CompanyLogos images={companyLogos} />
          <CompanyLogos images={companyLogos} />
          <CompanyLogos images={companyLogos} />
        </Box>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ color: theme.palette.secondary.main, textAlign: "center", marginTop: "3dvw" }}>OUR PARTNERS</Typography>
        <Box sx={{ backgroundColor: 'none', width: '100%', marginBottom:"2dvw"}}>
          <CompanyLogos images={companyLogos} />
        </Box>
      </div>
    </>
  );
};

export default InnovationWeek;
