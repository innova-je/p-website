import React from 'react';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import Accomplishment from '../components/AccomplishmentComponent';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AccomplishmentsData from '../Accomplishments.json'

const AccomplishmentSlider = () => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const accomplishments = AccomplishmentsData.accomplishments;

  {accomplishments.map((accomplishment, index) => (            
    console.log( "logo on slider side " + accomplishment.logoDirectory)
  ))}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: "auto"}}>
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

      {desktop && (
        <div style={{width: "300vw"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "2%", marginTop: "2%"}}>
          {accomplishments.map((accomplishment, index) => (            
            <Accomplishment
              key={index}
              description={accomplishment.description}
              image={accomplishment.imgDirectory}
              logo={accomplishment.logoDirectory}
              date={accomplishment.date}
              link={accomplishment.link}
              scale={accomplishment.scale}
            />
          ))}
        </div>
        </div>
      )}

      {mobile && (
        <Slider {...settings} style={{ width: "100%", marginTop: "5%", background: "transparent"}}>
        {accomplishments.map((accomplishment, index) => (
          <div key={index}>
            <div style={{width: "100%",  display: "flex", justifyContent: "center"}}>
              <Accomplishment
                key={index}
                description={accomplishment.description}
                image={accomplishment.imgDirectory}
                logo={accomplishment.logoDirectory}
                date={accomplishment.date}
                link={accomplishment.link}
                scale={accomplishment.scale}
              />
            </div>
          </div>
        ))}
      </Slider>
      )}

      {tablet && (
        <div style={{width: "100vw"}}>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: "5%", marginTop: "5%"}}>
          {accomplishments.map((accomplishment, index) => (
            <Accomplishment
              key={index}
              description={accomplishment.description}
              image={accomplishment.imgDirectory}
              logo={accomplishment.logoDirectory}
              date={accomplishment.date}
              link={accomplishment.link}
              scale={accomplishment.scale}
            />
          ))}
        </div>
        </div>
      )}      
    </div>
  );
};

export default AccomplishmentSlider;
