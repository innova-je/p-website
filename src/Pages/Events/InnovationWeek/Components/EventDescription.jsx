import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import backgroundImage from '../../../../Assets/Images/other/IW-png.png';

const RedBox = styled(Box)({
    // border: '2px solid red',
    padding: '16px',
    margin: '6dvw 0 6dvw 9dvw',
    textAlign: 'flex-start',
  });
  
  const BlueBox = styled(Box)({
    // border: '2px solid blue',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    gap: '2dvw',
    width: '42dvw'
  });

function EventDescription() {
    const theme = useTheme();
  const secondBlue = '#559FA2';

  return (
    <div style={{
        background: theme.palette.secondary.main,
        display: 'flex',
        justifyContent: 'space-between',
        padding: "3rem 0",
        overflow: "hidden"
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
  )
}

export default EventDescription