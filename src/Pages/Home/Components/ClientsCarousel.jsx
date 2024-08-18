import { Box, Typography, styled, keyframes} from '@mui/material'
import { useMediaQuery } from 'react-responsive';

import Futuralia from '../../../Assets/Images/HomePageImages/ClientsLogos/FUTURALIA.webp'
import Sucees from '../../../Assets/Images/HomePageImages/ClientsLogos/SUCEES.png'
import Orion from '../../../Assets/Images/HomePageImages/ClientsLogos/ORION.webp'
import NovaSST from '../../../Assets/Images/HomePageImages/ClientsLogos/NOVA_SST.webp'
import NovaID from '../../../Assets/Images/HomePageImages/ClientsLogos/NOVA_ID.webp'
import FatiasDeCa from '../../../Assets/Images/HomePageImages/ClientsLogos/FATIAS_DE_CA.webp'
import CardioLeather from '../../../Assets/Images/HomePageImages/ClientsLogos/CARDIO_LEATHER.webp'

const clientsData = [//TODO: arranjar maneira de nao ser preciso duplicar os dados
  //Adicionar links para as páginas dos clientes
  { name: 'Futurália', logoSrc: Futuralia, scale: 1.5, link: "" },
  { name: 'Sucees', logoSrc: Sucees,  scale: 4.2, link: "" },
  { name: 'Orion', logoSrc: Orion, scale: 2.6, link: "" },
  { name: 'NovaID', logoSrc: NovaID,  scale: 1, link: "" },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, scale: 2.5, link: "" },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, scale: 0.8, link: "" },
  { name: 'CardioLeather', logoSrc: CardioLeather, scale: 3.5, link: "" }, 
];

const ClientsCarousel = () => {

  const mobile = useMediaQuery({ maxWidth: 600 });
  const tablet = useMediaQuery({minWidth: 601, maxWidth: 1080});
  const desktop = useMediaQuery({ minWidth: 1081 });

  const ClientsBox = styled(Box)(() => ({
    position: "relative",
    marginTop: desktop ? "5%" : (tablet ? "7%" : "15%"),
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", 
    whiteSpace: "nowrap",
  }));

  const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
`;

  const LogosSlide = styled('div')(() => ({
    display: "inline-flex",
    flexDirection: "row",
    gap: mobile ? "14%" : "10%",
    marginTop: mobile ? "10%" : (tablet ? "3%" : "3%"),
    alignItems: "center",
    justifyContent: "center",
    animation: `${slideAnimation} 30s infinite linear`,
    height: mobile ? "15vh" : (tablet ? "15vh" : "25vh"),
    width: mobile ? "400vw" : "200vw"
  }));

  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: (desktop ? "3.5dvw" : (tablet ? "4dvw" : "6dvw")),
  };

  return (
    <ClientsBox className="clients-box">
      <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
      <div>
        <LogosSlide className="logos-slide">
        {clientsData.map((client, index) => (
          <div key={index} style={{ height: '100%', width: 'auto', display: 'flex', alignItems: 'center' }}>
            <img
              alt={`${client.name} Logo`}
              src={client.logoSrc}
              style={{ width: '100%', height: 'auto', transform: mobile ? `scale(${3*client.scale})` : `scale(${client.scale})`}}
            />
          </div>
        ))}
      </LogosSlide>

      <LogosSlide style={{margin: mobile ? "0 0 0 50%" : "0 0 0 20%"}} className="logos-slide">
        {clientsData.map((client, index) => (
          <div key={index} style={{ height: '100%', width: 'auto', display: 'flex', alignItems: 'center' }}>
            <img
              alt={`${client.name} Logo`}
              src={client.logoSrc}
              style={{ width: '100%', height: 'auto', transform: mobile ? `scale(${3*client.scale})` : `scale(${client.scale})`}}
            />
          </div>
        ))}
      </LogosSlide>

      <LogosSlide style={{margin: mobile ? "0 0 0 50%" : "0 0 0 20%"}} className="logos-slide">
        {clientsData.map((client, index) => (
          <div key={index} style={{ height: '100%', width: 'auto', display: 'flex', alignItems: 'center' }}>
            <img
              alt={`${client.name} Logo`}
              src={client.logoSrc}
              style={{ width: '100%', height: 'auto', transform: mobile ? `scale(${3*client.scale})` : `scale(${client.scale})`}}
            />
          </div>
        ))}
      </LogosSlide>

      </div>
      
    </ClientsBox>
  );
};

export default ClientsCarousel;