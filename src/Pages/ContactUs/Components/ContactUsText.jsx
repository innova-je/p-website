import React from "react";
import { Typography, useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";


function ContactUsText(){
    const theme = useTheme();
    const isMobile = useMediaQuery({ maxWidth: 629 });
    const isTablet = useMediaQuery({ minWidth: 630, maxWidth: 1080 });
  

  
  

    return(
      <div style={{
        paddingLeft:"10%",
        display:"flex",
        flexDirection:"column",
        maxWidth:"500px",
        padding:"5%",
      }}>

        {/* // isMobile ? "2.8rem" : isTablet ? "10vw" : "6rem"; */}
        <Typography style={{paddingTop:"50px", 
                            paddingBottom:"20px" , 
                            fontSize: "2.5rem",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            backgroundImage:"linear-gradient(to right, #052533, #732043)",
                            fontWeight: "bold",
                          }}
                            >
                              Contacts Us
                            </Typography>
        
        <Typography style={{ maxWidth: isMobile? "250px" : "", fontWeight: "bold",fontSize: isMobile? "15px" : isTablet? "20" : "25px", color: theme.palette.primary.main
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris in sodales viverra, nibh ante lobortis nibh, non </Typography>
        
        
        
        
        
        <ContactItem title="Send Us an Email" content="emaildeexemplo@mail.com" />
        <ContactItem title="Give Us A Call" content="+351 913625632" />
      </div>
    );
}

export default ContactUsText;


function ContactItem({ title, content }) {
  const theme = useTheme();

  return (
    <div style={{ paddingTop: "40px" }}>
      <Typography style={{ WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            color: "transparent",
                            backgroundImage:"linear-gradient(to right, #052533, #732043)",
                            fontWeight: "bold", fontSize: "32px", fontWeight:"bold" }}>
        {title}
      </Typography>

      <Typography style={{ color: theme.palette.primary.main , fontWeight:"bold"}}>
        {content}
      </Typography>
    </div>
  );
}