import React, { useEffect } from 'react';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusiness';

const ServicesCarousel = () => {

  const initializeWheel = () => {
    const wheel = document.querySelector('.wheel');
    const cards = document.querySelectorAll('.card');
    const wheelRadius = 1300.0;
    let theta = 0;
    const angleBetweenCards = Math.PI/3;

    const center = {
      x: parseFloat(getComputedStyle(wheel).width) / 2.0,
      y: parseFloat(getComputedStyle(wheel).height) / 2.0,
    };

    cards.forEach((card, index) => {
      theta = angleBetweenCards * index;
      const cardAngle = theta + (2 * Math.PI / 3);
      const x = Math.cos(cardAngle) * wheelRadius;
      const y = -1.0 * Math.sin(cardAngle) * wheelRadius;

      card.style.left = `${center.x + x - card.offsetWidth / 2}px`;
      card.style.top = `${center.y + y - card.offsetHeight / 2}px`;
    });

    const handleWheel = (event) => {
      console.log(window.scrollY);
      //event.preventDefault();
      theta = theta - (event.deltaY * 0.001);
      
      theta = Math.max( 4*Math.PI/3, Math.min(theta, 7*Math.PI/3));

      console.log(theta)

      wheel.style.transform = `translate(-50%, -50%) rotate(-${theta * (180 / Math.PI)}deg)`;

      cards.forEach((card, index) => {
        //const cardAngle = theta + angleBetweenCards * index + (-2 * Math.PI / 3); 
        card.style.transform = `rotate(${theta * (180 / Math.PI)}deg)`;
      });
    };

    document.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  };

  useEffect(() => {
    initializeWheel();
  }, []);

  return (
    <div className='wheel' style={{
      backgroundColor: "red",
      width: "20vw",
      height: "5vh"
    }}>

      <div className='card' style={{ position: "absolute" }} />
      <div className='card' style={{ position: "absolute" }}>
        <div style={{ transform: "scale(1)" }}>
        <SoftwareSolutions />
        </div>
      </div>
      <div className='card' style={{ position: "absolute" }}>
        <div style={{ transform: "scale(1)" }}>
          <MobileDevelopment />
        </div>
      </div>
      <div className='card' style={{ position: "absolute" }}>
        <div style={{ transform: "scale(1)" }}>          
          <RoboticsPrototyping />
        </div>
      </div>

    </div>
  );
};

export default ServicesCarousel;
