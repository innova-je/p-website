import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTheme } from "@mui/material";

export const ContactUs = ({ type }) => {
  const form = useRef();
  const theme = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_yb2gtvd", "template_1z75y5s", form.current, {
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

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      <h1 style={{ color: theme.palette.primary.main }}>Receive Our Portfolio</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label
          htmlFor="to_name"
          style={{ marginBottom: "5px", fontWeight: "bold" }}
        >
          Name
        </label>
        <input
          type="text"
          name="to_name"
          id="to_name"
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

      {type === "message" && (
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
      )}

      <input
        type="submit"
        value="Send"
        style={{
          backgroundColor: theme.palette.primary.main,
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
  );
};
