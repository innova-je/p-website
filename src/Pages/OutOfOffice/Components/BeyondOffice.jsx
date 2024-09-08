import React from "react";
import img5 from "../../../Assets/Images/Mandates/MandatoIV.webp";
import { useTheme } from "@emotion/react";

const BeyondOffice = ({ element }) => {
  const theme = useTheme();

  const BigBoxStyle = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "0 0 2rem 0",
  };

  const SecondHeaderStyle = {
    color: theme.palette.primary.main,
    fontWeight: "700",
    fontSize: "3rem",
    textAlign: "left",
    padding: "1rem 2rem 1rem 2rem",
  };

  const BodyStyle = {
    color: "black",
    fontWeight: "400",
    fontSize: "1 rem",
    textAlign: "justify",
    fontStyle: "italic",
    padding: "0 2rem 0 2rem",
  };

  const ImageStyle = {
    width: "100%",
    height: "90%",
    maxHeight: "1400px",
    objectFit: "cover",
    over: "hidden",
    zIndex: 0,
  };

  const ImageRightStyle = {
    borderRadius: "0 10px 10px 0",
  };

  const ImageLeftStyle = {
    borderRadius: "10px 0 0 10px",
  };

  const ComboRightImageStyle = {
    ...ImageStyle,
    ...ImageRightStyle,
  };

  const ComboLeftImageStyle = {
    ...ImageStyle,
    ...ImageLeftStyle,
  };

  const TextDivStyle = {
    position: "absolute",
    margin: "22.5vw 0 0 0",
    backgroundColor: "#052533",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "5px solid white",
    borderBottom: "5px solid white",
    borderRight: "5px solid white",
    borderRadius: "0 10px 10px 0",
    zIndex: 1,
    width: "33%",
    minHeight: "40px",
    display: "flex",
  };

  const LeftTextDivStyle = {
    margin: "22.8vw 0 0 8vw",
    borderLeft: "5px solid white",
    borderRadius: "10px 0 0 10px",
  };

  const RightTextDivStyle = {
    margin: "22.5vw 0 0 0",
    borderRight: "5px solid white",
    borderRadius: "0 10px 10px 0",
  };

  const ComboRightTextDiv = {
    ...TextDivStyle,
    ...RightTextDivStyle,
  };

  const ComboLeftTextDiv = {
    ...TextDivStyle,
    ...LeftTextDivStyle,
  };

  const ImageLegendStyle = {
    color: "white",
    margin: "0 3px 0 3px",
    fontSize: "1rem",
    justifyContent: "center",
    textAlign: "center",
  };

  const ImageDivStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "0 0 0 0",
  };

  return (
    <>
      {element ? (
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
            <p style={SecondHeaderStyle}>
              Junior Enterprises Network National Events
            </p>
            <p style={BodyStyle}>
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
            <p style={SecondHeaderStyle}>
              Junior Enterprises Network National Events
            </p>
            <p style={BodyStyle}>
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
