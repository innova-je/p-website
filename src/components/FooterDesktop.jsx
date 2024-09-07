import React from "react";
import { Typography, Link, useTheme } from "@mui/material";
import { Instagram, Email, LinkedIn, ArrowForward } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";

import InNovaLogo2 from "../Assets/Images/OurLogos/logos-08.png";
import InNovaLogoServices from "../Assets/Images/OurLogos/logos-05.png";
import CustomButton from "./CustomButton";

function FooterDesktop() {
  const theme = useTheme();
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";
  const isTeamPage = location.pathname === "/our-people/our-team";
  const isJoinUsPage = location.pathname === "/join-us";
  const isInnovationWeekPage = location.pathname === "/events/innovation-week";

  const PagesLinkStyle = {
    fontSize: "1.25rem",
    color: isServicesPage ? theme.palette.primary.main : "white",
    fontWeight: "400",
  };

  const linkStyles = {
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "font-weight 0.3s ease",
    textTransform: "none",
  };

  const SocialMediaIconStyle = {
    width: "4vw",
    height: "5vh",
    color: isServicesPage ? theme.palette.primary.main : "white",
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      style={{
        height: "34vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: isServicesPage
          ? theme.palette.primary.main
          : isTeamPage || isJoinUsPage || isInnovationWeekPage
          ? "white"
          : "#F0F0F0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "30%",
          backgroundColor: isServicesPage
            ? "white"
            : isInnovationWeekPage
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
        }}
      >
        <div
          style={{
            backgroundColor: isServicesPage
              ? theme.palette.primary.main
              : isTeamPage || isJoinUsPage || isInnovationWeekPage
              ? "white"
              : "#F0F0F0",
            height: "35%",
            borderRadius: "0 0 25px 0",
          }}
        />
        <div
          style={{
            backgroundColor: isServicesPage
              ? "white"
              : isInnovationWeekPage
              ? theme.palette.secondary.main
              : theme.palette.primary.main,
            height: "65%",
          }}
        >
          <NavLink
            to="/"
            onClick={handleNavLinkClick}
            style={{
              height: "100%",
              display: "flex",
              marginLeft: "50px",
              flexDirection: "column",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <img
              alt="In-Nova Logo"
              src={isServicesPage ? InNovaLogoServices : InNovaLogo2}
              style={{
                width: "50%",
                padding: "20px 0",
              }}
            />
            <Typography
              style={{
                fontWeight: isServicesPage ? "normal" : "300",
                fontSize: "80%",
                color: isServicesPage ? theme.palette.primary.main : "white",
              }}
            >
              &#9426; 2024 In-Nova. All rights reserved.
            </Typography>
          </NavLink>
        </div>
      </div>

      <div
        style={{
          backgroundColor: isServicesPage
            ? "white"
            : isInnovationWeekPage
            ? theme.palette.secondary.main
            : theme.palette.primary.main,
          flex: 1,
          borderRadius: "25px 0 0 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 0 0 4rem"
              }}
            >
              <Typography
                style={{
                  fontSize: "1.9vw",
                  fontWeight: isServicesPage ? "400" : "200",
                  lineHeight: "40px",
                  textAlign: "left",
                  color: isServicesPage ? theme.palette.primary.main : "white",
                  padding: "2rem 0"
                }}
              >
                Let's discuss and bring your vision to life.
              </Typography>

              <div
                style={{
                  display: "grid",
                  width: "100%",
                  gridTemplateColumns: "repeat(3, 3fr)",
                  rowGap: "0.7rem",
                  columnGap: "6rem",
                }}
              >
                {[
                  { to: "about-us", text: "About Us" },
                  { to: "services", text: "Services" },
                  { to: "out-of-office", text: "Out of Office" },
                  { to: "our-people/our-team", text: "Team" },
                  { to: "join-us", text: "Join Us" },
                  { to: "our-people/our-advisors", text: "Advisors" },
                ].map(({ to, text }) => (
                  <NavLink
                    key={to}
                    to={to}
                    style={linkStyles}
                    onClick={handleNavLinkClick}
                  >
                    <Typography sx={PagesLinkStyle}>{text}</Typography>
                  </NavLink>
                ))}
              </div>

            </div>

            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                gap: "10%",
                alignItems: "center",
                padding: "25px 50px",
              }}
            >
              <div>
                <CustomButton
                  href="mailto:geral@innova.pt"
                  bgColor={
                    isServicesPage
                      ? theme.palette.primary.main
                      : isInnovationWeekPage
                      ? "#ffffff"
                      : theme.palette.secondary.main
                  }
                  currPage={location.pathname}
                  style={{
                    transition: "zIndex 0.2s ease-in-out",
                    "&:hover": {
                      zIndex: 1,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1vw", zIndex: 1 }}>
                    Let's Talk
                  </Typography>
                  <ArrowForward style={{ height: "50%", zIndex: 1 }} />
                </CustomButton>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Link href="mailto:geral@innova.pt">
                  <Email style={SocialMediaIconStyle} />
                </Link>
                <Link href="https://www.instagram.com/in.nova.pt">
                  <Instagram style={SocialMediaIconStyle} />
                </Link>
                <Link href="https://www.linkedin.com/company/innova-consultoria-junior">
                  <LinkedIn style={SocialMediaIconStyle} />
                </Link>
              </div>

              <div>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: isServicesPage ? "normal" : "100",
                    lineHeight: "1rem",
                    textAlign: "center",
                    color: isServicesPage
                      ? theme.palette.primary.main
                      : "white",
                    padding: "0 0 10px 0",
                  }}
                >
                  Faculdade de Ciências e Tecnologia
                  <br />
                  Universidade Nova de Lisboa
                </Typography>
                <Typography
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: isServicesPage ? "normal" : "100",
                    textAlign: "center",
                    color: isServicesPage
                      ? theme.palette.primary.main
                      : "white",
                  }}
                >
                  Quinta da Torre, Caparica
                </Typography>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default FooterDesktop;