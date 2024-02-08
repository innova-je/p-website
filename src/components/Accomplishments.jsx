import { styled, Box, Typography } from '@mui/material'
import React from 'react'
import newsImage from '../images/MaintenancePageImages/In.Nova_III-JE-Portugal-224_1.webp'
import randomLogo from '../images/OurLogos/logos-03.png'

const TitleStyle = {
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    color: "#732043",
    fontWeight: "700",
    fontSize: "3.5vw",
  };

  const AccomplishmentBox = styled(Box)(({ theme }) => ({
    width: "27.5vw",
    height: "70vh",
    borderRadius: "20px",
    backgroundColor: "grey",
    overflow: "hidden",
    boxShadow: "10px 10px 40px #73204340"

  }));

  const AccomplishmentsRow = styled(Box)(({ theme }) => ({
    width: "100vw",
    height: "70vh",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "5%",
    marginTop: "3%"

  }));

  const TextBox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    position:"relative",
    top: "-25%",
    height: "50vh",
    zIndex:"9",
    overflow:"hidden",
    display: "flex",
    justifyContent: "center",
    clipPath: "polygon(0 18%, 100% 0%, 100% 100%, 0% 100%)",

  }));

  const Circle = styled(Box)(({ theme }) => ({
    position: "relative",
    top: "-13%",
    left: "70%",
    width: "6vw",
    height: "6vw",
    borderRadius: "100%",
    backgroundColor: "white",
    boxShadow: "5px 5px 40px #00000040",
    zIndex: "999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }));

  const NewsText = styled(Box)(({ theme }) => ({
    position:"relative",
    zIndex:"2",
    overflow:"hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    top: "-7%",
    width: "80%"
  }));

  const newsTextStyle = {
    fontSize: "1.5rem",
    fontWeight: "400",
    textAlign: "justify",
    textJustify: "center",

  }

  const dateStyle = {
    fontSize: "1rem",
    fontWeight: "400",
    textAlign: "justify",
    textJustify: "center",
    marginTop: "2%"

  }

const Accomplishments = () => {
  return (
    <div style={{marginTop: "5%",}}>
        <Typography style={TitleStyle}>Our Latest Accomplishments</Typography>
        <AccomplishmentsRow>
            <AccomplishmentBox>
                <img src={newsImage} style={{width: "100%", transform: "scale(1.4)", overflow: "hidden", objectFit: "cover", filter: "grayscale(100%)"}}/>
                <Circle>
                    <img src={randomLogo} style={{width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover",}}/>
                </Circle>
                <TextBox>
                    <NewsText>
                        <Typography style={newsTextStyle}>“Fazemos de tudo. É isso que torna este projeto interessante. 
                            Todos os dias é um assunto diferente, não há monotonia.”</Typography>
                        <Typography style={dateStyle}>janeiro 2024</Typography>
                    </NewsText>                    
                </TextBox>
            </AccomplishmentBox>
            <AccomplishmentBox>
                <img src={newsImage} style={{width: "100%", transform: "scale(1.4)", overflow: "hidden", objectFit: "cover", filter: "grayscale(100%)"}}/>
                <Circle>
                    <img src={randomLogo} style={{width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover",}}/>
                </Circle>
                <TextBox>
                    <NewsText>
                        <Typography style={newsTextStyle}>“Fazemos de tudo. É isso que torna este projeto interessante. 
                            Todos os dias é um assunto diferente, não há monotonia.”</Typography>
                        <Typography style={dateStyle}>janeiro 2024</Typography>
                    </NewsText>                    
                </TextBox>
            </AccomplishmentBox>
            <AccomplishmentBox>
                    <img src={newsImage} style={{width: "100%", transform: "scale(1.4)", overflow: "hidden", objectFit: "cover"}}/>
                    <Circle>
                        <img src={randomLogo} style={{width: "100%", transform: "scale(1)", overflow: "hidden", objectFit: "cover",}}/>
                    </Circle>
                <TextBox>
                    <NewsText>
                        <Typography style={newsTextStyle}>“Fazemos de tudo. É isso que torna este projeto interessante. 
                            Todos os dias é um assunto diferente, não há monotonia.”</Typography>
                        <Typography style={dateStyle}>janeiro 2024</Typography>
                    </NewsText>                    
                </TextBox>
            </AccomplishmentBox>
        </AccomplishmentsRow>
        
    </div>
  )
}

export default Accomplishments