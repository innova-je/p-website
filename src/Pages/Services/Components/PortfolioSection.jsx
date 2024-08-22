import React from "react";

import WebappFuturalia from "../../../Assets/Images/other/webapp_futuralia.png";
import AppThirstPortugal from "../../../Assets/Images/other/ThirstPortugal.png";
import PortfolioComponent from "./PortfolioComponent";
import PortfolioButton from "./PortfolioButton";

const containerStyles = {
  background: "#732043",
  padding: "75px 0",
  display: "flex",
  flexDirection: "column",
  rowGap: "50px",
  alignItems: "center",
  justifyContent: "center",
};

function PortfolioSection() {
  return (
    <div style={containerStyles}>
      <PortfolioComponent
        image={WebappFuturalia}
        index={0}
      ></PortfolioComponent>
      <PortfolioComponent
        image={AppThirstPortugal}
        index={1}
      ></PortfolioComponent>
      <PortfolioButton></PortfolioButton>
    </div>
  );
}

export default PortfolioSection;
