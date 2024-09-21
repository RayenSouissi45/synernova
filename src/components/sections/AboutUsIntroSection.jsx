import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const AboutUsIntroSection = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const handleScrollSlow = () => {
    const targetPosition = document.body.scrollHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 3000; // duration in milliseconds (3 seconds)
    let startTime = null;

    const scrollAnimation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(scrollAnimation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <Box
      sx={{
        padding: theme.spacing(4),
        textAlign: "center",
        backgroundColor: "#ffffff",
        color: "#2c5784",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          color: "#2c5784",
          marginBottom: theme.spacing(2),
        }}
      >
        {t("aboutUsIntro.title", "Get to Know Us")}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontSize: "1.2rem",
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        {t(
          "aboutUsIntro.subtitle",
          "Learn about our mission, meet our team, and discover our commitment to excellence."
        )}
      </Typography>
      <Button
        variant="contained"
        sx={{
          marginTop: theme.spacing(3),
          background: "linear-gradient(45deg, #2c5784 30%, #1e3e5c 90%)",
          color: "#ffffff",
          padding: theme.spacing(1, 4),
          borderRadius: "25px",
          boxShadow: "0 3px 5px 2px rgba(44, 87, 132, .3)",
          "&:hover": {
            background: "linear-gradient(45deg, #1e3e5c 30%, #2c5784 90%)",
          },
        }}
        onClick={handleScrollSlow}
      >
        {t("aboutUsIntro.cta", "Learn More")}
      </Button>
    </Box>
  );
};

export default AboutUsIntroSection;
