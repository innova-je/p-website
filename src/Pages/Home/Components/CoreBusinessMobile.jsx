import React from "react";
import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const ServiceBox = ({ imgSrc, title, description, imageStyle }) => {
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
        //transform: "scale(0.5)"
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          margin: "0 0 0 6%",
          padding: "2rem 0"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          <Typography
            style={{
              fontSize: mobile ? "3.5vw" : tablet ? "3.5vw" : "2vw",
              fontWeight: "300",
              color: "#FFFFFF6E",
              marginTop: "10%",
            }}
          >
            What we do
          </Typography>
          <Typography
            style={{
              fontSize: mobile ? "8vw" : tablet ? "7vw" : "6vw",
              fontWeight: "700",
              color: "white",
              lineHeight: "110%",
              marginTop: "3%",
              textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              fontSize: mobile ? "4vw" : tablet ? "3vw" : "2vw",
              fontWeight: "300",
              color: "white",
              marginTop: "5%",
              lineHeight: "130%",
            }}
          >
            {description}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: 1
          }}
        >
          {<img src={imgSrc} style={imageStyle} />}
        </div>
      </div>
    </div>
  );
};

const SoftwareSolutionsMobile = () => (
  <ServiceBox
    id="softwareSolutions"
    imgSrc={require("../../../Assets/Images/HomePageImages/SoftwareSolutions.png")}
    title="Software Solutions"
    description="With tailored solutions and cutting-edge technologies, we craft impactful software that propels businesses forward."
    buttonLabel="Services"
    imageStyle={{ width: "100%", objectFit: "contain" }}
  />
);

const MobileDevelopmentMobile = () => {
  return (
    <ServiceBox
      id="MobileDevelopment"
      imgSrc={require("../../../Assets/Images/HomePageImages/MobileDevelopment.png")}
      title="Mobile Development"
      description="In-Nova creates intuitive apps that redefine user experiences and seamless interactions on various devices, empowering digital businesses."
      buttonLabel="Services"
      imageStyle={{ width: "80%", height: "80%", maxHeight: "80vh", objectFit: "contain" }}
    />
  );
};

const RoboticsPrototypingMobile = () => (
  <ServiceBox
    id="roboticsPrototyping"
    imgSrc={require("../../../Assets/Images/HomePageImages/RoboticsPrototyping.png")}
    title="Robotics & Prototyping"
    description="Exploring the frontier of robotics and prototyping. In-Nova pioneers innovative solutions, bringing futuristic concepts to life."
    buttonLabel="Services"
    imageStyle={{ width: "100%", objectFit: "contain" }}
  />
);

export {
  SoftwareSolutionsMobile,
  MobileDevelopmentMobile,
  RoboticsPrototypingMobile,
};
