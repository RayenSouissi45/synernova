import React, { useRef } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import seo from "../assets/images/seo.png";
import mobile from "../assets/images/mobile.png";
import website from "../assets/images/website.png";
import ecommerce from "../assets/images/ecommerce.png";
import FormSection from "../components/sections/FormSection";
import BackgroundMiddleCircleIcon from "../assets/icons/backgroundMiddleCircleIcon";
import BackgroundCircleIcon from "../assets/icons/backgroundCircleIcon";
import BackgroundLeftCircleIcon from "../assets/icons/backgroundLeftCircleIcon";
import { useTheme, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ServiceCard = ({ image, title, description, buttonText, onClick }) => (
  <Grid
    container
    justifyContent="center"
    sx={{
      marginBottom: "6rem",
      padding: "0 2rem",
      position: "relative",
      zIndex: 1,
      marginTop: "3rem",
    }}
  >
    <Grid item xs={12} md={8} textAlign="center">
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", marginBottom: "1rem", color: "#333" }}
      >
        {title}
      </Typography>
    </Grid>
    <Grid item xs={12} md={8} display="flex" justifyContent="center">
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: { xs: "100%", sm: "90%", md: "80%", lg: "70%", xl: "60%" },
          maxWidth: "1000px",
          marginBottom: "2rem",
          // borderRadius: "8px",
          // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      />
    </Grid>
    <Grid item xs={12} md={8} textAlign="center">
      <Typography variant="body1" sx={{ marginBottom: "2rem", color: "#555" }}>
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          // marginTop: theme.spacing(6),
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
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </Grid>
  </Grid>
);

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      image: mobile,
      title: t("services.mobileDevelopment.title"),
      description: t("services.mobileDevelopment.description"),
      buttonText: t("services.mobileDevelopment.buttonText"),
    },
    {
      image: website,
      title: t("services.websiteDevelopment.title"),
      description: t("services.websiteDevelopment.description"),
      buttonText: t("services.websiteDevelopment.buttonText"),
    },
    {
      image: ecommerce,
      title: t("services.ecommerceSolutions.title"),
      description: t("services.ecommerceSolutions.description"),
      buttonText: t("services.ecommerceSolutions.buttonText"),
    },
    {
      image: seo,
      title: t("services.seoOptimization.title"),
      description: t("services.seoOptimization.description"),
      buttonText: t("services.seoOptimization.buttonText"),
    },
  ];
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box
      sx={{
        padding: "2rem 0",
        background: `
        linear-gradient(to bottom, white, #ECF9FF)`,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem",
          // backgroundColor: "#1976d2",
          color: "black",
          // borderRadius: "10px",
          // boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          maxWidth: { xl: "70%", lg: "80", md: "90" },
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ color: "#2c5784", fontWeight: "bold" }}
        >
          {t("servicesIntro.welcome")}
        </Typography>
        <Typography
          variant="h6"
          component="p"
          gutterBottom
          sx={{ lineHeight: 1.6, color: "#666" }}
        >
          {t("servicesIntro.exploreServices")}
        </Typography>
        <Typography variant="body1" component="p" sx={{ color: "#666" }}>
          {t("servicesIntro.dedicatedTeam")}
        </Typography>
      </Box>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          onClick={scrollToForm}
        />
      ))}
      <div ref={formRef}>
        <FormSection />
      </div>
      <Box
        sx={{
          position: "absolute",
          top: isSmallScreen ? "10%" : "100%",
          right: isSmallScreen ? "5%" : "2%",
          width: isSmallScreen ? "50px" : "100px",
          zIndex: 0,
        }}
      >
        <BackgroundCircleIcon />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "130%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: isSmallScreen ? "30px" : "60px",
          zIndex: 0,
        }}
      >
        <BackgroundMiddleCircleIcon />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: isSmallScreen ? "10%" : "20%",
          left: isSmallScreen ? "0%" : "0%",
          width: isSmallScreen ? "40px" : "80px",
          zIndex: 0,
        }}
      >
        <BackgroundLeftCircleIcon />
      </Box>
    </Box>
  );
};

export default Services;