import React from "react";

import WebappFuturalia from "../../../Assets/Images/other/webapp_futuralia.png";
import AppThirstPortugal from "../../../Assets/Images/other/ThirstPortugal.png";
import PortfolioComponent from "./PortfolioComponent";
import PortfolioButton from "./PortfolioButton";
import { useTheme } from "@mui/material";

function PortfolioSection() {
  const theme = useTheme();

  const containerStyles = {
    background: theme.palette.primary.main,
    padding: "75px 0",
    display: "flex",
    flexDirection: "column",
    rowGap: "50px",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyles}>
      <PortfolioComponent image={WebappFuturalia} index={0} />
      <PortfolioComponent image={AppThirstPortugal} index={1} />
      <PortfolioButton />
    </div>
  );
}

export default PortfolioSection;
