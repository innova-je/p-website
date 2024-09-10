import React from "react";
import img5 from "../../../Assets/Images/Mandates/MandatoIV.webp";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "react-responsive";

{/* COM PROBLEMAS ENTRE OS 1200PX E OS 750PX */}


const BeyondOffice = ({ element }) => {
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 750 });

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

  const ImageStyle = {
    width: isMobile ? "80%" : "100%",
    height: "90%",
    maxHeight: "1400px",
    objectFit: "cover",
    over: "hidden",
    zIndex: 0,
    border: isMobile ? "5px solid rgba(5, 37, 51, 0.7)" : "none",
  };

  const ImageDivStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 0",
    alignItems: isMobile ? "center" : "",
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
    borderTop: "5px solid white",
    borderBottom: "5px solid white",
    zIndex: 1,
    width: isMobile ? "70%" : "33%",
    minHeight: isMobile ? "30px" : "40px",
    display: "flex",
    flex: 1,
  };

  const ComboRightTextDiv = {
    ...ImageDescDivStyle,
    margin: isMobile ? "51vw 0 0 1vw" : "24vw 0 0 0",
    borderRight: "5px solid white",
    borderLeft: isMobile ? "5px solid white" : "none",
    borderRadius: isMobile ? "10px" : "0 10px 10px 0",
  };

  const ComboLeftTextDiv = {
    ...ImageDescDivStyle,
    margin: "22.5vw 0 0 8vw",
    borderLeft: "5px solid white",
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
              src={img5}
              alt="Beyond Office Hours"
            />
            <div style={ComboRightTextDiv}>
              <p style={ImageLegendStyle}>
                III Nacional Congress - October 2023
              </p>
            </div>
          </div>
          <div style={{ margin: "1% 2% 0 2%" }}>
            <p style={TitleStyle}>Junior Enterprises Network National Events</p>
            <p style={BodyTextStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, animi! Error laborum animi voluptas vitae excepturi
              itaque nihil obcaecati fugiat facilis, quod, consequatur tempora
              corrupti. Exercitationem, hic omnis similique rerum eligendi qui
              esse dolore labore iusto corporis, dignissimos a commodi! Minus
              consequuntur culpa sunt cupiditate voluptatem molestias nulla, a
              omnis.
            </p>
          </div>
        </div>
      ) : (
        <div style={BigBoxStyle}>
          <div style={{ margin: "2% 2% 0 2%" }}>
            <p style={TitleStyle}>Junior Enterprises Network National Events</p>
            <p style={BodyTextStyle}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Suscipit, animi! Error laborum animi voluptas vitae excepturi
              itaque nihil obcaecati fugiat facilis, quod, consequatur tempora
              corrupti. Exercitationem, hic omnis similique rerum eligendi qui
              esse dolore labore iusto corporis, dignissimos a commodi! Minus
              consequuntur culpa sunt cupiditate voluptatem molestias nulla, a
              omnis.
            </p>
          </div>

          <div style={ImageDivStyle}>
            <img
              style={ComboLeftImageStyle}
              src={img5}
              alt="Beyond Office Hours"
            />
            <div style={ComboLeftTextDiv}>
              <p style={ImageLegendStyle}>
                III Nacional Congress - October 2023
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BeyondOffice;
