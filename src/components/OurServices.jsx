/*
import React, { useState, useEffect, useRef } from 'react';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusiness';

const OurServices = () => {
  const [activeSection, setActiveSection] = useState('SoftwareSolutions');
  const [hasReachedOurServices, setHasReachedOurServices] = useState(false);
  const [setDeltaY] = useState(0);
  const softwareSolutionsRef = useRef(null);
  const mobileDevelopmentRef = useRef(null);
  const roboticsPrototypingRef = useRef(null);
  const sectionRefs = {
    SoftwareSolutions: softwareSolutionsRef,
    MobileDevelopment: mobileDevelopmentRef,
    RoboticsPrototyping: roboticsPrototypingRef,
  };

  let deltaY = 0;

  useEffect(() => {
    const handleWheel = (event) => {
      if (hasReachedOurServices) {
        deltaY += event.deltaY;
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [hasReachedOurServices]);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasReachedOurServices) {
        const ourServicesOffsetTop = softwareSolutionsRef.current?.offsetTop;
        const currentScrolledHeight = window.scrollY;

        if (ourServicesOffsetTop && currentScrolledHeight >= ourServicesOffsetTop) {
          setHasReachedOurServices(true);
        }
      }

      if (hasReachedOurServices) {
        const screenHeight = window.innerHeight;

        if (activeSection === 'SoftwareSolutions') {
          deltaY = 0;
        }

        console.log(deltaY);

        if (deltaY < 0 || deltaY < screenHeight) {
          // Scrolling up
          setActiveSection('SoftwareSolutions');
          document.body.style.overflow = 'hidden';
        } else if (deltaY > screenHeight && deltaY < 2 * screenHeight) {
          // Scrolling down
          setActiveSection('MobileDevelopment');
          document.body.style.overflow = 'hidden';
        } else if (deltaY > 3 * screenHeight) {
          // Scrolling down further
          setActiveSection('RoboticsPrototyping');
          document.body.style.overflow = 'auto';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasReachedOurServices, activeSection, deltaY]);

  return (
    <div>
      <div id="SoftwareSolutions" ref={softwareSolutionsRef}>
        {activeSection === 'SoftwareSolutions' && <SoftwareSolutions />}
      </div>
      <div id="MobileDevelopment" ref={mobileDevelopmentRef}>
        {activeSection === 'MobileDevelopment' && <MobileDevelopment />}
      </div>
      <div id="RoboticsPrototyping" ref={roboticsPrototypingRef}>
        {activeSection === 'RoboticsPrototyping' && <RoboticsPrototyping />}
      </div>
    </div>
  );
};

export default OurServices;
*/