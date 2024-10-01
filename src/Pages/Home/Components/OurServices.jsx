import React from "react";
import {
  MobileDevelopmentMobile,
  RoboticsPrototypingMobile,
  SoftwareSolutionsMobile,
} from "./CoreBusinessMobile";

const OurServices = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <SoftwareSolutionsMobile />
      <MobileDevelopmentMobile />
      <RoboticsPrototypingMobile />
    </div>
  );
};

export default OurServices;
