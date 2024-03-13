import React from 'react';
import { Box, Typography } from '@mui/material';
import Accomplishment from '../components/AccomplishmentComponent';
import { useMediaQuery } from 'react-responsive';

const AccomplishmentSlider = ({ accomplishmentsData = [] }) => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography
          style={{
            width: mobile ? '80%' : '100%',
            textAlign: 'center',
            color: '#732043',
            fontWeight: '700',
            fontSize: desktop ? '3.5dvw' : tablet ? '4dvw' : '6.5dvw',
          }}
        >
          Our Latest Accomplishments
        </Typography>
      </div>

      <div style={{width: "300vw"}}>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "2%", marginTop: "2%"}}>
        {accomplishmentsData.map((accomplishment, index) => (
          <Accomplishment
            key={index}
            description={accomplishment.description}
            image={accomplishment.image}
            date={accomplishment.date}
          />
        ))}
      </div>
      </div>

      
    </div>
  );
};

export default AccomplishmentSlider;
