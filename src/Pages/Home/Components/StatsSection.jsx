import { Box, Typography, styled } from '@mui/material'
import React from 'react';

import { useMediaQuery } from 'react-responsive';


function StatsSection() {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const StatsBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  }));

  const statsStyle = {
    fontSize: mobile ? "9vw" : tablet ? "5vw" : "5vw",
    color: "#732043",
    fontWeight: "700",
  };

  const underStatsStyle = {
    fontSize: mobile ? "4vw" : tablet ? "1.9vw" : "1.8vw",
    color: "#732043",
    fontWeight: "500",
    marginTop: "-5%",
  };

  return (
    <>
      <div style={{ marginTop: desktop ? "0%" : tablet ? "0%" : "3%" }}>
        <div
          style={{
            width: mobile ? "77%" : "85%",
            height: "auto",
            display: mobile ? "grid" : tablet ? "flex" : "flex",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: mobile ? "2%" : tablet ? "10%" : "10%",
            margin: "0 auto",
            alignItems: "center",
            justifyContent: "center",
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
            <Typography style={underStatsStyle}>
              Overall Satisfaction
            </Typography>
          </StatsBox>
          <StatsBox>
            <Typography style={statsStyle}>+60</Typography>
            <Typography style={underStatsStyle}>Members</Typography>
          </StatsBox>
        </div>
      </div>
    </>
  );
}

export default StatsSection;
