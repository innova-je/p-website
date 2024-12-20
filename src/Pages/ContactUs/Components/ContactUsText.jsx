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
        <Typography style={{paddingTop:"50px", paddingBottom:"20px" , color: theme.palette.primary.main, fontSize: isMobile? "30px" : isTablet? "40px" : "50px", fontWeight:"bold"}}>Contacts Us</Typography>
        <Typography style={{ maxWidth: isMobile? "250px" : "", fontSize: isMobile? "15px" : isTablet? "20" : "25px", color: theme.palette.primary.main }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetur, mauris in sodales viverra, nibh ante lobortis nibh, non </Typography>
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
      <Typography style={{ color: theme.palette.primary.main, fontSize: "32px", fontWeight:"bold" }}>
        {title}
      </Typography>
      <Typography style={{ color: theme.palette.primary.main }}>
        {content}
      </Typography>
    </div>
  );
}