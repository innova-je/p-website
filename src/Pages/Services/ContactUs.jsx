import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

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
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#732043",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: "auto",
          backgroundColor: "white",
          borderRadius: "20px",
          width: "30vw",
          padding: 40,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label
              htmlFor="user_name"
              style={{ marginBottom: "5px", fontWeight: "bold" }}
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
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
      </div>
    </div>
  );
};
