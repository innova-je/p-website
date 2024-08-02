import React from "react";
import CheckIcon from "../../../images/other/simple-line-icons_check.png";
import { useMediaQuery } from "react-responsive";

const textContent = [
  {
    title: "WEBAPP FUTURÁLIA",
    features: [
      "Agenda do Evento",
      "Mapa 3D do Recinto",
      "Listagem de Expositores",
      "Roteiros Personalizados",
      "Notificações de Eventos",
    ],
    buttonText: "Futurália - A maior feira de educação em Portugal",
    buttonTextShort: "Futurália",
    link: "https://appfuturalia.fil.pt/",
  },
  {
    title: "APP THIRST PORTUGAL",
    features: [
      "Intranet Organizacional",
      "Gestão de Equipas",
      "Pedidos de Merchandising",
      "Publicação de Notícias",
      "Publicação de Eventos",
    ],
    buttonText: "Thirst Project - A maior organização de Água",
    buttonTextShort: "Thirst Project",
    link: "https://thirstproject.pt/",
  },
];

function PortfolioComponent({ image, index }) {
  const smallMobile = useMediaQuery({ maxWidth: 650 });
  const mobile = useMediaQuery({ minWidth: 651, maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const smallDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const desktop = useMediaQuery({ minWidth: 1280, maxWidth: 1399 });
  const largeDesktop = useMediaQuery({ minWidth: 1400 });

  const renderImage = (
    <div
      style={{
        width: mobile || smallMobile ? "auto" : "40%",
        padding:  mobile || smallMobile ? "25px 40px" : "0 25px",
        marginLeft:  mobile || smallMobile ? "0" : (index === 0 ? "30px" : "0"),
        marginRight: mobile || smallMobile ? "0" : (index === 1 ? "30px" : "0"),
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      <img src={image} style={{ width: "110%" }} />
    </div>
  );

  const renderText = (content) => (
    <div
      style={{
        padding: mobile || smallMobile ? "0px 20px 30px 20px" : "50px 20px",
        margin: mobile || smallMobile ? "0 auto" : "0 0 0 50px",
        width: mobile || smallMobile ? "auto" : "60%",
        display: "flex",
        flexDirection: "column",
        rowGap: mobile || smallMobile ? "20px" : "25px",
      }}
    >
      <h1>{content.title}</h1>
      <div
        style={{
          padding: mobile || smallMobile ? "0px 0px 10px 0px" : "0 0 20px 25px",
          display: "flex",
          flexDirection: "column",
          rowGap: "10px",
        }}
      >
        {content.features.map((feature, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src={CheckIcon} style={{ width: "20px" }} />
            <p style={{ fontSize: mobile || smallMobile ? "1.2rem" :"24px", fontWeight: "300" }}>{feature}</p>
          </div>
        ))}
      </div>
      <button
        style={{
          background: "#732043",
          color: "white",
          border: "none",
          borderRadius: "50px",
          width: "95%",
          height: mobile || smallMobile ? "auto" : "40px",
          padding: mobile || smallMobile ? "7px" : "0px",
          cursor: "pointer",
        }}
      >
        <a
          href={content.link}
          style={{ textDecoration: "none", color: "white", fontSize: mobile || smallMobile ? "1.2rem" : "20px" }}
        >
          {mobile || smallMobile ? content.buttonTextShort : content.buttonText}
        </a>
      </button>
    </div>
  );

  const content = textContent[index];

  return (
    <div
      style={{
        background: "white",
        width: "80%",
        height: mobile || smallMobile ? "auto" : "450px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: mobile || smallMobile ? "column" : "row",
        overflow: "hidden",
      }}
    >
      {(index === 0 || (index === 1 && (smallMobile || mobile))) && renderImage}
      {renderText(content)}
      {index === 1 && !(smallMobile || mobile) && renderImage}
      
    </div>
  );
}

export default PortfolioComponent;
