import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Typography, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email'; 

const PortfolioButton = () => {
  const form = useRef();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [emailWasSent, setEmailWasSent] = useState(false);

  const toggleFormVisibility = () => {
      setIsFormVisible((prev) => !prev);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yb2gtvd", "template_1z75y5s", form.current, {
        publicKey: "bU18izKnnYVyMNe86",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsFormVisible(false);
          setEmailWasSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <button
        onClick={toggleFormVisibility}
        style={{
          backgroundColor: "white",
          opacity: "0.6",
          height: "45px",
          width: "30%",
          borderRadius: "20px",
          border: "none",
          fontSize: "1.1rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        CURIOUS ABOUT OUR LATEST WORK?
      </button>

      <div
        style={{
          height: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          width: "30%",
          padding: 40,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: isFormVisible ? "block" : "none",
          marginTop: "20px",
          opacity: 1,
          transition: "opacity 0.5s ease-in-out"
        }}
      >
        {!emailWasSent ? (
          isFormVisible && (
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="from_name"
                  style={{ marginBottom: "5px", fontWeight: "bold" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="user_email"
                  style={{ marginBottom: "5px", fontWeight: "bold" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                  required
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <label
                  htmlFor="message"
                  style={{ marginBottom: "5px", fontWeight: "bold" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                  required
                />
              </div>

              <input
                type="submit"
                value="Send"
                style={{
                  backgroundColor: "#732043",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
              />
            </form>
          )
        ) : (
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton
              style={{
                backgroundColor: "#732043",
                color: "white",
                borderRadius: "50%",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <EmailIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{
                color: "#732043",
                fontWeight: "normal",
              }}
            >
              Email Sent Successfully!
            </Typography>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioButton;
