import { Typography, styled, useTheme } from "@mui/material";
import React from "react";
import Fidelidade from "../../../Assets/Images/HomePageImages/PartnersLogos/FidelidadeLogo.png";
import Siemens from "../../../Assets/Images/HomePageImages/PartnersLogos/SiemensLogo.png";
import Cisco from "../../../Assets/Images/HomePageImages/PartnersLogos/CiscoLogo.png";
import Magma from "../../../Assets/Images/HomePageImages/PartnersLogos/MagmaLogo.png";
import Meta from "../../../Assets/Images/HomePageImages/PartnersLogos/MetaLogo.png";
import OpenBB from "../../../Assets/Images/HomePageImages/PartnersLogos/OpenBBLogo.png";

import { useMediaQuery } from "react-responsive";

const partnerData = {
  goldSponsors: [{ name: "Fidelidade", logoSrc: Fidelidade, width: "80%" }],
  silverSponsors: [
    {
      name: "Siemens Energy",
      logoSrc: Siemens,
      width: "80%",
      transform: "scale(0.6)",
    },
    {
      name: "Cisco Systems",
      logoSrc: Cisco,
      width: "80%",
      transform: "scale(0.6)",
    },
  ],
  learningPartners: [
    {
      name: "Magma Studios",
      logoSrc: Magma,
      width: "50%",
      transform: "scale(0.8)",
    },
    {
      name: "Meta Consultoria Júnior",
      logoSrc: Meta,
      width: "50%",
      transform: "scale(0.7)",
    },
    { name: "OpenBB", logoSrc: OpenBB, width: "60%", transform: "scale(0.6)" },
  ],
};

const OurPartners = () => {
  const theme = useTheme();
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: desktop ? "3.5dvw" : tablet ? "4dvw" : "6.5dvw",
  };

  const PartnersBox = styled("div")(() => ({
    position: "relative",
    margin: mobile ? "2% 0 10% 0" : tablet ? "2% 0 10% 0" : "5% 0 8% 0",
    transform: "scale(0.9)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F0F0F0",
  }));

  const SponsorsBox = styled("div")(() => ({
    position: "relative",
    marginTop: mobile ? "0%" : "5%",
    width: "100%",
    display: "flex",
    flexDirection: mobile ? "column" : "row",
    justifyContent: "center",
    alignItems: tablet ? "flex-start" : "",
  }));

  const SponsorBox = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    margin: mobile ? "none" : "0 3%",
    marginTop: mobile ? "10%" : "0%",
    width: desktop ? "55%" : "",
  }));

  const LearningPartners = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: mobile ? "10%" : "0",
  }));

  const SponsorBoxTitle = styled("div")(() => ({
    width: desktop ? "100%" : tablet ? "100%" : "90%",
    height: "7vh",
    borderRadius: "50px",
    backgroundColor: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  const SponsorTitleStyle = {
    color: theme.palette.secondary.main,
    fontWeight: "600",
    fontSize: desktop ? "1.5dvw" : tablet ? "2dvw" : "4.5dvw",
  };

  return (
    <PartnersBox>
      <Typography sx={ClientsAndPartnersStyle}>Meet Our Partners</Typography>
      <Typography
        sx={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          color: theme.palette.secondary.main,
          fontSize: desktop ? "2dvw" : tablet ? "2.5dvw" : "4.5dvw",
        }}
      >
        Alone, we go fast. Together, we go further.
      </Typography>
      <SponsorsBox>
        <SponsorBox className="Gold Sponsors">
          <SponsorBoxTitle>
            <Typography sx={SponsorTitleStyle}>Gold Sponsor</Typography>
          </SponsorBoxTitle>
          <div
            style={{
              width: desktop ? "100%" : tablet ? "100%" : "90%",
              height: desktop ? "20vh" : tablet ? "30vh" : "35vh",
              marginTop: "5%",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF29",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={Fidelidade}
              alt="Fidelidade Logo"
              style={{ width: "80%" }}
            />
          </div>
        </SponsorBox>
        <SponsorBox className="Silver Sponsors">
          <SponsorBoxTitle>
            <Typography sx={SponsorTitleStyle}>Silver Sponsor</Typography>
          </SponsorBoxTitle>
          <div
            style={{
              width: desktop ? "100%" : tablet ? "100%" : "90%",
              height: desktop ? "35vh" : tablet ? "30vh" : "40vh",
              marginTop: "5%",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF29",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              rowGap: "10%",
            }}
          >
            <img
              src={Siemens}
              alt="Siemens Energy Logo"
              style={{ width: desktop ? "50%" : tablet ? "60%" : "40%" }}
            />
            <img
              src={Cisco}
              alt="Cisco Systems Logo"
              style={{ width: desktop ? "50%" : tablet ? "60%" : "40%" }}
            />
          </div>
        </SponsorBox>
        <LearningPartners className="Learning Partners">
          <SponsorBoxTitle>
            <Typography sx={SponsorTitleStyle}>Learning Partners</Typography>
          </SponsorBoxTitle>
          <div
            style={{
              width: desktop ? "100%" : tablet ? "100%" : "90%",
              height: desktop ? "35vh" : tablet ? "30vh" : "45vh",
              marginTop: "5%",
              borderRadius: "30px",
              backgroundColor: "#FFFFFF29",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: mobile ? "20px" : "none",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: desktop ? "row" : "column",
                gap: desktop ? "10%" : tablet ? "20%" : "20px",
              }}
            >
              <img
                src={Magma}
                alt="Magma Studios Logo"
                style={{ width: desktop ? "35%" : tablet ? "60%" : "40%" }}
              />
              <img
                src={Meta}
                alt="Meta Consultoria Júnior Logo"
                style={{ width: desktop ? "35%" : tablet ? "60%" : "40%" }}
              />
            </div>

            <img
              src={OpenBB}
              alt="OpenBB Logo"
              style={{ width: desktop ? "40%" : tablet ? "60%" : "40%" }}
            />
          </div>
        </LearningPartners>
      </SponsorsBox>
    </PartnersBox>
  );
};

export default OurPartners;
