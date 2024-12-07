import { Typography, styled, useTheme } from '@mui/material';
import React from 'react';
import { useMediaQuery } from 'react-responsive';

function StatsSection() {
  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const StatsBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
  }));

  const statsStyle = {
    fontSize: mobile ? '9vw' : tablet ? '5vw' : '4vw',
    color: theme.palette.primary.main,
    fontWeight: 700,
  };

  const underStatsStyle = {
    fontSize: mobile ? '4vw' : tablet ? '2vw' : '1.5vw',
    color: theme.palette.primary.main,
    fontWeight: 500,
    marginTop: '-5%',
  };

  return (
    <div mt={desktop ? 0 : 3}>
      <div
        style={{
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
          <Typography sx={statsStyle}>3</Typography>
          <Typography sx={underStatsStyle}>Years of In-Nova</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>+25</Typography>
          <Typography sx={underStatsStyle}>Projects Completed</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>9.5/10</Typography>
          <Typography sx={underStatsStyle}>Overall Satisfaction</Typography>
        </StatsBox>
        <StatsBox>
          <Typography sx={statsStyle}>+60</Typography>
          <Typography sx={underStatsStyle}>Members</Typography>
        </StatsBox>
      </div>
    </div>
  );
}

export default StatsSection;
