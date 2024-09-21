import React from "react";
import { Box, Typography } from "@mui/material";
import GetInTouchButton from "../buttons/GetInTouchButton";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import aboutImage from "../../assets/images/AboutUs.png"; // Import the image
import BackgroundMiddleCircleIcon from "../../assets/icons/backgroundMiddleCircleIcon";
import BackgroundLeftCircleIcon from "../../assets/icons/backgroundLeftCircleIcon";
import { useTranslation } from "react-i18next";

const WhyChooseUsSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const blueTextColor = "#38bdf8";
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(4),
        paddingBottom: theme.spacing(6),
        marginTop: theme.spacing(9),
        marginBottom: theme.spacing(9),
        margin: "0 auto", // Center the section horizontally
        paddingX: isSmallScreen ? null : "5%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "36%",
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

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#333",
          fontFamily: "'Roboto', sans-serif",
          marginBottom: theme.spacing(3),
          fontSize: isSmallScreen ? "2rem" : "2.5rem",
          textAlign: "center",
        }}
      >
        {t("whyChooseUsSection.title")}{" "}
        <span style={{ color: blueTextColor }}>
          {t("whyChooseUsSection.highlight")}
        </span>{" "}
        ?
      </Typography>

      {/* Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: isSmallScreen ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%", // Ensure the content takes up the full width
        }}
      >
        {/* Left Side - Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: isSmallScreen ? "center" : "left",
            paddingRight: isSmallScreen ? 0 : theme.spacing(4),
            marginBottom: isSmallScreen ? theme.spacing(4) : 0,
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontFamily: "'Roboto', sans-serif",
              marginBottom: theme.spacing(4),
              fontSize: "3.1rem",
              lineHeight: 1.6,
            }}
          >
            {t("whyChooseUsSection.excellence")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontFamily: "'Roboto', sans-serif",
              marginBottom: theme.spacing(4),
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            {t("whyChooseUsSection.paragraph1")}
          </Typography>
          {/* <GetInTouchButton /> */}
        </Box>

        {/* Right Side - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: isSmallScreen ? "center" : "flex-end",
          }}
        >
          <img
            src={aboutImage}
            alt={t("whyChooseUsSection.imageAlt")}
            style={{
              width: isSmallScreen ? "100%" : "80%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUsSection;
