import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';

import BgVideo from '../videos/HomePageVideo.mp4'
import HomePageImg from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'
import newsImage from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'

import CoreBusiness from '../components/CoreBusiness'
import ClientsCarousel from '../components/ClientsCarousel'
import OurPartners from '../components/OurPartners'
import OurServices from '../components/OurServices'
import OurServicesAnimated from '../components/OurServicesAnimated';
import Accomplishment from '../components/AccomplishmentComponent';

import { NavLink, useNavigate } from 'react-router-dom';
import ServicesCarousel from '../components/ServicesCarousel';
import { useMediaQuery } from 'react-responsive';

const accomplishmentsData = [
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "janeiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "fevereiro 2024"},
    { image: newsImage, description: "Fazemos de tudo. É isso que torna este projeto interessante. Todos os dias é um assunto diferente, não há monotonia." , date: "março 2024"},
  ];

const AccomplishmentSlider = ({ accomplishmentsData = [] }) => {

    const mobile = useMediaQuery({ maxWidth: 600 });
    const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
    const desktop = useMediaQuery({ minWidth: 1081 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + accomplishmentsData.length) % accomplishmentsData.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % accomplishmentsData.length);
  };

  return (
    <Box
      sx={{
        backgroundColor: "blue",
        width: "100vw",
        height: mobile ? "50dvh" : "",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: mobile ? "10%" : "5%",
        marginTop: mobile ? "10%" : "3%",
        overflow: "hidden"
      }}
    >
      <button onClick={handlePrevClick} style={{}}>Previous</button>

      {accomplishmentsData.map((accomplishment, index) => (
        <Accomplishment
          key={index}
          description={accomplishment.description}
          image={accomplishment.image}
          date={accomplishment.date}
          isSelected={index === currentIndex}
        />
      ))}

      
      <button onClick={handleNextClick}>Next</button>
    </Box>
  );
};

export default AccomplishmentSlider;
