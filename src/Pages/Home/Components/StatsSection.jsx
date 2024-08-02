import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function StatsSection() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const StatsBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  }));

  const statsStyle = {
    fontSize: mobile ? '9vw' : tablet ? '5vw' : '4vw',
    color: '#732043',
    fontWeight: 700,
  };

  const underStatsStyle = {
    fontSize: mobile ? '4vw' : tablet ? '2vw' : '1.5vw',
    color: '#732043',
    fontWeight: 500,
    marginTop: '-5%',
  };

  return (
    <Box mt={desktop ? 0 : 3}>
      <Box
        sx={{
          width: mobile ? '90%' : '85%',
          height: 'auto',
          display: 'flex',
          flexDirection: mobile ? 'column' : 'row',
          flexWrap: 'wrap',
          gap: mobile ? 2 : 10,
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <StatsBox>
          <Typography style={statsStyle}>3</Typography>
          <Typography style={underStatsStyle}>Years of In-Nova</Typography>
        </StatsBox>
        <StatsBox>
          <Typography style={statsStyle}>+25</Typography>
          <Typography style={underStatsStyle}>Projects Completed</Typography>
        </StatsBox>
        <StatsBox>
          <Typography style={statsStyle}>9.5/10</Typography>
          <Typography style={underStatsStyle}>Overall Satisfaction</Typography>
        </StatsBox>
        <StatsBox>
          <Typography style={statsStyle}>+60</Typography>
          <Typography style={underStatsStyle}>Members</Typography>
        </StatsBox>
      </Box>
    </Box>
  );
}

export default StatsSection;
