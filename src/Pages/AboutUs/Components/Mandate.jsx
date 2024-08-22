import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IconButton } from "@mui/material";
import Mandates from "../../../Assets/data/Mandates.json";
import { Typography, useTheme } from "@mui/material";

const Mandate = ({
  title,
  year,
  mainAccomplishments,
  image,
  currentImageIndex,
  index,
  isDesktop,
}) => {
  const [currImageIndex, setCurrentImageIndex] = useState(0);
  const mandates = Mandates.mandates;

  const handlePrevClick = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + mandates.length) % mandates.length
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mandates.length);
  };

  let visibleMandates;
  if (mandates.length === 2) {
    visibleMandates = [
      null,
      mandates[currentImageIndex],
      mandates[(currentImageIndex + 1) % mandates.length],
    ];
  } else {
    visibleMandates = [
      mandates[(currentImageIndex - 1 + mandates.length) % mandates.length],
      mandates[currentImageIndex],
      mandates[(currentImageIndex + 1) % mandates.length],
    ];
  }

  const [dynamicImage, setDynamicImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const { default: dynamicImage } = await import(
          `../../../Assets/Images/Mandates/${image}`
        );
        setDynamicImage(dynamicImage);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [image]);

  return (
    <>
      {isDesktop ? (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              margin: "0 auto",
            }}
          >
            <IconButton
              variant="contained"
              onClick={handlePrevClick}
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <ArrowBackIosIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>

            
          </div>
          <div style={{ background: "red" }}>
            <img
              src={dynamicImage}
              alt={`Image ${currentImageIndex + index - 1}`}
              style={{
                width: index === 1 ? "400px" : "320px",
                opacity: index === 1 ? 1 : 0.5,
                borderRadius: "25px",
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            {index === 1 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h4"
                  color="white"
                  style={{ fontWeight: "600", marginTop: "20px" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h6"
                  color="secondary"
                  style={{ fontWeight: "600" }}
                >
                  {year}
                </Typography>
                <Typography
                  color="white"
                  style={{
                    fontWeight: "200",
                    marginTop: "20px",
                    textAlign: "left",
                  }}
                >
                  {mainAccomplishments.map((accomplishment, index) => (
                    <li key={index}>{accomplishment}</li>
                  ))}
                </Typography>
              </div>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              margin: "0 auto",
            }}
          >
            <IconButton
              variant="contained"
              onClick={handlePrevClick}
              sx={{
                color: "primary.main",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <ArrowForwardIosIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>

            
          </div>
        </div>
      ) : (
        <div>
          <img
            src={dynamicImage}
            alt={`Image ${currentImageIndex + index - 1}`}
            style={{
              width: "100%",
              borderRadius: "25px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h4"
              color="white"
              style={{ fontWeight: "600", marginTop: "20px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="h6"
              color="secondary"
              style={{ fontWeight: "600" }}
            >
              {year}
            </Typography>
            <Typography
              color="white"
              style={{
                fontWeight: "200",
                marginTop: "20px",
                textAlign: "left",
              }}
            >
              {mainAccomplishments.map((accomplishment, index) => (
                <li key={index}>{accomplishment}</li>
              ))}
            </Typography>
          </div>
        </div>
      )}
    </>
  );
};

export default Mandate;
