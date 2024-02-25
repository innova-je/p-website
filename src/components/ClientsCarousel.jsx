import { Box, Typography, styled, keyframes} from '@mui/material'

import Futuralia from '../images/HomePageImages/ClientsLogos/FUTURALIA.webp'
import Sucees from '../images/HomePageImages/ClientsLogos/SUCEES.png'
import Orion from '../images/HomePageImages/ClientsLogos/ORION.webp'
import NovaSST from '../images/HomePageImages/ClientsLogos/NOVA_SST.webp'
import NovaID from '../images/HomePageImages/ClientsLogos/NOVA_ID.webp'
import FatiasDeCa from '../images/HomePageImages/ClientsLogos/FATIAS_DE_CA.webp'
import CardioLeather from '../images/HomePageImages/ClientsLogos/CARDIO_LEATHER.webp'

const clientsData = [//TODO: arranjar maneira de nao ser preciso duplicar os dados
  //Adicionar links para as páginas dos clientes
  { name: 'Futurália', logoSrc: Futuralia, width: '15%', scale: 1 },
  { name: 'Sucees', logoSrc: Sucees, width: '13%', scale: 1 },
  { name: 'Orion', logoSrc: Orion, width: '20%', scale: 1 },
  { name: 'NovaID', logoSrc: NovaID, width: '15%', height: '15%', scale: 0.7 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, width: '10%', scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '15%', height: '15%', scale: 0.6 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '15%', scale: 2 },
  { name: 'Futurália', logoSrc: Futuralia, width: '15%', scale: 1 },
  { name: 'Sucees', logoSrc: Sucees, width: '13%', scale: 1 },
  { name: 'Orion', logoSrc: Orion, width: '20%', scale: 1 },
  { name: 'NovaID', logoSrc: NovaID, width: '15%', height: '15%', scale: 0.7 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, width: '10%', scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '15%', height: '15%', scale: 0.6 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '15%', scale: 2 },
  { name: 'Futurália', logoSrc: Futuralia, width: '15%', scale: 1 },
  { name: 'Sucees', logoSrc: Sucees, width: '13%', scale: 1 },
  { name: 'Orion', logoSrc: Orion, width: '20%', scale: 1 },
  { name: 'NovaID', logoSrc: NovaID, width: '15%', height: '15%', scale: 0.7 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, width: '10%', scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '15%', height: '15%', scale: 0.6 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '15%', scale: 2 },
  { name: 'Futurália', logoSrc: Futuralia, width: '15%', scale: 1 },
  { name: 'Sucees', logoSrc: Sucees, width: '13%', scale: 1 },
  { name: 'Orion', logoSrc: Orion, width: '20%', scale: 1 },
  { name: 'NovaID', logoSrc: NovaID, width: '15%', height: '15%', scale: 0.7 },
  { name: 'Fatias de Cá', logoSrc: FatiasDeCa, width: '10%', scale: 0.6 },
  { name: 'Nova School of Science and Technology', logoSrc: NovaSST, width: '15%', height: '15%', scale: 0.6 },
  { name: 'CardioLeather', logoSrc: CardioLeather, width: '15%', scale: 2 },
  
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
    transform: "scale(1)"
  }));

  const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

  const LogosSlide = styled('div')(({ theme }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    animation: `${slideAnimation} 20s infinite linear`,
    '&:hover': {
      animationPlayState: 'paused',
    },
  }));

  const ClientsAndPartnersStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: "3.5vw",
  };
  

  return (
    <ClientsBox className='clients-box'>
      <Typography style={ClientsAndPartnersStyle}>Who Trusted Us</Typography>
        <LogosSlide className="logos-slide">
        {clientsData.map((client, index) => (
          <img
            key={index}
            alt={`${client.name} Logo`}
            src={client.logoSrc}
            style={{ width: client.width, transform: `scale(${client.scale})`, margin: '0 2%' }}
          />
        ))}
      </LogosSlide>
    </ClientsBox>
  );
};


export default ClientsCarousel;