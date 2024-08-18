import React from "react";
import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import joinus_oof from "../../../Assets/Images/other/joinus-outofoffice.png";
import joinus_oof2 from "../../../Assets/Images/other/joinus-outofoffice2.png";
import { useMediaQuery } from "react-responsive";

import { NavLink } from "react-router-dom";

function OutOfOfficeSection() {
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: mobile || smallMobile || tablet ? "column" : "row",
        width: "100dvw",
        height: smallMobile || mobile || tablet ? "auto" : "60vh",
        background: `linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))`,
      }}
    >
      {/* 3rd Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",    
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {(mobile || smallMobile || tablet) && (
          <div
            style={{
              height: "100%",
              zIndex: -1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={joinus_oof2}
              alt="joinus_oof"
              style={{
                width: "100%",
                marginBottom: "5%",
              }}
            />
          </div>
        )}
        <h3
          style={{
            width: "fit-content",
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "bold",
            fontSize: mobile
              ? "7dvw"
              : smallMobile
              ? "7dvw"
              : tablet
              ? "4dvw"
              : smallDesktop
              ? "4dvw"
              : "3.3dvw",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          We don’t just work here,
        </h3>
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "regular",
            fontSize: mobile
              ? "7dvw"
              : smallMobile
              ? "6dvw"
              : tablet
              ? "4dvw"
              : smallDesktop
              ? "3dvw"
              : "2.5dvw",
            textAlign: "center",
          }}
        >
          we also have
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "bold",
            fontSize: mobile
              ? "7dvw"
              : smallMobile
              ? "7dvw"
              : tablet
              ? "4dvw"
              : smallDesktop
              ? "4dvw"
              : "3.3dvw",
          }}
        >
          a lot of fun!
        </Typography>

        <NavLink to="/out-of-office">
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "10px",
              py: "10px",
              px: "25px",
              fontSize: mobile
                ? "3dvw"
                : smallMobile
                ? "3dvw"
                : tablet
                ? "2dvw"
                : "1dvw",
              textTransform: "none",
              mt: "2rem",
              mb: "2rem",
            }}
          >
            Out of Office
          </Button>
        </NavLink>
      </div>

      {!(mobile || smallMobile || tablet) && (
        <div
          style={{
            width: "100%",
            height: "100%",
            zIndex: "-1",
            display: "flex",
            background: "",
            alignItems: "flex-end",
            justifyContent: "right",
          }}
        >
          <img
            src={joinus_oof}
            alt="joinus_oof"
            style={{
              height: "100%",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default OutOfOfficeSection;
