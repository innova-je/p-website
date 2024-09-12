import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "react-responsive";

const Mandate = ({
  title,
  year,
  mainAccomplishments,
  image,
  currentImageIndex,
  index,
}) => {
  const theme = useTheme();

  const [dynamicImage, setDynamicImage] = useState(null);

  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ minWidth: 768, maxWidth: 1300 });

  const BigBoxStyle = {
    display: "flex",
    flexDirection: mobile || tablet ? "column" : "row",
    maxHeight: mobile || tablet ? "" : "500px",
    padding: mobile || tablet ? "4rem 1.5rem 1.5rem 1.5rem" : "4rem 4rem 1.5rem 4rem",
    width: "80vw",
    overflow: "hidden",
  };

  const ImageStyle = {
    width: "100%",
    maxHeight: mobile || tablet ? "400px" : "500px", 
    minHeight: "200px",  
    objectFit: "cover", 
    over: "hidden",
    zIndex: -1,
    borderRadius: mobile || tablet ? "10px 10px 0 0" : "20px 0 0 20px",
  };

  const DescBoxStyle = {
    maxHeight: "500px",
    minHeight: "200px",
    backgroundColor: "white",
    display: "flex",
    flex: 1,
    width: mobile || tablet ? "" : "60% ",
    flexDirection: "column",
    textAlign: mobile || tablet ? "center" : "left",
    padding: mobile || tablet ? "1rem 1rem 1rem 1rem" : "3rem 6rem 6rem 3rem",
    zIndex: 1,
    borderRadius: mobile || tablet ? "0 0 10px 10px" : "0 20px 20px 0",
       
    justifyContent: "center", /* Centraliza o conteúdo da imagem */
    alignItems: "center", /* Centraliza verticalmente */
    overflow: "hidden"    /* Evita que a imagem ultrapasse os limites */
  
  };

  const MandateTitleStyle = {
    variant: "h4",
    color: theme.palette.primary.main,
    fontWeight: "600",
    fontSize: mobile ? "2rem" : tablet ? "3rem" : "3.5rem",
    
  };

  const MandateYearStyle = {
    variant: "h6",
    color: theme.palette.secondary.main,
    fontWeight: "600",
    marginTop: "20px",
    fontSize: mobile ? "1rem" : tablet ? "1.5rem" : "2rem",
  };

  const MandateDescriptionStyle = {
    color: "primary",
    fontWeight: "600",
    marginTop: "20px",
    fontSize: mobile ? "0.9rem" : tablet ? "1rem" : "1rem",
    color: theme.palette.primary.main,
    fontFamily: theme.typography.fontFamily,
  };

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
      <div style={BigBoxStyle}>
      <div style={{ 
        display: "flex",
        justifyContent: "center", /* Centraliza o conteúdo da imagem */
        alignItems: "center", /* Centraliza verticalmente */
        overflow: "hidden"    /* Evita que a imagem ultrapasse os limites */
      }}>
          <img // Image
            src={dynamicImage}
            alt={`Image ${currentImageIndex + index - 1}`}
            style={ImageStyle}
          />
        </div>

        <div style={DescBoxStyle}>
          <p style={MandateTitleStyle}>{title}</p>
          <p style={MandateYearStyle}>
            {year}
          </p>
          <p style={MandateDescriptionStyle}>
            {mainAccomplishments.map((accomplishment, index) => (
              <p key={index}>{accomplishment}</p>
            ))}
          </p>
        </div>
      </div>
  );
};

export default Mandate;
