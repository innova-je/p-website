import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

const Mandate = ({
  title,
  year,
  mainAccomplishments,
  image,
  currentImageIndex,
  index
}) => {

  const theme = useTheme();

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
      <div // Container
        style={{
          display: "flex",
          flexDirection: "row",
          maxHeight: "500px",
          padding: "4rem 4rem 1.5rem 4rem",
          width: "80vw",
        }}
      >
        <div>
          <img // Image
            src={dynamicImage}
            alt={`Image ${currentImageIndex + index - 1}`}
            style={{
              maxHeight: "500px",
              width: "100%",
              objectFit: "cover",
              over: "hidden",
              zIndex: -1,
              borderRadius: "20px 0 0 20px",
            }}
          />
          {/*
          <div
            style={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              height: "25%",
              backgroundImage:
                "linear-gradient(to top, rgba(240,240,240,1), rgba(214, 199, 206, 0) )",
            }}
          />
        */}
        </div>

        <div // Text
          style={{
            display: "flex",
            flex: 1,
            width: "60%",
            flexDirection: "column",
            maxHeight: "500px",
            textAlign: "left",
            padding: "3rem 6rem 6rem 3rem",
            zIndex: 1,
            backgroundColor: "white",
            borderRadius: " 0 20px 20px 0",
          }}
        >
          <p // Title / Mandate
            style={{
              variant: "h4",
              color: theme.palette.primary.main,
              fontWeight: "600",
              fontSize: "3.5rem",
            }}
          >
            {title}
          </p>
          <p // Year
            style={{
              variant: "h6",
              color: theme.palette.secondary.main,
              fontWeight: "600",
              marginTop: "20px",
              fontSize: "2rem",
            }}
          >
            {year}
          </p>
          <p // Accomplishments / Description
            style={{
              color: "primary",
              fontWeight: "600",
              marginTop: "20px",
              fontSize: "1rem",
              color: theme.palette.primary.main,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {mainAccomplishments.map((accomplishment, index) => (
              <p key={index}>{accomplishment}</p>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};

export default Mandate;
