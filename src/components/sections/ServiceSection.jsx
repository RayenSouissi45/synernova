import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import seo from "../../assets/images/seo.png";
import mobile from "../../assets/images/mobile.png";
import website from "../../assets/images/website.png";
import ecommerce from "../../assets/images/ecommerce.png";
import GetInTouchButton from "../buttons/GetInTouchButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next"; // Importing the translation hook
import { Link, useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const { t } = useTranslation(); // Accessing the translation function
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate(); // Add this inside your component

  const services = [
    {
      image: mobile,
      title: t("servicesSection.mobile.title"),
      description: t("servicesSection.mobile.description"),
      type: "mobile",
    },
    {
      image: website,
      title: t("servicesSection.website.title"),
      description: t("servicesSection.website.description"),
      type: "website",
    },
    {
      image: ecommerce,
      title: t("servicesSection.ecommerce.title"),
      description: t("servicesSection.ecommerce.description"),
      type: "ecommerce",
    },
    {
      image: seo,
      title: t("servicesSection.seo.title"), // Translated title
      description: t("servicesSection.seo.description"), // Translated description
      type: "seo",
    },
  ];

  return (
    <Box
      sx={{
        padding: theme.spacing(8, 4),
        textAlign: "center",
        marginTop: theme.spacing(10),
        width: "95%",
        margin: "0 auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)",
          zIndex: -1,
        }}
      />
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          fontFamily: "'Roboto', sans-serif",
          marginBottom: theme.spacing(4),
        }}
      >
        {t("servicesSection.title")} {/* Translated section title */}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          color: "#555",
          marginBottom: theme.spacing(6),
          fontFamily: "'Roboto', sans-serif",
          lineHeight: 1.8,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {t("servicesSection.description")}{" "}
        {/* Translated section description */}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "space-between",
          gap: theme.spacing(3),
          marginTop: theme.spacing(7),
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "white",
              padding: theme.spacing(4),
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              flex: 1,
              margin: "0 auto",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
              },
              position: "relative",
              overflow: "hidden",
              "& img": {
                transition: "transform 0.2s ease-in-out",
              },
              "&:hover img": {
                transform: "scale(1.04)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                marginBottom: theme.spacing(2),
                height: "200px",
                borderRadius: "16px",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              />
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#333",
                marginBottom: theme.spacing(2),
                position: "relative",
                zIndex: 2,
              }}
            >
              {service.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#777",
                lineHeight: 1.6,
                fontFamily: "'Roboto', sans-serif",
                marginBottom: theme.spacing(3),
                position: "relative",
                zIndex: 2,
              }}
            >
              {service.description}
            </Typography>
            <Link
              to="/synernova/services"
              state={{ serviceType: service.type }}
              sx={{
                color: "#007BFF",
                textDecoration: "none",
                fontWeight: "bold",
                position: "relative",
                zIndex: 2,
                "&:hover": {
                  color: "#0056b3",
                },
              }}
            >
              {t("servicesSection.learnMore")} {/* Translated link text */}
            </Link>
          </Box>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: theme.spacing(6),
          backgroundColor: "#2196f3",
          "&:hover": {
            backgroundColor: "#1976d2",
          },
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "20px",
          padding: "10px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          textTransform: "none",
        }}
        endIcon={<ArrowForwardIcon />}
        onClick={() => {
          navigate("/synernova/services");
          window.scrollTo(0, 0); // Scrolls to the top of the page
        }}
      >
        {t("servicesSection.button")} {/* Translated button text */}
      </Button>
    </Box>
  );
};

export default ServicesSection;
