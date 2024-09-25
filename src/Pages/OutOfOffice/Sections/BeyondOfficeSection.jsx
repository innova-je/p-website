import React from "react";
import BeyondOffice from "../Components/BeyondOffice";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "react-responsive";
import OutOfOfficeData from '../../../Assets/data/Accomplishments.json'

const BeyondOfficeSection = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 750 });

  const HeaderStyle = {
    color: theme.palette.secondary.main,
    fontWeight: "500",
    fontSize: isMobile ? "13dvw" : "4rem",
    textAlign: "center",
    margin: isMobile ? "10% 0 0 0" : "0",
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
      <div style={{paddingBottom: "3rem"}}>
        <p style={HeaderStyle}>Beyond Office Hours</p>

        <p style={HeaderDescriptionStyle}>
          Because having fun is the secret ingredient
        </p>

        <BeyondOffice element={"1"} image={"1"} text={"1"} />
        <BeyondOffice />
      </div>
    </>
  );
};

export default BeyondOfficeSection;
