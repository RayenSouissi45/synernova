import React from "react";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import heroSection from "../../assets/images/app_development.png";
import StartProjectButton from "../buttons/StartProjectButton";
import { useTranslation } from "react-i18next";

const HeroSection = ({ scrollToForm }) => {
  const { t } = useTranslation();

  const blueTextColor = "#0077E6";
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"));

  let gapSize;
  if (isSmallScreen) {
    gapSize = theme.spacing(2.5);
  } else if (isMediumScreen) {
    gapSize = theme.spacing(3);
  } else if (isLargeScreen) {
    gapSize = theme.spacing(4.5);
  }

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        display: "flex",
        flexDirection: isSmallScreen ? "column" : "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        // marginTop: "1rem",
      }}
    >
      {/* Image Box */}
      <Box
        sx={{
          flex: isSmallScreen ? "0 0 100%" : "0 0 50%",
          textAlign: "center",
          marginBottom: isSmallScreen ? theme.spacing(3) : 0,
        }}
      >
        <img
          src={heroSection}
          alt={t("heroSection.imageAlt")}
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>

      {/* Text and Button Box */}
      <Box
        sx={{
          flex: isSmallScreen ? "0 0 100%" : "0 0 50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: { xs: "0", sm: "0 1rem", md: "0 2rem" },
          rowGap: "1rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            color: "#333",
            marginBottom: 2,
            fontFamily: "'Roboto', sans-serif",
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "3.5rem",
              lg: "4rem",
            },
            lineHeight: 1.2,
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          {t("heroSection.title")}{" "}
          <span style={{ color: blueTextColor }}>
            {t("heroSection.highlight")}
          </span>
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#555",
            lineHeight: 1.6,
            fontFamily: "'Roboto', sans-serif",
            marginBottom: 4,
            fontSize: {
              xs: "1.2rem",
              sm: "1.4rem",
              md: "1.6rem",
              lg: "1.8rem",
            },
            textAlign: "center",
            maxWidth: "75%",
          }}
        >
          {t("heroSection.description")}
        </Typography>
        <Box>
          <StartProjectButton scrollToForm={scrollToForm} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
