import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "react-responsive";
import backgroundImage from "../../../../Assets/Images/other/IW-png.png";

function EventDescription() {
  const theme = useTheme();
  const secondBlue = "#559FA2";

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });

  const RedBox = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: mobile || tablet ? "center" : "left",
  });

  const BlueBox = styled("div")({
    padding: "1rem 0",
    display: "flex",
    alignItems: "center",
    gap: mobile ? "4dvw" : "2dvw",
    width: mobile || tablet ? "100%" : "50dvw",
  });

  const fontSizeH4 = mobile ? "7.5vw" : tablet ? "4vw" : "2.5vw";
  const fontSizeH5 = mobile ? "4vw" : tablet ? "3vw" : "1.5vw";
  const fontSizeBody2 = mobile ? "3.5vw" : tablet ? "2.5vw" : "1vw";

  return (
    <div
      style={{
        background: theme.palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        padding: mobile || tablet ? "2rem" : "2rem 0 4rem 0",
        overflow: "hidden",
        flexDirection: mobile || tablet ? "column" : "row",
        gap: mobile || tablet ? "2rem" : "10rem",
      }}
    >
      <RedBox>
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontSize: fontSizeH4,
          }}
        >
          THE BIGGEST
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: secondBlue,
            textShadow: "0 0 16px #559FA2",
            fontSize: fontSizeH4,
          }}
        >
          INNOVATION
        </Typography>
        <Typography
          variant="h4"
          style={{
            color: "white",
            fontSize: fontSizeH4,
          }}
        >
          EVENT OF NOVA SST
        </Typography>
      </RedBox>

      <div style={{ padding: "0 1rem" }}>
        <BlueBox>
          <img
            src={backgroundImage}
            alt="Innovation Week 2023"
            style={{
              width: mobile ? "60px" : "80px",
              height: mobile ? "60px" : "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <Typography
              variant="h5"
              style={{ color: "white", fontSize: fontSizeH5 }}
            >
              ENTREPRENEURSHIP
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                fontWeight: 100,
                fontSize: fontSizeBody2,
              }}
            >
              Challenge your entrepreneurial spirit with inspirational talks,
              immersive workshops and create connections with business experts.
            </Typography>
          </div>
        </BlueBox>

        <BlueBox>
          <img
            src={backgroundImage}
            alt="Innovation Week 2023"
            style={{
              width: mobile ? "60px" : "80px",
              height: mobile ? "60px" : "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <Typography
              variant="h5"
              style={{ color: "white", fontSize: fontSizeH5 }}
            >
              INNOVATION
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                fontWeight: 100,
                fontSize: fontSizeBody2,
              }}
            >
              Explore the concept of innovation with renowned personalities,
              top-tier companies, and pioneering projects showcased in the
              event.
            </Typography>
          </div>
        </BlueBox>

        <BlueBox>
          <img
            src={backgroundImage}
            alt="Innovation Week 2023"
            style={{
              width: mobile ? "60px" : "80px",
              height: mobile ? "60px" : "80px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <Typography
              variant="h5"
              style={{ color: "white", fontSize: fontSizeH5 }}
            >
              NETWORKING
            </Typography>
            <Typography
              variant="body2"
              style={{
                color: "white",
                fontWeight: 100,
                fontSize: fontSizeBody2,
              }}
            >
              Expand your network, forge connections, explore career
              opportunities, and spark collaborations that drive technological
              and business advancements.
            </Typography>
          </div>
        </BlueBox>
      </div>
    </div>
  );
}

export default EventDescription;
