import React from "react";
import ContactUsForm from "./Components/ContactUsForm";
import logo from "../../Assets/Images/OurLogos/logos-10.png";
import ContactUsText from  "./Components/ContactUsText"
import { Margin, Padding } from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";
const ContactUs = () =>{

  const isMobile = useMediaQuery({ maxWidth: 650 });
  const isTablet = useMediaQuery({ minWidth: 651, maxWidth: 800 });



  const style =  {
    position: "relative",
    display:"flex", 
    flexDirection: (isMobile || isTablet)? "column" : "row", 
    backgroundColor:"grey",  
    margin: isMobile?  "80px 30px 30px 30px": isTablet? "100" : "150px", 
    maxWidth: (isMobile || isTablet)? "500px" : "", 
    justifyContent:"space-between"


  }



  return(
    <main
      style={{
      backgroundColor: "#F0F0F0",
      overflow: "hidden"
    }}>


    <div style={style}>
    
      <ContactUsText/>
      <ContactUsForm/>
      
    </div>

    </main>
  );

}


export default ContactUs;