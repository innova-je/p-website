import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { theme } from "../../../theme";

import { ReactComponent as WriteIcon } from "../../../Assets/SVGs/write-icon.svg";
import { ReactComponent as CameraIcon } from "../../../Assets/SVGs/camera-icon.svg";
import { ReactComponent as GroupIcon } from "../../../Assets/SVGs/group-icon.svg";
import { ReactComponent as ChatIcon } from "../../../Assets/SVGs/chat-icon.svg";
import { ReactComponent as InnovaIcon } from "../../../Assets/SVGs/innova-icon.svg";

import fill from "../../../Assets/Images/other/fill-img.png";
import record from "../../../Assets/Images/other/record-img.png";
import group from "../../../Assets/Images/other/group-img.png";
import congrats from "../../../Assets/Images/other/congrats-img.png";
import interview from "../../../Assets/Images/other/interview-img.png";
import { useMediaQuery } from "react-responsive";

const CustomCircle = ({ icon: IconComponent, bgcolor, fill }) => {
  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

  return (
    <>
      <Box
        sx={{
          width: tablet ? "6vw" : mobile ? "7vw" : smallMobile ? "9vw" : "60px",
          height: tablet
            ? "6vw"
            : mobile
            ? "7vw"
            : smallMobile
            ? "9vw"
            : "60px",
          borderRadius: "50%",
          backgroundColor: bgcolor,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
          transition: "background-color 0.8s, fill 0.5s",
        }}
      >
        {IconComponent && (
          <IconComponent
            height={tablet ? 30 : mobile ? 25 : smallMobile ? 20 : 35}
            style={{ fill: fill }}
          />
        )}
      </Box>
    </>
  );
};

