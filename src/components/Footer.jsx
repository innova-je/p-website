import React from "react";
import { Typography, Link } from "@mui/material";
import { Instagram, Email, LinkedIn, ArrowForward } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import InNovaLogo10 from "../images/OurLogos/logos-10.png";
import InNovaLogo2 from "../images/OurLogos/logos-08.png";
import InNovaLogoServices from "../images/OurLogos/logos-05.png";
import InNovaLogoServicesMobile from "../images/OurLogos/logos-03.png";
import CustomButton from "./CustomButton";

function Footer() {
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";
  const isTeamPage = location.pathname === "/our-people/our-team";
  const isJoinUsPage = location.pathname === "/join-us";
  const isInnovationWeekPage = location.pathname === "/events/innovation-week";
  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });
  const desktop = useMediaQuery({ minWidth: 1081 });

  const PagesLinkStyle = {
    fontSize: mobile ? "3.5vw" : tablet ? "2.5vw" : "1.25vw",
    color: isServicesPage ? "#732043" : "white",
    fontWeight: "400",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "#732043",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "font-weight 0.3s ease",
    textTransform: "none",
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      style={{
        height: mobile || tablet ? "40dvw" : "34vh",
        display: "flex",
        flexDirection: "row",
        backgroundColor: isServicesPage
          ? "#732043"
          : isTeamPage || isJoinUsPage || isInnovationWeekPage
          ? "white"
          : "#F0F0F0",
        overflow: "hidden",
      }}
    >
      {desktop && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "30%",
            backgroundColor: isServicesPage ? "white" : isInnovationWeekPage ? "#052533" : "#732043",
          }}
        >
          <div
            style={{
              backgroundColor: isServicesPage
                ? "#732043"
                : isTeamPage || isJoinUsPage || isInnovationWeekPage
                ? "white"
                : "#F0F0F0",
              height: "35%",
              borderRadius: "0 0 25px 0",
            }}
          />
          <div
            style={{
              backgroundColor: isServicesPage ? "white" : isInnovationWeekPage ? "#052533" : "#732043",
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
                  width: mobile || tablet ? "100%" : "50%",
                  padding: "20px 0",
                }}
              />
              <Typography
                sx={{
                  fontWeight: isServicesPage ? "normal" : "300",
                  fontSize: "80%",
                  color: isServicesPage ? "#732043" : "white",
                }}
              >
                &#9426; 2024 In-Nova. All rights reserved.
              </Typography>
            </NavLink>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: isServicesPage ? "white" : isInnovationWeekPage ? "#052533" : "#732043",
          height: "100%",
          width: desktop ? "70%" : "100%",
          borderRadius: desktop ? "25px 0 0 0" : "0px",
          display: "flex",
          flexDirection: "row",
          alignItems: mobile || tablet ? "center" : "",
          justifyContent: mobile || tablet ? "center" : "space-between",
        }}
      >
        {(mobile || tablet) && (
          <NavLink
            to="/"
            onClick={handleNavLinkClick}
            style={{
              height: "100%",
              width: "35%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              alt="In-Nova Logo"
              src={isServicesPage ? InNovaLogoServicesMobile : InNovaLogo10}
              style={{ width: "80%", padding: "20px 0", marginLeft: "15px" }}
            />
          </NavLink>
        )}

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          {desktop && (
            <div
              style={{ height: "35%", display: "flex", alignItems: "center" }}
            >
              <Typography
                sx={{
                  fontSize: "1.9vw",
                  fontWeight: isServicesPage ? "400" : "200",
                  lineHeight: "40px",
                  textAlign: "left",
                  color: isServicesPage ? "#732043" : "white",
                  paddingLeft: "50px",
                }}
              >
                Let's discuss and bring your vision to life.
              </Typography>
            </div>
          )}

          <div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: mobile || tablet ? "repeat(2, 2fr)" : "repeat(3, 3fr)",
                padding: "25px 0 0 50px",
                width: mobile || tablet ? "auto" : "90%",
              }}
            >
              {[
                { to: "about-us", text: "About Us" },
                { to: "events", text: "Events" },
                { to: "services", text: "Services" },
                { to: "out-of-office", text: "Out of Office" },
                { to: "our-people/our-team", text: "Our Team" },
                { to: "join-us", text: "Join Us" },
                { to: "our-people/our-advisors", text: "Our Advisors" },
              ].map(({ to, text }) => (
                <NavLink
                  key={to}
                  to={to}
                  style={linkStyles}
                  onClick={handleNavLinkClick}
                >
                  <Typography style={PagesLinkStyle}>{text}</Typography>
                </NavLink>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", width: mobile || tablet ? "auto" : "45%" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: mobile || tablet ? "0 35px" : "0 50px",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!(mobile || tablet) && (
                <CustomButton
                  href="mailto:geral@innova.pt"
                  bgColor={isServicesPage ? "#732043" : isInnovationWeekPage ? "#ffffff" : "#052533"}
                  currPage={location.pathname}
                  sx={{
                    transition: "zIndex 0.2s ease-in-out",
                    "&:hover": {
                      zIndex: 1,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: "1vw", zIndex: 1 }}>
                    Let's Talk
                  </Typography>
                  <ArrowForward sx={{ height: "50%", zIndex: 1 }} />
                </CustomButton>
              )}
            </div>

            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: mobile || tablet ? "column" : "row",
                  gap: mobile || tablet ? "5px" : 0,
                  position: "relative",
                  top: mobile || tablet ? "" : "3vh",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link href="mailto:geral@innova.pt">
                  <Email
                    sx={{
                      width: mobile || tablet ? "6dvw" : "4vw",
                      height: mobile || tablet ? "6dvw" : "5vh",
                      color: isServicesPage ? "#732043" : "white",
                    }}
                  />
                </Link>
                <Link href="https://www.instagram.com/in.nova.pt">
                  <Instagram
                    sx={{
                      width: mobile || tablet ? "6dvw" : "4vw",
                      height: mobile || tablet ? "6dvw" : "5vh",
                      color: isServicesPage ? "#732043" : "white",
                    }}
                  />
                </Link>
                <Link href="https://www.linkedin.com/company/innova-consultoria-junior">
                  <LinkedIn
                    sx={{
                      width: mobile || tablet ? "6dvw" : "4vw",
                      height: mobile || tablet ? "6dvw" : "5vh",
                      color: isServicesPage ? "#732043" : "white",
                    }}
                  />
                </Link>
              </div>
            </div>

            {!(mobile || tablet) && (
              <div style={{ height: "100%" }}>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: isServicesPage ? "normal" : "100",
                    lineHeight: "17px",
                    textAlign: "center",
                    color: isServicesPage ? "#732043" : "white",
                    padding: "10px 0",
                  }}
                >
                  Faculdade de Ciências e Tecnologia
                  <br />
                  Universidade Nova de Lisboa
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    fontWeight: isServicesPage ? "normal" : "100",
                    textAlign: "center",
                    color: isServicesPage ? "#732043" : "white",
                  }}
                >
                  Quinta da Torre, Caparica
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
