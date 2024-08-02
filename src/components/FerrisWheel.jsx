import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FerrisWheel.css";
import {
  MobileDevelopmentMobile,
  RoboticsPrototypingMobile,
  SoftwareSolutionsMobile,
} from "../Pages/Home/Components/CoreBusinessMobile";

function FerrisWheel() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateRotation = (scrollY) => {
    const maxScroll = 200;
    const maxRotation = 180;
    return Math.min((scrollY / maxScroll) * maxRotation, maxRotation);
  };

  const services = [
    <SoftwareSolutionsMobile />,
    <MobileDevelopmentMobile />,
    <RoboticsPrototypingMobile />,
  ];

  const rotation = calculateRotation(scrollY);

  return (
    <div className="App" style={{ height: "300vh" }}>
      {services.map((Component, index) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -rotation,
                transition: {
                  duration: services.length,
                  delay: index + 1,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="image-parent">{Component}</div>
          </motion.div>
        );
      }, [])}
    </div>
  );
}

export default FerrisWheel;
