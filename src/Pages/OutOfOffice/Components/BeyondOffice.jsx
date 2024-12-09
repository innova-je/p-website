import React from "react";
import img5 from "../../../Assets/Images/Mandates/MandatoIV.webp";
import groupImage from "../../../Assets/Images/OutOfOffice/IMG_4099.png";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "react-responsive";

{
  /* COM PROBLEMAS ENTRE OS 1200PX E OS 750PX */
}

const BeyondOffice = ({ element, image, text }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 1300 });

  const BigBoxStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    width: "100%",
    padding: "0 0 2rem 0",
  };

  const TitleStyle = {
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: isMobile ? "1.5rem" : "3rem",
    textAlign: "left",
    padding: isMobile ? "2rem 2rem 1rem 2rem" : "1rem 2rem 1rem 2rem",
    textAlign: isMobile ? "center" : "",
  };

  const BodyTextStyle = {
    color: "black",
    fontWeight: "400",
    fontSize: isMobile ? "0.9rem" : "1 rem",
    textAlign: "justify",
    fontStyle: "italic",
    padding: isMobile ? "0 2rem 3rem 2rem" : "0 2rem 0 2rem",
  };

  const ImageDivStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 0",
    alignItems: isMobile ? "center" : "",
    position: "relative",
  };

  const ImageStyle = {
    width: isMobile ? "90%" : "",
    maxWidth: "700px",
    maxHeight: "400px",
    objectFit: "cover",
    overflow: "hidden",
    zIndex: 0,
    border: isMobile ? "5px solid rgba(5, 37, 51, 0.7)" : "none",
  };

  const ComboRightImageStyle = {
    ...ImageStyle,
    borderRadius: isMobile ? "10px" : "0 10px 10px 0",
  };

  const ComboLeftImageStyle = {
    ...ImageStyle,
    borderRadius: "10px 0 0 10px",
  };

  const ImageDescDivStyle = {
    position: "absolute",
    backgroundColor: "#052533",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "5px solid #F0F0F0",
    borderBottom: "5px solid #F0F0F0",
    zIndex: 1,
    minHeight: isMobile ? "30px" : "40px",
    display: "flex",
    flex: 1,
  };

  const ComboRightTextDiv = {
    ...ImageDescDivStyle,
    width: isMobile ? "70%" : "80%",
    bottom: "-6%",
    left: isMobile ? "" : "-0",
    borderRight: "5px solid #F0F0F0",
    borderLeft: isMobile ? "5px solid #F0F0F0" : "none",
    borderRadius: isMobile ? "10px" : "0 10px 10px 0",
  };

  const ComboLeftTextDiv = {
    ...ImageDescDivStyle,
    width: isMobile ? "70%" : "75%",
    overflow: "hidden",
    bottom: "-6%",
    right: "-0",
    borderLeft: "5px solid #F0F0F0",
    borderRadius: "10px 0 0 10px",
  };

  const ImageLegendStyle = {
    color: "white",
    margin: "0 3px 0 3px",
    fontSize: isMobile ? "0.7rem" : "1rem",
    justifyContent: "center",
    textAlign: "center",
  };

  return (
    <>
      {element || isMobile ? (
        <div style={BigBoxStyle}>
          <div style={ImageDivStyle}>
            <img
              style={ComboRightImageStyle}
              src={image ? img5 : groupImage}
              alt="Beyond Office Hours"
            />
            <div style={ComboRightTextDiv}>
              <p style={ImageLegendStyle}>
                III Nacional Congress - October 2023
              </p>
            </div>
          </div>

          {text ? (
            <div style={{ margin: "1% 2% 0 2%" }}>
              <p style={TitleStyle}>
                Junior Enterprises Network National Events
              </p>
              <p style={BodyTextStyle}>
                On 28-29 of October 2023 , +300 national Junior Entrepreneurs
                came to FCT NOVA for the III Junior Enterprises National
                Congress. Carefully organized by In-Nova under the motto
                "Balance to Success", we brought together an interesting lineup
                of speakers with extensive knowledge on this topic and the
                participants reflected about the best decisions for a successful
                and meaningful life.
              </p>
            </div>
          ) : (
            <div style={{ margin: "1% 2% 0 2%" }}>
              <p style={TitleStyle}>Team Weekend 2024</p>
              <p style={BodyTextStyle}>
                On June 19-20, 2024, In-Nova gathered for its annual Team
                Weekend! Over these two days, the team enjoyed a perfect blend
                of relaxation, fun, and camaraderie. This well-spent weekend was
                filled with laughter and memorable moments, showcasing the
                vibrant spirit of our team.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div style={BigBoxStyle}>
          <div style={{ margin: "2% 2% 0 2%" }}>
            <p style={TitleStyle}>Team Weekend 2024</p>
            <p style={BodyTextStyle}>
              On June 19-20, 2024, In-Nova gathered for its annual Team Weekend!
              Over these two days, the team enjoyed a perfect blend of
              relaxation, fun, and camaraderie. This well-spent weekend was
              filled with laughter and memorable moments, showcasing the vibrant
              spirit of our team.
            </p>
          </div>

          <div style={ImageDivStyle}>
            <img
              style={ComboLeftImageStyle}
              src={groupImage}
              alt="Beyond Office Hours"
            />
            <div style={ComboLeftTextDiv}>
              <p style={ImageLegendStyle}>Team Weekend 2024</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeyondOffice;
