import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../../../../Assets/Images/other/IW-png.png";

const CompanyLogos = ({ images }) => (
  <ImageContainer marginBottom="2dvw" marginTop="2dvw">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Company logo ${index}`}
        style={{ width: "12dvw", height: "6dvw" }}
      />
    ))}
  </ImageContainer>
);

const ImageContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "2dvw",
});

function CompaniesAndPartners() {
  const theme = useTheme();
  const companyLogos = [
    backgroundImage,
    backgroundImage,
    backgroundImage,
    backgroundImage,
    backgroundImage,
  ]; // Replace with actual image paths
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem 0",
        textAlign: "center",
        color: theme.palette.secondary.main
      }}
    >
      <Typography variant="h4">COMPANIES</Typography>
      <div>
        <CompanyLogos images={companyLogos} />
        <CompanyLogos images={companyLogos} />
        <CompanyLogos images={companyLogos} />
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Typography variant="h4">OUR PARTNERS</Typography>
        <div>
          <CompanyLogos images={companyLogos} />
        </div>
      </div>
    </section>
  );
}

export default CompaniesAndPartners;
