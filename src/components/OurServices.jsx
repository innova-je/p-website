import React, { useEffect, useRef } from 'react';
import ServicesCarousel from './ServicesCarousel';

const OurServices = () => {
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      // Customize the scrolling behavior within the specified section
      // You can use this section to trigger the ServicesCarousel scrolling logic or any other desired effect.

      // For example, scroll the ServicesCarousel component:
      const servicesCarousel = servicesRef.current.querySelector('.wheel');
      const deltaY = event.deltaY;
      servicesCarousel.scrollTop += deltaY;
    };

    // Attach wheel event listener to the entire section
    servicesRef.current.addEventListener('wheel', handleWheel);

    return () => {
      servicesRef.current.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={servicesRef} style={{
      borderRadius: '0 30px 30px 0',
      width: "95%",
      display: "flex",
      flexDirection: "column",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      paddingRight: "17px",
      background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',
      height: "105vh",
      overflow: "hidden",
      msScrollSnapPointsY: "repeat(105vh)",
      scrollSnapType: "mandatory",
    }}>
      <ServicesCarousel></ServicesCarousel>
    </div>
  );
};

export default OurServices;
