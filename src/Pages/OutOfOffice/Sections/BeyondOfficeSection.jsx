import React from "react";
import BeyondOffice from "../Components/BeyondOffice";
import { useTheme } from "@emotion/react";

const BeyondOfficeSection = () => {
  const theme = useTheme();

  const HeaderStyle = {
    color: theme.palette.secondary.main,
    fontWeight: "500",
    fontSize: "4rem",
    textAlign: "center",
  };

  const HeaderDescriptionStyle = {
    color: theme.palette.primary.main,
    fontWeight: "400",
    fontSize: "1.5rem",
    textAlign: "center",
    margin: "5px 0 5% 0",
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
