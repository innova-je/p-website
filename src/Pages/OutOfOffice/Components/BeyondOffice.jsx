import img5 from "../../../Assets/Images/Mandates/MandatoIV.webp";

const HeaderStyle = {
  color: "rgba(5, 37, 51, 1)", // theme.palette.secoundary.main
  fontWeight: "500",
  fontSize: "4rem",
  textAlign: "center",
};

const HeaderDescriptionStyle = {
  color: "rgba(115, 32, 67, 1)", // theme.palette.primary.main
  fontWeight: "400",
  fontSize: "1.5rem",
  textAlign: "center",
  margin: "5px 0 5% 0",
};

const SecoundHeaderStyle = {
  color: "rgba(115, 32, 67, 1)", // theme.palette.primary.main
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

const containerStyle = {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  padding: "0 0 2rem 0",
};

const ImageStyle = {
  width: "100%",
  height: "90%",
  maxHeight: "1400px",
  borderRadius: "0 10px 10px 0",
  objectFit: "cover",
  over: "hidden",
  zIndex: 0,
};

const TextContainerStyle = {
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

const BeyondOffice = () => {
  return (
    <div>
      <>
        <p style={HeaderStyle}>Beyond Office Hours</p>

        <p style={HeaderDescriptionStyle}>
          Because having fun is the secret ingredient
        </p>

        <div style={containerStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 0 0 0",
            }}
          >
            <img style={ImageStyle} src={img5} alt="Beyond Office Hours" />
            <div style={TextContainerStyle}>
              <p // Text
                style={{
                  color: "white",
                  margin: "0 3px 0 3px",
                  fontSize: "1rem",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                III Nacional Congress - October 2023
              </p>
            </div>
          </div>
          <div style={{ margin: "1% 2% 0 2%" }}>
            <p style={SecoundHeaderStyle}>
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
      </>
      <>
        <div style={containerStyle}>
          <div style={{ margin: "1% 2% 0 2%" }}>
            <p style={SecoundHeaderStyle}>
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "0 0 0 0",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "90%",
                maxHeight: "1400px",
                borderRadius: "10px 0 0 10px",
                objectFit: "cover",
                over: "hidden",
                zIndex: 0,
              }}
              src={img5}
              alt="Beyond Office Hours"
            />
            <div
              style={{
                position: "absolute",
                margin: "22.8vw 0 0 8vw",
                backgroundColor: "#052533",
                alignItems: "center",
                justifyContent: "center",
                borderTop: "5px solid white",
                borderBottom: "5px solid white",
                borderLeft: "5px solid white",
                borderRadius: "10px 0 0 10px",
                zIndex: 1,
                width: "33%",
                minHeight: "40px",
                display: "flex",
              }}
            >
              <p // Text
                style={{
                  color: "white",
                  margin: "0 3px 0 3px",
                  fontSize: "1rem",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                III Nacional Congress - October 2023
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BeyondOffice;
