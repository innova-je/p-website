import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";

// Importing images
import Delta from "../../../../Assets/Images/InnovationWeek/Partners/delta.png";
import RedBull from "../../../../Assets/Images/InnovationWeek/Partners/red_bull.png";
import MateusRose from "../../../../Assets/Images/InnovationWeek/Partners/mateus_rose.png";
import OzEnergia from "../../../../Assets/Images/InnovationWeek/Partners/ozenergia.png";
import SumolCompal from "../../../../Assets/Images/InnovationWeek/Partners/sumol_compal.png";
import SuperBock from "../../../../Assets/Images/InnovationWeek/Partners/super_bock.png";
import Ambiosfera from "../../../../Assets/Images/InnovationWeek/Companies/ambiosfera.png";
import Carclasse from "../../../../Assets/Images/InnovationWeek/Companies/carclasse.png";
import Get2c from "../../../../Assets/Images/InnovationWeek/Companies/get2c.png";
import Google from "../../../../Assets/Images/InnovationWeek/Companies/google.png";
import Gsk from "../../../../Assets/Images/InnovationWeek/Companies/gsk.png";
import HighValue from "../../../../Assets/Images/InnovationWeek/Companies/high_value.png";
import Hiss from "../../../../Assets/Images/InnovationWeek/Companies/hiss.png";
import Kpmg from "../../../../Assets/Images/InnovationWeek/Companies/kpmg.png";
import Nbi from "../../../../Assets/Images/InnovationWeek/Companies/nbi.png";
import NetworkMe from "../../../../Assets/Images/InnovationWeek/Companies/network_me.png";
import PhilipMorris from "../../../../Assets/Images/InnovationWeek/Companies/philip_morris.png";
import SaltPay from "../../../../Assets/Images/InnovationWeek/Companies/saltpay.png";
import Vodafone from "../../../../Assets/Images/InnovationWeek/Companies/vodafone.png";

function CompaniesAndPartners() {
  const theme = useTheme();

  const companyLogos = [
    Kpmg,
    Vodafone,
    HighValue,
    Gsk,
    Hiss,
    PhilipMorris,
    Google,
    Carclasse,
    Get2c,
    SaltPay,
    NetworkMe,
    Ambiosfera,
    Nbi,
  ];

  const partnersLogos = [
    Delta,
    RedBull,
    SumolCompal,
    SuperBock,
    OzEnergia,
    MateusRose,
  ];

  const isMobile = useMediaQuery({ maxWidth: 600 });

  const GridContainer = styled("div")(({ columns }) => ({
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    gap: "2vw",
    gridTemplateColumns: isMobile ? `repeat(3, 1fr)` :  `repeat(${columns}, 1fr)`,
  }));

  const LogosGrid = ({ images, columns }) => (
    <GridContainer columns={columns}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            maxWidth: isMobile ? "100px" : "175px",
            padding: "1vw",
            boxSizing: "border-box",
          }}
        >
          <img
            src={image}
            alt={`Logo ${image}`}
            style={{
              width: "100%",
              maxHeight: "75px",
              objectFit: "contain",
            }}
          />
        </div>
      ))}
    </GridContainer>
  );

  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem 0",
        textAlign: "center",
        color: theme.palette.secondary.main,
        marginTop: isMobile ? "0" : "0dvw",
      }}
    >
      <Typography
        variant="h4"
        style={{
          fontSize: isMobile ? "1.7rem" : "2rem",
          fontWeight: 600,
          marginBottom: "3rem",
        }}
      >
        COMPANIES
      </Typography>
      <LogosGrid images={companyLogos} columns={5} />

      <div style={{ margin: "5rem 0 3rem 0" }}>
        <Typography
          variant="h4"
          style={{
            fontSize: isMobile ? "1.7rem" : "2rem",
            fontWeight: 600,
            marginBottom: "3rem",
          }}
        >
          OUR PARTNERS
        </Typography>
        <LogosGrid images={partnersLogos} columns={6} />
      </div>
    </section>
  );
}

export default CompaniesAndPartners;
