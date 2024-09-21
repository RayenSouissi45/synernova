import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import LaptopImage from "../../assets/images/laptopImage.png";
import BackgroundCircleIcon from "../../assets/icons/backgroundCircleIcon";
import BackgroundLeftCircleIcon from "../../assets/icons/backgroundLeftCircleIcon";
import BackgroundMiddleCircleIcon from "../../assets/icons/backgroundMiddleCircleIcon";
import { useTranslation } from "react-i18next";

const AboutUsSectionAboutUsPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        maxWidth: "none",
      }}
    >
      {/* Background Icons */}
      <Box
        sx={{
          position: "absolute",
          top: isSmallScreen ? "10%" : "0%",
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
          top: "50%",
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
          top: isSmallScreen ? "10%" : "5%",
          left: isSmallScreen ? "0%" : "0%",
          width: isSmallScreen ? "40px" : "80px",
          zIndex: 0,
        }}
      >
        <BackgroundLeftCircleIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column-reverse" : "row",
          justifyContent: "space-between",
          marginBottom: isSmallScreen ? theme.spacing(2) : 0,
          padding: theme.spacing(2),
          gap: theme.spacing(3),
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: isSmallScreen ? null : "50%",
            padding: theme.spacing(3),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            textAlign: "left",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontFamily: "'Roboto', sans-serif",
              fontSize: "2.1rem",
              marginBottom: theme.spacing(2),
            }}
          >
            {t("aboutUsSectionAboutUsPage.subtitle")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontFamily: "'Roboto', sans-serif",
              lineHeight: 1.6,
              fontSize: "1.1rem",
              textAlign: "left",
            }}
          >
            {t("aboutUsSectionAboutUsPage.paragraph1")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontFamily: "'Roboto', sans-serif",
              lineHeight: 1.6,
              fontSize: "1.1rem",
              textAlign: "left",
              marginTop: theme.spacing(2),
            }}
          >
            {t("aboutUsSectionAboutUsPage.paragraph2")}
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            maxWidth: isSmallScreen ? null : "50%",
            display: "flex",
            justifyContent: "center",
            marginLeft: theme.spacing(2),
          }}
        >
          <img
            src={LaptopImage}
            alt={t("aboutUsSection.imageAlt")}
            style={{
              width: "90%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsSectionAboutUsPage;
