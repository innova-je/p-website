import React, { useEffect, useRef } from 'react';
import ServicesCarousel from './ServicesCarousel';
import { Parallax, useParallax } from "react-scroll-parallax";
import { useMediaQuery } from 'react-responsive';
import ServicesSlider from './ServicesSlider';

const OurServices = () => {

  const servicesRef = useRef(null);

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  /*
  useEffect(() => {
    
    const handleWheel = (event) => {
      //event.preventDefault();

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
      //servicesRef.current.removeEventListener('wheel', handleWheel);
    };
  }, []);
*/
  return (
    <div ref={servicesRef} style={{
      borderRadius: desktop ? '0 30px 30px 0' : "0",
      width: "95%",
      display: "flex",
      flexDirection: "column",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
      paddingRight: "17px",
      background: desktop ? 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))'
      : '',
      height: mobile ? "auto" : (tablet ? "auto" : "105vh"),
      overflow: mobile || tablet ? "scroll" : "hidden",
      msScrollSnapPointsY: "repeat(105vh)",
      msScrollSnapPointsX: "repeat(205vh)",
      scrollSnapType: " x mandatory"

    }}>
      {(mobile || tablet) && (
        <ServicesSlider></ServicesSlider>
      )}
      {desktop && (
        <ServicesCarousel></ServicesCarousel>
      )}
      
    </div>
  );
};

export default OurServices;
