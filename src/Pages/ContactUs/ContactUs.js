import React from "react";
import ContactUsForm from "./Components/ContactUsForm";
import logo from "../../Assets/Images/OurLogos/logos-10.png";
import ContactUsText from  "./Components/ContactUsText"
import { Margin, Padding } from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";



const ContactUs = () =>{

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });



  const style =  {
    position: "relative",
    display:"flex", 
    flexDirection: (isMobile || isTablet)? "column" : "row", 
    backgroundColor:"grey",  
    margin: isMobile?  "80px 30px 30px 30px" : "150px", 
    maxWidth: isMobile? "500px" : isTablet? "700px" : "", 
    justifyContent:"space-between",
    borderRadius: "30px",
  }



  return(
    <main
      style={{
      backgroundColor: "#F0F0F0",
      background: "radial-gradient(200% 400% at 0% 0%,rgb(219, 200, 208) 0%,#732043 100%)",
      overflow: "hidden",
    }}>


    <div style={style}>
    
      <ContactUsText/>
      <div
          style={{
            position: "absolute",
            right: "8rem",
            top: "-6%",
            width: "800px",
            zIndex: 2
          }}
        >
          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            style={{
              width: "120%",
              height: "80%",
              objectFit: "contain",
              opacity: 0.25,
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.5), rgba(0,0,0,0))",
            }}
          />
        </div>
        
              <ContactUsForm/>
      
    </div>

    </main>
  );

}


export default ContactUs;