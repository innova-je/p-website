import React from "react";
import BeyondOffice from "../Components/BeyondOffice";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "react-responsive";


const BeyondOfficeSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 750 });

  const HeaderStyle = {
    color: theme.palette.secondary.main,
    fontWeight: "500",
    fontSize: isMobile ? "13dvw" : "4rem",
    textAlign: "center",
  };

  const HeaderDescriptionStyle = {
    color: theme.palette.primary.main,
    fontWeight: "400",
    fontSize: isMobile ? "7dvw" : "1.5rem",  
    textAlign: "center",
    margin: isMobile ? "5% 0 10% 0" : "5px 0 4% 0",
  };

  return (
    <>
      <p style={HeaderStyle}>Beyond Office Hours</p>

      <p style={HeaderDescriptionStyle}>
        Because having fun is the secret ingredient
      </p>

      <BeyondOffice element={"Right"} />
      <BeyondOffice />
      <BeyondOffice element={"Right"} />
      <BeyondOffice />
    </>
  );
};

export default BeyondOfficeSection;
