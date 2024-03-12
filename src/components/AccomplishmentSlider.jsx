import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';

import Accomplishment from '../components/AccomplishmentComponent';

import { useMediaQuery } from 'react-responsive';

const AccomplishmentSlider = ({ accomplishmentsData = [] }) => {

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <Box
      sx={{
        width: mobile ? "200vw" : "100vw",
        height: mobile ? "50dvh" : "",
        background: "blue",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: mobile ? "0%" : "5%",
        marginTop: mobile ? "3%" : (tablet ? "3%" : "3%")
        
      }}
    >
      {accomplishmentsData.map((accomplishment, index) => (
        <Accomplishment
          key={index}
          description={accomplishment.description}
          image={accomplishment.image}
          date={accomplishment.date}
        />
      ))}

    </Box>
  );
};

export default AccomplishmentSlider;
