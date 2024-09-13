import React from "react";
import { Button, Link, Typography, useTheme } from "@mui/material";
import guiadocandidato from "../../../Assets/Images/other/GuiaDoCandidato.png";
import { useMediaQuery } from "react-responsive";

function CandidateGuideSection() {
  const theme = useTheme();
  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3% 0 5% 0",
      }}
    >
      <Typography
        variant="h4"
        style={{
          position: "relative",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          fontWeight: "Light",
          textAlign: "center",
          fontSize: tablet
            ? "3.5dvw"
            : mobile
            ? "5.5dvw"
            : smallMobile
            ? "6dvw"
            : "2.2dvw",
        }}
      >
        One important rule...
      </Typography>
      <Typography
        variant="h2"
        style={{
          position: "relative",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          fontWeight: "bold",
          textAlign: "center",
          fontSize: tablet
            ? "5.5dvw"
            : mobile
            ? "6.5dvw"
            : smallMobile
            ? "7dvw"
            : "3.5dvw",
        }}
      >
        Always be prepared!
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "right",
          marginTop: smallMobile || mobile || tablet ? "5%" : 0,
        }}
      >
        <img
          src={guiadocandidato}
          alt="guiadocandidato"
          style={{
            position: "relative",
            left: "5%",
            maxWidth: "60%",
            transform: mobile || smallMobile ? "none" : "scale(0.8)",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h2"
              style={{
                color: theme.palette.secondary.main,
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Regular",
                fontSize: tablet
                  ? "4dvw"
                  : mobile
                  ? "4dvw"
                  : smallMobile
                  ? "4dvw"
                  : "3dvw",
                textAlign: "center",
              }}
            >
              Read the
              <br />
              candidate guide
            </Typography>

            {
              <a href="https://drive.google.com/file/d/1Rj1NgGbQcouHk9uTygxk8N0rGcIANw9L/view?usp=sharing">
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "10px",
                    marginTop: "20%",
                    py: tablet
                      ? "0.8dvw"
                      : mobile
                      ? "1.5dvw"
                      : smallMobile
                      ? "1.5dvw"
                      : "0.35dvw",
                    px: tablet
                      ? "4dvw"
                      : mobile
                      ? "4dvw"
                      : smallMobile
                      ? "4dvw"
                      : "3dvw",
                    fontSize: tablet
                      ? "1.7dvw"
                      : mobile
                      ? "1.5dvw"
                      : smallMobile
                      ? "2.5dvw"
                      : "1.2dvw",
                    textTransform: "none",
                  }}
                >
                  Download
                </Button>
              </a>
            }
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: smallMobile || mobile || tablet ? "3%" : "0%",
        }}
      >
        <Typography
          variant="body1"
          style={{
            color: theme.palette.secondary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "Light",
            textAlign: "center",
            fontSize:
              mobile || smallMobile ? "3dvw" : tablet ? "3.2dvw" : "1.8dvw",
          }}
        >
          And if you have any further questions,
        </Typography>

        <Link
          href="mailto:geral@innova.pt" //TODO: isto aqui devia ser o mail de RH
          variant="body1"
          style={{
            color: theme.palette.primary.main,
            fontFamily: theme.typography.fontFamily,
            fontWeight: "Light",
            textAlign: "center",
            fontSize:
              smallMobile || mobile ? "3dvw" : tablet ? "3dvw" : "1.6dvw",
          }}
        >
          send us an-email
        </Link>
      </div>
    </div>
  );
}

export default CandidateGuideSection;
