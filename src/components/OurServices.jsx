
import React from 'react';
import { SoftwareSolutions, MobileDevelopment, RoboticsPrototyping } from '../components/CoreBusiness';


const OurServices = () => {

  return (
    
    <body style={{
    overflow: "hidden"
    }}>
      <div style={{ 
      borderRadius: '0 30px 30px 0',
      width: "95%",
      display: "flex",
      flexDirection: "column",
      msOverflowStyle: "none",
      scrollbarWidth: "none",
           
      paddingRight: "17px",
      background: 'linear-gradient(to right, rgba(115, 32, 67, 1), rgba(115, 32, 67, 0.5))',

      //css para nao haver snap scroll e para haver parallax effect
      height:"315vh",
      overflow: "hidden"
      //css para o snap scroll
      //overflow: "scroll", 
      //height: "105vh",
      //msScrollSnapPointsY: "repeat(105vh)",
      //scrollSnapType: "y mandatory",
      
  }}>

        <section style={{height: "105vh", zIndex: "2", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative"}}>
          <SoftwareSolutions></SoftwareSolutions>
        </section>
        <section style={{height: "105vh", zIndex: "1", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative"}}>
          <MobileDevelopment></MobileDevelopment>
        </section>
        <section style={{height: "105vh", zIndex: "2", scrollSnapAlign: "start", scrollSnapStop: "always", position: "relative"}}>
          <RoboticsPrototyping></RoboticsPrototyping>
        </section>
    </div>
    </body>
      
      
   
  );
};

export default OurServices;