const MiddleBox = ({ barheight }) => {
  let cameraBG = barheight >= 130 ? theme.palette.primary.main : "#F0F0F0";
  let groupBG = barheight >= 260 ? theme.palette.primary.main : "#F0F0F0";
  let chatBG = barheight >= 390 ? theme.palette.primary.main : "#F0F0F0";
  let innovaBG = barheight >= 520 ? theme.palette.primary.main : "#F0F0F0";

  let cameraFill = barheight >= 130 ? "white" : theme.palette.primary.main;
  let groupFill = barheight >= 260 ? "white" : theme.palette.primary.main;
  let chatFill = barheight >= 390 ? "white" : theme.palette.primary.main;
  let innovaFill = barheight >= 520 ? "white" : theme.palette.primary.main;

  let bgImg = fill;

  if (barheight < 130) {
    bgImg = fill;
  } else if (barheight >= 130 && barheight < 260) {
    bgImg = record;
  } else if (barheight >= 260 && barheight < 390) {
    bgImg = group;
  } else if (barheight >= 390 && barheight < 520) {
    bgImg = interview;
  } else {
    bgImg = congrats;
  }

  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
  const largeDesktop = useMediaQuery({ minWidth: 1400 });

  const fontTitle = {
    fontSize: largeDesktop
      ? "2.1dvw"
      : desktop
      ? "2.5dvw"
      : smallDesktop
      ? "2.7dvw"
      : tablet
      ? "3.7dvw"
      : mobile
      ? "3.9dvw"
      : smallMobile
      ? "5dvw"
      : "2dvw",
  };

  const fontText = {
    fontSize: largeDesktop
      ? "1.1dvw"
      : desktop
      ? "2dvw"
      : smallDesktop
      ? "1.5dvw"
      : tablet
      ? "2dvw"
      : mobile
      ? "2.8dvw"
      : smallMobile
      ? "3.5dvw"
      : "1dvw",
  };

  return (
    <>
      {/* Second Box */}
      <Box
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
          display: "flex",
          //margin: "5% 0",
          gap: "5%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",

          padding: smallMobile || mobile ? "0% 0 5% 0" : "2% 0 2% 0",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            display: "flex",
            justifyContent: "left",
          }}
        >
          <div
            style={{
              height: "100%",
              width: smallMobile
                ? "4%"
                : mobile
                ? "3%"
                : tablet
                ? "3%"
                : smallDesktop
                ? "3%"
                : desktop
                ? "3%"
                : "2%",
              position: "absolute",
              marginLeft: smallMobile
                ? "9%"
                : mobile
                ? "8%"
                : tablet
                ? "7.4%"
                : smallDesktop
                ? "8.4%"
                : desktop
                ? "8%"
                : "6.5%",
              background: "#F0F0F0",
              zIndex: 0,
            }}
          />
        </div>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            gap: "5%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <div style={{ marginLeft: "5%" }}>
            <CustomCircle
              icon={WriteIcon}
              posTop="2dvw"
              bgcolor={"#F0F0F0"}
              fill={theme.palette.primary.main}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              background: "",
              width: "90%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "600",
                fontSize: fontTitle.fontSize,
              }}
            >
              Fill out the Application Form
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Medium",
                fontSize: fontText.fontSize,
              }}
            >
              We really want to know you!
            </Typography>

            {/* 

                    {smallMobile || mobile || tablet ? (
                        <>
                        </>
                    ) : (
                        
                        <Button
                            variant="contained"
                            href='https://forms.gle/NP4Eo4RUftMv4LFq7' //TODO: atualizar link do forms
                            endIcon={<ArrowForwardIcon />}
                            sx={{
                                position: 'relative',
                                borderRadius: '10px',
                                width: "200px",
                                height: "3vmax",
                                fontSize: '20px',
                                fontWeight: 'Light',
                                textTransform: 'none',
                                marginTop: '1dvw',
                            }}
                        >
                            Apply here
                        </Button>
                    )}
                    
                    */}
          </div>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            gap: "5%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <div style={{ marginLeft: "5%" }}>
            <CustomCircle
              icon={CameraIcon}
              posTop="2dvw"
              bgcolor={"#F0F0F0"}
              fill={theme.palette.primary.main}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 3% 0 0",
              width: "80%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "600",
                fontSize: fontTitle.fontSize,
              }}
            >
              Record yourself & tell us about you
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Medium",
                fontSize: fontText.fontSize,
              }}
            >
              It is now the time to tell us more about yourself, your hobbies,
              your dreams... <br />
              Be creative!
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            gap: "5%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <div style={{ marginLeft: "5%" }}>
            <CustomCircle
              icon={GroupIcon}
              bgcolor={"#F0F0F0"}
              fill={theme.palette.primary.main}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 3% 0 0",
              width: "80%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "600",
                fontSize: fontTitle.fontSize,
              }}
            >
              Attend the Group Dynamics
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Medium",
                fontSize: fontText.fontSize,
              }}
            >
              ... and have fun! Halfway there!
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            gap: "5%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <div style={{ marginLeft: "5%" }}>
            <CustomCircle
              icon={ChatIcon}
              bgcolor={"#F0F0F0"}
              fill={theme.palette.primary.main}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 3% 0 0",
              width: "80%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "600",
                fontSize: fontTitle.fontSize,
              }}
            >
              Do a 1:1 Interview
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Medium",
                fontSize: fontText.fontSize,
              }}
            >
              Now we can focus on your chosen department!
            </Typography>
          </div>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            gap: "5%",
            alignItems: "flex-start",
            flexDirection: "row",
          }}
        >
          <div style={{ marginLeft: "5%" }}>
            <CustomCircle
              icon={InnovaIcon}
              posTop="2dvw"
              bgcolor={"#F0F0F0"}
              fill={theme.palette.primary.main}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 3% 0 0",
              width: "80%",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "600",
                fontSize: fontTitle.fontSize,
              }}
            >
              Congrats!
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#101010",
                fontFamily: theme.typography.fontFamily,
                fontWeight: "Medium",
                fontSize: fontText.fontSize,
              }}
            >
              You are finally one of us!
            </Typography>
          </div>
        </Box>
      </Box>

      {/* Third Box */}
      <Box
        sx={{
          width: tablet ? "0%" : mobile ? "0%" : smallMobile ? "0%" : "21%",
          height: "100%",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
          backgroundImage: `linear-gradient(to top, rgba(115,32,67,0.9), rgba(115,32,67,0)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.5",
          transition: "background-image 0.3s ease-in-out",
        }}
      ></Box>
    </>
  );
};

const HowToApply = ({ progress }) => {
  const theme = useTheme();

  const smallMobile = useMediaQuery({ maxWidth: 550 });
  const mobile = useMediaQuery({ minWidth: 551, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
  const largeDesktop = useMediaQuery({ minWidth: 1400 });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "3rem 0",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: "relative",
          color: theme.palette.secondary.main,
          fontFamily: theme.typography.fontFamily,
          fontWeight: "Bold",
          fontSize: tablet
            ? "7dvw"
            : mobile
            ? "8dvw"
            : smallMobile
            ? "10dvw"
            : "5.5dvw",
          marginBottom: "3rem",
        }}
      >
        How to apply?
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: tablet
            ? "60vmax"
            : mobile
            ? "75vmin"
            : smallMobile
            ? "75dvw"
            : "70vmax",
          height: smallMobile
            ? "140vmin"
            : mobile
            ? "95vmin"
            : tablet
            ? "85vmax"
            : smallDesktop
            ? "55vmax"
            : desktop
            ? "60vmax"
            : "45vmax",
          borderRadius: "20px",
          background: "white",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <MiddleBox barheight={progress} />
      </Box>
    </div>
  );
};

export default HowToApply;
