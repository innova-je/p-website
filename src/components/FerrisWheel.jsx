import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./FerrisWheel.css";
import {
  MobileDevelopmentMobile,
  RoboticsPrototypingMobile,
  SoftwareSolutionsMobile,
} from "../Pages/Home/Components/CoreBusinessMobile";

const maxScroll = 300; // Adjust this value as needed for smooth transitions
const maxRotation = 120; // Define the max rotation for the entire container
const radius = 180; // Radius of the Ferris wheel

// Motion variants for rotating the entire container
const containerVariants = {
  animate: (rotation) => ({
    rotate: rotation,
    transition: {
      duration: 1, // Duration for smooth animation
      ease: "linear", // Linear easing for consistent rotation
    },
  }),
};

// Define the angles for each component in degrees
const angles = [60, 120, 180];

function FerrisWheel() {
  const [scrollY, setScrollY] = useState(0);

  // Calculate the container's rotation based on the scroll position
  const calculateRotation = (scrollY) => {
    return Math.min((scrollY / maxScroll) * maxRotation, maxRotation);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = -calculateRotation(scrollY);

  // Core services rendered in the Ferris Wheel
  const services = [
    <SoftwareSolutionsMobile key="software" />,
    <MobileDevelopmentMobile key="mobile" />,
    <RoboticsPrototypingMobile key="robotics" />,
  ];

  return (
    <div
      style={{
        height: "300vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Ensure smooth scrolling without overflow issues
      }}
    >
      <div
        className="rotation-wrapper"
        style={{
          position: "relative",
          width: `${2 * radius}px`,
          height: `${2 * radius}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          className="ferris-wheel-container"
          style={{
            width: "100vw",
            height: "100vw",
            borderRadius: "50%",
            background: "orange",
            display: "flex",
            flexDirection: "column",
            position: "absolute", // Changed to absolute for proper alignment
            transformOrigin: "center",
          }}
          animate="animate"
          variants={containerVariants}
          custom={rotation} // Pass the rotation value to the motion div
        >
          {services.map((Component, index) => {
            const angle = angles[index];
            const rad = (angle * Math.PI) / 180;
            const x = radius * Math.cos(rad);
            const y = radius * Math.sin(rad);

            return (
              <motion.div
                key={index}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "blue", // Optional: For visual debugging
                }}
                animate="animate"
                variants={containerVariants}
                custom={-rotation} // Pass the rotation value to the motion div
              >
                {Component}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default FerrisWheel;
