import React from 'react';
import CheckIcon from '../images/other/simple-line-icons_check.png';

const textContent = [
  {
    title: "WEBAPP FUTURÁLIA",
    features: [
      "Agenda do Evento",
      "Mapa 3D do Recinto",
      "Listagem de Expositores",
      "Roteiros Personalizados",
      "Notificações de Eventos"
    ],
    buttonText: "Futurália - A maior feira de educação em Portugal",
    link: "https://appfuturalia.fil.pt/"
  },
  {
    title: "APP THIRST PORTUGAL",
    features: [
      "Intranet Organizacional",
      "Gestão de Equipas",
      "Pedidos de Merchandising",
      "Publicação de Notícias",
      "Publicação de Eventos"
    ],
    buttonText: "Thirst Project - A maior organização de Água",
    link: "https://thirstproject.pt/"
  }
];

function PortfolioComponent({ image, index }) {
  const renderImage = (
    <div style={{ width: "40%", padding: "0 25px", marginLeft: index === 0 ? "30px" : "0", marginRight: index === 1 ? "30px" : "0", display: "flex", justifyContent: "center", alignItems: "flex-end", overflow: "hidden" }}>
      <img src={image} style={{ width: "110%" }} />
    </div>
  );

  const renderText = (content) => (
    <div style={{ padding: "50px 20px", margin: "0 0 0 50px", width: "60%", display: "flex", flexDirection: "column", rowGap: "25px" }}>
      <h1>{content.title}</h1>
      <div style={{ padding: "0 0 20px 25px", display: "flex", flexDirection: "column", rowGap: "10px" }}>
        {content.features.map((feature, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "10px" }}>
            <img src={CheckIcon} style={{ width: "20px" }} />
            <p style={{ fontSize: "24px", fontWeight: "300" }}>{feature}</p>
          </div>
        ))}
      </div>
      <button style={{
        background: "#732043",
        color: "white",
        border: "none",
        borderRadius: "50px",
        width: "95%",
        height: "40px",        
        cursor: "pointer"
      }}>
        <a href={content.link} style={{textDecoration: "none", color: "white", fontSize: "20px",}}>
          {content.buttonText}
        </a>        
        </button>
    </div>
  );

  const content = textContent[index];

  return (
    <div style={{ background: "white", width: "80%", height: "450px", borderRadius: "25px", display: "flex", overflow: "hidden" }}>
      {index === 0 && renderImage}
      {renderText(content)}
      {index === 1 && renderImage}
    </div>
  );
}

export default PortfolioComponent;
