import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "@mui/material";
import { Height } from "@mui/icons-material";
import { useMediaQuery } from "react-responsive";


function ContactUsForm(){
  const form = useRef();
  const theme = useTheme();

  const isMobile = useMediaQuery({ maxWidth: 600 });
  const isTablet = useMediaQuery({ minWidth: 601, maxWidth: 1080 });


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_yb2gtvd", "template_1z75y5s", form.current, {
        publicKey: "bU18izKnnYVyMNe86",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };



  const ComponentsStyle = {
    display: "flex",
    flexDirection: "column",
    padding:"10px",
    gap:"8px",
    fontSize: (isMobile || isTablet)? "10px" :  "15px"
  };


  const InputStyle = { 
    width: "100%", 
    height: "40px", 
    borderRadius: "3px", 
    borderWidth: "1px"
  };



  return(

      <div style={{padding: "5%",
                  maxWidth: isMobile? "500px" : isTablet? "700px" : "",
                  backgroundColor:"white",
                  display: "flex",          
                  justifyContent: "center", 
                  alignItems: "center",
                  borderTopRightRadius: (isMobile | isTablet)? "0px" : "30px", 
                  borderBottomRightRadius: "30px", 
                  borderBottomLeftRadius : (isMobile | isTablet)? "30px" : "0px"
                }}>


      <form className="contact-form">

        <div style={{display:"flex", flexDirection:"row"}}>

          <div className="form-group" style={ComponentsStyle}>
            <label htmlFor="name">Enter your name *</label>
            <input type="text" id="name" name="name" placeholder="Adam Smith"  required  style={InputStyle}/>
          </div>


          <div className="form-group" style={ComponentsStyle}>
            <label htmlFor="email">Email address *</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" required style={InputStyle}/>
          </div>
        </div>

        <div style={{display:"flex", flexDirection:"row"}}>

          <div className="form-group" style={ComponentsStyle}>
            <label htmlFor="phone">Phone number *</label>
            <input type="tel" id="phone" name="phone" placeholder="+351 123 456 789" required style={InputStyle}/>
          </div>


          <div className="form-group" style={ComponentsStyle}>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" placeholder="EX Facebook" style={InputStyle}/>
          </div>
        
        </div>

        <div className="form-group" style={ComponentsStyle}>
          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" placeholder="Write your message here..." required style={{ width: "100%", height: "100px" }}></textarea>
        </div>



        <button type="submit" className="submit-button">Send your message</button>
      </form>
  </div>

  
  );
}

export default ContactUsForm;
