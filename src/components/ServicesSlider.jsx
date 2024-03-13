import React from 'react';
import { MobileDevelopmentMobile, RoboticsPrototypingMobile, SoftwareSolutionsMobile } from './CoreBusinessMobile';

const ServicesSlider = () => {

  return (
        <div style={{overflowX: "scroll", width: "582vw"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "5%"}}>
                <SoftwareSolutionsMobile></SoftwareSolutionsMobile>
                <MobileDevelopmentMobile></MobileDevelopmentMobile>
                <RoboticsPrototypingMobile></RoboticsPrototypingMobile>
            </div>
            
        </div>
  );
};

export default ServicesSlider;
