import React from "react";
import { Typography, Link, useTheme } from "@mui/material";
import { Instagram, Email, LinkedIn } from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import InNovaLogo10 from "../Assets/Images/OurLogos/logos-10.png";
import InNovaLogoServicesMobile from "../Assets/Images/OurLogos/logos-03.png";

function FooterMobile() {
  const theme = useTheme();
  const location = useLocation();
  const isServicesPage = location.pathname === "/services";
  const isInnovationWeekPage = location.pathname === "/events/innovation-week";
  const mobile = useMediaQuery({ maxWidth: 600 });

  const PagesLinkStyle = {
    fontSize: mobile ? "1rem" : "1.3rem",
    color: isServicesPage ? theme.palette.primary.main : "white",
    fontWeight: isServicesPage ? 700 : 500,
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
    width: mobile ? "6dvw" : "4dvw",
    height: mobile ? "6dvw" : "5vh",
    color: isServicesPage ? theme.palette.primary.main : "white",
  };

  const handleNavLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      style={{
        backgroundColor: isServicesPage
          ? "white"
          : isInnovationWeekPage
          ? theme.palette.secondary.main
          : theme.palette.primary.main,
        display: "flex",
        color: isServicesPage ? theme.palette.primary.main : "white",
      }}
    >
      <div
        to="/"
        onClick={handleNavLinkClick}
        style={{
          width: "20%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <img
          alt="In-Nova Logo"
          src={isServicesPage ? InNovaLogoServicesMobile : InNovaLogo10}
          style={{ width: mobile ? "80%" : "60%" }}
        />
      </div>
      <div
        style={{
          width: "65%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 2fr)",
            rowGap: "0.5rem",
            columnGap: mobile ? "1.5rem" : "3rem",
            padding: "1.5rem",
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
          alignItems: "center",
          flex: 1,
          flexDirection: "column",
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
    </footer>
  );
}

export default FooterMobile;
