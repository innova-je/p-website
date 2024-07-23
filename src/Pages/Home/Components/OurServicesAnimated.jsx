import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusinessAnimated';

const OurServicesAnimated = ({ id }) => {
  return (
    <ParallaxProvider>
      <div style={{
        borderRadius: '0 30px 30px 0',
        width: "95%",
        height: '280vh', // Full viewport height
        overflowY: 'none',
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
      }}>
        <section style={{
          height: '100vh', // Full viewport height for each section
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <SoftwareSolutions />
        </section>
        <section style={{
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <MobileDevelopment />
        </section>
        <section style={{
          height: '100vh',
          scrollSnapAlign: 'start',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <RoboticsPrototyping />
        </section>
      </div>
    </ParallaxProvider>
  );
};

export default OurServicesAnimated;
