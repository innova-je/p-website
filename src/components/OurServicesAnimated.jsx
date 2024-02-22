
import React from 'react';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusiness';



const OurServicesAnimated = ({id}) => {



  return (
    <div style={{ 
      borderRadius: '0 30px 30px 0',
      width: "95%",
      overflow: "hidden"
  }}>

    <div style={{
        height: "101vh",
        overflowY: "scroll"
    }}>
        <section >
          <SoftwareSolutions></SoftwareSolutions>
        </section>
        <section >
          <MobileDevelopment></MobileDevelopment>
        </section>
        <section >
          <RoboticsPrototyping></RoboticsPrototyping>
        </section>
    </div>

        
  </div>

            
      
  );
};

export default OurServicesAnimated;