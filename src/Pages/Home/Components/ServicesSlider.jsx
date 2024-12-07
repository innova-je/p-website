import React from 'react';
import { MobileDevelopmentMobile, RoboticsPrototypingMobile, SoftwareSolutionsMobile } from './CoreBusinessMobile';

const ServicesSlider = () => {

  return (
    <div style={{ }}>
        <div style={{ marginTop: "5%" }}>
          <SoftwareSolutionsMobile />
        </div>
        <div style={{ marginTop: "10%" }}>
          <MobileDevelopmentMobile />
        </div>
        <div style={{ marginTop: "10%" }}>
          <RoboticsPrototypingMobile />
        </div>
    </div>
  );
};

export default ServicesSlider;
