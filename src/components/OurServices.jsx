
import React, { useEffect } from 'react';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusiness';
import { Box } from '@mui/material';



const OurServices = ({id}) => {

  const sectionStyle = {
    height: "101vh",
    scrollSnapAlign: "start",//Isto nao funciona
  };

  return (
    <div style={{ 
      borderRadius: '0 30px 30px 0',
      width: "95%",
      height: "303vh",
      scrollSnapType: "y mandatory",//Isto nao funciona
  }}>

        <section style={sectionStyle}>
          <SoftwareSolutions></SoftwareSolutions>
        </section>
        <section style={sectionStyle}>
          <MobileDevelopment></MobileDevelopment>
        </section>
        <section style={sectionStyle}>
          <RoboticsPrototyping></RoboticsPrototyping>
        </section>
  </div>

            
      
  );
};

export default OurServices;