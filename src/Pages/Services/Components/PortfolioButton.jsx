import React, { useRef, useState } from "react";
import { Typography, IconButton, useTheme, Dialog, DialogContent, DialogActions, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { ContactUs } from "./ContactUs";

const PortfolioButton = () => {
  const theme = useTheme();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [emailWasSent, setEmailWasSent] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
    setEmailWasSent(false);
  };

  return (
    <>
      <button
        onClick={toggleDialog}
        style={{
          backgroundColor: "white",
          opacity: "0.6",
          height: "45px",
          padding: "0px 15px",
          borderRadius: "20px",
          border: "none",
          fontSize: "1rem",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        CURIOUS ABOUT OUR LATEST WORK?
      </button>

      <Dialog open={isDialogOpen} onClose={toggleDialog} maxWidth="xs" fullWidth>
        <DialogContent>
          {!emailWasSent ? (
            <ContactUs type="newsletter" />
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
                  backgroundColor: theme.palette.primary.main,
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
                  color: theme.palette.primary.main,
                  fontWeight: "normal",
                }}
              >
                Email Sent Successfully!
              </Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PortfolioButton;
