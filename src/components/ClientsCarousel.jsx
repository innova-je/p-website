import { Box, Typography, styled, ImageList} from '@mui/material'

import Futuralia from '../images/HomePageImages/ClientsLogos/FUTURALIA.webp'
import Sucees from '../images/HomePageImages/ClientsLogos/SUCEES.png'
import Orion from '../images/HomePageImages/ClientsLogos/ORION.webp'
import NovaSST from '../images/HomePageImages/ClientsLogos/NOVA_SST.webp'
import NovaID from '../images/HomePageImages/ClientsLogos/NOVA_ID.webp'
import FatiasDeCa from '../images/HomePageImages/ClientsLogos/FATIAS_DE_CA.webp'
import CardioLeather from '../images/HomePageImages/ClientsLogos/CARDIO_LEATHER.webp'

const clientsData = [
  { name: 'Futurália', logoSrc: Futuralia, width: '15%', scale: 1 },
  { name: 'Sucees', logoSrc: Sucees, width: '15%', scale: 1 },
  { name: 'Orion', logoSrc: Orion, width: '30%', scale: 0.7 },
  { name: 'NovaID', logoSrc: NovaID, width: '15%', height: '15%', scale: 0.7 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, width: '15%', scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '15%', height: '15%', scale: 0.6 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '15%', scale: 1.5 }
];


const ClientsCarousel = () => {

  const ClientsBox = styled(Box)(({ theme }) => ({
    position: "relative",
    marginTop: "5%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden", 
    whiteSpace: "nowrap",
    
  }));


const ClientsLogosCarrousel = styled(ImageList)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: transform 0.5s ease;
  overflow: hidden;
  ${animationStyles}
`;


  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: "3.5vw",
  };
  

  return (
    <ClientsBox>
      <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
      <ClientsLogosCarrousel>
        {clientsData.map((client, index) => (
          <img
            key={index}
            alt={`${client.name} Logo`}
            src={client.logoSrc}
            style={{ width: client.width, transform: `scale(${client.scale})`, margin: '0 2%' }}
          />
        ))}
      </ClientsLogosCarrousel>

    </ClientsBox>
  );
};

export default ClientsCarousel;